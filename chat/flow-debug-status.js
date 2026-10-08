// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'isDebugEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 553601
         */
module.exports = function (module, exports, require) {
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  let o = false;
  let a = false;
  let l = function (e = "FLOW_WEB_DEBUG_FG") {
    if (!o) {
      a = safeJsonUtils.safeParse(storageWrapperWithFallback.LocalStorageWrapper.getItem(e), {}).enableDebug === true;
      o = true;
    }
    return a;
  };
  require.d(exports, {
    isDebugEnabled: function () {
      return l;
    }
  });
}