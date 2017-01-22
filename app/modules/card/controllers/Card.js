/**
 * Created by alvaro on 12/6/16.
 */

var b = require('buffer');
require(base_dir + '/app/lib/Keyboardcontrols.js');
initTTS();
var tts;
cardModule.controller('CardController', function ($rootScope, $scope, CardIteratorRespository) {
      $scope.card = {primary_card: "Hallo", secondary_card: "Hola"};
      $rootScope.card = $scope.card;
      init();
      function init() {
          new KeyboardControl($scope);
      }

    function getImage() {
        if($scope.card.image != null) {
            $scope.card.image = $scope.card.image.toString();
        }
    }

    $scope.getNextCard = function() {
          flipToMain().then(function () {
                    CardIteratorRespository.getNextCard().then(function (card) {
                    $scope.card = card;
                    getImage();
                    $rootScope.card = $scope.card;
                    tryToSpeak($scope.card.primary_card, 'de');
              }, function (err) {
                  $scope.card = {primary_card: "", secondary_card: ""};
              });
          });

      };

      $scope.getPreviousCard = function () {
          flipToMain().then(function () {
                    CardIteratorRespository.getPreviousCard().then(function (card) {
                    $scope.card = card;
                    $rootScope.card = $scope.card;
                    tryToSpeak($scope.card.primary_card, 'de');
              }, function (err) {
                  $scope.card = {primary_card: "", secondary_card: ""};
              });
          });

      };


});

function initTTS() {
    if(window.process.env.debug != 'true') {
        require(base_dir + '/app/lib/ResponsiveTTSVoice.js');
        tts = new ResponsiveTTSVoice();
    }
}

function tryToSpeak(word, lang) {
    if(window.process.env.debug != 'true') {
        tts.speak(word, lang);
    }
}

