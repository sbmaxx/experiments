var bemjson = require('./desktop.bundles/index/index.bemjson.js'),
    template = process.argv[2] === 'bh'
        ? require('./desktop.bundles/index/index.bh.js')
        : require('./desktop.bundles/index/index.bemhtml.js').BEMHTML;

var Stats = require('fast-stats').Stats;

var s = new Stats(),
    start, diff;

var iterations = 100;

for (var i = 0; i < iterations; i++) {
    start = process.hrtime();
    template.apply(bemjson);
    diff = process.hrtime(start);
    s.push(diff[0] * 1e9 + diff[1]);
}

console.log(s.median());
