export interface LoginInfo {
  account: string;
  password: string;
}

export interface RegisterInfo {
  account: string;
  password: string;
  name: string;
}

export interface UserInfo {
  userInfoId: number;
  userName: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  address?: string;
  gender?: string;
}
