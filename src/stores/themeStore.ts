// src/stores/themeStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(false);

  // Load dark mode state from localStorage
  const loadDarkMode = () => {
    const savedMode = localStorage.getItem('darkMode');
    isDarkMode.value = savedMode === 'true';
  };

  // Update dark mode state and localStorage
  const setDarkMode = (dark: boolean) => {
    isDarkMode.value = dark;
    localStorage.setItem('darkMode', dark.toString());
  };

  return { isDarkMode, loadDarkMode, setDarkMode };
});
