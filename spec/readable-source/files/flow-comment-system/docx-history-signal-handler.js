// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'DocxHistoryHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 257190
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var retryableModuleLoaderFactory = require("retryable-module-loader-factory") /*id: 99395*/;
  var docxTaskSchedulerUtilities = require("docx-task-scheduler-utilities") /*id: 572734*/;
  var bearWebSignalService = require("bear-web-signal-service") /*id: 32433*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = retryableModuleLoaderFactory.getRetryableModuleLoader({
    loader: () => docxTaskSchedulerUtilities.scheduleTaskWithConfig({
      action: () => Promise.all([require.e("docx-clientvar-fetch") /*id: 72566*/, require.e("docx-editor-react-component") /*id: 21824*/, require.e("document-version-history") /*id: 24105*/, require.e("history") /*id: 17374*/]).then(require.bind(require, "docx-history-timeline-component") /*id: 570214*/),
      name: docxTaskSchedulerUtilities.delayToFirstScreenMarker
    }),
    loading: () => null
  }, {
    moduleName: "history",
    hasOfflineRetry: true
  });
  let d = e => {
    let {
      blockManager: i
    } = e;
    let n = i == null ? undefined : i.editorAPI.getService(bearWebSignalService.bearSignalService, {
      optional: true
    });
    let r = reactCoreLibraryReexport.useRef(false);
    let [l, d] = reactCoreLibraryReexport.useState();
    reactCoreLibraryReexport.useEffect(() => {
      if (!n) {
        return;
      }
      let e = n.historyToggleSignal.subscribe(e => {
        let [i, n = ""] = e;
        if (!r.current) {
          r.current = true;
          d({
            event: i,
            from: n
          });
        }
      });
      return () => {
        e.unsubscribe();
      };
    }, [n]);
    if (!r.current) {
      return null;
    }
    let h = c.getModuleInstance();
    return reactJsxRuntimeCoreReexport.jsx(h, {
      ...e,
      openProps: l
    });
  };
  require.d(exports, {
    DocxHistoryHandler: function () {
      return d;
    }
  });
}