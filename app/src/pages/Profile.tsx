import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import Logo from '@/components/Logo';
import Title from '@/components/Title';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Logo />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
