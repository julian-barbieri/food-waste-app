import { useEffect, useState } from 'react';

import { authControllerMe, useAuthControllerMe } from '@/api';
import { useAuthStoreActions } from '@/stores/auth';

export const useLoadUser = () => {
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const { loadToken, setUser, logout } = useAuthStoreActions();

  useEffect(() => {
    const load = async () => {
      setIsLoadingUser(true);
      const isThereToken = await loadToken();
      if (isThereToken) {
        try {
          const res = await authControllerMe();
          setUser(res);
        } catch (error) {
          console.log('error', error);
          await logout();
        }
      }
      setIsLoadingUser(false);
    };
    load();
  }, []);

  return { isLoadingUser };
};
