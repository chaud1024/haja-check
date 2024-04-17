import { create } from "zustand";

interface ModalLoginStore {
  isOpen: Boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModalLogin = create<ModalLoginStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModalLogin;
