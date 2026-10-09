// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(760974) to 'es5-define-property-impl'
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 868602
         */
module.exports = function (module, exports, require) {
  var n = require("es5-define-property-impl") /*id: 760974*/.defineProperty;
  module.exports = function (t, r, e) {
    if (!(e in t)) {
      n(t, e, {
        configurable: true,
        get: function () {
          return r[e];
        },
        set: function (t) {
          r[e] = t;
        }
      });
    }
  };
}