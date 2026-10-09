// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30265.82d306d4.js
         * chunkId: 30265
         * moduleId: 428302
         */
module.exports = function (module, exports, require) {
  exports.Solarize = undefined;
  exports.Solarize = function (t) {
    var e = t.data;
    var i = t.width;
    var r = t.height;
    var a = i * 4;
    var n = r;
    do {
      var s = (n - 1) * a;
      var o = i;
      do {
        var h = s + (o - 1) * 4;
        var l = e[h];
        var d = e[h + 1];
        var c = e[h + 2];
        if (l > 127) {
          l = 255 - l;
        }
        if (d > 127) {
          d = 255 - d;
        }
        if (c > 127) {
          c = 255 - c;
        }
        e[h] = l;
        e[h + 1] = d;
        e[h + 2] = c;
      } while (--o);
    } while (--n);
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}