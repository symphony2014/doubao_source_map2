// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zm' to 'usePPTGuidanceStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ppt-skill-guidance-page.ce63514f.js
         * chunkId: 10571
         * moduleId: 940991
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let d = {
    editorValue: "",
    focused: false,
    cardList: [],
    isWriteConfigInited: false,
    isWriteConfigLoading: false,
    writeConfig: {},
    tagList: [],
    styleList: [],
    templatePage: 1,
    templateList: [],
    hasMore: true,
    loading: false,
    showSkeleton: true
  };
  let c = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer((e, t) => ({
    ...d,
    updateFocusedState: t => {
      e(immerCoreImplementation.produce(e => {
        e.focused = t;
      }));
    },
    fetchCardList: async () => {
      try {
        let {
          data: t
        } = await apiServicesCollection.SamanthaApiService.SkillPack({
          skill_type: chatAppEnums.SkillType.AiPPT
        });
        e(immerCoreImplementation.produce(e => {
          if (t) {
            e.cardList = t.ai_ppt?.items || [];
          }
        }));
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.warning({
          eventName: "init_ppt_list_error"
        });
      }
    },
    fetchWriteConfig: async () => {
      if (!t().isWriteConfigLoading && !t().isWriteConfigInited) {
        try {
          e(immerCoreImplementation.produce(e => {
            e.isWriteConfigLoading = true;
            e.isWriteConfigInited = false;
          }));
          let {
            data: t
          } = await apiServicesCollection.SamanthaApiService.SkillPack({
            skill_type: chatAppEnums.SkillType.WriteAssistant,
            condition: {}
          });
          e(immerCoreImplementation.produce(e => {
            if (t == null ? undefined : t.write) {
              e.isWriteConfigLoading = false;
              e.isWriteConfigInited = true;
              e.writeConfig = t.write;
            } else {
              e.isWriteConfigLoading = false;
            }
          }));
        } catch (e) {
          loggerServiceCore.defaultLogger.persist.warning({
            eventName: "init_ppt_config_error"
          });
        }
      }
    },
    fetchTemplateList: async (i, l, n, o) => {
      if ((l || t().hasMore) && !t().loading) {
        try {
          e(immerCoreImplementation.produce(e => {
            e.loading = true;
            if (l) {
              e.templatePage = 1;
              e.templateList = [];
              e.hasMore = true;
              e.showSkeleton = true;
            }
          }));
          let {
            data: r
          } = await apiServicesCollection.SamanthaApiService.GetAiPPTTemplateList({
            selected_tag_id: n,
            selected_style_id: o,
            page: l ? 1 : t().templatePage,
            size: 10,
            is_doubao_exclusive: i
          });
          e(immerCoreImplementation.produce(e => {
            if (r) {
              var n;
              e.loading = false;
              e.showSkeleton = false;
              e.hasMore = (n = r.has_more) === null || n === undefined || n;
              e.templatePage = t().templatePage + 1;
              if (r.tags && r.tags?.length > 0) {
                e.tagList = r.tags;
              }
              if (r.styles && r.styles?.length > 0) {
                e.styleList = r.styles;
              }
              if (r.detail_list) {
                e.templateList = [...e.templateList, ...r.detail_list];
              }
            }
          }));
        } catch (t) {
          e(immerCoreImplementation.produce(e => {
            e.loading = false;
            e.showSkeleton = false;
          }));
          loggerServiceCore.defaultLogger.persist.warning({
            eventName: "fetch_ppt_template_error"
          });
        }
      }
    }
  })));
  require.d(exports, {
    usePPTGuidanceStore: function () {
      return c;
    }
  });
}