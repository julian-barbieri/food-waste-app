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

const OrderCard: React.FC<Order> = ({ 
  id, 
  product,  
  onClick,
  isSelected, 
}) => {
  return (
    <IonCard
      button
      onClick={onClick}
      className={`overflow-hidden rounded-lg shadow-md ${isSelected ? 'border-red-500' : ''}`}
    >
      <div className="">
        <h3>{product.store.name}</h3>
        <IonLabel color="card" className="text-size ml-2">
          {formatDateRange(product.pickupStartTime, product.pickupEndTime).day},{' '}
          {
            formatDateRange(product.pickupStartTime, product.pickupEndTime)
              .startTime
          }{' '}
          -{' '}
          {
            formatDateRange(product.pickupStartTime, product.pickupEndTime)
              .endTime
          }
        </IonLabel>
      </div>
    </IonCard>
  );
};

export default OrderCard;
