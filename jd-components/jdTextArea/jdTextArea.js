angular.module('jdTextarea', ['ngMaterial', 'ngMdIcons'])
  .controller('jdTextareaCtrl', [function () {
}])
.directive('jdTextarea', function() {
  return {
    scope: {
  	  component : '=',
      parentScope : '=',
      pageScope : '='
    },
    transclude: true,
    templateUrl: '/jd-components/jdTextArea/jdTextArea.html',
    link: function (scope, element, attrs) {
      scope.$watch("parentScope[component.id].value", function(newVal, oldVal) {
        if(scope.component.type != 'date')
          scope.validate();
      }, true);
      
      scope.validators = scope.component.validators;
      scope.validate = function (isSubmit) {
        scope.parentScope[scope.component.id].error = null;
        scope.validators.some(function(validator) {
          var value = scope.component.type == 'date' ? scope.parentScope[scope.component.id].date : scope.parentScope[scope.component.id].value;
          if(value == undefined && !isSubmit)
            return true;
          var isSuccess = validator.function(value, validator.attributes);
          if(!isSuccess) 
              scope.parentScope[scope.component.id].error = validator.message;
          scope.error = !isSuccess; 
          return !isSuccess;    
        }, this);
        if(scope.component.type == 'date')
          scope.$apply();
      }
      scope.parentScope[scope.component.id].validate = scope.validate;      
    }
  }
}).directive('inputMask', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      if(scope.component.type == 'date') {
          scope.mask="9999-99-99";
          scope.dateformat="yy-mm-dd"
      }
      if(scope.mask) {
        $(element).mask(scope.mask);
      }
      if(scope.dateformat) {
        $(element).datepicker({ 
          dateFormat: scope.dateformat,
          onSelect: function(dateText, inst) { 
            $(this).change();
          }
        }).on("change", function() {
          // alert($(this).val() + "," + scope.dateText);
          var queryDate = $(this).val();
          var dateParts = queryDate.match(/(\d+)/g)
          var realDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);  

          $(this).datepicker({ dateFormat: 'yy-mm-dd' }); // format to show
          $(this).datepicker('setDate', realDate);
          scope.parentScope[scope.component.id].value = queryDate; 
          scope.parentScope[scope.component.id].date = realDate;
          scope.validate();
        });
      }
    }
  };
});