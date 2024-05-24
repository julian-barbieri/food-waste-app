import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonIcon, IonImg } from '@ionic/react';
import { star, location, time, pricetag } from 'ionicons/icons';
import { ProductEntity } from '@/api';
//import { format } from 'date-fns';

const ProductCard: React.FC<ProductEntity> = ({ 
    name, 
    description, 
    actualPrice, 
    pickupStartTime, 
    pickupEndTime, 
    store }) => {
  return (
    <IonCard className="rounded-lg overflow-hidden shadow-md">
      <img src={store.brand.logoUrl} alt={store.brand.name} className="w-full h-32 object-cover" />
      <IonCardHeader className=" p-2">
        <h2 className="text-sm font-semibold">{store.brand.name}</h2>
      </IonCardHeader>
      <IonImg
            aria-hidden="true"
            src="/assets/bug-icon.png"
            alt="Cartera Logo"
        />
      <IonCardContent className="p-4">
        <IonItem lines="none" className="flex items-center justify-between py-2">
          <IonLabel className="ml-2">{actualPrice.toFixed(2)}$</IonLabel>
        </IonItem>
        <IonItem lines="none" className="flex items-center justify-between py-2">
          <IonIcon icon={time} className="text-grey-600" />
          <IonLabel className="ml-2">
            {/*format(new Date(pickupStartTime), 'Pp')*/}  {/*format(new Date(pickupEndTime), 'Pp')*/}
          </IonLabel>
        </IonItem>
        <IonItem lines="none" className="flex items-center justify-between py-2">
          <IonIcon icon={location} className="text-gray-600" />
          <IonLabel className="ml-2">{store.address}</IonLabel>
        </IonItem>      
      </IonCardContent>
    </IonCard>
  );
};

export default ProductCard;
