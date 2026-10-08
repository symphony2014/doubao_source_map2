// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'o' to 'arrayIsArrayPolyfill_1'
// - Resolved require(959884) to 'array-is-array-polyfill_1'
// - Renamed variable 'i' to 'functionConstructorCheck'
// - Resolved require(275428) to 'function-constructor-check'
// - Renamed variable 'u' to 'isObjectOrFunction_1'
// - Resolved require(446549) to 'is-object-or-function_1'
// - Renamed variable 'c' to 'normalizeIndexRange'
// - Resolved require(703099) to 'normalize-index-range'
// - Renamed variable 's' to 'clampLengthToSafe'
// - Resolved require(420882) to 'clamp-length-to-safe'
// - Renamed variable 'f' to 'stringToArrayFallback'
// - Resolved require(476143) to 'string-to-array-fallback'
// - Renamed variable 'a' to 'safeDefineProperty'
// - Resolved require(665456) to 'safe-define-property'
// - Renamed variable 'p' to 'symbolWellKnownRegistry'
// - Resolved require(21227) to 'symbol-well-known-registry'
// - Renamed variable 'l' to 'arraySpeciesConstructorCheck_1'
// - Resolved require(248170) to 'array-species-constructor-check_1'
// - Renamed variable 'v' to 'arraySliceWrapper_1'
// - Resolved require(955975) to 'array-slice-wrapper_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 705048
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var arrayIsArrayPolyfill_1 = require("array-is-array-polyfill_1") /*id: 959884*/;
  var functionConstructorCheck = require("function-constructor-check") /*id: 275428*/;
  var isObjectOrFunction_1 = require("is-object-or-function_1") /*id: 446549*/;
  var normalizeIndexRange = require("normalize-index-range") /*id: 703099*/;
  var clampLengthToSafe = require("clamp-length-to-safe") /*id: 420882*/;
  var stringToArrayFallback = require("string-to-array-fallback") /*id: 476143*/;
  var safeDefineProperty = require("safe-define-property") /*id: 665456*/;
  var symbolWellKnownRegistry = require("symbol-well-known-registry") /*id: 21227*/;
  var arraySpeciesConstructorCheck_1 = require("array-species-constructor-check_1") /*id: 248170*/;
  var arraySliceWrapper_1 = require("array-slice-wrapper_1") /*id: 955975*/;
  var y = arraySpeciesConstructorCheck_1("slice");
  var h = symbolWellKnownRegistry("species");
  var b = Array;
  var d = Math.max;
  coreJsExportUtil({
    target: "Array",
    proto: true,
    forced: !y
  }, {
    slice: function (t, r) {
      var n;
      var e;
      var p;
      var l = stringToArrayFallback(this);
      var y = clampLengthToSafe(l);
      var g = normalizeIndexRange(t, y);
      var m = normalizeIndexRange(r === undefined ? y : r, y);
      if (arrayIsArrayPolyfill_1(l) && (functionConstructorCheck(n = l.constructor) && (n === b || arrayIsArrayPolyfill_1(n.prototype)) ? n = undefined : isObjectOrFunction_1(n) && (n = n[h]) === null && (n = undefined), n === b || n === undefined)) {
        return arraySliceWrapper_1(l, g, m);
      }
      p = 0;
      e = new (n === undefined ? b : n)(d(m - g, 0));
      for (; g < m; g++, p++) {
        if (g in l) {
          safeDefineProperty(e, p, l[g]);
        }
      }
      e.length = p;
      return e;
    }
  });
}