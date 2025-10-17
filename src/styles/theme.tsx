import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: '#f5f5f5',
          fontWeight: 600
        },
        body: {
          fontSize: 14,
          fontWeight: 600,
          padding: '8px 16px'
        }
      }
    }
  }
});
