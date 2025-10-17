import { ProjectMembers } from '@components/index';
import { Typography } from '@mui/material';

import './App.css';

export const App = () => {
  return (
    <>
      <Typography variant="body1" align="center" sx={{ mb: 2 }}>
        Изменил количество участников по 5 на странице, т.к. их приходит всего 10 и в этом слусае не
        видно пагинации
      </Typography>
      <ProjectMembers />
    </>
  );
};
