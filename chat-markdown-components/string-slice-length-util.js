// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'calcSliceLength'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 235558
         */
module.exports = function (module, exports, require) {
  let i = (e, t) => [...e].slice(0, t).join("").length;
  require.d(exports, {
    calcSliceLength: function () {
      return i;
    }
  });
}