// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ac' to 'serviceContext'
// - Renamed export 'aC' to 'getChatService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 698136
         */
module.exports = function (module, exports, require) {
  var chatServiceManager = require("chat-service-manager") /*id: 25497*/;
  var chatEventEmitter = require("chat-event-emitter") /*id: 740942*/;
  var chatFeedStoreFactory = require("chat-feed-store-factory") /*id: 610697*/;
  var chatStoreInitialState = require("chat-store-initial-state") /*id: 243729*/;
  class l {
    resetStore() {
      chatFeedStoreFactory.useFeedStore.setState(chatStoreInitialState.chatInitialState);
    }
    constructor() {
      var e;
      var t;
      var n;
      t = undefined;
      if ((e = typeof (n = function (e, t) {
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
      }(e = "ctx", "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
      chatEventEmitter.chatEmitter.on("chat.service.resetAll", this.resetStore.bind(this));
    }
  }
  let s = chatServiceManager.getServiceContext();
  let u = () => {
    s.service ||= new l();
    return s.service;
  };
  require.d(exports, {
    serviceContext: function () {
      return s;
    },
    getChatService: function () {
      return u;
    }
  });
}