// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'R' to 'commentServiceToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 397738
         */
module.exports = function (module, exports, require) {
  let i = require("dependency-injection-container") /*id: 555385*/.providerName("flow-comment-service");
  require.d(exports, {
    commentServiceToken: function () {
      return i;
    }
  });
}