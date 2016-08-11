var middleware, moment, multipart;

moment = require('moment');

multipart = require('connect-multiparty');

middleware = {
  authorize: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return res.redirect('/');
    } else {
      return next();
    }
  },
  setLocals: function(req, res, next) {
    var timeStamp;
    timeStamp = moment().format('X');
    res.locals.user = req.user;
    res.locals.ENV = global.process.env.NODE_ENV === 'live' ? global.process.env.NODE_ENV : void 0;
    res.locals.timeStamp = timeStamp;
    return next();
  },
  multi: multipart()
};

module.exports = function(app, passport, redis) {
  var accounts, auth;
  accounts = require('../controllers/accounts');
  auth = require('../controllers/auth');
  app.get('/api/me', function(req, res) {
    console.log('API ME');
    console.log('REQ USER', req.user);
    return res.send({
      user: req.user
    });
  });
  app.post('/admin/login', auth.login);
  return app.get('/*', middleware.setLocals, function(req, res) {
    return res.render('index');
  });
};
