angular.module('offerApp', ['jdContainer', 'jdDragDropList'])
  .controller('offerAppCtrl', ['$scope' , searchAppCtrl]);

function searchAppCtrl ($scope) {
  $scope.offerPanel = JDAPP.toView(new offerDetailsPanel());
}