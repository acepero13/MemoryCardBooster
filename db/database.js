/**
 * Created by alvaro on 12/8/16.
 */
window.require = window.parent.require;
var base_dir = process.cwd();
function loadDB() {
    var fs = require('fs'),
        path = require('path'),
        Sequelize = require('sequelize'),
        sequelize = null,
        db = {};
    var storage = base_dir + '/db/MemoryBooster.db';
    var model_path = 'db/models';
    if (window.process.env.debug == true) {
        storage = base_dir + '/db/MemoryBooster_test.db';
    }
    sequelize = new Sequelize('MemoryBooster-db', null, null, {
        dialect: 'sqlite',
        storage: storage
    });
    return {fs: fs, path: path, Sequelize: Sequelize, sequelize: sequelize, db: db, model_path: model_path};
}

function loadModels() {
    fs
        .readdirSync(model_path)
        .filter(function (file) {
            return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
        })
        .forEach(function (file) {
            var model = sequelize['import'](path.join(base_dir + '/db/models/', file));
            db[model.name] = model;

        });
}

function associateModels() {
    Object.keys(db).forEach(function (modelName) {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
}

var __ret = loadDB();
var fs = __ret.fs;
var path = __ret.path;
var Sequelize = __ret.Sequelize;
var sequelize = __ret.sequelize;
var db = __ret.db;
var model_path = __ret.model_path;



loadModels();
/*sequelize.sync({ force: true })
    .then(function() { done(); });*/


associateModels();

//Export the db Object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
