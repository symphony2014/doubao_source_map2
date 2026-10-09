// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'aiActions'
// - Renamed export 'o' to 'blockTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 68834.ebc1ffcc.js
         * chunkId: 68834
         * moduleId: 383014
         */
module.exports = function (module, exports, require) {
  var n = {
    RewriteByKey: "rewrite_by_key",
    RewriteByText: "rewrite_by_text",
    ParagraphSummary: "paragraph_summary",
    Paragraph: "paragraph",
    InlineHelpMeWrite: "inline_help_me_write",
    AutoContinueWriting: "auto_continue_writing"
  };
  var i = {
    Text: "text",
    Heading1: "heading_1",
    Heading2: "heading_2",
    Heading3: "heading_3",
    Heading4: "heading_4",
    OrderedList: "ordered_list",
    UnorderedList: "unordered_list",
    Blockquote: "blockquote",
    CodeBlock: "code_block",
    Bold: "bold",
    Italic: "italic",
    Underline: "underline",
    StrikeThrough: "strike_through",
    InlineCode: "inline_code",
    Image: "image",
    Table: "table",
    Link: "link",
    Unknown: "unknown",
    Check: "check"
  };
  require.d(exports, {
    aiActions: function () {
      return n;
    },
    blockTypes: function () {
      return i;
    }
  });
}