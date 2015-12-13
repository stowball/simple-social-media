'use strict';

var socialServices = angular.module('socialServices', []);

socialServices.factory('friendsService', ['$http',
  function ($http) {
    return {
      get: function () {
        return $http.get('data/friends.json').then(function (response) {
          return response.data;
        })
      }
    }
  }]
);

socialServices.factory('feedService',
  function () {
    return {
      sort: function (feed) {
        return _.chain(feed)
                .flatten()
                .sortBy('date')
                .reverse()
                .value();
    }
  }
});
