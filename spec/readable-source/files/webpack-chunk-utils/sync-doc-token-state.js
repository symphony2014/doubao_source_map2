// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HK' to 'syncDocToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 17934.e5bb6eb1.js
         * chunkId: 17934
         * moduleId: 307493
         */
module.exports = function (module, exports, require) {
  var docTokenManager = require("doc-token-manager") /*id: 632370*/;
  var useReducerDispatch = require("use-reducer-dispatch") /*id: 289070*/;
  function a(e) {
    let n = useReducerDispatch.useReducerDispatch();
    let r = e && (docTokenManager.getDocToken() === e ? {
      changed: false
    } : (docTokenManager.setDocToken(e), {
      changed: true
    }));
    if (r && r.changed) {
      n();
    }
  }
  require.d(exports, {
    syncDocToken: function () {
      return a;
    }
  });
}