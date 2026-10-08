// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(362469) to 'reverse-iterator-map-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 973999
         */
module.exports = function (module, exports, require) {
  require("polyfill-property-definer") /*id: 358006*/({
    target: "Iterator",
    proto: true,
    real: true,
    forced: true
  }, {
    indexed: require("reverse-iterator-map-polyfill") /*id: 362469*/
  });
}