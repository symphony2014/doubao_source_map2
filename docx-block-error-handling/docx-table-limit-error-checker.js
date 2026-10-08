// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'y' to 'checkTableLimits'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29302.5675d381.js
         * chunkId: 29302
         * moduleId: 723993
         */
module.exports = function (module, exports, require) {
  var docxErrorToastHandler = require("docx-error-toast-handler") /*id: 230438*/;
  var docxErrorStatusHandler = require("docx-error-status-handler") /*id: 570520*/;
  function c(e, n) {
    if (n > docxErrorStatusHandler.docBlockLimits.table_column) {
      docxErrorToastHandler.showErrorToast({
        content: t("CreationDoc_Docs_InlineTable_SingleColumnsTooMany", undefined, undefined, `${docxErrorStatusHandler.docBlockLimits.table_column}`)
      });
      return true;
    } else {
      return e * n > docxErrorStatusHandler.docBlockLimits.table_cell && (docxErrorToastHandler.showErrorToast({
        content: t("CreationDoc_Docs_InlineTable_SingleCellsTooMany", undefined, undefined, `${docxErrorStatusHandler.docBlockLimits.table_cell}`)
      }), true);
    }
  }
  require.d(exports, {
    checkTableLimits: function () {
      return c;
    }
  });
}