/**
 * Created by alvaro on 1/22/17.
 */
var base_path = process.cwd();

require(base_path + '/app/lib/ResponsiveTTSVoice.js');
describe('Integration Testing ResponsiveTTS ' ,function () {
    var responsive;
    beforeEach(function () {
        responsive = new ResponsiveTTSVoice();
        console.log(responsive)
    });
    it('should return list of voices when calling getVoiceList', function () {
        var result = responsive.getVoiceList();
        console.log(result);
        expect(result).toBeDefined();
        expect(result.length).toBeGreaterThan(0);
    });

    it('should return true when calling isTtsInstalled', function () {
       var result = responsive.isTtsInstalled();
       expect(result).toBe(true);
    });

    it('should return the English Voice Male name when calling setCurrentSpeakingVoice', function () {
        var expected = 'UK English Male';
        responsive.setCurrentSpeakingVoice('en',expected );
        var current_voice = responsive.getCurrentVoice('en');
       expect(current_voice).toBe(expected);
    });

    it('should return the exception  when calling setCurrentSpeakingVoice with non existing language', function () {
        var male = 'UK English Male';
        var error = false;
        try {
            responsive.setCurrentSpeakingVoice('ro', male);
        }catch (err){
            error = true;
            expect(err.message).toBe('This language does not exists');
        }
        expect(error).toBe(true);

    });

    it('should return exception when calling setCurrentSpeakingVoice with non existing voice', function () {
        var male = 'My custom non existing voice';
        var error = false;
        try {
            responsive.setCurrentSpeakingVoice('en', male);
        }catch (err){
            error = true;
            expect(err.message).toBe('This language does not exists');
        }
        expect(error).toBe(true);

    });

    it('should return exception when when speak empty text', function () {
        var text = '';
        var error = false;
        try{
            responsive.speak(text, 'en' );
        }catch (err){
            error = true;
            expect(err.message).toBe('Empty text');
        }
        expect(error).toBe(true);
    });

    it('should return the exception  when calling speak with non existing language', function () {
        var male = 'UK English Male';
        var error = false;
        try {
            responsive.speak('Text Example', 'ro');
        }catch (err){
            error = true;
            expect(err.message).toBe('This language does not exists');
        }
        expect(error).toBe(true);

    });

    it('should speak english when speak', function () {
        var text = 'Hello world';
        responsive.speak(text, 'en' );
    });
});