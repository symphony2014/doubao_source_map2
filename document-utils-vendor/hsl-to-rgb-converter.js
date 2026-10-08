// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 741771
         */
module.exports = function (module, exports, require) {
  module.exports = function (e, t, r) {
    if (e == undefined) {
      return [0, 0, 0];
    }
    var n;
    var i;
    var o;
    var a = (1 - Math.abs(r * 2 - 1)) * t;
    var s = e / 60;
    var l = a * (1 - Math.abs(s % 2 - 1));
    if ((s = Math.floor(s)) === 0) {
      n = a;
      i = l;
      o = 0;
    } else if (s === 1) {
      n = l;
      i = a;
      o = 0;
    } else if (s === 2) {
      n = 0;
      i = a;
      o = l;
    } else if (s === 3) {
      n = 0;
      i = l;
      o = a;
    } else if (s === 4) {
      n = l;
      i = 0;
      o = a;
    } else if (s === 5) {
      n = a;
      i = 0;
      o = l;
    }
    var u = r - a / 2;
    return [Math.abs(Math.round((n += u) * 255)), Math.abs(Math.round((i += u) * 255)), Math.abs(Math.round((o += u) * 255))];
  };
}