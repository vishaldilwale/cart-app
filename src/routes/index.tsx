import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from '../constants/path';
import PageNotFound from '../pages/PageNotFound';
import HomePage from '../pages/Home';
import CartPage from '../pages/Cart';
import Loader from '../components/common/Loader';
import Header from '../components/common/Header';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Loader />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path={PATH.home} element={<HomePage />} />
                <Route path={PATH.cart} element={<CartPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;