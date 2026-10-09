// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'dT' to 'useFpsMonitorHook'
// - Renamed export 'wV' to 'useScrollTriggeredFps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 28821.95116918.js
         * chunkId: 28821
         * moduleId: 510340
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var teaAnalyticsEventTracker = require("tea-analytics-event-tracker") /*id: 236290*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactFpsMonitorHook = require("react-fps-monitor-hook") /*id: 835333*/;
  let s = e => {
    let {
      eventName: s,
      interval: d
    } = e;
    let c = reactCoreLibraryReexport.useRef([]);
    let u = reactCoreLibraryReexport.useRef({});
    let m = typeof window != "undefined" && !!window.fps?.startRecord;
    let h = typeof window != "undefined" && !!window.webExternal?.StartMeasure;
    let _ = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (c.current.length >= 120) {
        c.current.shift();
      }
      c.current.push(e);
    });
    let p = reactFunctionMemoHook.useMemoizedCallback(e => {
      u.current = e;
    });
    let {
      start: v,
      stop: f
    } = reactFpsMonitorHook.useFpsMonitor({
      interval: d,
      eventName: s,
      isNativeFpsEnabled: m,
      isNativeStartMeasureEnabled: h,
      onChange: _,
      onMeasureChange: p
    });
    return {
      startRecord: reactFunctionMemoHook.useMemoizedCallback(() => {
        c.current = [];
        v();
      }),
      reportFPS: reactFunctionMemoHook.useMemoizedCallback(e => {
        f();
        let n = c.current;
        if (n.length < 1) {
          return;
        }
        let o = Math.round(n.reduce((e, t) => e + t, 0) / n.length);
        let r = n.reduce((e, t) => {
          if (t < 20) {
            e++;
          }
          return e;
        }, 0) >= 3;
        let a = n.reduce((e, t) => {
          if (t < 10) {
            e++;
          }
          return e;
        }, 0) >= 3;
        let d = n.reduce((e, t) => {
          if (t < 3) {
            e++;
          }
          return e;
        }, 0) >= 3;
        let {
          duration: _,
          ...p
        } = u.current?.resource || {};
        let v = {
          ...p,
          is_native_fps_enabled: m,
          is_native_start_measure_enabled: h,
          fps_list: n,
          avg_fps: o,
          is_minor_stuck: r,
          is_major_stuck: a,
          is_critical_stuck: d,
          ...e
        };
        loggerServiceCore.defaultLogger.persist.info({
          eventName: s,
          meta: v
        });
        teaAnalyticsEventTracker.trackEvent(s.replaceAll("-", "_"), v);
      })
    };
  };
  let d = e => {
    let {
      eventName: t
    } = e;
    let n = reactCoreLibraryReexport.useRef(false);
    let l = reactCoreLibraryReexport.useRef();
    let {
      startRecord: r,
      reportFPS: a
    } = s({
      eventName: t
    });
    let d = e => {
      l.current = setTimeout(() => {
        a(e);
        n.current = false;
      }, 5000);
    };
    return {
      onScrollForFPS: e => {
        if (n.current) {
          clearTimeout(l.current);
          d(e);
        } else {
          let o = {
            ...e,
            type: "start"
          };
          loggerServiceCore.defaultLogger.persist.info({
            eventName: t,
            meta: o
          });
          n.current = true;
          r();
          d(e);
        }
      }
    };
  };
  let c = e => {
    let {
      eventName: t
    } = e;
    let {
      startRecord: n,
      reportFPS: l
    } = s({
      eventName: t
    });
    let r = reactCoreLibraryReexport.useRef(false);
    return {
      startFPSRecord: () => {
        if (!r.current) {
          r.current = true;
          n();
        }
      },
      stopFPSRecord: e => {
        r.current = false;
        l(e);
      }
    };
  };
  require.d(exports, {
    useFpsMonitorHook: function () {
      return c;
    },
    useScrollTriggeredFps: function () {
      return d;
    }
  });
}