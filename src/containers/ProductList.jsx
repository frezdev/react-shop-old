import React from 'react';
import useGetData from '@hooks/useGetData';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

	const products = useGetData(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} 	key={product.id} />
				))}
			</div>
		</section>
	);
}
export default ProductList;