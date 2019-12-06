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
  router.get('/portfolio', controller.portfolio.index);
  router.get('/service', controller.service.index);
  router.get('/testimonials', controller.testimonials.index);
  router.get('/price', controller.price.index);
  router.get('/demo', controller.demo.index);
  router.get('/demo/index', controller.demo.index);
  router.get('/demo/fetch', controller.demo.fetch);
  router.get('/cook/', controller.cook.list);
  router.get('/cook/:id', controller.cook.listOne);
};
