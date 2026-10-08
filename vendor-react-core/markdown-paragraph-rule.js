// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 900128
         */
module.exports = function (module, exports, require) {
  module.exports = function (t, e) {
    var r;
    var n;
    var i;
    var o;
    var s;
    var a;
    var c = e + 1;
    var l = t.md.block.ruler.getRules("paragraph");
    var u = t.lineMax;
    a = t.parentType;
    t.parentType = "paragraph";
    for (; c < u && !t.isEmpty(c); c++) {
      if (!(t.sCount[c] - t.blkIndent > 3) && !(t.sCount[c] < 0)) {
        i = 0;
        n = false;
        o = l.length;
        for (; i < o; i++) {
          if (l[i](t, c, u, true)) {
            n = true;
            break;
          }
        }
        if (n) {
          break;
        }
      }
    }
    r = t.getLines(e, c, t.blkIndent, false).trim();
    t.line = c;
    (s = t.push("paragraph_open", "p", 1)).map = [e, t.line];
    (s = t.push("inline", "", 0)).content = r;
    s.map = [e, t.line];
    s.children = [];
    s = t.push("paragraph_close", "p", -1);
    t.parentType = a;
    return true;
  };
}