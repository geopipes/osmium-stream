
var OsmiumStream = require('../'),
    through = require('through2'),
    request = require('request'),
    osmium = require('osmium');

module.exports.example = {};

module.exports.example.request = function(test, common) {
  test('request', function(t) {

    var file = new osmium.File( 'http://peter.johnson.s3.amazonaws.com/somes.osm.pbf', 'pbf' );
    var stream = new OsmiumStream( new osmium.Reader( file ) );

    var counts = { node: 0, way: 0, relation: 0, other: 0 };
    var transform = function( object, enc, next ){
      if( object instanceof osmium.Node ){ counts.node++; }
      else if( object instanceof osmium.Way ){ counts.way++; }
      else if( object instanceof osmium.Relation ){ counts.relation++; }
      else { counts.other++; }
      next();
    };

    // correct counts checked via another source
    // ref: https://gist.github.com/missinglink/414edeaae2298db711e3
    var assert = function(){
      t.equal( counts.node, 1494, 'correct node counts' );
      t.equal( counts.way, 77, 'correct way counts' );
      t.equal( counts.relation, 6, 'correct relation counts' );
      t.equal( counts.other, 0, 'nothing unexpected' );
      t.end();
    };

    stream.pipe( through.obj( transform, assert ) );
  });
};

module.exports.all = function (tape, common) {

  function test(name, testFunction) {
    return tape('OsmiumStream: ' + name, testFunction);
  }

  for( var testCase in module.exports.example ){
    module.exports.example[testCase](test, common);
  }
};