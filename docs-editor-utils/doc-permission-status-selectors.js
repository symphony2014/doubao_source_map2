// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CW' to 'getDocPermissionStatus'
// - Renamed export 'SQ' to 'determineContentStatus'
// - Renamed export 'pp' to 'getPermissionStatusForNode'
// - Renamed export 'qF' to 'createPermissionSelector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 16982
         */
module.exports = function (module, exports, require) {
  var createSelector = require("create-selector") /*id: 228436*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var fileNodeSelectorUtils = require("file-node-selector-utils") /*id: 696977*/;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docActionManager = require("doc-action-manager") /*id: 445984*/;
  var statusCodes = require("status-codes") /*id: 497936*/;
  var stubTrueFunctions = require("stub-true-functions") /*id: 386838*/;
  var inlineComponentConstants = require("inline-component-constants") /*id: 427890*/;
  var flowPermissionSelectorFactory = require("flow-permission-selector-factory") /*id: 953431*/;
  function _(e) {
    let n = objectPathGetDefault.getObjectPathDefault(e, "userPermissions.readable");
    if (!stubTrueFunctions.alwaysTrueCheck()) {
      if (isUndefinedCheck.isUndefined(n)) {
        return inlineComponentConstants.contentStatus.READABLE;
      } else if (n) {
        return inlineComponentConstants.contentStatus.READABLE;
      } else {
        return inlineComponentConstants.contentStatus.UNREADABLE_ALLOW_APPLY;
      }
    }
    let r = objectPathGetDefault.getObjectPathDefault(e, "embedPermission.code");
    if (r === inlineComponentConstants.permissionStatus.ALLOW && n) {
      return inlineComponentConstants.contentStatus.READABLE;
    }
    switch (r) {
      case inlineComponentConstants.permissionStatus.ALLOW:
        return inlineComponentConstants.contentStatus.UNREADABLE_ALLOW_APPLY;
      case inlineComponentConstants.permissionStatus.NO_PERMISSION:
        return inlineComponentConstants.contentStatus.UNREADABLE_NOT_ALLOW_APPLY;
      case inlineComponentConstants.permissionStatus.NETWORK_ERROR:
        return inlineComponentConstants.contentStatus.NETWORK_ERROR;
      case inlineComponentConstants.permissionStatus.NOT_EXIST:
        return inlineComponentConstants.contentStatus.UNREADABLE_ALLOW_APPLY;
      default:
        return inlineComponentConstants.contentStatus.LOADING;
    }
  }
  function p(e, n, r) {
    let o = function (e, n, r) {
      let i = e.docx?.permissions;
      if (i == null) {
        return undefined;
      } else {
        return i.getIn([n, r]);
      }
    }(e, n, r);
    if (o == null) {
      return undefined;
    } else {
      return o.toJS();
    }
  }
  function g(e, n, r) {
    return _(p(e, n, r));
  }
  let E = e => e.entities.permissions;
  let m = e => createSelector.createSelector(E, fileNodeSelectorUtils.getNodeSelector, (n, r) => n.getIn([r, e]));
  let b = m("publicPermission");
  createSelector.createSelector(b, e => e && e.get("linkShareEntity"));
  createSelector.createSelector(flowPermissionSelectorFactory.createCopyableSelector(), platformDocUtils.bU1, (e, n) => {
    let {
      copyable: r
    } = e;
    let o = n[docActionManager.actionConstants.DOCCONTENTCOPY];
    return !!r && !!o;
  });
  createSelector.createSelector(flowPermissionSelectorFactory.createCopyableSelector(), platformDocUtils.bU1, (e, n) => {
    let {
      exportable: r
    } = e;
    let o = n[docActionManager.actionConstants.ATTACHMENTDOWNLOAD];
    return !!r && !!o;
  });
  let v = e => e.appState.error;
  let T = e => n => v(n).get(e, undefined);
  createSelector.createSelector(T("userPermissionOnSuite"), T("suitePublicPermission"), T("currentSuite"), function () {
    var e = arguments.length;
    var n = Array(e);
    var r = 0;
    for (; r < e; r++) {
      n[r] = arguments[r];
    }
    return n.some(e => e && e.get("code") === statusCodes.statusCodes.STATUS_CODE.FORBIDDEN);
  });
  require.d(exports, {
    getDocPermissionStatus: function () {
      return p;
    },
    determineContentStatus: function () {
      return _;
    },
    getPermissionStatusForNode: function () {
      return g;
    },
    createPermissionSelector: function () {
      return m;
    }
  });
}