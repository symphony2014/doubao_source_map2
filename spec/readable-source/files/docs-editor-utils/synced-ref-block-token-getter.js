// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'j' to 'getSyncedRefBlockToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 766560
         */
module.exports = function (module, exports, require) {
  var syncedRefBlockToken = require("synced-ref-block-token") /*id: 893973*/;
  function i(e) {
    var n;
    var r;
    if ((n = (r = e.editorAPI.getService(syncedRefBlockToken.syncedRefBlockToken, {
      dynamic: true
    })).get) === null || n === undefined) {
      return undefined;
    } else {
      return n.call(r);
    }
  }
  require.d(exports, {
    getSyncedRefBlockToken: function () {
      return i;
    }
  });
}