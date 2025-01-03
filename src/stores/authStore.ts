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
      Cookies.remove('token', { path: '/', domain: '.yellowredorange.com' });
      Cookies.remove('permission', { path: '/', domain: '.yellowredorange.com' });
      Cookies.remove('userId', { path: '/', domain: '.yellowredorange.com' });
    },
  },
});
