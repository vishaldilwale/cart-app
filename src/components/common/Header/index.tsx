import React from 'react';
import { useSelector } from 'react-redux';
import { PATH } from '../../../constants/path';
import { HeaderWrapper, LinkWrapper } from './style';

const Header: React.FC = () => {
    const state = useSelector((state: any) => state.cartReducer);
    const { cartList } = state;
    return (
        <HeaderWrapper>
            <LinkWrapper to={PATH.cart}>Cart {cartList?.length > 0 && (<p>{` ( ${cartList?.length} )`}</p>)}</LinkWrapper>
        </HeaderWrapper>
    );
};

export default Header;