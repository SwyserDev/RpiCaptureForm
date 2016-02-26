(function(){
  'use strict';

  rpiApp.controller('HomeController', function($scope, $location, afriforumFactory){
    $scope.vote = {
        name: '',
        email: '',
        cellNumber: '',
        counted: false
      };

      $scope.voteMessage  = 'Ja asseblief!';
      $scope.voteChange = function(vote) {
        if(vote){
          $scope.voteMessage = 'Nee dankie';
        }
        else{
          $scope.voteMessage = 'Ja asseblief!';
        }
      };

      $scope.castVote = function(){
          $location.path('voted');
      };
  });
})();
