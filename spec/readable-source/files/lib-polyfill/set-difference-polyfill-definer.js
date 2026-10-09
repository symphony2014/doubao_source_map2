// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'setDifferencePolyfillUtil'
// - Resolved require(729313) to 'set-difference-polyfill-util'
// - Resolved require(922533) to 'set-implementation-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 81603
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var setDifferencePolyfillUtil = require("set-difference-polyfill-util") /*id: 729313*/;
  polyfillPropertyDefiner({
    target: "Set",
    proto: true,
    real: true,
    forced: !require("set-implementation-check") /*id: 922533*/("difference", function (t) {
      return t.size === 0;
    })
  }, {
    difference: setDifferencePolyfillUtil
  });
}