export type TIngredient = {
    type: string;
    _id: string;
    name: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
};

export type TConstructorIngredient = TIngredient & {uniqueId: string}

export type TUserInfo = {
    name?: string;
    email?: string;
    password?: string;
}