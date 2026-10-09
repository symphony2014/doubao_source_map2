// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'performanceTimer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 602145
         */
module.exports = function (module, exports, require) {
  let n;
  var emptyObjectExport_2 = require("empty-object-export_2") /*id: 824789*/;
  var frameloopSchedulerUtils = require("frameloop-scheduler-utils") /*id: 232060*/;
  function o() {
    n = undefined;
  }
  let a = {
    now: () => {
      if (n === undefined) {
        a.set(frameloopSchedulerUtils.frameState.isProcessing || emptyObjectExport_2.emptyObject.useManualTiming ? frameloopSchedulerUtils.frameState.timestamp : performance.now());
      }
      return n;
    },
    set: t => {
      n = t;
      queueMicrotask(o);
    }
  };
  require.d(exports, {
    performanceTimer: function () {
      return a;
    }
  });
}