// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 216353
         */
module.exports = function (module, exports, require) {
  module.exports = {
    options: {
      html: false,
      xhtmlOut: false,
      breaks: false,
      langPrefix: "language-",
      linkify: false,
      typographer: false,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 20
    },
    components: {
      core: {
        rules: ["normalize", "block", "inline"]
      },
      block: {
        rules: ["paragraph"]
      },
      inline: {
        rules: ["text"],
        rules2: ["balance_pairs", "text_collapse"]
      }
    }
  };
}