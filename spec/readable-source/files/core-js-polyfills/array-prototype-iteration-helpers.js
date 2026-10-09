// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionBindHelper_1'
// - Resolved require(644734) to 'function-bind-helper_1'
// - Renamed variable 'o' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'i' to 'stringToArrayOrObjectFallback'
// - Resolved require(280815) to 'string-to-array-or-object-fallback'
// - Renamed variable 'u' to 'toObjectUtil'
// - Resolved require(957710) to 'to-object-util'
// - Renamed variable 'c' to 'clampLengthToSafe'
// - Resolved require(420882) to 'clamp-length-to-safe'
// - Renamed variable 's' to 'arraySpeciesConstructorWrapper'
// - Resolved require(919108) to 'array-species-constructor-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 409831
         */
module.exports = function (module, exports, require) {
  var functionBindHelper_1 = require("function-bind-helper_1") /*id: 644734*/;
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var stringToArrayOrObjectFallback = require("string-to-array-or-object-fallback") /*id: 280815*/;
  var toObjectUtil = require("to-object-util") /*id: 957710*/;
  var clampLengthToSafe = require("clamp-length-to-safe") /*id: 420882*/;
  var arraySpeciesConstructorWrapper = require("array-species-constructor-wrapper") /*id: 919108*/;
  var f = functionBindPrototypeCheckWrapper([].push);
  function a(t) {
    var r = t === 1;
    var n = t === 2;
    var o = t === 3;
    var a = t === 4;
    var p = t === 6;
    var l = t === 7;
    var v = t === 5 || p;
    return function (y, h, b, d) {
      var g;
      var m;
      var x = toObjectUtil(y);
      var S = stringToArrayOrObjectFallback(x);
      var O = clampLengthToSafe(S);
      var w = functionBindHelper_1(h, b);
      var j = 0;
      var A = d || arraySpeciesConstructorWrapper;
      var P = r ? A(y, O) : n || l ? A(y, 0) : undefined;
      for (; O > j; j++) {
        if ((v || j in S) && (m = w(g = S[j], j, x), t)) {
          if (r) {
            P[j] = m;
          } else if (m) {
            switch (t) {
              case 3:
                return true;
              case 5:
                return g;
              case 6:
                return j;
              case 2:
                f(P, g);
            }
          } else {
            switch (t) {
              case 4:
                return false;
              case 7:
                f(P, g);
            }
          }
        }
      }
      if (p) {
        return -1;
      } else if (o || a) {
        return a;
      } else {
        return P;
      }
    };
  }
  module.exports = {
    forEach: a(0),
    map: a(1),
    filter: a(2),
    some: a(3),
    every: a(4),
    find: a(5),
    findIndex: a(6),
    filterReject: a(7)
  };
}