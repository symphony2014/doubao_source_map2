// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Renamed variable 'o' to 'stringToArrayPolyfill'
// - Resolved require(826790) to 'string-to-array-polyfill'
// - Renamed variable 'i' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'a' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 908426
         */
module.exports = function (module, exports, require) {
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var stringToArrayPolyfill = require("string-to-array-polyfill") /*id: 826790*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  function u(t) {
    var r = t === 1;
    return function (e, u, c) {
      var f;
      var s = requireObjectNotNullish(e);
      var l = stringToArrayPolyfill(s);
      var v = getArrayLengthSafe(l);
      var p = safeFunctionBind(u, c);
      while (v-- > 0) {
        if (p(f = l[v], v, s)) {
          switch (t) {
            case 0:
              return f;
            case 1:
              return v;
          }
        }
      }
      if (r) {
        return -1;
      } else {
        return undefined;
      }
    };
  }
  module.exports = {
    findLast: u(0),
    findLastIndex: u(1)
  };
}