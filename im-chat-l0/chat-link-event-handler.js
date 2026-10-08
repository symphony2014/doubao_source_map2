// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'useLinkHandlers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: im-chat-l0.82349834.js
         * chunkId: 41884
         * moduleId: 756733
         */
module.exports = function (module, exports, require) {
  var footnoteLinkType = require("footnote-link-type") /*id: 98049*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var externalLinkSafetyTransformer = require("external-link-safety-transformer") /*id: 844886*/;
  let o = e => {
    let t = t => {
      teaAnalyticsEventTracker.trackEvent(t, {
        message_id: e.message_id,
        bot_id: e.bot_id,
        conversation_id: e.conversation_id
      });
    };
    return {
      handleLinkClick: (e, n) => {
        let {
          url: o,
          exts: a,
          openLink: u
        } = n;
        e.preventDefault();
        e.stopPropagation();
        if (a.type === "wiki") {
          teaAnalyticsEventTracker.trackEvent("click_special_soft_link");
          u(externalLinkSafetyTransformer.ExternalLinkTransformer.transform(a.wiki_link || ""));
        } else if (a.type === "normal") {
          if (o == null ? undefined : o.includes(footnoteLinkType.footnoteLinkType)) {
            t("footnote_link_click");
          }
          u(externalLinkSafetyTransformer.ExternalLinkTransformer.transform(o));
        }
      },
      handleLinkRender: e => {
        var n;
        if ((n = e.url) === null || n === undefined ? undefined : n.includes(footnoteLinkType.footnoteLinkType)) {
          t("footnote_link_show");
        }
      }
    };
  };
  let a = e => o(e);
  require.d(exports, {
    useLinkHandlers: function () {
      return a;
    }
  });
}