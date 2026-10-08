// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'T' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'n' to 'functionTypeGuardAssertion'
// - Resolved require(750329) to 'function-type-guard-assertion'
// - Renamed variable 'o' to 'toObjectUtil'
// - Resolved require(957710) to 'to-object-util'
// - Renamed variable 'i' to 'clampLengthToSafe'
// - Resolved require(420882) to 'clamp-length-to-safe'
// - Renamed variable 'a' to 'deletePropertyWithError'
// - Resolved require(889835) to 'delete-property-with-error'
// - Renamed variable 'u' to 'symbolSafeStringConverter'
// - Resolved require(227969) to 'symbol-safe-string-converter'
// - Renamed variable 's' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'l' to 'stableMergeSortFunction'
// - Resolved require(397146) to 'stable-merge-sort-function'
// - Renamed variable 'c' to 'safeArrayMethodCheck'
// - Resolved require(985761) to 'safe-array-method-check'
// - Renamed variable 'p' to 'firefoxVersionDetector'
// - Resolved require(763621) to 'firefox-version-detector'
// - Renamed variable 'h' to 'detectIeBrowser'
// - Resolved require(159123) to 'detect-ie-browser'
// - Renamed variable 'f' to 'chromeV8VersionDetect'
// - Resolved require(968349) to 'chrome-v8-version-detect'
// - Renamed variable 'd' to 'applewebkitVersionCheck'
// - Resolved require(354038) to 'applewebkit-version-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 479802
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var functionTypeGuardAssertion = require("function-type-guard-assertion") /*id: 750329*/;
  var toObjectUtil = require("to-object-util") /*id: 957710*/;
  var clampLengthToSafe = require("clamp-length-to-safe") /*id: 420882*/;
  var deletePropertyWithError = require("delete-property-with-error") /*id: 889835*/;
  var symbolSafeStringConverter = require("symbol-safe-string-converter") /*id: 227969*/;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var stableMergeSortFunction = require("stable-merge-sort-function") /*id: 397146*/;
  var safeArrayMethodCheck = require("safe-array-method-check") /*id: 985761*/;
  var firefoxVersionDetector = require("firefox-version-detector") /*id: 763621*/;
  var detectIeBrowser = require("detect-ie-browser") /*id: 159123*/;
  var chromeV8VersionDetect = require("chrome-v8-version-detect") /*id: 968349*/;
  var applewebkitVersionCheck = require("applewebkit-version-check") /*id: 354038*/;
  var D = [];
  var L = functionBindPrototypeCheckWrapper(D.sort);
  var m = functionBindPrototypeCheckWrapper(D.push);
  var y = safeFunctionExecutor(function () {
    D.sort(undefined);
  });
  var H = safeFunctionExecutor(function () {
    D.sort(null);
  });
  var v = safeArrayMethodCheck("sort");
  var g = !safeFunctionExecutor(function () {
    if (chromeV8VersionDetect) {
      return chromeV8VersionDetect < 70;
    }
    if (!firefoxVersionDetector || !(firefoxVersionDetector > 3)) {
      if (detectIeBrowser) {
        return true;
      }
      if (applewebkitVersionCheck) {
        return applewebkitVersionCheck < 603;
      }
      var t;
      var e;
      var Q;
      var r;
      var T = "";
      for (t = 65; t < 76; t++) {
        e = String.fromCharCode(t);
        switch (t) {
          case 66:
          case 69:
          case 70:
          case 72:
            Q = 3;
            break;
          case 68:
          case 71:
            Q = 4;
            break;
          default:
            Q = 2;
        }
        for (r = 0; r < 47; r++) {
          D.push({
            k: e + r,
            v: Q
          });
        }
      }
      D.sort(function (t, e) {
        return e.v - t.v;
      });
      r = 0;
      for (; r < D.length; r++) {
        e = D[r].k.charAt(0);
        if (T.charAt(T.length - 1) !== e) {
          T += e;
        }
      }
      return T !== "DGBEFHACIJK";
    }
  });
  coreJsExportUtil({
    target: "Array",
    proto: true,
    forced: y || !H || !v || !g
  }, {
    sort: function (t) {
      if (t !== undefined) {
        functionTypeGuardAssertion(t);
      }
      var e;
      var Q;
      var r = toObjectUtil(this);
      if (g) {
        if (t === undefined) {
          return L(r);
        } else {
          return L(r, t);
        }
      }
      var T = [];
      var s = clampLengthToSafe(r);
      for (Q = 0; Q < s; Q++) {
        if (Q in r) {
          m(T, r[Q]);
        }
      }
      stableMergeSortFunction(T, function (e, Q) {
        if (Q === undefined) {
          return -1;
        } else if (e === undefined) {
          return 1;
        } else if (t !== undefined) {
          return +t(e, Q) || 0;
        } else if (symbolSafeStringConverter(e) > symbolSafeStringConverter(Q)) {
          return 1;
        } else {
          return -1;
        }
      });
      e = clampLengthToSafe(T);
      Q = 0;
      while (Q < e) {
        r[Q] = T[Q++];
      }
      while (Q < s) {
        deletePropertyWithError(r, Q++);
      }
      return r;
    }
  });
}