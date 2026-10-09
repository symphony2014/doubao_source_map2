// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'jK' to 'viewModeConstants'
// - Renamed export 'XH' to 'useViewModeDetector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 44270
         */
module.exports = function (module, exports, require) {
  var n;
  var flowPermissionSettingSelectors = require("flow-permission-setting-selectors") /*id: 631126*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  require("doc-token-helper-utils") /*id: 740758*/;
  var docxHistoryFlags = require("docx-history-flags") /*id: 840802*/;
  var docxViewStateUtil = require("docx-view-state-util") /*id: 596609*/;
  require("bool-default-getter-util") /*id: 855627*/;
  var viewStateTypeConstants = require("view-state-type-constants") /*id: 739915*/;
  require("user-environment-utils") /*id: 107339*/;
  new URLSearchParams(location.search).get("blockitdebug");
  if (browserEnvironmentDetectionUtils.browserDetector.isMobile && browserEnvironmentDetectionUtils.browserDetector.isBytedanceApp) {
    objectPathGetDefault.getObjectPathDefault(window, "User.appConfig.ccm_docverse_settings");
  } else {
    objectPathGetDefault.getObjectPathDefault(window, "User.settingsConfig.ccm_docverse_settings");
  }
  (n = {}).MAIN = "main";
  n.HISTORY = "history";
  n.PRESENTATION = "presentation";
  n.TRANSLATE = "translate";
  n.UNKNOWN = "unknown";
  let f = n;
  function g() {
    let e = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.translate.selectTranslateStatus);
    let i = reactReduxCore.useSelector(docxViewStateUtil.getViewType);
    let r = reactReduxCore.useSelector(docxHistoryFlags.getHistoryShow);
    let [n, l] = reactCoreLibraryReexport.useState(f.UNKNOWN);
    let c = reactCoreLibraryReexport.useRef(f.UNKNOWN);
    reactCoreLibraryReexport.useEffect(() => {
      c.current = n;
    }, [n]);
    reactCoreLibraryReexport.useEffect(() => {
      if (i === viewStateTypeConstants.viewTypes.DOCUMENT || i === viewStateTypeConstants.viewTypes.PAGINATION) {
        l(f.PRESENTATION);
        return;
      }
      if (r) {
        l(f.HISTORY);
        return;
      }
      if (e.translated) {
        l(f.TRANSLATE);
        return;
      }
      l(f.MAIN);
    }, [i, r, e]);
    return {
      prev: c.current,
      current: n
    };
  }
  require.d(exports, {
    viewModeConstants: function () {
      return f;
    },
    useViewModeDetector: function () {
      return g;
    }
  });
}