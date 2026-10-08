// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'o6' to 'useCollaborators'
// - Renamed export 'M1' to 'useClientError'
// - Renamed export 'h' to 'reduxStore'
// - Renamed export 'ED' to 'useRoleStatus'
// - Renamed export 'EE' to 'usePermissions'
// - Renamed export '$Q' to 'useSettings'
// - Renamed export 'LP' to 'getDocToken'
// - Renamed export 'xv' to 'businessConstants'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 49875.5700422c.js
         * chunkId: 49875
         * moduleId: 930373
         */
module.exports = function (module, exports, require) {
  var reactReduxCore = require("react-redux-core") /*id: 509563*/;
  var usePreviousHook = require("use-previous-hook") /*id: 903727*/;
  var flowPermissionSettingSelectors = require("flow-permission-setting-selectors") /*id: 631126*/;
  let a = () => {
    let e = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectCurrentRole);
    let i = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsViewer);
    let n = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsNoneRole);
    let a = usePreviousHook.usePrevious(e);
    return {
      role: e,
      preRole: a,
      isNoneRole: n,
      isEditableRole: !i && !n
    };
  };
  let s = () => {
    let e = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowSetting.selectIsReadonly);
    let i = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowSetting.selectIsCommentReadonly);
    let n = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowSetting.selectIsHistoryReadonly);
    return {
      readonly: e,
      commentReadonly: i,
      historyReadonly: n,
      enableComment: reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowSetting.selectEnableComment),
      enableDocInline: reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowSetting.selectEnableDocInline)
    };
  };
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var fileMemberSelectors = require("file-member-selectors") /*id: 978288*/;
  var userCollabUtils = require("user-collab-utils") /*id: 132196*/;
  let u = () => {
    let e = reactReduxCore.useSelector(fileMemberSelectors.selectOtherMembers);
    return reactCoreLibraryReexport.useMemo(() => userCollabUtils.filterCollabUsers(userCollabUtils.uniqUsersById(e)), [e]);
  };
  let m = () => {
    let e = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectHasInitPermission);
    let i = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsEditable);
    let n = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsViewable);
    let r = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsCommentable);
    let a = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsOtherCommentDeleteable);
    let s = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsViewRecordable);
    let c = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsExportable);
    let d = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsCopyable);
    let h = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsDuplicateable);
    let u = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsManageable);
    let m = reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsDeletable);
    return {
      hasInit: e,
      isEditable: i,
      isViewable: n,
      isCommentable: r,
      isOtherCommentDeletable: a,
      isViewRecordable: s,
      isExportable: c,
      isCopyable: d,
      isDuplicateable: h,
      isManageable: u,
      isDeletable: m,
      isReportable: reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsReportable),
      isOwner: reactReduxCore.useSelector(flowPermissionSettingSelectors.flowSelectorsHub.flowPermission.selectIsOwner)
    };
  };
  var fileNodeSelectorUtils = require("file-node-selector-utils") /*id: 696977*/;
  let f = e => {
    let {
      token: i
    } = e;
    return {
      error: reactReduxCore.useSelector(e => fileNodeSelectorUtils.getSuiteClientError(e, i))
    };
  };
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var businessStageConstants = require("business-stage-constants") /*id: 187074*/;
  var reduxStoreInitializer = require("redux-store-initializer") /*id: 75100*/;
  require.d(exports, {
    useCollaborators: function () {
      return u;
    },
    useClientError: function () {
      return f;
    },
    reduxStore: function () {
      return reduxStoreInitializer.reduxStore;
    },
    useRoleStatus: function () {
      return a;
    },
    usePermissions: function () {
      return m;
    },
    useSettings: function () {
      return s;
    },
    getDocToken: function () {
      return docTokenManager.getDocToken;
    },
    businessConstants: function () {
      return businessStageConstants.businessConstants;
    }
  });
}