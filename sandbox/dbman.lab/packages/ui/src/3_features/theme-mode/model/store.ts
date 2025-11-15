import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "system", // 기본값은 시스템 설정 따르기
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'ui-theme', // localStorage에 저장될 키 이름
      storage: createJSONStorage(() => localStorage),
    }
  )
);