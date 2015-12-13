'use strict';

angular.module('socialFilters', []).filter('ago', function () {
  return function(input) {
    return input ? moment(input).fromNow() : '';
  };
});
