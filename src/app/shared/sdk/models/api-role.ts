/* tslint:disable */
/* eslint-disable */
import { ApiUserRole } from './api-user-role';
export interface ApiRole {
  concurrencyStamp?: null | string;
  id?: number;
  name?: null | string;
  normalizedName?: null | string;
  pershkrim?: null | string;
  userRoles?: null | Array<ApiUserRole>;
}
