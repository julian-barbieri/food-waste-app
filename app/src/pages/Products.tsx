import { IonContent, IonPage, IonImg } from '@ionic/react';
import { useProductControllerFindAll } from '@/api';
import ProductList from '@/components/ProductList';

const Products: React.FC = () => {
  const query = useProductControllerFindAll();

  return (
    <IonPage>
      <IonContent scrollY>
        <div className="mb-8 flex justify-center ml-10 mt-5">
          <IonImg
            src="/assets/logo-home.png"
            alt="Gusto Salvado Logo"
            className="h-16"
          />
        </div>
        <ProductList />
      </IonContent>
    </IonPage>
  );
};

export default Products;
