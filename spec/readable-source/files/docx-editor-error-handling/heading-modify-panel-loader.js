// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'loadHeadingModifyPanel'
// - Renamed export 'Z' to 'retryableHeadingModifyPanelLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 399517
         */
module.exports = function (module, exports, require) {
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var retryableModuleLoaderFactory = require("retryable-module-loader-factory") /*id: 99395*/;
  let l = () => docxTaskSchedulerUtilities.scheduleTaskWithConfig({
    action: () => Promise.all([require.e("menu-component-chunk") /*id: 70389*/, require.e("list-or-heading-modify-panel") /*id: 87195*/]).then(require.bind(require, "heading-modify-panel-component") /*id: 216502*/),
    name: "docx.headingModifyPanel"
  });
  let s = retryableModuleLoaderFactory.getRetryableModuleLoader({
    loader: l,
    loading: () => null
  }, {
    moduleName: "heading_modify_panel"
  });
  exports.retryableHeadingModifyPanelLoader = s;
  require.d(exports, {
    loadHeadingModifyPanel: function () {
      return l;
    }
  });
}