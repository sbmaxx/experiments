var bemjson = require('./desktop.bundles/index/index.bemjson.js'),
    template = require('./desktop.bundles/index/index.bemhtml.js').BEMHTML;

(function applyTemplate() {
    template.apply(bemjson);
})();
