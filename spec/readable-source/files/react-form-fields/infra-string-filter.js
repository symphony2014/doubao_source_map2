// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b' to 'filterInfraStrings'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 435337
         */
module.exports = function (module, exports, require) {
  let r = e => e.map(e => e.toString()).filter(e => !e.includes("infra:"));
  require.d(exports, {
    filterInfraStrings: function () {
      return r;
    }
  });
}