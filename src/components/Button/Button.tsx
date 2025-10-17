import AddIcon from '@mui/icons-material/Add';
import { Button, Tooltip } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import React from 'react';

interface AddParticipantButtonProps extends Omit<ButtonProps, 'onClick'> {
  onClick?: () => void;
  label?: string;
}

export const CustomButton: React.FC<AddParticipantButtonProps> = ({
  onClick,
  label = 'Добавить участника',
  disabled = false,
  ...rest
}) => {
  return (
    <Tooltip title={label}>
      <span>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={onClick}
          disabled={disabled}
          {...rest}
          sx={{
            textTransform: 'none',
            borderRadius: 2,
            px: 2.5,
            py: 1,
            ...rest.sx
          }}
          aria-label={label}
        >
          {label}
        </Button>
      </span>
    </Tooltip>
  );
};
