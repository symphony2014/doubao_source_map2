// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'c' to 'globalConfigCookieKeys'
// - Resolved require(882833) to 'global-config-cookie-keys'
// - Renamed variable 'u' to 'settingsDomainServiceModule'
// - Resolved require(239983) to 'settings-domain-service-module'
// - Renamed variable 'l' to 'saasFallbackDomainResolver'
// - Resolved require(530486) to 'saas-fallback-domain-resolver'
// - Renamed variable 'f' to 'webUtilsEnvDomain'
// - Resolved require(343258) to 'web-utils-env-domain'
// - Renamed variable 'd' to 'miniFetchHttpClient'
// - Resolved require(910287) to 'mini-fetch-http-client'
// - Renamed variable 'h' to 'typeCheckUtils_3'
// - Resolved require(187217) to 'type-check-utils_3'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 435764
         */
module.exports = function (module, exports, require) {
  var n;
  var i = this && this.__assign || function () {
    return (i = Object.assign || function (e) {
      var t;
      var r = 1;
      var n = arguments.length;
      for (; r < n; r++) {
        for (var i in t = arguments[r]) {
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            e[i] = t[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  };
  var o = this && this.__awaiter || function (e, t, r, n) {
    return new (r ||= Promise)(function (i, o) {
      function a(e) {
        try {
          c(n.next(e));
        } catch (e) {
          o(e);
        }
      }
      function s(e) {
        try {
          c(n.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function c(e) {
        var t;
        if (e.done) {
          i(e.value);
        } else {
          ((t = e.value) instanceof r ? t : new r(function (e) {
            e(t);
          })).then(a, s);
        }
      }
      c((n = n.apply(e, t || [])).next());
    });
  };
  var a = this && this.__generator || function (e, t) {
    var r;
    var n;
    var i;
    var o;
    var a = {
      label: 0,
      sent: function () {
        if (i[0] & 1) {
          throw i[1];
        }
        return i[1];
      },
      trys: [],
      ops: []
    };
    o = {
      next: s(0),
      throw: s(1),
      return: s(2)
    };
    if (typeof Symbol == "function") {
      o[Symbol.iterator] = function () {
        return this;
      };
    }
    return o;
    function s(o) {
      return function (s) {
        return function (o) {
          if (r) {
            throw TypeError("Generator is already executing.");
          }
          while (a) {
            try {
              r = 1;
              if (n && (i = o[0] & 2 ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) {
                return i;
              }
              n = 0;
              if (i) {
                o = [o[0] & 2, i.value];
              }
              switch (o[0]) {
                case 0:
                case 1:
                  i = o;
                  break;
                case 4:
                  a.label++;
                  return {
                    value: o[1],
                    done: false
                  };
                case 5:
                  a.label++;
                  n = o[1];
                  o = [0];
                  continue;
                case 7:
                  o = a.ops.pop();
                  a.trys.pop();
                  continue;
                default:
                  if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                    a = 0;
                    continue;
                  }
                  if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                    a.label = o[1];
                    break;
                  }
                  if (o[0] === 6 && a.label < i[1]) {
                    a.label = i[1];
                    i = o;
                    break;
                  }
                  if (i && a.label < i[2]) {
                    a.label = i[2];
                    a.ops.push(o);
                    break;
                  }
                  if (i[2]) {
                    a.ops.pop();
                  }
                  a.trys.pop();
                  continue;
              }
              o = t.call(e, a);
            } catch (e) {
              o = [6, e];
              n = 0;
            } finally {
              r = i = 0;
            }
          }
          if (o[0] & 5) {
            throw o[1];
          }
          return {
            value: o[0] ? o[1] : undefined,
            done: true
          };
        }([o, s]);
      };
    }
  };
  var s = this && this.__rest || function (e, t) {
    var r = {};
    for (var n in e) {
      if (Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0) {
        r[n] = e[n];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var i = 0;
      var n = Object.getOwnPropertySymbols(e);
      for (; i < n.length; i++) {
        if (t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i])) {
          r[n[i]] = e[n[i]];
        }
      }
    }
    return r;
  };
  exports.MiniFetch = exports.createRequest = undefined;
  var globalConfigCookieKeys = require("global-config-cookie-keys") /*id: 882833*/;
  var settingsDomainServiceModule = require("settings-domain-service-module") /*id: 239983*/;
  var saasFallbackDomainResolver = require("saas-fallback-domain-resolver") /*id: 530486*/;
  var webUtilsEnvDomain = require("web-utils-env-domain") /*id: 343258*/;
  var miniFetchHttpClient = require("mini-fetch-http-client") /*id: 910287*/;
  Object.defineProperty(exports, "MiniFetch", {
    enumerable: true,
    get: function () {
      return miniFetchHttpClient.MiniFetch;
    }
  });
  var typeCheckUtils_3 = require("type-check-utils_3") /*id: 187217*/;
  var p = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Cache-Control": "no-cache",
      "X-App-Id": "1",
      "X-Device-Info": "platform=websdk",
      "X-Api-Version": "1.0.28",
      "X-Terminal-Type": "2"
    },
    responseType: "json",
    timeout: 10000,
    withCredentials: true
  };
  exports.createRequest = function (e, t) {
    settingsDomainServiceModule.initDomainService({
      userBrand: e.isOversea ? "lark" : "feishu",
      apiDomain: e.apiDomain || function (e) {
        if (!e) {
          return "";
        }
        try {
          var t = false;
          var r = e.replace(/^https?:\/\//, "").replace(/\/$/, "");
          if (/^internal-api-lark-api/.test(r)) {
            return r;
          }
        } catch (e) {}
        return "";
      }(e.origin) || webUtilsEnvDomain.getServiceDomain(),
      fallbackDomain: saasFallbackDomainResolver.getFallbackDomainByEnvironment({
        brand: e.isOversea ? "lark" : "feishu",
        origin: e.origin
      })
    });
    var r = t ? t.create(p) : miniFetchHttpClient.MiniFetch.create(p);
    r.setTokens = function (e, t, r) {
      var l = this;
      var g = {
        flowKey: ""
      };
      var v = false;
      e.interceptors.request.use(function (e) {
        return o(l, undefined, undefined, function () {
          var r;
          return a(this, function (n) {
            if (r = webUtilsEnvDomain.getCookie(globalConfigCookieKeys.CookieKey.CSRF)) {
              e.headers["X-Csrf-Token"] = r;
            }
            if (g.flowKey) {
              e.headers["X-Flow-Key"] = g.flowKey;
            }
            e.headers["X-Request-Id"] = webUtilsEnvDomain.uuid();
            if (t.appId) {
              e.headers["X-App-Id"] = t.appId;
            }
            e.baseURL = `${e.baseURL || t.origin || t.accountsOrigin || ""}`;
            if (t.locale) {
              e.headers["X-locale"] = t.locale;
            }
            return [2, e];
          });
        });
      });
      e.interceptors.request.use(function (e) {
        return o(l, undefined, undefined, function () {
          var r;
          var n;
          var o;
          var c;
          return a(this, function (a) {
            switch (a.label) {
              case 0:
                r = t.getExtraHeaders;
                n = s(t, ["getExtraHeaders"]);
                o = e.baseURL || t.origin || t.accountsOrigin || window.location.host;
                return [4, r == null ? undefined : r(i(i({}, e), {
                  url: `${o}${e.url}`,
                  domain: o,
                  initConfig: n
                }))];
              case 1:
                c = a.sent();
                e.headers = i(i({}, e.headers), c || {});
                return [2, e];
            }
          });
        });
      });
      e.interceptors.request.use(function (e) {
        return o(l, undefined, undefined, function () {
          var r;
          var n;
          var i;
          return a(this, function (o) {
            switch (o.label) {
              case 0:
                if (!typeCheckUtils_3.isCaptchaUrl(e.url)) {
                  return [2, e];
                }
                o.label = 1;
              case 1:
                o.trys.push([1, 6,, 7]);
                if (r = t.captchaDomain) {
                  return [3, 3];
                }
                return [4, settingsDomainServiceModule.getDomains()];
              case 2:
                r = ((n = o.sent()) == null ? undefined : n.captchaIdScriptDomain) || webUtilsEnvDomain.getCaptchaDomain();
                o.label = 3;
              case 3:
                return [4, webUtilsEnvDomain.injectCaptchaIdScript(r)];
              case 4:
                o.sent();
                return [4, webUtilsEnvDomain.getCaptchaId()];
              case 5:
                if (i = o.sent()) {
                  e.headers["X-Captcha-Id"] = i;
                }
                return [3, 7];
              case 6:
                o.sent();
                return [3, 7];
              case 7:
                return [2, e];
            }
          });
        });
      });
      e.interceptors.request.use(function (e) {
        return o(l, undefined, undefined, function () {
          return a(this, function (i) {
            switch (i.label) {
              case 0:
                if (v) {
                  return [3, 4];
                }
                i.label = 1;
              case 1:
                i.trys.push([1, 3,, 4]);
                return [4, function (e, t) {
                  return o(this, undefined, undefined, function () {
                    var r;
                    return a(this, function (i) {
                      switch (i.label) {
                        case 0:
                          (r = (t || miniFetchHttpClient.MiniFetch).create(p)).interceptors.request.use(function (t) {
                            t.headers["X-Request-Id"] = webUtilsEnvDomain.uuid();
                            if (e.appId) {
                              t.headers["X-App-Id"] = e.appId;
                            }
                            t.baseURL = `${e.origin || ""}`;
                            return t;
                          }, function () {});
                          n ||= r.post("/accounts/csrf");
                          return [4, n];
                        case 1:
                          i.sent();
                          n = null;
                          r = null;
                          return [2];
                      }
                    });
                  });
                }(t, r)];
              case 2:
                i.sent();
                v = true;
                return [3, 4];
              case 3:
                i.sent();
                return [3, 4];
              case 4:
                return [2, e];
            }
          });
        });
      });
      e.interceptors.response.use(function (e) {
        var n = e.headers["x-flow-key"];
        if (n) {
          g.flowKey = n;
        }
        if ((e == null ? undefined : e.data)?.code !== 0) {
          return Promise.reject(e.data);
        }
        if ((e == null ? undefined : e.data)?.code === 0) {
          var o = e.data.data || {};
          if (typeof o == "object") {
            o.headers = i({}, e.headers);
            if (g.flowKey) {
              o.flowKey = g.flowKey;
            }
          }
          return o;
        }
        return e;
      }, function (e) {
        if (e.response?.data && typeof e.response.data == "object") {
          return Promise.reject(i({
            status: e.response.status
          }, e.response.data));
        } else if (e.response) {
          return Promise.reject(e.response);
        } else {
          return Promise.reject(e);
        }
      });
      return function (e) {
        Object.assign(g, e);
      };
    }(r, e, t);
    return r;
  };
  exports.default = exports.createRequest;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}