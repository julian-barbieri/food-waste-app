import { IonPage } from '@ionic/react';

import { useAppControllerFindAll } from '@/api';

const date = new Date().toISOString();

const Tab1: React.FC = () => {
  const query = useAppControllerFindAll({
    beforeDate: date,
    enum: 'A',
    s: 'string',
    sortBy: ['string', '33'],
  });

  return (
    <IonPage>
      <div className="flex flex-col">
        <div>{JSON.stringify(query.data)}</div>
        <div></div>
      </div>
    </IonPage>
  );
};

export default Tab1;
