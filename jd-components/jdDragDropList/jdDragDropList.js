angular.module('jdDragDropList', ['ngMaterial', 'dndLists'])
  .controller('jdDragDropListCtrl', [function () {
}])
.directive('jdDragDropList', function() {
  return {
    scope: {
      component : '=',
      pageScope : '='
    },
    transclude: true,
    templateUrl: '/jd-components/jdDragDropList/jdDragDropList.html',
    link: function($scope, element, attrs) {
        $scope.models = {
            selected: null,
            templates: [
                {type: "item", label: "Rule", id: 3},
                {type: "container", label: "AND", id: 1, columns: [[]]},
                {type: "container", label: "OR", id: 2, columns: [[]]}
            ],
            dropzones: {
                "A": [
                ]
            }
        };

        $scope.$watch('models.dropzones', function(model) {
            $scope.modelAsJson = angular.toJson(model, true);
        }, true);
    }
  }
});

