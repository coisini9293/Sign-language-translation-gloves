import Home from './pages/Home';
import Product from './pages/Product';
import Technology from './pages/Technology';
import Story from './pages/Story';
import Contact from './pages/Contact';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <Home />
  },
  {
    name: 'Product',
    path: '/product',
    element: <Product />
  },
  {
    name: 'Technology',
    path: '/technology',
    element: <Technology />
  },
  {
    name: 'Story',
    path: '/story',
    element: <Story />
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <Contact />
  }
];

export default routes;