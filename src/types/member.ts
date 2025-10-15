export type Role = 'Admin' | 'Manager' | 'Developer' | 'Designer';

export type Status = 'Active' | 'Inactive' | 'Pending';

export interface Member {
  id: number;
  avatar: string;
  name: string;
  email: string;
  role: Role;
  status: Status;
}
