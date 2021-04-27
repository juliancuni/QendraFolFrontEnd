/* tslint:disable */
/* eslint-disable */
import { ApiRole } from './api-role';
import { ApiUser } from './api-user';
export interface ApiUserRole {
  role?: ApiRole;
  roleId?: number;
  user?: ApiUser;
  userId?: number;
}
