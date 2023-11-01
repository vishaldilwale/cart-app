import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../ProductCard';
import { removeFromCart, updateItemCount } from '../../store/actions/cart';
import { CartWrapper } from './style';
import { TitleWrapper } from '../ProductList/style';
import { TEXT } from '../../constants/text';
import { getCartTotalValue } from '../../utils';
import {  ProductInterface, ReducerStates } from '../../constants/interface';

const CartList: React.FC = () => {
    const state = useSelector((state:ReducerStates) => state.cartReducer);
    const { cartList } = state;
    const dispatch = useDispatch();

    const handleRemoveFromCart = (product: ProductInterface) => {
        dispatch(removeFromCart(product))
    }
    const onQuantityAdd = (product: ProductInterface) => {
        const cartProductIndex = cartList.findIndex((p: ProductInterface) => p.id === product?.id);
        let prevCartProduct = cartList[cartProductIndex];
        const prevQuantity = prevCartProduct?.quantity || 0;
        const newProduct = { ...prevCartProduct, quantity: prevQuantity + 1 };
        cartList[cartProductIndex] = newProduct;
        dispatch(updateItemCount(cartList));
    }
    const onQuantityRemove = (product: ProductInterface) => {
        const cartProductIndex = cartList.findIndex((p: ProductInterface) => p.id === product?.id);
        let prevCartProduct = cartList[cartProductIndex];
        const prevQuantity = prevCartProduct?.quantity || 0;
        if (prevQuantity === 1) {
            dispatch(removeFromCart(product))
        } else {
            const newProduct = { ...prevCartProduct, quantity: prevQuantity - 1 };
            cartList[cartProductIndex] = newProduct;
            dispatch(updateItemCount(cartList));
        }
    };

    return (
        <div>
            <TitleWrapper>
                <h2>{TEXT.cart.list}</h2>
                <span>{TEXT.cart.totalAmount} : &#8377; <b>{getCartTotalValue(cartList)}</b></span>
            </TitleWrapper>
            <CartWrapper>
                {cartList?.map((product: any) => (
                    <ProductCard key={product.id} product={product} onCartRemove={handleRemoveFromCart} onQuantityAdd={onQuantityAdd} onQuantityRemove={onQuantityRemove} />
                ))}
            </CartWrapper>
        </div>
    );
};

export default CartList;