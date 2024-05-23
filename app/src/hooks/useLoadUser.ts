import { useEffect } from 'react';

import { useAuthStore, useAuthStoreActions } from '@/stores/auth';

export const useLoadUser = () => {
  const isLoading = useAuthStore((state) => state.isLoading);
  const { loadUserFromToken } = useAuthStoreActions();

  useEffect(() => {
    loadUserFromToken();
  }, []);

  return { isLoadingUser: isLoading };
};
