// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'botStoreManager'
// - Resolved require(359169) to 'bot-store-manager'
// - Renamed variable 'r' to 'chatConversationTypes'
// - Resolved require(93192) to 'chat-conversation-types'
// - Renamed variable 'o' to 'chatMessagingPredicateUtils'
// - Resolved require(701382) to 'chat-messaging-predicate-utils'
// - Renamed variable 'a' to 'chatConversationSelectors'
// - Resolved require(783144) to 'chat-conversation-selectors'
// - Renamed variable 's' to 'chatConversationCheckers'
// - Resolved require(104471) to 'chat-conversation-checkers'
// - Renamed variable 'l' to 'chatUserInfoActions'
// - Resolved require(400206) to 'chat-user-info-actions'
// - Renamed variable 'c' to 'shuffleIconRtlComponent'
// - Resolved require(297545) to 'shuffle-icon-rtl-component'
// - Renamed variable 'd' to 'asyncBusinessLayoutStyles'
// - Resolved require(926186) to 'async-business-layout-styles'
// - Renamed variable 'u' to 'chatLayoutConstants'
// - Resolved require(680824) to 'chat-layout-constants'
// - Renamed variable 'h' to 'botSettingRouteToggle'
// - Resolved require(983173) to 'bot-setting-route-toggle'
// - Renamed variable 'f' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'sX' to 'selectConversation' (module 783144)
// - Updated imported property 'z' to 'ConversationTypes' (module 93192)
// - Updated imported property 'Lp' to 'isBotConversation' (module 701382)
// - Updated imported property 'Wp' to 'selectBotInfo' (module 359169)
// - Updated imported property 'n5' to 'getUserIdStr' (module 400206)
// - Updated imported property 'Xo' to 'isSupportedConv' (module 104471)
// - Updated imported property 'yy' to 'ModerationStatus' (module 680824)
// - Updated imported property 'A' to 'BotSettingButton' (module 983173)
// - Updated imported property 'Z' to 'styles' (module 926186)
// - Updated imported property 'Z' to 'ShuffleIcon' (module 297545)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 545201
         */
module.exports = function (module, exports, require) {
  var botStoreManager = require("bot-store-manager") /*id: 359169*/;
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatMessagingPredicateUtils = require("chat-messaging-predicate-utils") /*id: 701382*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatConversationCheckers = require("chat-conversation-checkers") /*id: 104471*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  var shuffleIconRtlComponent = require("shuffle-icon-rtl-component") /*id: 297545*/;
  var asyncBusinessLayoutStyles = require("async-business-layout-styles") /*id: 926186*/;
  var chatLayoutConstants = require("chat-layout-constants") /*id: 680824*/;
  var botSettingRouteToggle = require("bot-setting-route-toggle") /*id: 983173*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let p = e => {
    let {
      conversationId: m,
      chatType: v
    } = e;
    let g = chatConversationSelectors.selectConversation(m ?? "");
    let _ = v === chatConversationTypes.ConversationTypes.Conversation ? m : undefined;
    let b = v === chatConversationTypes.ConversationTypes.Conversation ? g == null ? undefined : g.bot_id : chatMessagingPredicateUtils.isBotConversation(v) ? m : undefined;
    let y = botStoreManager.selectBotInfo(b || "") ?? {};
    let w = (y == null ? undefined : y.creator_info?.creator_id) !== undefined && (y == null ? undefined : y.creator_info?.creator_id) === chatUserInfoActions.getUserIdStr();
    if (g && !chatConversationCheckers.isSupportedConv(g) && (w && (y == null ? undefined : y.disabled_tag) !== chatLayoutConstants.ModerationStatus.Delete || !w && !y.disabled && _)) {
      return reactJsxRuntimeCoreReexport.jsx(botSettingRouteToggle.BotSettingButton, {
        theme: "borderless",
        className: asyncBusinessLayoutStyles.styles.botButton,
        enterMethod: "floating_button",
        chatId: m || "",
        icon: reactJsxRuntimeCoreReexport.jsx(shuffleIconRtlComponent.ShuffleIcon, {}),
        "data-testid": "bot_setting_button"
      });
    } else {
      return null;
    }
  };
  class m {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: p,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = p;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    BotSettingButtonPlugin: function () {
      return m;
    }
  });
}