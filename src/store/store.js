import { create } from "zustand";

export const useStore = create((set) => ({
  isLoaded: false,
  setIsLoaded: (isLoaded) => set({ isLoaded }),
}));
