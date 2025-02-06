// authStore.js
import { create } from 'zustand';

const createSelectors = (_store) => {
    let store = _store;
    store.use = {};
    for (let k of Object.keys(store.getState())) {
        ;
        store.use[k] = () => store((s) => s[k]);
    }
    return store;
};

const useAuthStore = createSelectors(create((set) => ({
  isAuthenticated: false,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
})));

export default useAuthStore;
