app.controller("HomeController", ['$scope', function($scope) {
  $scope.images = [
    {id: 1, src: "", name: "Man"},
    {id: 2, src: "", name: "Man"},
    {id: 3, src: "", name: "Man"},
    {id: 4, src: "", name: "Computer"},
    {id: 5, src: "", name: "Woman"},
    {id: 6, src: "", name: "Woman"},
    {id: 7, src: "", name: "Computer"},
    {id: 8, src: "", name: "Work"},
    {id: 9, src: "", name: "City"},
    {id: 10, src: "", name: "Nature"},
    {id: 11, src: "", name: "Nature"},
    {id: 12, src: "", name: "Business"},
    {id: 13, src: "", name: "Business"},
    {id: 14, src: "", name: "Animals"},
    {id: 15, src: "", name: "Animals"},
    {id: 16, src: "", name: "Man"},
    {id: 17, src: "", name: "Man"},
    {id: 18, src: "", name: "Man"},
    {id: 19, src: "", name: "Computer"},
    {id: 20, src: "", name: "Woman"},
    {id: 21, src: "", name: "Woman"},
    {id: 22, src: "", name: "Computer"},
    {id: 23, src: "", name: "Work"},
    {id: 24, src: "", name: "CIty"},
    {id: 25, src: "", name: "Nature"},
    {id: 26, src: "", name: "Nature"},
    {id: 27, src: "", name: "Business"},
    {id: 28, src: "", name: "Business"},
    {id: 29, src: "", name: "Animals"},
    {id: 30, src: "", name: "Animals"}
  ];
  $( function() {
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
  } );
}]);
