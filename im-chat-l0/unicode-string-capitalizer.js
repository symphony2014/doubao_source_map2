// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'capitalizeFirst'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 941172
         */
module.exports = function (module, exports, require) {
  var arraySliceWrapper = require("array-slice-wrapper") /*id: 106051*/;
  var hasUnicodeVariationSelector = require("has-unicode-variation-selector") /*id: 534021*/;
  var unicodeCharSplitter = require("unicode-char-splitter") /*id: 519351*/;
  var safeValueToStringUtil = require("safe-value-to-string-util") /*id: 474501*/;
  function o(e) {
    e = safeValueToStringUtil.safeToString(e);
    var t = hasUnicodeVariationSelector.hasUnicodeVariationSelector(e) ? unicodeCharSplitter.splitUnicodeChars(e) : undefined;
    var n = t ? t[0] : e.charAt(0);
    var o = t ? arraySliceWrapper.sliceArrayOrReturnOriginal(t, 1).join("") : e.slice(1);
    return n.toUpperCase() + o;
  }
  require.d(exports, {
    capitalizeFirst: function () {
      return o;
    }
  });
}