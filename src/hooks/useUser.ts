import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserState {
  userId: string;
  setUserId: (newUserId: string) => void;
}

const useUserStore = create(
  persist<UserState>(
    (set) => ({
      userId: "",
      setUserId: (newUserId: string) => set({ userId: newUserId }),
    }),
    {
      name: "userIdState",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useUserStore;
