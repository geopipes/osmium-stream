
var OsmiumStream = require('../');

module.exports.interface = {};

module.exports.interface.constructor = function(test, common) {
  test('constructor', function(t) {
    t.equal(typeof OsmiumStream, 'function', 'valid stream');
    t.end();
  });
};

module.exports.interface.exports = function(test, common) {
  test('stream interface', function(t) {
    var stream = new OsmiumStream();
    t.equal(typeof stream, 'object', 'valid stream');
    t.equal(typeof stream._read, 'function', 'readable stream');
    t.end();
  });
};

module.exports.all = function (tape, common) {

  function test(name, testFunction) {
    return tape('OsmiumStream: ' + name, testFunction);
  }

  for( var testCase in module.exports.interface ){
    module.exports.interface[testCase](test, common);
  }
};