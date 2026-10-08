// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'l' to 'chatConversationBotId'
// - Resolved require(619792) to 'chat-conversation-bot-id'
// - Renamed variable 'a' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'o' to 'skillTypeConstants'
// - Resolved require(188057) to 'skill-type-constants'
// - Renamed variable 'd' to 'skillCardRenderer'
// - Resolved require(600813) to 'skill-card-renderer'
// - Renamed variable 's' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'E' to 'skillTypes' (module 188057)
// - Updated imported property 'sQ' to 'useStoreSelector' (module 537944)
// - Updated imported property 'B' to 'renderSkillCard' (module 600813)
// - Updated imported property 'S' to 'getConversationBotId' (module 619792)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 39249.e41cfe55.js
         * chunkId: 39249
         * moduleId: 578957
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var skillTypeConstants = require("skill-type-constants") /*id: 188057*/;
  var skillCardRenderer = require("skill-card-renderer") /*id: 600813*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = [skillTypeConstants.skillTypes.GaokaoYifenyiduan, skillTypeConstants.skillTypes.GaokaoControlscore, skillTypeConstants.skillTypes.GaokaoProvincescore];
  function u(e) {
    let {
      data: i,
      cardType: t,
      message: o,
      docId: u = "",
      alaSrc: m = ""
    } = e;
    let p = chatStoreManager.useStoreSelector("chatViewCoreStore").currentChatViewConfig;
    let h = messageContentTypeAndStatusChecker.ylu(o);
    let v = o.conversation_id || "";
    if (c.includes(t) && !h) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(skillCardRenderer.renderSkillCard, {
        data: i,
        cardType: t,
        trackEvent: (e, i) => {
          let n = chatConversationBotId.getConversationBotId(v);
          let r = {
            message_id: o == null ? undefined : o.message_id,
            conversation_id: v,
            bot_id: n,
            chat_type: p == null ? undefined : p.chatType,
            reply_id: o == null ? undefined : o.reply_id,
            card_code: t,
            with_text: !h,
            ala_src: m,
            doc_id: u,
            ...i
          };
          teaAnalyticsEventTracker.trackEvent(e, r);
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    AladdinCardWrapper: function () {
      return u;
    }
  });
}