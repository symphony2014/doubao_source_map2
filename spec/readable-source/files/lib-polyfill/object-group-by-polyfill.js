// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'i' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'a' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'u' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// - Renamed variable 'c' to 'symbolToStringConverter'
// - Resolved require(980181) to 'symbol-to-string-converter'
// - Renamed variable 'f' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Renamed variable 's' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 450626
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var symbolToStringConverter = require("symbol-to-string-converter") /*id: 980181*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var l = Object.groupBy;
  var v = globalPolyfillAccess("Object", "create");
  var p = functionBindFallback([].push);
  polyfillPropertyDefiner({
    target: "Object",
    stat: true,
    forced: !l || tryCatchFunctionWrapper(function () {
      return l("ab", function (t) {
        return t;
      }).a.length !== 1;
    })
  }, {
    groupBy: function (t, r) {
      requireNotNullish(t);
      functionValidator(r);
      var e = v(null);
      var n = 0;
      iteratorForEachHelper(t, function (t) {
        var o = symbolToStringConverter(r(t, n++));
        if (o in e) {
          p(e[o], t);
        } else {
          e[o] = [t];
        }
      });
      return e;
    }
  });
}