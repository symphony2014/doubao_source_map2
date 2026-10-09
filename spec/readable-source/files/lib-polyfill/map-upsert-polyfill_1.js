// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(318737) to 'map-get-or-set-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 630767
         */
module.exports = function (module, exports, require) {
  require("polyfill-property-definer") /*id: 358006*/({
    target: "Map",
    proto: true,
    real: true,
    forced: true
  }, {
    upsert: require("map-get-or-set-polyfill") /*id: 318737*/
  });
}