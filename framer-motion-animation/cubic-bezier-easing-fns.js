// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CG' to 'customBezierEasing'
// - Renamed export 'G2' to 'invertedEasingFn'
// - Renamed export 'XL' to 'easeInOutWrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 348834
         */
module.exports = function (module, exports, require) {
  var cubicBezierEasing_1 = require("cubic-bezier-easing_1") /*id: 4151*/;
  var easingFunctionWrapper = require("easing-function-wrapper") /*id: 565409*/;
  var mathFunctionInvert = require("math-function-invert") /*id: 235402*/;
  let o = cubicBezierEasing_1.cubicBezierEasing(0.33, 1.53, 0.69, 0.99);
  let a = mathFunctionInvert.invertFunction(o);
  let s = easingFunctionWrapper.createEaseInOut(a);
  require.d(exports, {
    customBezierEasing: function () {
      return o;
    },
    invertedEasingFn: function () {
      return a;
    },
    easeInOutWrapper: function () {
      return s;
    }
  });
}