// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 556484
         */
module.exports = function (module, exports, require) {
  module.exports = function (t) {
    var e;
    if (t.inlineMode) {
      (e = new t.Token("inline", "", 0)).content = t.src;
      e.map = [0, 1];
      e.children = [];
      t.tokens.push(e);
    } else {
      t.md.block.parse(t.src, t.md, t.env, t.tokens);
    }
  };
}