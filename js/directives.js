'use strict';

socialApp.directive('friends', function () {
  return {
    controller: 'friendsCtrl',
    templateUrl: 'partials/friends.html'
  }
});

socialApp.directive('post', function () {
  return {
    scope: {
      id: '@',
      name: '@',
      date: '@',
      text: '@'
    },
    templateUrl: 'partials/post.html'
  }
});
