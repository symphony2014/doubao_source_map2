// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$I' to 'trackShowSuggestedContent'
// - Renamed export 'Ct' to 'trackModeSwitchShow'
// - Renamed export 'Fo' to 'trackNoticePopupShow'
// - Renamed export 'GU' to 'trackRightClickCopyFile'
// - Renamed export 'Vn' to 'trackModeSwitchBoardShow'
// - Renamed export '_Z' to 'trackShareButtonClickStatus'
// - Renamed export 'aB' to 'trackGuidanceWindowShow'
// - Renamed export 'bD' to 'trackModeSwitchClick'
// - Renamed export 'e0' to 'trackClickSuggestedContent'
// - Renamed export 'en' to 'trackTaskCompleteShow'
// - Renamed export 'fT' to 'trackEntranceClick'
// - Renamed export 'fz' to 'trackNoticePopupClick'
// - Renamed export 'hB' to 'trackClickCard'
// - Renamed export 'nI' to 'trackOutputPreviewClick'
// - Renamed export 'oJ' to 'trackEntranceShow'
// - Renamed export 'qM' to 'trackDownload'
// - Renamed export 'rV' to 'trackShareButtonClick'
// - Renamed export 'sP' to 'trackCopy'
// - Renamed export 't3' to 'trackOutputPreviewShow'
// - Renamed export 'up' to 'trackRightClickCopyPpt'
// - Renamed export 'w5' to 'trackArtifactClick'
// - Renamed export 'wI' to 'trackGuidanceWindowClick'
// - Renamed export 'xD' to 'trackStopWindowShow'
// - Renamed export 'zF' to 'trackShowCard'
// - Renamed export 'zd' to 'trackStopWindowClick'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-input-tool-button.182dfecb.js
         * chunkId: 22819
         * moduleId: 368178
         */
