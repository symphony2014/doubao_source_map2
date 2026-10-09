// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'emojiUnicodeCodepoints'
// - Resolved require(870525) to 'emoji-unicode-codepoints'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 81337.852c574d.js
         * chunkId: 81337
         * moduleId: 422022
         */
module.exports = function (module, exports, require) {
  let emojiUnicodeCodepoints = require("emoji-unicode-codepoints") /*id: 870525*/;
  let n = new Map([["none", ""], ["white", "🏻"], ["creamWhite", "🏼"], ["lightBrown", "🏽"], ["brown", "🏾"], ["darkBrown", "🏿"]]);
  module.exports = (e, a) => {
    if (!n.has(a)) {
      throw TypeError(`Unexpected \`skinTone\` name: ${a}`);
    }
    e = e.replace(/[\u{1f3fb}-\u{1f3ff}]/u, "");
    if (emojiUnicodeCodepoints.has(e.codePointAt(0)) && a !== "none") {
      e += n.get(a);
    }
    return e;
  };
}