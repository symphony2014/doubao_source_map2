// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 125536
         */
module.exports = function (module, exports, require) {
  module.exports = function (t, e, r, n) {
    var i;
    var o;
    var s;
    var a;
    var c;
    var l;
    var u;
    var h = false;
    var p = t.bMarks[e] + t.tShift[e];
    var f = t.eMarks[e];
    if (t.sCount[e] - t.blkIndent >= 4 || p + 3 > f || (i = t.src.charCodeAt(p)) !== 126 && i !== 96 || (c = p, (o = (p = t.skipChars(p, i)) - c) < 3) || (u = t.src.slice(c, p), s = t.src.slice(p, f), i === 96 && s.indexOf(String.fromCharCode(i)) >= 0)) {
      return false;
    }
    if (n) {
      return true;
    }
    for (a = e; !(++a >= r) && (!((p = c = t.bMarks[a] + t.tShift[a]) < (f = t.eMarks[a])) || !(t.sCount[a] < t.blkIndent));) {
      if (t.src.charCodeAt(p) === i && !(t.sCount[a] - t.blkIndent >= 4) && !((p = t.skipChars(p, i)) - c < o) && !((p = t.skipSpaces(p)) < f)) {
        h = true;
        break;
      }
    }
    o = t.sCount[e];
    t.line = a + +!!h;
    (l = t.push("fence", "code", 0)).info = s;
    l.content = t.getLines(e + 1, a, o, true);
    l.markup = u;
    l.map = [e, t.line];
    return true;
  };
}