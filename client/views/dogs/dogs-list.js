'use strict';

angular.module('animalfarm')
.controller('DogsListCtrl', function($scope, Dog){
  Dog.find()
  .then(function(response){
    $scope.dogs = response.data.dogs;
  });
  
  $scope.destroy = function(obj){
    Dog.destroy(obj._id)
    .then(function(response){
      _.remove($scope.dogs, function(dog){
        return dog._id === response.data._id;
      });
    });
  };
});
