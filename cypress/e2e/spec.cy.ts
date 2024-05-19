describe('Burger constructor', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.intercept('GET', '/api/auth/user', {fixture: "user.json"}).as("getUserInfo");
    cy.intercept('GET', '/api/ingredients',  {fixture: "ingredoents.json"}).as("getIngredients");
    cy.intercept("POST", "api/orders", { fixture: "order.json" }).as("postOrder");

    window.localStorage.setItem(
      "refreshToken",
      JSON.stringify("test-refreshToken")
    )
  
    window.localStorage.setItem(
      "accessToken",
      JSON.stringify("test-accessToken")
    )
  })

  afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  })

  it("should correctly drag items into burger-constructor", () => {
    //Act
    cy.get('#burger-ingredients [href$="/ingredients/643d69a5c3f7b9001cfa093c"]').find('[draggable$="true"]').trigger('dragstart');
    cy.get('#burger_constructor').trigger('drop');

    cy.get('#burger-ingredients [href$="/ingredients/643d69a5c3f7b9001cfa0941"]').find('[draggable$="true"]').trigger('dragstart');
    cy.get('#burger_constructor').trigger('drop');

    cy.get('#burger-ingredients [href$="/ingredients/643d69a5c3f7b9001cfa0941"]').find('[draggable$="true"]').trigger('dragstart');
    cy.get('#burger_constructor').trigger('drop');

    cy.get('#burger-ingredients [href$="/ingredients/643d69a5c3f7b9001cfa093e"]').find('[draggable$="true"]').trigger('dragstart');
    cy.get('#burger_constructor').trigger('drop');

     //Assert
    cy.get('#burger_constructor').find('[class^="burger-constructor_scroller"]').get('span [class^="constructor-element"]:contains("Биокотлета из марсианской Магнолии")').should('have.length', 2);
    cy.get('#burger_constructor').find('[class^="burger-constructor_scroller"]').get('#burger_constructor span [class^="constructor-element"]:contains("Филе Люминесцентного тетраодонтимформа")').should('have.length', 1);

    cy.get('#burger_constructor').should("contain", 'Краторная булка N-200i (верх)');
    cy.get('#burger_constructor').should("contain", 'Краторная булка N-200i (низ)');
  })

  it("should anable order button by dragging a bun", () => {
     //Arrange
    cy.get('button').contains('Оформить заказ').should('be.disabled');

     //Act
     cy.get('#burger-ingredients [href$="/ingredients/643d69a5c3f7b9001cfa093c"]').find('[draggable$="true"]').trigger('dragstart');
     cy.get('#burger_constructor').trigger('drop');

     //Assert
     cy.get('button').contains('Оформить заказ').should('not.be.disabled');
  })

  it('should make an order', () => {
     //Act
    cy.get('#burger-ingredients [href$="/ingredients/643d69a5c3f7b9001cfa093c"]').find('[draggable$="true"]').trigger('dragstart');
    cy.get('#burger_constructor').trigger('drop');
    cy.get('button').contains('Оформить заказ').click();
    cy.wait("@postOrder");

    //Assert
    cy.get('#react-modals')
      .should("contain", 'Оформление заказа')
      .and("contain", "123")
      .and("contain", "Ваш заказ начали говить")
      .and("contain", "Дождитесь готовности на орибитальной станции");
  })

  it('should drag ingredients in burger_constructor with correct sorting', () => {
    //Arrange
    cy.get('#burger-ingredients [href$="/ingredients/643d69a5c3f7b9001cfa0941"]').find('[draggable$="true"]').trigger('dragstart');
    cy.get('#burger_constructor').trigger('drop');

    cy.get('#burger-ingredients [href$="/ingredients/643d69a5c3f7b9001cfa093e"]').find('[draggable$="true"]').trigger('dragstart');
    cy.get('#burger_constructor').trigger('drop');

    const dataTransfer = new DataTransfer();

    //Act
    //cy.get('#burger_constructor [draggable$="true"]:first').should("contain", 'Биокотлета из марсианской Магнолии');
    //cy.get('#burger_constructor [draggable$="true"]:last').should("contain", 'Филе Люминесцентного тетраодонтимформа');
    
    cy.get('#burger_constructor [draggable$="true"]:first').trigger('dragstart', {dataTransfer})
    cy.get('#burger_constructor [draggable$="true"]:last').trigger('drop', {dataTransfer})


    //Assert
    cy.get('#burger_constructor [draggable$="true"]:first').should("contain", 'Филе Люминесцентного тетраодонтимформа');
    cy.get('#burger_constructor [draggable$="true"]:last').should("contain", 'Биокотлета из марсианской Магнолии');
  })

  it('should open modal window of ingredient', () => {
    //Act
    cy.get('#burger-ingredients [href$="/ingredients/643d69a5c3f7b9001cfa0941"]').click();

    //Assert
    cy.location('pathname').should('eq', '/ingredients/643d69a5c3f7b9001cfa0941');
    cy.get('#react-modals')
      .should("contain", 'Детали игредиента')
      .and("contain", "Биокотлета из марсианской Магнолии");
  })
})