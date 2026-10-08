// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(361862) to 'html-tag-regex'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 979324
         */
module.exports = function (module, exports, require) {
  var n = require("html-tag-regex") /*id: 361862*/.HTML_TAG_RE;
  module.exports = function (t, e) {
    var r;
    var i;
    var o;
    var s;
    var a = t.pos;
    return !!t.md.options.html && (s = t.posMax, t.src.charCodeAt(a) === 60 && !(a + 2 >= s)) && ((i = t.src.charCodeAt(a + 1)) === 33 || i === 63 || i === 47 || !!((r = i | 32) >= 97) && !!(r <= 122)) && !!(o = t.src.slice(a).match(n)) && (e || (t.push("html_inline", "", 0).content = t.src.slice(a, a + o[0].length)), t.pos += o[0].length, true);
  };
}