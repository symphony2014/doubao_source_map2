// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ck' to 'parseStateToMessaging'
// - Renamed export 'LD' to 'parseStateToAttachment'
// - Renamed export 'lv' to 'reviewStateToMessaging'
// - Renamed export 'xo' to 'reviewStateToAttachment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18848.031095ef.js
         * chunkId: 18848
         * moduleId: 804557
         */
module.exports = function (module, exports, require) {
  var attachmentConstants = require("attachment-constants") /*id: 373585*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  let o = {
    [attachmentConstants.ReviewState.ReviewStateDefault]: messagingConstants.reviewState.ReviewState_Default,
    [attachmentConstants.ReviewState.ReviewStateAccess]: messagingConstants.reviewState.ReviewState_Access,
    [attachmentConstants.ReviewState.ReviewStateNotCompliant]: messagingConstants.reviewState.ReviewState_NotCompliant,
    [attachmentConstants.ReviewState.ReviewStateProcessing]: messagingConstants.reviewState.ReviewState_Processing
  };
  let s = {
    [messagingConstants.reviewState.ReviewState_Default]: attachmentConstants.ReviewState.ReviewStateDefault,
    [messagingConstants.reviewState.ReviewState_Access]: attachmentConstants.ReviewState.ReviewStateAccess,
    [messagingConstants.reviewState.ReviewState_NotCompliant]: attachmentConstants.ReviewState.ReviewStateNotCompliant,
    [messagingConstants.reviewState.ReviewState_Processing]: attachmentConstants.ReviewState.ReviewStateProcessing
  };
  let l = {
    [attachmentConstants.ParseState.ParseStateDefault]: messagingConstants.parseState.ParseState_Default,
    [attachmentConstants.ParseState.ParseStateSuccess]: messagingConstants.parseState.ParseState_Success,
    [attachmentConstants.ParseState.ParseStateFail]: messagingConstants.parseState.ParseState_Failed,
    [attachmentConstants.ParseState.ParseStateProcessing]: messagingConstants.parseState.ParseState_Processing
  };
  let a = {
    [messagingConstants.parseState.ParseState_Default]: attachmentConstants.ParseState.ParseStateDefault,
    [messagingConstants.parseState.ParseState_Success]: attachmentConstants.ParseState.ParseStateSuccess,
    [messagingConstants.parseState.ParseState_Failed]: attachmentConstants.ParseState.ParseStateFail,
    [messagingConstants.parseState.ParseState_Processing]: attachmentConstants.ParseState.ParseStateProcessing
  };
  require.d(exports, {
    parseStateToMessaging: function () {
      return l;
    },
    parseStateToAttachment: function () {
      return a;
    },
    reviewStateToMessaging: function () {
      return o;
    },
    reviewStateToAttachment: function () {
      return s;
    }
  });
}