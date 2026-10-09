// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HF' to 'selectCurrentUser'
// - Renamed export 'vn' to 'selectCurrentUserId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 96617
         */
module.exports = function (module, exports, require) {
  var createSelector = require("create-selector") /*id: 228436*/;
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  let a = e => {
    if (e == null) {
      return undefined;
    } else {
      return e.appState?.currentUser;
    }
  };
  let u = createSelector.createSelector(a, e => e && e.get("tenant_tag") === "2");
  createSelector.createSelector(a, e => e && e.get("tenant_id"));
  createSelector.createSelector(a, e => e && e.get("tenant_name"));
  let c = createSelector.createSelector(a, e => e && e.get("id"));
  createSelector.createSelector(a, e => {
    let n = objectPathGetDefault.getObjectPathDefault(window, "User.domain");
    let r = e && e.get("domain");
    return n || r;
  });
  createSelector.createSelector(a, u, (e, n) => n || !!e && Number(e.get("tenant_id")) === 0);
  createSelector.createSelector(a, e => e && e.get("leader_id") !== 0);
  require.d(exports, {
    selectCurrentUser: function () {
      return a;
    },
    selectCurrentUserId: function () {
      return c;
    }
  });
}