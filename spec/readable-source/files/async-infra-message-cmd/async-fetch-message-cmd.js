// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'isUndefinedCheck'
// - Resolved require(600117) to 'is-undefined-check'
// - Renamed variable 'r' to 'chatCoreConstants'
// - Resolved require(746101) to 'chat-core-constants'
// - Renamed variable 'o' to 'chatMessageTransformer'
// - Resolved require(319937) to 'chat-message-transformer'
// - Renamed variable 's' to 'chatMessageServiceModule'
// - Resolved require(374681) to 'chat-message-service-module'
// - Renamed variable 'a' to 'messageReceiveHandler'
// - Resolved require(646429) to 'message-receive-handler'
// - Renamed variable 'l' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'c' to 'asyncFetchMsgCmdPluginId'
// - Resolved require(120094) to 'async-fetch-msg-cmd-plugin-id'
// - Updated imported property 'pk' to 'getChatMessageService' (module 374681)
// - Updated imported property 'V' to 'asyncFetchMsgCmdId' (module 120094)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'isUndefined' (module 600117)
// - Updated imported property 'm' to 'transformMessage' (module 319937)
// - Updated imported property 'Fz' to 'ChatSourceTypes' (module 746101)
// - Updated imported property 's' to 'handleReceivedMessage' (module 646429)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-cmd.e5ad8e66.js
         * chunkId: 94882
         * moduleId: 986176
         */
module.exports = function (module, exports, require) {
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var chatMessageTransformer = require("chat-message-transformer") /*id: 319937*/;
  var chatMessageServiceModule = require("chat-message-service-module") /*id: 374681*/;
  var messageReceiveHandler = require("message-receive-handler") /*id: 646429*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var asyncFetchMsgCmdPluginId = require("async-fetch-msg-cmd-plugin-id") /*id: 120094*/;
  function u(e, t, n) {
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
  async function d(e, t) {
    let {
      data: i
    } = await (await chatMessageServiceModule.getChatMessageService()).getMessageListByIndexList({
      conversation_id: e,
      message_index_list: [t]
    });
    if (i == null ? undefined : i.message_list?.length) {
      let {
        message_list: e
      } = i;
      return e[0];
    }
  }
  class p {
    constructor() {
      u(this, "pluginIdentifier", asyncFetchMsgCmdPluginId.asyncFetchMsgCmdId);
      u(this, "handleCmd", async e => {
        if (e.data.version === "1.0") {
          let {
            conversation_id: t,
            message_id: n,
            index: s
          } = e.data.data;
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: MessageUpdate",
            meta: {
              conversation_id: t,
              message_id: n,
              index: s
            }
          });
          if (!t || !n || isUndefinedCheck.isUndefined(s)) {
            return;
          }
          let c = await d(t, s);
          if (!c) {
            return;
          }
          let u = {
            ...(await chatMessageTransformer.transformMessage(c, {
              local_info: {
                finish_reply: true,
                from: chatCoreConstants.ChatSourceTypes.AsyncFetch
              }
            })),
            is_delta: false,
            message_id: n,
            conversation_id: t
          };
          messageReceiveHandler.handleReceivedMessage(u);
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    AsyncFetchMessageCmdPlugin: function () {
      return p;
    }
  });
}