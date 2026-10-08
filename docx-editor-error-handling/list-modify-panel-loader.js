// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'loadListModifyPanel'
// - Renamed export 'Z' to 'retryableListModifyPanelLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 52633
         */
module.exports = function (module, exports, require) {
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var retryableModuleLoaderFactory = require("retryable-module-loader-factory") /*id: 99395*/;
  let l = () => docxTaskSchedulerUtilities.scheduleTaskWithConfig({
    action: () => Promise.all([require.e("menu-component-chunk") /*id: 70389*/, require.e("list-or-heading-modify-panel") /*id: 87195*/]).then(require.bind(require, "ordered-list-modify-panel") /*id: 393163*/),
    name: "docx.listModifyPanel"
  });
  let s = retryableModuleLoaderFactory.getRetryableModuleLoader({
    loader: l,
    loading: () => null
  }, {
    moduleName: "list_modify_panel"
  });
  exports.retryableListModifyPanelLoader = s;
  require.d(exports, {
    loadListModifyPanel: function () {
      return l;
    }
  });
}