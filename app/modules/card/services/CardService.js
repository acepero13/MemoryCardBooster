/**
 * Created by alvaro on 12/7/16.
 */
'use strict';
var base_path = process.cwd();
Sequelize = require('sequelize');
var Card = require(base_path + '/db/database.js').card;
cardModule.service('CardRespository', function () {
    this.getStudyCardSet = function () {
        return Card.findAll({});
    }
});