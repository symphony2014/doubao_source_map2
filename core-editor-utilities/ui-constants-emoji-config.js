// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EY' to 'buttonTypes'
// - Renamed export 'W7' to 'shapeTypes'
// - Renamed export 'ue' to 'iconTypes'
// - Renamed export 'vy' to 'emojiFontStack'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 592082
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var a;
  var i;
  var c;
  var s;
  var browserEnvDetectionUtil = require("browser-env-detection-util") /*id: 355358*/;
  (n = i ||= {})[n.UNSET = 0] = "UNSET";
  n[n.EMOJI = 1] = "EMOJI";
  n[n.ICON = 2] = "ICON";
  n[n.CUSTOM = 3] = "CUSTOM";
  (o = c ||= {}).SQUARE = "square";
  o.SQUARE_OUTLINE = "square_outline";
  (a = s ||= {}).DEFAULT = "default";
  a.LINK = "link";
  a.DISABLED = "disabled";
  let u = browserEnvDetectionUtil.browserDetector.isMac ? "Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Segoe UI" : "Segoe UI Emoji, Segoe UI Symbol, Segoe UI, Apple Color Emoji";
  require.d(exports, {
    buttonTypes: function () {
      return s;
    },
    shapeTypes: function () {
      return c;
    },
    iconTypes: function () {
      return i;
    },
    emojiFontStack: function () {
      return u;
    }
  });
}