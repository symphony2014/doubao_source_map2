// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'c' to 'mentionUserSvcKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 326879
         */
module.exports = function (module, exports, require) {
  let r = require("dependency-injection-container") /*id: 555385*/.providerName("mention-user-service");
  require.d(exports, {
    mentionUserSvcKey: function () {
      return r;
    }
  });
}