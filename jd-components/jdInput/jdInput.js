angular.module('jdInput', ['ngMaterial', 'ngMdIcons'])
  .controller('jdInputCtrl', [function () {
}])
.directive('jdInput', function() {
  return {
    scope: {
  	  component : '=',
      parentScope : '=',
      pageScope : '='
    },
    transclude: true,
    templateUrl: '/jd-components/jdInput/jdInput.html',
    link: function (scope, element, attrs) {
      scope.$watch("parentScope[component.id].value", function(newVal, oldVal) {
        if(scope.component.type != 'date')
          scope.validate();
      }, true);
      
      scope.bluraction = function () {
        if(scope.component.autocomplete) {
          var needle = scope.inputValues.indexOf(scope.input.val());
          if(needle < 0) {
            // scope.input.val("");
            scope.parentScope[scope.component.id].error = "Invalid Value!";
            scope.error = true;
          } else {
            scope.parentScope[scope.component.id].error = null;
            scope.error = false;
          }
        }
      }
      
      if(scope.component.autocomplete) {
        scope.inputValues = scope.component.autocomplete();
        scope.input = $($(element).find('input')[0]);
        scope.input.autocomplete({
          source : scope.inputValues 
        }); 
      }
      
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
}).directive('time', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
          $(element).timepicker({
            selectOnBlur : true,
            disableTextInput : true,
            lang : {'am':' AM', 'pm':' PM'},
          }).on("change", function() {
            scope.parentScope[scope.component.id].time = $(this).val();
          });       
    }   
  }
});