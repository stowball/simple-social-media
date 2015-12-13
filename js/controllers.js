'use strict';

var socialControllers = angular.module('socialControllers', ['socialServices']);

socialControllers.controller('postCtrl', ['$rootScope', '$scope',
  function ($rootScope, $scope) {
    $rootScope.myPosts = $rootScope.myPosts || [];

    function setPost(postArray) {
      return postArray.unshift({
        id: 0,
        name: 'You',
        date: moment(new Date()).format('YYYY-MM-DDTHH:mm:ss'),
        text: $scope.status
      });
    }

    $scope.postStatus = function () {
      setPost($rootScope.myPosts);
      setPost($rootScope.allPosts);

      $scope.status = '';
    };
  }]
);

socialControllers.controller('friendsCtrl', ['$scope', '$http', 'friendsService',
  function ($scope, $http, friendsService) {
    friendsService.get().then(function (data) {
      $scope.friends = data;
    });
  }]
);

socialControllers.controller('myFeedCtrl', ['$rootScope', '$scope',
  function ($rootScope, $scope) {
    if (!$rootScope.myPosts) {
      return;
    }
    
    $scope.posts = $rootScope.myPosts;
  }]
);

socialControllers.controller('singleFeedCtrl', ['$scope', '$http', '$routeParams', 'feedService',
  function ($scope, $http, $routeParams, feedService) {
    $http.get('data/posts/' + $routeParams.id + '.json').success(function (data) {
      $scope.id = $routeParams.id;
      $scope.name = $routeParams.name;
      $scope.posts = feedService.sort(data);
    });
  }]
);

socialControllers.controller('feedCtrl', ['$rootScope', '$scope', '$http', 'friendsService', 'feedService',
  function ($rootScope, $scope, $http, friendsService, feedService) {
    var friendObj;
    $rootScope.allPosts = _.clone([$rootScope.myPosts]) || [];

    friendsService.get().then(function (data) {
      data.forEach(function (friend, index) {
        $http.get('data/posts/' + friend.id + '.json').success(function (response) {
          friendObj = response.map(function (status) {
            return _.assign(status, friend);
          });

          $rootScope.allPosts.push(friendObj);

          if (data.length === index + 1) {
            $rootScope.allPosts = feedService.sort($scope.allPosts);
          }
        });
      });
    });
  }]
);
