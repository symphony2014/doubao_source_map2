// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'i' to 'collabProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 70666.7b9c3546.js
         * chunkId: 70666
         * moduleId: 164012
         */
module.exports = function (module, exports, require) {
  var collabDependencyProvider = require("collab-dependency-provider") /*id: 930308*/;
  require("dependency-injection-container") /*id: 555385*/.providerName("collab-triggers-factory");
  require.d(exports, {
    collabProvider: function () {
      return collabDependencyProvider.collabProvider;
    }
  });
}