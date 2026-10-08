// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(760974) to 'es5-define-property-impl'
// - Renamed variable 'o' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Resolved require(349338) to 'core-js-wks-access'
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 768336
         */
module.exports = function (module, exports, require) {
  var n = require("es5-define-property-impl") /*id: 760974*/.defineProperty;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var i = require("core-js-wks-access") /*id: 349338*/("toStringTag");
  module.exports = function (t, r, e) {
    if (t && !e) {
      t = t.prototype;
    }
    if (t && !objectHasOwnPolyfill_1(t, i)) {
      n(t, i, {
        configurable: true,
        value: r
      });
    }
  };
}