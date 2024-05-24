import { IonContent, IonPage, IonImg } from '@ionic/react';

import { useProductControllerFindAll } from '@/api';

const Products: React.FC = () => {
  const query = useProductControllerFindAll();

  return (
    <IonPage>
      <IonContent scrollY>
          <div className="mb-8 flex ml-10 mt-5">
            <IonImg
              src="/assets/logo-home.png"
              alt="Gusto Salvado Logo"
              className="h-16"
            />
          </div>
        <div className="">{JSON.stringify(query.data)}</div>
      </IonContent>
    </IonPage>
  );
};

export default Products;
