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

export type TOrder = {
    createdAt: Date | unknown;
    ingredients: Array<TIngredient>;
    name: string | unknown;
    owner: TOwner;
    price: number | unknown;
    status: string | unknown;
    number: number;
}

export type TOwner = Omit<TUserInfo, 'password'> & {
    createdAt: Date | unknown;
    updatedAt: Date | unknown;
}

export type TResponseBody<TDataKey extends string = '', TDataType = {}> = {
    [key in TDataKey]: TDataType;
} & {
  success: boolean;
  message?: string;
}

  export type TOrderResponseBody = TResponseBody<'order', TOrder> & { name: string; }

  export type TUserLogInResponseBody = TResponseBody<'user', Omit<TUserInfo, 'password'>> & {
    accessToken: string,
    refreshToken: string,
  }

  export type TGetIngredientsResponseBody = TResponseBody<'data', Array<TIngredient>>;


  
interface CustomBody<T extends any> extends Body {
  json(): Promise<T>;
}

export interface CustomResponse<T> extends CustomBody<T> {
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly trailer: Promise<Headers>;
  readonly type: ResponseType;
  readonly url: string;
  clone(): Response;
}