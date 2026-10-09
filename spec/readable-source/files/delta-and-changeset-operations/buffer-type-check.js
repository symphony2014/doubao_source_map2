// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 315499
         */
module.exports = function (module, exports, require) {
  function t(e) {
    return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
  }
  module.exports = function (e) {
    var n;
    return e != null && (t(e) || typeof (n = e).readFloatLE == "function" && typeof n.slice == "function" && t(n.slice(0, 0)) || !!e._isBuffer);
  };
}