import {
  ProjectMembersTable,
  Search,
  RoleFilter,
  PaginationControl,
  CustomButton
} from '@components/index';
import { ITEMS_PER_PAGE, roles } from '@config/constants';
import { useMembersFilter } from '@lib/useMembersFilter';
import { usePagination } from '@lib/usePagination';
import { Box, Alert, CircularProgress } from '@mui/material';
import { useUsersQuery } from '@services/useUsersQuery';
import type { FC } from 'react';

export const ProjectMembers: FC = () => {
  const { data: users = [], isLoading, isError, error } = useUsersQuery();

  const { filteredData, handleSearch, handleRoleChange, selectedRole } = useMembersFilter({
    users
  });

  const { page, setPage, paginatedData, pageCount } = usePagination({
    data: filteredData,
    itemsPerPage: ITEMS_PER_PAGE
  });

  const onSearch = (field: 'name' | 'email', query: string) => {
    handleSearch(field, query);
    setPage(1);
  };

  const onRoleChange = (role: string) => {
    handleRoleChange(role);
    setPage(1);
  };

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
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <CircularProgress />
        </Box>
      )}
      {isError && (
        <Alert severity="error">
          Не удалось загрузить данные: {(error as Error)?.message ?? 'Попробуйте позже'}
        </Alert>
      )}
      {users && !isLoading && !isError && (
        <>
          <Box
            sx={{
              width: '100%',
              gap: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap'
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <Search onSearch={onSearch} />
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexDirection: 'column',
                alignItems: 'flex-end'
              }}
            >
              <CustomButton children="Добавить участника" />
              <RoleFilter roles={roles} selected={selectedRole} onChange={onRoleChange} />
            </Box>
          </Box>

          <ProjectMembersTable members={paginatedData} />

          {pageCount > 1 && <PaginationControl count={pageCount} page={page} onChange={setPage} />}
        </>
      )}
    </Box>
  );
};
