import { ProjectMembers } from '@components/index';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@styles/theme';
import './App.css';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProjectMembers />
    </ThemeProvider>
  );
};
