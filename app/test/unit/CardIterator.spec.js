/**
 * Created by alvaro on 12/12/16.
 */
var base_dir = process.cwd();
describe('Testing CardIterator with Filled List', function () {
    var cardIterator;
    beforeEach(function () {
        require(base_dir + '/app/modules/card/util/CardIterator.js');
        cardIterator = new CardIterator(['Item1', 'Item2']);
    });

    it('HasNext should return true with filled array', function () {
        var hasNext = cardIterator.hasNext();
        expect(hasNext).toBe(true);
    });

    it('Several Next should return false with last item', function () {
        expect(cardIterator.hasNext()).toBe(true);
        expect(cardIterator.next()).toBe('Item1');
        expect(cardIterator.next()).toBe('Item2');
        expect(cardIterator.hasNext()).toBe(false);

    });

    it('Next should return Next Item', function () {
        var nextItem = cardIterator.next();
        expect(nextItem).toBe('Item1');
    });

    it('First should return First Item', function () {
        var nextItem = cardIterator.first();
        expect(nextItem).toBe('Item1');
        expect(cardIterator.index).toBe(1);
    });

    it('Previous should Throw Item has not previous', function () {
        var nextItem = cardIterator.next();
        var nextItem = cardIterator.next();
        expect(cardIterator.index).toBe(2);
        var previousItem = cardIterator.previous();
        expect(cardIterator.index).toBe(1);
        expect(previousItem).toBe('Item1');
        try {
            cardIterator.previous();
        }catch (err){
            console.log(err.message)
            expect(err.message).toBe('Item has no previous');
        }


    });

    it('Previous should throw  Item has no previous exception', function () {
       cardIterator.next();
        try {
            cardIterator.previous();
        }catch (err){
            console.log(err.message)
            expect(err.message).toBe('Item has no previous');
        }

    });

    it('Previous should throw  Item has no next exception', function () {
        cardIterator.next();
        cardIterator.next();
        try {
            cardIterator.next();
        }catch (err){
            console.log(err.message)
            expect(err.message).toBe('Item has no next');
        }


    });

    it('should return First Item', function () {
        var nextItem = cardIterator.next();
        var nextItem = cardIterator.next();
        expect(nextItem).toBe('Item2');
        var nextItem = cardIterator.reset();
        var nextItem = cardIterator.next();
        expect(nextItem).toBe('Item1');
    });

    it('should call CallbackFunction with total', function () {
        var counter = 0;
        cardIterator.each(function (item) {
            ++counter;
        });
        expect(counter).toBe(2);
    });


});