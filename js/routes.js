'use strict';

socialApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/feed.html',
        controller: 'feedCtrl'
      })
      .when('/friend/0/You', {
        templateUrl: 'partials/my-feed.html',
        controller: 'myFeedCtrl'
      })
      .when('/friend/:id/:name', {
        templateUrl: 'partials/single-feed.html',
        controller: 'singleFeedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]
);
