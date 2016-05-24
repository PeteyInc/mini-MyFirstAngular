angular.module('friendsList').controller('mainCtrl', function($scope) {

  $scope.name = "Jared";

  $scope.friends = ["Katie", "Isaac", "Matt", "Clayton"];

  $scope.addFriend = function() {
    $scope.friends.push($scope.newFriend);
    $scope.newFriend = "";
  }
});
