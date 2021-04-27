/* tslint:disable */
/* eslint-disable */
import { FotografiaDto } from './fotografia-dto';
export interface MemberDto {
  createdAt?: string;
  emer?: null | string;
  fotografiaUrl?: null | string;
  fotografite?: null | Array<FotografiaDto>;
  gjinia?: null | string;
  id?: number;
  lastActive?: string;
  mbiemer?: null | string;
  mosha?: number;
  nrTel?: null | string;
  userName?: null | string;
}
