// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(685980) to 'json-raw-json-support-check'
// - Resolved require(92553) to 'is-raw-json-type-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 995635
         */
module.exports = function (module, exports, require) {
  require("polyfill-property-definer") /*id: 358006*/({
    target: "JSON",
    stat: true,
    forced: !require("json-raw-json-support-check") /*id: 685980*/
  }, {
    isRawJSON: require("is-raw-json-type-check") /*id: 92553*/
  });
}