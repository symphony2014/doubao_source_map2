// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'r' to 'createCommandGuard'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_shortcutCommandAsync.83c475d1.js
         * chunkId: 33237
         * moduleId: 11044
         */
module.exports = function (module, exports, require) {
  function n({
    supportReadOnly: e = false
  } = {}) {
    return i => l => {
      if (l.blockManager.config.get("editable") || e) {
        return i(l);
      }
    };
  }
  require.d(exports, {
    createCommandGuard: function () {
      return n;
    }
  });
}