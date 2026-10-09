// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'useBusinessLimit'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-mode-select.5c979402.js
         * chunkId: 32786
         * moduleId: 429337
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var deepEqualityUtil = require("deep-equality-util") /*id: 249434*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var chatFgStoreHooks = require("chat-fg-store-hooks") /*id: 583867*/;
  var chatStorageKeys = require("chat-storage-keys") /*id: 187143*/;
  var chatAiConstants = require("chat-ai-constants") /*id: 447912*/;
  var samanthaToastFactory = require("samantha-toast-factory") /*id: 697541*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var aiChatSourceExtractor = require("ai-chat-source-extractor") /*id: 268836*/;
  let m = () => {
    let e = i18nTranslationUtils.useTranslationWithFallback();
    let t = chatFgStoreHooks.getSourceValue("enable_deep_think_exceed", {
      source: chatStorageKeys.chatStorageKeys.serverAB
    }) === "1";
    let {
      hasReachLimit: n,
      deepThinkingConfigs: m
    } = chatStoreManager.useStoreSelector("deepThinkingControlStore", e => {
      return {
        hasReachLimit: e.expertReachLimit?.[aiChatSourceExtractor.getCurrentDate()],
        deepThinkingConfigs: e.deepThinkingConfigs
      };
    }, deepEqualityUtil.deepEqual);
    let {
      exceedDetail: h = []
    } = m ?? {};
    let f = reactCoreLibraryReexport.useMemo(() => new Map((h ?? []).filter(e => (e == null ? undefined : e.item) !== null).map(e => [String(e.item), e])), [h]);
    let g = e => {
      let t = String(e);
      let i = f.get(t);
      let r = !!i && (typeof i.waitingUntilTime != "number" || i.waitingUntilTime > Date.now());
      let o = e === chatAiConstants.deepThinkMode.ProModel && n;
      return !!r || !!o;
    };
    return {
      getMenuListSubTitle: t => {
        let n = String(t);
        let i = f.get(n);
        if (i == null ? undefined : i.showExceedTitle) {
          return e(i.showExceedTitle);
        } else {
          return e("expert_model_desc_limit_reached");
        }
      },
      isMenuTypeLimited: g,
      handleLimited: t => {
        if (g(t)) {
          samanthaToastFactory.defaultToast.warning({
            showClose: false,
            content: e("expert_model_desc_limit_reached")
          });
          let n = f.get(String(t));
          teaAnalyticsEventTracker.trackEvent("to_limited_toast_show", {
            limited_biz: t === chatAiConstants.deepThinkMode.ProModel ? "pro_mode" : "deep_thinking",
            limited_trigger: "click_switch_mode",
            message_id: n == null ? undefined : n.messageId
          });
          if (h && h.length > 0) {
            loggerServiceCore.defaultLogger.persist.success({
              eventName: "deep_think_exceed_info",
              meta: {
                exceedValue: h.map(e => e.item).join(","),
                waitingUntilTime: h.map(e => e.waitingUntilTime).join(",")
              }
            });
          }
          return;
        }
      },
      handleUpdateExceedConfig: () => {
        let n = chatStoreManager.getStore("deepThinkingControlStore");
        let i = n.getState().deepThinkingConfigs;
        let r = (i == null ? undefined : i.exceedDetail) ?? [];
        if (t) {
          n.setState({
            deepThinkingConfigs: {},
            expertReachLimit: {}
          });
          return;
        }
        if (r.length > 0) {
          let e = Date.now();
          let t = r.filter(t => {
            let i = t.waitingUntilTime ?? 0;
            return !i || i > e;
          });
          if (t.length !== r.length) {
            n.setState({
              deepThinkingConfigs: {
                ...(i ?? {}),
                exceedDetail: t
              }
            });
          }
        }
      }
    };
  };
  require.d(exports, {
    useBusinessLimit: function () {
      return m;
    }
  });
}