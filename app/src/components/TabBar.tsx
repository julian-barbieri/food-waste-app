import {
  IonIcon,
  IonImg,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';

import { ellipse, square, triangle } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';

import Tab1 from '@/pages/Tab1';
import Tab2 from '@/pages/Tab2';
import Tab3 from '@/pages/Tab3';
import { useAuthStoreActions } from '@/stores/auth';

export const TabBar: React.FC = ({}) => {
  const { logout } = useAuthStoreActions();
  return (
    <div className="md:sidebar">
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/app/tab1" component={Tab1} />
          <Route path="/app/tab2" component={Tab2} />
          <Route path="/app/tab3" component={Tab3} />
          <Redirect exact from="/app" to="/app/tab1" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" color={'primary'}>
          <IonTabButton
            tab="tab1"
            className="transition-all duration-300 hover:rounded-full hover:bg-white hover:bg-opacity-30 hover:ring-4 hover:ring-transparent"
            href="/app/tab1"
          >
            <IonImg
              aria-hidden="true"
              src="/assets/medialunaIcon.png"
              alt="Medialuna Logo"
              className="h-7"
            />
          </IonTabButton>
          <IonTabButton
            className="transition-all duration-300 hover:rounded-full hover:bg-white hover:bg-opacity-30 hover:ring-4 hover:ring-transparent"
            tab="tab2"
            href="/app/tab2"
          >
            <IonImg
              aria-hidden="true"
              src="/assets/ordersIcon.png"
              alt="Medialuna Logo"
              className="h-7"
            />
          </IonTabButton>
          <IonTabButton
            className="transition-all duration-300 hover:rounded-full hover:bg-white hover:bg-opacity-30 hover:ring-4 hover:ring-transparent"
            tab="tab3"
            href="/app/tab3"
          >
            <IonImg
              aria-hidden="true"
              src="/assets/profileIcon.png"
              alt="Perfil Logo"
              className="h-7"
            />
          </IonTabButton>
          <IonTabButton className="transition-all duration-300 hover:rounded-full hover:bg-white hover:bg-opacity-30 hover:ring-4 hover:ring-transparent">
            <button
              onClick={async () => {
                console.log('logout');
                await logout();
              }}
            >
              <IonImg
                src="/assets/logoutIcon.png"
                alt="Log out Logo"
                className="h-7"
              />
            </button>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </div>
  );
};
