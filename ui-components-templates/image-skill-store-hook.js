// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W5' to 'initializeImageSkillStore'
// - Renamed export 'f3' to 'useImageSkillStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 310175
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
  let m = {
    editorValue: {
      data: []
    },
    categoryName: "",
    applyTemplateEntryType: undefined,
    loading: false,
    templateArr: [],
    inputOptionsMap: {},
    paginator: {
      has_more: true,
      total: 0,
      next_cursor: ""
    },
    imageList: [],
    mockImageList: [...[,,,,].fill([{
      default_image: {
        height: 580,
        width: 386
      }
    }, {
      default_image: {
        height: 580,
        width: 580
      }
    }, {
      default_image: {
        height: 768,
        width: 1024
      }
    }]).flat()],
    simpleImageList: []
  };
  let p = (e, t) => ({
    ...m,
    updateEditorValue: t => {
      e(immerCoreImplementation.produce(e => {
        e.editorValue = t;
      }));
    },
    updateCategoryName: t => {
      e(immerCoreImplementation.produce(e => {
        e.categoryName = t;
      }));
    },
    updateHasSelectedTemplatePrompt: t => {
      e(immerCoreImplementation.produce(e => {
        e.applyTemplateEntryType = t;
      }));
    },
    initImageList: () => {
      t().fetchImageList(true, 0);
    },
    fetchImageList: async (l, i, n, o) => {
      var _;
      var v;
      var g;
      var h;
      var f;
      if ((l || t().paginator?.has_more !== false) && !t().loading) {
        try {
          e(immerCoreImplementation.produce(e => {
            e.loading = true;
            if (l) {
              e.paginator = {
                has_more: true,
                total: 0,
                next_cursor: ""
              };
              e.imageList = [];
              e.simpleImageList = [];
            }
          }));
          let {
            data: t
          } = await apiServicesCollection.SamanthaApiService.SkillPack({
            skill_type: chatAppEnums.SkillType.ImageGeneration,
            condition: {
              cursor: o,
              image_condition: {
                category_id: i,
                seed: n
              }
            }
          });
          loggerServiceCore.defaultLogger.persist.log({
            eventName: "image_skill_pack_response",
            meta: {
              categoryId: i,
              cursor: o,
              hasData: !!t,
              optionListCount: (t == null ? undefined : (v = t.image) === null || v === undefined ? undefined : (_ = v.meta) === null || _ === undefined ? undefined : _.option_list?.length) ?? 0,
              optionListKeys: t == null ? undefined : (f = t.image) === null || f === undefined ? undefined : (h = f.meta) === null || h === undefined ? undefined : (g = h.option_list) === null || g === undefined ? undefined : g.map(e => String(e.value))
            }
          });
          e(immerCoreImplementation.produce(e => {
            var n;
            var s;
            var d;
            var p;
            var v;
            var f;
            var w;
            if (t) {
              e.loading = false;
            }
            if (t == null ? undefined : (n = t.image) === null || n === undefined ? undefined : n.meta?.category_list) {
              e.templateArr = t == null ? undefined : (f = t.image) === null || f === undefined ? undefined : f.meta?.category_list;
            }
            if (t == null ? undefined : (s = t.image) === null || s === undefined ? undefined : s.meta?.option_list) {
              let l = genericReduceUtil.genericReduce(t == null ? undefined : (w = t.image) === null || w === undefined ? undefined : w.meta?.option_list, (e, t) => ({
                ...e,
                [String(t.value)]: {
                  ...t
                }
              }), {});
              e.inputOptionsMap = l;
              loggerServiceCore.defaultLogger.persist.log({
                eventName: "image_input_options_map_set",
                meta: {
                  optionKeys: Object.keys(l),
                  optionCount: Object.keys(l).length
                }
              });
            }
            let E = (l ? [] : deepCloneWrapper_1.deepClone(e.imageList)).concat((t == null ? undefined : (d = t.image) === null || d === undefined ? undefined : d.template?.image_list) ?? []);
            e.imageList = E;
            e.paginator = {
              ...(t == null ? undefined : (p = t.image) === null || p === undefined ? undefined : p.template?.paginator)
            };
            e.seed = (t == null ? undefined : (v = t.image) === null || v === undefined ? undefined : v.template?.seed) ?? "";
            e.simpleImageList = (t == null ? undefined : t.image?.simple_template) ?? [];
          }));
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.warning({
            eventName: "init_image_list_error",
            meta: {
              categoryId: i,
              cursor: o
            }
          });
        }
      }
    }
  });
  let _ = e => {
    try {
      return {
        templateArr: e.templateArr,
        inputOptionsMap: e.inputOptionsMap,
        imageList: e.imageList
      };
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        message: "[@image-skill-store] persist state limit error",
        error: e instanceof Error ? e : Error(String(e))
      });
      return {};
    }
  };
  let v = e => {
    let {
      isEnableDebug: t,
      reduxDevToolsSnapshot: l,
      merge: a,
      partialize: r,
      storage: s
    } = e;
    let c = storagePersistenceUtil.createPersistOptions({
      name: "image-skill-store",
      prefix: "samantha-web",
      storage: s,
      partialize: r ?? _,
      version: 1.5,
      merge: a
    });
    let d = reduxDevtoolsPersistIntegration_1.persistMiddleware(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(p), c);
    if (t && l) {
      return reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.devToolsMiddleware(d, {
        name: "samantha-web-image-skill-store"
      }));
    } else {
      return reactStoreFactory.createStore()(d);
    }
  };
  let g = () => {
    f();
    return h;
  };
  let h = function () {
    var e = arguments.length;
    var t = Array(e);
    var l = 0;
    for (; l < e; l++) {
      t[l] = arguments[l];
    }
    f();
    let {
      _useImageSkillStore: i
    } = h.prototype;
    if (i) {
      return i(...t);
    }
    throw Error("useImageSkillStore is not initialized");
  };
  function f() {
    let {
      _useImageSkillStore: e
    } = h.prototype || {};
    if (!e) {
      let e = v({});
      Object.setPrototypeOf(h.prototype, e);
      Object.defineProperties(h, {
        ...Object.getOwnPropertyDescriptors(e)
      });
      h.prototype._useImageSkillStore = e;
    }
  }
  require.d(exports, {
    initializeImageSkillStore: function () {
      return g;
    },
    useImageSkillStore: function () {
      return h;
    }
  });
}