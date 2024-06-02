import React, { useState } from 'react';

import {
  useTransactionControllerFindAll,
  useTransactionControllerFindAllNotDeliveredById,
} from '@/api';

import OrderCard from './OrderCard';
import Product from './Product';
import OrderProduct from './OrderProduct';

/*interface Props {
  userId: string;
}*/
const OrdersList = ()  => {
  const { data, isLoading, error } = useTransactionControllerFindAllNotDeliveredById("6051601a-5197-45e8-babd-89d5a67f2135");
  const [selectedOrder, setSelectedOrder] = useState('');

  const handleProductClick = (id: string) => {
    setSelectedOrder(id);
  };

  if (isLoading) {
    return <p className="flex h-full justify-center">Loading ...</p>;
  }

  if (error) {
    return <p className="flex h-full justify-center">Error loading orders</p>;
  }

  if (!data) {
    return (
      <p className="flex h-full justify-center">No orders at the moment</p>
    );
  }
  const ordersData = data ?? [];
  return (
    <div className="flex justify-around">
      <div className='flex flex-col pl-10 pr-20'>
        {ordersData.map((item) => (
          <OrderCard
            key={item.id}
            id={item.id}
            product={item.product}
            onClick={() => handleProductClick(item.product.id)}
            isSelected={selectedOrder === item.id}
          />
        ))}
      </div>
      {/*Divide line*/}
      <div className="rounded-2xl border border-orange" />

      <OrderProduct productId={selectedOrder}/>
    </div>
  );
};

export default OrdersList;
