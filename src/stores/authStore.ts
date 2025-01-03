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
    clearPermission() {
      this.permission = null;
      Cookies.remove('permission', { path: '/' });
      Cookies.remove('userId', { path: '/' });
    },
  },
});
