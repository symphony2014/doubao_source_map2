// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'splitUnicodeChars'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 519351
         */
module.exports = function (module, exports, require) {
  var hasUnicodeVariationSelector = require("has-unicode-variation-selector") /*id: 534021*/;
  var r = "\uD800-\uDFFF";
  var s = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]";
  var a = "\uD83C[\uDFFB-\uDFFF]";
  var o = "[^" + r + "]";
  var l = "(?:\uD83C[\uDDE6-\uDDFF]){2}";
  var u = "[\uD800-\uDBFF][\uDC00-\uDFFF]";
  var c = "(?:" + s + "|" + a + ")?";
  var d = "[\\ufe0e\\ufe0f]?";
  var f = "(?:\\u200d(?:" + [o, l, u].join("|") + ")" + d + c + ")*";
  var h = RegExp(a + "(?=" + a + ")|" + ("(?:" + [o + s + "?", s, l, u, "[" + r + "]"].join("|")) + ")" + (d + c + f), "g");
  function p(e) {
    if (hasUnicodeVariationSelector.hasUnicodeVariationSelector(e)) {
      return e.match(h) || [];
    } else {
      return e.split("");
    }
  }
  require.d(exports, {
    splitUnicodeChars: function () {
      return p;
    }
  });
}