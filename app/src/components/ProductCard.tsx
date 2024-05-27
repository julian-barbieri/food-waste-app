import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonIcon, IonImg } from '@ionic/react';
import { star, location, time, pricetag } from 'ionicons/icons';
import { ProductEntity } from '@/api';
//import { format } from 'date-fns';

interface Props {
    actualPrice: number;
    pickupStartTime: string;
    pickupEndTime: string;
    store: ProductEntity['store'];
    availableQuantity: number;
}

const ProductCard: React.FC<Props> = ({ 
    actualPrice, 
    pickupStartTime, 
    pickupEndTime, 
    store,
    availableQuantity }) => {
  return (
    <IonCard className="rounded-lg overflow-hidden shadow-md">
      <img src={store.brand.logoUrl} alt={store.brand.name} className="w-full h-16 object-cover" />
      <IonCardContent className="p-2">
      <div className="flex justify-around">
        <div className="flex flex-col w-full">
            <IonLabel color="card" className="text-sm font-bold title-text-size">{store.brand.name}</IonLabel>
            <div className="flex items-center justify-start mt-2">
                <img
                    aria-hidden="true"
                    src="/assets/bag-icon.png"
                    alt="Cartera Logo"
                    className='w-4 h-5'
                />
                <div className="text-white ml-0.25 mt-1 absolute text-center w-4 h-4 flex items-center justify-center text-xs font-bold">
                    {availableQuantity}
                </div>
                <div className="pill-background flex items-center justify-center ml-2">
                    <IonLabel className="text-white text-size">$ {actualPrice.toFixed(2)}</IonLabel>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-full items-start justify-start ">
            <div className='mb-2 items-center flex'>
                <IonIcon icon={time} color="card"  className="w-4 h-3 icon-size justify-start"/>
                <IonLabel color="card" className="ml-2 text-size">Hoy, 10:00 - 12:00</IonLabel>
            </div>
            <div className='mb-2 items-center flex'>
                <IonIcon color="card" icon={location} className="text-gray-600 w-4 h-3 icon-size items-center justify-center" />
                <IonLabel color="card" className="ml-2 text-size" >{store.address}</IonLabel>
            </div>

            {/* AGREGAR DIA Y HORARIO

            <IonItem lines="none" className="flex items-center justify-between">
                <IonIcon icon={time}  className="w-4 h-5"/>
                <IonLabel color="card" className="ml-2">
                    {/*format(new Date(pickupStartTime), 'Pp')}  {/*format(new Date(pickupEndTime), 'Pp')}
                </IonLabel>
            </IonItem>*/}
        </div>
        </div>      
      </IonCardContent>
    </IonCard>
  );
};

export default ProductCard;
