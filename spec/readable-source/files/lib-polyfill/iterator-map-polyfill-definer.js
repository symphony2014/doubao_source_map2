// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'iteratorMapPolyfill'
// - Resolved require(338333) to 'iterator-map-polyfill'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 284395
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var iteratorMapPolyfill = require("iterator-map-polyfill") /*id: 338333*/;
  polyfillPropertyDefiner({
    target: "Iterator",
    proto: true,
    real: true,
    forced: require("lib-polyfill-check") /*id: 87987*/
  }, {
    map: iteratorMapPolyfill
  });
}