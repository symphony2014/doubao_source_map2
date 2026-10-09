// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'wR' to 'getVisitContext'
// - Renamed export 'FZ' to 'getCurrentPage'
// - Renamed export 'Pj' to 'setVisitContext'
// - Renamed export 'Z6' to 'getRouteInfo'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 857541
         */
module.exports = function (module, exports, require) {
  var trackEventContextManager = require("track-event-context-manager") /*id: 928797*/;
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var chatPageRouteConstants = require("chat-page-route-constants") /*id: 628768*/;
  let a = {
    [chatPageRouteConstants.pageRoutes.CHAT]: /^\/$|^\/chat(?:\/(?:local_)?\d+)?$/,
    [chatPageRouteConstants.pageRoutes.SEARCH_DETAIL_PAGE]: /^\/chat\/search$/,
    [chatPageRouteConstants.pageRoutes.IMAGE_DETAIL_PAGE]: /^\/chat\/create-image$/,
    [chatPageRouteConstants.pageRoutes.WRITE_DETAIL_PAGE]: /^\/chat\/write$/,
    [chatPageRouteConstants.pageRoutes.PDF_READ_DETAIL_PAGE]: /^\/chat\/chat-with-doc$/,
    [chatPageRouteConstants.pageRoutes.MUSIC_DETAIL_PAGE]: /^\/chat\/music$/,
    [chatPageRouteConstants.pageRoutes.TRANSLATE_DETAIL_PAGE]: /^\/chat\/translate$/,
    [chatPageRouteConstants.pageRoutes.READ_WEB_DETAIL_PAGE]: /^\/chat\/read-web$/,
    [chatPageRouteConstants.pageRoutes.ACADEMIC_SEARCH_DETAIL_PAGE]: /^\/chat\/deep-search$/,
    [chatPageRouteConstants.pageRoutes.EXERCISE_DETAIL_PAGE]: /^\/chat\/edu-exercise$/,
    [chatPageRouteConstants.pageRoutes.CODE_INTERPRETER]: /^\/chat\/code-interpreter$/,
    [chatPageRouteConstants.pageRoutes.CODING_ASSISTANT_DETAIL_PAGE]: /^\/chat\/coding$/,
    [chatPageRouteConstants.pageRoutes.VIDEO_DETAIL_PAGE]: /^\/chat\/create-video$/,
    [chatPageRouteConstants.pageRoutes.AI_PPT_DETAIL_PAGE]: /^\/chat\/aippt$/,
    [chatPageRouteConstants.pageRoutes.Complex_Task]: /^\/chat\/complex$/,
    [chatPageRouteConstants.pageRoutes.SHARE_DESTINATION_PAGE]: /^\/thread\/[a-zA-Z0-9]+$/,
    [chatPageRouteConstants.pageRoutes.AI_DOC]: /^\/doc$/,
    [chatPageRouteConstants.pageRoutes.AI_DOC_DETAIL]: /^\/docx?\/[A-Za-z0-9]+$/,
    [chatPageRouteConstants.pageRoutes.AI_CODE_APPS]: /^\/code\/chat\/my-apps$/,
    [chatPageRouteConstants.pageRoutes.AI_CODE_HISTORY]: /^\/code\/chat\/thread\/list$/,
    [chatPageRouteConstants.pageRoutes.AI_CODE_CHAT_PAGE]: /^\/code\/chat\/(?:local_)?\d+$/,
    [chatPageRouteConstants.pageRoutes.AI_CODE_LANDING_PAGE]: /^\/code\/chat$/,
    [chatPageRouteConstants.pageRoutes.AI_CODE_LAUNCH]: /^\/code\/launch$/,
    [chatPageRouteConstants.pageRoutes.AI_ACTIVITY]: /^\/code\/challenge$/,
    [chatPageRouteConstants.pageRoutes.CODE_LAUNCH_SUBMISSIONS]: /^\/code\/launch\/my-submission$/,
    [chatPageRouteConstants.pageRoutes.CODE_LAUNCH_SUBMIT]: /^\/code\/launch\/submit$/,
    [chatPageRouteConstants.pageRoutes.CODE_LAUNCH_TOP_LIST]: /^\/code\/launch\/top$/,
    [chatPageRouteConstants.pageRoutes.CODE_LAUNCH_DETAIL]: /^\/code\/launch\/detail(\/.*)?$/,
    [chatPageRouteConstants.pageRoutes.CODE_LAUNCH_PREVIEW]: /^\/code\/launch\/preview(\/.*)?$/,
    [chatPageRouteConstants.pageRoutes.CODE_LAUNCH_CATEGORY_LIST]: /^\/code\/launch\/category(\/.*)?$/,
    [chatPageRouteConstants.pageRoutes.AI_CODE_LANDING_ASK]: /^\/code\/landing\/ask$/,
    [chatPageRouteConstants.pageRoutes.AI_CODE_LANDING_STUDENT]: /^\/code\/landing\/student$/,
    [chatPageRouteConstants.pageRoutes.AI_CODE_LANDING_TEACHER]: /^\/code\/landing\/teacher$/,
    [chatPageRouteConstants.pageRoutes.AI_CODE_LANDING_LEARN]: /^\/code\/landing\/learn$/,
    [chatPageRouteConstants.pageRoutes.AI_CODE_LANDING_WORK]: /^\/code\/landing\/work$/,
    [chatPageRouteConstants.pageRoutes.AI_CODE_SHARE_LANDING]: /^\/building\/code(\/.*)?$/,
    [chatPageRouteConstants.pageRoutes.CREDIT_ACTIVITY_SHARE]: /^\/credit\/invite$/,
    [chatPageRouteConstants.pageRoutes.CREDIT_ACTIVITY_HELP]: /^\/credit\/assist$/,
    [chatPageRouteConstants.pageRoutes.AI_SPACE_SHARE_PAGE]: /^\/drive\/s\/[a-zA-Z0-9]+$/,
    [chatPageRouteConstants.pageRoutes.AI_SPACE]: /^\/chat\/drive(\/\d+)?$/,
    [chatPageRouteConstants.pageRoutes.AI_SPACE_MY_SHARE]: /^\/chat\/drive\/share\/[a-zA-Z0-9]?$/,
    [chatPageRouteConstants.pageRoutes.AI_SPACE_SHARE_FILE]: /^\/drive\/file\/[a-zA-Z0-9]+$/,
    [chatPageRouteConstants.pageRoutes.AI_SPACE_SHARE_MULTI_FILE]: /^\/drive\/shr\/[a-zA-Z0-9][a-zA-Z0-9]+$/,
    [chatPageRouteConstants.pageRoutes.SETTING]: /^\/chat\/settings$/,
    [chatPageRouteConstants.pageRoutes.PROFILE_SETTING]: /^\/chat\/settings\/profile$/,
    [chatPageRouteConstants.pageRoutes.BOT_CREATE_PAGE]: /^\/chat\/bot\/create$/,
    [chatPageRouteConstants.pageRoutes.COLLECT_LIST]: /^\/chat\/collection$/,
    [chatPageRouteConstants.pageRoutes.COLLECT__DETAIL_PAGE]: /^\/chat\/collection\/\w+$/,
    [chatPageRouteConstants.pageRoutes.UPDATE_DETAIL]: /^\/chat\/update$/,
    [chatPageRouteConstants.pageRoutes.THREAD_PAGE]: /^\/chat\/thread\/list$/
  };
  let l = e => {
    let t = e.replace(/\/+$/, "") || "/";
    for (let [e, n] of Object.entries(a)) {
      if (n.test(t)) {
        return e;
      }
    }
    return chatPageRouteConstants.pageRoutes.OTHER;
  };
  let s = () => {
    let {
      value: e
    } = trackEventContextManager.getTrackEventContext(chatPageRouteConstants.contextParams.VisitPage) || {};
    return e || {};
  };
  let u = () => {
    let {
      current_page: e
    } = s();
    return e;
  };
  let c = (e, t) => {
    let n = u() || t || "direct_landing";
    if (e) {
      trackEventContextManager.setTrackEventContext(chatPageRouteConstants.contextParams.VisitPage, {
        current_page: e,
        previous_page: n
      }, {
        global: true
      });
    }
    return n;
  };
  let d = () => ({
    curPage: l(window.location.pathname),
    prevPage: h()
  });
  let h = () => {
    if (typeof window == "undefined") {
      return "";
    }
    let {
      search: e
    } = window.location;
    let t = new URLSearchParams(e).get("prev_page") || "";
    let n = m();
    urlParamUtils.removeUrlParam("prev_page");
    return t || n || "";
  };
  let m = () => {
    if (typeof window == "undefined") {
      return "";
    }
    let t = window.location.host;
    let n = document?.referrer;
    if (!n) {
      return "";
    }
    try {
      let e = new URL(n);
      let i = e.host;
      let r = e.pathname;
      if (t === i) {
        return l(r);
      }
    } catch (e) {}
    return "";
  };
  require.d(exports, {
    getVisitContext: function () {
      return s;
    },
    getCurrentPage: function () {
      return u;
    },
    setVisitContext: function () {
      return c;
    },
    getRouteInfo: function () {
      return d;
    }
  });
}