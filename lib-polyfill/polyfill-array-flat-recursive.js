// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'arrayIsarrayPolyfill'
// - Resolved require(332607) to 'array-isarray-polyfill'
// - Renamed variable 'o' to 'getArrayLengthSafe'
// - Resolved require(569025) to 'get-array-length-safe'
// - Renamed variable 'i' to 'validateMaxIndex_1'
// - Resolved require(46643) to 'validate-max-index_1'
// - Renamed variable 'a' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 988040
         */
module.exports = function (module, exports, require) {
  var arrayIsarrayPolyfill = require("array-isarray-polyfill") /*id: 332607*/;
  var getArrayLengthSafe = require("get-array-length-safe") /*id: 569025*/;
  var validateMaxIndex_1 = require("validate-max-index_1") /*id: 46643*/;
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  function u(t, r, e, c, f, s, l, v) {
    var p;
    var h;
    var d = f;
    var y = 0;
    var g = !!l && safeFunctionBind(l, v);
    while (y < c) {
      if (y in e) {
        p = g ? g(e[y], y, r) : e[y];
        if (s > 0 && arrayIsarrayPolyfill(p)) {
          h = getArrayLengthSafe(p);
          d = u(t, r, p, h, d, s - 1) - 1;
        } else {
          validateMaxIndex_1(d + 1);
          t[d] = p;
        }
        d++;
      }
      y++;
    }
    return d;
  }
  module.exports = u;
}