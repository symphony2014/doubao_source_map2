// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 959735
         */
module.exports = function (module, exports, require) {
  var n = require("markdown-common-utils") /*id: 708770*/.isSpace;
  module.exports = function (t, e, r, i) {
    var o;
    var s;
    var a;
    var c;
    var l = t.bMarks[e] + t.tShift[e];
    var u = t.eMarks[e];
    if (t.sCount[e] - t.blkIndent >= 4 || (o = t.src.charCodeAt(l++)) !== 42 && o !== 45 && o !== 95) {
      return false;
    }
    for (s = 1; l < u;) {
      if ((a = t.src.charCodeAt(l++)) !== o && !n(a)) {
        return false;
      }
      if (a === o) {
        s++;
      }
    }
    return !(s < 3) && (!!i || (t.line = e + 1, (c = t.push("hr", "hr", 0)).map = [e, t.line], c.markup = Array(s + 1).join(String.fromCharCode(o)), true));
  };
}