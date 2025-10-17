import type { Member } from '@app-types/member';
import {
  ProjectMembersTable,
  Search,
  RoleFilter,
  PaginationControl,
  CustomButton
} from '@components/index';
import { ITEMS_PER_PAGE, roles } from '@config/constants';
import { Box } from '@mui/material';
import { useState, useMemo } from 'react';
import type { FC } from 'react';

const mockData: Member[] = [
  {
    id: 1,
    avatar: 'https://avatar.iran.liara.run/public',
    name: 'Aleksandr',
    email: 'aleksandr@mail.com',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: 2,
    avatar: 'https://avatar.iran.liara.run/public/boy',
    name: 'Nikita',
    email: 'nikita@mail.com',
    role: 'Developer',
    status: 'Active'
  },
  {
    id: 3,
    avatar: 'https://avatar.iran.liara.run/public/girl',
    name: 'John',
    email: 'john@mail.com',
    role: 'Designer',
    status: 'Inactive'
  },
  {
    id: 4,
    avatar: 'https://avatar.iran.liara.run/public',
    name: 'Aleksandr',
    email: 'aleksandr@mail.com',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: 5,
    avatar: 'https://avatar.iran.liara.run/public/boy',
    name: 'Nikita',
    email: 'nikita@mail.com',
    role: 'Developer',
    status: 'Active'
  },
  {
    id: 6,
    avatar: 'https://avatar.iran.liara.run/public/girl',
    name: 'John',
    email: 'john@mail.com',
    role: 'Designer',
    status: 'Inactive'
  },
  {
    id: 7,
    avatar: 'https://avatar.iran.liara.run/public',
    name: 'Aleksandr',
    email: 'aleksandr@mail.com',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: 8,
    avatar: 'https://avatar.iran.liara.run/public/boy',
    name: 'Nikita',
    email: 'nikita@mail.com',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: 9,
    avatar: 'https://avatar.iran.liara.run/public/girl',
    name: 'John',
    email: 'john@mail.com',
    role: 'Designer',
    status: 'Inactive'
  },
  {
    id: 10,
    avatar: 'https://avatar.iran.liara.run/public',
    name: 'Aleksandr',
    email: 'aleksandr@mail.com',
    role: 'Admin',
    status: 'Active'
  },
  {
    id: 11,
    avatar: 'https://avatar.iran.liara.run/public/boy',
    name: 'Nikita',
    email: 'nikita@mail.com',
    role: 'Developer',
    status: 'Active'
  },
  {
    id: 12,
    avatar: 'https://avatar.iran.liara.run/public/girl',
    name: 'John',
    email: 'john@mail.com',
    role: 'Designer',
    status: 'Inactive'
  }
];

export const ProjectMembers: FC = () => {
  const [searchField, setSearchField] = useState<'name' | 'email'>('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [page, setPage] = useState(1);

  const filteredData = useMemo(() => {
    let filtered = mockData;

    if (searchQuery) {
      filtered = filtered.filter((m) =>
        m[searchField].toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedRole !== 'all') {
      filtered = filtered.filter((m) => m.role === selectedRole);
    }

    return filtered;
  }, [searchQuery, searchField, selectedRole]);

  const handleSearch = (field: 'name' | 'email', query: string) => {
    setSearchField(field);
    setSearchQuery(query);
    setPage(1);
  };

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
    setPage(1);
  };

  const paginatedData = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredData, page]);

  const pageCount = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  return (
    <Box
      sx={{
        width: '100%',
        gap: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }}
    >
      <Box
        sx={{
          width: '100%',
          gap: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end'
        }}
      >
        <Box sx={{ width: '100%', gap: 2, display: 'flex', alignItems: 'flex-end' }}>
          <Search onSearch={handleSearch} />
        </Box>
        <Box
          sx={{
            width: '100%',
            gap: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
          }}
        >
          <CustomButton />
          <RoleFilter roles={roles} selected={selectedRole} onChange={handleRoleChange} />
        </Box>
      </Box>
      <ProjectMembersTable members={paginatedData} />
      {pageCount > 1 && <PaginationControl count={pageCount} page={page} onChange={setPage} />}
    </Box>
  );
};
