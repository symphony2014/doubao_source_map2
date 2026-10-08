// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cj' to 'reactEventNames'
// - Renamed export 'h_' to 'shouldUsePointerEvents'
// - Renamed export 'nx' to 'domEventNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: resizable-draggable-btn.afecdf2f.js
         * chunkId: 43606
         * moduleId: 364859
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let n = () => {
    return browserEnvironmentDetectionUtils.browserDetector.isIPad && browserEnvironmentDetectionUtils.browserDetector.isSafari && !!window?.PointerEvent || browserEnvironmentDetectionUtils.browserDetector.isInChatTab;
  };
  let s = n() ? {
    mousedown: "pointerdown",
    mousemove: "pointermove",
    mouseup: "pointerup"
  } : {
    mousedown: "mousedown",
    mousemove: "mousemove",
    mouseup: "mouseup"
  };
  let r = n() ? {
    mousedown: "onPointerDown",
    mousemove: "onPointerMove",
    mouseup: "onPointerUp"
  } : {
    mousedown: "onMouseDown",
    mousemove: "onMouseMove",
    mouseup: "onMouseUp"
  };
  require.d(exports, {
    reactEventNames: function () {
      return r;
    },
    shouldUsePointerEvents: function () {
      return n;
    },
    domEventNames: function () {
      return s;
    }
  });
}