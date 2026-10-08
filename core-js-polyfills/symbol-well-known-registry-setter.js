// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'emptyModuleStub_1'
// - Resolved require(245992) to 'empty-module-stub_1'
// - Renamed variable 'o' to 'objectHasOwnPolyfill'
// - Resolved require(156732) to 'object-has-own-polyfill'
// - Renamed variable 'i' to 'symbolWellKnownRegistryExports'
// - Resolved require(174761) to 'symbol-well-known-registry-exports'
// - Resolved require(976843) to 'object-define-property-safe'
// - Updated imported property 'f' to 'safeDefineProperty' (module 976843)
// - Updated imported property 'f' to 'symbolWellKnownRegistry' (module 174761)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 11427
         */
module.exports = function (module, exports, require) {
  var emptyModuleStub_1 = require("empty-module-stub_1") /*id: 245992*/;
  var objectHasOwnPolyfill = require("object-has-own-polyfill") /*id: 156732*/;
  var symbolWellKnownRegistryExports = require("symbol-well-known-registry-exports") /*id: 174761*/;
  var u = require("object-define-property-safe") /*id: 976843*/.safeDefineProperty;
  module.exports = function (t) {
    var r = emptyModuleStub_1.Symbol ||= {};
    if (!objectHasOwnPolyfill(r, t)) {
      u(r, t, {
        value: symbolWellKnownRegistryExports.symbolWellKnownRegistry(t)
      });
    }
  };
}