// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'disableModuleByHostBusiness'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 62241
         */
module.exports = function (module, exports, require) {
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var ccmSheetSnapshotVersionChecker = require("ccm-sheet-snapshot-version-checker") /*id: 216834*/;
  function l(e) {
    let {
      config: i
    } = e;
    return i.get("hostBusiness") !== "sheet" && !ccmSheetSnapshotVersionChecker.shouldUseNewSnapshotVersion() || (docxEditorCore.disableModule(), false);
  }
  require.d(exports, {
    disableModuleByHostBusiness: function () {
      return l;
    }
  });
}