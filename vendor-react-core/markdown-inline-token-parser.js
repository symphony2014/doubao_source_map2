// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 339611
         */
module.exports = function (module, exports, require) {
  module.exports = function (t) {
    var e;
    var r;
    var n;
    var i = t.tokens;
    r = 0;
    n = i.length;
    for (; r < n; r++) {
      if ((e = i[r]).type === "inline") {
        t.md.inline.parse(e.content, t.md, t.env, e.children);
      }
    }
  };
}