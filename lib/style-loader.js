var styler = require('weex-styler')

module.exports = function (content) {
  this.cacheable && this.cacheable()
  return 'module.exports = ' + genStyleString(content)
}

function genStyleString (input) {
  var output = '{}'
  styler.parse(input, function (err, obj) {
    if (err) {
      return
    }
    if (obj && obj.jsonStyle) {
      try {
        output = JSON.stringify(obj.jsonStyle, null, 2)
      } catch (e) {}
    }
  })
  return output
}
