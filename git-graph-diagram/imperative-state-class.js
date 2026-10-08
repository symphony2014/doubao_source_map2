// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'A' to 'ImperativeState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 16050.dc89ca70.js
         * chunkId: 16050
         * moduleId: 97984
         */
module.exports = function (module, exports, require) {
  var o;
  var loggerLevelUtils = require("logger-level-utils") /*id: 696754*/;
  o = class {
    reset() {
      this.records = this.init();
    }
    constructor(t) {
      this.init = t;
      this.records = this.init();
    }
  };
  loggerLevelUtils.setFunctionName(o, "ImperativeState");
  var a = o;
  require.d(exports, {
    ImperativeState: function () {
      return a;
    }
  });
}