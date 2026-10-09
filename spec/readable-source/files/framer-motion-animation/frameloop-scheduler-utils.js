// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Pn' to 'cancelFrame'
// - Renamed export 'Wi' to 'scheduleFrame'
// - Renamed export 'w0' to 'frameState'
// - Renamed export 'yL' to 'frameSteps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 40135.b0349f7e.js
         * chunkId: 40135
         * moduleId: 232060
         */
module.exports = function (module, exports, require) {
  var identityFunction = require("identity-function") /*id: 482695*/;
  let {
    schedule: r,
    cancel: s,
    state: o,
    steps: a
  } = require("frameloop-step-scheduler") /*id: 57733*/.createFrameloopScheduler(typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : identityFunction.identity, true);
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