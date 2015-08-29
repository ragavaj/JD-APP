angular.module('searchApp', ['jdContainer'])
  .controller('searchAppCtrl', ['$scope' , searchAppCtrl]);

function searchAppCtrl ($scope) {
  $scope.searchWidget = JDAPP.toView(new searchWidget());
}