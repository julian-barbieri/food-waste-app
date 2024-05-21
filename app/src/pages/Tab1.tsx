import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { useAppControllerFindAll } from '../api';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const date = new Date().toISOString();

const Tab1: React.FC = () => {
  const query = useAppControllerFindAll({
    beforeDate: date,
    enum: 'A',
    s: 'string',
    sortBy: ['string', '33'],
  });

  return <IonPage>{JSON.stringify(query.data)}</IonPage>;
};

export default Tab1;
