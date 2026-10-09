// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'fadeTransition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 593415
         */
module.exports = function (module, exports, require) {
  var emotionTransitionFactory = require("emotion-transition-factory") /*id: 592980*/;
  var cubicBezierEasingConstant = require("cubic-bezier-easing-constant") /*id: 598912*/;
  var l = emotionTransitionFactory.styledTransition({
    name: "fade",
    styles: {
      appear: "opacity: 0;",
      enter: "opacity: 0;",
      exitDone: "opacity: 0;",
      appearActive: "opacity: 1;",
      enterActive: "opacity: 1;",
      appearDone: "opacity: 1;",
      enterDone: "opacity: 1;",
      exit: "opacity: 1;",
      exitActive: "opacity: 0;"
    },
    transitions: {
      appearActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}`;
      },
      enterActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}`;
      },
      exitActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEasingConstant.cubicBezierEasing}`;
      }
    }
  });
  require.d(exports, {
    fadeTransition: function () {
      return l;
    }
  });
}