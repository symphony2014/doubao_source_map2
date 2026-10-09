// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'useGuidanceShow'
// - Renamed export 'i' to 'logGuidanceClick'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18848.031095ef.js
         * chunkId: 18848
         * moduleId: 492448
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let s = e => {
    let {
      loading: t,
      testId: i,
      reportParams: s
    } = e;
    let l = reactCoreLibraryReexport.useCallback(onceFunctionFactory.createOnce(() => {
      loggerServiceCore.defaultLogger.persist.success({
        eventName: "guidance_suggestions_show",
        meta: {
          success: 1,
          ...s
        }
      });
    }), []);
    reactCoreLibraryReexport.useLayoutEffect(() => {
      var e;
      var n;
      if (typeof window == "undefined") {
        return;
      }
      let r = (n = window) === null || n === undefined || (e = n.document) === null || e === undefined || !e.querySelector || window.document.querySelector(`[data-testid=${i}]`);
      if (!t && r) {
        l();
      }
    }, [t]);
  };
  let l = (e, t) => {
    loggerServiceCore.defaultLogger.persist.success({
      eventName: "guidance_page_click",
      meta: {
        type: e,
        ...t
      }
    });
  };
  require.d(exports, {
    useGuidanceShow: function () {
      return s;
    },
    logGuidanceClick: function () {
      return l;
    }
  });
}