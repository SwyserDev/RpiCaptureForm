(function(){
  'use strict';

  rpiApp.factory('afriforumFactory', function($http, $q){
      return {
          postVote: function(){
              return $http.post('/api/postVote');
          },
          getVoteCount:  function(){
              return $http.get('/api/getVoteCount');
          }
      }
    });
})();
