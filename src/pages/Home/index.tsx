import React from 'react';
import ProductList from '../../components/ProductList';

// interface HomePageProps {
//   currentPage?: number;
//   totalPages?: number;
//   onPageChange?: (page: number) => void;
// }

const HomePage: React.FC = () => {
    return (
        <div>
            <ProductList />
        </div>
    );
};

export default HomePage;