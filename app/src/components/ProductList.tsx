import React from 'react';
import { IonContent, IonPage, IonSpinner } from '@ionic/react';
import ProductCard from './ProductCard';
import { useProductControllerFindAll } from '@/api';

const ProductList: React.FC = () => {
  const { data, isLoading, error } = useProductControllerFindAll();

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-1/2">
          {productData.map((item, index) => (
            <ProductCard
                  key={index}
                  name={item.name}
                  description={item.description}
                  actualPrice={item.actualPrice}
                  pickupStartTime={item.pickupStartTime}
                  pickupEndTime={item.pickupEndTime}
                  store={item.store} 
                  availableQuantity={0} 
                  expiryDate={''} id={''} oldPrice={0} storeId={''}            />
        ))}
        </div>
        );
    };

export default ProductList;
