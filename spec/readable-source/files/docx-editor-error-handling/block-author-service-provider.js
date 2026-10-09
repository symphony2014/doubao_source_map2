// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'blockAuthorProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 302629
         */
module.exports = function (module, exports, require) {
  let n = require("dependency-injection-container") /*id: 555385*/.providerName("block-author-service");
  require.d(exports, {
    blockAuthorProvider: function () {
      return n;
    }
  });
}