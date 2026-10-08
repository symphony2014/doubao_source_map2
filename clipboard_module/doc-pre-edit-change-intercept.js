// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'id' to 'reportUserOperation'
// - Renamed export 's7' to 'reportRemoteChanges'
// - Renamed export 'xj' to 'interceptType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: clipboard_module.13c6ea48.js
         * chunkId: 40603
         * moduleId: 98436
         */
module.exports = function (module, exports, require) {
  var r;
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var diProviderCollectEvent = require("di-provider-collect-event") /*id: 308105*/;
  function s(e) {
    let n = Object.assign({}, e);
    let {
      interceptedRecord: i
    } = e;
    if (i) {
      n.block_id = i.id ? platformDocUtils.p5T(i.id) : "";
      n.block_type = i.snapshot.type;
    }
    delete n.interceptedRecord;
    return n;
  }
  function l(e, n) {
    let i = s(e);
    i.intercept_type = "user_operation";
    n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_pre_edit_change_intercept_dev", i);
  }
  (r = {}).HasCacheOp = "has_cache_op";
  r.EditControl = "edit_control";
  let c = r;
  function u(e, n) {
    let i = s(e);
    i.intercept_type = "remote_changes";
    n.editorAPI.getService(diProviderCollectEvent.collectEventName).collectEvent("ccm_doc_pre_edit_change_intercept_dev", i);
  }
  require.d(exports, {
    reportUserOperation: function () {
      return l;
    },
    reportRemoteChanges: function () {
      return u;
    },
    interceptType: function () {
      return c;
    }
  });
}