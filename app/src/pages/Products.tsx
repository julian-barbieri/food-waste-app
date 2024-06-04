import { IonContent, IonImg, IonPage, IonTitle } from '@ionic/react';

import { useProductControllerFindAll } from '@/api';
import Logo from '@/components/Logo';
import ProductList from '@/components/ProductList';
import Title from '@/components/Title';

const Products: React.FC = () => {
  return (
    <IonPage>
      <IonContent scrollY>
        <Logo />
        <Title text={'Locales'}></Title>
        <ProductList />
      </IonContent>
    </IonPage>
  );
};

export default Products;
