const Jasmine = require('jasmine');
const jasmine = new Jasmine();


var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var noop = function() {};

var jrunner = new Jasmine();
jrunner.configureDefaultReporter({print: noop});                     // remove default reporter logs
jrunner.addReporter(new SpecReporter({displayStackTrace: true}));   // add jasmine-spec-reporter                         
jrunner.loadConfigFile('spec/support/jasmine.json');                // load jasmine.json configuration

jrunner.execute();