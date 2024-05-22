import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';

import {
  selectIsLoggedIn,
  useAuthStore,
  useAuthStoreActions,
} from '@/stores/auth';

interface PrivateRouteProps extends RouteProps {}

export const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const location = useLocation();
  const isLoggedIn = useAuthStore(selectIsLoggedIn);
  const { setLocationBeforeRedirect } = useAuthStoreActions();

  console.log({ isLoggedIn });

  if (location.pathname === '/login' || location.pathname === '/register') {
    return <Route {...props} />;
  }

  if (!isLoggedIn) {
    setLocationBeforeRedirect(location);
    return <Redirect to="/login" push={false} />;
  }

  return <Route {...props} />;
};
