// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Lz' to 'ChatInputMode'
// - Renamed export 'Us' to 'ChatSkillAction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 878542
         */
module.exports = function (module, exports, require) {
  var i = {
    UNKNOWN: 0,
    AUTO: 1,
    OPEN: 2,
    CLOSE: 3
  };
  var r = {
    UNKNOWN: 0,
    DIRECT_INPUT: 1,
    WRITE_ARTICLE: 2,
    WRITE_PAPER: 3,
    WRITE_RESEARCH_REPORT: 4,
    WRITE_XIAOHONGSHU: 5,
    WRITE_SUMMARY_REPORT: 6,
    WRITE_ESSAY: 7,
    WRITE_PROMOTION: 8,
    CONTINUE_WRITING: 9,
    ADD_TRANSITION: 10,
    ADD_EXAMPLE: 11,
    ADD_SUMMARY: 12,
    INSERT_TABLE: 13,
    POLISH: 14,
    EXPAND: 15,
    ABBREVIATE: 16,
    FULL_TEXT_POLISH: 17,
    LENGTH_ADJUSTMENT_VERY_LONG: 18,
    LENGTH_ADJUSTMENT_LONG: 19,
    LENGTH_ADJUSTMENT_SHORT: 20,
    LENGTH_ADJUSTMENT_VERY_SHORT: 21,
    TONE_ADJUSTMENT_MORE_PROFESSIONAL: 22,
    TONE_ADJUSTMENT_MORE_ACADEMIC: 23,
    TONE_ADJUSTMENT_MORE_FORMAL: 24,
    TONE_ADJUSTMENT_MORE_EASY: 25,
    TONE_ADJUSTMENT_MORE_LITERARY: 26,
    TONE_ADJUSTMENT_MORE_NET_SENSE: 27,
    GENERATE_DOC_FROM_MESSAGE: 28
  };
  require.d(exports, {
    ChatInputMode: function () {
      return i;
    },
    ChatSkillAction: function () {
      return r;
    }
  });
}