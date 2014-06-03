'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('index', ['$scope', function($scope) { 
        $(".show").click(function(){
            $(this).animate({marginLeft:-400} ,function(){
                $(this).find("img").attr("src", "./img/me_60.png");
            });
        });
  }]);
