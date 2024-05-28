import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonItem, IonLabel, IonIcon, IonImg, IonRouterLink, IonButton } from '@ionic/react';
import { star, location, time, pricetag } from 'ionicons/icons';
import { ProductEntity } from '@/api';
import { formatDateRange } from '@/utils/formatDateRange';


interface Props {
    id: string;
    actualPrice: number;
    pickupStartTime: string;
    pickupEndTime: string;
    store: ProductEntity['store'];
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
    <IonCard button onClick={onClick} className={`rounded-lg overflow-hidden shadow-md ${isSelected ? 'border-red-500' : ''}`}>
       {/*Brand imagenes*/}
      <img src={store.brand.logoUrl} alt={"Foto del logo"} className="rounded-lg ml-4 mt-3 absolute w-20 h-10 flex items-center" />
      <img src={store.brand.backgroundPhotoUrl} alt={"Foto de fondo"} className="w-full h-16 object-cover" />
      
      <IonCardContent className="p-2">
      <div className="flex justify-around">
        <div className="flex flex-col w-full">
            
            {/*Brand name*/}
            <IonLabel color="card" className="text-sm font-bold title-text-size">{store.brand.name}</IonLabel>
            
            {/*Available quantity and Price*/}
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
        
        {/*Date & Time and Address*/}
        <div className="ml-2 flex flex-col w-full items-start justify-start ">
            <div className='mb-2 items-center flex'>
                <IonIcon icon={time} color="card"  className="w-4 h-3 icon-size justify-start"/>
                <IonLabel color="card" className="ml-2 text-size">
                    {formatDateRange(pickupStartTime, pickupEndTime).day}, {formatDateRange(pickupStartTime, pickupEndTime).startTime} - {formatDateRange(pickupStartTime, pickupEndTime).endTime}
                </IonLabel>
            </div>
            <div className='mb-2 items-center flex'>
                <IonIcon color="card" icon={location} className="text-gray-600 w-4 h-3 icon-size items-center justify-center" />
                <IonLabel color="card" className="ml-2 text-size" >{store.address}</IonLabel>
            </div>
        </div>
       </div>      
      </IonCardContent>
    </IonCard>

  );
};

export default ProductCard;
