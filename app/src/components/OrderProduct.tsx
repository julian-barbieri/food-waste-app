import { ProductEntity, useProductControllerFindOne } from '@/api';
import { formatDateRange } from '@/utils/formatDateRange';
import { IonIcon, IonLabel } from '@ionic/react';
import { timeOutline } from 'ionicons/icons';
import React from 'react';

interface OrderProductProps {
    productId: string;
}

const OrderProduct: React.FC<OrderProductProps> = ({productId}) => {
    
    const query = useProductControllerFindOne(productId);
    
    if (query.isLoading) {
        return 'Loading product details...';
    }
    
    if (query.isError) {
        return 'Error loading product details';
    }
    
    //Message when no product is selected
    if (!query.data) {
        return (
          <div className="text-1xl pl-10 pr-10 font-mono font-bold">
            Seleccioná el producto que deseas ver
          </div>
        );
    }
    
    return (
        <div>
            <img
                className="h-20 w-fit rounded-xl"
                src={query.data.store.logoUrl}
                alt={`${query.data.store.logoUrl} Logo`}
            />
            <h3>{query.data.store.name}</h3>
            <p>{query.data.store.description}</p>
            <IonLabel color="card" className="text-size ml-2">
                {formatDateRange(query.data.pickupStartTime, query.data.pickupEndTime).day},{' '}
                {formatDateRange(query.data.pickupStartTime, query.data.pickupEndTime).startTime} -{' '}
                {formatDateRange(query.data.pickupStartTime, query.data.pickupEndTime).endTime}
            </IonLabel>
        </div>
    );
};

export default OrderProduct;