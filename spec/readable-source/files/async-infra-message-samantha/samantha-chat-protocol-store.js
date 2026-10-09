// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reduxDevtoolsPersistIntegration_1'
// - Resolved require(688840) to 'redux-devtools-persist-integration_1'
// - Renamed variable 'a' to 'reactStoreFactory'
// - Resolved require(960791) to 'react-store-factory'
// - Renamed variable 'o' to 'objectValuesHelper'
// - Resolved require(506581) to 'object-values-helper'
// - Renamed variable 's' to 'objectExcludeFilterUtil'
// - Resolved require(194068) to 'object-exclude-filter-util'
// - Renamed variable 'r' to 'immerCoreImplementation'
// - Resolved require(828474) to 'immer-core-implementation'
// - Renamed variable 'l' to 'versionConstants'
// - Resolved require(424723) to 'version-constants'
// - Renamed variable 'd' to 'storagePersistenceUtil'
// - Resolved require(143136) to 'storage-persistence-util'
// - Updated imported property 'Uy' to 'produce' (module 828474)
// - Updated imported property 'it' to 'versionConstants' (module 424723)
// - Updated imported property 'Z' to 'getObjectValues' (module 506581)
// - Updated imported property 'Z' to 'filterObjectExclude' (module 194068)
// - Updated imported property 'C1' to 'createPersistOptions' (module 143136)
// - Updated imported property 'tJ' to 'persistMiddleware' (module 688840)
// - Updated imported property 'XR' to 'withDevToolsEnhancer' (module 688840)
// - Updated imported property 'mW' to 'devToolsMiddleware' (module 688840)
// - Updated imported property 'Ue' to 'createStore' (module 960791)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-samantha.d45a9574.js
         * chunkId: 7782
         * moduleId: 758773
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var objectValuesHelper = require("object-values-helper") /*id: 506581*/;
  var objectExcludeFilterUtil = require("object-exclude-filter-util") /*id: 194068*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var versionConstants = require("version-constants") /*id: 424723*/;
  var storagePersistenceUtil = require("storage-persistence-util") /*id: 143136*/;
  let c = e => ({
    samanthaChatTaskMap: e.samanthaChatTaskMap,
    samanthaChatAsyncTaskMap: e.samanthaChatAsyncTaskMap
  });
  let u = (e, t) => ({
    samanthaChatTaskMap: {},
    samanthaChatAsyncTaskMap: {},
    updateSamanthaChatAsyncTaskEventId: (i, n) => {
      e(immerCoreImplementation.produce(e => {
        let t = e.samanthaChatAsyncTaskMap[i];
        if (t) {
          t.lastEventId = n;
        }
      }));
      return t().samanthaChatAsyncTaskMap[i];
    },
    updateSamanthaChatAsyncTaskMessage: (i, n) => {
      e(immerCoreImplementation.produce(e => {
        let t = e.samanthaChatAsyncTaskMap[i];
        if (t) {
          t.message = n;
        }
      }));
      return t().samanthaChatAsyncTaskMap[i];
    },
    createSamanthaAsyncChatTask(i, n, a) {
      let o = t().samanthaChatAsyncTaskMap[i];
      return o || (e(immerCoreImplementation.produce(e => {
        if (i) {
          e.samanthaChatAsyncTaskMap[i] = {
            createTime: Date.now(),
            taskId: i,
            sentEvent: n,
            message: a
          };
        }
      })), t().samanthaChatAsyncTaskMap[i]);
    },
    removeSamanthaAsyncChatTask(t) {
      e(immerCoreImplementation.produce(e => {
        delete e.samanthaChatAsyncTaskMap[t];
      }));
    },
    updateSamanthaChatTaskMessage: (i, n, a) => {
      e(immerCoreImplementation.produce(e => {
        let t = e.samanthaChatTaskMap[i];
        if (t) {
          t.messages ||= {};
          t.messages[n] = a;
        }
      }));
      return t().samanthaChatTaskMap[i];
    },
    updateSamanthaChatTaskProtoVersion: (i, n) => {
      e(immerCoreImplementation.produce(e => {
        let t = e.samanthaChatTaskMap[i];
        if (t) {
          t.protoVersion = n;
        }
      }));
      return t().samanthaChatTaskMap[i];
    },
    updateSamanthaChatTaskEventId: (i, n) => {
      e(immerCoreImplementation.produce(e => {
        let t = e.samanthaChatTaskMap[i];
        if (t) {
          t.lastEventId = n;
        }
      }));
      return t().samanthaChatTaskMap[i];
    },
    createSamanthaChatTask(i, n) {
      let a = t().samanthaChatTaskMap[i];
      return a || (e(immerCoreImplementation.produce(e => {
        if (i) {
          e.samanthaChatTaskMap[i] = {
            createTime: Date.now(),
            localMessageId: i,
            sentEvent: n,
            protoVersion: versionConstants.versionConstants.VERSION_NORAML
          };
        }
      })), t().samanthaChatTaskMap[i]);
    },
    removeSamanthaChatTask(t) {
      e(immerCoreImplementation.produce(e => {
        delete e.samanthaChatTaskMap[t];
      }));
    }
  });
  let _ = (e, t) => {
    let n = {
      ...t,
      ...(e || {})
    };
    if (objectValuesHelper.getObjectValues(n.samanthaChatTaskMap)?.length) {
      return {
        ...n,
        samanthaChatTaskMap: objectExcludeFilterUtil.filterObjectExclude(n.samanthaChatTaskMap, e => Date.now() - e.createTime > 300000),
        samanthaChatAsyncTaskMap: objectExcludeFilterUtil.filterObjectExclude(n.samanthaChatAsyncTaskMap, e => Date.now() - e.createTime > 3600000)
      };
    } else {
      return n;
    }
  };
  let h = async e => {
    let {
      prefix: t,
      isEnableDebug: i,
      reduxDevToolsSnapshot: o,
      merge: s,
      partialize: r,
      storage: l
    } = e;
    let h = storagePersistenceUtil.createPersistOptions({
      name: "chat-samantha-chat-protocol-store",
      prefix: t || "default",
      version: 1.5,
      partialize: r ?? c,
      storage: l,
      merge: s ?? _
    });
    let v = reduxDevtoolsPersistIntegration_1.persistMiddleware(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(u), h);
    if (i && o) {
      let e = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.devToolsMiddleware(v, {
        name: `${t}-chat-samantha-chat-protocol-store`
      }));
      if (e.persist.hasHydrated()) {
        return e;
      } else {
        return await new Promise(t => e.persist.onFinishHydration(i => {
          t(e);
        }));
      }
    }
    {
      let e = reactStoreFactory.createStore()(v);
      if (e.persist.hasHydrated()) {
        return e;
      } else {
        return await new Promise(t => e.persist.onFinishHydration(i => {
          t(e);
        }));
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    initSamanthaChatProtocolStore: function () {
      return h;
    }
  });
}