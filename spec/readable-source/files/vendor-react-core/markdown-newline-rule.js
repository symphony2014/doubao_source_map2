// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 311972
         */
module.exports = function (module, exports, require) {
  var n = require("markdown-common-utils") /*id: 708770*/.isSpace;
  module.exports = function (t, e) {
    var r;
    var i;
    var o;
    var s = t.pos;
    if (t.src.charCodeAt(s) !== 10) {
      return false;
    }
    r = t.pending.length - 1;
    i = t.posMax;
    if (!e) {
      if (r >= 0 && t.pending.charCodeAt(r) === 32) {
        if (r >= 1 && t.pending.charCodeAt(r - 1) === 32) {
          for (o = r - 1; o >= 1 && t.pending.charCodeAt(o - 1) === 32;) {
            o--;
          }
          t.pending = t.pending.slice(0, o);
          t.push("hardbreak", "br", 0);
        } else {
          t.pending = t.pending.slice(0, -1);
          t.push("softbreak", "br", 0);
        }
      } else {
        t.push("softbreak", "br", 0);
      }
    }
    for (s++; s < i && n(t.src.charCodeAt(s));) {
      s++;
    }
    t.pos = s;
    return true;
  };
}