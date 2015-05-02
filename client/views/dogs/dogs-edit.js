'use strict';

angular.module('animalfarm')
.controller('DogsEditCtrl', function($scope, Dog, $state, $window){
  Dog.findById($state.params.dogId)
  .then(function(response){
    $scope.dog = response.data;
  });
  $scope.save = function(obj){
    Dog.saveChange(obj._id, obj)
    .then(function(){
      $state.go('dogs.list');
    })
    .catch(function(){
      $window.swal({title: 'Dog Error', text: 'There was a problem with your dog. Please get a new dog.', type: 'error'});
    });
  };
});
