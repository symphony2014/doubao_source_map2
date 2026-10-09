// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Dz' to 'getUserIds'
// - Renamed export 'HX' to 'initGuestUserId'
// - Renamed export 'Hl' to 'setLoginStatus'
// - Renamed export 'NV' to 'persistUserId'
// - Renamed export 'do' to 'clearIdentityCache'
// - Renamed export 'p7' to 'getUserId'
// - Renamed export 't8' to 'getUserUniqueId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 929669
         */
module.exports = function (module, exports, require) {
  let i;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  var deferredExecutionUtils = require("deferred-execution-utils") /*id: 43572*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var teaAnalyticsInitializer = require("tea-analytics-initializer") /*id: 258354*/;
  let c = {
    tokens: {},
    meanKeys: ["user_unique_id", "web_id"]
  };
  let d = function (e = false, t) {
    if ((e || c.meanKeys.some(e => !c.tokens[e])) && userAgentDeviceDetector.isWindowDefined) {
      m(t);
    }
    return c.tokens;
  };
  let h = () => {
    i ||= {
      fetching: false,
      callbacks: []
    };
    return i;
  };
  let m = e => {
    let t = h();
    let n = teaAnalyticsInitializer.getTeaInstance();
    if (e) {
      t.callbacks.push(e);
    }
    if (!n || t.fetching) {
      return;
    }
    t.fetching = true;
    let i = deferredExecutionUtils.createDelayedTask(() => {
      t.fetching = false;
    }, 5000);
    n.getToken(e => {
      i.exec();
      t.callbacks.splice(0, t.callbacks.length).forEach(t => {
        t(e.user_unique_id || e.web_id);
      });
      c.tokens = e;
    });
  };
  let g = () => String(d().user_unique_id);
  let f = () => d().user_id;
  let p = () => {
    let {
      web_id: e,
      user_unique_id: t
    } = d();
    return {
      webId: e,
      uuid: t
    };
  };
  let _ = e => e == null ? undefined : e.getConfig("user_id");
  let v = (e, t, n) => {
    var i;
    var o;
    let a = e || teaAnalyticsInitializer.getTeaInstance();
    let l = !n && !!t;
    if ((i = a.getABconfig) !== null && i !== undefined) {
      i.call(a, {
        user_id: t
      }, emptyExportFunction.emptyFunction);
    }
    if ((o = a.config) !== null && o !== undefined) {
      o.call(a, {
        user_id: t,
        user_is_login: l,
        evtParams: {
          biz_user_id: t
        }
      });
    }
    b(t, n);
    a.event("login_status", {
      status: l ? "logined" : "unlogin"
    });
    d(true, teaAnalyticsInitializer.getAutoExposureFunction());
  };
  function b(e, t) {
    if (e && !t) {
      storageWrapperWithFallback.LocalStorageWrapper.setItem("flow_tea_user_id", e);
    } else {
      storageWrapperWithFallback.LocalStorageWrapper.removeItem("flow_tea_user_id");
    }
  }
  let S = (e, t, n) => e === "0" && loggerServiceCore.defaultLogger.persist.warning({
    message: "exceptional guest uid",
    meta: {
      reportStep: `${t}_uid`,
      logId: n
    }
  });
  let P = async () => {
    let e = teaAnalyticsInitializer.getTeaInstance();
    let t = _(e);
    if (t) {
      S(t, "exist");
      return;
    }
    if (e != null) {
      e.stop();
    }
    let n = "init_ttwid";
    try {
      let t = teaAnalyticsInitializer.getWebAnonId();
      n = "fetch_uid";
      let r = await (t == null ? undefined : t());
      if (!(r == null ? undefined : r.uid) || r.uid === "0" || String(r.web_id) === r.uid) {
        throw Error("guest uid is empty");
      }
      let o = r.uid;
      if (e && !_(e)) {
        v(e, o, true);
      }
      S(o, "fetch", r._meta?.logId);
      loggerServiceCore.defaultLogger.persist.info({
        message: "guest uid fetched"
      });
    } catch (e) {
      if (e instanceof Error) {
        loggerServiceCore.defaultLogger.persist.error({
          message: "set guest uid error",
          error: e,
          meta: {
            reportStep: n
          }
        });
      }
    }
    if (e != null) {
      e.reStart();
    }
    if (e != null) {
      e.clearEventCache();
    }
  };
  let C = () => {
    let e = teaAnalyticsInitializer.getTeaInstance();
    if (e) {
      return new Promise(t => {
        setTimeout(() => {
          var n;
          if (e != null && (n = e.clearEventCache) !== null && n !== undefined) {
            n.call(e);
          }
          v(e, undefined);
          t();
        });
      });
    }
  };
  require.d(exports, {
    getUserIds: function () {
      return p;
    },
    initGuestUserId: function () {
      return P;
    },
    setLoginStatus: function () {
      return v;
    },
    persistUserId: function () {
      return b;
    },
    clearIdentityCache: function () {
      return C;
    },
    getUserId: function () {
      return f;
    },
    getUserUniqueId: function () {
      return g;
    }
  });
}