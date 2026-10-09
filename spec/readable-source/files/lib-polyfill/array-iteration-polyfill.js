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
// - Renamed variable 'c' to 'arraySpeciesCreate'
// - Resolved require(279621) to 'array-species-create'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 343120
         */
module.exports = function (module, exports, require) {
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var stringToArrayPolyfill = require("string-to-array-polyfill") /*id: 826790*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var arraySpeciesCreate = require("array-species-create") /*id: 279621*/;
  var f = functionBindFallback([].push);
  function s(t) {
    var r = t === 1;
    var e = t === 2;
    var o = t === 3;
    var s = t === 4;
    var l = t === 6;
    var v = t === 7;
    var p = t === 5 || l;
    return function (h, d, y, g) {
      var b;
      var w;
      var m = requireObjectNotNullish(h);
      var x = stringToArrayPolyfill(m);
      var A = getArrayLengthSafe(x);
      var E = safeFunctionBind(d, y);
      var S = 0;
      var O = g || arraySpeciesCreate;
      var R = r ? O(h, A) : e || v ? O(h, 0) : undefined;
      for (; A > S; S++) {
        if ((p || S in x) && (w = E(b = x[S], S, m), t)) {
          if (r) {
            R[S] = w;
          } else if (w) {
            switch (t) {
              case 3:
                return true;
              case 5:
                return b;
              case 6:
                return S;
              case 2:
                f(R, b);
            }
          } else {
            switch (t) {
              case 4:
                return false;
              case 7:
                f(R, b);
            }
          }
        }
      }
      if (l) {
        return -1;
      } else if (o || s) {
        return s;
      } else {
        return R;
      }
    };
  }
  module.exports = {
    forEach: s(0),
    map: s(1),
    filter: s(2),
    some: s(3),
    every: s(4),
    find: s(5),
    findIndex: s(6),
    filterReject: s(7)
  };
}