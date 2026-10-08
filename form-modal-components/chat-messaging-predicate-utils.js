// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HS' to 'isReviewStateNotCompliant'
// - Renamed export 'Lp' to 'isBotConversation'
// - Renamed export 'Mh' to 'isUserParticipant'
// - Renamed export 'UC' to 'isParseStateFailed'
// - Renamed export 'ar' to 'isOfficialParticipant'
// - Renamed export 'el' to 'isCocoParticipant'
// - Renamed export 'o4' to 'isConversationType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 701382
         */
module.exports = function (module, exports, require) {
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var messagingConstants = require("messaging-constants") /*id: 292449*/;
  var chatEnumConstants = require("chat-enum-constants") /*id: 180943*/;
  let a = e => !!e && [chatConversationTypes.ConversationTypes.Bot, chatConversationTypes.ConversationTypes.ProfileBot].includes(e);
  let o = e => [chatConversationTypes.ConversationTypes.Conversation].includes(e);
  function l(e) {
    return e === messagingConstants.parseState.ParseState_Failed;
  }
  function u(e) {
    return e === messagingConstants.reviewState.ReviewState_NotCompliant;
  }
  let c = e => e === chatEnumConstants.ParticipantType.Coco || e === chatEnumConstants.ParticipantType.CocoWeb;
  let d = e => e === chatEnumConstants.ParticipantType.User;
  let f = e => e === chatEnumConstants.ParticipantType.GuanFang;
  require.d(exports, {
    isReviewStateNotCompliant: function () {
      return u;
    },
    isBotConversation: function () {
      return a;
    },
    isUserParticipant: function () {
      return d;
    },
    isParseStateFailed: function () {
      return l;
    },
    isOfficialParticipant: function () {
      return f;
    },
    isCocoParticipant: function () {
      return c;
    },
    isConversationType: function () {
      return o;
    }
  });
}