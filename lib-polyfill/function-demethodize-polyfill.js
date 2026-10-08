// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(291594) to 'function-bind-polyfill-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 76568
         */
module.exports = function (module, exports, require) {
  require("polyfill-property-definer") /*id: 358006*/({
    target: "Function",
    proto: true,
    forced: true,
    name: "demethodize"
  }, {
    unThis: require("function-bind-polyfill-wrapper") /*id: 291594*/
  });
}