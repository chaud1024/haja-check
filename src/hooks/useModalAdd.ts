import { create } from "zustand";

interface ModalAddStore {
  isOpen: Boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useModalAdd = create<ModalAddStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useModalAdd;
