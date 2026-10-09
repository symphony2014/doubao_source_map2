// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'C' to 'useMessageStuckMonitor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 432053
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var arraySumByMatcher = require("array-sum-by-matcher") /*id: 746667*/;
  var arrayMaxByMatcherUtil = require("array-max-by-matcher-util") /*id: 136425*/;
  var messageTraceManager = require("message-trace-manager") /*id: 341265*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var useEventListenerHook = require("use-event-listener-hook") /*id: 629504*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let c = e => {
    let {
      conversationId: t,
      extraEventParams: n = {},
      eventName: c = "message_smooth_text_stuck",
      getNow: u = performance.now.bind(performance)
    } = e;
    let m = reactCoreLibraryReexport.useRef([]);
    let h = reactCoreLibraryReexport.useRef();
    let _ = reactCoreLibraryReexport.useRef();
    let p = reactCoreLibraryReexport.useRef(u());
    let v = reactCoreLibraryReexport.useRef();
    let f = reactCoreLibraryReexport.useRef(messageTraceManager.MessageTraceManager.getInstance(t));
    reactCoreLibraryReexport.useEffect(() => {
      f.current.addWaiter(c);
    }, []);
    useEventListenerHook.useEventListener("visibilitychange", () => {
      if (!_.current) {
        return;
      }
      if (document.hidden) {
        v.current = u();
        return;
      }
      if (!v.current) {
        return;
      }
      let e = u() - v.current;
      _.current += e;
    });
    let g = () => {
      m.current = [];
      h.current = undefined;
      _.current = undefined;
      p.current = u();
    };
    return {
      onTextUpdate: e => {
        h.current = e;
        let t = _.current;
        let n = u();
        _.current = n;
        if (t) {
          m.current.push({
            duration: n - t
          });
        }
      },
      onFinish: () => {
        if (!_.current || !h.current) {
          return;
        }
        let t = m.current;
        let o = t.filter(e => e.duration > 600 && e.duration <= 1000);
        let i = arraySumByMatcher.sumByMatcher(o, e => e.duration);
        let s = t.filter(e => e.duration > 1000 && e.duration <= 3000);
        let v = arraySumByMatcher.sumByMatcher(s, e => e.duration);
        let x = t.filter(e => e.duration > 3000);
        let k = arraySumByMatcher.sumByMatcher(x, e => e.duration);
        let w = {
          ...n,
          stuck_duration: arraySumByMatcher.sumByMatcher(t, e => e.duration),
          full_duration: u() - p.current,
          stuck_count: t.length,
          content_length: h.current.length,
          stuck_duration_600ms: i,
          stuck_duration_600ms_count: o.length,
          stuck_duration_1000ms: v,
          stuck_duration_1000ms_count: s.length,
          stuck_duration_3000ms: k,
          stuck_duration_3000ms_count: x.length,
          stuck_max_duration: arrayMaxByMatcherUtil.arrayMaxByMatcher(t, e => e.duration)?.duration
        };
        teaAnalyticsEventTracker.trackEvent(c, w);
        let {
          rootSpan: b
        } = f.current;
        if (b != null) {
          b.setTags({
            client_slight_stuck_duration: v,
            client_slight_stuck_count: s.length,
            client_severe_stuck_duration: k,
            client_severe_stuck_count: x.length,
            client_render_answer_duration: b.elapse()
          });
        }
        f.current.resolveWaiter(c);
        loggerServiceCore.defaultLogger.persist.log({
          eventName: c,
          meta: w
        });
        g();
      }
    };
  };
  require.d(exports, {
    useMessageStuckMonitor: function () {
      return c;
    }
  });
}