import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

interface ScrollHookProps {
    children:any;
    onScrollNext: ()=>void
};

const ScrollHook: React.FC<ScrollHookProps> = ({onScrollNext,children}) => {
    const loaderState = useSelector((state: any) => state.loaderReducer);
    const { loading } = loaderState;

    const handleScroll = () => {
        const screenHeight = window.innerHeight + document.documentElement.scrollTop - 10;
        const docHeight = document.documentElement.offsetHeight - 10;
        const fetch = Math.abs(screenHeight - docHeight) < 5;
        if (!fetch || loading) {
          return;
        }

        // const newLimit = limit + 5;
        // if (newLimit <= totalProducts) {
        //   getProductListFromAPI(newLimit);
        // };

        onScrollNext()
      };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [loading]);
    return (
        // <HeaderWrapper>
        //     <LinkWrapper to={PATH.cart}>Cart {cartList?.length > 0 && (<p>{` ( ${cartList?.length} )`}</p>)}</LinkWrapper>
        // </HeaderWrapper>
        <>
        {children}
        </>
    );
};

export default ScrollHook;