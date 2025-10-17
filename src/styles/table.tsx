import { createTheme } from '@mui/material/styles';

export const table = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: ({ theme }) => ({
          backgroundColor: '#f5f5f5',
          fontWeight: 600,
          [theme.breakpoints.down(700)]: {
            fontSize: '12px'
          }
        }),
        body: ({ theme }) => ({
          fontSize: 14,
          fontWeight: 600,
          padding: '8px 16px',
          [theme.breakpoints.down(700)]: {
            fontSize: '12px',
            padding: '6px 12px'
          }
        })
      }
    }
  }
});
