// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'flowSettingSel'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 533517
         */
module.exports = function (module, exports, require) {
  var createSelector = require("create-selector") /*id: 228436*/;
  let o = e => {
    return (e == null ? undefined : e.appState?.flowSetting) ?? {};
  };
  let a = createSelector.createSelector(o, e => e == null ? undefined : e.readonly);
  let u = createSelector.createSelector(o, e => (e == null ? undefined : e.commentReadonly) || (e == null ? undefined : e.readonly));
  let c = createSelector.createSelector(o, e => e == null ? undefined : e.historyReadonly);
  let _ = {
    selectIsReadonly: a,
    selectIsCommentReadonly: u,
    selectIsHistoryReadonly: c,
    selectEnableComment: createSelector.createSelector(o, e => e == null ? undefined : e.enableComment),
    selectEnableDocInline: createSelector.createSelector(o, e => e == null ? undefined : e.enableDocInline)
  };
  require.d(exports, {
    flowSettingSel: function () {
      return _;
    }
  });
}