'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // user
  router.get('/login', controller.weapp.login);
  router.get('/user', controller.weapp.user);
  router.get('/cos_auth', controller.weapp.cos_auth);

  router.get('/', controller.home.index);
  router.get('/about', controller.about.index);
  router.get('/blog', controller.blog.index);
  router.get('/contact', controller.contact.index);
  router.get('/faq', controller.faq.index);
  router.get('/team', controller.team.index);
  router.get('/service', controller.service.index);
  router.get('/testimonials', controller.testimonials.index);
  router.get('/price', controller.price.index);
  router.get('/demo', controller.demo.index);
  router.get('/demo/index', controller.demo.index);
  router.get('/demo/fetch', controller.demo.fetch);

  router.get('/portfolio', controller.portfolio.index);
  router.get('/portfolio/four', controller.portfolio.four);
  router.get('/portfolio/single', controller.portfolio.single);

  router.get('/cook/', controller.cook.index);
  router.get('/cook/create', controller.cook.create);
  router.get('/cook/update', controller.cook.update);
  router.get('/cook/delete', controller.cook.delete);
  router.get('/cook/:id', controller.cook.detail);
  router.post('/cook/upload', controller.cook.upload);

  // 验证码
  router.get('/verify', controller.user.verify);
  // 注册页面
  router.get('/user/register', controller.user.register);
  // 注册请求
  router.post('/user/register', controller.user.doregister);
  // 登录页面
  router.get('/user/login', controller.user.login);
  // 登录请求
  router.post('/user/login', controller.user.dologin);

  const userAuth = app.middleware.userauth();
  router.get('/user/auth', userAuth, controller.user.auth);
  // router.get('/user/auth', controller.user.auth);
};
