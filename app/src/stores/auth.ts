import { Preferences } from '@capacitor/preferences';
import { Location } from 'history';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { AuthEntity, UserEntity, authControllerMe } from '@/api';

type AuthStore = {
  isLoadingToken: boolean;
  token: string | undefined | null;
  locationBeforeRedirect: Location | undefined;
  user: UserEntity | undefined;

  actions: {
    setLocationBeforeRedirect: (location: Location | undefined) => void;
    login: (authEntity: AuthEntity) => Promise<Location | undefined>;
    logout: () => Promise<void>;
    setUser: (user: UserEntity) => void;
    loadToken: () => Promise<boolean>;
  };
};

const TOKEN_KEY = 'token';

export const useAuthStore = create<AuthStore>()(
  devtools(
    (set, get) => ({
      isLoadingToken: true,
      token: undefined,
      locationBeforeRedirect: undefined,
      user: undefined,

      actions: {
        setLocationBeforeRedirect: (location) =>
          set({ locationBeforeRedirect: location }),
        login: async (authEntity) => {
          await Preferences.set({
            key: TOKEN_KEY,
            value: authEntity.accessToken,
          });
          const location = get().locationBeforeRedirect;
          set({
            token: authEntity.accessToken,
            user: authEntity.user,
            locationBeforeRedirect: undefined,
          });
          return location;
        },
        logout: async () => {
          await Preferences.remove({ key: TOKEN_KEY });
          set({ token: undefined, user: undefined });
        },
        setUser: (user) => set({ user }),
        loadToken: async () => {
          const result = await Preferences.get({ key: TOKEN_KEY });

          if (result.value) {
            // try {
            //   const user = await authControllerMe();
            //   set({ user });
            // } catch (error) {
            //   console.log('error', error);
            // }
            set({ token: result.value, isLoadingToken: false });
          }
          set({ isLoadingToken: false });
          return !!result.value;
        },
      },
    }),
    {
      name: 'auth-store',
      enabled: import.meta.env.MODE === 'development',
    },
  ),
);

export const useAuthStoreActions = () => useAuthStore((state) => state.actions);

export const selectIsLoggedIn = (state: AuthStore) =>
  !!state.token && !!state.user;
