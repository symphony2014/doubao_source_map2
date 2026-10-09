// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatConversationTypes'
// - Resolved require(93192) to 'chat-conversation-types'
// - Renamed variable 'r' to 'chatConversationSelectors'
// - Resolved require(783144) to 'chat-conversation-selectors'
// - Renamed variable 'o' to 'skillReceiveIconComponent'
// - Resolved require(956389) to 'skill-receive-icon-component'
// - Renamed variable 'a' to 'asyncBusinessLayoutStyles'
// - Resolved require(926186) to 'async-business-layout-styles'
// - Renamed variable 's' to 'botShareButton'
// - Resolved require(233953) to 'bot-share-button'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'sX' to 'selectConversation' (module 783144)
// - Updated imported property 'z' to 'ConversationTypes' (module 93192)
// - Updated imported property 'K' to 'BotShareButton' (module 233953)
// - Updated imported property 'Z' to 'styles' (module 926186)
// - Updated imported property 'Z' to 'SkillReceiveIcon' (module 956389)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 462357
         */
module.exports = function (module, exports, require) {
  var chatConversationTypes = require("chat-conversation-types") /*id: 93192*/;
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var skillReceiveIconComponent = require("skill-receive-icon-component") /*id: 956389*/;
  var asyncBusinessLayoutStyles = require("async-business-layout-styles") /*id: 926186*/;
  var botShareButton = require("bot-share-button") /*id: 233953*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let c = e => {
    let {
      conversationId: t,
      chatType: n
    } = e;
    let c = chatConversationSelectors.selectConversation(t ?? "");
    let d = n === chatConversationTypes.ConversationTypes.Conversation ? t : undefined;
    let u = (c == null ? undefined : c.bot_id) || t;
    let h = n === chatConversationTypes.ConversationTypes.NewThread;
    if (!d || h) {
      return null;
    } else {
      return reactJsxRuntimeCoreReexport.jsx(botShareButton.BotShareButton, {
        theme: "borderless",
        className: asyncBusinessLayoutStyles.styles.botButton,
        botId: u,
        enterFrom: "floating_button",
        conversationId: d,
        needToolTip: false,
        icon: reactJsxRuntimeCoreReexport.jsx(skillReceiveIconComponent.SkillReceiveIcon, {}),
        "data-testid": "bot_share_button"
      });
    }
  };
  class d {
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
          value: c,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = c;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    BotShareButtonPlugin: function () {
      return d;
    }
  });
}