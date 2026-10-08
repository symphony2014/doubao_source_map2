// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'zQ' to 'createEventReporter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 10782.3050e48d.js
         * chunkId: 10782
         * moduleId: 703133
         */
module.exports = function (module, exports, require) {
  var safeObjectSetWrapper = require("safe-object-set-wrapper") /*id: 784610*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let r = e => {
    let t;
    let {
      eventName: a,
      logger: r = loggerServiceCore.defaultLogger,
      meta: s,
      once: o = false
    } = e;
    let l = [];
    let v = 0;
    let c = false;
    let u = () => {
      v = Date.now();
      r.persist.info({
        eventName: `${a}_start`,
        meta: {
          ...d()
        }
      });
    };
    let d = () => ({
      ...s,
      ...(c ? {
        event_has_finished: true
      } : {})
    });
    let m = () => {
      if (l.length !== 0) {
        return l.reduce((e, t, a) => {
          let {
            pointName: i
          } = t;
          e[i] = t.time - v;
          safeObjectSetWrapper.safeObjectSet(e, ["interval", i], a === 0 ? e[i] : t.time - l[a - 1].time);
          return e;
        }, {});
      }
    };
    let _ = function ({
      meta: e
    } = {}) {
      if (!o || !c) {
        r.persist.success({
          eventName: a,
          meta: {
            ...d(),
            success: 1,
            duration: m(),
            ...e
          }
        });
        c = true;
      }
    };
    let p = e => {
      let {
        reason: t,
        error: n,
        meta: i
      } = e;
      if (!o || !c) {
        r.persist.error({
          eventName: a,
          error: n || Error(t),
          meta: {
            ...d(),
            success: 0,
            reason: t,
            duration: m(),
            ...i
          }
        });
        c = true;
      }
    };
    u();
    return {
      name: "ReportEvent",
      start: u,
      cancel: () => {
        clearTimeout(t);
        c = true;
      },
      success: _,
      successIfIdle: (e, a, n) => {
        clearTimeout(t);
        t = setTimeout(() => c ? undefined : (_(a), n == null ? undefined : n()), e);
      },
      error: p,
      errorIfIdle: (e, a, n) => {
        clearTimeout(t);
        t = setTimeout(() => c ? undefined : (p(a), n == null ? undefined : n()), e);
      },
      addDurationPoint: function (e) {
        let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let a = arguments.length > 2 ? arguments[2] : undefined;
        let n = l.find(t => t.pointName === e);
        if (n) {
          if (t) {
            n.time = Date.now();
          }
          if (a) {
            n.time = a;
          }
        } else {
          l.push({
            pointName: e,
            time: a || Date.now()
          });
        }
        l.sort((e, t) => e.time - t.time);
      },
      getDuration: m,
      getDurationTimestamp: () => {
        if (l.length !== 0) {
          return l.reduce((e, t) => {
            let {
              pointName: a
            } = t;
            e[a] = t.time;
            return e;
          }, {});
        }
      },
      reportDurationPoint: function (e) {
        let t = !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
        let n = l.find(t => t.pointName === e);
        if (!t || n == null || !n.reported) {
          r.persist.info({
            eventName: `${a}_duration_${e}`,
            meta: {
              ...d()
            }
          });
          if (n) {
            n.reported = true;
          }
        }
      },
      getMeta: d,
      updateMeta: e => {
        s = {
          ...s,
          ...e
        };
      },
      getFinishStatus: () => c,
      setStartTime: e => {
        v = e;
      }
    };
  };
  let s = e => {
    let {
      logger: t = loggerServiceCore.defaultLogger,
      ...a
    } = e;
    return r({
      logger: t,
      ...a
    });
  };
  require.d(exports, {
    createEventReporter: function () {
      return s;
    }
  });
}