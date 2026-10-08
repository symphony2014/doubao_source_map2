// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Xm' to 'useEnableComment'
// - Renamed export 'GL' to 'useEnableDocInline'
// - Renamed export 'Ys' to 'useSyncReadonly'
// - Renamed export 'HK' to 'syncDocToken'
// - Renamed export 'OW' to 'useCommentReadonly'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 421458
         */
module.exports = function (module, exports, require) {
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualUtil_1 = require("deep-equal-util_1") /*id: 702050*/;
  var flowPermissionSettingSelectors = require("flow-permission-setting-selectors") /*id: 631126*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  var actionTypeConstants = require("action-type-constants") /*id: 199942*/;
  function l(e) {
    let n = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowSetting.selectIsReadonly);
    reactCoreLibraryReexport.useEffect(() => {
      if (!deepEqualUtil_1.deepEqual(e, n)) {
        reduxStoreInitializer.reduxStore.dispatch({
          type: actionTypeConstants.ActionTypes.flowSetting.UPDATE_FLOW_SETTING,
          payload: {
            readonly: e
          }
        });
      }
    }, [e]);
  }
  function s(e) {
    let n = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowSetting.selectIsCommentReadonly);
    reactCoreLibraryReexport.useEffect(() => {
      if (!deepEqualUtil_1.deepEqual(e, n)) {
        reduxStoreInitializer.reduxStore.dispatch({
          type: actionTypeConstants.ActionTypes.flowSetting.UPDATE_FLOW_SETTING,
          payload: {
            commentReadonly: e
          }
        });
      }
    }, [e]);
  }
  function E(e) {
    let n = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowSetting.selectEnableComment);
    reactCoreLibraryReexport.useEffect(() => {
      if (!deepEqualUtil_1.deepEqual(e, n)) {
        reduxStoreInitializer.reduxStore.dispatch({
          type: actionTypeConstants.ActionTypes.flowSetting.UPDATE_FLOW_SETTING,
          payload: {
            enableComment: e
          }
        });
      }
    }, [e]);
  }
  function d(e) {
    let n = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowSetting.selectEnableDocInline);
    reactCoreLibraryReexport.useEffect(() => {
      if (!deepEqualUtil_1.deepEqual(e, n)) {
        reduxStoreInitializer.reduxStore.dispatch({
          type: actionTypeConstants.ActionTypes.flowSetting.UPDATE_FLOW_SETTING,
          payload: {
            enableDocInline: e
          }
        });
      }
    }, [e]);
  }
  var syncDocTokenState = require("sync-doc-token-state") /*id: 307493*/;
  require.d(exports, {
    useEnableComment: function () {
      return E;
    },
    useEnableDocInline: function () {
      return d;
    },
    useSyncReadonly: function () {
      return l;
    },
    syncDocToken: function () {
      return syncDocTokenState.syncDocToken;
    },
    useCommentReadonly: function () {
      return s;
    }
  });
}