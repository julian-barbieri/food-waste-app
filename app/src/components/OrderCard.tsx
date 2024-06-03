import { IonCard, IonLabel } from '@ionic/react';

import React from 'react';

import { TransactionEntity } from '@/api';
import { formatDateRange } from '@/utils/formatDateRange';

interface Order {
  id: string;
  product: TransactionEntity['product'];
  onClick: () => void;
  isSelected: boolean;
}

const OrderCard: React.FC<Order> = ({ id, product, onClick, isSelected }) => {
  const dateRange = formatDateRange(product.pickupStartTime, product.pickupEndTime);
  return (
    <IonCard
      button
      onClick={onClick}
      className={`order-card-background overflow-hidden rounded-lg shadow-md ${isSelected ? 'border-red-500' : ''}`}
    >
    <div className='flex justify-around'>
      <div className='flex'>
        <img
          src={product.store.logoUrl}
          alt={'Foto de logo'}
          className="h-10 object-cover rounded-lg m-2"
        />
      </div>
      <div className="w-full p-3 items-center ml-1 ">
        <div className='text-white'>
          {product.store.name}
        </div>
        <div color="card" className="text-size text-white mt-1">
          {dateRange.day},{' '}{dateRange.startTime}{' '}-{' '}{dateRange.endTime}
        </div>
      </div>
    </div>

    </IonCard>
  );
};

export default OrderCard;
