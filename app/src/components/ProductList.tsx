import React, { useState } from 'react';
import { IonContent, IonPage, IonSpinner } from '@ionic/react';
import ProductCard from './ProductCard';
import { ProductEntity, useProductControllerFindAll } from '@/api';
import Product from '@/pages/Product';

const ProductList: React.FC = () => {
  const { data, isLoading, error } = useProductControllerFindAll();
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleProductClick = (id: string) => {
    setSelectedProduct(id);
  };


  if (isLoading) {
    return (
        <p className="flex justify-center h-full">Loading ...</p>
    );
  }

  if (error) {
    return (
      <p>Error loading stores</p>
    );
  }

  const productData = data ?? [];


  return (
      <div className='flex justify-around'>
        <div className='flex flex-col pr-20 pl-10'>
          <div className="ml-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {productData.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                actualPrice={item.actualPrice}
                pickupStartTime={item.pickupStartTime}
                pickupEndTime={item.pickupEndTime}
                store={item.store} 
                availableQuantity={item.availableQuantity}
                onClick={() => handleProductClick(item.id)}
                isSelected={selectedProduct === item.id}         
              />
          ))}
          </div>
          </div>
          {/*Divide line*/}
            <div className="rounded-2xl border border-orange" />
            <Product id={selectedProduct}/>
      </ div>
        );
    };

export default ProductList;
