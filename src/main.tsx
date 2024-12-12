import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import Home from './routes/home';
import ErrorPage from './routes/ErrorPage';
import Post from './routes/post';
import Layout from './components/Layout';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'posts/:userId',
        element: <Post />,
      },
    ],
  },
]);

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>{' '}
  </StrictMode>
);
