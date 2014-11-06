## Installation

```bash
$ npm install osmium-stream
```

[![NPM](https://nodei.co/npm/osmium-stream.png?downloads=true&stars=true)](https://nodei.co/npm/osmium-stream)

Note: you will need `node` and `npm` installed first.

The easiest way to install `node.js` is with [nave.sh](https://github.com/isaacs/nave) by executing `[sudo] ./nave.sh usemain stable`

## Usage

You can extract the openstreetmap data from a file stream:

```javascript
var osm = require('osmium-stream');

var file = new osmium.File( 'http://peter.johnson.s3.amazonaws.com/somes.osm.pbf', 'pbf' );
var stream = new OsmiumStream( new osmium.Reader( file ) );

stream.pipe( through.obj( function( object, enc, next ){
  console.log( JSON.stringify( object, null, 2 ) );
  next();
}));
```

## Advanced usage

Refer to https://github.com/osmcode/node-osmium for more options, such as reading input from stdin or reading xml documents.

## Features

- flood control with backpressure
- does not block the eventloop
- full pipe() support, works with any other node stream

## NPM Module

The `osmium-stream` npm module can be found here:

[https://npmjs.org/package/osmium-stream](https://npmjs.org/package/osmium-stream)

## Contributing

Please fork and pull request against upstream master on a feature branch.

Pretty please; provide unit tests and script fixtures in the `test` directory.

### Running Unit Tests

```bash
$ npm test
```

### Continuous Integration

Travis tests every release against node version `0.10`

[![Build Status](https://travis-ci.org/geopipes/osmium-stream.png?branch=master)](https://travis-ci.org/geopipes/osmium-stream)