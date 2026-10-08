// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'semiIdentifierConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 33772.61785936.js
         * chunkId: 33772
         * moduleId: 391399
         */
module.exports = function (module, exports, require) {
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let o = {
    PREFIX: `${semiIdentifier.semiIdentifier}`
  };
  require.d(exports, {
    semiIdentifierConfig: function () {
      return o;
    }
  });
}