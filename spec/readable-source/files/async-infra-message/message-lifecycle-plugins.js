// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'safeArrayFlattenUtil'
// - Resolved require(79349) to 'safe-array-flatten-util'
// - Renamed variable 'r' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'o' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 's' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'l' to 'asyncInfraMessageEmitter'
// - Resolved require(926298) to 'async-infra-message-emitter'
// - Renamed variable 'a' to 'chatWebappCollectionSymbols'
// - Resolved require(775228) to 'chat-webapp-collection-symbols'
// - Updated imported property 'w' to 'infraMessageEmitter' (module 926298)
// - Updated imported property 'T' to 'inWebAppSym' (module 775228)
// - Updated imported property 'f' to 'collectionSym' (module 775228)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'Z' to 'safeFlattenArray' (module 79349)
// - Updated imported property 'K9' to 'getMessageFromLink' (module 393180)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 345480
         */
module.exports = function (module, exports, require) {
  var safeArrayFlattenUtil = require("safe-array-flatten-util") /*id: 79349*/;
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var asyncInfraMessageEmitter = require("async-infra-message-emitter") /*id: 926298*/;
  var chatWebappCollectionSymbols = require("chat-webapp-collection-symbols") /*id: 775228*/;
  function c(e, t, n) {
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
  class u {
    async processMessageBefore(e, t) {
      for (let n of asyncInfraMessageEmitter.infraMessageEmitter.get("processMessageBefore")) {
        t = await n(e, t);
      }
      return t;
    }
    constructor() {
      c(this, "pluginIdentifier", chatWebappCollectionSymbols.inWebAppSym);
    }
  }
  class d {
    processMessageBefore(e, t) {
      let n = chatMessageStoreFactory.createMessageStore.getState();
      return safeArrayFlattenUtil.safeFlattenArray(t.map(e => {
        var o;
        let {
          conversationId: a
        } = e;
        if (!a) {
          return e;
        }
        if (e.operation && "replace" in e.operation && e.operation.replace?.messageLink) {
          let t = conversationMessageUtils_1.getMessageFromLink(n, a, (o = e.operation) === null || o === undefined ? undefined : o.replace?.messageLink);
          let c = t == null ? undefined : t.ext?.collection_id;
          if (!c || !messageContentTypeAndStatusChecker.G7Q(t)) {
            return e;
          }
          let u = n.messageLinkMap[a];
          let d = n.messageMap[a];
          return u.filter(e => {
            var n;
            return messageContentTypeAndStatusChecker.Yns(d[e.messageId]) && ((n = d[e.messageId]) === null || n === undefined ? undefined : n.ext?.collection_id) === c;
          }).map(n => n.messageId === t.message_id ? e : {
            ...e,
            reportParams: e.reportParams,
            operation: {
              replace: {
                messageLink: n
              }
            }
          });
        }
        return e;
      }));
    }
    constructor() {
      c(this, "pluginIdentifier", chatWebappCollectionSymbols.collectionSym);
    }
  }
  require.r(exports);
  require.d(exports, {
    CollectionMessageLifeCyclePlugin: function () {
      return d;
    },
    InWebAppMessageLifeCyclePlugin: function () {
      return u;
    }
  });
}