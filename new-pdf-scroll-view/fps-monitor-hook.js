// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'B' to 'useFpsMonitorWithLogging'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: new-pdf-scroll-view.beafc32e.js
         * chunkId: 92089
         * moduleId: 833887
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var reactFpsMonitorHook = require("react-fps-monitor-hook") /*id: 835333*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let o = e => {
    let {
      eventName: t,
      totalPage: n = 0,
      newVersion: o = "0"
    } = e;
    let s = reactCoreLibraryReexport.useRef(false);
    let c = reactCoreLibraryReexport.useRef();
    let u = reactCoreLibraryReexport.useRef([]);
    let d = reactFunctionMemoHook.useMemoizedCallback(e => {
      if (u.current.length >= 120) {
        u.current.shift();
      }
      u.current.push(e);
    });
    let {
      start: h,
      stop: p
    } = reactFpsMonitorHook.useFpsMonitor({
      eventName: t,
      onChange: d
    });
    let f = reactFunctionMemoHook.useMemoizedCallback(() => {
      let e = u.current;
      if (e.length < 1) {
        return;
      }
      let r = Math.round(e.reduce((e, t) => e + t, 0) / e.length);
      let a = e.reduce((e, t) => {
        if (t < 20) {
          e++;
        }
        return e;
      }, 0) >= 3;
      let l = e.reduce((e, t) => {
        if (t < 10) {
          e++;
        }
        return e;
      }, 0) >= 3;
      let s = e.reduce((e, t) => {
        if (t < 3) {
          e++;
        }
        return e;
      }, 0) >= 3;
      loggerServiceCore.defaultLogger.persist.info({
        eventName: t,
        meta: {
          fpsList: e,
          avgFPS: r,
          isStuck: a,
          isAwfulStuck: l,
          isBlockStuck: s,
          totalPage: n,
          newVersion: o
        }
      });
    });
    let g = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (s.current) {
        clearTimeout(c.current);
      } else {
        loggerServiceCore.defaultLogger.persist.info({
          eventName: t,
          meta: {
            totalPage: n,
            newVersion: o,
            type: "start"
          }
        });
        h();
      }
      m();
    });
    let m = reactFunctionMemoHook.useMemoizedCallback(() => {
      s.current = true;
      c.current = setTimeout(() => {
        p();
        f();
        u.current = [];
        s.current = false;
      }, 5000);
    });
    return {
      start: g,
      stop: m
    };
  };
  require.d(exports, {
    useFpsMonitorWithLogging: function () {
      return o;
    }
  });
}