import React, { useState } from 'react';

import { useTransactionControllerFindAllNotDeliveredById } from '@/api';

import OrderCard from './OrderCard';
import OrderProduct from './OrderProduct';
import Product from './Product';

const OrdersList = () => {
  const { data, isLoading, error } =
    useTransactionControllerFindAllNotDeliveredById();
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
      <div className="w-max-32 flex w-full flex-col pl-10 pr-20">
        {ordersData.map((item) => (
          <OrderCard
            key={item.id}
            id={item.id}
            product={item.product}
            onClick={() => handleProductClick(item.product.id)}
            isSelected={selectedOrder === item.product.id}
          />
        ))}
      </div>
      {/* Divide line */}
      <div className="mr-14 flex-col rounded-2xl border border-orange" />
      <div className="flex w-full flex-col items-center justify-center">
        <OrderProduct productId={selectedOrder} />
      </div>
    </div>
  );
};

export default OrdersList;
