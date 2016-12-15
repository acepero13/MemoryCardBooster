// Karma configuration
// Generated on Tue Dec 06 2016 18:57:35 GMT+0100 (CET)
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],



    // list of files / patterns to load in the browser
    files: [
        { pattern: "karma.shim.js", watched: true, included: true, served: true},
        "bower_components/jasmine-promise-matchers/dist/jasmine-promise-matchers.js",
        {pattern: 'bower_components/angular/angular.js',include:false},
        {pattern: 'bower_components/angular-mocks/angular-mocks.js',include:false},
        { pattern: "db/database.js", watched: true, included: false, served: true},

        {pattern: 'index.html',include:false},
        {pattern: 'app/modules/card/*.js',include:false},
        {pattern: 'app/modules/card/controllers/*.js',include:false},
        {pattern: 'app/modules/card/services/*.js',include:false},
        {pattern: 'app/modules/card/util/*.js',include:false},

        {pattern: 'app/modules/image/*.js',include:false},
        {pattern: 'app/modules/image/controllers/*.js',include:false},
        {pattern: 'app/modules/image/services/*.js',include:false},
        {pattern: 'app/test/unit/*.js',include:false},
        {pattern: 'app/test/integration/*.js',include:false},
        //'test-main.js'

    ],

      plugins: [
          'karma-electron',
          'karma-jasmine',
         // 'karma-coverage'
      ],


    // list of files to exclude
    exclude: [
        'main.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
          '*.js': ['electron' ],
        //  'app/modules/**/**/*.js': [ 'coverage'],
      },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Electron'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
