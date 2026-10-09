// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(685654) to 'template-string-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 550679
         */
module.exports = function (module, exports, require) {
  require("polyfill-property-definer") /*id: 358006*/({
    target: "String",
    stat: true,
    forced: true
  }, {
    cooked: require("template-string-polyfill") /*id: 685654*/
  });
}