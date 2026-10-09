// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'a' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// - Renamed variable 'u' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Renamed variable 'c' to 'mapPrototypeUtils'
// - Resolved require(522979) to 'map-prototype-utils'
// - Renamed variable 'f' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// - Renamed variable 's' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 865602
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  var mapPrototypeUtils = require("map-prototype-utils") /*id: 522979*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var l = mapPrototypeUtils.Map;
  var v = mapPrototypeUtils.has;
  var p = mapPrototypeUtils.get;
  var h = mapPrototypeUtils.set;
  var d = functionBindFallback([].push);
  var y = libPolyfillCheck || tryCatchFunctionWrapper(function () {
    return l.groupBy("ab", function (t) {
      return t;
    }).get("a").length !== 1;
  });
  polyfillPropertyDefiner({
    target: "Map",
    stat: true,
    forced: libPolyfillCheck || y
  }, {
    groupBy: function (t, r) {
      requireNotNullish(t);
      functionValidator(r);
      var e = new l();
      var n = 0;
      iteratorForEachHelper(t, function (t) {
        var o = r(t, n++);
        if (v(e, o)) {
          d(p(e, o), t);
        } else {
          h(e, o, [t]);
        }
      });
      return e;
    }
  });
}