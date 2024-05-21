import { Preferences } from '@capacitor/preferences';
import { Location } from 'history';
import { create } from 'zustand';
import {
  StateStorage,
  createJSONStorage,
  devtools,
  persist,
} from 'zustand/middleware';

import { UserEntity } from '@/api';

type AuthStore = {
  isLoadingToken: boolean;
  token: string | undefined | null;
  locationBeforeRedirect: Location | undefined;
  user: UserEntity | undefined;

  actions: {
    setLocationBeforeRedirect: (location: Location | undefined) => void;
    login: (token: string) => Promise<Location | undefined>;
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
          console.log({ result });
          if (result.value) {
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
