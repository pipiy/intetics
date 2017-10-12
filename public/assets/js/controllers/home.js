app.controller("HomeController", ['$scope', '$uibModal', '$document', function($scope, $uibModal, $document) {
  var Image = function(attributes) {
		attributes = attributes || {};

		this.name = attributes.name;
    this.src = attributes.src;
		this.tags = attributes.tags;
		this.description = attributes.description;
	};

  $scope.images = [
    {src: "assets/images/grid-1.jpg", tags: "Man", name: "", description: ""},
    {src: "assets/images/grid-2.jpg", tags: "Man", name: "", description: ""},
    {src: "assets/images/grid-1.jpg", tags: "Man", name: "", description: ""},
    {src: "assets/images/grid-1.jpg", tags: "Computer", name: "", description: ""},
    {src: "assets/images/grid-2.jpg", tags: "Woman", name: "", description: ""},
    {src: "assets/images/grid-3.jpg", tags: "Woman", name: "", description: ""},
    {src: "assets/images/grid-4.jpg", tags: "Computer", name: "", description: ""},
    {src: "assets/images/grid-5.jpg", tags: "Work", name: "", description: ""},
    {src: "assets/images/grid-6.jpg", tags: "City", name: "", description: ""},
    {src: "assets/images/grid-7.jpg", tags: "Nature", name: "", description: ""},
    {src: "assets/images/grid-8.jpg", tags: "Nature", name: "", description: ""},
    {src: "assets/images/grid-9.jpg", tags: "Business", name: "", description: ""},
    {src: "assets/images/grid-9.jpg", tags: "Business", name: "", description: ""},
    {src: "assets/images/grid-1.jpg", tags: "Animals", name: "", description: ""},
    {src: "assets/images/grid-8.jpg", tags: "Animals", name: "", description: ""},
    {src: "assets/images/grid-1.jpg", tags: "Man", name: "", description: ""},
    {src: "assets/images/grid-2.jpg", tags: "Man", name: "", description: ""},
    {src: "assets/images/grid-1.jpg", tags: "Man", name: "", description: ""},
    {src: "assets/images/grid-1.jpg", tags: "Computer", name: "", description: ""},
    {src: "assets/images/grid-2.jpg", tags: "Woman", name: "", description: ""},
    {src: "assets/images/grid-3.jpg", tags: "Woman", name: "", description: ""},
    {src: "assets/images/grid-4.jpg", tags: "Computer", name: "", description: ""},
    {src: "assets/images/grid-5.jpg", tags: "Work", name: "", description: ""}
  ];

  $scope.images = _.map($scope.images, function(attributes) {
		return new Image(attributes);
	});

  $(function() {
    for (var i=0; i<=$scope.images.length; i++) {
      if (i <= 19) {
        $(".thumbnail").css("display: none")
      }
    }
  });

  $(function() {
    var availableTags = [
      "Man",
      "Computer",
      "Woman",
      "Work",
      "City",
      "Nature",
      "Business",
      "Animals"
    ];
    $( "#searchbar" ).autocomplete({
      source: availableTags
    });
  });
  $scope.loading = true;
  $scope.scrollToEndWindow = function(dir) {
    if (dir === "bottom") {
      for (var i=0;  i<=$scope.images.length; i++) {
        i.id
      }
    }
  };

  $scope.open = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        images: function () {
          return $scope.images;
        }
      }
    });

    modalInstance.result.then(function (image) {
      $scope.images.push(new Image(image));
    });
  };
}]);
