// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'ConfigError'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 394787
         */
module.exports = function (module, exports, require) {
  class n extends Error {
    get id() {
      return this.config.id;
    }
    get rawError() {
      return this.config.rawError;
    }
    get extra() {
      return this.config.extra;
    }
    constructor(e) {
      super(e.message);
      this.config = e;
    }
  }
  require.d(exports, {
    ConfigError: function () {
      return n;
    }
  });
}