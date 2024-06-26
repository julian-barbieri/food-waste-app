import { Preferences } from '@capacitor/preferences';
import { Location } from 'history';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { UserEntity, authControllerMe } from '@/api';

type AuthStore = {
  isLoadingToken: boolean;
  token: string | undefined | null;
  locationBeforeRedirect: Location | undefined;
  user: UserEntity | undefined;
  test: string;

  actions: {
    setLocationBeforeRedirect: (location: Location | undefined) => void;
    login: (token: string) => Promise<Location | undefined>;
    logout: () => Promise<void>;
    setUser: (user: UserEntity) => void;
    loadToken: () => Promise<boolean>;
    setTest: (test: string) => void;
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
      test: 'test',

      actions: {
        setTest: (test) => set({ test }),
        setLocationBeforeRedirect: (location) =>
          set({ locationBeforeRedirect: location }),
        login: async (token) => {
          await Preferences.set({ key: TOKEN_KEY, value: token });
          const location = get().locationBeforeRedirect;
          set({ token, locationBeforeRedirect: undefined });
          return location;
        },
        logout: async () => {
          await Preferences.remove({ key: TOKEN_KEY });
          console.log('logout');
          set({ token: undefined });
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
