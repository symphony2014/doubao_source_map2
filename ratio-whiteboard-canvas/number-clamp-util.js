// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'clampNumber'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 317214
         */
module.exports = function (module, exports, require) {
  function i(t, e, r) {
    if (t == t) {
      if (r !== undefined) {
        t = t <= r ? t : r;
      }
      if (e !== undefined) {
        t = t >= e ? t : e;
      }
    }
    return t;
  }
  var toNumberUtil_1 = require("to-number-util_1") /*id: 216346*/;
  function o(t, e, r) {
    if (r === undefined) {
      r = e;
      e = undefined;
    }
    if (r !== undefined) {
      r = (r = toNumberUtil_1.toNumber(r)) == r ? r : 0;
    }
    if (e !== undefined) {
      e = (e = toNumberUtil_1.toNumber(e)) == e ? e : 0;
    }
    return i(toNumberUtil_1.toNumber(t), e, r);
  }
  require.d(exports, {
    clampNumber: function () {
      return o;
    }
  });
}