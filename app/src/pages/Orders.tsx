import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { useAppControllerFreis } from '@/api';
import Title from '@/components/Title';
import Logo from '@/components/Logo';

const Orders: React.FC = () => {
  const query = useAppControllerFreis('hola', 'mundo', {
    zeta: 'zeta',
  });
  return (
    <IonPage>
      <IonContent fullscreen>
        <Logo />
        <Title text={'Orders'} />
      </IonContent>
    </IonPage>
  );
};

export default Orders;
