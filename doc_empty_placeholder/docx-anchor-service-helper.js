// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'isImchatSyncedBlock'
// - Renamed export 'a' to 'getAndTrackAnchor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: module_block_file.6e021e7d.js
         * chunkId: 12558
         * moduleId: 574470
         */
module.exports = function (module, exports, require) {
  var docUrlProcessingUtilities = require("doc-url-processing-utilities") /*id: 330118*/;
  var anchorBuilderToken = require("anchor-builder-token") /*id: 729431*/;
  var docComponentFeatureFlags = require("doc-component-feature-flags") /*id: 475581*/;
  function s() {
    return docComponentFeatureFlags.isImchatSyncedBlk();
  }
  async function a(e, i) {
    let n = await e.editorAPI.getService(anchorBuilderToken.anchorBuilderToken, {
      async: true,
      optional: true
    });
    let o = n == null ? undefined : n.getAnchor({
      docxRecord: i.record.id
    });
    if (o) {
      docUrlProcessingUtilities.openUrlWithPlatform(o);
    }
  }
  require.d(exports, {
    isImchatSyncedBlock: function () {
      return s;
    },
    getAndTrackAnchor: function () {
      return a;
    }
  });
}