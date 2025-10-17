import type { Member } from '@app-types/member';
import { useQuery } from '@tanstack/react-query';
import { transformUser } from '@utils/transformUser';

const fetchUsers = async (): Promise<Member[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Ошибка при загрузке данных');
  const data = await res.json();
  return data.map(transformUser);
};

export const useUsersQuery = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5
  });
