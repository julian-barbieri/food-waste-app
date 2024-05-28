import { IonContent, IonPage, IonImg, IonTitle } from '@ionic/react';
import { useProductControllerFindAll } from '@/api';
import ProductList from '@/components/ProductList';
import Title from '@/components/Title';
import Logo from '@/components/Logo';

const Products: React.FC = () => {

  return (
    <IonPage >
      <IonContent scrollY>
        <Logo />
        <Title text={'Stores'}></Title>
        <ProductList />
      </IonContent>
    </IonPage>
  );
};

export default Products;
