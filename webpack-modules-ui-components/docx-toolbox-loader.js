// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'DocxToolbox'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 165721
         */
module.exports = function (module, exports, require) {
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var i = reactLoadableComponent;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  let a = i({
    loader: () => docxTaskSchedulerUtilities.scheduleTaskWithConfig({
      action: () => Promise.all([require.e("moment-locales-bundle") /*id: 85547*/, require.e("emotion-focus-utils") /*id: 21069*/, require.e("app-constants-and-enums") /*id: 86326*/, require.e("ui-framework-utilities") /*id: 57660*/, require.e("virtual-scrolling-reconciler") /*id: 85844*/, require.e("renderer-slate-core") /*id: 18653*/, require.e("doc-editor-utilities") /*id: 92677*/, require.e("docx-block-error-handling") /*id: 29302*/, require.e("docx-block-management") /*id: 83252*/, require.e("editor-bookmark-link-menu") /*id: 89647*/, require.e("react-icon-components") /*id: 29028*/, require.e("docx_toolbox") /*id: 15539*/]).then(require.bind(require, "docx-toolbox-offline-menu") /*id: 657270*/),
      name: "docx.toolbox"
    }),
    loading: () => null
  });
  exports.DocxToolbox = a;
}