// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(94791) to 'async-iterator-map-with-call-bind'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 269426
         */
module.exports = function (module, exports, require) {
  require("polyfill-property-definer") /*id: 358006*/({
    target: "AsyncIterator",
    name: "indexed",
    proto: true,
    real: true,
    forced: true
  }, {
    asIndexedPairs: require("async-iterator-map-with-call-bind") /*id: 94791*/
  });
}