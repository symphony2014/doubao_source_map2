// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Renamed variable 'o' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'i' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'a' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 915212
         */
module.exports = function (module, exports, require) {
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  module.exports = function (t, r, e) {
    return function (u) {
      var c = requireObjectNotNullish(u);
      var f = arguments.length;
      var s = f > 1 ? arguments[1] : undefined;
      var l = s !== undefined;
      var v = l ? safeFunctionBind(s, f > 2 ? arguments[2] : undefined) : undefined;
      var p = new t();
      var h = 0;
      iteratorForEachHelper(c, function (t) {
        var n = l ? v(t, h++) : t;
        if (e) {
          r(p, requireObjectOrThrowTypeError_1(n)[0], n[1]);
        } else {
          r(p, n);
        }
      });
      return p;
    };
  };
}