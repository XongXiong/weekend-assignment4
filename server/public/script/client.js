var myApp = angular.module('myApp', []);

myApp.controller('MainController', function ($http) {
    var mc = this;
    
    mc.pictures = [];
    
    $http.get('/pictures').then(function(response) {
        console.log(response);
        mc.pictures = response.data;
        
    })

    mc.addLike = function(picture) {
        picture.likeCounter += 1;
        console.log(picture.likeCounter);
    }

    mc.addView = function(picture) {
        picture.viewCounter +=1;
    }

    mc.picShow = function(picture) {
        picture.showFact = !picture.showFact;
        picture.showPic = !picture.showPic;
    }
});