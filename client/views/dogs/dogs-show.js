'use strict';

angular.module('animalfarm')
.controller('DogsShowCtrl', function($scope, Dog, $state){
  Dog.findById($state.params.dogId)
  .then(function(response){
    $scope.dog = response.data;
  });
});
