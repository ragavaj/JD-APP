angular.module('jdButton', ['ngMaterial'])
  .controller('jdButtonCtrl', [function () {
}])
.directive('jdButton', function($http) {
  return {
    scope: {
      component : '=',
      parentScope : '=',
      pageScope : '='
    },
    transclude: true,
    templateUrl: '/jd-components/jdButton/jdButton.html',
    link: function(scope, element, attrs) {        
      scope.getCall = function (url, args, callback) {
        $http.get(url, {
          params: args
        }).success(function(data, status, headers, config) {
          callback(data);
        }).error(function() {
          callback(null);
        });
      }
      
      scope.services = {
        get : scope.getCall
      }
    }
  }
});

