import { create } from "zustand";

const createSelectors = (_store) => {
    let store = _store;
    store.use = {};
    for (let k of Object.keys(store.getState())) {
        ;
        store.use[k] = () => store((s) => s[k]);
    }
    return store;
};

const useMailStore = createSelectors(create((set) => ({
  receivedMails: [
    { id: 21, dateArrivee: "12/09/2024", origine: "Secrétariat", type: "Lettre", objet: "Résultat de demande de stage", datePreference: "10/09/2024", statut: "Traité", dateTraite: "08/09/2024" },
  ],
  sentMails: [],
  sendMail: (mail) => set((state) => ({ sentMails: [...state.sentMails, mail] })),
})));

export default useMailStore;
