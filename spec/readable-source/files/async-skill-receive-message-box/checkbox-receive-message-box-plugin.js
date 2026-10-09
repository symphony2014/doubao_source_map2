// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'deepEqualityUtil'
// - Resolved require(249434) to 'deep-equality-util'
// - Renamed variable 'r' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'a' to 'skillMessageActions'
// - Resolved require(331991) to 'skill-message-actions'
// - Renamed variable 'l' to 'chatMessageShareSelectStore'
// - Resolved require(764401) to 'chat-message-share-select-store'
// - Renamed variable 's' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'c' to 'chatConversationSelectors_2'
// - Resolved require(390347) to 'chat-conversation-selectors_2'
// - Renamed variable 'd' to 'chatFeedStoreFactory'
// - Resolved require(610697) to 'chat-feed-store-factory'
// - Renamed variable 'u' to 'chatConversationBotId'
// - Resolved require(619792) to 'chat-conversation-bot-id'
// - Renamed variable '_' to 'chatSkillPinTypeDeterminer'
// - Resolved require(926482) to 'chat-skill-pin-type-determiner'
// - Renamed variable 'm' to 'teaAnalyticsEventTracker'
// - Resolved require(236290) to 'tea-analytics-event-tracker'
// - Renamed variable 'v' to 'samanthaCheckboxComponents'
// - Resolved require(739837) to 'samantha-checkbox-components'
// - Renamed variable 'f' to 'shareMessageCheckboxSymbol'
// - Resolved require(836262) to 'share-message-checkbox-symbol'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'p' to 'chatMessageShareSelectStore' (module 764401)
// - Updated imported property 'X' to 'deepEqual' (module 249434)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'x' to 'CheckboxWrapper' (module 739837)
// - Updated imported property 'e' to 'messageActions' (module 331991)
// - Updated imported property 'jo' to 'getConversation' (module 390347)
// - Updated imported property 'NW' to 'useFeedStore' (module 610697)
// - Updated imported property 'S' to 'getConversationBotId' (module 619792)
// - Updated imported property 'yT' to 'determineSkillPinType' (module 926482)
// - Updated imported property 'o' to 'ShareMessageCheckBox' (module 836262)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 713825
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var o = classnamesUtils;
  var skillMessageActions = require("skill-message-actions") /*id: 331991*/;
  var chatMessageShareSelectStore = require("chat-message-share-select-store") /*id: 764401*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatConversationSelectors_2 = require("chat-conversation-selectors_2") /*id: 390347*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var samanthaCheckboxComponents = require("samantha-checkbox-components") /*id: 739837*/;
  var shareMessageCheckboxSymbol = require("share-message-checkbox-symbol") /*id: 836262*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function h(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let g = e => {
    let {
      message: t
    } = e;
    let n = t.conversation_id || "";
    let r = t.message_id || "";
    let {
      extraInfo: f,
      scene: h,
      messageIndexList: g,
      toggleMessage: b,
      getIsCheckboxDisabled: y
    } = chatMessageShareSelectStore.chatMessageShareSelectStore(e => ({
      scene: e.scene,
      isSelectMode: e.isSelectMode,
      messageIndexList: e.messageIndexList,
      toggleMessage: e.toggleMessage,
      getIsCheckboxDisabled: e.getIsCheckboxDisabled,
      extraInfo: e.extraInfo
    }), deepEqualityUtil.deepEqual);
    let w = g.includes(Number(t.index));
    let k = y({
      conversationId: n,
      messageIndex: Number(t.index),
      state: chatMessageStoreFactory.createMessageStore.getState()
    });
    return reactJsxRuntimeCoreReexport.jsx(samanthaCheckboxComponents.CheckboxWrapper, {
      className: o("pr-16 sm:pr-10 pointer-events-auto"),
      checked: w,
      onChange: () => {
        b({
          conversationId: n,
          messageIndex: Number(t.index),
          state: chatMessageStoreFactory.createMessageStore.getState()
        });
        if (h === skillMessageActions.messageActions.Share) {
          let o = chatConversationSelectors_2.getConversation(chatFeedStoreFactory.useFeedStore.getState(), n);
          if (teaAnalyticsEventTracker.trackEvent !== null && teaAnalyticsEventTracker.trackEvent !== undefined) {
            teaAnalyticsEventTracker.trackEvent("share_thread_check_box_click", {
              current_page: "chat",
              bot_id: chatConversationBotId.getConversationBotId(n),
              conversation_id: n,
              conversation_type: o == null ? undefined : o.conversation_type,
              chat_type: chatSkillPinTypeDeterminer.determineSkillPinType("", o == null ? undefined : o.conversation_id) || "other_default",
              content_id: r,
              content_type: "chat",
              skill_id: t.skill?.skill_id_no_default || "",
              index: t.index,
              entrance_type: (f == null ? undefined : f.entranceType) ?? "",
              select_type: w ? "cancel" : "select",
              check_type: "single"
            });
          }
        }
      },
      disabled: k
    });
  };
  class b {
    constructor() {
      h(this, "pluginIdentifier", shareMessageCheckboxSymbol.ShareMessageCheckBox);
      h(this, "Content", g);
    }
  }
  require.r(exports);
  require.d(exports, {
    CheckBoxReceiveMessageBoxLeftPlugin: function () {
      return b;
    }
  });
}