'use strict';

var loaderUtils = require('loader-utils')
var blocker = require('weex-transformer/lib/blocker');
var styler = require('weex-styler');
var templater = require('weex-template-compiler');

var REQUIRE_REG = /require\((["'])\@weex\-module\/([^\)\1]+)\1\)/g;

function parseScripts(ret) {
    var content = '';
    if (ret.scripts) {
        content = ret.scripts.reduce(function(pre, cur) {
            return (pre ? (pre + '\n;') : '') + cur.content;
        }, '');
    }
    content = content.replace(REQUIRE_REG, '__weex_require_module__($1$2$1)');
    return content;
}

function parseTemplate(ret) {
    var content = [];
    if (ret.template) {
        var tpl = templater.compile(ret.template.content);

        if (tpl.render) {
            content.push('module.exports.render = function() {' + tpl.render + '}');
        }
        if (tpl.staticRenderFns && tpl.staticRenderFns.length) {
            content.push('module.exports.staticRenderFns = [function(){' + tpl.staticRenderFns.join('},\nfunction() {') + '}]');
        }
    }
    return content.join('\n');
}

function parseStyles(ret) {
    var content = [];
    if (ret.styles) {
        var style = ret.styles.reduce(function(pre, cur) {
            return (pre ? (pre + '\n') : '') + cur.content;
        }, '');

        styler.parse(style, function(err, obj) {
            if (!err) {
                content.push('module.exports.style = '
                    + JSON.stringify(obj.jsonStyle, null, 2));
            }
        });
    }
    return content.join('\n');
}

module.exports = function(source) {
    var self = this;
    this.cacheable && this.cacheable();
    var params = loaderUtils.parseQuery(this.resourceQuery);
    var blocks
    blocker.format(source, function(err, ret) {
        blocks = ret
    });
    var script = parseScripts(blocks)
    var template = parseTemplate(blocks)
    var style = parseStyles(blocks)
    var content = [
        script, style, template,
        params.entry ? 'module.exports.el = "body"' : 'delete module.exports.el',
        params.entry ? 'new Vue(module.exports)' : ''
    ].filter(function (a) {
        return !!a
    })
    .join('\n')
    return content + '\n'
}
