// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 624527
         */
module.exports = function (module, exports, require) {
  module.exports = function (t, e) {
    var r;
    var n;
    var i;
    var o;
    var s;
    var a;
    var c;
    var l;
    var u = t.pos;
    if (t.src.charCodeAt(u) !== 96) {
      return false;
    }
    r = u;
    u++;
    n = t.posMax;
    while (u < n && t.src.charCodeAt(u) === 96) {
      u++;
    }
    c = (i = t.src.slice(r, u)).length;
    if (t.backticksScanned && (t.backticks[c] || 0) <= r) {
      if (!e) {
        t.pending += i;
      }
      t.pos += c;
      return true;
    }
    for (s = a = u; (s = t.src.indexOf("`", a)) !== -1;) {
      for (a = s + 1; a < n && t.src.charCodeAt(a) === 96;) {
        a++;
      }
      if ((l = a - s) === c) {
        if (!e) {
          (o = t.push("code_inline", "code", 0)).markup = i;
          o.content = t.src.slice(u, s).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
        }
        t.pos = a;
        return true;
      }
      t.backticks[l] = s;
    }
    t.backticksScanned = true;
    if (!e) {
      t.pending += i;
    }
    t.pos += c;
    return true;
  };
}