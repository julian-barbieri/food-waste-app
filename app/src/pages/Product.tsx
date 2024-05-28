import { IonButton, IonContent, IonIcon, IonPage } from '@ionic/react';

import { locationOutline, timeOutline } from 'ionicons/icons';
import { useState } from 'react';
import { useParams } from 'react-router';

import { ProductEntity, useProductControllerFindOne } from '@/api';
import { formatDateRange } from '@/utils/formatDateRange';


interface Props {
  id: string;
}
const Product: React.FC<Props> = ({
  id,
}) => {
  // get the id from the URL
  //const { id } = useParams<{ id: string }>();
  const query = useProductControllerFindOne(id);

  const [quantity, setQuantity] = useState(1);

  if (query.isLoading) {
    return 'Loading product details...';
  }

  if (query.isError || !query.data) {
    return 'Error loading product details';
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < query.data.availableQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const formattedDateRange = formatDateRange(
    query.data.pickupStartTime,
    query.data.pickupEndTime,
  );

  const buy = () => {
    console.log(`Buying ${quantity} of product ${query.data.id}`);
  };

  return (
    <div>
      < div className="flex flex-col items-center justify-start">
        <div className="flex h-full flex-col items-center justify-start gap-5 pl-10 pr-10">
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
              Qué encontraras dentro de la caja:
            </h4>
            <p className="w-80 text-center">{query.data.description}</p>
          </div>

          <div className="w-52 rounded-2xl border border-orange" />

          <div className="flex flex-col place-content-center items-center gap-3">
            <h5 className="text-base font-bold">Selecciona la cantidad</h5>

            <div className="flex w-52 items-center justify-center gap-7  ">
              <button
                className="grid h-10 w-10 place-content-center content-center items-center justify-center rounded-full bg-orange p-3 text-2xl text-white"
                onClick={() => decrementQuantity()}
              >
                -
              </button>
              <span className="px-3 py-2 text-7xl text-darkOrange">
                {quantity}
              </span>
              <button
                className="grid h-10 w-10 place-content-center content-center items-center justify-center rounded-full bg-orange p-3 text-2xl text-white"
                onClick={() => incrementQuantity()}
              >
                +
              </button>
            </div>

            <span className="text-sm">
              Disponibles: {query.data.availableQuantity}
            </span>
          </div>

          <div className="w-52 rounded-2xl border border-orange" />

          <div className="flex flex-col place-content-center items-center gap-3">
            <h4 className="text-xl font-bold">Magic Box</h4>

            <div className="flex flex-col items-center gap-1">
              <span className="text-gray-400 text-sm line-through">
                ${query.data.oldPrice * quantity}
              </span>

              <span className="text-gray-400 text-2xl text-orange ">
                ${query.data.actualPrice * quantity}
              </span>
            </div>

            <IonButton color="secondary" shape="round" onClick={buy}>
              COMPRAR AHORA
            </IonButton>
          </div>
        </div>
      </ div>
    </div>
  );
};

export default Product;
