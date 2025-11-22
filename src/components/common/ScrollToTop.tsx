import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop组件
 * 监听路由变化，每次切换页面时自动滚动到顶部
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 页面切换时滚动到顶部
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
