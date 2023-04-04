import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { routes } from '../routes';
import Layout from './Layout';
import ErrorPage from '../pages/Error/Error';
import NotFoundPage from '../pages/NotFount/NotFount';

const theme = createTheme({
  palette: {}
});

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: routes,
      errorElement: <ErrorPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
  { basename: '/' }
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
