// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'a' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'u' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'c' to 'assertPropertyDelete'
// - Resolved require(240579) to 'assert-property-delete'
// - Renamed variable 'f' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 's' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'l' to 'arrayMergeSortPolyfill'
// - Resolved require(919093) to 'array-merge-sort-polyfill'
// - Renamed variable 'v' to 'safeArrayMethodCheck_1'
// - Resolved require(811572) to 'safe-array-method-check_1'
// - Renamed variable 'p' to 'firefoxVersionDetector_1'
// - Resolved require(875114) to 'firefox-version-detector_1'
// - Renamed variable 'h' to 'detectIeBrowser_1'
// - Resolved require(121085) to 'detect-ie-browser_1'
// - Renamed variable 'd' to 'chromeV8VersionPolyfill'
// - Resolved require(45469) to 'chrome-v8-version-polyfill'
// - Renamed variable 'y' to 'extractApplewebkitVersion'
// - Resolved require(905742) to 'extract-applewebkit-version'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 130027
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var assertPropertyDelete = require("assert-property-delete") /*id: 240579*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var arrayMergeSortPolyfill = require("array-merge-sort-polyfill") /*id: 919093*/;
  var safeArrayMethodCheck_1 = require("safe-array-method-check_1") /*id: 811572*/;
  var firefoxVersionDetector_1 = require("firefox-version-detector_1") /*id: 875114*/;
  var detectIeBrowser_1 = require("detect-ie-browser_1") /*id: 121085*/;
  var chromeV8VersionPolyfill = require("chrome-v8-version-polyfill") /*id: 45469*/;
  var extractApplewebkitVersion = require("extract-applewebkit-version") /*id: 905742*/;
  var g = [];
  var b = functionBindFallback(g.sort);
  var w = functionBindFallback(g.push);
  var m = tryCatchFunctionWrapper(function () {
    g.sort(undefined);
  });
  var x = tryCatchFunctionWrapper(function () {
    g.sort(null);
  });
  var A = safeArrayMethodCheck_1("sort");
  var E = !tryCatchFunctionWrapper(function () {
    if (chromeV8VersionPolyfill) {
      return chromeV8VersionPolyfill < 70;
    }
    if (!firefoxVersionDetector_1 || !(firefoxVersionDetector_1 > 3)) {
      if (detectIeBrowser_1) {
        return true;
      }
      if (extractApplewebkitVersion) {
        return extractApplewebkitVersion < 603;
      }
      var t;
      var r;
      var e;
      var n;
      var o = "";
      for (t = 65; t < 76; t++) {
        r = String.fromCharCode(t);
        switch (t) {
          case 66:
          case 69:
          case 70:
          case 72:
            e = 3;
            break;
          case 68:
          case 71:
            e = 4;
            break;
          default:
            e = 2;
        }
        for (n = 0; n < 47; n++) {
          g.push({
            k: r + n,
            v: e
          });
        }
      }
      g.sort(function (t, r) {
        return r.v - t.v;
      });
      n = 0;
      for (; n < g.length; n++) {
        r = g[n].k.charAt(0);
        if (o.charAt(o.length - 1) !== r) {
          o += r;
        }
      }
      return o !== "DGBEFHACIJK";
    }
  });
  polyfillPropertyDefiner({
    target: "Array",
    proto: true,
    forced: m || !x || !A || !E
  }, {
    sort: function (t) {
      if (t !== undefined) {
        functionValidator(t);
      }
      var r;
      var e;
      var n = requireObjectNotNullish(this);
      if (E) {
        if (t === undefined) {
          return b(n);
        } else {
          return b(n, t);
        }
      }
      var o = [];
      var s = getArrayLengthSafe(n);
      for (e = 0; e < s; e++) {
        if (e in n) {
          w(o, n[e]);
        }
      }
      arrayMergeSortPolyfill(o, function (r, e) {
        if (e === undefined) {
          return -1;
        } else if (r === undefined) {
          return 1;
        } else if (t !== undefined) {
          return +t(r, e) || 0;
        } else if (symbolToStringConverter_1(r) > symbolToStringConverter_1(e)) {
          return 1;
        } else {
          return -1;
        }
      });
      r = getArrayLengthSafe(o);
      e = 0;
      while (e < r) {
        n[e] = o[e++];
      }
      while (e < s) {
        assertPropertyDelete(n, e++);
      }
      return n;
    }
  });
}