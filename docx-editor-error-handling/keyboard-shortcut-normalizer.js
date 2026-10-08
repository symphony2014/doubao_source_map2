// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Rt' to 'ctrlKeyLabel'
// - Renamed export 'XH' to 'altKeyLabel'
// - Renamed export 'fw' to 'cmdKeyLabel'
// - Renamed export 'gQ' to 'metaCtrlKey'
// - Renamed export 'rv' to 'normalizeShortcuts'
// - Renamed export 'uG' to 'shiftKeyLabel'
// - Renamed export 'yd' to 'primaryModifierKey'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 761
         */
module.exports = function (module, exports, require) {
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  let i = window.navigator.userAgent.indexOf("Macintosh") !== -1 || browserEnvironmentDetectionUtils.browserDetector.isIPad;
  let l = i ? "metaKey" : "ctrlKey";
  let a = "Ctrl";
  let c = "Shift";
  let u = i ? "⌥" : "Alt";
  let s = "⌘";
  let d = i ? s : "Ctrl";
  function h(e) {
    return e.map(e => {
      let n = !!e.ctrlKey || !i && !!e.metaCtrlKey;
      let r = !!e.metaKey || !!i && !!e.metaCtrlKey;
      let {
        metaCtrlKey: o,
        metaKey: l,
        ...a
      } = e;
      if (i) {
        return {
          shiftKey: false,
          altKey: false,
          ...a,
          metaKey: r,
          ctrlKey: n
        };
      } else {
        return {
          shiftKey: false,
          altKey: false,
          ...a,
          ctrlKey: n
        };
      }
    });
  }
  require.d(exports, {
    ctrlKeyLabel: function () {
      return a;
    },
    altKeyLabel: function () {
      return u;
    },
    cmdKeyLabel: function () {
      return s;
    },
    metaCtrlKey: function () {
      return l;
    },
    normalizeShortcuts: function () {
      return h;
    },
    shiftKeyLabel: function () {
      return c;
    },
    primaryModifierKey: function () {
      return d;
    }
  });
}