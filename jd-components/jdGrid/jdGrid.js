angular.module('jdGrid', ['ngMaterial'])
  .controller('jdGridCtrl', [function () {
}])
.directive('jdGrid', function($http) {
  return {
    scope: {
      component : '=',
      parentScope : '=',
      pageScope : '='
    },
    replace: true,
    transclude: true,
    templateUrl: '/jd-components/jdGrid/jdGrid.html',
    link: function(scope, element, attrs) {
      scope.$watch("parentScope[component.id].value", function(newVal, oldVal) {
        newVal = newVal ? newVal : [];
        $(element).handsontable({
          data: newVal,
          colHeaders: scope.cols(newVal),
          manualColumnResize: true,
          fixedColumnsLeft: 2,
          contextMenu: true,
          manualColumnFreeze: true,
          minSpareRows: 0,
        });
        scope.parentScope[scope.component.id].value = newVal;
      }, true);
      
      scope.cols = function(data) {
        if(data && data.length > 0) {
          var lst = [];
          for (var prop in data[0])  
            lst.push(prop);
          return lst;
        } else 
          return [];
      }
      
      // scope.parentScope[scope.component.id].value = [
      //      ['2012', 100000000000, 11, 12, 13, 15, 16],
      //      ['2013', 10, 11, 12, 13, 15, 16],
      //      ['2014', 10, 11, 12, 13, 15, 16],
      //      ['2015', 10, 11, 12, 13, 15, 16],
      //      ['2016', 10, 11, 12, 13, 15, 16]
      //    ];
      
      // scope.table = $(element).handsontable({
      //  data: scope.parentScope[scope.component.id].value,
      //  colHeaders: ['', 'Kia', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
      //  manualColumnResize: true,
      //  minSpareRows: 0
      // });
    }
  }
});