module.exports = function (module, exports, require) {
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  let r = e => {
    teaAnalyticsEventTracker.trackEvent("super_task_entrance_show", {
      enter_method: e
    });
  };
  let a = (e, t) => {
    teaAnalyticsEventTracker.trackEvent("super_task_entrance_click", {
      enter_method: e,
      to_status: t
    });
  };
  let o = () => {
    teaAnalyticsEventTracker.trackEvent("super_task_mode_switch_show");
  };
  let l = () => {
    teaAnalyticsEventTracker.trackEvent("super_task_mode_switch_board_show");
  };
  let s = e => {
    teaAnalyticsEventTracker.trackEvent("super_task_mode_switch_click", {
      click_from: e
    });
  };
  let c = e => {
    let {
      genre: t,
      content_detail: n
    } = e;
    teaAnalyticsEventTracker.trackEvent("show_suggested_content", {
      show_scene: "super_task",
      genre: t,
      content_detail: n,
      skill_id: "138",
      skill_name: "super_task"
    });
  };
  let u = e => {
    let {
      button_name: t,
      genre: n,
      content_detail: r
    } = e;
    teaAnalyticsEventTracker.trackEvent("click_suggested_content", {
      show_scene: "super_task",
      button_name: t,
      genre: n,
      content_detail: r,
      skill_id: "138",
      skill_name: "super_task"
    });
  };
  let d = e => {
    let {
      card_type: t,
      progress_status: n,
      status: r,
      bot_id: a,
      super_task_id: o,
      super_task_mode: l,
      message_id: s,
      conversation_id: c,
      card_sub_type: u
    } = e;
    teaAnalyticsEventTracker.trackEvent("show_card", {
      card_type: t,
      card_sub_type: u,
      progress_status: n,
      status: r,
      bot_id: a,
      super_task_id: o,
      super_task_mode: l,
      message_id: s,
      conversation_id: c
    });
  };
  let p = e => {
    let {
      status: t,
      super_task_id: n,
      super_task_mode: r,
      message_id: a,
      conversation_id: o
    } = e;
    teaAnalyticsEventTracker.trackEvent("super_task_complete_show", {
      status: t,
      super_task_id: n,
      super_task_mode: r,
      message_id: a,
      conversation_id: o
    });
  };
  let h = e => {
    let {
      card_type: t,
      card_sub_type: n,
      progress_status: r,
      click_effect: a,
      bot_id: o,
      super_task_id: l,
      super_task_mode: s,
      message_id: c,
      conversation_id: u,
      ai_ppt_template_option: d
    } = e;
    teaAnalyticsEventTracker.trackEvent("click_card", {
      card_type: t,
      card_sub_type: n,
      progress_status: r,
      click_effect: a,
      bot_id: o,
      super_task_id: l,
      super_task_mode: s,
      message_id: c,
      conversation_id: u,
      ai_ppt_template_option: d
    });
  };
  let f = e => {
    let {
      super_task_id: t,
      super_task_mode: n
    } = e;
    teaAnalyticsEventTracker.trackEvent("stop_super_task_window_show", {
      super_task_id: t,
      super_task_mode: n,
      type: "stop_button"
    });
  };
  let m = e => {
    let {
      super_task_id: t,
      super_task_mode: n,
      button_name: r
    } = e;
    teaAnalyticsEventTracker.trackEvent("stop_super_task_window_click", {
      super_task_id: t,
      super_task_mode: n,
      type: "stop_button",
      button_name: r
    });
  };
  let g = e => {
    let {
      super_task_id: t,
      super_task_mode: n,
      content_type: r,
      content_sec_type: a
    } = e;
    teaAnalyticsEventTracker.trackEvent("super_task_artifact_click", {
      super_task_id: t,
      super_task_mode: n,
      content_type: r,
      content_sec_type: a
    });
  };
  let v = e => {
    let {
      super_task_id: t,
      super_task_mode: n,
      bot_id: r,
      message_id: a,
      conversation_id: o,
      canvas_type: l,
      content_sec_type: s
    } = e;
    teaAnalyticsEventTracker.trackEvent("output_preview_show", {
      super_task_id: t,
      super_task_mode: n,
      skill_id: "138",
      skill_name: "super_task",
      bot_id: r,
      message_id: a,
      conversation_id: o,
      canvas_type: l,
      content_sec_type: s
    });
  };
  let _ = e => {
    teaAnalyticsEventTracker.trackEvent("right_click_copy", {
      content_type: "ai_ppt",
      click_from: "canvas",
      skill_id: "138",
      skill_name: "super_task",
      ...e
    });
  };
  let b = e => {
    let {
      super_task_id: t,
      super_task_mode: n,
      bot_id: r,
      message_id: a,
      conversation_id: o,
      canvas_type: l,
      content_sec_type: s,
      button_name: c
    } = e;
    teaAnalyticsEventTracker.trackEvent("output_preview_click", {
      super_task_id: t,
      super_task_mode: n,
      skill_id: "138",
      skill_name: "super_task",
      bot_id: r,
      message_id: a,
      conversation_id: o,
      canvas_type: l,
      content_sec_type: s,
      button_name: c
    });
  };
  let y = e => {
    let {
      type: t = "super_task",
      sub_type: n
    } = e;
    teaAnalyticsEventTracker.trackEvent("notice_popup_show", {
      sub_type: n,
      type: t
    });
  };
  let w = e => {
    let {
      type: t = "super_task",
      sub_type: n,
      button_name: r
    } = e;
    teaAnalyticsEventTracker.trackEvent("notice_popup_click", {
      type: t,
      sub_type: n,
      button_name: r
    });
  };
  let x = () => {
    teaAnalyticsEventTracker.trackEvent("super_task_guidance_window_show");
  };
  let C = e => {
    teaAnalyticsEventTracker.trackEvent("super_task_guidance_window_click", {
      button_name: e
    });
  };
  let k = e => {
    let {
      super_task_id: t,
      super_task_mode: n,
      content_type: r,
      content_sec_type: a,
      message_id: o,
      conversation_id: l,
      bot_id: s,
      section_id: c,
      click_from: u,
      canvas_type: d
    } = e;
    teaAnalyticsEventTracker.trackEvent("download", {
      super_task_id: t,
      super_task_mode: n,
      content_type: r,
      content_sec_type: a,
      skill_id: "138",
      skill_name: "super_task",
      message_id: o,
      conversation_id: l,
      bot_id: s,
      section_id: c,
      click_from: u,
      canvas_type: d
    });
  };
  let S = e => {
    let {
      super_task_id: t,
      super_task_mode: n,
      bot_id: r,
      message_id: a,
      conversation_id: o,
      canvas_type: l,
      button_name: s
    } = e;
    teaAnalyticsEventTracker.trackEvent("share_thread_bottom_button_click", {
      entrance_type: "canvas_top",
      super_task_id: t,
      super_task_mode: n,
      skill_id: "138",
      skill_name: "super_task",
      bot_id: r,
      message_id: a,
      conversation_id: o,
      canvas_type: l,
      button_name: s
    });
  };
  let E = e => {
    let {
      super_task_id: t,
      super_task_mode: n,
      bot_id: r,
      message_id: a,
      conversation_id: o,
      canvas_type: l,
      button_name: s,
      status: c,
      share_id: u
    } = e;
    teaAnalyticsEventTracker.trackEvent("share_thread_bottom_button_click_status", {
      entrance_type: "canvas_top",
      super_task_id: t,
      super_task_mode: n,
      skill_id: "138",
      skill_name: "super_task",
      bot_id: r,
      message_id: a,
      conversation_id: o,
      canvas_type: l,
      button_name: s,
      status: c,
      share_id: u
    });
  };
  let T = e => {
    let {
      super_task_id: t,
      super_task_mode: n,
      bot_id: r,
      message_id: a,
      conversation_id: o,
      section_id: l,
      content_sec_type: s
    } = e;
    teaAnalyticsEventTracker.trackEvent("right_click_copy", {
      super_task_id: t,
      super_task_mode: n,
      skill_id: "138",
      skill_name: "super_task",
      bot_id: r,
      message_id: a,
      conversation_id: o,
      section_id: l,
      canvas_type: "super_task_file",
      click_from: "canvas",
      content_type: "file",
      content_sec_type: s
    });
  };
  let j = e => {
    let {
      super_task_id: t,
      super_task_mode: n,
      bot_id: r,
      message_id: a
    } = e;
    teaAnalyticsEventTracker.trackEvent("copy", {
      super_task_id: t,
      super_task_mode: n,
      bot_id: r,
      message_id: a,
      skill_id: "138",
      skill_name: "super_task",
      canvas_type: "super_task_file",
      click_from: "canvas_function",
      user_type: "bot"
    });
  };
  require.d(exports, {
    trackShowSuggestedContent: function () {
      return c;
    },
    trackModeSwitchShow: function () {
      return o;
    },
    trackNoticePopupShow: function () {
      return y;
    },
    trackRightClickCopyFile: function () {
      return T;
    },
    trackModeSwitchBoardShow: function () {
      return l;
    },
    trackShareButtonClickStatus: function () {
      return E;
    },
    trackGuidanceWindowShow: function () {
      return x;
    },
    trackModeSwitchClick: function () {
      return s;
    },
    trackClickSuggestedContent: function () {
      return u;
    },
    trackTaskCompleteShow: function () {
      return p;
    },
    trackEntranceClick: function () {
      return a;
    },
    trackNoticePopupClick: function () {
      return w;
    },
    trackClickCard: function () {
      return h;
    },
    trackOutputPreviewClick: function () {
      return b;
    },
    trackEntranceShow: function () {
      return r;
    },
    trackDownload: function () {
      return k;
    },
    trackShareButtonClick: function () {
      return S;
    },
    trackCopy: function () {
      return j;
    },
    trackOutputPreviewShow: function () {
      return v;
    },
    trackRightClickCopyPpt: function () {
      return _;
    },
    trackArtifactClick: function () {
      return g;
    },
    trackGuidanceWindowClick: function () {
      return C;
    },
    trackStopWindowShow: function () {
      return f;
    },
    trackShowCard: function () {
      return d;
    },
    trackStopWindowClick: function () {
      return m;
    }
  });
}