// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'useReportReasons'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 67342.cd008787.js
         * chunkId: 67342
         * moduleId: 500217
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var chatRuntimeSdkKeys = require("chat-runtime-sdk-keys") /*id: 165630*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let s = () => {
    let [e, n] = reactCoreLibraryReexport.useState([]);
    reactCoreLibraryReexport.useEffect(() => {
      if (typeof window != "object") {
        return;
      }
      let e = window[chatRuntimeSdkKeys.sdkPromiseKeys.GuestLayoutMode];
      if (e instanceof Promise) {
        if (e != null) {
          e.then(e => {
            n((objectPathGetDefault.getObjectPathDefault(e, "data.share_config.report_review_config.reasons") || []).map(e => {
              let {
                id: n,
                name: o
              } = e;
              return {
                text: o || "",
                value: n || 0
              };
            }));
          }).catch(e => {
            loggerServiceCore.defaultLogger.persist.warning({
              message: "[doc-share] failed to fetch report reasons",
              error: e
            });
          });
        }
      }
    }, []);
    return e;
  };
  require.d(exports, {
    useReportReasons: function () {
      return s;
    }
  });
}