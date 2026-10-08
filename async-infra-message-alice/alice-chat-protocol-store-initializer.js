// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reduxDevtoolsPersistIntegration_1'
// - Resolved require(688840) to 'redux-devtools-persist-integration_1'
// - Renamed variable 'r' to 'reactStoreFactory'
// - Resolved require(960791) to 'react-store-factory'
// - Renamed variable 'a' to 'objectValuesHelper'
// - Resolved require(506581) to 'object-values-helper'
// - Renamed variable 'o' to 'objectExcludeFilterUtil'
// - Resolved require(194068) to 'object-exclude-filter-util'
// - Renamed variable 's' to 'immerCoreImplementation'
// - Resolved require(828474) to 'immer-core-implementation'
// - Renamed variable 'l' to 'chatMessagingConstants'
// - Resolved require(375543) to 'chat-messaging-constants'
// - Renamed variable 'u' to 'storagePersistenceUtil'
// - Resolved require(143136) to 'storage-persistence-util'
// - Updated imported property 'Uy' to 'produce' (module 828474)
// - Updated imported property 's8' to 'thinkingMessageId' (module 375543)
// - Updated imported property 'Z' to 'getObjectValues' (module 506581)
// - Updated imported property 'Z' to 'filterObjectExclude' (module 194068)
// - Updated imported property 'C1' to 'createPersistOptions' (module 143136)
// - Updated imported property 'tJ' to 'persistMiddleware' (module 688840)
// - Updated imported property 'XR' to 'withDevToolsEnhancer' (module 688840)
// - Updated imported property 'mW' to 'devToolsMiddleware' (module 688840)
// - Updated imported property 'Ue' to 'createStore' (module 960791)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-alice.a1dd235d.js
         * chunkId: 20105
         * moduleId: 295308
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatMessagingConstants = require("chat-messaging-constants") /*id: 375543*/;
  var storagePersistenceUtil = require("storage-persistence-util") /*id: 143136*/;
  let d = e => ({
    aliceChatStreamTaskMap: e.aliceChatStreamTaskMap
  });
  let m = (e, t) => ({
    aliceChatStreamTaskMap: {},
    aliceChatFallbackInitConfig: {},
    aliceChatStreamInitConfig: {},
    updateAliceChatStreamTask: (n, i) => {
      e(immerCoreImplementation.produce(e => {
        let t = e.aliceChatStreamTaskMap[n];
        if (t) {
          let {
            completionMessageMap: e
          } = t;
          e[i.message_id || chatMessagingConstants.thinkingMessageId] = i;
        }
      }));
      return t().aliceChatStreamTaskMap[n];
    },
    createAliceChatStreamTask(n, i) {
      let r = t().aliceChatStreamTaskMap[n];
      return r || (e(immerCoreImplementation.produce(e => {
        if (n) {
          let {
            message_id: t
          } = i;
          let r = {
            createTime: Date.now(),
            chunkSeq: Number((i == null ? undefined : i.chunk_seq) || 0),
            replyId: n,
            conversationId: (i == null ? undefined : i.conversation_id) || "",
            completionMessageMap: {
              [t || chatMessagingConstants.thinkingMessageId]: i
            }
          };
          e.aliceChatStreamTaskMap[n] = r;
        }
      })), t().aliceChatStreamTaskMap[n]);
    },
    removeAliceChatStreamTask(t) {
      e(immerCoreImplementation.produce(e => {
        delete e.aliceChatStreamTaskMap[t];
      }));
    }
  });
  let c = (e, t) => {
    let i = {
      ...t,
      ...(e || {})
    };
    if (objectValuesHelper.getObjectValues(i.aliceChatStreamTaskMap)?.length) {
      return {
        ...i,
        aliceChatStreamTaskMap: objectExcludeFilterUtil.filterObjectExclude(i.aliceChatStreamTaskMap, e => Date.now() - e.createTime > 300000)
      };
    } else {
      return i;
    }
  };
  let f = async e => {
    let {
      prefix: t,
      isEnableDebug: n,
      reduxDevToolsSnapshot: a,
      merge: o,
      partialize: s,
      storage: l
    } = e;
    let f = storagePersistenceUtil.createPersistOptions({
      name: "chat-alice-chat-protocol-store",
      prefix: t || "default",
      version: 1.5,
      partialize: s ?? d,
      storage: l,
      merge: o ?? c
    });
    let p = reduxDevtoolsPersistIntegration_1.persistMiddleware(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(m), f);
    if (n && a) {
      let e = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.devToolsMiddleware(p, {
        name: `${t}-chat-samantha-chat-protocol-store`
      }));
      if (e.persist.hasHydrated()) {
        return e;
      } else {
        return await new Promise(t => e.persist.onFinishHydration(n => {
          t(e);
        }));
      }
    }
    {
      let e = reactStoreFactory.createStore()(p);
      if (e.persist.hasHydrated()) {
        return e;
      } else {
        return await new Promise(t => e.persist.onFinishHydration(n => {
          t(e);
        }));
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    initAliceChatProtocolStore: function () {
      return f;
    }
  });
}