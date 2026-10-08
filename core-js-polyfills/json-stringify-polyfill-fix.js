// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'coreJsExportUtil'
// - Resolved require(760568) to 'core-js-export-util'
// - Renamed variable 'o' to 'globalNamespaceUtil'
// - Resolved require(858005) to 'global-namespace-util'
// - Renamed variable 'i' to 'reflectApplyPolyfill'
// - Resolved require(338469) to 'reflect-apply-polyfill'
// - Renamed variable 'u' to 'functionCallBindHelper'
// - Resolved require(101483) to 'function-call-bind-helper'
// - Renamed variable 'c' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 's' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'f' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// - Renamed variable 'a' to 'symbolTypeCheck'
// - Resolved require(95579) to 'symbol-type-check'
// - Renamed variable 'p' to 'arraySliceWrapper_1'
// - Resolved require(955975) to 'array-slice-wrapper_1'
// - Renamed variable 'l' to 'whitelistCheckFactory'
// - Resolved require(591356) to 'whitelist-check-factory'
// - Renamed variable 'v' to 'symbolSupportDetection'
// - Resolved require(131899) to 'symbol-support-detection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 32726
         */
module.exports = function (module, exports, require) {
  var coreJsExportUtil = require("core-js-export-util") /*id: 760568*/;
  var globalNamespaceUtil = require("global-namespace-util") /*id: 858005*/;
  var reflectApplyPolyfill = require("reflect-apply-polyfill") /*id: 338469*/;
  var functionCallBindHelper = require("function-call-bind-helper") /*id: 101483*/;
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  var symbolTypeCheck = require("symbol-type-check") /*id: 95579*/;
  var arraySliceWrapper_1 = require("array-slice-wrapper_1") /*id: 955975*/;
  var whitelistCheckFactory = require("whitelist-check-factory") /*id: 591356*/;
  var symbolSupportDetection = require("symbol-support-detection") /*id: 131899*/;
  var y = String;
  var h = globalNamespaceUtil("JSON", "stringify");
  var b = functionBindPrototypeCheckWrapper(/./.exec);
  var d = functionBindPrototypeCheckWrapper("".charAt);
  var g = functionBindPrototypeCheckWrapper("".charCodeAt);
  var m = functionBindPrototypeCheckWrapper("".replace);
  var x = functionBindPrototypeCheckWrapper(1 .toString);
  var S = /[\uD800-\uDFFF]/g;
  var O = /^[\uD800-\uDBFF]$/;
  var w = /^[\uDC00-\uDFFF]$/;
  var j = !symbolSupportDetection || safeFunctionExecutor(function () {
    var t = globalNamespaceUtil("Symbol")("stringify detection");
    return h([t]) !== "[null]" || h({
      a: t
    }) !== "{}" || h(Object(t)) !== "{}";
  });
  var A = safeFunctionExecutor(function () {
    return h("\uDF06\uD834") !== "\"\uDF06\uD834\"" || h("\uDEAD") !== "\"\uDEAD\"";
  });
  function P(t, r) {
    var n = arraySliceWrapper_1(arguments);
    var e = whitelistCheckFactory(r);
    if (!!isFunctionCheck(e) || t !== undefined && !symbolTypeCheck(t)) {
      n[1] = function (t, r) {
        if (isFunctionCheck(e)) {
          r = functionCallBindHelper(e, this, y(t), r);
        }
        if (!symbolTypeCheck(r)) {
          return r;
        }
      };
      return reflectApplyPolyfill(h, null, n);
    }
  }
  function E(t, r, n) {
    var e = d(n, r - 1);
    var o = d(n, r + 1);
    if (b(O, t) && !b(w, o) || b(w, t) && !b(O, e)) {
      return "\\u" + x(g(t, 0), 16);
    } else {
      return t;
    }
  }
  if (h) {
    coreJsExportUtil({
      target: "JSON",
      stat: true,
      arity: 3,
      forced: j || A
    }, {
      stringify: function (t, r, n) {
        var e = arraySliceWrapper_1(arguments);
        var o = reflectApplyPolyfill(j ? P : h, null, e);
        if (A && typeof o == "string") {
          return m(o, S, E);
        } else {
          return o;
        }
      }
    });
  }
}