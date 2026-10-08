// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'reflectApplyPolyfill_1'
// - Resolved require(676373) to 'reflect-apply-polyfill_1'
// - Renamed variable 'i' to 'compositeKeyCacheFactory'
// - Resolved require(663490) to 'composite-key-cache-factory'
// - Renamed variable 'a' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'u' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 287740
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var reflectApplyPolyfill_1 = require("reflect-apply-polyfill_1") /*id: 676373*/;
  var compositeKeyCacheFactory = require("composite-key-cache-factory") /*id: 663490*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var c = Object;
  function f() {
    var t = globalPolyfillAccess("Object", "freeze");
    if (t) {
      return t(objectCreatePolyfill_1(null));
    } else {
      return objectCreatePolyfill_1(null);
    }
  }
  polyfillPropertyDefiner({
    global: true,
    forced: true
  }, {
    compositeKey: function () {
      return reflectApplyPolyfill_1(compositeKeyCacheFactory, c, arguments).get("object", f);
    }
  });
}