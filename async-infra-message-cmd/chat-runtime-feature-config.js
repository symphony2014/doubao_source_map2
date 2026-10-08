// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zG' to 'getTccConfig'
// - Renamed export 'pL' to 'setFeatureConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 89004
         */
module.exports = function (module, exports, require) {
  let i;
  var r;
  var safeObjectPropertyMap = require("safe-object-property-map") /*id: 740962*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatRuntimeFeatureEnums = require("chat-runtime-feature-enums") /*id: 121421*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var serviceRequestHelpers = require("service-request-helpers") /*id: 410370*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let d = {
    answer_with_suggest: chatRuntimeFeatureEnums.ChatFeatureFlags.AnswerWithSuggest,
    answer_with_video: chatRuntimeFeatureEnums.ChatFeatureFlags.AnswerWithVideo,
    named_entity_highlight: chatRuntimeFeatureEnums.ChatFeatureFlags.HighlightKeyword,
    personalized_recommend: chatRuntimeFeatureEnums.ChatFeatureFlags.PersonalizedRecommend,
    save_chat_history: chatRuntimeFeatureEnums.ChatFeatureFlags.SaveChatHistory,
    allow_model_training: chatRuntimeFeatureEnums.ChatFeatureFlags.AllowTraining,
    related_video: chatRuntimeFeatureEnums.ChatFeatureFlags.RelatedVideo
  };
  let p = "featureConfig";
  let _ = (e, t) => t ? Object.fromEntries(Object.keys(e).map(n => {
    var i;
    let r = e[n];
    let o = t == null ? undefined : (i = t.configs) === null || i === undefined ? undefined : i.find(e => e.object === d[n]);
    if (o) {
      return [n, {
        ...r,
        ...(Number(o.version) < Number(r == null ? undefined : r.version) ? {} : {
          version: o.version,
          value: !!Number(o.value)
        })
      }];
    } else {
      return [n, r];
    }
  })) : e;
  r = async (e, t, n) => {
    let {
      objects: i = Object.values(d),
      reason: r = chatRuntimeFeatureEnums.ChatRuntimeStatus.Startup
    } = t || {};
    let o = ++e;
    let {
      data: c
    } = await apiServicesCollection.ProfileApiService.PullUserConfig({
      objects: i,
      reason: r
    }).catch(() => {
      loggerServiceCore.defaultLogger.persist.warning("fetchUserConfig fail");
      return {
        data: undefined
      };
    });
    if (o < e && !n || !c) {
      throw Error("skipped setFeatureConfig");
    }
    chatFgStoreHooks.mergeSourceData(p, _(chatFgStoreHooks.getSourceDataSync(p), c));
  };
  i = null;
  let v = function (e, t = false) {
    if (i && !t) {
      return i;
    }
    (i = r(0, e, t)).then(() => {
      i = null;
    }).catch(e => {
      loggerServiceCore.defaultLogger.console.info("setFeatureConfig skipped");
    });
  };
  let h = async () => {
    try {
      let n = await serviceRequestHelpers.rawRequest({
        method: "GET",
        url: "https://lf3-config.bytetcc.com/obj/tcc-config-web/tcc-v2-data-flow.web.doubao-default"
      });
      let i = (n == null ? undefined : n.data?.data) ?? {};
      return safeObjectPropertyMap.safeObjectMap(i, e => JSON.parse(e || "{}"));
    } catch (e) {
      if (e instanceof Error) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "get_tcc_config_error",
          error: e
        });
      }
      return {};
    }
  };
  require.d(exports, {
    getTccConfig: function () {
      return h;
    },
    setFeatureConfig: function () {
      return v;
    }
  });
}