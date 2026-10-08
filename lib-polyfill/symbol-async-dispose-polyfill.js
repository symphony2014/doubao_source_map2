// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'coreJsDefineWellKnownSymbol'
// - Resolved require(589287) to 'core-js-define-well-known-symbol'
// - Resolved require(760974) to 'es5-define-property-impl'
// - Resolved require(143761) to 'property-descriptor-polyfill'
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// - Updated imported property 'f' to 'getOwnPropertyDesc' (module 143761)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 408442
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var coreJsDefineWellKnownSymbol = require("core-js-define-well-known-symbol") /*id: 589287*/;
  var i = require("es5-define-property-impl") /*id: 760974*/.defineProperty;
  var a = require("property-descriptor-polyfill") /*id: 143761*/.getOwnPropertyDesc;
  var u = globalObjectPolyfill.Symbol;
  coreJsDefineWellKnownSymbol("asyncDispose");
  if (u) {
    var c = a(u, "asyncDispose");
    if (c.enumerable && c.configurable && c.writable) {
      i(u, "asyncDispose", {
        value: c.value,
        enumerable: false,
        configurable: false,
        writable: false
      });
    }
  }
}