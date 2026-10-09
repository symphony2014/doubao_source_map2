// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Im' to 'getClickChannel'
// - Renamed export 'ub' to 'aiDocPageTypes'
// - Renamed export 'zh' to 'trackPageEntry'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-docx-guidance.7d88153e.js
         * chunkId: 48718
         * moduleId: 991942
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var routePathUtils = require("route-path-utils") /*id: 930304*/;
  var aiDocCreateTracking = require("ai-doc-create-tracking") /*id: 86772*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var chatUserInfoActions = require("chat-user-info-actions") /*id: 400206*/;
  (r = {}).AI_DOC = "ai_doc";
  r.AI_DOC_DETAIL = "ai_doc_detail";
  r.AI_DOC_TEMPLATE_DETAIL = "ai_doc_template_detail";
  let c = r;
  let d = e => {
    let {
      enterFrom: t,
      currentPage: n,
      docStatus: r,
      isOnboardingDoc: i = false
    } = e;
    let o = t ?? routePathUtils.getEnterSource();
    teaAnalyticsEventTracker.trackEvent("enter_page", {
      enter_from: o,
      author_id: chatUserInfoActions.getUserIdStr(),
      page_token: routePathUtils.getDocIdFromPath(),
      current_page: n ?? undefined,
      if_welcome_doc: +!!i,
      ai_doc_content_status: r
    });
  };
  (i = u || {}).SIDEBAR = "sidebar";
  i.GUIDANCE = "guidance_suggestions";
  var u = i;
  let p = e => {
    switch (e) {
      case u.SIDEBAR:
        return aiDocCreateTracking.clickChannels.SIDEBAR_SKILL;
      case u.GUIDANCE:
        return aiDocCreateTracking.clickChannels.SKILL;
      default:
        return aiDocCreateTracking.clickChannels.DIRECT_ENTER;
    }
  };
  require.d(exports, {
    getClickChannel: function () {
      return p;
    },
    aiDocPageTypes: function () {
      return c;
    },
    trackPageEntry: function () {
      return d;
    }
  });
}