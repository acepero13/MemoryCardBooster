/**
 * Created by alvaro on 1/22/17.
 */
/*
*/

var base_path = process.cwd();
var TTSVoice = require(base_path + '/app/lib/TTSVoice.js');

var defaultResponsiveVoices = {
    'fr' :'French Female',
    'en' :'UK English Female',
    'es' :'Spanish Latin American Female',
    'de' :'Deutsch Female',
    'it' :'Italian Female',
    'po' :'Portuguese Female'};

var ResponsiveTTSVoice = function () {
    this.languageVoices = [];
    this.languageVoices['fr'] = [{'voice': 'French Female'}];
    this.languageVoices['en'] = [{'voice': 'UK English Female'}, {'voice': 'UK English Male'},
                                 {'voice': 'US English Female'}, {'voice': 'US English Male'}];
    this.languageVoices['es'] = [{'voice': 'Spanish Female'}, {'voice': 'Spanish Latin American Female'}];
    this.languageVoices['de'] = [{'voice': 'Deutsch Female'}];
    this.languageVoices['it'] = [{'voice': 'Italian Female'}];
    this.languageVoices['po'] = [{'voice': 'Portuguese Female'}, {'voice': 'Brazilian Portuguese Female'}];





};

ResponsiveTTSVoice.prototype = Object.create(TTSVoice);

ResponsiveTTSVoice.prototype.isTtsInstalled = function () {
    return (responsiveVoice != undefined);
};

ResponsiveTTSVoice.prototype.getVoiceList = function () {
    return responsiveVoice.getVoices();
};

ResponsiveTTSVoice.prototype.voiceExists = function (lang, voice) {
    var voices = this.languageVoices[lang];
    var found = false;
    var i = 0;
    while (i<= voices.length && !found){
        var current_voice = voices[i];
        if(current_voice && current_voice != undefined && voice == current_voice.voice){
            found = true;
        }
        i++;
    }
    return found;

};
ResponsiveTTSVoice.prototype.setCurrentSpeakingVoice = function (lang, voice) {
    if(!(lang in defaultResponsiveVoices)){
        throw new Error('This language does not exists');
    }
    if(!this.voiceExists(lang, voice)){
        throw new Error('This language does not exists');
    }
    defaultResponsiveVoices[lang] = voice;
};

ResponsiveTTSVoice.prototype.getCurrentVoice = function (lang) {
    return defaultResponsiveVoices[lang];
};

ResponsiveTTSVoice.prototype.speak = function (word, lang) {
    if(!this.isTtsInstalled()){
        throw new Error('Responsive Voice is not installed');
    }
    if(!(lang in defaultResponsiveVoices)){
        throw new Error('This language does not exists');
    }
    if(word == null ||  word == undefined || word.length <= 0){
        throw new Error('Empty text');
    }
    var voice = defaultResponsiveVoices[lang];
    responsiveVoice.speak(word, voice);

};

