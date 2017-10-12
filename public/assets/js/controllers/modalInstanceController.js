app.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance, images) {
  $scope.images = images;
  $scope.tags = [];
  $scope.addTag = function() {
    $scope.tags.push($scope.tag);
    $scope.tag = '';
  }
  $scope.removeTag = function(index) {
    $scope.tags.splice(index, 1);
  }

  $scope.ok = function () {
    debugger;
    $uibModalInstance.close({ name: $scope.name, tags: $scope.tags, description: $scope.description, src: "assets/images/grid-1.jpg"});
  };
}]);
