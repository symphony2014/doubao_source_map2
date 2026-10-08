// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MP' to 'reportOcpcEventForChannel'
// - Renamed export 'de' to 'trackMicrosoftChannelRegistration'
// - Renamed export 'P5' to 'reportOcpcEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 696329
         */
module.exports = function (module, exports, require) {
  var cookieManagementUtils = require("cookie-management-utils") /*id: 688115*/;
  var chatTextStateUtil = require("chat-text-state-util") /*id: 524020*/;
  var teaIdentityManager = require("tea-identity-manager") /*id: 929669*/;
  function a(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
      if (typeof e != "object" || !e) {
        return e;
      }
      var n = e[Symbol.toPrimitive];
      if (n !== undefined) {
        var i = n.call(e, t || "default");
        if (typeof i != "object") {
          return i;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  let l = require("flow-api-service-proxy") /*id: 538321*/.createServiceProxy("notify", class {
    genBaseURL(e) {
      if (typeof this.baseURL == "string") {
        return this.baseURL + e;
      } else {
        return this.baseURL(e);
      }
    }
    ReportOCPCEvent(e, t) {
      let n = this.genBaseURL("/alice/notice/report_ocpc");
      let i = {
        landing_page_url: e.landing_page_url,
        app_id: e.app_id,
        event_ts: e.event_ts,
        event_name: e.event_name,
        event_params: e.event_params
      };
      return this.request({
        url: n,
        method: "POST",
        data: i
      }, t);
    }
    constructor(e) {
      a(this, "request", () => {
        throw Error("NotifyApiService.request is undefined");
      });
      a(this, "baseURL", "");
      this.request = (e == null ? undefined : e.request) || this.request;
      this.baseURL = (e == null ? undefined : e.baseURL) || "";
    }
  });
  var urlParamUtils = require("url-param-utils") /*id: 919916*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  let c = e => {
    try {
      return !!new URL(e).searchParams.get("channel");
    } catch {
      return false;
    }
  };
  let d = () => ["ug_apk_token", "ug_utm_source"].some(e => urlParamUtils.getQueryParam(e));
  let h = async e => {
    let t = e === "download";
    let n = t ? location.href : chatTextStateUtil.getContent();
    if (!t && !c(n) || t && !d()) {
      return;
    }
    let {
      tea_uuid: i
    } = await g({
      needUid: false
    });
    l.ReportOCPCEvent({
      landing_page_url: n,
      app_id: "482431",
      event_name: e,
      event_ts: String(Math.floor(Date.now() / 1000))
    }, {
      overrideParams: {
        device_id: i
      }
    }).catch(e => {
      loggerServiceCore.defaultLogger.persist.error({
        message: "error when report ocpc",
        error: e
      });
    });
  };
  function m(e) {
    try {
      let t = e.new_user;
      let n = cookieManagementUtils.CookieManager.get("is_microsoft_channel") === "1";
      if (t && n) {
        window.uetq.push("event", "web_register", {});
      }
    } catch (e) {
      loggerServiceCore.defaultLogger.persist.error({
        error: e,
        eventName: "uetq_web_register_event_error"
      });
    }
  }
  let g = e => {
    let {
      needUid: t = true
    } = e;
    return new Promise(e => {
      let n = setInterval(() => {
        let i = teaIdentityManager.getUserIds().uuid;
        let r = teaIdentityManager.getUserId();
        if (i && (r || !t)) {
          clearInterval(n);
          e({
            tea_uid: String(r),
            tea_uuid: String(i)
          });
        }
      }, 500);
      setTimeout(() => {
        clearInterval(n);
      }, 10000);
    });
  };
  let f = ["channel", "360_xxl", "wangyi", "bing_sem", "bing_xxl", "bilibili_xxl", "bilibili_xxl_hy", "bilibili_xxl_ly", "baidu_xxl", "360", "baidu_sem", "gdt_sem", "gdt_xxl", "zhihu_xxl", "youku_xxl", "google_sem", "google_xxl", ""];
  let p = (e, t) => e.filter(e => e === t).length > 0;
  let _ = (e, t) => {
    if (p(e, t)) {
      try {
        let e = new URLSearchParams(window.location.search).get("channel");
        if (e && f.includes(e)) {
          h(t);
        }
      } catch (e) {
        loggerServiceCore.defaultLogger.persist.error({
          error: e,
          eventName: "server_report_ocpc_event_error"
        });
      }
    }
  };
  require.d(exports, {
    reportOcpcEventForChannel: function () {
      return _;
    },
    trackMicrosoftChannelRegistration: function () {
      return m;
    },
    reportOcpcEvent: function () {
      return h;
    }
  });
}