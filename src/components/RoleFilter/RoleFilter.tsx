import type { Role } from '@app-types/member';
import { Box, FormControl, MenuItem, Select, OutlinedInput } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import React from 'react';

interface RoleFilterProps {
  roles: readonly Role[];
  selected: string;
  onChange: (role: string) => void;
}

export const RoleFilter: React.FC<RoleFilterProps> = ({ roles, selected, onChange }) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    onChange(e.target.value);
  };

  return (
    <Box sx={{ width: 200 }}>
      <FormControl fullWidth size="small">
        <Select value={selected} onChange={handleChange} input={<OutlinedInput />}>
          <MenuItem value="all">Все роли</MenuItem>
          {roles.map((role) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
