// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isInRange'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-send-message-box.20dfaedc.js
         * chunkId: 13146
         * moduleId: 341356
         */
module.exports = function (module, exports, require) {
  var i = Math.max;
  var r = Math.min;
  var toSafeNumberUtil = require("to-safe-number-util") /*id: 338794*/;
  var toNumberUtil_1 = require("to-number-util_1") /*id: 216346*/;
  function a(e, t, n) {
    var a;
    var s;
    var c;
    t = toSafeNumberUtil.toSafeNumber(t);
    if (n === undefined) {
      n = t;
      t = 0;
    } else {
      n = toSafeNumberUtil.toSafeNumber(n);
    }
    return (a = e = toNumberUtil_1.toNumber(e)) >= r(s = t, c = n) && a < i(s, c);
  }
  require.d(exports, {
    isInRange: function () {
      return a;
    }
  });
}