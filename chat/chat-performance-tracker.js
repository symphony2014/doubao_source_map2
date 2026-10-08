// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gt' to 'trackChatFinish'
// - Renamed export 'X1' to 'trackChatViewShow'
// - Renamed export 'YL' to 'trackChatInteract'
// - Renamed export 'pR' to 'getChatPerformance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 899320
         */
module.exports = function (module, exports, require) {
  var performanceStoreHook = require("performance-store-hook") /*id: 299680*/;
  var performanceTimeUtil = require("performance-time-util") /*id: 512870*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let a = e => {
    let {
      first_visit_page: t
    } = e;
    performanceStoreHook.usePerformanceStore.getState().addDurationPoint(`[${t}]_chat_view_show`, performanceTimeUtil.getPerformanceNow());
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "flow_chat_page_visible",
      meta: {
        first_visit_page: t,
        time: performanceStoreHook.usePerformanceStore.getState().duration[`[${t}]_chat_view_show`]
      }
    });
  };
  let l = e => {
    let {
      first_visit_page: t
    } = e;
    performanceStoreHook.usePerformanceStore.getState().addDurationPoint(`[${t}]_chat_view_interactive`, performanceTimeUtil.getPerformanceNow());
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "flow_chat_page_interactive",
      meta: {
        first_visit_page: t,
        time: performanceStoreHook.usePerformanceStore.getState().duration[`[${t}]_chat_view_interactive`]
      }
    });
  };
  let s = e => {
    let {
      first_visit_page: t
    } = e;
    performanceStoreHook.usePerformanceStore.getState().addDurationPoint(`[${t}]_chat_page_finish`, performanceTimeUtil.getPerformanceNow());
    performanceStoreHook.usePerformanceStore.getState().addDurationPoint(`[${t}]_chat_page_finish_time_stamp`, Date.now());
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "flow_chat_page_finish",
      meta: {
        first_visit_page: t,
        time: performanceStoreHook.usePerformanceStore.getState().duration[`[${t}]_chat_page_finish`]
      }
    });
  };
  let u = e => {
    let {
      record_visit_page: t,
      first_visit_page: n,
      sub_scene: r,
      excludeServerTiming: o = false
    } = e;
    let {
      duration: a
    } = performanceStoreHook.usePerformanceStore.getState();
    let {
      [`[${t ?? n}]_chat_view_show`]: l,
      [`[${t ?? n}]_chat_view_interactive`]: s,
      [`[${t ?? n}]_chat_page_finish`]: u,
      [`[${t ?? n}]_chat_page_finish_time_stamp`]: c,
      server_ttwid: d,
      server_parallel_account_info: h,
      server_parallel_user_setting: m,
      server_parallel_skill_list: g,
      server_parallel_chain_recent_conv: f,
      server_parallel_conversation: p,
      server_parallel_message_list: _
    } = a;
    if (o) {
      return {
        first_visit_page: n,
        sub_scene: r,
        chat_view_show: l,
        chat_view_interactive: s,
        chat_page_finish: u,
        chat_page_finish_time_stamp: c
      };
    } else {
      return {
        first_visit_page: n,
        sub_scene: r,
        chat_view_show: l,
        chat_view_interactive: s,
        chat_page_finish: u,
        chat_page_finish_time_stamp: c,
        server_ttwid: d,
        server_parallel_account_info: h,
        server_parallel_user_setting: m,
        server_parallel_skill_list: g,
        server_parallel_chain_recent_conv: f,
        server_parallel_conversation: p,
        server_parallel_message_list: _
      };
    }
  };
  require.d(exports, {
    trackChatFinish: function () {
      return s;
    },
    trackChatViewShow: function () {
      return a;
    },
    trackChatInteract: function () {
      return l;
    },
    getChatPerformance: function () {
      return u;
    }
  });
}