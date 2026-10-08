// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'isClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 156635
         */
module.exports = function (module, exports, require) {
  function i(e) {
    return typeof e == "function" && (/^\s*class\s+/.test(e.toString()) || e.prototype.constructor === e);
  }
  require.d(exports, {
    isClass: function () {
      return i;
    }
  });
}