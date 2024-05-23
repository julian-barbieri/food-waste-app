import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { useAppControllerFreis } from '@/api';

const Tab2: React.FC = () => {
  const query = useAppControllerFreis('hola', 'mundo', {
    zeta: 'zeta',
  });
  return (
    <IonPage>
      <IonContent fullscreen>{JSON.stringify(query.data)}</IonContent>
    </IonPage>
  );
};

export default Tab2;
