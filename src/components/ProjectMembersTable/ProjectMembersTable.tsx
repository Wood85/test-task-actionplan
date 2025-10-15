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
import React from 'react';

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
  }
];

export const ProjectMembersTable: React.FC = () => {
  return (
    <Box component={Paper} elevation={2}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Имя</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Роль</TableCell>
              <TableCell>Статус</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.map((member) => (
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
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
