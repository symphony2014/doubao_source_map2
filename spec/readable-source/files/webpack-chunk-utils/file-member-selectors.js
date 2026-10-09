// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ad' to 'selectMembers'
// - Renamed export 'ih' to 'selectOtherMembers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 978288
         */
module.exports = function (module, exports, require) {
  var createSelector = require("create-selector") /*id: 228436*/;
  var fileNodeSelectorUtils = require("file-node-selector-utils") /*id: 696977*/;
  var currentUserSelectors = require("current-user-selectors") /*id: 96617*/;
  var colonJoinUtil = require("colon-join-util") /*id: 169655*/;
  let c = [];
  let _ = e => {
    if (e == null) {
      return undefined;
    } else {
      return e.appState?.members;
    }
  };
  let l = createSelector.createSelector(_, fileNodeSelectorUtils.getNodeSelector, fileNodeSelectorUtils.getDefaultDocType, (e, n, r) => {
    if (r === null) {
      return c;
    }
    let i = colonJoinUtil.createColonKey(r, n);
    return (e == null ? undefined : e[i]) || c;
  });
  createSelector.createSelector(e => e.appState.currentMemberId, l, (e, n) => n.find(n => n.member_id === e));
  let s = createSelector.createSelector(_, fileNodeSelectorUtils.getNodeSelector, fileNodeSelectorUtils.getDefaultDocType, currentUserSelectors.selectCurrentUser, (e, n, r, i) => {
    if (r === null) {
      return c;
    }
    let _ = colonJoinUtil.createColonKey(r, n);
    let l = (i == null ? undefined : i.toJS()?.id) || window.User?.id || "";
    let s = ((e == null ? undefined : e[_]) || c).filter(e => e.user_id !== l && !e.has_no_user_info);
    if (s.length === 0) {
      return c;
    } else {
      return s;
    }
  });
  require.d(exports, {
    selectMembers: function () {
      return _;
    },
    selectOtherMembers: function () {
      return s;
    }
  });
}