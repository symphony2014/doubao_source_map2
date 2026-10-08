// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 320617
         */
module.exports = function (module, exports, require) {
  module.exports = function (t) {
    var e;
    var r;
    var n = 0;
    var i = t.tokens;
    var o = t.tokens.length;
    for (e = r = 0; e < o; e++) {
      if (i[e].nesting < 0) {
        n--;
      }
      i[e].level = n;
      if (i[e].nesting > 0) {
        n++;
      }
      if (i[e].type === "text" && e + 1 < o && i[e + 1].type === "text") {
        i[e + 1].content = i[e].content + i[e + 1].content;
      } else {
        if (e !== r) {
          i[r] = i[e];
        }
        r++;
      }
    }
    if (e !== r) {
      i.length = r;
    }
  };
}