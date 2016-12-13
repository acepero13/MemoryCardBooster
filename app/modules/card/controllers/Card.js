/**
 * Created by alvaro on 12/6/16.
 */
cardModule.controller('CardController', function ($rootScope, $scope, CardIteratorRespository) {
      $scope.card = {primary_card: "Hallo", secondary_card: "Hola"};
      $scope.getNextCard = function() {
          CardIteratorRespository.getNextCard().then(function (card) {
              $scope.card = card;
          }, function (err) {
              $scope.card = {primary_card: "", secondary_card: ""};
          });
      };

      $scope.getPreviousCard = function () {
          CardIteratorRespository.getPreviousCard().then(function (card) {
              $scope.card = card;
          }, function (err) {
              $scope.card = {primary_card: "", secondary_card: ""};
          });
      };
});