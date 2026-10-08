// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getLength'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32845.1b4bf491.js
         * chunkId: 32845
         * moduleId: 605430
         */
module.exports = function (module, exports, require) {
  var getOwnKeysUtil = require("get-own-keys-util") /*id: 365656*/;
  var nativeBaseGetTagFix = require("native-base-get-tag-fix") /*id: 360094*/;
  var isArrayLikeUtil = require("is-array-like-util") /*id: 391276*/;
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  var l = require("property-accessor") /*id: 119718*/.getProperty("length");
  var hasUnicodeVariationSelector = require("has-unicode-variation-selector") /*id: 534021*/;
  var h = "\uD800-\uDFFF";
  var d = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]";
  var c = "\uD83C[\uDFFB-\uDFFF]";
  var u = "[^" + h + "]";
  var f = "(?:\uD83C[\uDDE6-\uDDFF]){2}";
  var g = "[\uD800-\uDBFF][\uDC00-\uDFFF]";
  var p = "(?:" + d + "|" + c + ")?";
  var _ = "[\\ufe0e\\ufe0f]?";
  var m = "(?:\\u200d(?:" + [u, f, g].join("|") + ")" + _ + p + ")*";
  var v = RegExp(c + "(?=" + c + ")|" + ("(?:" + [u + d + "?", d, f, g, "[" + h + "]"].join("|")) + ")" + (_ + p + m), "g");
  function R(e) {
    var t = v.lastIndex = 0;
    for (; v.test(e);) {
      ++t;
    }
    return t;
  }
  function S(e) {
    if (e == null) {
      return 0;
    }
    if (isArrayLikeUtil.isArrayLike(e)) {
      if (isStringTypeCheck.isString(e)) {
        if (hasUnicodeVariationSelector.hasUnicodeVariationSelector(e)) {
          return R(e);
        } else {
          return l(e);
        }
      } else {
        return e.length;
      }
    }
    var t = nativeBaseGetTagFix.getBaseGetTag(e);
    if (t == "[object Map]" || t == "[object Set]") {
      return e.size;
    } else {
      return getOwnKeysUtil.getOwnKeys(e).length;
    }
  }
  require.d(exports, {
    getLength: function () {
      return S;
    }
  });
}