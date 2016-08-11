(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('App', []);

angular.module('App').config(function() {});

require('./services/authService');

require('./controllers/main/home');

require('./routes');


},{"./controllers/main/home":2,"./routes":3,"./services/authService":4}],2:[function(require,module,exports){
angular.module('App').controller('homeCont', ['$scope', function($scope) {}]);


},{}],3:[function(require,module,exports){



},{}],4:[function(require,module,exports){
angular.module('App').service('authService', [
  '$http', '$location', function($http, $location) {
    return this.authCheck = function(cb) {
      return $http.get('/api/me').then(function(returnData) {
        if (returnData.data.user) {
          return cb(returnData.data.user);
        } else {
          return $location.url('/');
        }
      });
    };
  }
]);


},{}]},{},[1])