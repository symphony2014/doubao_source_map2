// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'b4' to 'ChatMessageService'
// - Renamed export 'd5' to 'getChatMessageService'
// - Renamed export 'vh' to 'chatMessageServiceContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 30286.f2691b3b.js
         * chunkId: 30286
         * moduleId: 701777
         */
module.exports = function (module, exports, require) {
  var chatServiceManager = require("chat-service-manager") /*id: 25497*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var eventEmitterInstance = require("event-emitter-instance") /*id: 842485*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var chatStateFactory = require("chat-state-factory") /*id: 432677*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var chatMessageSender_2 = require("chat-message-sender_2") /*id: 656716*/;
  var chatSessionInitManager = require("chat-session-init-manager") /*id: 976892*/;
  function p(e, t, o) {
    var a;
    if ((t = typeof (a = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var o = e[Symbol.toPrimitive];
      if (o !== undefined) {
        var a = o.call(e, t || "default");
        if (typeof a != "object") {
          return a;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? a : a + "") in e) {
      Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = o;
    }
    return e;
  }
  class m {
    _clearSendMessageCallbacks() {
      let {
        _sendMessageCallbacks: e
      } = this;
      this._sendMessageCallbacks = [];
      e.forEach(e => e());
    }
    resetStore() {
      try {
        chatMessageStoreFactory.createMessageStore.setState(chatStateFactory.initialChatState);
        chatStoreManager.getAsyncStore("samanthaChatProtocolStore").then(e => {
          e.setState({
            samanthaChatTaskMap: {}
          });
        });
        chatStoreManager.getAsyncStore("aliceChatProtocolStore").then(e => {
          e.setState({
            aliceChatStreamTaskMap: {}
          });
        });
      } catch (e) {
        loggerServiceCore.defaultLogger.console.info("reset message service store failed");
      }
    }
    async tryInitMessageProtocolService(e) {
      if (e) {
        this._sendMessageCallbacks.push(e);
      }
      if (this._initMessageProtocolServiceConfig?.config) {
        if (!this._messageServiceIsInitialed) {
          await chatSessionInitManager.wrappedInitChat(this._initMessageProtocolServiceConfig);
          this._messageServiceIsInitialed = true;
          await chatSessionInitManager.checkRateLimit();
        }
        this._clearSendMessageCallbacks();
        return Promise.resolve({
          isInitialed: true
        });
      } else {
        return Promise.resolve({
          isInitialed: false
        });
      }
    }
    updateInitMessageProtocolServiceConfig(e) {
      this._initMessageProtocolServiceConfig = e;
    }
    handleAppInitialed() {
      this._appIsInitialed = true;
      this.tryInitMessageProtocolService();
    }
    initEventBinding() {
      chatEventEmitter.chatEmitter.on("chat.service.resetAll", this.resetStore.bind(this));
      eventEmitterInstance.eventEmitter.on("app.init", this.handleAppInitialed.bind(this));
    }
    async sendMessage(e, t) {
      let o = await chatIocServiceLoaderHook.loadServiceAsync("chatMessageService");
      if (o == null ? undefined : o.deprecatedSendMessage) {
        return o.deprecatedSendMessage(e, t);
      } else {
        return chatMessageSender_2.sendMessage(e, t);
      }
    }
    destroy() {
      chatEventEmitter.chatEmitter.off("chat.service.resetAll", this.resetStore);
      eventEmitterInstance.eventEmitter.off("app.init", this.handleAppInitialed);
    }
    constructor(e) {
      p(this, "ctx", undefined);
      p(this, "_appIsInitialed", false);
      p(this, "_initMessageProtocolServiceConfig", undefined);
      p(this, "_messageServiceIsInitialed", false);
      p(this, "_sendMessageCallbacks", []);
      let {
        messageProtocolServiceOptions: t
      } = e;
      this._initMessageProtocolServiceConfig = t;
      this.initEventBinding();
      this._appIsInitialed = false;
      this._messageServiceIsInitialed = false;
    }
  }
  let _ = chatServiceManager.getServiceContext();
  let g = e => {
    _.service ||= new m(e);
    return _.service;
  };
  require.d(exports, {
    ChatMessageService: function () {
      return m;
    },
    getChatMessageService: function () {
      return g;
    },
    chatMessageServiceContext: function () {
      return _;
    }
  });
}