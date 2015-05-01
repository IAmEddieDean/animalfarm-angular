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

  
  
  
  return Dog;
});
