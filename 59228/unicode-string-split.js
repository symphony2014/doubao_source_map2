// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'splitUnicodeString'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 59228.284c0506.js
         * chunkId: 59228
         * moduleId: 440940
         */
module.exports = function (module, exports, require) {
  var valueToStringUtil = require("value-to-string-util") /*id: 44037*/;
  var arraySliceWrapper = require("array-slice-wrapper") /*id: 106051*/;
  var hasUnicodeVariationSelector = require("has-unicode-variation-selector") /*id: 534021*/;
  var verifyPropertyMatch = require("verify-property-match") /*id: 874949*/;
  var isRegexpCheck = require("is-regexp-check") /*id: 600396*/;
  var unicodeCharSplitter = require("unicode-char-splitter") /*id: 519351*/;
  var safeValueToStringUtil = require("safe-value-to-string-util") /*id: 474501*/;
  exports.splitUnicodeString = function (e, t, i) {
    if (i && typeof i != "number" && verifyPropertyMatch.checkPropertyValue(e, t, i)) {
      t = i = undefined;
    }
    if (i = i === undefined ? 4294967295 : i >>> 0) {
      if ((e = safeValueToStringUtil.safeToString(e)) && (typeof t == "string" || t != null && !isRegexpCheck.isRegExp(t)) && !(t = valueToStringUtil.toStringUtil(t)) && hasUnicodeVariationSelector.hasUnicodeVariationSelector(e)) {
        return arraySliceWrapper.sliceArrayOrReturnOriginal(unicodeCharSplitter.splitUnicodeChars(e), 0, i);
      } else {
        return e.split(t, i);
      }
    } else {
      return [];
    }
  };
}