import {IonIcon } from '@ionic/react';

import { locationOutline, timeOutline } from 'ionicons/icons';
import { useParams } from 'react-router';

import { ProductEntity, useProductControllerFindOne } from '@/api';
import { formatDateRange } from '@/utils/formatDateRange';

const Product = () => {
  // get the id from the URL
  const { id } = useParams<{ id: string }>();
  const query = useProductControllerFindOne("02f4c7fd-b354-4e4f-9d19-69c474067cbc");

  if (query.isLoading) {
    return 'Loading product details...';
  }

  if (query.isError || !query.data) {
    return 'Error loading product details';
  }

  const formattedDateRange = formatDateRange(
    query.data.pickupStartTime,
    query.data.pickupEndTime,
  );

  return (
    <div>
      < div className="flex flex-col items-center justify-start">
        <div className="flex h-full flex-col items-center justify-start gap-5 p-9">
          <img
            className="h-20 w-fit rounded-xl"
            src={query.data.store.brand.logoUrl}
            alt={`${query.data.store.brand.name} Logo`}
          />

          <h1 className="font-mono text-3xl font-bold">
            {query.data.store.brand.name}
          </h1>

          <div className="w-52 rounded-2xl border border-orange" />

          <div className="flex place-content-center items-center gap-7">
            <IonIcon icon={locationOutline} size="large" color="primary" />
            <p className="text-base">{query.data.store.address}</p>
          </div>

          <div className="w-52 rounded-2xl border border-orange" />

          <div className="flex place-content-center items-center gap-7">
            <IonIcon icon={timeOutline} size="large" color="primary" />
            <div className="flex flex-col place-content-center items-center gap-2">
              <h4 className="text-base font-bold">{formattedDateRange.day}</h4>
              <p className="text-sm">
                {formattedDateRange.startTime} - {formattedDateRange.endTime}
              </p>
            </div>
          </div>

          <div className="w-52 rounded-2xl border border-orange" />

          <div className="flex flex-col place-content-center items-center gap-3">
            <h4 className="text-xl font-bold">
              Que encontraras dentro de la caja:
            </h4>
            <p className="w-80 text-center">{query.data.description}</p>
          </div>

          <div className="w-52 rounded-2xl border border-orange" />
        </div>
      </ div>
    </div>
  );
};

export default Product;
