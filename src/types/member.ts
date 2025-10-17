import { roles } from '@config/constants';

export type Role = (typeof roles)[number];

export type Status = 'Active' | 'Inactive' | 'Pending';

export interface Member {
  id: number;
  avatar: string;
  name: string;
  email: string;
  role: Role;
  status: Status;
}
