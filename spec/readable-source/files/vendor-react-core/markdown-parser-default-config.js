// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 568329
         */
module.exports = function (module, exports, require) {
  module.exports = {
    options: {
      html: true,
      xhtmlOut: true,
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
        rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
      },
      inline: {
        rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
        rules2: ["balance_pairs", "emphasis", "text_collapse"]
      }
    }
  };
}