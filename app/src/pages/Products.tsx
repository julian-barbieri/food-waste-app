import { IonContent, IonPage } from '@ionic/react';

import { useProductControllerFindAll } from '@/api';

const Products: React.FC = () => {
  const query = useProductControllerFindAll();

  return (
    <IonPage>
      <IonContent scrollY>
        <div className="">{JSON.stringify(query.data)}</div>
      </IonContent>
    </IonPage>
  );
};

export default Products;
