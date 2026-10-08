// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'eventEmitterWrapper_1'
// - Resolved require(740547) to 'event-emitter-wrapper_1'
// - Renamed variable 'r' to 'chatCoreConstants'
// - Resolved require(746101) to 'chat-core-constants'
// - Renamed variable 'a' to 'messageActionHandlers'
// - Resolved require(551587) to 'message-action-handlers'
// - Renamed variable 'o' to 'aliceMessageProtocolTransform'
// - Resolved require(842186) to 'alice-message-protocol-transform'
// - Renamed variable 's' to 'chatMessageTransformer'
// - Resolved require(319937) to 'chat-message-transformer'
// - Renamed variable 'l' to 'messageLifecycleHandler'
// - Resolved require(479240) to 'message-lifecycle-handler'
// - Renamed variable 'u' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'd' to 'messageActionTypes'
// - Resolved require(902861) to 'message-action-types'
// - Renamed variable 'm' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'c' to 'aliceMessageAckHandler'
// - Resolved require(621767) to 'alice-message-ack-handler'
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 't' to 'actionTypes' (module 902861)
// - Updated imported property 'O' to 'handleAliceAck' (module 621767)
// - Updated imported property 'm' to 'transformMessage' (module 319937)
// - Updated imported property 'Nu' to 'processMessageEvent' (module 551587)
// - Updated imported property 'o5' to 'setupMsgListeners' (module 551587)
// - Updated imported property 'o6' to 'messagesToAliceProtocol' (module 842186)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'Fz' to 'ChatSourceTypes' (module 746101)
// - Updated imported property 'Z' to 'eventEmitter' (module 740547)
// - Updated imported property 'UR' to 'handleMessageUpdate' (module 479240)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-alice.a1dd235d.js
         * chunkId: 20105
         * moduleId: 527137
         */
module.exports = function (module, exports, require) {
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var messageActionHandlers = require("message-action-handlers") /*id: 551587*/;
  var aliceMessageProtocolTransform = require("alice-message-protocol-transform") /*id: 842186*/;
  var chatMessageTransformer = require("chat-message-transformer") /*id: 319937*/;
  var messageLifecycleHandler = require("message-lifecycle-handler") /*id: 479240*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var messageActionTypes = require("message-action-types") /*id: 902861*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var aliceMessageAckHandler = require("alice-message-ack-handler") /*id: 621767*/;
  function f(e, t, n) {
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
  class p {
    async init() {
      if (this._initialed) {
        return;
      }
      this._initialed = true;
      let e = await chatIocServiceLoaderHook.loadServiceAsync("chatSocketService");
      if (e != null) {
        e.on("message", this._onMessage);
      }
    }
    pullMessage(e) {}
    cancelTask(e) {}
    _onMessage(e) {
      let {
        data: t,
        trace_id: n
      } = e;
      if (typeof t == "object" && "event_type" in t && t.event_type === messageActionTypes.actionTypes.Message) {
        this._handleEvent({
          event: t,
          trace_id: n
        });
      }
    }
    async _handleEvent(e) {
      let {
        event: t,
        trace_id: n
      } = e;
      let i = {
        ...t
      };
      if (t.event_type === messageActionTypes.actionTypes.Message && t.message) {
        var o;
        aliceMessageAckHandler.handleAliceAck(t.message);
        let e = await chatMessageTransformer.transformMessage(t.message, {
          local_info: {
            from: this.from,
            trace_id: n,
            log_id: (t == null ? undefined : (o = t.message) === null || o === undefined ? undefined : o.ext?.inner_log_id) || n
          }
        });
        i.message = {
          ...e,
          is_delta: false
        };
      }
      if (t.event_type === messageActionTypes.actionTypes.Message && t.message_list) {
        let e = await Promise.all(t.message_list.map(async (e, t, i) => {
          aliceMessageAckHandler.handleAliceAck(e);
          return {
            ...(await chatMessageTransformer.transformMessage(e, {
              local_info: {
                from: this.from,
                trace_id: n,
                message_list_count: i.length,
                in_message_list_pos: t
              }
            })),
            is_delta: false
          };
        }));
        i.message_list = e;
      }
      messageActionHandlers.processMessageEvent(i, this);
    }
    async sendMessage(e, t) {
      let n = await chatIocServiceLoaderHook.loadServiceAsync("chatSocketService");
      let i = await aliceMessageProtocolTransform.messagesToAliceProtocol(e);
      if (n != null) {
        n.send(safeJsonUtils.safeStringify(i), t);
      }
    }
    async drop() {
      let e = await chatIocServiceLoaderHook.loadServiceAsync("chatSocketService");
      if (e != null) {
        e.off("message", this._onMessage);
      }
    }
    resumeTask(e) {}
    constructor() {
      f(this, "_initialed", false);
      f(this, "from", chatCoreConstants.ChatSourceTypes.AliceChatSocket);
      f(this, "eventEmitter", new eventEmitterWrapper_1.eventEmitter());
      this._handleEvent = this._handleEvent.bind(this);
      this._onMessage = this._onMessage.bind(this);
      messageActionHandlers.setupMsgListeners([this], {
        message: messageLifecycleHandler.handleMessageUpdate
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    AliceChatSocketProtocolPlugin: function () {
      return p;
    }
  });
}