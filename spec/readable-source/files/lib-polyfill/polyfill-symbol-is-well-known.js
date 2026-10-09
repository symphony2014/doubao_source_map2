// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(639114) to 'is-well-known-symbol'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 936000
         */
module.exports = function (module, exports, require) {
  require("polyfill-property-definer") /*id: 358006*/({
    target: "Symbol",
    stat: true,
    name: "isWellKnownSymbol",
    forced: true
  }, {
    isWellKnown: require("is-well-known-symbol") /*id: 639114*/
  });
}