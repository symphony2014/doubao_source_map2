// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'r' to 'teaTrackEventContext'
// - Resolved require(599408) to 'tea-track-event-context'
// - Renamed variable 'a' to 'teaAnalyticsInitializer'
// - Resolved require(258354) to 'tea-analytics-initializer'
// - Resolved require.e(27853) to 'telemetry-track-monitor'
// - Resolved require.bind(668785) to 'track-monitor-module'
// - Updated imported property 'z' to 'useTrackContext' (module 599408)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Y7' to 'getTeaInstance' (module 258354)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 236290
         */
module.exports = function (module, exports, require) {
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var teaTrackEventContext = require("tea-track-event-context") /*id: 599408*/;
  let o = {};
  var teaAnalyticsInitializer = require("tea-analytics-initializer") /*id: 258354*/;
  let l = new Map(["picture_message_show", "show_suggested_prompt_single_question", "show_suggested_prompt", "video_card_show", "show_onboarding_card_single_question", "show_onboarding_card", "music_card_show"].map(e => [e, 0]));
  let s = (e, t) => {
    if (!e || !l.has(e)) {
      return false;
    }
    let r;
    let o = 300;
    if (typeof t == "string") {
      r = t;
    } else if (typeof t == "object") {
      r = t == null ? undefined : t.key;
      o = (t == null ? undefined : t.duration) ?? o;
    }
    let a = Date.now();
    let s = r === undefined ? e : `${e}_${r}`;
    return !!l.has(s) && !(a - ((l == null ? undefined : l.get(s)) ?? 0) > o) || (l.set(s, a), false);
  };
  let u = e => typeof e == "object" && e.withSlardar;
  let c = (e, t) => {
    let {
      getTrackEventContext: n,
      getOriginTrackEventContextList: i
    } = teaTrackEventContext.useTrackContext.getState();
    let o = t.map(t => {
      let i = n(t, {
        eventName: e
      });
      if (!i) {
        return {};
      }
      let {
        value: r,
        extra: o
      } = i;
      let {
        enableEventName: a
      } = o;
      if (!(a == null ? undefined : a.length) || a.length && a.includes(e)) {
        return r;
      } else {
        return {};
      }
    });
    let a = i({
      eventName: e
    }).filter(t => {
      let {
        global: n,
        enableEventName: i
      } = t.extra || {};
      if (n && (!(i == null ? undefined : i.length) || i.length && i.includes(e))) {
        return true;
      }
    }).map(e => e.value) || [];
    let l = {};
    o.concat(a).forEach(e => {
      Object.assign(l, e);
    });
    return l;
  };
  let d = async e => {
    try {
      var t;
      let {
        TrackMonitor: i
      } = await require.e("telemetry-track-monitor") /*id: 27853*/.then(require.bind(require, "track-monitor-module") /*id: 668785*/);
      if (i != null && (t = i.getInstance()) !== null && t !== undefined) {
        t.markTracked(e);
      }
    } catch (t) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "track_monitor_import_error",
        error: t instanceof Error ? t : Error(String(t)),
        meta: {
          event: e
        }
      });
    }
  };
  let h = (e, t, n, r) => {
    let l = teaAnalyticsInitializer.getTeaInstance();
    if (!l) {
      return;
    }
    if (n !== undefined && s(e, n)) {
      loggerServiceCore.defaultLogger.persist.log({
        eventName: "trackevent_debounce",
        meta: {
          event: e,
          options: n
        }
      });
      return;
    }
    let h = c(e, (n == null ? undefined : n.ctx) || []);
    let m = {
      current_page: h.current_page,
      previous_page: h.previous_page
    };
    if (!h.current_page || h.current_page === "other" && (t == null ? undefined : t.current_page)) {
      delete m.current_page;
    }
    if (!h.previous_page || h.previous_page === "other" && (t == null ? undefined : t.previous_page)) {
      delete m.previous_page;
    }
    try {
      let a = {
        ...h,
        ...t,
        ...m
      };
      let s = o.event || null;
      if (s) {
        s(e, a);
      } else if (l != null) {
        l.event(e, a);
      }
      if (r) {
        if (l != null) {
          l.clearEventCache();
        }
      }
      if (u(n)) {
        loggerServiceCore.defaultLogger.persist.log({
          eventName: e,
          meta: a
        });
      }
      d(e);
    } catch (n) {
      if (n instanceof Error) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "track_event_error",
          error: n,
          meta: {
            event: e,
            params: t
          }
        });
      }
    }
  };
  require.r(exports);
  require.d(exports, {
    trackEvent: function () {
      return h;
    }
  });
}