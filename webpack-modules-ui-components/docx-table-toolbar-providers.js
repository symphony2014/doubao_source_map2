// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'UZ' to 'getTableSlotProviders'
// - Renamed export 'j9' to 'getTablePopoverToolbar'
// - Renamed export 'k4' to 'getTableCellToolbar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 344415
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var docxEditorConstantsConfig_1 = require("docx-editor-constants-config_1") /*id: 914193*/;
  var tableSlotProviders = require("table-slot-providers") /*id: 151739*/;
  function a() {
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      return [];
    } else {
      return [docxEditorConstantsConfig_1.tableCellToolbarProvider];
    }
  }
  function s() {
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile) {
      return [];
    } else {
      return [docxEditorConstantsConfig_1.tablePopoverToolbarProvider];
    }
  }
  function c() {
    return [tableSlotProviders.tableHeaderBarProviderName, tableSlotProviders.tableOperationBarProviderName, tableSlotProviders.tableColumnResizerProviderName];
  }
  require.d(exports, {
    getTableSlotProviders: function () {
      return c;
    },
    getTablePopoverToolbar: function () {
      return s;
    },
    getTableCellToolbar: function () {
      return a;
    }
  });
}