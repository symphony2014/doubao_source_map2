// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerBlockAuthor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 944384
         */
module.exports = function (module, exports, require) {
  var blockAuthorProviderName = require("block-author-provider-name") /*id: 488151*/;
  var docxGridColumnViewRegistration = require("docx-grid-column-view-registration") /*id: 111546*/;
  function l() {
    docxGridColumnViewRegistration.registerGridBlock([blockAuthorProviderName.getBlockAuthorProviderName]);
    docxGridColumnViewRegistration.registerGridColumnBlock([blockAuthorProviderName.getBlockAuthorProviderName]);
  }
  require.d(exports, {
    registerBlockAuthor: function () {
      return l;
    }
  });
}