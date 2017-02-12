/**
 * Created by alvaro on 12/6/16.
 */

var b = require('buffer');
require(base_dir + '/app/lib/Keyboardcontrols.js');
initTTS();//TODO: Change to a init file
var tts;
cardModule.controller('CardController', function ($rootScope, $scope, CardIteratorRespository, CardFlipperFactory) {
      $scope.card = {primary_card: "Hallo", secondary_card: "Hola"};
      $rootScope.card = $scope.card;
      init();
      function init() {
          $scope.flipper = CardFlipperFactory.getCardFlipper();
          new KeyboardControl($scope);
      }

    function getImage() {
        if($scope.card.image != null) {
            $scope.card.image = $scope.card.image.toString();
        }
    }

    $scope.getNextCard = function() {
        $scope.flipper.resetCard().then(function () {
                    $scope.shown_card = $scope.card.primary_card;
                    CardIteratorRespository.getNextCard().then(function (card) {
                    $scope.card = card;
                    $scope.flipper.setNewCard(card);
                    getImage();
                    $rootScope.card = $scope.card;
                    $scope.tryToSpeak($scope.card.primary_card, 'de');
              }, function (err) {
                  $scope.card = {primary_card: "", secondary_card: ""};
              });
          });

      };

      $scope.getPreviousCard = function () {
          $scope.flipper.resetCard().then(function () {
                    $scope.shown_card = $scope.card.primary_card;
                    CardIteratorRespository.getPreviousCard().then(function (card) {
                    $scope.card = card;
                    $scope.flipper.setNewCard(card);
                    $rootScope.card = $scope.card;
                    $scope.tryToSpeak($scope.card.primary_card, 'de');
              }, function (err) {
                  $scope.card = {primary_card: "", secondary_card: ""};
              });
          });

      };



    $scope.tryToSpeak = function(word, lang) {
        if(window.process.env.debug != 'true') {
            tts.speak(word, lang);
        }
    }


});

function initTTS() {
    if(window.process.env.debug != 'true') {
        require(base_dir + '/app/lib/ResponsiveTTSVoice.js');
        tts = new ResponsiveTTSVoice();
    }
}



