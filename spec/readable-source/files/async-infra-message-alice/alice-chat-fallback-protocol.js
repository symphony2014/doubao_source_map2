// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'throttledPathFilterStringify'
// - Resolved require(245841) to 'throttled-path-filter-stringify'
// - Renamed variable 'r' to 'emptyExportFunction'
// - Resolved require(232077) to 'empty-export-function'
// - Renamed variable 'a' to 'objectValuesHelper'
// - Resolved require(506581) to 'object-values-helper'
// - Renamed variable 'o' to 'eventEmitterWrapper_1'
// - Resolved require(740547) to 'event-emitter-wrapper_1'
// - Renamed variable 's' to 'chatCoreConstants'
// - Resolved require(746101) to 'chat-core-constants'
// - Renamed variable 'l' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'u' to 'messageActionHandlers'
// - Resolved require(551587) to 'message-action-handlers'
// - Renamed variable 'd' to 'aliceMessageProtocolTransform'
// - Resolved require(842186) to 'alice-message-protocol-transform'
// - Renamed variable 'm' to 'chatMessageTransformer'
// - Resolved require(319937) to 'chat-message-transformer'
// - Renamed variable 'c' to 'messageLifecycleHandler'
// - Resolved require(479240) to 'message-lifecycle-handler'
// - Renamed variable 'f' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'p' to 'configSyncLoader'
// - Resolved require(985012) to 'config-sync-loader'
// - Renamed variable 'g' to 'chatMessagingConstants'
// - Resolved require(375543) to 'chat-messaging-constants'
// - Renamed variable '_' to 'chatLogIdExtractor'
// - Resolved require(738448) to 'chat-log-id-extractor'
// - Renamed variable 'h' to 'messageActionTypes'
// - Resolved require(902861) to 'message-action-types'
// - Renamed variable 'b' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'v' to 'chatMessageTypes'
// - Resolved require(243788) to 'chat-message-types'
// - Renamed variable 'y' to 'safeJsonUtils'
// - Resolved require(384606) to 'safe-json-utils'
// - Renamed variable 'E' to 'utf8EncodingUtils_1'
// - Resolved require(858081) to 'utf8-encoding-utils_1'
// - Renamed variable 'N' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'T' to 'base64EncoderDecoder'
// - Resolved require(152465) to 'base64-encoder-decoder'
// - Renamed variable 'I' to 'aliceMessageAckHandler'
// - Resolved require(621767) to 'alice-message-ack-handler'
// - Updated imported property 't' to 'actionTypes' (module 902861)
// - Updated imported property 'm' to 'transformMessage' (module 319937)
// - Updated imported property 'O' to 'handleAliceAck' (module 621767)
// - Updated imported property 'Nu' to 'processMessageEvent' (module 551587)
// - Updated imported property 'o5' to 'setupMsgListeners' (module 551587)
// - Updated imported property 'TB' to 'getAsyncStore' (module 537944)
// - Updated imported property 'o6' to 'messagesToAliceProtocol' (module 842186)
// - Updated imported property 'kz' to 'MessageApiService' (module 147875)
// - Updated imported property 'h' to 'encodeBase64' (module 152465)
// - Updated imported property 't' to 'decodeBase64' (module 152465)
// - Updated imported property 'B' to 'safeStringify' (module 384606)
// - Updated imported property 'R' to 'safeParse' (module 384606)
// - Updated imported property '_f' to 'thinkingTimeout' (module 375543)
// - Updated imported property 'z4' to 'debounceDelay' (module 375543)
// - Updated imported property 'Vb' to 'messageTimeout' (module 375543)
// - Updated imported property 'Gr' to 'sessionTimeout' (module 375543)
// - Updated imported property 'K' to 'Utf8Utils' (module 858081)
// - Updated imported property 'm' to 'getLogId' (module 738448)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'throttledPathStr' (module 245841)
// - Updated imported property '$' to 'getConfig' (module 985012)
// - Updated imported property 'Z' to 'emptyFunction' (module 232077)
// - Updated imported property 'Z' to 'getObjectValues' (module 506581)
// - Updated imported property 'Fz' to 'ChatSourceTypes' (module 746101)
// - Updated imported property 'Z' to 'eventEmitter' (module 740547)
// - Updated imported property 'UR' to 'handleMessageUpdate' (module 479240)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-alice.a1dd235d.js
         * chunkId: 20105
         * moduleId: 371190
         */
