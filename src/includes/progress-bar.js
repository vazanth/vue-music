import NProgress from 'nprogress';

const ProgressBar = (router) => {
  router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });
  router.afterEach(NProgress.done);
};

export default ProgressBar;
