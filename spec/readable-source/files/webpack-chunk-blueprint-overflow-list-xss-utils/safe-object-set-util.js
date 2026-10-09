// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'safeObjectSet'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 602113
         */
module.exports = function (module, exports, require) {
  var safePropertySetter = require("safe-property-setter") /*id: 859066*/;
  var pathCastUtil = require("path-cast-util") /*id: 539693*/;
  var isValidLengthUtil = require("is-valid-length-util") /*id: 557018*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var valueToStringUtil_1 = require("value-to-string-util_1") /*id: 59353*/;
  exports.safeObjectSet = function (e, t, n, u) {
    if (!isObjectOrFunction_1_1.isObjectOrFunction(e)) {
      return e;
    }
    t = pathCastUtil.castPath(t, e);
    var c = -1;
    var l = t.length;
    var f = l - 1;
    var h = e;
    while (h != null && ++c < l) {
      var d = valueToStringUtil_1.valueToString(t[c]);
      var p = n;
      if (d === "__proto__" || d === "constructor" || d === "prototype") {
        break;
      }
      if (c != f) {
        var g = h[d];
        if ((p = u ? u(g, d, h) : undefined) === undefined) {
          p = isObjectOrFunction_1_1.isObjectOrFunction(g) ? g : isValidLengthUtil.isValidLength(t[c + 1]) ? [] : {};
        }
      }
      safePropertySetter.setPropertyValue(h, d, p);
      h = h[d];
    }
    return e;
  };
}