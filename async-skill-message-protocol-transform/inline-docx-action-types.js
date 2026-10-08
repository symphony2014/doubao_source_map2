// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'l' to 'getDocxActionTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: inline-next-docx-panel.7c8dbe01.js
         * chunkId: 31601
         * moduleId: 598431
         */
module.exports = function (module, exports, require) {
  var i = {
    ReadDoc: "read_doc",
    ExtractParagraphDescription: "extract_paragraph_description",
    RegenerateParagraphDoc: "re_gen_paragraph_doc",
    ChatInDoc: "chat_in_doc",
    Expansion: "expansion",
    ContinueWriting: "continue_writing",
    Abbreviation: "abbreviation",
    Polish: "polish",
    Summarize: "summarize",
    InlineToneProfessional: "inline_tone_professional",
    InlineToneCasual: "inline_tone_casual",
    InlineToneReadable: "inline_tone_readable",
    InlineToneSubtle: "inline_tone_subtle",
    InlineToneAcademic: "inline_tone_academic",
    InlineToneElegant: "inline_tone_elegant",
    InlineToneTrendy: "inline_tone_trendy",
    InlineHelpMeWrite: "inline_help_me_write",
    AutoContinueWriting: "auto_continue_writing"
  };
  require.d(exports, {
    getDocxActionTypes: function () {
      return i;
    }
  });
}