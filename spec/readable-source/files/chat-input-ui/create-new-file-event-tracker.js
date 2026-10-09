// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$Q' to 'getCanvasActionType'
// - Renamed export 'Ch' to 'trackAiWriteMenuClick'
// - Renamed export 'Rd' to 'trackBlankPageClick'
// - Renamed export 'SI' to 'trackAiWriteResultClick'
// - Renamed export 'uh' to 'trackAiWriteMenuShow'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 759.d4297f73.js
         * chunkId: 759
         * moduleId: 982650
         */
module.exports = function (module, exports, require) {
  var conversationPageConstants = require("conversation-page-constants") /*id: 130052*/;
  var inlineDocxActionTypes = require("inline-docx-action-types") /*id: 598431*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let o = () => {
    let {
      searchParams: t
    } = new URL(window.location.href);
    return t.get("source") ?? "";
  };
  let r = e => {
    let t = "";
    if (e === conversationPageConstants.pageTypes.AI_SPACE) {
      t = "/chat/drive/";
    } else if (e === conversationPageConstants.pageTypes.PC_NEW_TAB) {
      t = "/";
    } else if (e === conversationPageConstants.pageTypes.WRITING_DETAIL) {
      t = "/chat/write/";
    }
    return t;
  };
  let s = () => r(o());
  let c = e => {
    let {
      entranceClickFrom: t,
      contentDetail: l,
      previousPage: n
    } = e;
    let s = t ?? o();
    teaAnalyticsEventTracker.trackEvent("create_new_file_blank_page_click", {
      entrance_click_from: s,
      content_detail: l,
      current_page: conversationPageConstants.newDocRoute,
      previous_page: n ?? r(s)
    });
  };
  let d = e => {
    teaAnalyticsEventTracker.trackEvent("create_new_file_ai_write_menu_show", {
      current_page: "create_new_file",
      previous_page: e ?? s()
    });
  };
  let u = e => {
    teaAnalyticsEventTracker.trackEvent("create_new_file_ai_write_menu_click", {
      current_page: "create_new_file",
      previous_page: s(),
      genre: e
    });
  };
  let p = e => {
    let {
      buttonName: t,
      genre: l
    } = e;
    teaAnalyticsEventTracker.trackEvent("create_new_file_ai_write_result_click", {
      current_page: "create_new_file",
      previous_page: s(),
      is_blank_page: 1,
      genre: l,
      bottom_name: t
    });
  };
  let _ = e => e === inlineDocxActionTypes.getDocxActionTypes.RegenerateParagraphDoc ? "canvas_insert_paragraph" : "canvas_selection_bar";
  require.d(exports, {
    getCanvasActionType: function () {
      return _;
    },
    trackAiWriteMenuClick: function () {
      return u;
    },
    trackBlankPageClick: function () {
      return c;
    },
    trackAiWriteResultClick: function () {
      return p;
    },
    trackAiWriteMenuShow: function () {
      return d;
    }
  });
}