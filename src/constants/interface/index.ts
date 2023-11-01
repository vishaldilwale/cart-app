export interface ProductInterface {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    title: string,
    quantity?: number | 0
}

export interface ReduxAction{
    type:string;
    payload: any
}

export interface ReducerStates{
    cartReducer: {
        cartList: ProductInterface[];
    },
}
