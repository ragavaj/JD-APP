angular.module('jdList', ['ngMaterial', 'data-table'])
  .controller('jdListCtrl', [function () {
}])
.directive('jdList', function($http) {
  return {
    scope: {
      component : '=',
      parentScope : '=',
      pageScope : '='
    },
    replace: true,
    transclude: 'true',
    templateUrl: '/jd-components/jdList/jdList.html',
    link: function(scope, element, attrs) {
      
    }
  }
});

