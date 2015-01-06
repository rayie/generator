angular
.module('baseApp', [ 'ui.bootstrap' ])
.controller('BaseAppController', [
  '$scope', 
  function($scope){
    $scope.subtitle = "Express with Angular-Bootstrap!";

    // for date picker
    $scope.today = function() { $scope.dt = new Date(); };
    $scope.today(); 
    $scope.clear = function () { $scope.dt = null; }; 
    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ));
    }; 
    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin(); 
    $scope.open = function($event) {
         console.log("got open");
         $event.preventDefault();
         $event.stopPropagation(); 
         $scope.opened = true;
    };
    $scope.dateOptions = { formatYear: 'yy', startingDay: 1 }; 
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0]; 
  }
]);
