import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonRouterLink,
} from '@ionic/react';

import { location, pricetag, star, time } from 'ionicons/icons';
import React from 'react';

import { ProductEntity, StoreEntity } from '@/api';
import { formatDateRange } from '@/utils/formatDateRange';

interface Props {
  id: string;
  actualPrice: number;
  pickupStartTime: string;
  pickupEndTime: string;
  store: StoreEntity;
  availableQuantity: number;
  onClick: () => void;
  isSelected: boolean;
}
const ProductCard: React.FC<Props> = ({
  id,
  actualPrice,
  pickupStartTime,
  pickupEndTime,
  store,
  availableQuantity,
  onClick,
  isSelected,
}) => {
  return (
    <IonCard
      button
      onClick={onClick}
      className={`overflow-hidden rounded-lg shadow-md ${isSelected ? 'border-red-500' : ''}`}
    >
      {/*Brand imagenes*/}
      <img
        src={store.logoUrl}
        alt={'Foto del logo'}
        className="absolute ml-4 mt-3 flex h-10 w-20 items-center rounded-lg"
      />
      <img
        src={store.backgroundPhotoUrl}
        alt={'Foto de fondo'}
        className="h-16 w-full object-cover"
      />

      <IonCardContent className="p-2">
        <div className="flex justify-around">
          <div className="flex w-full flex-col">
            {/*Store name*/}
            <IonLabel
              color="card"
              className="title-text-size text-sm font-bold"
            >
              {store.name}
            </IonLabel>

            {/*Available quantity and Price*/}
            <div className="mt-2 flex items-center justify-start">
              <img
                aria-hidden="true"
                src="/assets/bag-icon.png"
                alt="Cartera Logo"
                className="h-5 w-4"
              />
              <div className="ml-0.25 absolute mt-1 flex h-4 w-4 items-center justify-center text-center text-xs font-bold text-white">
                {availableQuantity}
              </div>
              <div className="pill-background ml-2 flex items-center justify-center">
                <IonLabel className="text-size text-white">
                  $ {actualPrice.toFixed(2)}
                </IonLabel>
              </div>
            </div>
          </div>

          {/*Date & Time and Address*/}
          <div className="ml-2 flex w-full flex-col items-start justify-start ">
            <div className="mb-2 flex items-center">
              <IonIcon
                icon={time}
                color="card"
                className="icon-size h-3 w-4 justify-start"
              />
              <IonLabel color="card" className="text-size ml-2">
                {formatDateRange(pickupStartTime, pickupEndTime).day},{' '}
                {formatDateRange(pickupStartTime, pickupEndTime).startTime} -{' '}
                {formatDateRange(pickupStartTime, pickupEndTime).endTime}
              </IonLabel>
            </div>
            <div className="mb-2 flex items-center">
              <IonIcon
                color="card"
                icon={location}
                className="text-gray-600 icon-size h-3 w-4 items-center justify-center"
              />
              <IonLabel color="card" className="text-size ml-2">
                {store.address}
              </IonLabel>
            </div>
          </div>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default ProductCard;
function useStoreControllerFindfindOne(store: string): {
  data: any;
  isLoading: any;
  error: any;
} {
  throw new Error('Function not implemented.');
}
