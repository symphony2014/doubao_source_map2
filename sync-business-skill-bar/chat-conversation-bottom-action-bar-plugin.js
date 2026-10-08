// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatConversationSelectors'
// - Resolved require(783144) to 'chat-conversation-selectors'
// - Renamed variable 'i' to 'chatSkillBarRenderer'
// - Resolved require(958066) to 'chat-skill-bar-renderer'
// - Renamed variable 'o' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'jw' to 'selectConvLink' (module 783144)
// - Updated imported property 'J' to 'renderSkillBar' (module 958066)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: sync-business-skill-bar.f60693d1.js
         * chunkId: 30411
         * moduleId: 80059
         */
module.exports = function (module, exports, require) {
  var chatConversationSelectors = require("chat-conversation-selectors") /*id: 783144*/;
  var chatSkillBarRenderer = require("chat-skill-bar-renderer") /*id: 958066*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = e => {
    let {
      chatId: t,
      chatType: n
    } = e;
    if (chatConversationSelectors.selectConvLink(t, n)) {
      return reactJsxRuntimeCoreReexport.jsx(chatSkillBarRenderer.renderSkillBar, {
        chatId: t,
        chatType: n,
        className: "pb-10"
      });
    } else {
      return null;
    }
  };
  class s {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var r = n.call(e, t || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = a;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    ConversationBottomActionBar: function () {
      return a;
    },
    SkillActionBarPlugin: function () {
      return s;
    }
  });
}