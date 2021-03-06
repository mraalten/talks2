// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('talks2', ['ionic'])
    .controller('Talks2Controller', ['$scope', '$ionicPopup', function($scope, $ionicPopup) {
        $scope.contacts = [
            { img: 'Aalten-Richard.jpg',
              name: 'Aalten Richard',
              lastLine: 'Fijne feestdagen'},
            { img: 'Aalten-Martijn.png',
                name: 'Aalten Martijn',
                lastLine: 'Ik ga nu rijden'}
        ];

        $scope.doAlert = function () {
            $scope.data = {}

            // Custom popup
            var myPopup = $ionicPopup.alert({
                title: 'Nieuw bericht',
                template: 'Ga je vanavond mee uit eten?'
            });

            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });
        };

    }])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
