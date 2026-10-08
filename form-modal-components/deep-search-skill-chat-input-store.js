// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'uq' to 'deepSearchChatInputStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: deep-search-skill-chat-input.cf9a238f.js
         * chunkId: 20853
         * moduleId: 679775
         */
module.exports = function (module, exports, require) {
  var r;
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var asyncRetryUtils = require("async-retry-utils") /*id: 374795*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  (r = {}).SearchReference = "search_reference";
  r.EngineSearch = "engine_search";
  let d = r;
  let p = {
    currentActiveSearchSkill: chatAppEnums.SkillType.Search,
    deepSearchConfigLoading: false,
    isDeepSearchConfigInited: false,
    deepSearchConfig: [],
    receiveFirstTextMessage: {},
    messageIdToSearchSiderBarWithConvId: {},
    canvasStatus: {
      userSeleteStatus: false
    },
    aiSearchConfigLoading: false,
    aiSearchConfig: [],
    isAISearchConfigInited: false,
    academicSearchConfigLoading: false,
    academicSearchConfig: {},
    isAcademicSearchConfigInited: false,
    newsConfigs: {
      onBoardingNewsCardStatus: false,
      newsTabs: undefined,
      subscribedTags: undefined
    },
    thirdPageSidePanel: {
      visible: false,
      webviewInfo: {
        pageId: 0
      }
    }
  };
  let h = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer((e, t) => ({
    ...p,
    updateActiveSearchValue: t => {
      e(immerCoreImplementation.produce(e => {
        e.currentActiveSearchSkill = t;
      }));
    },
    updateReceiveFirstTextMessage: (t, n) => {
      e(immerCoreImplementation.produce(e => {
        e.receiveFirstTextMessage[t] = n;
      }));
    },
    getReceiveFirstTextMessageStatus: e => {
      var r;
      return (r = t().receiveFirstTextMessage?.[e]) !== null && r !== undefined && r;
    },
    updateSearchSiderBarData: t => {
      let {
        type: n,
        data: r,
        messageId: i,
        conversationId: a
      } = t;
      e(immerCoreImplementation.produce(e => {
        e.messageIdToSearchSiderBarWithConvId[a] ||= {};
        let o = e.messageIdToSearchSiderBarWithConvId[a]?.[i] ?? {};
        let s = e.messageIdToSearchSiderBarWithConvId[a];
        if (n === d.SearchReference) {
          e.messageIdToSearchSiderBarWithConvId = {
            [a]: {
              ...s,
              [i]: {
                ...o,
                searchReferenceInUse: r
              }
            }
          };
        }
      }));
    },
    updateSearchCanvasStatus: t => {
      let {
        status: n
      } = t;
      e(immerCoreImplementation.produce(e => {
        e.canvasStatus = {
          userSeleteStatus: n
        };
      }));
    },
    getSearchCanvasStatus: () => t().canvasStatus,
    initDeepSearchConfigList: async () => {
      try {
        if (t().isDeepSearchConfigInited) {
          return;
        }
        e(immerCoreImplementation.produce(e => {
          e.deepSearchConfigLoading = true;
        }));
        let {
          data: n
        } = await apiServicesCollection.SamanthaApiService.SkillPack({
          skill_type: chatAppEnums.SkillType.DeepSearch
        });
        e(immerCoreImplementation.produce(e => {
          var r;
          var a;
          if (n) {
            e.deepSearchConfigLoading = false;
            e.isDeepSearchConfigInited = true;
          }
          if (n == null ? undefined : (r = n.deep_search) === null || r === undefined ? undefined : r.template?.items) {
            e.deepSearchConfig = n == null ? undefined : (a = n.deep_search) === null || a === undefined ? undefined : a.template?.items;
          }
        }));
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "init_deep_search_list_error"
        });
      }
    },
    updateAISearchConfigLoadingStatus: function (t = false) {
      e(immerCoreImplementation.produce(e => {
        e.aiSearchConfigLoading = t;
      }));
    },
    initAISearchConfigList: async function (n = false) {
      try {
        if (t().isAISearchConfigInited && !n) {
          return true;
        }
        e(immerCoreImplementation.produce(e => {
          e.aiSearchConfigLoading = true;
        }));
        let {
          data: r,
          code: i
        } = await asyncRetryUtils.asyncRetry(() => apiServicesCollection.SamanthaApiService.SkillPack({
          skill_type: chatAppEnums.SkillType.Search
        }), 3, e => e * 1000);
        e(immerCoreImplementation.produce(e => {
          var n;
          var l;
          var s;
          var u;
          var d;
          if (r) {
            e.aiSearchConfigLoading = false;
            e.isAISearchConfigInited = true;
          }
          if (r == null ? undefined : (n = r.search) === null || n === undefined ? undefined : n.template?.items) {
            e.aiSearchConfig = r.search.template.items;
          }
          if (r == null ? undefined : r.search?.meta) {
            e.newsConfigs = {
              onBoardingNewsCardStatus: (d = r == null ? undefined : (l = r.search) === null || l === undefined ? undefined : l.meta?.open_onboarding) !== null && d !== undefined && d,
              newsTabs: (r == null ? undefined : (s = r.search) === null || s === undefined ? undefined : s.meta?.news_tags) ?? [],
              subscribedTags: (r == null ? undefined : (u = r.search) === null || u === undefined ? undefined : u.meta?.subscribed_tags) ?? []
            };
          }
        }));
        if (i === 0) {
          return true;
        }
        return false;
      } catch (t) {
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "init_ai_search_list_error"
        });
        e(immerCoreImplementation.produce(e => {
          e.aiSearchConfigLoading = false;
        }));
        return false;
      }
    },
    updateThirdPageSidePanel: t => {
      e(immerCoreImplementation.produce(e => {
        e.thirdPageSidePanel = t;
      }));
    },
    initAcademicSearchConfigList: async () => {
      try {
        if (t().isAcademicSearchConfigInited) {
          return;
        }
        e(immerCoreImplementation.produce(e => {
          e.academicSearchConfigLoading = true;
        }));
        let {
          data: n
        } = await apiServicesCollection.SamanthaApiService.SkillPack({
          skill_type: chatAppEnums.SkillType.AcademicSearch
        });
        e(immerCoreImplementation.produce(e => {
          if (n) {
            e.academicSearchConfigLoading = false;
            e.isAcademicSearchConfigInited = true;
          }
          if (n == null ? undefined : n.academic_search) {
            e.academicSearchConfig = n == null ? undefined : n.academic_search;
          }
        }));
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "init_academic_search_list_error"
        });
      }
    }
  })));
  require.d(exports, {
    deepSearchChatInputStore: function () {
      return h;
    }
  });
}