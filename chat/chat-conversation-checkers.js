// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CC' to 'isBotPlatform'
// - Renamed export 'Mh' to 'isUserParticipant'
// - Renamed export 'WC' to 'isRejectedShare'
// - Renamed export 'Xo' to 'isSupportedConv'
// - Renamed export 'ar' to 'isOfficialMember'
// - Renamed export 'el' to 'isCocoParticipant'
// - Renamed export 'jx' to 'isBotConversation'
// - Renamed export 'kJ' to 'isCocoConversation'
// - Renamed export 'p5' to 'isCocoSubConv'
// - Renamed export 'qU' to 'isCocoSubPlatform'
// - Renamed export 'x9' to 'isCocoPlatform'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 104471
         */
module.exports = function (module, exports, require) {
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatEnumConstants = require("chat-enum-constants") /*id: 180943*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  let l = e => e === chatCoreConstants.BotTypes.CocoWeb || e === chatCoreConstants.BotTypes.Coco;
  let s = e => e === chatCoreConstants.BotTypes.CocoWebSub || e === chatCoreConstants.BotTypes.CocoSub;
  let u = e => e === chatCoreConstants.BotTypes.Bot;
  let c = e => l(e == null ? undefined : e.conversation_type);
  let d = e => s(e == null ? undefined : e.conversation_type);
  let h = (e, t) => {
    let n = c(e);
    let i = d(e);
    return n || i || t === chatConversationTypes.ConversationTypes.NewThread || t === chatConversationTypes.ConversationTypes.ThreadLocalConversation || t === chatConversationTypes.ConversationTypes.CollectionLocalConversation || t === chatConversationTypes.ConversationTypes.SharedThreadContinueChat || t === chatConversationTypes.ConversationTypes.NewDoc;
  };
  let m = e => u(e == null ? undefined : e.conversation_type);
  let g = e => e === chatEnumConstants.ParticipantType.Coco || e === chatEnumConstants.ParticipantType.CocoWeb;
  let f = e => e === chatEnumConstants.ParticipantType.User;
  let p = e => e === chatEnumConstants.ParticipantType.GuanFang;
  let _ = e => {
    let t = false;
    try {
      let n = JSON.parse((e == null ? undefined : e.extra) || "");
      t = Number(n.share_from_review_status) === chatAppEnums.ReviewStatus.Reject;
    } catch {}
    return t;
  };
  require.d(exports, {
    isBotPlatform: function () {
      return u;
    },
    isUserParticipant: function () {
      return f;
    },
    isRejectedShare: function () {
      return _;
    },
    isSupportedConv: function () {
      return h;
    },
    isOfficialMember: function () {
      return p;
    },
    isCocoParticipant: function () {
      return g;
    },
    isBotConversation: function () {
      return m;
    },
    isCocoConversation: function () {
      return c;
    },
    isCocoSubConv: function () {
      return d;
    },
    isCocoSubPlatform: function () {
      return s;
    },
    isCocoPlatform: function () {
      return l;
    }
  });
}