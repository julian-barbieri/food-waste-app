import Logo from '@/components/Logo';
import Title from '@/components/Title';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

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
