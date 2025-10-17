import type { Member } from '@app-types/member';
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { table } from '@styles/table';

import React from 'react';

interface ProjectMembersTableProps {
  members: Member[];
}

export const ProjectMembersTable: React.FC<ProjectMembersTableProps> = ({ members }) => {
  return (
    <ThemeProvider theme={table}>
      <Box component={Paper} elevation={2}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Аватар</TableCell>
                <TableCell>Имя</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Роль</TableCell>
                <TableCell>Статус</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <Avatar src={member.avatar} alt={member.name} />
                  </TableCell>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>{member.status}</TableCell>
                </TableRow>
              ))}

              {members.length === 0 && (
                <TableRow>
                  <TableCell sx={{ colSpan: 5, align: 'center' }}>Ничего не найдено</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
};
