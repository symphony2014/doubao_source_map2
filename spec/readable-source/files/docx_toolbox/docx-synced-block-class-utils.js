// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'a' to 'getSyncedShadowClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 75527
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var docxSyncedBlockUtils = require("docx-synced-block-utils") /*id: 791402*/;
  var docBlockMenuLayoutConstants = require("doc-block-menu-layout-constants") /*id: 166815*/;
  function a(e, n) {
    if (reactCoreLibraryReexport.useMemo(() => !!e && !!docxSyncedBlockUtils.isSyncedReference(e.model, n), [e, n])) {
      return `${docBlockMenuLayoutConstants.menuTriggerClass}-shadow`;
    } else {
      return "";
    }
  }
  require.d(exports, {
    getSyncedShadowClass: function () {
      return a;
    }
  });
}