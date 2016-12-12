/**
 * Created by alvaro on 12/8/16.
 */
'use strict';
process = window.process || window.parent.process;
require = window.require || window.parent.require;
require('chai');
require('sequelize');
describe("Integration testing for CardService", function () {
    var cardService;
    // Initialize the service
    beforeEach(module('CardModule'));
    beforeEach(inject(function (_CardRespository_) {
        cardService = _CardRespository_;
    }));

    beforeEach(function (done) {
        fillCard().then(function () {
            done();
        });
    });


    it('should return have a list of cards', function (done) {
        var result = cardService.getStudyCardSet();
        result.then(function (result) {
            expect(result[0].primary_card).toBe('Card 1');
            done();
        });
    });

});

function fillCard() {
    var base_path = process.cwd();
    var Card = require(base_path + '/db/database.js').card;
    function createNewCard() {
        return Card.build({id: 1, primary_card: 'Card 1', secondary_card: 'Seconday Card 1'}).save();
    }
    return Card.destroy({truncate: true}).then(createNewCard);
}




