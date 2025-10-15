import { ProjectMembersTable, Search } from '@components/index';
import { Box } from '@mui/material';
import type { FC } from 'react';

export const ProjectMembers: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
      <Search onSearch={(field, query) => console.log(field, query)} />
      <ProjectMembersTable />
    </Box>
  );
};
