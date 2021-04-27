/* tslint:disable */
/* eslint-disable */
import { ApiUserRole } from './api-user-role';
import { Fotografia } from './fotografia';
export interface ApiUser {
  accessFailedCount?: number;
  concurrencyStamp?: null | string;
  createdAt?: string;
  diteLindja?: string;
  email?: null | string;
  emailConfirmed?: boolean;
  emer?: null | string;
  fotografite?: null | Array<Fotografia>;
  gjinia?: null | string;
  id?: number;
  lastActive?: string;
  lockoutEnabled?: boolean;
  lockoutEnd?: null | string;
  mbiemer?: null | string;
  normalizedEmail?: null | string;
  normalizedUserName?: null | string;
  nrTel?: null | string;
  password?: null | string;
  passwordHash?: null | string;
  phoneNumber?: null | string;
  phoneNumberConfirmed?: boolean;
  securityStamp?: null | string;
  twoFactorEnabled?: boolean;
  userName?: null | string;
  userRoles?: null | Array<ApiUserRole>;
}
