var myApp = angular.module('myApp', []);

myApp.controller('MainController', function ($http) {
    var mc = this;

    // Define pictures as an empty array so that when we use a get route,
    // it populates inside
    mc.pictures = [];

    // Function to show the comment section on the click of the "Show Comments" button
    mc.showComment = function (picture) {
        // Changes the boolean value of the showComm key of the current picture object
        picture.showComm = !picture.showComm;
    }

    // Gets the array of pictures from the pictures.js router
    $http.get('/pictures').then(function (response) {
        // Sets the variable of mc.pictures equal to the array of pictures from the server
        mc.pictures = response.data;

    })

    // Adds a like to the like counter when you hit the "Love This!" button
    mc.addLike = function (picture) {
        // Adds 1 to the likeCounter key of the current picture object
        picture.likeCounter += 1;
    }

    // Adds a view when your mouse enters the image
    mc.addView = function (picture) {
        // Adds 1 to the viewCounter key of the current picture object
        picture.viewCounter += 1;
    }

    // Shows the picture when you enter/leave the image/Desc
    mc.picShow = function (picture) {
        // Changes the boolean value of the showDesc/ShowPic key of the current picture object
        picture.showDesc = !picture.showDesc;
        picture.showPic = !picture.showPic;
    }
});