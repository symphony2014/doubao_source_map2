// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'conversationSectionUpdater'
// - Resolved require(494219) to 'conversation-section-updater'
// - Renamed variable 'r' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'o' to 'conversationCreateSectionKey'
// - Resolved require(323339) to 'conversation-create-section-key'
// - Updated imported property 'w' to 'SectionMsgCmdPlugin' (module 323339)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property '_' to 'updateConversationSection' (module 494219)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 581385
         */
module.exports = function (module, exports, require) {
  var conversationSectionUpdater = require("conversation-section-updater") /*id: 494219*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var conversationCreateSectionKey = require("conversation-create-section-key") /*id: 323339*/;
  function s(e, t, n) {
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
  class a {
    constructor() {
      s(this, "pluginIdentifier", conversationCreateSectionKey.SectionMsgCmdPlugin);
      s(this, "handleCmd", e => {
        if (e.data.version === "1.0") {
          var n;
          var s;
          var l;
          let {
            conversation_id: c = ""
          } = e.data.data || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: ConversationCreateSection",
            meta: {
              conversation_id: c,
              section_id: (n = e.data.data) === null || n === undefined ? undefined : n.ext?.section_id
            }
          });
          if ((s = e.data.data) === null || s === undefined ? undefined : s.ext?.section_id) {
            conversationSectionUpdater.updateConversationSection(c, (l = e.data.data) === null || l === undefined ? undefined : l.ext?.section_id);
          }
        }
        if (e.data.version === "2.0") {
          let {
            conversation_id: t = "",
            new_section_id: n
          } = e.data.data.clear_msg_context_notify || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: ConversationCreateSection",
            meta: {
              conversation_id: t,
              new_section_id: n
            }
          });
          if (n) {
            conversationSectionUpdater.updateConversationSection(t, n);
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    ConversationCreateSectionMessageCmdPlugin: function () {
      return a;
    }
  });
}