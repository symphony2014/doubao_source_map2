// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K' to 'CommentInitService'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 96229.238a9f49.js
         * chunkId: 96229
         * moduleId: 672050
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var classCallCheckUtil = require("class-call-check-util") /*id: 822439*/;
  var classPropertyUtil = require("class-property-util") /*id: 801584*/;
  var setPrototypeInheritance = require("set-prototype-inheritance") /*id: 805158*/;
  var wrapNativeSuperHelper = require("wrap-native-super-helper") /*id: 694678*/;
  var asyncToGeneratorHelper = require("async-to-generator-helper") /*id: 409129*/;
  var objectPropertyAssign = require("object-property-assign") /*id: 526210*/;
  var regeneratorRuntimePolyfill = require("regenerator-runtime-polyfill") /*id: 352802*/;
  var p = regeneratorRuntimePolyfill;
  var axiosHttpClientLibrary = require("axios-http-client-library") /*id: 936615*/;
  var queryStringUtils_6 = require("query-string-utils_6") /*id: 313705*/;
  var m = queryStringUtils_6;
  (r = o = o || {}).POST = "post";
  r.GET = "get";
  function v(e) {
    try {
      return JSON.stringify(e);
    } catch (e) {
      return "parse error";
    }
  }
  function g(e) {
    return e = (e = e.replace(/(?:^.*\/\/[^/]+\/)|(?:\/*(?:\?.*)?$)/g, "").replace(/\//g, ".").replace(/^\./g, "")).indexOf("v2.cover") > -1 ? e.replace(/v2.cover.+/, "v2.cover") : e;
  }
  var D = function () {
    function e() {
      var t;
      var n;
      var r = this;
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheckUtil.classCallCheck(this, e);
      var a = o.bizType;
      var s = o.baseURL;
      var u = o.reporter;
      var d = o.headers;
      if ((a === undefined ? 0 : a) !== 0) {
        d = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, d), {}, {
          "X-Request-Source": "comment_component"
        });
      }
      this.reporter = u;
      var f = false;
      n = o.requestInstance || (a = axiosHttpClientLibrary.axios.create({
        baseURL: `${s ? s.replace(/\/$/, "") : ""}/space`,
        headers: objectPropertyAssign.assignObject({
          "Content-Type": "application/x-www-form-urlencoded"
        }, d),
        withCredentials: true,
        transformRequest: [function (e, t) {
          if (t["Content-Type"] === "application/json") {
            return JSON.stringify(e);
          } else {
            return m.stringify(e, {
              arrayFormat: "repeat"
            });
          }
        }]
      }), f = true, a);
      t = asyncToGeneratorHelper.asyncToGenerator(p.mark(function e(t, o) {
        var i;
        var a;
        var s;
        var u;
        var l;
        var d;
        return p.wrap(function (e) {
          while (true) {
            switch (e.prev = e.next) {
              case 0:
                i = Date.now();
                e.prev = 1;
                if (r.reporter) {
                  r.reporter.report("request_send_start", objectPropertyAssign.assignObject({
                    source: t.url && g(t.url)
                  }, o));
                }
                e.next = 5;
                return n(t);
              case 5:
                u = s = e.sent;
                if (f) {
                  u = s.data instanceof Blob ? {
                    code: 0,
                    data: u.data,
                    msg: ""
                  } : u.data;
                  r.reportResponse(s, u, {
                    startTime: i
                  }, o);
                } else {
                  if (u.data instanceof Blob) {
                    u = objectPropertyAssign.assignObject(objectPropertyAssign.assignObject({}, u), {}, {
                      code: 0,
                      msg: ""
                    });
                  }
                  if ((s = u.meta) != null && s.originResponse) {
                    r.reportResponse(u.meta.originResponse, u, {
                      startTime: i
                    }, o);
                  }
                }
                return e.abrupt("return", u);
              case 11:
                e.prev = 11;
                e.t0 = e.catch(1);
                l = e.t0 instanceof Error ? (s = -8, (u = e.t0.code) === undefined || (s = u === "CONNECT_ABORT" || e.t0.message === "Request aborted" ? -98 : u), l = e.t0.data, {
                  code: s,
                  msg: e.t0.message,
                  data: l
                }) : e.t0 instanceof axiosHttpClientLibrary.axios.Cancel ? {
                  code: -98,
                  msg: e.t0.message,
                  data: {}
                } : {
                  code: -99,
                  msg: "unknown error",
                  data: e.t0
                };
                if (e.t0 && (e.t0.response || e.t0.headers)) {
                  a = ((a = e.t0?.response) == null ? undefined : a.headers["x-tt-logid"]) || ((a = e.t0?.headers) == null ? undefined : a["x-tt-logid"]);
                }
                if (r.reporter) {
                  d = objectPropertyAssign.assignObject({
                    source: t.url && g(t.url),
                    numberParam1: l.code,
                    stringParam1: `msg: ${l.msg}, params: ${v(t.data || t.params || {})}`,
                    numberParam2: Date.now() - i,
                    logId: a
                  }, o);
                  r.reporter.report("request_send_end", d);
                  r.reporter.report("request_error", d);
                }
                return e.abrupt("return", l);
              case 17:
              case "end":
                return e.stop();
            }
          }
        }, e, null, [[1, 11]]);
      }));
      function u(e, n) {
        return t.apply(this, arguments);
      }
      this.requestInstance = u;
    }
    classPropertyUtil.defineClassProps(e, [{
      key: "reportResponse",
      value: function (e, t, n, r) {
        var o;
        if (this.reporter) {
          o = e.config;
          n = objectPropertyAssign.assignObject({
            source: o.url && g(o.url),
            statusCode: e.status,
            numberParam1: t.code,
            numberParam2: Date.now() - n.startTime,
            logId: e.headers["x-tt-logid"]
          }, r);
          if (t.code !== 0) {
            n.stringParam1 = `msg: ${t.msg}, params: ${v(o.data || o.params || {})}`;
            this.reporter.report("request_error", n);
          }
          this.reporter.report("request_send_end", n);
        }
      }
    }]);
    return e;
  }();
  var y = function () {
    setPrototypeInheritance.setInheritance(t, D);
    var e = wrapNativeSuperHelper.wrapNativeSuper(t);
    function t(n) {
      var r = n.requestInstance;
      var o = n.serviceType;
      var a = n.serviceToken;
      var s = n.bizType;
      var s = s === undefined ? 0 : s;
      var u = n.baseURL;
      var l = n.headers;
      var c = n.reporter;
      var d = n.isSync;
      var p = n.memberId;
      var n = n.isSyncV2;
      classCallCheckUtil.classCallCheck(this, t);
      (r = e.call(this, {
        requestInstance: r,
        baseURL: u,
        headers: l,
        bizType: s,
        reporter: c
      })).isSync = false;
      r.isSyncV2 = false;
      r.serviceType = o;
      r.serviceToken = a;
      r.bizType = s;
      r.isSync = !!d;
      r.isSyncV2 = !!n;
      r.memberId = p;
      return r;
    }
    classPropertyUtil.defineClassProps(t, [{
      key: "fetchInitDataComposed",
      value: function () {
        if (this.isSyncV2) {
          return this.fetchInitClientvarsV2();
        } else if (this.isSync) {
          return this.fetchInitClientvars();
        } else {
          return this.fetchInitData();
        }
      }
    }, {
      key: "fetchInitData",
      value: function (e) {
        return this.requestInstance({
          method: o.POST,
          url: "/api/comment/all/",
          data: {
            obj_type: this.serviceType,
            token: this.serviceToken,
            biz_type: this.bizType
          }
        });
      }
    }, {
      key: "fetchInitClientvars",
      value: function () {
        var e;
        var t;
        return this.requestInstance({
          headers: (typeof (e = this.memberId) == "string" ? t = e : typeof e == "function" && (t = e()), t ? {
            memberId: t
          } : undefined),
          url: "/api/broadcast/get_init_data/",
          method: o.GET,
          params: {
            obj_type: this.serviceType,
            obj_token: this.serviceToken,
            data_type: "COMMENT"
          }
        });
      }
    }, {
      key: "fetchInitClientvarsV2",
      value: function () {
        return this.requestInstance({
          url: "/api/comment/message_box/get_init_data/",
          method: o.POST,
          params: {
            obj_type: this.serviceType,
            token: this.serviceToken
          }
        });
      }
    }]);
    return t;
  }();
  require.d(exports, {
    CommentInitService: function () {
      return y;
    }
  });
}