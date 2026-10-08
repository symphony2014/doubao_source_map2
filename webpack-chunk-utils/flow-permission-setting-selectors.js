// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'flowSelectorsHub'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 631126
         */
module.exports = function (module, exports, require) {
  var flowSettingSelectors = require("flow-setting-selectors") /*id: 533517*/;
  var flowPermissionSelectors = require("flow-permission-selectors") /*id: 323771*/;
  let a = {
    flowPermission: flowPermissionSelectors.permissionSelectors,
    flowSetting: flowSettingSelectors.flowSettingSel,
    share: {
      selectCanEditInvolvingEditMode: flowPermissionSelectors.selectEditable,
      selectCurrentSuiteOtherPermissions: flowPermissionSelectors.selectCopyable,
      ifhaveCommentPermission: flowPermissionSelectors.selectCommentable,
      selectIsAllowPreview: flowPermissionSelectors.selectIsViewable,
      selectOpenFrom: () => ""
    },
    translate: {
      selectTranslateStatus: () => false,
      selectTranslateConfig: () => ({})
    },
    openDoc: {
      getFeatureConfigSelector: () => () => null
    },
    docComponent: {
      getDocComponentFeatureConfigSelector: () => () => null
    },
    network: {
      selectNetworkState: e => e.appState.networkState
    }
  };
  require.d(exports, {
    flowSelectorsHub: function () {
      return a;
    }
  });
}