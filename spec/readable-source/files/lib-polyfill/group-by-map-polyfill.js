// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'stringToArrayPolyfill'
// - Resolved require(826790) to 'string-to-array-polyfill'
// - Renamed variable 'a' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'u' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'c' to 'mapPrototypeUtils'
// - Resolved require(522979) to 'map-prototype-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 392463
         */
module.exports = function (module, exports, require) {
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var stringToArrayPolyfill = require("string-to-array-polyfill") /*id: 826790*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var mapPrototypeUtils = require("map-prototype-utils") /*id: 522979*/;
  var f = mapPrototypeUtils.Map;
  var s = mapPrototypeUtils.get;
  var l = mapPrototypeUtils.has;
  var v = mapPrototypeUtils.set;
  var p = functionBindFallback([].push);
  module.exports = function (t) {
    var r;
    var e;
    var o = requireObjectNotNullish(this);
    var c = stringToArrayPolyfill(o);
    var h = safeFunctionBind(t, arguments.length > 1 ? arguments[1] : undefined);
    var d = new f();
    var y = getArrayLengthSafe(c);
    var g = 0;
    for (; y > g; g++) {
      if (l(d, r = h(e = c[g], g, o))) {
        p(s(d, r), e);
      } else {
        v(d, r, [e]);
      }
    }
    return d;
  };
}