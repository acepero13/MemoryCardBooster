/**
 * Created by alvaro on 12/6/16.
 */
var b = require('buffer');
cardModule.controller('CardController', function ($rootScope, $scope, CardIteratorRespository) {
      $scope.card = {primary_card: "Hallo", secondary_card: "Hola"};
      $rootScope.card = $scope.card;
      const {globalShortcut} = require('electron').remote;

      globalShortcut.register('Left', function () {
          $scope.getPreviousCard();
      });

    globalShortcut.register('Right', function () {
        $scope.getNextCard();
    });

    globalShortcut.register('Space', function () {
        flipCard(($scope.card.image != null));
    });

    globalShortcut.register('Space', function () {
        $scope.getNextCard();
    });


    function getImage() {
        if($scope.card.image != null) {
            $scope.card.image = $scope.card.image.toString();
        }
    }

    $scope.getNextCard = function() {
          flipToMain();
          CardIteratorRespository.getNextCard().then(function (card) {
              $scope.card = card;
              getImage();
              $rootScope.card = $scope.card;
          }, function (err) {
              $scope.card = {primary_card: "", secondary_card: ""};
          });
      };

      $scope.getPreviousCard = function () {
          flipToMain();
          CardIteratorRespository.getPreviousCard().then(function (card) {
              $scope.card = card;
              $rootScope.card = $scope.card;
          }, function (err) {
              $scope.card = {primary_card: "", secondary_card: ""};
          });
      };
});