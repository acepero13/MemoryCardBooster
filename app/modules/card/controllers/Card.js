/**
 * Created by alvaro on 12/6/16.
 */
var b = require('buffer');
cardModule.controller('CardController', function ($rootScope, $scope, CardIteratorRespository) {
      $scope.card = {primary_card: "Hallo", secondary_card: "Hola"};
      $rootScope.card = $scope.card;
      $scope.getNextCard = function() {
          CardIteratorRespository.getNextCard().then(function (card) {
              $scope.card = card;
              $scope.card.image =$scope.card.image.toString();
              $rootScope.card = $scope.card;
          }, function (err) {
              $scope.card = {primary_card: "", secondary_card: ""};
          });
      };

      $scope.getPreviousCard = function () {
          CardIteratorRespository.getPreviousCard().then(function (card) {
              $scope.card = card;
              $rootScope.card = $scope.card;
          }, function (err) {
              $scope.card = {primary_card: "", secondary_card: ""};
          });
      };
});