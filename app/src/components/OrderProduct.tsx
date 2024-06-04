import { IonIcon, IonLabel } from '@ionic/react';

import { locationOutline, timeOutline } from 'ionicons/icons';
import React from 'react';

import { ProductEntity, useProductControllerFindOne } from '@/api';
import { formatDateRange } from '@/utils/formatDateRange';

interface OrderProductProps {
  productId: string;
}

const OrderProduct: React.FC<OrderProductProps> = ({ productId }) => {
  const query = useProductControllerFindOne(productId);

  if (query.isLoading) {
    return (
      <div className="flex w-full items-center justify-center pl-10 pr-10 font-mono font-bold">
        Loading product details...
      </div>
    );
  }

  if (query.isError) {
    return (
      <div className="flex w-full items-center justify-center pl-10 pr-10 font-mono font-bold">
        Error loading product details
      </div>
    );
  }

  if (!query.data) {
    return (
      <div className="flex w-full items-center justify-center pl-10 pr-10 font-mono font-bold">
        Seleccioná el producto que deseas ver
      </div>
    );
  }

  const formattedDateRange = formatDateRange(
    query.data.pickupStartTime,
    query.data.pickupEndTime,
  );
  return (
    <div className="mb-10 flex w-full flex-col items-center justify-center gap-5">
      {/*lOGO*/}
      <img
        className="h-20 w-fit rounded-xl"
        src={query.data.store.logoUrl}
        alt={`${query.data.store.logoUrl} Logo`}
      />
      {/*Store*/}
      <h3 className="font-mono text-3xl font-bold">{query.data.store.name}</h3>
      <p className="mt-1 w-80 text-center">{query.data.store.description}</p>

      <div className="w-52 rounded-2xl border border-orange" />

      {/*Product type*/}
      <h2 className="mt-1 w-80 text-center text-2xl">{query.data.type}</h2>

      <div className="w-52 rounded-2xl border border-orange" />

      {/*Adress & Date and hour*/}
      <div className="flex w-full place-content-center gap-5">
        <IonIcon icon={locationOutline} size="large" color="primary" />
        <p className="text-base">{query.data.store.address}</p>

        <IonIcon icon={timeOutline} size="large" color="primary" />
        <div className=" flex-col gap-2">
          <h4 className="text-base font-bold">{formattedDateRange.day}</h4>
          <p className="text-sm">
            {formattedDateRange.startTime} - {formattedDateRange.endTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
