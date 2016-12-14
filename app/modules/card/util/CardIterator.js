/**
 * Created by alvaro on 12/12/16.
 */
const PREVIOUS_INDEX = 2;
var CardIterator = function(items) {
    this.index = 0;
    this.items = items;
};

CardIterator.prototype = {
    first: function() {
        this.reset();
        return this.next();
    },
    next: function() {
        if(this.hasNext()){
            return this.items[this.index++];
        }
        throw Error('Item has no next');
    },
    hasNext: function() {
        return this.index < this.items.length;
    },
    reset: function() {
        this.index = 0;
    },
    previous: function() {
        if(this.index > 1){
            var previousCard = this.items[this.index - PREVIOUS_INDEX];
            this.index = this.index - 1;
            return previousCard;
        }
        throw Error('Item has no previous');
    },
    each: function(callback) {
        while (this.hasNext()){
            var item = this.next();
            callback(item);
        }
    }
};

module.exports = CardIterator;

