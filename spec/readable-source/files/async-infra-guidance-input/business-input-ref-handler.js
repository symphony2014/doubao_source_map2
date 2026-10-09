// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getRefContentProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-engine.9f9181cd.js
         * chunkId: 30658
         * moduleId: 485057
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  let o = e => {
    let {
      chatId: n,
      refContents: o,
      onSubmit: l,
      trackParams: s = {}
    } = e;
    let u = useLatestCallbackHook_1.useLatestCallback(l);
    let c = o.find(e => e.type === "text" && e.scene === "word_selection");
    let {
      from: d = "choose_text",
      cite_message_id: p = "",
      cite_method: f = "click_cite_button"
    } = (c == null ? undefined : c.options) ?? {};
    return {
      refContentProps: {
        refContents: o,
        showPresetPrompt: !!c,
        onPresetPromptShow: (e, t) => {
          teaAnalyticsEventTracker.trackEvent("cite_suggest_prompt_show", {
            ...s,
            click_from: d,
            prompt_position_row: "1",
            prompt_position: String((t ?? 0) + 1),
            prompt_type: "single_line",
            title: e,
            show_way: "direct"
          });
        },
        onClickPresetPrompt: (e, t, n) => {
          teaAnalyticsEventTracker.trackEvent("cite_suggest_prompt_click", {
            ...s,
            click_from: d,
            prompt_position_row: "1",
            prompt_position: String((n ?? 0) + 1),
            prompt_type: "single_line",
            title: e,
            show_way: "direct"
          });
          if (u != null) {
            u(e, t);
          }
        }
      },
      onRefContentAfterSubmit: () => {
        if (c) {
          chatIocServiceLoaderHook.loadServiceAsync("refContentStoreService").then(e => {
            if (e != null) {
              e.clearRefContents(n ?? "");
            }
          });
        }
      },
      getSendRefContentReportParams: () => c ? {
        cited_from_user_type: "assistant",
        cited_message_id: p,
        sec_scene: f
      } : {}
    };
  };
  require.d(exports, {
    getRefContentProps: function () {
      return o;
    }
  });
}