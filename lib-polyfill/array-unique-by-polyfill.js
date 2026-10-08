// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'i' to 'isNullishCheck_1'
// - Resolved require(414355) to 'is-nullish-check_1'
// - Renamed variable 'a' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'u' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'c' to 'mapPrototypeUtils'
// - Resolved require(522979) to 'map-prototype-utils'
// - Renamed variable 'f' to 'mapIteratorFindUtil'
// - Resolved require(606678) to 'map-iterator-find-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 904662
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var isNullishCheck_1 = require("is-nullish-check_1") /*id: 414355*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var mapPrototypeUtils = require("map-prototype-utils") /*id: 522979*/;
  var mapIteratorFindUtil = require("map-iterator-find-util") /*id: 606678*/;
  var s = mapPrototypeUtils.Map;
  var l = mapPrototypeUtils.has;
  var v = mapPrototypeUtils.set;
  var p = functionBindFallback([].push);
  module.exports = function (t) {
    var r;
    var e;
    var n;
    var c = requireObjectNotNullish(this);
    var h = getArrayLengthSafe(c);
    var d = [];
    var y = new s();
    var g = isNullishCheck_1(t) ? function (t) {
      return t;
    } : functionValidator(t);
    for (r = 0; r < h; r++) {
      if (!l(y, n = g(e = c[r]))) {
        v(y, n, e);
      }
    }
    mapIteratorFindUtil(y, function (t) {
      p(d, t);
    });
    return d;
  };
}