// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 170534
         */
module.exports = function (module, exports, require) {
  module.exports = function (t, e, r) {
    var n;
    var i;
    var o;
    var s;
    var a;
    var c;
    var l;
    var u;
    var h;
    var p;
    var f = e + 1;
    var d = t.md.block.ruler.getRules("paragraph");
    if (t.sCount[e] - t.blkIndent >= 4) {
      return false;
    }
    p = t.parentType;
    t.parentType = "paragraph";
    for (; f < r && !t.isEmpty(f); f++) {
      if (!(t.sCount[f] - t.blkIndent > 3)) {
        if (t.sCount[f] >= t.blkIndent && (c = t.bMarks[f] + t.tShift[f]) < (l = t.eMarks[f]) && ((h = t.src.charCodeAt(c)) === 45 || h === 61) && (c = t.skipChars(c, h), (c = t.skipSpaces(c)) >= l)) {
          u = h === 61 ? 1 : 2;
          break;
        }
        if (!(t.sCount[f] < 0)) {
          o = 0;
          i = false;
          s = d.length;
          for (; o < s; o++) {
            if (d[o](t, f, r, true)) {
              i = true;
              break;
            }
          }
          if (i) {
            break;
          }
        }
      }
    }
    return !!u && (n = t.getLines(e, f, t.blkIndent, false).trim(), t.line = f + 1, (a = t.push("heading_open", "h" + String(u), 1)).markup = String.fromCharCode(h), a.map = [e, t.line], (a = t.push("inline", "", 0)).content = n, a.map = [e, t.line - 1], a.children = [], (a = t.push("heading_close", "h" + String(u), -1)).markup = String.fromCharCode(h), t.parentType = p, true);
  };
}