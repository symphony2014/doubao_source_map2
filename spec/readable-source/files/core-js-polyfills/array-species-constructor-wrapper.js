// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'arraySpeciesConstructor'
// - Resolved require(651679) to 'array-species-constructor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 919108
         */
module.exports = function (module, exports, require) {
  var arraySpeciesConstructor = require("array-species-constructor") /*id: 651679*/;
  module.exports = function (t, r) {
    return new (arraySpeciesConstructor(t))(r === 0 ? 0 : r);
  };
}