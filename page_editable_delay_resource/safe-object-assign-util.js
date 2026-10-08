// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'definePropertySafeUtil_1'
// - Resolved require(739258) to 'define-property-safe-util_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 926591
         */
module.exports = function (module, exports, require) {
  var definePropertySafeUtil_1 = require("define-property-safe-util_1") /*id: 739258*/;
  function r(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      if (t) {
        i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      n.push.apply(n, i);
    }
    return n;
  }
  module.exports = function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] ?? {};
      if (t % 2) {
        r(Object(n), true).forEach(function (t) {
          definePropertySafeUtil_1(e, t, n[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        r(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
    return e;
  };
  module.exports.__esModule = true;
  module.exports.default = module.exports;
}