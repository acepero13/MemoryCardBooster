/**
 * Created by alvaro on 12/6/16.
 */
cardModule.controller('CardController', function ($rootScope, $scope, CardRespository) {
      $scope.card = {primary_card: "Hallo", secondary_card: "Hola"};

      $scope.getNextCard = function() {
          $scope.card = CardRespository.getNextCard();
      };

      $scope.getPreviousCard = function () {
          $scope.card = CardRespository.getPreviousCard();
      };
});