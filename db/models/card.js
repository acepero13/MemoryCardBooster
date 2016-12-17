/**
 * Created by alvaro on 12/11/16.
 */
"use strict";
var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    var Card= sequelize.define('card', {
        //Define the data types of the Author fields
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        primary_card: DataTypes.TEXT,
        secondary_card: DataTypes.TEXT,
        extras: DataTypes.TEXT,
        image: DataTypes.BLOB,
        order: {type: DataTypes.INTEGER, defaultValue: 0, allowNull:true}
    }, {
        underscored: true,
        tableName: 'card'

    });

    return Card;
};