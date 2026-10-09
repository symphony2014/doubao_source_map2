// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'setSubsetPolyfillUtil'
// - Resolved require(314755) to 'set-subset-polyfill-util'
// - Resolved require(922533) to 'set-implementation-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 470440
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var setSubsetPolyfillUtil = require("set-subset-polyfill-util") /*id: 314755*/;
  polyfillPropertyDefiner({
    target: "Set",
    proto: true,
    real: true,
    forced: !require("set-implementation-check") /*id: 922533*/("isDisjointFrom", function (t) {
      return !t;
    })
  }, {
    isDisjointFrom: setSubsetPolyfillUtil
  });
}