import type { Member } from '@app-types/member';
import type { User } from '@app-types/user';
import { roles, statuses } from '@config/constants';

export const transformUser = (user: User): Member => ({
  id: user.id,
  avatar: `https://avatar.iran.liara.run/public?u=${user.username}`,
  name: user.name,
  email: user.email,
  role: roles[user.id % roles.length],
  status: statuses[user.id % statuses.length]
});
