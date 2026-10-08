// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'motionContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 647809
         */
module.exports = function (module, exports, require) {
  let n = require("react-core-library-reexport") /*id: 634663*/.createContext({
    transformPagePoint: t => t,
    isStatic: false,
    reducedMotion: "never"
  });
  require.d(exports, {
    motionContext: function () {
      return n;
    }
  });
}