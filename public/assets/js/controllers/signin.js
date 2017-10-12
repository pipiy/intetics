app.controller("SignInController", ['$scope', function($scope) {
  $scope.signIn = function() {
    if ($scope.myForm.$valid) {
      window.location.href = "home.html";
    }
  };
}]);
