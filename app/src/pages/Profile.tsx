import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import Logo from '@/components/Logo';
import ProfileForm from '@/components/ProfileForm';
import Title from '@/components/Title';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Logo />
        <Title text={'Datos personales'} />
        <ProfileForm></ProfileForm>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
