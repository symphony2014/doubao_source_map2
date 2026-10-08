// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'registerListBlocks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 435677
         */
module.exports = function (module, exports, require) {
  var docxEditorProviderCollections = require("docx-editor-provider-collections") /*id: 494060*/;
  var editorPluginListMerge = require("editor-plugin-list-merge") /*id: 339280*/;
  var docxProviderNameCollectors = require("docx-provider-name-collectors") /*id: 391564*/;
  var docListBlockRegistration = require("doc-list-block-registration") /*id: 93973*/;
  function s(e, i) {
    let n = editorPluginListMerge.getEditorPluginList(i.config);
    let s = docxProviderNameCollectors.getAllProviderNamesWithOrdered(i.config);
    let c = docxEditorProviderCollections.getAllProviderNames(i.config);
    docListBlockRegistration.registerOrderedList(n, s);
    docListBlockRegistration.registerBulletList(n, c);
  }
  require.d(exports, {
    registerListBlocks: function () {
      return s;
    }
  });
}