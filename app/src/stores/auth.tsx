import { Preferences } from '@capacitor/preferences';
import { Location } from 'history';
import { create } from 'zustand';
import {
  StateStorage,
  createJSONStorage,
  devtools,
  persist,
} from 'zustand/middleware';

const storage = (): StateStorage => {
  return {
    getItem: async (key: string) => {
      const value = await Preferences.get({ key });
      return value?.value;
    },
    setItem: async (key: string, value: string) => {
      await Preferences.set({ key, value });
    },
    removeItem: async (key: string) => {
      await Preferences.remove({ key });
    },
  };
};

type AuthStore = {
  token: string | undefined | null;
  locationBeforeRedirect: Location | undefined;

  actions: {
    setLocationBeforeRedirect: (location: Location | undefined) => void;
    login: (token: string) => void;
    logout: () => void;
  };
};

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        token: undefined,
        locationBeforeRedirect: undefined,

        actions: {
          setLocationBeforeRedirect: (location) =>
            set({ locationBeforeRedirect: location }),
          login: (token) => set({ token }),
          logout: () => set({ token: null }),
        },
      }),
      {
        name: 'auth-store', // name of the item in the storage (must be unique)
        storage: createJSONStorage(storage, {}),
        partialize: (state) => ({
          token: state.token,
        }),
      },
    ),
    {
      name: 'auth-store',
      enabled: import.meta.env.MODE === 'development',
    },
  ),
);

export const useAuthStoreActions = () => useAuthStore((state) => state.actions);

export const selectIsLoggedIn = (state: AuthStore) => !!state.token;
