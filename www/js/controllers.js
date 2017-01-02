angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.style="body white";

  $scope.changeTextWhite = () =>{
      $scope.style = "body white";
  }
  
  $scope.changeTextYellow = () =>{
      $scope.style = "body yellow";
  }


})

.controller('ChatsCtrl', function($scope, Meows) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Meows.all();
  $scope.remove = function(meow) {
    Meows.remove(meow);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Meows) {
  $scope.chat = Meows.get($stateParams.chatId);
})
.controller('NewCatCtrl', function($scope, Meows) {
  $scope.newCat = new Cat(); 

  $scope.addCat = function(){
      console.log($scope.newCat.catName);
      console.log($scope.newCat.ownerName);
      console.log($scope.newCat.catMailId);
      console.log($scope.newCat.address);
      console.log($scope.newCat.vetName);
  }
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
