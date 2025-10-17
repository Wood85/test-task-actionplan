import { Box, Pagination } from '@mui/material';
import React from 'react';

interface PaginationControlProps {
  count: number;
  page: number;
  onChange: (page: number) => void;
}

export const PaginationControl: React.FC<PaginationControlProps> = ({ count, page, onChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
      <Pagination
        count={count}
        page={page}
        onChange={(_, value) => onChange(value)}
        color="primary"
        shape="rounded"
      />
    </Box>
  );
};
