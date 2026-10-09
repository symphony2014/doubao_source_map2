// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'arraySpeciesConstructorGetter'
// - Resolved require(517083) to 'array-species-constructor-getter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 279621
         */
module.exports = function (module, exports, require) {
  var arraySpeciesConstructorGetter = require("array-species-constructor-getter") /*id: 517083*/;
  module.exports = function (t, r) {
    return new (arraySpeciesConstructorGetter(t))(r === 0 ? 0 : r);
  };
}