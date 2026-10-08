// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ki' to 'useGuidanceConfig'
// - Renamed export 'jW' to 'chatInputStore'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14700.69a942fb.js
         * chunkId: 14700
         * moduleId: 976175
         */
module.exports = function (module, exports, require) {
  var deepEqualityUtil_1 = require("deep-equality-util_1") /*id: 550444*/;
  var reduxDevtoolsPersistIntegration_1 = require("redux-devtools-persist-integration_1") /*id: 688840*/;
  var reactStoreFactory = require("react-store-factory") /*id: 960791*/;
  var immerCoreImplementation = require("immer-core-implementation") /*id: 828474*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var chatAppEnums = require("chat-app-enums") /*id: 299505*/;
  var useRequestHook = require("use-request-hook") /*id: 870590*/;
  let d = {
    editorValue: "",
    focused: false,
    guidanceEditorValue: {
      data: []
    },
    guidanceEditorFocused: false,
    guidanceConfigLoading: false
  };
  let u = reactStoreFactory.createStore()(reduxDevtoolsPersistIntegration_1.withDevToolsEnhancer(e => ({
    ...d,
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
    updateGuidanceEditorValue(t) {
      e(immerCoreImplementation.produce(e => {
        e.guidanceEditorValue = t;
      }));
    },
    updateGuidanceEditorFocused(t) {
      e(immerCoreImplementation.produce(e => {
        e.guidanceEditorFocused = t;
      }));
    },
    fetchGuidanceConfig: () => {
      let {
        data: t,
        loading: l
      } = useRequestHook.useRequest(async () => {
        try {
          return await apiServicesCollection.SamanthaApiService.SkillPack({
            skill_type: chatAppEnums.SkillType.Translate,
            condition: {}
          });
        } catch (e) {
          return;
        }
      }, {
        cacheKey: "translate_skill_pack",
        staleTime: Infinity
      });
      e(immerCoreImplementation.produce(e => {
        e.guidanceConfig = t == null ? undefined : t.data?.translate;
        e.guidanceConfigLoading = l;
      }));
    }
  })));
  let m = () => {
    let [e, t, l] = u(e => [e.guidanceConfigLoading, e.guidanceConfig, e.fetchGuidanceConfig], deepEqualityUtil_1.isEqual);
    l();
    return {
      loading: e,
      config: t
    };
  };
  require.d(exports, {
    useGuidanceConfig: function () {
      return m;
    },
    chatInputStore: function () {
      return u;
    }
  });
}