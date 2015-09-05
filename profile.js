var bemjson = require('./desktop.bundles/index/index.bemjson.js'),
    template = require('./desktop.bundles/index/index.bemhtml.js').BEMHTML;
    //template = require('./desktop.bundles/index/index.bh.js');

template.apply(bemjson);
