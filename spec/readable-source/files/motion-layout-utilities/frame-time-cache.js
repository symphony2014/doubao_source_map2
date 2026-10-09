// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'frameTimeCache'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 33311
         */
module.exports = function (module, exports, require) {
  let n;
  var emptyObjectExport_2 = require("empty-object-export_2") /*id: 824789*/;
  var frameloopSchedulerUtils_1 = require("frameloop-scheduler-utils_1") /*id: 668554*/;
  function o() {
    n = undefined;
  }
  let a = {
    now: () => {
      if (n === undefined) {
        a.set(frameloopSchedulerUtils_1.frameState.isProcessing || emptyObjectExport_2.emptyObject.useManualTiming ? frameloopSchedulerUtils_1.frameState.timestamp : performance.now());
      }
      return n;
    },
    set: t => {
      n = t;
      queueMicrotask(o);
    }
  };
  require.d(exports, {
    frameTimeCache: function () {
      return a;
    }
  });
}