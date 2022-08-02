const express = require('express');
const userRouter = require('./v1/users.route');
const config = require('../config/config');

const router = express.Router();

/* const testRoutes = [
  {
    path: '/test',
    route: test,
  },
]; */

const devRoutes = [
  {
    path: '/user',
    route: userRouter,
  },
];

/* testRoutes.forEach((route) => {
  router.use(route.path, route.route);
}); */

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
