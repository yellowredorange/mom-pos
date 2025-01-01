import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getUserInfoById } from '../api/MomPosApi';
import type { UserInfo } from '../interfaces/User'; // 引入 UserInfo 接口

export const useUserStore = defineStore('user', () => {
  // 定義用戶資訊狀態
  const user = ref<UserInfo | null>(null);

  // 獲取用戶資訊的方法
  const fetchUserInfo = async (userId: number) => {
    try {
      const fetchedUser = await getUserInfoById(userId);
      user.value = fetchedUser; // 更新用戶資訊
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };

  const logout = () => {
    user.value = null;
  };

  return {
    user,
    fetchUserInfo,
    logout,
  };
});
