// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 769415
         */
module.exports = function (module, exports, require) {
  module.exports = function (t, e, r) {
    var n;
    var i;
    var o;
    if (t.sCount[e] - t.blkIndent < 4) {
      return false;
    }
    for (i = n = e + 1; n < r;) {
      if (t.isEmpty(n)) {
        n++;
        continue;
      }
      if (t.sCount[n] - t.blkIndent >= 4) {
        i = ++n;
        continue;
      }
      break;
    }
    t.line = i;
    (o = t.push("code_block", "code", 0)).content = t.getLines(e, i, 4 + t.blkIndent, false) + "\n";
    o.map = [e, t.line];
    return true;
  };
}