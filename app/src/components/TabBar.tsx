import {
  IonIcon,
  IonImg,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';

import { Redirect, Route } from 'react-router';

import Product from '@/components/Product';
import Orders from '@/pages/Orders';
import Products from '@/pages/Products';
import Profile from '@/pages/Profile';
import { useAuthStoreActions } from '@/stores/auth';

export const TabBar: React.FC = ({}) => {
  const { logout } = useAuthStoreActions();
  return (
    <div className="md:sidebar">
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/app/products/:id" component={Product} />
          <Route exact path="/app/products" component={Products} />
          <Route path="/app/orders" component={Orders} />
          <Route path="/app/Profile" component={Profile} />
          <Redirect exact from="/app" to="/app/products" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" color={'primary'}>
          <IonTabButton
            tab="products"
            className="transition-all duration-300 hover:rounded-full hover:bg-white hover:bg-opacity-30 hover:ring-4 hover:ring-transparent"
            href="/app/products"
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
            tab="orders"
            href="/app/orders"
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
            tab="Profile"
            href="/app/Profile"
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
