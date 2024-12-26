import { defineStore } from 'pinia';

interface User {
  name: string;
  email: string;
  phone: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    async login(account: string, password: string): Promise<boolean> {
      // 模擬後端驗證
      if (account === 'test' && password === '123456') {
        this.isAuthenticated = true;
        this.user = {
          name: 'John Doe',
          email: 'john@example.com',
          phone: '123-456-7890',
        };
        return true;
      }
      return false;
    },
    logout(): void {
      this.isAuthenticated = false;
      this.user = null;
    },
    async updateProfile(newProfile: Partial<User>): Promise<boolean> {
      if (this.user) {
        // 模擬後端更新
        this.user = { ...this.user, ...newProfile };
        return true;
      }
      return false;
    },
  },
});
