// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Pn' to 'cancelFrame'
// - Renamed export 'Wi' to 'scheduleFrame'
// - Renamed export 'w0' to 'frameState'
// - Renamed export 'yL' to 'frameSteps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 668554
         */
module.exports = function (module, exports, require) {
  var identityFunction = require("identity-function") /*id: 482695*/;
  let {
    schedule: r,
    cancel: s,
    state: o,
    steps: a
  } = require("animation-frameloop-scheduler") /*id: 579177*/.createFrameloopScheduler(typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : identityFunction.identity, true);
  require.d(exports, {
    cancelFrame: function () {
      return s;
    },
    scheduleFrame: function () {
      return r;
    },
    frameState: function () {
      return o;
    },
    frameSteps: function () {
      return a;
    }
  });
}