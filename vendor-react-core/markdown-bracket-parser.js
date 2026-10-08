// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 522238
         */
module.exports = function (module, exports, require) {
  module.exports = function (t, e, r) {
    var n;
    var i;
    var o;
    var s;
    var a = -1;
    var c = t.posMax;
    var l = t.pos;
    t.pos = e + 1;
    n = 1;
    while (t.pos < c) {
      if ((o = t.src.charCodeAt(t.pos)) === 93 && --n == 0) {
        i = true;
        break;
      }
      s = t.pos;
      t.md.inline.skipToken(t);
      if (o === 91) {
        if (s === t.pos - 1) {
          n++;
        } else if (r) {
          t.pos = l;
          return -1;
        }
      }
    }
    if (i) {
      a = t.pos;
    }
    t.pos = l;
    return a;
  };
}