module.exports = function (module, exports, require) {
  var throttledPathFilterStringify = require("throttled-path-filter-stringify") /*id: 245841*/;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var chatCoreConstants = require("chat-core-constants") /*id: 746101*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var messageActionHandlers = require("message-action-handlers") /*id: 551587*/;
  var aliceMessageProtocolTransform = require("alice-message-protocol-transform") /*id: 842186*/;
  var chatMessageTransformer = require("chat-message-transformer") /*id: 319937*/;
  var messageLifecycleHandler = require("message-lifecycle-handler") /*id: 479240*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var configSyncLoader = require("config-sync-loader") /*id: 985012*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var chatLogIdExtractor = require("chat-log-id-extractor") /*id: 738448*/;
  var messageActionTypes = require("message-action-types") /*id: 902861*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var utf8EncodingUtils_1 = require("utf8-encoding-utils_1") /*id: 858081*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var base64EncoderDecoder = require("base64-encoder-decoder") /*id: 152465*/;
  var aliceMessageAckHandler = require("alice-message-ack-handler") /*id: 621767*/;
  function S(e, t, n) {
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
  class A {
    init(e) {
      if (!this._initialed) {
        this._initialed = true;
        this._config = e;
      }
    }
    async _handleEvent(e, t) {
      let n = {
        ...e
      };
      if (e.event_type === messageActionTypes.actionTypes.Message && e.message) {
        let i = await chatMessageTransformer.transformMessage(aliceMessageAckHandler.handleAliceAck(e.message), {
          local_info: {
            from: this.from,
            retried: true,
            log_id: t
          }
        });
        n.message = {
          ...i,
          is_delta: false
        };
      }
      if (e.event_type === messageActionTypes.actionTypes.Message && e.message_list) {
        let i = await Promise.all(e.message_list.map(async (e, n, i) => ({
          ...(await chatMessageTransformer.transformMessage(e, {
            local_info: {
              from: this.from,
              retried: true,
              log_id: t,
              message_list_count: i.length,
              in_message_list_pos: n
            }
          })),
          is_delta: false
        })));
        n.message_list = i;
      }
      messageActionHandlers.processMessageEvent(n, this);
    }
    async sendMessage(e) {
      let n = await chatStoreManager.getAsyncStore("aliceChatProtocolStore");
      if (!this._initialed) {
        this.init(n.getState().aliceChatFallbackInitConfig);
      }
      if (!this._initialed) {
        return;
      }
      let i = await aliceMessageProtocolTransform.messagesToAliceProtocol(e);
      apiServicesCollection.MessageApiService.MessageReplay({
        payload: base64EncoderDecoder.encodeBase64(new TextEncoder().encode(safeJsonUtils.safeStringify(i)))
      }, {
        overrideParams: {
          aid: this._config?.ws_app_id
        },
        overrideConfig: {
          timeout: chatMessagingConstants.thinkingTimeout
        }
      }).then(e => {
        if (!e.payload) {
          throw Error("Invalid ack message");
        }
        let n = base64EncoderDecoder.decodeBase64(e.payload);
        let i = safeJsonUtils.safeParse(utf8EncodingUtils_1.Utf8Utils.read(n, 0, n.byteLength), {});
        this._handleEvent(i, chatLogIdExtractor.getLogId(e));
        if (this !== null && this !== undefined) {
          this.pullMessage([{
            reply_id: i.message?.reply_id
          }]);
        }
      }).catch(e => {
        loggerServiceCore.defaultLogger.console.info(`get ack message failed: ${e.message}`);
      });
    }
    _fetchMessage(e) {
      apiServicesCollection.MessageApiService.GetMessageReply({
        message_id: e.reply_id || e.message_id,
        conversation_id: e.conversation_id
      }, {
        overrideConfig: {
          timeout: chatMessagingConstants.debounceDelay
        }
      }).then(t => {
        var r;
        this._pullMessage(e, chatMessagingConstants.messageTimeout);
        if (!((r = t.data) === null || r === undefined ? undefined : r.message_list?.length)) {
          throw Error("message_list is empty");
        }
        let s = t.data.message_list.filter(e => !messageContentTypeAndStatusChecker.DRY(e));
        s.sort((e, t) => (Number(e.index) || 0) - (Number(t.index) || 0));
        for (let e of s) {
          this._handleEvent({
            message: e,
            event_type: messageActionTypes.actionTypes.Message
          }, chatLogIdExtractor.getLogId(t));
          if (e == null ? undefined : e.ext?.sp) {
            this._handleEvent({
              message: {
                ...throttledPathFilterStringify.throttledPathStr(e, ["conversation_id", "section_id", "message_id", "reply_id", "message_type"]),
                content_type: chatMessageTypes.ContentType.Suggest,
                content: safeJsonUtils.safeStringify({
                  suggest: safeJsonUtils.safeParse(e == null ? undefined : e.ext?.sp, {}) || ""
                }),
                ext: {},
                meta_infos: []
              },
              event_type: messageActionTypes.actionTypes.Message
            }, chatLogIdExtractor.getLogId(t));
          }
        }
      }).catch(t => {
        this._pullMessage(e, chatMessagingConstants.messageTimeout);
        loggerServiceCore.defaultLogger.console.info(`get message reply failed: ${t.message}`);
      });
    }
    _pullMessage(e, t) {
      var n;
      let {
        reply_id: i
      } = e;
      if (!i || i === "0") {
        loggerServiceCore.defaultLogger.console.info("reply_id is empty, skip pull message");
        return;
      }
      if (!this._pullMessageTasks[i]) {
        loggerServiceCore.defaultLogger.console.info("task is empty, skip pull message");
        return;
      }
      if (Date.now() - this._pullMessageTasks[i].expired > 0) {
        return;
      }
      if ((n = this._pullMessageTasks[i]) !== null && n !== undefined) {
        n.clear();
      }
      let r = setTimeout(() => {
        this._fetchMessage(e);
      }, t);
      let a = () => {
        clearTimeout(r);
      };
      this._pullMessageTasks[i].clear = a;
      this._pullMessageTasks[i].finish = () => {
        a();
        delete this._pullMessageTasks[i];
      };
    }
    pullMessage(e) {
      let {
        reply_id: t
      } = e[0];
      if (t && t !== "0") {
        if (this._pullMessageTasks[t]) {
          this._pullMessageTasks[t].clear();
        } else {
          let {
            receiveMessageStartTimeout: e = chatMessagingConstants.sessionTimeout
          } = configSyncLoader.getConfig("chatMessageConfig") || {};
          this._pullMessageTasks[t] = {
            reply_id: t,
            finish: emptyExportFunction.emptyFunction,
            clear: emptyExportFunction.emptyFunction,
            expired: Date.now() + e
          };
        }
        this._pullMessage(e[0], 10000);
      }
    }
    cancelTask(e) {
      var t;
      if ((t = this._pullMessageTasks[e]) !== null && t !== undefined) {
        t.finish();
      }
    }
    drop() {
      for (let e of objectValuesHelper.getObjectValues(this._pullMessageTasks)) {
        e.finish();
      }
      this._pullMessageTasks = {};
    }
    resumeTask(e) {}
    constructor() {
      S(this, "from", chatCoreConstants.ChatSourceTypes.AliceChatFallback);
      S(this, "_config", undefined);
      S(this, "_pullMessageTasks", {});
      S(this, "_initialed", false);
      S(this, "eventEmitter", new eventEmitterWrapper_1.eventEmitter());
      this._handleEvent = this._handleEvent.bind(this);
      messageActionHandlers.setupMsgListeners([this], {
        message: messageLifecycleHandler.handleMessageUpdate
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    AliceChatFallbackProtocolPlugin: function () {
      return A;
    }
  });
}