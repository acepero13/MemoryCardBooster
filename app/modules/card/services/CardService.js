/**
 * Created by alvaro on 12/7/16.
 */
'use strict';
Sequelize = require('sequelize');
var Card = require('/home/alvaro/WebstormProjects/MemoryLanguageBooster/db/database.js').card;
cardModule.service('CardRespository', function () {
    this.getStudyCardSet = function () {
        return Card.findAll({});
    }
});