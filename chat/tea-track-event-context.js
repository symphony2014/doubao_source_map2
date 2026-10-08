// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'useTrackContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 599408
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var isUndefinedCheck = require("is-undefined-check") /*id: 600117*/;
  var arrayObjectForeach = require("array-object-foreach") /*id: 434194*/;
  var throttledArrayIntersection_1 = require("throttled-array-intersection_1") /*id: 766812*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let u = (e, t) => ({
    contextMap: {},
    setTrackEventContext(n, i, r) {
      if (!n || isUndefinedCheck.isUndefined(i)) {
        loggerServiceCore.defaultLogger.console.warning("[Tea] ctxName 或 ctxPayload 为空");
        return;
      }
      if (!n.startsWith("ctx")) {
        loggerServiceCore.defaultLogger.console.warning(`[Tea] key ${n} must start with "ctx_".`);
      }
      let {
        contextMap: u
      } = t();
      arrayObjectForeach.arrayObjectForeach(u, (e, t) => {
        if (e && n !== t) {
          let r = throttledArrayIntersection_1.throttledIntersect(Object.keys(e.value), Object.keys(i));
          if (r.length) {
            loggerServiceCore.defaultLogger.persist.warning(`[Tea] ${n} \u{548C} ${t} \u{4E2D}\u{5305}\u{542B}\u{6709}\u{76F8}\u{540C}\u{7684}\u{4E0A}\u{4E0B}\u{6587}\u{5185}\u{5BB9} ${r.toString()}`);
          }
        }
      });
      let {
        global: c = false,
        enableEventName: d = null
      } = r || {};
      u[n] = {
        value: i,
        extra: {
          global: c,
          enableEventName: d
        }
      };
      e({
        contextMap: u
      });
    },
    getTrackEventContext(e, n) {
      let i;
      if (!e) {
        loggerServiceCore.defaultLogger.console.warning("ctxName 为空");
        return;
      }
      let {
        contextMap: r
      } = t();
      let o = r[e];
      if (!o) {
        loggerServiceCore.defaultLogger.console.warning(`Context ${e} \u{4E3A}\u{7A7A}.`);
        return;
      }
      let a = o.value;
      return {
        value: typeof a == "function" ? a == null ? undefined : a(n) : a,
        extra: o.extra
      };
    },
    getOriginTrackEventContextList(e) {
      let {
        contextMap: n,
        getTrackEventContext: i
      } = t();
      return Object.keys(n).map(t => {
        let n = i(t, e);
        if (n) {
          return {
            ctxName: t,
            ...n
          };
        } else {
          return {
            ctxName: t,
            value: {},
            extra: {}
          };
        }
      });
    },
    clearTrackEventContext(t) {
      e(e => {
        let n = {
          ...e.contextMap
        };
        delete n[t];
        return {
          contextMap: {
            ...n
          }
        };
      });
    },
    getAllTrackEventContext(e, n) {
      let i = {};
      let {
        contextMap: r,
        getTrackEventContext: o
      } = t();
      arrayObjectForeach.arrayObjectForeach(r, (t, r) => {
        let {
          value: a,
          extra: l
        } = o(r, n) || {};
        if (!e || e && (l == null ? undefined : l.global)) {
          i = {
            ...i,
            ...a
          };
        }
      });
      return i;
    }
  });
  let c = (() => {
    let e = reduxDevtoolsPersistIntegration.enhanceSubscribe(u);
    return reactStoreHookFactory.createStoreHook()(e);
  })();
  require.d(exports, {
    useTrackContext: function () {
      return c;
    }
  });
}