// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(708770) to 'markdown-common-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 260879
         */
module.exports = function (module, exports, require) {
  var n = require("markdown-common-utils") /*id: 708770*/.unescapeAll;
  module.exports = function (t, e, r) {
    var i;
    var o;
    var s = 0;
    var a = e;
    var c = {
      ok: false,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (e >= r || (o = t.charCodeAt(e)) !== 34 && o !== 39 && o !== 40) {
      return c;
    }
    e++;
    if (o === 40) {
      o = 41;
    }
    while (e < r) {
      if ((i = t.charCodeAt(e)) === o) {
        c.pos = e + 1;
        c.lines = s;
        c.str = n(t.slice(a + 1, e));
        c.ok = true;
        break;
      }
      if (i === 40 && o === 41) {
        break;
      }
      if (i === 10) {
        s++;
      } else if (i === 92 && e + 1 < r) {
        e++;
        if (t.charCodeAt(e) === 10) {
          s++;
        }
      }
      e++;
    }
    return c;
  };
}