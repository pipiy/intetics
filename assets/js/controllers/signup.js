app.controller("SignUpController", ['$scope', function($scope) {
  $scope.signUp = function() {
    debugger;
    if ($scope.myForm.$valid) {
      window.location.href = "signin.html";
    }
  };
}]);
