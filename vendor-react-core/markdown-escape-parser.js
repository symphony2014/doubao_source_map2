// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 596636
         */
module.exports = function (module, exports, require) {
  var n = require("markdown-common-utils") /*id: 708770*/.isSpace;
  var i = [];
  var o = 0;
  for (; o < 256; o++) {
    i.push(0);
  }
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (t) {
    i[t.charCodeAt(0)] = 1;
  });
  module.exports = function (t, e) {
    var r;
    var o = t.pos;
    var s = t.posMax;
    if (t.src.charCodeAt(o) !== 92) {
      return false;
    }
    if (++o < s) {
      if ((r = t.src.charCodeAt(o)) < 256 && i[r] !== 0) {
        if (!e) {
          t.pending += t.src[o];
        }
        t.pos += 2;
        return true;
      }
      if (r === 10) {
        if (!e) {
          t.push("hardbreak", "br", 0);
        }
        o++;
        while (o < s && n(r = t.src.charCodeAt(o))) {
          o++;
        }
        t.pos = o;
        return true;
      }
    }
    if (!e) {
      t.pending += "\\";
    }
    t.pos++;
    return true;
  };
}