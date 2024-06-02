import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { useAppControllerFreis } from '@/api';
import Logo from '@/components/Logo';
import OrdersList from '@/components/OrdersList';
import Title from '@/components/Title';

interface Props {
  userId: string;
}

const Orders: React.FC<Props> = ({ userId }) => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Logo />
        <Title text={'Orders'} />
        <OrdersList />
      </IonContent>
    </IonPage>
  );
};

export default Orders;
