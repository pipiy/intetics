app.controller("SignUpController", ['$scope', function($scope) {
  $scope.signUp = function() {
    if ($scope.myForm.$valid) {
      if ($scope.password === $scope.retypePassword) {
        window.location.href = "home.html";
      } else {
        $scope.alert = true;
      };
    };
  };
}]);
