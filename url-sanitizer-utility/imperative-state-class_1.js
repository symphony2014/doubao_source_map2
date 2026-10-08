// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'ImperativeState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 51757.6c6dcfd0.js
         * chunkId: 51757
         * moduleId: 749588
         */
module.exports = function (module, exports, require) {
  var r;
  var mermaidConfigUtils = require("mermaid-config-utils") /*id: 101498*/;
  r = class {
    reset() {
      this.records = this.init();
    }
    constructor(t) {
      this.init = t;
      this.records = this.init();
    }
  };
  mermaidConfigUtils.setName(r, "ImperativeState");
  var s = r;
  require.d(exports, {
    ImperativeState: function () {
      return s;
    }
  });
}