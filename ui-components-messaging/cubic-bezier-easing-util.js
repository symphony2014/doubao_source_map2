// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'cubicEasingFn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 750010
         */
module.exports = function (module, exports, require) {
  var cubicBezierEasingFns = require("cubic-bezier-easing-fns") /*id: 348834*/;
  let l = e => (e *= 2) < 1 ? cubicBezierEasingFns.invertedEasingFn(e) * 0.5 : (2 - Math.pow(2, (e - 1) * -10)) * 0.5;
  require.d(exports, {
    cubicEasingFn: function () {
      return l;
    }
  });
}