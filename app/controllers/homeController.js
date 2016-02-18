(function(){
  'use strict';

  rpiApp.controller('HomeController', function($scope){
    $scope.vote = {
        name: '',
        email: '',
        cellNumber: '',
        counted: true
      };

      $scope.voteMessage  = 'Ja asseblief!';
      $scope.voteChange = function(vote){
        if(vote){
          $scope.voteMessage = 'Ja asseblief!';
        }
        else{
          $scope.voteMessage = 'Nee dankie';
        }
      };
  });
})();
