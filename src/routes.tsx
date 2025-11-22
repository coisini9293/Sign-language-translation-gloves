import Home from './pages/Home';
import About from './pages/About';
import Technology from './pages/Technology';
import Progress from './pages/Progress';
import Cases from './pages/Cases';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
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
    name: '关于我们',
    path: '/about',
    element: <About />
  },
  {
    name: '技术详解',
    path: '/technology',
    element: <Technology />
  },
  {
    name: '验证与进展',
    path: '/progress',
    element: <Progress />
  },
  {
    name: '用户案例',
    path: '/cases',
    element: <Cases />
  },
  {
    name: '支持与资源',
    path: '/resources',
    element: <Resources />
  },
  {
    name: '博客动态',
    path: '/blog',
    element: <Blog />
  },
  {
    name: '联系我们',
    path: '/contact',
    element: <Contact />
  }
];

export default routes;