// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ib' to 'isSelectAll'
// - Renamed export 'Pm' to 'isBackspace'
// - Renamed export 'TW' to 'isUndo'
// - Renamed export 'Uk' to 'isRedo'
// - Renamed export 'Ys' to 'isShiftArrowUp'
// - Renamed export 'bC' to 'isArrowRight'
// - Renamed export 'dM' to 'isModBackspace'
// - Renamed export 'dq' to 'isArrowDown'
// - Renamed export 'er' to 'isArrowUp'
// - Renamed export 'j2' to 'isEscape'
// - Renamed export 'jv' to 'isArrowLeft'
// - Renamed export 'mq' to 'isShiftEnter'
// - Renamed export 'tH' to 'isEnter'
// - Renamed export 'wR' to 'isTab'
// - Renamed export 'zf' to 'isShiftArrowDown'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 331886
         */
module.exports = function (module, exports, require) {
  var n;
  var browserEnvironmentDetectionUtils = require("browser-environment-detection-utils") /*id: 744607*/;
  (n = {})[n.TAB = 9] = "TAB";
  n[n.ENTER = 13] = "ENTER";
  n[n.ARROW_LEFT = 37] = "ARROW_LEFT";
  n[n.ARROW_UP = 38] = "ARROW_UP";
  n[n.ARROW_RIGHT = 39] = "ARROW_RIGHT";
  n[n.ARROW_DOWN = 40] = "ARROW_DOWN";
  n[n.BACK_SPACE = 8] = "BACK_SPACE";
  n[n.a = 65] = "a";
  n[n.A = 97] = "A";
  n[n.z = 229] = "z";
  n[n.Z = 90] = "Z";
  n[n.ESC = 27] = "ESC";
  let l = n;
  let s = e => browserEnvironmentDetectionUtils.browserDetector.isMac ? e.metaKey : e.ctrlKey;
  let a = e => !e.ctrlKey && !e.metaKey && !e.altKey && !e.shiftKey;
  let c = e => e.keyCode === l.ENTER && a(e);
  let d = e => e.keyCode === l.ESC && a(e);
  let u = e => e.keyCode === l.ARROW_LEFT && a(e);
  let h = e => e.keyCode === l.ARROW_RIGHT && a(e);
  let f = e => e.keyCode === l.ARROW_DOWN && a(e);
  let g = e => e.keyCode === l.ARROW_DOWN && e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey;
  let p = e => e.keyCode === l.ARROW_UP && a(e);
  let m = e => e.keyCode === l.ARROW_UP && e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey;
  let v = e => e.keyCode === l.TAB && a(e);
  let b = e => (e.keyCode === l.A || e.keyCode === l.a) && s(e) && !e.altKey;
  let y = e => (e.keyCode === l.Z || e.keyCode === l.z) && s(e) && !e.altKey;
  let S = e => (e.keyCode === l.Z || e.keyCode === l.z) && s(e) && !e.altKey && e.shiftKey;
  let k = e => e.keyCode === l.BACK_SPACE && s(e) && !e.altKey && !e.shiftKey;
  let E = e => e.keyCode === l.BACK_SPACE && a(e);
  let C = e => e.keyCode === l.ENTER && e.shiftKey && !e.ctrlKey && !e.metaKey && !e.altKey;
  require.d(exports, {
    isSelectAll: function () {
      return b;
    },
    isBackspace: function () {
      return E;
    },
    isUndo: function () {
      return y;
    },
    isRedo: function () {
      return S;
    },
    isShiftArrowUp: function () {
      return m;
    },
    isArrowRight: function () {
      return h;
    },
    isModBackspace: function () {
      return k;
    },
    isArrowDown: function () {
      return f;
    },
    isArrowUp: function () {
      return p;
    },
    isEscape: function () {
      return d;
    },
    isArrowLeft: function () {
      return u;
    },
    isShiftEnter: function () {
      return C;
    },
    isEnter: function () {
      return c;
    },
    isTab: function () {
      return v;
    },
    isShiftArrowDown: function () {
      return g;
    }
  });
}