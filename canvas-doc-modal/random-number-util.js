// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'generateRandom'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-doc-modal.382626bd.js
         * chunkId: 57462
         * moduleId: 636015
         */
module.exports = function (module, exports, require) {
  var utilsRandomInt = require("utils-random-int") /*id: 717626*/;
  var verifyPropertyMatch = require("verify-property-match") /*id: 874949*/;
  var toSafeNumberUtil = require("to-safe-number-util") /*id: 338794*/;
  var o = parseFloat;
  var s = Math.min;
  var l = Math.random;
  exports.generateRandom = function (e, t, r) {
    if (r && typeof r != "boolean" && verifyPropertyMatch.checkPropertyValue(e, t, r)) {
      t = r = undefined;
    }
    if (r === undefined) {
      if (typeof t == "boolean") {
        r = t;
        t = undefined;
      } else if (typeof e == "boolean") {
        r = e;
        e = undefined;
      }
    }
    if (e === undefined && t === undefined) {
      e = 0;
      t = 1;
    } else {
      e = toSafeNumberUtil.toSafeNumber(e);
      if (t === undefined) {
        t = e;
        e = 0;
      } else {
        t = toSafeNumberUtil.toSafeNumber(t);
      }
    }
    if (e > t) {
      var u = e;
      e = t;
      t = u;
    }
    if (r || e % 1 || t % 1) {
      var c = l();
      return s(e + c * (t - e + o("1e-" + ((c + "").length - 1))), t);
    }
    return utilsRandomInt.randomInt(e, t);
  };
}