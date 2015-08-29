angular.module('jdContainer', ['ngMaterial', 'jdInput', 'jdButton', 'jdTextarea'])
  .controller('jdContainerCtrl', [function () {
}])
.directive('jdContainer', function($compile) {
  return {
    scope: {
      component : '=',
      pageScope : '='
    },
    transclude: true,
    templateUrl: '/jd-components/jdContainer/jdContainer.html',
    link: function(scope, element, attrs) {
    },
    compile: function(tElement, tAttr, transclude) {
      var contents = tElement.contents().remove();
      var compiledContents;
      return function(scope, iElement, iAttr) {
          if(!compiledContents) {
              compiledContents = $compile(contents, transclude);
          }

          compiledContents(scope, function(clone, scope) {
                   iElement.append(clone); 
          });
          scope.containerStyle = scope.component.title ? "jd-container-title" : "jd-container-notitle";
      };
    }
  }
});

