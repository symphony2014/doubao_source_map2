// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'hasHttpsLinks'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 977234
         */
module.exports = function (module, exports, require) {
  var textLinkParser = require("text-link-parser") /*id: 266843*/;
  let r = e => textLinkParser.parseTextLinks(e.trim()).some(e => {
    var t;
    return e.type === textLinkParser.tokenTypes.link && ((t = e.url) === null || t === undefined ? undefined : t.startsWith("https://"));
  });
  require.d(exports, {
    hasHttpsLinks: function () {
      return r;
    }
  });
}