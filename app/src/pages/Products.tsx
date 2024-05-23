import { IonPage, IonContent } from '@ionic/react';

import { useAppControllerFindAll, useProductControllerFindAll } from '@/api';

const date = new Date().toISOString();

const Products: React.FC = () => {
  const query = useProductControllerFindAll();

  return (
    <IonPage>
      <IonContent />
      <div className="flex flex-col">
        <div>{JSON.stringify(query.data)}</div>
        <div></div>
      </div>
      <IonContent/>
    </IonPage>
  );
};

export default Products;
