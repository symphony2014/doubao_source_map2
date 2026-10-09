// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F7' to 'initializeTeaAnalytics'
// - Renamed export 'MC' to 'getWebAnonId'
// - Renamed export 'Y7' to 'getTeaInstance'
// - Renamed export 'vo' to 'getAutoExposureFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 258354
         */
module.exports = function (module, exports, require) {
  let i;
  let r;
  let o;
  var emptyExportFunction = require("empty-export-function") /*id: 232077*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let s = (e, t, n) => {
    if (typeof window == "undefined") {
      return;
    }
    h(e);
    e.config(t);
    e.event("predefine_pageview_all");
    e.event("login_status", {
      status: t.user_id ? "logined" : "unlogin"
    });
    let {
      lifecycle: i,
      filterEvent: l,
      getWebAnonID: s
    } = n;
    if (i) {
      let {
        onEventSubmitBefore: t
      } = i;
      if (t) {
        e.on("submit-before", t);
      }
    }
    r = emptyExportFunction.emptyFunction;
    if (s) {
      o = s;
    }
    if (l) {
      e.filterEvent(l);
    }
  };
  let u = () => {
    if (!i) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "tea_instance_empty",
        error: Error("tea_instance_empty")
      });
      return;
    }
    return i;
  };
  let c = () => {
    if (!r) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "tea_get_auto_exposure_empty",
        error: Error("tea_get_auto_exposure_empty")
      });
      return;
    }
    return r;
  };
  let d = () => {
    if (!o) {
      loggerServiceCore.defaultLogger.persist.error({
        eventName: "tea_get_web_anon_id_empty",
        error: Error("tea_get_web_anon_id_empty")
      });
      return;
    }
    return o;
  };
  let h = e => {
    if (typeof window != "undefined" && !i) {
      i = e;
    }
  };
  require.d(exports, {
    initializeTeaAnalytics: function () {
      return s;
    },
    getWebAnonId: function () {
      return d;
    },
    getTeaInstance: function () {
      return u;
    },
    getAutoExposureFunction: function () {
      return c;
    }
  });
}