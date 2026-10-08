// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'dI' to 'useVideoSkillStore'
// - Renamed export 'NS' to 'createVideoSkillStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-chat-input.dc86588e.js
         * chunkId: 1779
         * moduleId: 297271
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var storagePersistenceUtil = require("storage-persistence-util") /*id: 143136*/;
  var genericReduceUtil = require("generic-reduce-util") /*id: 900464*/;
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let p = {
    editorValue: {
      data: []
    },
    focused: false,
    inputOptionsMap: {},
    attachment: {},
    videoList: [],
    imageRef: "",
    videoGenInfo: {
      remain_count: 0,
      has_generating_task: false,
      is_beta_user: false
    },
    hasFetched: false
  };
  let f = {
    isInit: false
  };
  let h = (e, t) => ({
    ...p,
    updateEditorValue: t => {
      e(immerCoreImplementation.produce(e => {
        e.editorValue = t;
      }));
    },
    updateFocusedState: t => {
      e(immerCoreImplementation.produce(e => {
        e.focused = t;
      }));
    },
    initVideoList: () => {
      if (f.isInit) {
        return;
      }
      let {
        fetchVideoList: e
      } = t();
      e(true);
    },
    fetchVideoList: async t => {
      try {
        let {
          data: n
        } = await apiServicesCollection.SamanthaApiService.SkillPack({
          skill_type: chatAppEnums.SkillType.VideoGeneration
        });
        let i = n == null ? undefined : n.video_generation;
        if (!(i == null ? undefined : i.meta)) {
          return;
        }
        e(immerCoreImplementation.produce(e => {
          if (i == null ? undefined : i.meta?.option_list) {
            let t = genericReduceUtil.genericReduce(i == null ? undefined : i.meta?.option_list, (e, t) => ({
              ...e,
              [String(t.value)]: {
                ...t
              }
            }), {});
            e.inputOptionsMap = t;
          }
          let u = (t ? [] : deepCloneWrapper_1.deepClone(e.videoList)).concat((i == null ? undefined : i.template?.item_list) ?? []);
          e.videoList = u;
          f.isInit = true;
        }));
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "init_image_list_error"
        });
      }
    },
    updateVideoGenInfo: async () => {
      try {
        let {
          data: t
        } = await apiServicesCollection.SamanthaApiService.QueryVideoGenInfo();
        e(immerCoreImplementation.produce(e => ({
          ...e,
          hasFetched: true,
          videoGenInfo: t
        })));
        return t;
      } catch (e) {
        if (e instanceof Error) {
          loggerServiceCore.defaultLogger.persist.error({
            error: e,
            message: e == null ? undefined : e.message
          });
        }
      }
    },
    decreaseCount: () => {
      e(immerCoreImplementation.produce(e => {
        if (e.videoGenInfo?.remain_count) {
          e.videoGenInfo = {
            ...e.videoGenInfo,
            remain_count: e.videoGenInfo.remain_count - 1,
            has_generating_task: true
          };
        }
      }));
    },
    updateRef: t => {
      e(immerCoreImplementation.produce(e => {
        e.imageRef = t;
      }));
    }
  });
  let m = e => {
    try {
      return {
        inputOptionsMap: e.inputOptionsMap,
        videoList: e.videoList
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "[@video-skill-store] persist state limit error",
        error: e instanceof Error ? e : Error(String(e))
      });
      return {};
    }
  };
  let v = e => {
    let {
      isEnableDebug: t,
      reduxDevToolsSnapshot: n,
      merge: a,
      partialize: s,
      storage: l
    } = e;
    let u = storagePersistenceUtil.createPersistOptions({
      name: "video-skill-store",
      prefix: "samantha-web",
      storage: l,
      partialize: s ?? m,
      version: 1.5,
      merge: a
    });
    let c = reduxDevtoolsPersistIntegration_1.persistMiddleware(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(h), u);
    if (t && n) {
      return reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.devToolsMiddleware(c, {
        name: "samantha-web-video-skill-store"
      }));
    } else {
      return reactStoreFactory.createStore()(c);
    }
  };
  let g = () => {
    _();
    return y;
  };
  let y = function () {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    _();
    let {
      _useVideoSkillStore: i
    } = y.prototype;
    if (i) {
      return i(...t);
    }
    throw Error("useVideoSkillStore is not initialized");
  };
  function _() {
    let {
      _useVideoSkillStore: e
    } = y.prototype || {};
    if (!e) {
      let e = v({});
      Object.setPrototypeOf(y.prototype, e);
      Object.defineProperties(y, {
        ...Object.getOwnPropertyDescriptors(e)
      });
      y.prototype._useVideoSkillStore = e;
    }
  }
  require.d(exports, {
    useVideoSkillStore: function () {
      return y;
    },
    createVideoSkillStore: function () {
      return g;
    }
  });
}