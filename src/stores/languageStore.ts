import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export const useLanguageStore = defineStore('language', () => {
  const { locale } = useI18n();

  // 支援的語言列表
  const supportedLanguages = ['zh-tw', 'en'];

  // 當前語言狀態
  const currentLanguage = ref<string>('');

  // 初始化語言
  const initializeLanguage = () => {
    // 如果 Pinia 中沒有語言記錄，則使用瀏覽器預設語言
    if (!currentLanguage.value) {
      const browserLanguage = navigator.language.toLowerCase(); // 獲取瀏覽器語言
      const defaultLanguage = supportedLanguages.includes(browserLanguage)
        ? browserLanguage
        : 'en'; // 預設使用英文
      currentLanguage.value = defaultLanguage;
    }
    // 更新 vue-i18n 的語言
    locale.value = currentLanguage.value;
  };

  // 切換語言
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'en' ? 'zh-tw' : 'en';
    locale.value = currentLanguage.value;
  };

  return {
    currentLanguage,
    initializeLanguage,
    toggleLanguage,
  };
},
{
  persist: true,
}
);
