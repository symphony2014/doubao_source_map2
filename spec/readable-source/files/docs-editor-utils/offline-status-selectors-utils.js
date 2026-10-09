// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'VP' to 'isWindowOffline'
// - Renamed export 'S3' to 'isMobileOrOffline'
// - Renamed export 'XR' to 'accessToDocsEnabledDesc'
// - Renamed export 'ar' to 'isGlobalOffline'
// - Renamed export 's9' to 'isDocxOfflineDisabled'
// - Renamed export 'JQ' to 'selectDocxOfflineDisabled'
// - Renamed export '$0' to 'featureUnavailableOfflineToast'
// - Renamed export 'Ck' to 'offlineEditsSaveOnceReconnectedDesc'
// - Renamed export 'yi' to 'isOfflineAuthEnabled'
// - Renamed export 'g5' to 'isDocxOfflineEnabled'
// - Renamed export 'P4' to 'useSelectDocxOfflineDisabled'
// - Renamed export 'pE' to 'turnOffIncognitoToast'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 564613
         */
module.exports = function (module, exports, require) {
  var mobileOfflineStatusCheck = require("mobile-offline-status-check") /*id: 381620*/;
  var networkStateEventCollector = require("network-state-event-collector") /*id: 67722*/;
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  function c() {
    return !!window.__OFFLINE__;
  }
  var docxOfflineStatusUtils = require("docx-offline-status-utils") /*id: 205871*/;
  var flowPermissionSettingSelectors = require("flow-permission-setting-selectors") /*id: 631126*/;
  var createSelector = require("create-selector") /*id: 228436*/;
  let {
    selectNetworkState: d
  } = flowPermissionSettingSelectors.flowSelectorsHub?.network || {
    selectNetworkState: () => ({
      connected: true
    })
  };
  let f = createSelector.createSelector(d, e => docxOfflineStatusUtils.isDocxOfflineEnabled() && !e.connected);
  let h = () => docxOfflineStatusUtils.isDocxOfflineEnabled() && !networkStateEventCollector.collectNetworkState();
  function _() {
    return reactReduxCore.useSelector(f);
  }
  let p = t("LarkCCM_Docs_OfflineUse_OfflineEditsSaveOnceReconnected_Desc");
  let g = t("LarkCCM_Docs_EditOfflineTurnOffIncognito_Toast");
  let E = t("LarkCCM_Docs_OfflineUse_AccessToDocsEnabled_Desc");
  let m = t("LarkCCM_Docs_OfflineUse_FeatureUnavailableOffline_Toast");
  require.d(exports, {
    isWindowOffline: function () {
      return c;
    },
    isMobileOrOffline: function () {
      return mobileOfflineStatusCheck.isMobileOrOffline;
    },
    accessToDocsEnabledDesc: function () {
      return E;
    },
    isGlobalOffline: function () {
      return docxOfflineStatusUtils.isGlobalOffline;
    },
    isDocxOfflineDisabled: function () {
      return h;
    },
    selectDocxOfflineDisabled: function () {
      return f;
    },
    featureUnavailableOfflineToast: function () {
      return m;
    },
    offlineEditsSaveOnceReconnectedDesc: function () {
      return p;
    },
    isOfflineAuthEnabled: function () {
      return docxOfflineStatusUtils.isOfflineAuthEnabled;
    },
    isDocxOfflineEnabled: function () {
      return docxOfflineStatusUtils.isDocxOfflineEnabled;
    },
    useSelectDocxOfflineDisabled: function () {
      return _;
    },
    turnOffIncognitoToast: function () {
      return g;
    }
  });
}