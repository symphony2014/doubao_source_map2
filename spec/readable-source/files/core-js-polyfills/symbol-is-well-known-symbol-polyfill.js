// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(760568) to 'core-js-export-util'
// - Resolved require(802763) to 'symbol-well-known-checker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 410069
         */
module.exports = function (module, exports, require) {
  require("core-js-export-util") /*id: 760568*/({
    target: "Symbol",
    stat: true,
    forced: true
  }, {
    isWellKnownSymbol: require("symbol-well-known-checker") /*id: 802763*/
  });
}