// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'functionTypeGuardAssertion'
// - Resolved require(750329) to 'function-type-guard-assertion'
// - Renamed variable 'T' to 'toObjectUtil'
// - Resolved require(957710) to 'to-object-util'
// - Renamed variable 'n' to 'stringToArrayOrObjectFallback'
// - Resolved require(280815) to 'string-to-array-or-object-fallback'
// - Renamed variable 'o' to 'clampLengthToSafe'
// - Resolved require(420882) to 'clamp-length-to-safe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 628487
         */
module.exports = function (module, exports, require) {
  var functionTypeGuardAssertion = require("function-type-guard-assertion") /*id: 750329*/;
  var toObjectUtil = require("to-object-util") /*id: 957710*/;
  var stringToArrayOrObjectFallback = require("string-to-array-or-object-fallback") /*id: 280815*/;
  var clampLengthToSafe = require("clamp-length-to-safe") /*id: 420882*/;
  var i = TypeError;
  var a = "Reduce of empty array with no initial value";
  function u(t) {
    return function (e, Q, u, s) {
      var l = toObjectUtil(e);
      var c = stringToArrayOrObjectFallback(l);
      var p = clampLengthToSafe(l);
      functionTypeGuardAssertion(Q);
      if (p === 0 && u < 2) {
        throw new i(a);
      }
      var h = t ? p - 1 : 0;
      var f = t ? -1 : 1;
      if (u < 2) {
        while (true) {
          if (h in c) {
            s = c[h];
            h += f;
            break;
          }
          h += f;
          if (t ? h < 0 : p <= h) {
            throw new i(a);
          }
        }
      }
      for (; t ? h >= 0 : p > h; h += f) {
        if (h in c) {
          s = Q(s, c[h], h, l);
        }
      }
      return s;
    };
  }
  module.exports = {
    left: u(false),
    right: u(true)
  };
}