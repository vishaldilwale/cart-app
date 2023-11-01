import React from 'react';
import { ProductInterface } from '../../constants/interface';
import { TEXT } from '../../constants/text';
import { getTrimmedText } from '../../utils';
import { AddToCartBtn, Button, CardActionWrapper, CardActionWrapperCart, CardImg, CardWrapper, FlexBox, QuantityIconBtn, QuantityValueWrapper, QuantityWrapper, WidthWrapper } from './style';

interface ProductCardProps {
    onAddToCartClick?: (p:ProductInterface)=>void;
    product: ProductInterface;
    cartBtnText?: string;
    onQuantityAdd?: (p:ProductInterface)=>void;
    onQuantityRemove?: (p:ProductInterface)=>void;
    onCartRemove?: (p:ProductInterface)=>void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCartClick, cartBtnText = TEXT.product.card.addToCartText, onQuantityAdd, onQuantityRemove, onCartRemove }) => {
    const { title='', image, price, description='' }:ProductInterface = product || {};

    const cartAction = (
        <CardActionWrapperCart>
            <Button width='50%' height='50px' onClick={() => onCartRemove && onCartRemove(product)}>{TEXT.cart.removeFromCartText}</Button>
            <QuantityWrapper>
                <QuantityIconBtn onClick={() => onQuantityRemove && onQuantityRemove(product)}>{'-'}</QuantityIconBtn>
                <QuantityValueWrapper>
                    <h4 title={description}>{product?.quantity}</h4>
                </QuantityValueWrapper>
                <QuantityIconBtn onClick={() =>onQuantityAdd && onQuantityAdd(product)}>{'+'}</QuantityIconBtn>
            </QuantityWrapper>
        </CardActionWrapperCart>
    );

    const productActions = (
        <CardActionWrapper>
            <h6 title={description}>{getTrimmedText(description, 90)}</h6>
            <AddToCartBtn onClick={() => onAddToCartClick && onAddToCartClick(product)}>{cartBtnText}</AddToCartBtn>
        </CardActionWrapper>
    );

    const getCardFooter = () => {
        if (onQuantityAdd) {
            return cartAction
        } else {
            return productActions
        }
    }

    return (
        <CardWrapper>
            <FlexBox>
                <WidthWrapper width='30%'>
                    <CardImg src={image} alt='productImg' />
                </WidthWrapper>
                <WidthWrapper width='70%'>
                    <h4 title={title}>{getTrimmedText(title, 25)}</h4>
                    <h3>&#8377; {price}</h3>
                </WidthWrapper>
            </FlexBox>
            <hr />
            {getCardFooter()}
        </CardWrapper>
    );
};

export default ProductCard;