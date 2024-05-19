// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

import {data} from '../../src/utils/data'

describe('Burger constructor', () => {
  beforeAll(() => {
    cy.visit('/');

    cy.intercept('GET', 'https://norma.nomoreparties.space/api/auth/user', {fixture: "user.json"})
    cy.intercept('GET', 'https://norma.nomoreparties.space/api/ingredients',  {fixture: "ingredoents.json"})

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
})