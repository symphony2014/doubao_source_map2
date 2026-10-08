// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(79151) to 'symbol-registration-checker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 280284
         */
module.exports = function (module, exports, require) {
  require("polyfill-property-definer") /*id: 358006*/({
    target: "Symbol",
    stat: true,
    name: "isRegisteredSymbol"
  }, {
    isRegistered: require("symbol-registration-checker") /*id: 79151*/
  });
}