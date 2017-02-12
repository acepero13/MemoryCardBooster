/**
 * Created by alvaro on 2/12/17.
 */


var base_dir = process.cwd();
describe('Testing CardFlipper With Card and Primary First', function () {
    var flipper;
    beforeEach(function () {

        flipper = new CardFlipper();
    });

    it('setNewCard should have visible primary card', function () {
        var card = {primary_card: "Hallo", secondary_card: "Hola"};
        flipper.setNewCard(card);
        expect(flipper.visible).toBe(0);
    });

    it('flip should change Visible ', function () {
        var card = {primary_card: "Hallo", secondary_card: "Hola"};
        flipper.setNewCard(card);
        flipper.flip();
        expect(flipper.visible).toBe(1);
    });


    it('resetCard should have main visible', function () {
            var card = {primary_card: "Hallo", secondary_card: "Hola"};
            flipper.setNewCard(card);
            flipper.resetCard();
            expect(flipper.visible).toBe(0);
    } );
});

describe('Testing CardFlipper, Secondary First', function () {
    var flipper;
    beforeEach(function () {

        flipper = new CardFlipper(false);
    });

    it('setNewCard should have visible secondary card', function () {
        var card = {primary_card: "Hallo", secondary_card: "Hola"};
        flipper.setNewCard(card);
        expect(flipper.visible).toBe(1);
    });

    it('flip should show Secondary Card', function () {
        var card = {primary_card: "Hallo", secondary_card: "Hola"};
        flipper.setNewCard(card);
        flipper.flip();
        expect(flipper.visible).toBe(0);
    });

    it('resetCard should have main visible', function () {
        var card = {primary_card: "Hallo", secondary_card: "Hola"};
        flipper.setNewCard(card);
        flipper.resetCard();
        expect(flipper.visible).toBe(1);
    } );
});

function showMainCard() {
    console.log("show Main Card");
}

function showSecondary() {
    console.log("show secondary");
}