var bemjson = require('./desktop.bundles/index/index.bemjson.js'),
    template = process.argv[2] === 'bh'
        ? require('./desktop.bundles/index/index.bh.js')
        : require('./desktop.bundles/index/index.bemhtml.js').BEMHTML;

console.log(template.apply(bemjson));
