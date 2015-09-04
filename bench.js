var Benchmark = require('benchmark');

var bemjson = require('./desktop.bundles/index/index.bemjson.js'),
    bh =  require('./desktop.bundles/index/index.bh.js'),
    bemhtml = require('./desktop.bundles/index/index.bemhtml.js').BEMHTML;

var suite = new Benchmark.Suite;

suite
    .add('bemhtml', function() {
        bemhtml.apply(bemjson);
    })
    .add('bh', function() {
        bh.apply(bemjson);
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').pluck('name'));
    })
    .run();

