// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(760568) to 'core-js-export-util'
// - Resolved require(559661) to 'symbol-registry-checker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 96524
         */
module.exports = function (module, exports, require) {
  require("core-js-export-util") /*id: 760568*/({
    target: "Symbol",
    stat: true
  }, {
    isRegisteredSymbol: require("symbol-registry-checker") /*id: 559661*/
  });
}