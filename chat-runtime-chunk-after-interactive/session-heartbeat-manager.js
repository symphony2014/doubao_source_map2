// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'G' to 'initSessionHeartbeat'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 232579
         */
module.exports = function (module, exports, require) {
  var cookieUtils = require("cookie-utils") /*id: 535970*/;
  var uniParamsManager = require("uni-params-manager") /*id: 375503*/;
  var eventReportingService = require("event-reporting-service") /*id: 703133*/;
  function s(e) {
    var t = `${e}=`;
    var n = document.cookie.split(";");
    var i = 0;
    for (; i < n.length; i++) {
      var r = n[i].trim();
      if (r.indexOf(t) === 0) {
        return r.substring(t.length, r.length);
      }
    }
    return "";
  }
  function l(e, t, n = "/", i) {
    document.cookie = `${e}=${t};path=${n};domain=${i}`;
  }
  function a(e, t) {
    var n = false;
    return function () {
      if (!n) {
        n = true;
        e();
        setTimeout(function () {
          n = false;
        }, t || 10000);
      }
    };
  }
  function c() {
    return (c = Object.assign || function (e) {
      var t;
      var n = 1;
      var i = arguments.length;
      for (; n < i; n++) {
        for (var r in t = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(t, r)) {
            e[r] = t[r];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var u = "passport_fe_beating_status";
  var d = {
    web: "/passport/token/beat/web/",
    aff: "/passport/token/beat/aff/web/",
    sso: "/passport/token/beat/sso/web/"
  };
  var p = function () {
    function e(e) {
      var t = this;
      this.throttleOnDrop = a(function () {
        t.onAction();
      });
      this.init = function () {
        if (window.XMLHttpRequest) {
          t.startBeating("boot");
          try {
            window.addEventListener("click", t.throttleOnDrop);
            window.addEventListener("scroll", t.throttleOnDrop);
            window.addEventListener("mousemove", t.throttleOnDrop);
            window.addEventListener("beforeunload", function () {
              t.stopBeating();
            });
          } catch (e) {}
        }
      };
      this.onAction = function () {
        if (t.beating) {
          t.setOperationFlag(true);
        } else {
          t.startBeating("active");
        }
      };
      this.setOperationFlag = function (e) {
        localStorage.setItem(`${window.location.origin}-operation`, String(e));
      };
      this.getOperationFlag = function () {
        return localStorage.getItem(`${window.location.origin}-operation`) === "true";
      };
      this.sendBeat = function (e = "polling") {
        var n = t.initProps;
        var i = n.type;
        var r = i === undefined ? "web" : i;
        var o = n.aid;
        var s = n.subjectAid;
        var l = n.ssoHost;
        var a = n.commonParams;
        var u = c(c({}, a), {
          aid: o,
          subjectAid: s,
          scene: e,
          device_platform: "web",
          passport_jssdk_version: "1.0.0"
        });
        if (r === "sso") {
          t.sendBeatRequest(l + d.sso, u, function () {
            t.sendBeatRequest(d.web, u);
          });
        } else if (r === "aff") {
          t.sendBeatRequest(d.aff, u);
        } else {
          t.sendBeatRequest(d.web, u);
        }
      };
      this.sendBeatRequest = function (e, n, i) {
        var r = t.initProps.onDrop;
        var o = new XMLHttpRequest();
        o.withCredentials = true;
        o.onreadystatechange = function () {
          if (o.readyState === 4 && o.status === 200) {
            var n = o.responseText;
            var s = {};
            try {
              s = JSON.parse(n);
            } catch (e) {}
            if ((s == null ? undefined : s.message) !== "error" && i != null) {
              i();
            }
            if ((s == null ? undefined : s.message) === "error" && (s == null ? undefined : s.data)?.error_code === 401) {
              try {
                window.removeEventListener("click", t.throttleOnDrop);
                window.removeEventListener("scroll", t.throttleOnDrop);
                window.removeEventListener("mousemove", t.throttleOnDrop);
              } catch (e) {}
              t.stopBeating();
              if (r != null) {
                r();
              }
            }
          }
        };
        var s = `${e}?${Object.keys(n).filter(function (e) {
          return n[e] !== undefined;
        }).map(function (e) {
          return `${e}=${n[e]}`;
        }).join("&")}`;
        o.open("GET", `${s}`);
        o.send();
      };
      this.stopBeating = function () {
        if (t.timer) {
          clearInterval(t.timer);
        }
        if (t.beating) {
          t.beating = false;
          l(u, false, "/", window.location.host);
          t.setOperationFlag(false);
        }
      };
      this.startBeating = function (e = "polling") {
        if (s(u) !== "true" || t.beating) {
          var n = t.initProps.beatFreq;
          t.sendBeat(e);
          l(u, true, "/", window.location.host);
          t.beating = true;
          if (t.timer) {
            clearInterval(t.timer);
          }
          t.timer = setInterval(function () {
            if (t.getOperationFlag()) {
              t.setOperationFlag(false);
              t.sendBeat("polling");
            } else {
              t.stopBeating();
            }
          }, n ? n * 60000 : 600000);
        }
      };
      this.initProps = e;
      this.beating = false;
      this.timer = null;
    }
    e.getInstance = function (t) {
      e.instance ||= new e(t);
      return this.instance;
    };
    e.instance = null;
    return e;
  }();
  var flowAccountModule = require("flow-account-module") /*id: 898004*/;
  let v = {};
  let h = null;
  let m = "passport_fe_beating_status";
  let f = () => {
    let e = uniParamsManager.uniParamsManager.getParam("aid");
    let t = eventReportingService.createEventReporter({
      eventName: "init_session_beat",
      meta: {
        aid: e,
        hasInstance: !!h
      }
    });
    if (e) {
      try {
        if (!h) {
          let n = cookieUtils.getCookie(m) === "true";
          if (n) {
            cookieUtils.setCookie(m, false, {
              path: "/",
              domain: window.location.host
            });
          }
          h = new p({
            aid: e,
            type: "web",
            onDrop: () => {
              flowAccountModule.getFlowAccount().passportApi.logout({
                reason: "session_beat_drop"
              });
            },
            ...v
          });
          t.updateMeta({
            isCookieSet: +!!n,
            hasInstance: +!!h
          });
          h.init();
          t.success();
        }
      } catch (e) {
        t.error({
          reason: "olympus_login_session_beat_init_error",
          error: e
        });
      }
    }
  };
  require.d(exports, {
    initSessionHeartbeat: function () {
      return f;
    }
  });
}