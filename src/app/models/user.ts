export declare type UserRoleType = 'admin' | 'student' | 'professor';

export interface User {
  _id: string;
  username: string;
  role: UserRoleType;
  name: string;
  email: string;
  phone: string;
}
