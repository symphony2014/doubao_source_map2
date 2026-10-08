// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'compositeKeyCacheFactory'
// - Resolved require(663490) to 'composite-key-cache-factory'
// - Renamed variable 'i' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'a' to 'reflectApplyPolyfill_1'
// - Resolved require(676373) to 'reflect-apply-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 406380
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var compositeKeyCacheFactory = require("composite-key-cache-factory") /*id: 663490*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var reflectApplyPolyfill_1 = require("reflect-apply-polyfill_1") /*id: 676373*/;
  polyfillPropertyDefiner({
    global: true,
    forced: true
  }, {
    compositeSymbol: function () {
      if (arguments.length == 1 && typeof arguments[0] == "string") {
        return globalPolyfillAccess("Symbol").for(arguments[0]);
      } else {
        return reflectApplyPolyfill_1(compositeKeyCacheFactory, null, arguments).get("symbol", globalPolyfillAccess("Symbol"));
      }
    }
  });
}