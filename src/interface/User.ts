 export interface UserInterface {
  id?: number;
  fullname: string;
  email: string;
  role: Role
  createdAt?: string;
  updatedAt?: string;
}

export interface UserUpdateface {
  id?: number;
  fullname: string;
  role: Role
  createdAt?: string;
  updatedAt?: string;
}

export type Role = "User" | "Admin";

export interface UsersSuccessRes {
  code: number;
  data: Data;
  message: string;
  success: boolean;
}

interface Data {
  users: UserInterface[];
}
