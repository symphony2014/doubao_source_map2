// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ay' to 'selectPermFlags'
// - Renamed export 'FX' to 'selectCommentable'
// - Renamed export 'HH' to 'selectActionFlags'
// - Renamed export 'HQ' to 'selectEditable'
// - Renamed export 'I0' to 'selectIsViewable'
// - Renamed export 'MA' to 'selectCopyable'
// - Renamed export 'QB' to 'permissionSelectors'
// - Renamed export 'Wx' to 'createCopyableSel'
// - Renamed export 'c8' to 'createEditableSel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 323771
         */
module.exports = function (module, exports, require) {
  var createSelector = require("create-selector") /*id: 228436*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var collectionIncludesUtil = require("collection-includes-util") /*id: 517430*/;
  var permissionRoleTypes = require("permission-role-types") /*id: 992343*/;
  var accessPermissionEnum = require("access-permission-enum") /*id: 968819*/;
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var flowSettingSelectors = require("flow-setting-selectors") /*id: 533517*/;
  let s = e => {
    return (e == null ? undefined : e.appState?.flowPermission) ?? {};
  };
  let E = createSelector.createSelector(e => {
    return (e == null ? undefined : e.docx?.docMeta) ?? {};
  }, e => {
    let {
      docMetaMap: n
    } = e ?? {};
    let r = docTokenManager.getDocToken();
    return objectPathGetDefault.getObjectPathDefault(n, `${r}.content_security.disposal_strategy`) === accessPermissionEnum.AccessPermission.OnlyOwnerCanRead;
  });
  let d = createSelector.createSelector(s, e => !!(e == null ? undefined : e.hasInit));
  let T = createSelector.createSelector(s, e => (e == null ? undefined : e.role) === permissionRoleTypes.UserRoles.Editor);
  let p = createSelector.createSelector(s, e => (e == null ? undefined : e.role) === permissionRoleTypes.UserRoles.Owner);
  let S = createSelector.createSelector(s, e => (e == null ? undefined : e.role) === permissionRoleTypes.UserRoles.Manager);
  let f = createSelector.createSelector(s, e => (e == null ? undefined : e.role) === permissionRoleTypes.UserRoles.Viewer);
  let A = createSelector.createSelector(s, e => (e == null ? undefined : e.role) === permissionRoleTypes.UserRoles.Reviewer);
  let m = createSelector.createSelector(s, e => (e == null ? undefined : e.role) === permissionRoleTypes.UserRoles.None);
  let I = createSelector.createSelector(s, e => e == null ? undefined : e.role);
  let O = createSelector.createSelector(s, e => {
    let {
      actionList: n
    } = e ?? {};
    return collectionIncludesUtil.includes(n, permissionRoleTypes.PermissionTypes.View);
  });
  let R = createSelector.createSelector(flowSettingSelectors.flowSettingSel.selectIsReadonly, s, E, (e, n, r) => {
    let {
      actionList: i
    } = n ?? {};
    return !e && !r && collectionIncludesUtil.includes(i, permissionRoleTypes.PermissionTypes.Edit);
  });
  let h = createSelector.createSelector(s, e => {
    let {
      actionList: n
    } = e ?? {};
    return collectionIncludesUtil.includes(n, permissionRoleTypes.PermissionTypes.View);
  });
  let N = createSelector.createSelector(flowSettingSelectors.flowSettingSel.selectIsReadonly, flowSettingSelectors.flowSettingSel.selectIsCommentReadonly, s, (e, n, r) => {
    let {
      actionList: i
    } = r ?? {};
    return collectionIncludesUtil.includes(i, permissionRoleTypes.PermissionTypes.Comment) && !n && !e;
  });
  let C = createSelector.createSelector(s, e => (e == null ? undefined : e.role) === permissionRoleTypes.UserRoles.Owner || (e == null ? undefined : e.role) === permissionRoleTypes.UserRoles.Manager);
  let D = createSelector.createSelector(s, e => {
    let {
      actionList: n
    } = e ?? {};
    return collectionIncludesUtil.includes(n, permissionRoleTypes.PermissionTypes.ViewHistory);
  });
  let L = createSelector.createSelector(s, e => {
    let {
      actionList: n
    } = e ?? {};
    return collectionIncludesUtil.includes(n, permissionRoleTypes.PermissionTypes.Export);
  });
  let b = createSelector.createSelector(s, e => {
    let {
      actionList: n
    } = e ?? {};
    return collectionIncludesUtil.includes(n, permissionRoleTypes.PermissionTypes.Delete);
  });
  let g = createSelector.createSelector(s, e => (e == null ? undefined : e.role) !== permissionRoleTypes.UserRoles.Owner);
  let P = createSelector.createSelector(s, () => true);
  let M = createSelector.createSelector(s, e => {
    let {
      actionList: n
    } = e ?? {};
    return collectionIncludesUtil.includes(n, permissionRoleTypes.PermissionTypes.Copy);
  });
  let v = createSelector.createSelector(s, e => {
    let {
      actionList: n
    } = e ?? {};
    return collectionIncludesUtil.includes(n, permissionRoleTypes.PermissionTypes.Manage);
  });
  let y = createSelector.createSelector(P, L, (e, n) => ({
    docContentCopy: e,
    docCreateCopy: e,
    docExport: n,
    docPrint: n,
    docDownload: n,
    fileContentCopy: e,
    fileCreateCopy: e,
    fileExport: n,
    filePrint: n,
    fileDownload: n,
    contentCopy: e,
    createCopy: e,
    export: n,
    print: n,
    download: n
  }));
  let w = createSelector.createSelector(P, L, O, (e, n, r) => ({
    print: +!!n,
    export: +!!n,
    copy: +!!e,
    printable: n,
    exportable: n,
    copyable: e,
    previewable: r
  }));
  let U = createSelector.createSelector(P, e => ({
    copyable: e
  }));
  let k = createSelector.createSelector(N, e => e);
  let B = () => createSelector.createSelector(R, e => e);
  let H = () => createSelector.createSelector(P, e => ({
    copyable: e
  }));
  let F = B();
  let G = {
    selectHasInitPermission: d,
    selectCurrentRole: I,
    selectIsNoneRole: m,
    selectIsViewer: f,
    selectIsEditor: T,
    selectIsOwner: p,
    selectIsManager: S,
    selectIsReviewer: A,
    selectIsEditable: R,
    selectIsViewable: h,
    selectIsCommentable: N,
    selectIsOtherCommentDeleteable: C,
    selectIsViewRecordable: D,
    selectIsExportable: L,
    selectIsCopyable: P,
    selectIsDuplicateable: M,
    selectIsManageable: v,
    selectIsDeletable: b,
    selectIsReportable: g
  };
  require.d(exports, {
    selectPermFlags: function () {
      return y;
    },
    selectCommentable: function () {
      return k;
    },
    selectActionFlags: function () {
      return w;
    },
    selectEditable: function () {
      return F;
    },
    selectIsViewable: function () {
      return O;
    },
    selectCopyable: function () {
      return U;
    },
    permissionSelectors: function () {
      return G;
    },
    createCopyableSel: function () {
      return H;
    },
    createEditableSel: function () {
      return B;
    }
  });
}