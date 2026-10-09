// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ay' to 'HistoryEditor'
// - Renamed export 'zv' to 'imageViewLoader'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 350772
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  require("react-core-library-reexport") /*id: 634663*/;
  var reactLoadableComponent = require("react-loadable-component") /*id: 35867*/;
  var l = reactLoadableComponent;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var retryableModuleLoaderFactory = require("retryable-module-loader-factory") /*id: 99395*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let d = retryableModuleLoaderFactory.getRetryableModuleLoader({
    loader: () => docxTaskSchedulerUtilities.scheduleTaskWithConfig({
      action: () => require.e("image_viewer") /*id: 38626*/.then(require.bind(require, "docx-image-viewer-component") /*id: 750546*/),
      name: docxTaskSchedulerUtilities.delayToFirstScreenMarker
    }),
    loading: () => null
  }, {
    moduleName: "image_viewer"
  });
  let h = l({
    loader: () => docxTaskSchedulerUtilities.scheduleTaskWithConfig({
      action: () => Promise.all([require.e("docx-clientvar-fetch") /*id: 72566*/, require.e("docx-editor-react-component") /*id: 21824*/, require.e("document-version-history") /*id: 24105*/, require.e("history") /*id: 17374*/]).then(require.bind(require, "history-component") /*id: 607844*/),
      name: docxTaskSchedulerUtilities.delayToFirstScreenMarker
    }),
    loading: () => null,
    render: (e, i) => {
      let {
        History: n
      } = e;
      return reactJsxRuntimeCoreReexport.jsx(n, {
        ...i
      });
    }
  });
  l({
    loader: async () => {
      if (typeof platformDocUtils.pFB == "function") {
        await platformDocUtils.pFB();
      }
      return Promise.all([require.e("docx-clientvar-fetch") /*id: 72566*/, require.e("docx-editor-react-component") /*id: 21824*/, require.e("document-version-history") /*id: 24105*/, require.e("docx_subscription") /*id: 57755*/]).then(require.bind(require, "docx-subscription") /*id: 560737*/);
    },
    loading: () => null
  });
  require.d(exports, {
    HistoryEditor: function () {
      return h;
    },
    imageViewLoader: function () {
      return d;
    }
  });
}