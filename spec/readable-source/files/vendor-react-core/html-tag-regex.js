// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 361862
         */
module.exports = function (module, exports, require) {
  var e = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>";
  var r = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
  var n = RegExp("^(?:" + e + "|" + r + "|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)");
  var i = RegExp("^(?:" + e + "|" + r + ")");
  module.exports.HTML_TAG_RE = n;
  module.exports.HTML_OPEN_CLOSE_TAG_RE = i;
}