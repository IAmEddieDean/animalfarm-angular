'use strict';

angular.module('animalfarm')
.controller('DogsNewCtrl', function($scope, Dog, $state, $window){
  $scope.add = function(obj){
    var dog = new Dog(obj);
    dog.save()
    .then(function(){
      $state.go('dogs.list');
    })
    .catch(function(){
      $window.swal({title: 'Dog Error', text: 'There was a problem with your dog. Please get a new dog.', type: 'error'});
    });
  };
});
