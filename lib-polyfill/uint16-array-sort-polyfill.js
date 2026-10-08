// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'functionBindPolyfill_2'
// - Resolved require(146857) to 'function-bind-polyfill_2'
// - Renamed variable 'i' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'a' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'u' to 'arrayMergeSortPolyfill'
// - Resolved require(919093) to 'array-merge-sort-polyfill'
// - Renamed variable 'c' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Renamed variable 'f' to 'firefoxVersionDetector_1'
// - Resolved require(875114) to 'firefox-version-detector_1'
// - Renamed variable 's' to 'detectIeBrowser_1'
// - Resolved require(121085) to 'detect-ie-browser_1'
// - Renamed variable 'l' to 'chromeV8VersionPolyfill'
// - Resolved require(45469) to 'chrome-v8-version-polyfill'
// - Renamed variable 'v' to 'extractApplewebkitVersion'
// - Resolved require(905742) to 'extract-applewebkit-version'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 940916
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var functionBindPolyfill_2 = require("function-bind-polyfill_2") /*id: 146857*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var arrayMergeSortPolyfill = require("array-merge-sort-polyfill") /*id: 919093*/;
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var firefoxVersionDetector_1 = require("firefox-version-detector_1") /*id: 875114*/;
  var detectIeBrowser_1 = require("detect-ie-browser_1") /*id: 121085*/;
  var chromeV8VersionPolyfill = require("chrome-v8-version-polyfill") /*id: 45469*/;
  var extractApplewebkitVersion = require("extract-applewebkit-version") /*id: 905742*/;
  var p = typedArrayPolyfillUtil.aTypedArray;
  var h = typedArrayPolyfillUtil.exportTypedArrayMethod;
  var d = globalObjectPolyfill.Uint16Array;
  var y = d && functionBindPolyfill_2(d.prototype.sort);
  var g = !!y && (!tryCatchFunctionWrapper(function () {
    y(new d(2), null);
  }) || !tryCatchFunctionWrapper(function () {
    y(new d(2), {});
  }));
  var b = !!y && !tryCatchFunctionWrapper(function () {
    if (chromeV8VersionPolyfill) {
      return chromeV8VersionPolyfill < 74;
    }
    if (firefoxVersionDetector_1) {
      return firefoxVersionDetector_1 < 67;
    }
    if (detectIeBrowser_1) {
      return true;
    }
    if (extractApplewebkitVersion) {
      return extractApplewebkitVersion < 602;
    }
    var t;
    var r;
    var e = new d(516);
    var n = Array(516);
    for (t = 0; t < 516; t++) {
      r = t % 4;
      e[t] = 515 - t;
      n[t] = t - r * 2 + 3;
    }
    y(e, function (t, r) {
      return (t / 4 | 0) - (r / 4 | 0);
    });
    t = 0;
    for (; t < 516; t++) {
      if (e[t] !== n[t]) {
        return true;
      }
    }
  });
  h("sort", function (t) {
    if (t !== undefined) {
      functionValidator(t);
    }
    if (b) {
      return y(this, t);
    } else {
      return arrayMergeSortPolyfill(p(this), function (r, e) {
        if (t !== undefined) {
          return +t(r, e) || 0;
        } else if (e != e) {
          return -1;
        } else if (r != r) {
          return 1;
        } else if (r === 0 && e === 0) {
          if (1 / r > 0 && 1 / e < 0) {
            return 1;
          } else {
            return -1;
          }
        } else {
          return r > e;
        }
      });
    }
  }, !b || g);
}