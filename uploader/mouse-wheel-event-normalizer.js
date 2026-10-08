// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'userAgentDetector'
// - Resolved require(270317) to 'user-agent-detector'
// - Renamed variable 'r' to 'domEventSupportCheck'
// - Resolved require(200013) to 'dom-event-support-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: react-easy-crop.320047a5.js
         * chunkId: 26549
         * moduleId: 154897
         */
module.exports = function (module, exports, require) {
  var userAgentDetector = require("user-agent-detector") /*id: 270317*/;
  var domEventSupportCheck = require("dom-event-support-check") /*id: 200013*/;
  function i(e) {
    var t = 0;
    var o = 0;
    var n = 0;
    var r = 0;
    if ("detail" in e) {
      o = e.detail;
    }
    if ("wheelDelta" in e) {
      o = -e.wheelDelta / 120;
    }
    if ("wheelDeltaY" in e) {
      o = -e.wheelDeltaY / 120;
    }
    if ("wheelDeltaX" in e) {
      t = -e.wheelDeltaX / 120;
    }
    if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
      t = o;
      o = 0;
    }
    n = t * 10;
    r = o * 10;
    if ("deltaY" in e) {
      r = e.deltaY;
    }
    if ("deltaX" in e) {
      n = e.deltaX;
    }
    if ((n || r) && e.deltaMode) {
      if (e.deltaMode == 1) {
        n *= 40;
        r *= 40;
      } else {
        n *= 800;
        r *= 800;
      }
    }
    if (n && !t) {
      t = n < 1 ? -1 : 1;
    }
    if (r && !o) {
      o = r < 1 ? -1 : 1;
    }
    return {
      spinX: t,
      spinY: o,
      pixelX: n,
      pixelY: r
    };
  }
  i.getEventType = function () {
    if (userAgentDetector.firefox()) {
      return "DOMMouseScroll";
    } else if (domEventSupportCheck("wheel")) {
      return "wheel";
    } else {
      return "mousewheel";
    }
  };
  module.exports = i;
}