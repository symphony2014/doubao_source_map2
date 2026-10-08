// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'trimStringBySubstring'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 285645
         */
module.exports = function (module, exports, require) {
  var valueToStringUtil = require("value-to-string-util") /*id: 44037*/;
  var stringTrimUtil = require("string-trim-util") /*id: 102462*/;
  var arraySliceWrapper = require("array-slice-wrapper") /*id: 106051*/;
  var arrayFindLastIndex = require("array-find-last-index") /*id: 338923*/;
  var arrayFindIndexNan = require("array-find-index-nan") /*id: 806028*/;
  function u(e, n) {
    var r = -1;
    var o = e.length;
    while (++r < o && arrayFindIndexNan.findIndexWithNaN(n, e[r], 0) > -1);
    return r;
  }
  var unicodeCharSplitter = require("unicode-char-splitter") /*id: 519351*/;
  var safeValueToStringUtil = require("safe-value-to-string-util") /*id: 474501*/;
  function h(e, n, r) {
    if ((e = safeValueToStringUtil.safeToString(e)) && (r || n === undefined)) {
      return stringTrimUtil.trimString(e);
    }
    if (!e || !(n = valueToStringUtil.toStringUtil(n))) {
      return e;
    }
    var c = unicodeCharSplitter.splitUnicodeChars(e);
    var h = unicodeCharSplitter.splitUnicodeChars(n);
    var f = u(c, h);
    var p = arrayFindLastIndex.findLastNonMatch(c, h) + 1;
    return arraySliceWrapper.sliceArrayOrReturnOriginal(c, f, p).join("");
  }
  require.d(exports, {
    trimStringBySubstring: function () {
      return h;
    }
  });
}