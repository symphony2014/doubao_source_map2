// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'getDeepResearchStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 354150
         */
module.exports = function (module, exports, require) {
  var throttledDeepCloneUtil = require("throttled-deep-clone-util") /*id: 74680*/;
  var reduxPersistStoreFactory = require("redux-persist-store-factory") /*id: 273160*/;
  var storagePersistenceUtil = require("storage-persistence-util") /*id: 143136*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var safeJsonUtils = require("safe-json-utils") /*id: 384606*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let d = () => ({
    isConfigInitialed: false,
    isConfigLoading: false,
    fetchConfigFailed: false,
    sendDisabled: false,
    blockIdToProcess: {},
    isProcessDataLoading: false,
    blockIdToProcessHasInitialized: {},
    breakModalDestroyers: {},
    blockIdToConvIdWithAsyncState: {}
  });
  let u = (e, t) => throttledDeepCloneUtil.throttledDeepClone(d(), {
    fetchDeepResearchProcessData: async n => {
      var i;
      let {
        blockId: l,
        resourceId: r
      } = n;
      if ((i = t().blockIdToProcessHasInitialized) === null || i === undefined || !i[l]) {
        try {
          e(immerCoreImplementation.produce(e => {
            e.isProcessDataLoading = true;
          }));
          let {
            data: t
          } = await apiServicesCollection.SamanthaApiService.GetDeepResearchResource({
            resource_id: r
          });
          let {
            blocks: n = []
          } = t ?? {};
          let i = n.map(e => {
            return {
              ...e,
              content_obj: safeJsonUtils.safeParse(e.content, {}),
              id: (e == null ? undefined : e.block_id) ?? ""
            };
          });
          e(immerCoreImplementation.produce(e => {
            e.blockIdToProcess[l] ||= [];
            e.blockIdToProcess[l] = i;
            e.isProcessDataLoading = false;
            e.blockIdToProcessHasInitialized[l] = true;
          }));
        } catch (t) {
          e(immerCoreImplementation.produce(e => {
            e.isProcessDataLoading = false;
            e.blockIdToProcessHasInitialized[l] = true;
          }));
          loggerServiceCore.defaultLogger.persist.warning({
            eventName: "fetch_DeepResearch_process_data_error"
          });
        }
      }
    },
    updateDeepResearchProcessData(t) {
      let {
        blockId: n,
        value: i
      } = t;
      e(immerCoreImplementation.produce(e => {
        e.blockIdToProcess[n] ||= [];
        e.blockIdToProcess[n] = i;
      }));
    },
    updateBlockIdToConvId: n => {
      let {
        blockId: i,
        convId: l,
        status: r
      } = n;
      e(immerCoreImplementation.produce(e => {
        e.blockIdToConvIdWithAsyncState[i] ||= {};
        e.blockIdToConvIdWithAsyncState[i] = {
          convId: l,
          status: r
        };
        let a = t().blockIdToProcess ?? {};
        let s = e.blockIdToConvIdWithAsyncState ?? {};
        Object.keys(a).forEach(t => {
          if (s[t]?.convId !== l && s[t]?.status) {
            delete e.blockIdToProcess[t];
            e.blockIdToProcessHasInitialized[t] = false;
          }
        });
      }));
    },
    updateSendDisabledState: t => {
      e(immerCoreImplementation.produce(e => {
        e.sendDisabled = t;
      }));
    },
    updateBreakModalDestroyers(t) {
      e(immerCoreImplementation.produce(e => {
        e.breakModalDestroyers = t;
      }));
    },
    addBreakModalDestroyer: (t, n) => {
      e(immerCoreImplementation.produce(e => {
        e.breakModalDestroyers[t] = n;
      }));
    },
    removeBreakModalDestroyer: t => {
      e(immerCoreImplementation.produce(e => {
        delete e.breakModalDestroyers[t];
      }));
    }
  });
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var throttledOrderByUtil = require("throttled-order-by-util") /*id: 363890*/;
  let f = async e => {
    let {
      conversationId: n,
      artifactId: i
    } = e;
    let {
      data: l
    } = await apiServicesCollection.SamanthaApiService.SearchArtifact({
      conversation_id: n,
      artifact_id: i
    });
    let r = (l == null ? undefined : l.artifacts) ?? [];
    return throttledOrderByUtil.throttledOrderBy(r, e => e.version);
  };
  let h = () => ({
    artifactMap: {}
  });
  let g = (e, t) => throttledDeepCloneUtil.throttledDeepClone(h(), {
    fetchArtifactList: async t => {
      let {
        conversationId: n,
        artifactId: i,
        hasAbort: l
      } = t;
      try {
        let t = await asyncRetryUtils.pollUntilSuccess({
          value: () => f({
            conversationId: n,
            artifactId: i
          }),
          ifRetry: e => !e.length,
          count: 5
        });
        if (l) {
          return;
        }
        e(immerCoreImplementation.produce(e => {
          let {
            artifactMap: l
          } = e;
          l[n] ||= {};
          l[n][i] = t;
        }));
        return t;
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "search_artifact_error",
          error: e
        });
        throw e;
      }
    },
    async refreshArtifactList() {
      let {
        conversationId: e,
        canvasContent: n
      } = chatStoreManager.getStoreState("chatViewCanvasStore");
      let i = n == null ? undefined : n.artifactId;
      if (e && i) {
        return t().fetchArtifactList({
          conversationId: e,
          artifactId: i
        });
      }
    }
  });
  let _ = e => {
    try {
      return {
        blockIdToProcess: e.blockIdToProcess
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "[@deep-research-store] persist state limit error",
        error: e instanceof Error ? e : Error(String(e))
      });
      return {};
    }
  };
  let b = reduxPersistStoreFactory.createPersistStore({
    id: Symbol("deep-research-store"),
    createSlice: function () {
      var e = arguments.length;
      var t = Array(e);
      var n = 0;
      for (; n < e; n++) {
        t[n] = arguments[n];
      }
      return throttledDeepCloneUtil.throttledDeepClone(u(...t), g(...t));
    },
    getPersistStorageOptions: () => storagePersistenceUtil.createPersistOptions({
      name: "deep-research-store",
      prefix: "samantha-web",
      partialize: _,
      version: 1.5
    })
  });
  require.d(exports, {
    getDeepResearchStore: function () {
      return b;
    }
  });
}