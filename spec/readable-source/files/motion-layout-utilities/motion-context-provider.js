// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'motionContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 271458
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