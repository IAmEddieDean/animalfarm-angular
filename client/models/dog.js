'use strict';

angular.module('animalfarm')
.factory('Dog', function($http, nodeUrl){
  
  function Dog(obj){
    this.name = obj.name;
    this.age = obj.age;
    this.sex = obj.sex;
    this.photo = obj.photo;
  }
  Dog.prototype.save = function(){
    return $http.post(nodeUrl + '/dogs', this);
  };
  
  Dog.saveChange = function(dogId, dog){
    
    return $http.put(nodeUrl + '/dogs/' + dogId + '/edit', dog);
  };
  
  Dog.destroy = function(dogId){
    return $http.delete(nodeUrl + '/dogs/' + dogId);
  };

  Dog.find = function(){
    return $http.get(nodeUrl + '/dogs');
  };
  
  Dog.findById = function(dogId){
    return $http.get(nodeUrl + '/dogs/' + dogId);
  };
  
  
  return Dog;
});
