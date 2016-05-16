'use strict';

angular.module('myApp.version.version-directive', [ 'appVersion1' ])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
