// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 631495
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
    if (t.sCount[e] - t.blkIndent >= 4 || (o = t.src.charCodeAt(l)) !== 35 || l >= u) {
      return false;
    }
    s = 1;
    o = t.src.charCodeAt(++l);
    while (o === 35 && l < u && s <= 6) {
      s++;
      o = t.src.charCodeAt(++l);
    }
    return !(s > 6) && (!(l < u) || !!n(o)) && (!!i || (u = t.skipSpacesBack(u, l), (a = t.skipCharsBack(u, 35, l)) > l && n(t.src.charCodeAt(a - 1)) && (u = a), t.line = e + 1, (c = t.push("heading_open", "h" + String(s), 1)).markup = "########".slice(0, s), c.map = [e, t.line], (c = t.push("inline", "", 0)).content = t.src.slice(l, u).trim(), c.map = [e, t.line], c.children = [], (c = t.push("heading_close", "h" + String(s), -1)).markup = "########".slice(0, s), true));
  };
}