import { defineStore } from 'pinia';
import { Cookies } from 'quasar';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    permission: Cookies.get('permission') || null,
    userId: Cookies.get('userId') || null,
  }),
  actions: {
    setPermission(newPermission: string) {
      this.permission = newPermission;
      Cookies.set('permission', newPermission, { path: '/', expires: 1 }); // Set cookie for 1 day
    },
    logout() {
      this.permission = null;
      this.userId=null;
      const isDevelopment = process.env.NODE_ENV === 'development';
      const cookieOptions = isDevelopment
        ? { path: '/' } // 開發環境不需要設定 domain
        : { path: '/', domain: '.yellowredorange.com' }; // 生產環境需要指定 domain
    
      // 移除 Cookies
      Cookies.remove('token', cookieOptions);
      Cookies.remove('permission', cookieOptions);
      Cookies.remove('userId', cookieOptions);
    },
  },
});
