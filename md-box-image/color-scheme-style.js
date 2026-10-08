// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'resolveColorScheme'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 491552
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    if (this.vars && typeof this.getColorSchemeSelector == "function") {
      return {
        [this.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
      };
    } else if (this.palette.mode === e) {
      return t;
    } else {
      return {};
    }
  }
  require.d(exports, {
    resolveColorScheme: function () {
      return r;
    }
  });
}