// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Q' to 'revisionExtSvcToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 755911
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("revision-extension-service");
  require.d(exports, {
    revisionExtSvcToken: function () {
      return n;
    }
  });
}