// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dh' to 'reviewStatus'
// - Renamed export 'e7' to 'writingTaskTypes'
// - Renamed export 'gi' to 'contentSource'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 151614
         */
module.exports = function (module, exports, require) {
  (o = {})[o.Unknown = 0] = "Unknown";
  o[o.Available = 1] = "Available";
  o[o.NoEncodedStream = 2] = "NoEncodedStream";
  o[o.ReviewFailed = 3] = "ReviewFailed";
  let r = o;
  var o;
  var l;
  var a = {
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
    TONE_ADJUSTMENT_MORE_NET_SENSE: 27
  };
  (l = {})[l.AIGen = 1] = "AIGen";
  l[l.UserUpload = 2] = "UserUpload";
  l[l.AISearch = 3] = "AISearch";
  let s = l;
  require.d(exports, {
    reviewStatus: function () {
      return r;
    },
    writingTaskTypes: function () {
      return a;
    },
    contentSource: function () {
      return s;
    }
  });
}