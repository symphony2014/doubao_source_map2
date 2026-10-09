// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'o' to 'turnIntoProviderToken_1'
// - Resolved require(887790) to 'turn-into-provider-token_1'
// - Updated imported property 'H' to 'turnIntoProvider' (module 887790)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 339633
         */
module.exports = function (module, exports, require) {
  var turnIntoProviderToken_1 = require("turn-into-provider-token_1") /*id: 887790*/;
  require.d(exports, {
    H: function () {
      return turnIntoProviderToken_1.turnIntoProvider;
    }
  });
}