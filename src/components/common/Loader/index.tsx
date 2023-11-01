import React from 'react';
import { useSelector } from 'react-redux';
import { LoaderWrapper } from './style';

const Loader: React.FC = () => {
    const state = useSelector((state: any) => state.loaderReducer);
    const { loading } = state;
    return (
        <>
            {loading && <LoaderWrapper>
                <h2>Loading...</h2>
            </LoaderWrapper>}
        </>
    );
};

export default Loader;