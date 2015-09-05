var Benchmark = require('benchmark');

var bemjson = require('./desktop.bundles/index/index.bemjson.js'),
    bh =  require('./desktop.bundles/index/index.bh.js'),
    bemhtml = require('./desktop.bundles/index/index.bemhtml.js').BEMHTML;

var suite = new Benchmark.Suite;

suite
    .add('bemhtml 1 button', function() {
        bemhtml.apply({ block: 'button' });
    })
    .add('bh 1 button', function() {
        bh.apply({ block: 'button' });
    })
    .add('bemhtml 10 button', function() {
        bemhtml.apply((new Array(10).join().split().map(function() {
            return { block: 'button' };
        })));
    })
    .add('bh 10 button', function() {
        bh.apply((new Array(10).join().split().map(function() {
            return { block: 'button' };
        })));
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').pluck('name'));
    })
    .run();
