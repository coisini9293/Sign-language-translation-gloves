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
    name: '首页',
    path: '/',
    element: <Home />
  },
  {
    name: '产品介绍',
    path: '/product',
    element: <Product />
  },
  {
    name: '技术原理',
    path: '/technology',
    element: <Technology />
  },
  {
    name: '背景故事',
    path: '/story',
    element: <Story />
  },
  {
    name: '联系我们',
    path: '/contact',
    element: <Contact />
  }
];

export default routes;