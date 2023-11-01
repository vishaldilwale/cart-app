import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../ProductCard';
import axios from 'axios';
import { setProductList } from '../../store/actions/product';
import { addToCart } from '../../store/actions/cart';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/path';
import { setLoading } from '../../store/actions/loader';
import { TitleWrapper } from './style';
import { API } from '../../constants/api';
import { TEXT } from '../../constants/text';
import { ProductInterface } from '../../constants/interface';

const ProductList: React.FC = () => {
  const state = useSelector((state: any) => state.productsReducer);
  const cartState = useSelector((state: any) => state.cartReducer);
  const loaderState = useSelector((state: any) => state.loaderReducer);
  const { productList } = state;
  const { cartList } = cartState;
  const { loading } = loaderState;
  const dispatch = useDispatch();
  const [limit, setLimit] = useState<number>(5);
  const totalProducts = 20;

  const navigate = useNavigate();

  const getProductListFromAPI = async (productsLimit?: number) => {
    const apiLimit = productsLimit || limit;
    if (productsLimit) {
      setLimit(productsLimit)
    }
    dispatch(setLoading(true))
    const results = await axios.get(`${API.getProducts}?limit=${apiLimit}`);
    const allProducts = results?.data;
    dispatch(setProductList(allProducts));
    dispatch(setLoading(false))
  };

  useEffect(() => {
    getProductListFromAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddToCart = (product: ProductInterface) => {
    const isPresentInCart = cartList?.find((cartItem: ProductInterface) => cartItem?.id === product?.id);
    if (isPresentInCart) {
      navigate(PATH.cart);
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const handleScroll = () => {
    const screenHeight = window.innerHeight + document.documentElement.scrollTop - 10;
    const docHeight = document.documentElement.offsetHeight - 10;
    const fetch = Math.abs(screenHeight - docHeight) < 5;
    if (!fetch || loading) {
      return;
    }
    const newLimit = limit + 5;
    if (newLimit <= totalProducts) {
      getProductListFromAPI(newLimit);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <>
      <TitleWrapper>
        <h2>{TEXT.product.list}</h2>
        <span>Showing {productList?.length} of {totalProducts}</span>
      </TitleWrapper>
      {productList?.map((product: ProductInterface) => {
        const isPresentInCart = cartList?.find((cartItem: ProductInterface) => cartItem?.id === product?.id);
        const cartBtnText = isPresentInCart ? TEXT.product.card.goToCartText : TEXT.product.card.addToCartText;
        return (
          <ProductCard key={product.id} product={product} cartBtnText={cartBtnText} onAddToCartClick={handleAddToCart} />
        )
      })}
    </>
  );
};

export default ProductList;