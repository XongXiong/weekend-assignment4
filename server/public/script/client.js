var myApp = angular.module('myApp', []);

myApp.controller('MainController', function () {
    var mc = this;
    var picture = pictures
    mc.pictures = picture;
    
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