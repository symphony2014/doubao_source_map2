// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'createDocumentNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 557996
         */
module.exports = function (module, exports, require) {
  var userEnvironmentUtils = require("user-environment-utils") /*id: 107339*/;
  function i(e = {}, n) {
    return {
      type: n,
      children: [],
      comments: [],
      revisions: [],
      author: userEnvironmentUtils.getUserInfo().userId,
      ...e
    };
  }
  require.d(exports, {
    createDocumentNode: function () {
      return i;
    }
  });
}