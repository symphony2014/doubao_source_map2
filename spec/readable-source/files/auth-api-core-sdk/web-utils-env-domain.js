// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 343258
         */
module.exports = function (module, exports, require) {
  var r = this && this.__awaiter || function (e, t, r, n) {
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
  var n = this && this.__generator || function (e, t) {
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
  exports.getAccountOrigin = exports.getInviteUrl = exports.getAccountUrl = exports.uuid = exports.handleEncode = exports.getCookie = exports.transformCamel = exports.toObjParams = exports.getURLParams = exports.getCaptchaDomain = exports.getServiceDomain = exports.getRootDomain = exports.getUnitSuffix = exports.getCaptchaId = exports.injectCaptchaIdScript = exports.encodeUrl = exports.isBoe = exports.isDev = exports.isServer = undefined;
  exports.isServer = typeof window == "undefined";
  exports.isDev = location.protocol === "http:";
  exports.isBoe = /-boe/.test(location.origin.toLowerCase());
  exports.encodeUrl = function (e) {
    try {
      return encodeURIComponent(e);
    } catch (t) {
      return e;
    }
  };
  exports.injectCaptchaIdScript = function (e) {
    return r(this, undefined, undefined, function () {
      return n(this, function (r) {
        switch (r.label) {
          case 0:
            if (exports.isServer || window.Device?.getDevice) {
              return [2];
            }
            return [4, function (e, r) {
              if (!exports.isServer) {
                return new Promise(function (t, r) {
                  var n = document.createElement("script");
                  var i = null;
                  function o() {
                    if (i) {
                      clearTimeout(i);
                      i = null;
                    }
                  }
                  n.onload = function () {
                    o();
                    t(null);
                  };
                  n.onerror = function (e) {
                    o();
                    r(e);
                  };
                  n.src = e;
                  document.body.appendChild(n);
                  i = setTimeout(function () {
                    i = null;
                    o();
                    r(Error(`inject script: ${e} timeout`));
                  }, 15000);
                });
              }
            }(`${exports.isDev ? "http" : "https"}://${e}/security/device/captcha/device?disableSSL=false&appId=suite_web_login&_timestamp_=${new Date().getTime()}`, 0)];
          case 1:
            r.sent();
            return [2];
        }
      });
    });
  };
  exports.getCaptchaId = function () {
    return new Promise(function (e, r) {
      if (exports.isServer) {
        r(Error("ssr haven't window."));
        return;
      }
      var i = window.Device?.getDevice;
      if (!i) {
        r(Error("window.Device.getDevice not defined."));
      }
      var o = setTimeout(function () {
        clearTimeout(o);
        r(Error("window.Device.getDevice timeout."));
      }, 15000);
      i(function (t) {
        if (!t || t === "false") {
          return r(Error(`captcha invalid:${t}.`));
        }
        clearTimeout(o);
        e(t);
      });
    });
  };
  exports.getUnitSuffix = function (e) {
    if (exports.isDev || exports.isBoe) {
      return "";
    }
    try {
      var n = e || location.origin;
      var i = (n == null ? undefined : n.split("//"))?.[1] || "";
      if (!/\.(feishu|larksuite|larkenterprise|larkoffice)/.test(i)) {
        return "";
      }
      var o = /\.(feishu|larkenterprise|larkoffice)/.test(i);
      if (/(-|\.)cn/.test(i)) {
        if (o) {
          return "";
        }
        return "-cn";
      }
      if (/(-|\.)sg/.test(i)) {
        return "-sg";
      }
      if (/(-|\.)jp/.test(i)) {
        return "-jp";
      } else if (/(-|\.)my/.test(i)) {
        return "-my";
      } else if (/\.larksuite\.us/.test(i) || /(-|\.)usttp/.test(i)) {
        return "-usttp";
      } else if (/(-|\.)(?:us|va)/.test(i)) {
        if (o) {
          return "-us";
        }
        return "";
      }
      if (!o) {
        return "-sg";
      }
      return "";
    } catch (e) {
      throw Error("getUnitAffix error");
    }
  };
  exports.getRootDomain = function (e) {
    if (exports.isDev) {
      return location.host;
    }
    try {
      var n = e || location.origin;
      var i = ((n == null ? undefined : n.split("//"))?.[1] || "").split(".");
      i.shift();
      if (["cn", "sg", "jp", "my", "va", "us", "usttp"].includes(i[0])) {
        i.shift();
      }
      return i.join(".");
    } catch (e) {
      throw Error("getRootDomain error");
    }
  };
  var i = "internal-api-lark-api";
  exports.getServiceDomain = function (e) {
    if (exports.isServer) {
      return "";
    }
    if (exports.isDev) {
      var n = location.origin.split("//")?.[1] || "";
      return `${n}/${i}`;
    }
    try {
      var o = exports.getRootDomain(e);
      var a = exports.getUnitSuffix(e);
      return `${i}${a}.${o}`;
    } catch (e) {
      throw Error("getServiceDomain error");
    }
  };
  var o = "internal-api";
  exports.getCaptchaDomain = function (e) {
    var n;
    if (exports.isServer) {
      return "";
    }
    if (exports.isDev) {
      var a = ((n = window.location?.origin) === null || n === undefined ? undefined : n.split("//"))?.[1] || "";
      return `${a}/${o}`;
    }
    try {
      var s = exports.getRootDomain(e);
      var c = exports.getUnitSuffix(e);
      return `${o}${c}.${s}`;
    } catch (e) {
      throw Error("getCaptchaDomain error");
    }
  };
  exports.getURLParams = function (e) {
    var t = RegExp(`(^|&)${e}=([^&]*)(&|\$)`, "i");
    var r = window.location.search.substr(1).match(t);
    if (r !== null) {
      return decodeURIComponent(r[2]);
    } else {
      return null;
    }
  };
  exports.toObjParams = function (e, t) {
    if (!(t == null ? undefined : t.length)) {
      return {};
    }
    if (t.length === 1 && typeof t[0] == "object") {
      return t[0];
    }
    var r = {};
    e.map(function (e, n) {
      r[e] = t[n];
    });
    return r;
  };
  exports.transformCamel = function (e, t = false) {
    if (e && typeof e == "object") {
      var r = t ? /_[a-z]/g : /[A-Z]/g;
      var n = {};
      Object.entries(e).forEach(function (e) {
        n[e[0].replace(r, function (e) {
          if (t) {
            return e[1].toUpperCase();
          } else {
            return `_${e.toLowerCase()}`;
          }
        })] = e[1];
      });
      return n;
    }
    return e;
  };
  exports.getCookie = function (e) {
    if (exports.isServer) {
      return "";
    }
    try {
      return decodeURIComponent(document.cookie.replace(new RegExp(`(?:(?:^|.*;)\\s*${encodeURIComponent(e).replace(/[-.+*]/g, "\\$&")}\\s*\\=\\s*([^;]*).*\$)|^.*\$`), "$1")) || "";
    } catch (e) {
      return "";
    }
  };
  exports.handleEncode = function (e = "") {
    try {
      var t = decodeURIComponent(e);
      return encodeURIComponent(t);
    } catch (t) {
      return e;
    }
  };
  exports.uuid = function () {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var t = Math.random() * 16 | 0;
      return (e === "x" ? t : t & 3 | 8).toString(16);
    });
  };
  exports.getAccountUrl = function (e) {
    return `/accounts${e.startsWith("/") ? e : `/${e}`}`;
  };
  exports.getInviteUrl = function (e) {
    return `/invitation${e.startsWith("/") ? e : `/${e}`}`;
  };
  exports.getAccountOrigin = function () {
    if (exports.isServer || exports.isDev) {
      return "";
    } else {
      return `${location.protocol}//${location.host.replace(/[^.]*\./, "www.")}`;
    }
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}