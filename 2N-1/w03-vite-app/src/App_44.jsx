import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomeLayoutpage_44, Homepage_44, BlogStaticPage_44, BlogLocalJsonPage_44 } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutpage_44 />,
    children: [
      {
        index: true,
        element: <Homepage_44 />,
      },
      {
        path: 'static_44',
        element: <BlogStaticPage_44 />,
      },
            {
        path: 'localjson_44',
        element: <BlogLocalJsonPage_44 />,
      },
    ],
  },
]);

const App_44 = () => {
  return <RouterProvider router={router} />;
};

export default App_44;