// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'o' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'i' to 'arrayIsArrayPolyfill_1'
// - Resolved require(959884) to 'array-is-array-polyfill_1'
// - Renamed variable 'u' to 'isObjectOrFunction_1'
// - Resolved require(446549) to 'is-object-or-function_1'
// - Renamed variable 'c' to 'toObjectUtil'
// - Resolved require(957710) to 'to-object-util'
// - Renamed variable 's' to 'clampLengthToSafe'
// - Resolved require(420882) to 'clamp-length-to-safe'
// - Renamed variable 'f' to 'validateMaxIndex'
// - Resolved require(952098) to 'validate-max-index'
// - Renamed variable 'a' to 'safeDefineProperty'
// - Resolved require(665456) to 'safe-define-property'
// - Renamed variable 'p' to 'arraySpeciesConstructorWrapper'
// - Resolved require(919108) to 'array-species-constructor-wrapper'
// - Renamed variable 'l' to 'arraySpeciesConstructorCheck_1'
// - Resolved require(248170) to 'array-species-constructor-check_1'
// - Renamed variable 'v' to 'symbolWellKnownRegistry'
// - Resolved require(21227) to 'symbol-well-known-registry'
// - Renamed variable 'y' to 'chromeV8VersionDetect'
// - Resolved require(968349) to 'chrome-v8-version-detect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 347928
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var arrayIsArrayPolyfill_1 = require("array-is-array-polyfill_1") /*id: 959884*/;
  var isObjectOrFunction_1 = require("is-object-or-function_1") /*id: 446549*/;
  var toObjectUtil = require("to-object-util") /*id: 957710*/;
  var clampLengthToSafe = require("clamp-length-to-safe") /*id: 420882*/;
  var validateMaxIndex = require("validate-max-index") /*id: 952098*/;
  var safeDefineProperty = require("safe-define-property") /*id: 665456*/;
  var arraySpeciesConstructorWrapper = require("array-species-constructor-wrapper") /*id: 919108*/;
  var arraySpeciesConstructorCheck_1 = require("array-species-constructor-check_1") /*id: 248170*/;
  var symbolWellKnownRegistry = require("symbol-well-known-registry") /*id: 21227*/;
  var chromeV8VersionDetect = require("chrome-v8-version-detect") /*id: 968349*/;
  var h = symbolWellKnownRegistry("isConcatSpreadable");
  var b = chromeV8VersionDetect >= 51 || !safeFunctionExecutor(function () {
    var t = [];
    t[h] = false;
    return t.concat()[0] !== t;
  });
  function d(t) {
    if (!isObjectOrFunction_1(t)) {
      return false;
    }
    var r = t[h];
    if (r !== undefined) {
      return !!r;
    } else {
      return arrayIsArrayPolyfill_1(t);
    }
  }
  coreJsExportUtil({
    target: "Array",
    proto: true,
    arity: 1,
    forced: !b || !arraySpeciesConstructorCheck_1("concat")
  }, {
    concat: function (t) {
      var r;
      var n;
      var e;
      var o;
      var i;
      var u = toObjectUtil(this);
      var l = arraySpeciesConstructorWrapper(u, 0);
      var v = 0;
      r = -1;
      e = arguments.length;
      for (; r < e; r++) {
        i = r === -1 ? u : arguments[r];
        if (d(i)) {
          validateMaxIndex(v + (o = clampLengthToSafe(i)));
          n = 0;
          for (; n < o; n++, v++) {
            if (n in i) {
              safeDefineProperty(l, v, i[n]);
            }
          }
        } else {
          validateMaxIndex(v + 1);
          safeDefineProperty(l, v++, i);
        }
      }
      l.length = v;
      return l;
    }
  });
}