// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'slideUpDownTransition'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 99771.2ba6bc81.js
         * chunkId: 99771
         * moduleId: 450064
         */
module.exports = function (module, exports, require) {
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCssTransitionFactory = require("react-css-transition-factory") /*id: 697870*/;
  var cubicBezierEase = require("cubic-bezier-ease") /*id: 855968*/;
  var u = reactCssTransitionFactory.createCssTransition({
    name: function (e) {
      var t = e.placement;
      return `slide-up-down-${t}`;
    },
    styles: function (e) {
      var t = e.placement.split("-");
      var n = iterableToArrayUtil_1_1.iterableToArray(t, 2);
      var o = n[0];
      var i = n[1];
      var u = "0";
      if (o === "bottom" || o.match(/right|left/) && i === "start") {
        u = "-8px";
      } else if (o === "top" || o.match(/right|left/) && i === "end") {
        u = "8px";
      }
      return {
        appear: `opacity: 0;transform: translateY(${u});`,
        enter: `opacity: 0;transform: translateY(${u});`,
        exitDone: `opacity: 0;transform: translateY(${u});`,
        appearActive: "opacity: 1;transform: translateY(0);",
        enterActive: "opacity: 1;transform: translateY(0);",
        appearDone: "opacity: 1;transform: translateY(0);",
        enterDone: "opacity: 1;transform: translateY(0);",
        exit: "opacity: 1;transform: translateY(0);",
        exitActive: `opacity: 0;transform: translateY(${u});`
      };
    },
    transitions: {
      appearActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEase.cubicBezierEase}, transform ${e}ms ${cubicBezierEase.cubicBezierEase}`;
      },
      enterActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEase.cubicBezierEase}, transform ${e}ms ${cubicBezierEase.cubicBezierEase}`;
      },
      exitActive: function (e) {
        return `opacity ${e}ms ${cubicBezierEase.cubicBezierEase}, transform ${e}ms ${cubicBezierEase.cubicBezierEase}`;
      }
    }
  });
  require.d(exports, {
    slideUpDownTransition: function () {
      return u;
    }
  });
}