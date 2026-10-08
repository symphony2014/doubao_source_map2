// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'setupMarkdownParser'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46473.bc9b0de0.js
         * chunkId: 46473
         * moduleId: 159982
         */
module.exports = function (module, exports, require) {
  var markdownParserCore = require("markdown-parser-core") /*id: 849340*/;
  function r(t) {
    let e = this;
    e.parser = function (i) {
      return markdownParserCore.parseMarkdown(i, {
        ...e.data("settings"),
        ...t,
        extensions: e.data("micromarkExtensions") || [],
        mdastExtensions: e.data("fromMarkdownExtensions") || []
      });
    };
  }
  require.d(exports, {
    setupMarkdownParser: function () {
      return r;
    }
  });
}