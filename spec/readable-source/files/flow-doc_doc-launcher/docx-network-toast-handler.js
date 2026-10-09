// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'toggleNetworkToast'
// - Renamed export 'k' to 'useNetworkConnectionMonitor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 993997
         */
module.exports = function (module, exports, require) {
  var toastNotificationManager_1 = require("toast-notification-manager_1") /*id: 737977*/;
  var flowPermissionSettingSelectors = require("flow-permission-setting-selectors") /*id: 631126*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var docxConfigManager = require("docx-config-manager") /*id: 981333*/;
  var docxErrorToastHandler = require("docx-error-toast-handler") /*id: 230438*/;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  var offlineStatusSelectorsUtils = require("offline-status-selectors-utils") /*id: 564613*/;
  var docSyncConfigFlags = require("doc-sync-config-flags") /*id: 934075*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  let p = "DOCX_NETWORK_TOAST_KEY";
  let f = e => {
    var n;
    var o;
    if (browserEnvironmentDetectionUtils.browserDetector.isMobile || docxConfigManager.docxConfigManager.isEmbedDocx || browserEnvironmentDetectionUtils.browserDetector.isFeishuRooms) {
      return;
    }
    let l = docSyncConfigFlags.networkAlertEnabled ? t("LarkCCM_Docs_Header_Offline_SavedLocalCache_Toast") : t("common.disconnected_tips");
    l = ((o = reduxStoreInitializer.reduxStore.getState()) === null || o === undefined ? undefined : (n = o.docx) === null || n === undefined ? undefined : n.editable?.editing) ? browserEnvironmentDetectionUtils.browserDetector.isLark || browserEnvironmentDetectionUtils.browserDetector.isMobile ? offlineStatusSelectorsUtils.offlineEditsSaveOnceReconnectedDesc : offlineStatusSelectorsUtils.turnOffIncognitoToast : offlineStatusSelectorsUtils.accessToDocsEnabledDesc;
    if (e) {
      toastNotificationManager_1.toastManager.remove(p);
    } else {
      docxErrorToastHandler.handleDocxToast({
        key: p,
        content: l,
        duration: !!offlineStatusSelectorsUtils.isDocxOfflineEnabled() * 8000,
        closable: true,
        style: {
          maxWidth: 800
        }
      });
    }
  };
  let v = () => {
    let {
      connected: e
    } = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.network.selectNetworkState);
    let i = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      if (!i.current) {
        i.current = true;
        return;
      }
      f(e);
    }, [e]);
    return e;
  };
  require.d(exports, {
    toggleNetworkToast: function () {
      return f;
    },
    useNetworkConnectionMonitor: function () {
      return v;
    }
  });
}