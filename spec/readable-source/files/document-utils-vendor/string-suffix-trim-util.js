// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'trimStringSuffix'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 478725
         */
module.exports = function (module, exports, require) {
  var valueToStringUtil = require("value-to-string-util") /*id: 44037*/;
  var arraySliceWrapper = require("array-slice-wrapper") /*id: 106051*/;
  var arrayFindLastIndex = require("array-find-last-index") /*id: 338923*/;
  var unicodeCharSplitter = require("unicode-char-splitter") /*id: 519351*/;
  var safeValueToStringUtil = require("safe-value-to-string-util") /*id: 474501*/;
  var stringTrimRightUtils = require("string-trim-right-utils") /*id: 507739*/;
  exports.trimStringSuffix = function (e, t, r) {
    if ((e = safeValueToStringUtil.safeToString(e)) && (r || t === undefined)) {
      return e.slice(0, stringTrimRightUtils.trimRightIndex(e) + 1);
    }
    if (!e || !(t = valueToStringUtil.toStringUtil(t))) {
      return e;
    }
    var u = unicodeCharSplitter.splitUnicodeChars(e);
    var c = arrayFindLastIndex.findLastNonMatch(u, unicodeCharSplitter.splitUnicodeChars(t)) + 1;
    return arraySliceWrapper.sliceArrayOrReturnOriginal(u, 0, c).join("");
  };
}