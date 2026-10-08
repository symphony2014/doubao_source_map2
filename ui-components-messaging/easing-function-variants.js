// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Bn' to 'inverseEasingFunc'
// - Renamed export 'X7' to 'easeInOutVariant'
// - Renamed export 'Z7' to 'trigEasingFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 401.be1fef9b.js
         * chunkId: 401
         * moduleId: 74618
         */
module.exports = function (module, exports, require) {
  var easingFunctionWrapper = require("easing-function-wrapper") /*id: 565409*/;
  var mathFunctionInvert = require("math-function-invert") /*id: 235402*/;
  let r = e => 1 - Math.sin(Math.acos(e));
  let o = mathFunctionInvert.invertFunction(r);
  let a = easingFunctionWrapper.createEaseInOut(r);
  require.d(exports, {
    inverseEasingFunc: function () {
      return o;
    },
    easeInOutVariant: function () {
      return a;
    },
    trigEasingFunction: function () {
      return r;
    }
  });
}