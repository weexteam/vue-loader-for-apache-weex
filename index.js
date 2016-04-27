'use strict';

var blocker = require('weex-transformer/lib/blocker');
var styler = require('weex-styler');
var templater = require('./templater');


function parseScripts(ret) {
    return new Promise(function(resolve, reject) {
        var content = '';
        if (ret.scripts) {
            content = ret.scripts.reduce(function(pre, cur) {
                return pre + '\n;' + cur.content;
            }, '');
        }
        resolve(content);
    });
}

function parseTemplate(ret) {
    return new Promise(function(resolve, reject) {
        var content = '';
        if (ret.template) {
            var tpl = templater.compile(ret.template.content);

            if (tpl.render) {
                content += '\nmodule.exports.render = function() {' + tpl.render + '}';
            }
            if (tpl.staticRenderFns && tpl.staticRenderFns.length) {
                content += '\nmodule.exports.staticRenderFns = [function(){' + tpl.staticRenderFns.join('},\nfunction() {') + '}]';
            }
        }
        resolve(content);
    });
}

function parseStyles(ret) {
    return new Promise(function(resolve, reject) {
        var content = '';
        if (ret.styles) {
            var style = ret.styles.reduce(function(pre, cur) {
                return pre + '\n' + cur.content;
            }, '');

            styler.parse(style, function(err, obj) {
                if (!err) {
                    content += '\nmodule.exports.style = ' + JSON.stringify(obj.jsonStyle, null, '  ');
                    resolve(content);
                }
            });
        } else {
            resolve(content);
        }
    });
}


module.exports = function(source) {
    var self = this;
    this.cacheable && this.cacheable();

    var callback = this.async();
    blocker.format(source, function(err, ret) {
        if (!err) {
            Promise.all([
                parseScripts(ret),
                parseTemplate(ret),
                parseStyles(ret)
            ]).then(function(content) {
                content = content.join('\n');
                // console.log(source, '\n====================\n',  content)
                callback(null, content);
            })
        } else {
            callback(err, source);
        }
    });
}