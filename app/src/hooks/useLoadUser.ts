import { useEffect, useState } from 'react';

import { useAuthControllerMe } from '@/api';
import { useAuthStoreActions } from '@/stores/auth';

export const useLoadUser = () => {
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const { loadToken, setUser } = useAuthStoreActions();

  const { refetch: getUser } = useAuthControllerMe({
    query: {
      retry: false,
      enabled: false,
    },
  });

  useEffect(() => {
    const load = async () => {
      setIsLoadingUser(true);
      const isThereToken = await loadToken();
      if (isThereToken) {
        const res = await getUser();
        if (res.data) {
          setUser(res.data);
        }
      }
      setIsLoadingUser(false);
    };
    load();
  }, []);

  return { isLoadingUser };
};
