// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'initializeBlockAuthorProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 31449
         */
module.exports = function (module, exports, require) {
  var blockAuthorProviderName = require("block-author-provider-name") /*id: 488151*/;
  var docBlockViewModelRegister = require("doc-block-view-model-register") /*id: 20984*/;
  function l() {
    docBlockViewModelRegister.registerBlockViewModel([blockAuthorProviderName.getBlockAuthorProviderName]);
  }
  require.d(exports, {
    initializeBlockAuthorProvider: function () {
      return l;
    }
  });
}