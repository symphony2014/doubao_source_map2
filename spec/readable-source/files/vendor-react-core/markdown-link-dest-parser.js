// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 487170
         */
module.exports = function (module, exports, require) {
  var n = require("markdown-common-utils") /*id: 708770*/.unescapeAll;
  module.exports = function (t, e, r) {
    var i;
    var o;
    var s = e;
    var a = {
      ok: false,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (t.charCodeAt(e) === 60) {
      for (e++; e < r && (i = t.charCodeAt(e)) !== 10 && i !== 60;) {
        if (i === 62) {
          a.pos = e + 1;
          a.str = n(t.slice(s + 1, e));
          a.ok = true;
          break;
        }
        if (i === 92 && e + 1 < r) {
          e += 2;
          continue;
        }
        e++;
      }
      return a;
    }
    for (o = 0; e < r && (i = t.charCodeAt(e)) !== 32 && !(i < 32) && i !== 127;) {
      if (i === 92 && e + 1 < r) {
        if (t.charCodeAt(e + 1) === 32) {
          break;
        }
        e += 2;
        continue;
      }
      if (i === 40 && ++o > 32) {
        return a;
      }
      if (i === 41) {
        if (o === 0) {
          break;
        }
        o--;
      }
      e++;
    }
    if (s !== e && o === 0) {
      a.str = n(t.slice(s, e));
      a.lines = 0;
      a.pos = e;
      a.ok = true;
    }
    return a;
  };
}