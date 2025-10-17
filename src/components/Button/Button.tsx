import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import React from 'react';

interface CustomButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children }) => (
  <Button
    variant="contained"
    color="primary"
    startIcon={<AddIcon />}
    onClick={onClick}
    sx={{ borderRadius: 2, textTransform: 'none' }}
  >
    {children}
  </Button>
);
