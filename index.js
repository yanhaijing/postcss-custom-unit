var postcss = require('postcss')
var extendDeep = require('@jsmini/extend').extendDeep;

module.exports = postcss.plugin('postcss-custom-unit', function(opts) {
    opts = extendDeep({}, {
        includePath: /.*/,
        units: [], // {from, convert}
    }, opts);

    // Work with options here

    return function(root, result) {

        // Transform CSS AST here
        root.walkDecls(function(decl) {
            if (!opts.includePath.test(decl.source.input.file)) {
                return;
            }

            opts.units.forEach(function (unit) {
                var reg = new RegExp('(([\\d\.]+)' + unit.from + ')', 'g');
                decl.value = decl.value.replace(reg, function (match, p1, p2) {
                    return unit.convert(p2);
                });
            })
        });
    }
})
