// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'o' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// - Resolved require(760974) to 'es5-define-property-impl'
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 557126
         */
module.exports = function (module, exports, require) {
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var i = require("es5-define-property-impl") /*id: 760974*/.defineProperty;
  var a = coreJsWksAccess("unscopables");
  var u = Array.prototype;
  if (u[a] === undefined) {
    i(u, a, {
      configurable: true,
      value: objectCreatePolyfill_1(null)
    });
  }
  module.exports = function (t) {
    u[a][t] = true;
  };
}