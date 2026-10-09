// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 878950
         */
module.exports = function (module, exports, require) {
  require("polyfill-property-definer") /*id: 358006*/({
    target: "Object",
    stat: true
  }, {
    hasOwn: require("object-has-own-polyfill_1") /*id: 759692*/
  });
}