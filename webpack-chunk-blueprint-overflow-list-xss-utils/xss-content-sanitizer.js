// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'J' to 'sanitizeHtml'
// - Renamed export 'C' to 'sanitizeUrl'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 508971
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o = "<%= isUseNewFunction =>";
  function a(e) {
    return e && e.Math == Math && e;
  }
  var s = a(typeof globalThis == "object" && globalThis) || a(typeof window == "object" && window) || a(typeof self == "object" && self) || a(typeof require.g == "object" && require.g) || Function("return this")();
  try {
    o = !!(o = String(o)).startsWith("<%=") || JSON.parse(o);
    if (o === true || o === "true") {
      s = Function("\nvar _checkXSS = function (it) {\n  return it && it.Math == Math && it;\n};\nreturn _checkXSS(typeof globalThis === 'object' && globalThis) ||\n_checkXSS(typeof window === 'object' && window) ||\n_checkXSS(typeof self === 'object' && self) ||\n_checkXSS(typeof global === 'object' && global) ||\nFunction('return this')();\n")();
    }
  } catch (e) {}
  var u = /[^a-zA-Z0-9\\_:.-]/gim;
  var c = /</g;
  var l = />/g;
  var f = /&#([a-zA-Z0-9]*);?/gim;
  var h = /&quot;/g;
  var d = /&colon;?/gim;
  var p = /&newline;?/gim;
  var g = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
  var v = /u\s*r\s*l\s*\(.*/gi;
  var m = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
  var y = /"/g;
  function b(e) {
    return e.replace(c, "&lt;").replace(l, "&gt;");
  }
  var _ = {
    indexOf: function (e, t) {
      var n;
      var r;
      n = 0;
      r = e.length;
      for (; n < r; n++) {
        if (e[n] === t) {
          return n;
        }
      }
      return -1;
    },
    forEach: function (e, t, n) {
      var r;
      var i;
      r = 0;
      i = e.length;
      for (; r < i; r++) {
        t.call(n, e[r], r, e);
      }
    },
    some: function (e, t, n) {
      var r;
      var i;
      r = 0;
      i = e.length;
      for (; r < i; r++) {
        if (t.call(n, e[r], r, e)) {
          return true;
        }
      }
      return false;
    },
    trim: function (e) {
      return e.replace(/(^\s*)|(\s*$)/g, "");
    },
    includes: function (e, t) {
      if (typeof e == "string") {
        return e.indexOf(t) !== -1;
      }
      for (var n = 0; n < e.length; n++) {
        if (e[n] === t) {
          return true;
        }
      }
      return false;
    },
    spaceIndex: function (e) {
      var t = /\s|\n|\t/.exec(e);
      if (t) {
        return t.index;
      } else {
        return -1;
      }
    },
    uniq: function (e) {
      var t = {};
      var n = [];
      var r = 0;
      for (; r < e.length; r++) {
        if (!t[e[r]]) {
          n.push(e[r]);
          t[e[r]] = true;
        }
      }
      return n;
    },
    from: function (e) {
      var t = [];
      var n = 0;
      for (; n < e.length; n++) {
        t.push(e[n]);
      }
      return t;
    },
    keys: function (e) {
      var t = [];
      for (var n in e) {
        t.push(n);
      }
      return t;
    }
  };
  function w(e) {
    if (e[0] === "\"" && e[e.length - 1] === "\"" || e[0] === "'" && e[e.length - 1] === "'") {
      return e.substr(1, e.length - 2);
    } else {
      return e;
    }
  }
  function E(e) {
    var t;
    var n;
    var r;
    var i;
    var o;
    var a;
    var s;
    var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var c = "";
    var l = 0;
    for (e = function (e) {
      e = e.replace(/rn/g, "n");
      var t = "";
      var n = 0;
      for (; n < e.length; n++) {
        var r = e.charCodeAt(n);
        if (r < 128) {
          t += String.fromCharCode(r);
        } else {
          if (r > 127 && r < 2048) {
            t += String.fromCharCode(r >> 6 | 192);
          } else {
            t += String.fromCharCode(r >> 12 | 224);
            t += String.fromCharCode(r >> 6 & 63 | 128);
          }
          t += String.fromCharCode(r & 63 | 128);
        }
      }
      return t;
    }(e); l < e.length;) {
      t = e.charCodeAt(l++);
      n = e.charCodeAt(l++);
      r = e.charCodeAt(l++);
      i = t >> 2;
      o = (t & 3) << 4 | n >> 4;
      a = (n & 15) << 2 | r >> 6;
      s = r & 63;
      if (isNaN(n)) {
        a = s = 64;
      } else if (isNaN(r)) {
        s = 64;
      }
      c = c + u.charAt(i) + u.charAt(o) + u.charAt(a) + u.charAt(s);
    }
    return c;
  }
  function S(e, t, n) {
    var r = "";
    var i = 0;
    var o = false;
    var a = false;
    var s = 0;
    var u = e.length;
    var c = "";
    var l = "";
    e: for (s = 0; s < u; s++) {
      var f = e.charAt(s);
      if (o === false) {
        if (f === "<") {
          o = s;
          continue;
        }
      } else if (a === false) {
        if (f === "<") {
          r += n(e.slice(i, s));
          o = s;
          i = s;
          continue;
        }
        if (f === ">" || s === u - 1) {
          r += n(e.slice(i, o));
          c = function (e) {
            var t;
            var n = _.spaceIndex(e);
            t = n === -1 ? e.slice(1, -1) : e.slice(1, n + 1);
            if ((t = _.trim(t).toLowerCase()).slice(0, 1) === "/") {
              t = t.slice(1);
            }
            if (t.slice(-1) === "/") {
              t = t.slice(0, -1);
            }
            return t;
          }(l = e.slice(o, s + 1));
          r += t(o, r.length, c, l, l.slice(0, 2) === "</");
          i = s + 1;
          o = false;
          continue;
        }
        if (f === "\"" || f === "'") {
          var h = 1;
          var d = e.charAt(s - h);
          while (d.trim() === "" || d === "=") {
            if (d === "=") {
              a = f;
              continue e;
            }
            d = e.charAt(s - ++h);
          }
        }
      } else if (f === a) {
        a = false;
        continue;
      }
    }
    if (i < u) {
      r += n(e.substr(i));
    }
    return r;
  }
  function x(e, t) {
    var n = 0;
    var r = 0;
    var i = [];
    var o = false;
    var a = e.length;
    function s(e, n) {
      if (!((e = (e = _.trim(e)).replace(u, "").toLowerCase()).length < 1)) {
        var r = t(e, n || "");
        if (r) {
          i.push(r);
        }
      }
    }
    for (var c = 0; c < a; c++) {
      var l = e.charAt(c);
      var f = undefined;
      var h = undefined;
      if (o === false && l === "=") {
        o = e.slice(n, c);
        n = c + 1;
        r = e.charAt(n) === "\"" || e.charAt(n) === "'" ? n : function (e, t) {
          for (; t < e.length; t++) {
            var n = e[t];
            if (n !== " ") {
              if (n === "'" || n === "\"") {
                return t;
              }
              break;
            }
          }
          return -1;
        }(e, c + 1);
        continue;
      }
      if (o !== false && c === r) {
        if ((h = e.indexOf(l, c + 1)) === -1) {
          break;
        }
        s(o, _.trim(e.slice(r + 1, h)));
        o = false;
        n = (c = h) + 1;
        continue;
      }
      if (/\s|\n|\t/.test(l)) {
        e = e.replace(/\s|\n|\t/g, " ");
        if (o === false) {
          if ((h = function (e, t) {
            for (; t < e.length; t++) {
              var n = e[t];
              if (n !== " ") {
                if (n === "=") {
                  return t;
                }
                break;
              }
            }
            return -1;
          }(e, c)) === -1) {
            s(_.trim(e.slice(n, c)));
            o = false;
            n = c + 1;
            continue;
          }
          c = h - 1;
          continue;
        }
        if ((h = function (e, t) {
          for (; t > 0; t--) {
            var n = e[t];
            if (n !== " ") {
              if (n === "=") {
                return t;
              }
              break;
            }
          }
          return -1;
        }(e, c - 1)) !== -1) {
          continue;
        }
        s(o, w(_.trim(e.slice(n, c))));
        o = false;
        n = c + 1;
        continue;
      }
    }
    if (n < e.length) {
      if (o === false) {
        s(e.slice(n));
      } else {
        s(o, w(_.trim(e.slice(n))));
      }
    }
    return _.trim(i.join(" "));
  }
  function k(e, t, n) {
    var r;
    var i;
    n = function (e) {
      var t = "";
      var n = 0;
      var r = e.length;
      for (; n < r; n++) {
        t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
      }
      return _.trim(t);
    }(n.replace(h, "\"").replace(f, function (e, t) {
      if (t[0] === "x" || t[0] === "X") {
        return String.fromCharCode(parseInt(t.substr(1), 16));
      } else {
        return String.fromCharCode(parseInt(t, 10));
      }
    }).replace(d, ":").replace(p, " "));
    if (t === "href" || t === "src") {
      if ((n = _.trim(n)) === "#") {
        return "#";
      }
      if (n.substr(0, 7) !== "http://" && n.substr(0, 8) !== "https://" && n.substr(0, 7) !== "mailto:" && n.substr(0, 4) !== "tel:" && n.substr(0, 11) !== "data:image/" && n.substr(0, 6) !== "ftp://" && n.substr(0, 2) !== "./" && n.substr(0, 3) !== "../" && n[0] !== "#" && n[0] !== "/") {
        return "";
      }
    } else if (t === "background") {
      g.lastIndex = 0;
      if (g.test(n)) {
        return "";
      }
    } else if (t === "style" && (m.lastIndex = 0, m.test(n) || (v.lastIndex = 0, v.test(n) && (g.lastIndex = 0, g.test(n))))) {
      return "";
    }
    return n = b(n.replace(y, "&quot;"));
  }
  function O(e) {
    if (typeof e == "string") {
      return e.replace(/'/g, "\"").replace("=\"\"", "").replace(/\s+/g, "").toLowerCase();
    } else {
      return "";
    }
  }
  function A() {
    var e = false;
    if (typeof s.useWebSecsdkApi == "function") {
      var t = s.useWebSecsdkApi("compiler");
      if (t && t.enableXssFilter === false) {
        e = true;
      }
    }
    if (s.__msite_app_conf && s.__msite_app_conf.enable_xss_filter === false) {
      e = true;
    }
    if (s.tccAppConfig && s.tccAppConfig.enable_xss_filter === false) {
      e = true;
    }
    return e;
  }
  function T(e) {
    var t = e.key;
    var n = e.reportUrl;
    var r = e.disposition;
    var i = e.scmBranch;
    var o = e.scmName;
    if (typeof window != "undefined" && typeof localStorage != "undefined" && window.document !== undefined && typeof localStorage.getItem == "function" && typeof localStorage.setItem == "function") {
      var a = "ARGUS_XSS_V3";
      var u = JSON.parse(localStorage.getItem(a) || "{}");
      var c = Date.now();
      for (var l in u) {
        if (u.hasOwnProperty(l) && c - u[l].time > 1209600000) {
          u[l] = undefined;
          localStorage.setItem(a, JSON.stringify(u));
        }
      }
      if (!u[t]) {
        u[t] = {
          time: c
        };
        localStorage.setItem(a, JSON.stringify(u));
        if (s.fetch && (i === "master" || i === "release")) {
          var f = n.indexOf("bid=");
          var h = n.slice(f).slice(4);
          n = n.slice(0, f) + "bid=argus3";
          var d = {
            age: Math.floor(Date.now()),
            type: "xss",
            url: s.location.href,
            body: {
              disposition: r,
              collectKey: o,
              collectData: i,
              collectMode: h
            },
            "user-agent": ""
          };
          s.fetch(n, {
            method: "post",
            body: JSON.stringify([d]),
            headers: {
              "Content-Type": "application/json"
            }
          }).catch(function (e) {});
        }
      }
    }
  }
  function R(e) {
    var t;
    var n = e.scmVersion;
    var r = e.scmName;
    var i = e.webpackPluginVersion;
    var o = e.reportOnly;
    var a = `${r}___${n}`;
    var u = {
      webpackPluginVersion: i,
      reportOnly: o
    };
    if (!s.xssV3 || !s.xssV3[a]) {
      if (s.xssV3) {
        s.xssV3[a] ||= u;
      } else {
        if (a in (t = {})) {
          Object.defineProperty(t, a, {
            value: u,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          t[a] = u;
        }
        s.xssV3 = t;
      }
      T({
        key: a,
        reportUrl: e.reportUrl,
        disposition: e.disposition,
        scmBranch: e.scmBranch,
        scmName: e.scmName
      });
    }
  }
  var C = function () {
    var e;
    function t(e) {
      (function (e, t) {
        if (!(e instanceof t)) {
          throw TypeError("Cannot call a class as a function");
        }
      })(this, t);
      r = undefined;
      if ((n = "options") in this) {
        Object.defineProperty(this, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[n] = r;
      }
      var n;
      var r;
      var i = function (e) {
        var t = {};
        for (var n in e) {
          t[n] = e[n];
        }
        return t;
      }(e || {});
      if (i.stripIgnoreTag) {
        i.onIgnoreTag;
        i.onIgnoreTag = function () {
          return "";
        };
      }
      i.whiteList = {};
      i.onTag = function () {};
      i.onTagAttr = function () {};
      i.onIgnoreTag = function () {};
      i.onIgnoreTagAttr = function () {};
      i.safeAttrValue = k;
      i.escapeHtml = b;
      this.options = Object.assign(i, e);
    }
    e = [{
      key: "process",
      value: function (e) {
        if (!(e = (e = e || "").toString())) {
          return "";
        }
        var t;
        var n;
        var r;
        var i;
        var o;
        var a;
        var s = this.options;
        var u = s.whiteList;
        var c = s.onTag;
        var l = s.onIgnoreTag;
        var f = s.onTagAttr;
        var h = s.onIgnoreTagAttr;
        var d = s.safeAttrValue;
        var p = s.escapeHtml;
        if (s.stripBlankChar) {
          e = e.split("").filter(function (e) {
            var t = e.charCodeAt(0);
            return t !== 127 && (!(t <= 31) || t === 10 || t === 13);
          }).join("");
        }
        if (!s.allowCommentTag) {
          e = function (e) {
            var t = "";
            var n = 0;
            while (n < e.length) {
              var r = e.indexOf("<!--", n);
              if (r === -1) {
                t += e.slice(n);
                break;
              }
              t += e.slice(n, r);
              var i = e.indexOf("-->", r);
              if (i === -1) {
                break;
              }
              n = i + 3;
            }
            return t;
          }(e);
        }
        var g = false;
        if (s.stripIgnoreTagBody) {
          n = s.stripIgnoreTagBody;
          if (typeof (r = l) != "function") {
            r = function () {};
          }
          i = !Array.isArray(n);
          o = [];
          a = false;
          l = (g = {
            onIgnoreTag: function (e, t, s) {
              if (i ? 0 : _.indexOf(n, e) === -1) {
                return r(e, t, s);
              }
              if (!s.isClosing) {
                a ||= s.position;
                return "[removed]";
              }
              var u = "[/removed]";
              var c = s.position + u.length;
              o.push([a !== false ? a : s.position, c]);
              a = false;
              return u;
            },
            remove: function (e) {
              var t = "";
              var n = 0;
              _.forEach(o, function (r) {
                t += e.slice(n, r[0]);
                n = r[1];
              });
              return t += e.slice(n);
            }
          }).onIgnoreTag;
        }
        var v = S(e, function (e, t, n, r, i) {
          var o;
          var a;
          var s = {
            sourcePosition: e,
            position: t,
            isClosing: i,
            isWhite: Object.prototype.hasOwnProperty.call(u, n)
          };
          var g = c(n, r, s);
          if (g != null) {
            return g;
          }
          if (s.isWhite) {
            if (s.isClosing) {
              return `</${n}>`;
            }
            var v = function (e) {
              var t = _.spaceIndex(e);
              if (t === -1) {
                return {
                  html: "",
                  closing: e[e.length - 2] === "/"
                };
              }
              var n = (e = _.trim(e.slice(t + 1, -1)))[e.length - 1] === "/";
              if (n) {
                e = _.trim(e.slice(0, -1));
              }
              return {
                html: e,
                closing: n
              };
            }(r);
            var m = u[n];
            var y = x(v.html, function (e, t) {
              var r;
              var i;
              var o = _.indexOf(m, e) !== -1;
              var a = f(n, e, t, o);
              return a ?? (o ? (t = d(n, e, t, null)) ? `${e}="${t}"` : e : (a = h(n, e, t, o)) != null ? a : undefined);
            });
            r = `<${n}`;
            if (y) {
              r += ` ${y}`;
            }
            if (v.closing) {
              r += " /";
            }
            return r += ">";
          }
          if ((g = l(n, r, s)) != null) {
            return g;
          } else {
            return p(r);
          }
        }, s.escapeRule === "no-escape" ? function (e) {
          return e;
        } : p);
        if (g) {
          v = g.remove(v);
        }
        return v;
      }
    }];
    (function (e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
          r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
      }
    })(t.prototype, e);
    return t;
  }();
  function M(e, t) {
    var n = Number("<%= htmlLimit =>");
    if (t !== undefined) {
      n = t;
    }
    return n.toString() !== "NaN" && n !== -1 && !!(e.length >= n);
  }
  function P() {
    var e;
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var n = arguments.length > 1 ? arguments[1] : undefined;
    if (typeof t != "string") {
      return true;
    }
    if ((t = (e = (e = (e = (e = (e = t).replace(/&colon;/gi, ":")).replace(/&tab;/gi, "")).replace(/&newline;/gi, "")).replace(/(\t|\n|\r)/g, "")).indexOf("&#") === -1 ? e.trim().toLowerCase() : e.trim().replace(/&#(?:(x)([0-9a-f]+)|([0-9]+));?/gi, function (e, t, n, r) {
      return String.fromCharCode(t ? parseInt(n, 16) : parseInt(r));
    }).replace(/(\t|\n|\r)/g, "").toLowerCase()) === "currentscript") {
      if (n) {
        n("currentScript");
      }
      return false;
    }
    if (_.includes(t, "base64") && !function (e) {
      if (e === "" || e.trim() === "") {
        return true;
      }
      try {
        return !_.includes(e, "data:text/html;base64");
      } catch (e) {
        return true;
      }
    }(t)) {
      if (n) {
        n("data:text/html;base64");
      }
      return false;
    }
    var r = ["expression(", "behavior:", "view-source:"];
    if (_.some(r, function (e) {
      return t.indexOf(e) !== -1;
    })) {
      _.forEach(r, function (e) {
        if (t.indexOf(e) !== -1 && n) {
          n(e);
        }
      });
      return false;
    }
    var i = ["data:application", "data:javascript", "data:text/html", "data:texthtml"];
    if (_.some(i, function (e) {
      return t.indexOf(e) !== -1;
    })) {
      _.forEach(i, function (e) {
        if (t.indexOf(e) !== -1 && n) {
          n(e);
        }
      });
      return false;
    }
    if (t.indexOf("javascript:") > 0) {
      if (n) {
        n("javascript:");
      }
      return false;
    }
    if (/^javascript:/i.test(t)) {
      var o = t.slice(11).replace(/\s/g, "").trim();
      return !!_.some(["void", "void(0)", "void0", "false", "undefined", ";"], function (e) {
        return e === o;
      }) || (n && n("javascript:"), false);
    }
    return true;
  }
  function D(e, t) {
    var n = Number("<%= urlLimit =>");
    if (t !== undefined) {
      n = t;
    }
    return n.toString() !== "NaN" && n !== -1 && !!(e.length >= n);
  }
  function j(e, t) {
    var n = "<%= isSaveValidUrl =>";
    n = String(n);
    if (typeof e != "string" || D(e) || P(e, t)) {
      return e;
    }
    try {
      n = !n.startsWith("<%=") && JSON.parse(n);
      if (n === true || n === "true") {
        var r = new URL(e);
        return r.origin + r.pathname;
      }
    } catch (e) {}
    return "#";
  }
  function I(e, t, n) {
    if (t in e) {
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
  var N = new (function () {
    var e;
    function t() {
      (function (e, t) {
        if (!(e instanceof t)) {
          throw TypeError("Cannot call a class as a function");
        }
      })(this, t);
      I(this, "batchData", []);
      I(this, "uniqKeys", new Set());
      I(this, "config", undefined);
      I(this, "timeout", 2000);
      I(this, "lock", false);
      I(this, "isSetedConfig", false);
    }
    e = [{
      key: "setConfig",
      value: function (e) {
        if (!this.isSetedConfig) {
          this.config = e;
        }
      }
    }, {
      key: "upload",
      value: function () {
        var t = this;
        if (!this.config || !this.config.isCloseSSRReport || (s == null ? undefined : s.document)) {
          var n = "<%= isCloseSSRReport =>";
          n = String(n);
          try {
            n = !n.startsWith("<%=") && JSON.parse(n);
            if ((n === true || n === "true") && !(s == null ? undefined : s.document)) {
              return;
            }
          } catch (e) {}
          var r = this.config?.reportUrl || "";
          if (r === "-" && s.xssReportUrl) {
            r = s.xssReportUrl;
          }
          if (!this.lock && r && this.batchData.length !== 0 && r !== "-") {
            this.lock = true;
            setTimeout(function () {
              var e = t.batchData.slice(0, 100);
              t.batchData = t.batchData.slice(100);
              s.fetch(r, {
                method: "post",
                body: JSON.stringify(e),
                headers: {
                  "Content-Type": "application/json"
                }
              }).catch(function (e) {});
              t.lock = false;
              t.upload();
            }, this.timeout);
          }
        }
      }
    }, {
      key: "generateKey",
      value: function (e) {
        if (e.collectKey) {
          return [e.collectMode, e.collectKey].join("___");
        } else {
          return "";
        }
      }
    }, {
      key: "push",
      value: function (e) {
        this.batchData.push(e);
        this.upload();
      }
    }, {
      key: "sampling",
      value: function (e) {
        if (s.argusConfig) {
          var t;
          var n = s.argusConfig.xss;
          if (n) {
            var r = n.sample;
            if (r) {
              var i = _.keys(r);
              var o = 0;
              for (; o < i.length; ++o) {
                (function (n) {
                  var o = i[n];
                  var a = r[o];
                  var s = a.find(function (t) {
                    return e[o] && e[o].includes(t.target);
                  });
                  var u = a.find(function (t) {
                    return e.body && e.body[o] && e.body[o].includes(t.target);
                  });
                  if (s && s.ratio && typeof s.ratio == "number") {
                    t = s.ratio;
                  }
                  if (u && u.ratio && typeof u.ratio == "number") {
                    t = typeof t == "number" && t > u.ratio ? t : u.ratio;
                  }
                })(o);
              }
              if (typeof t == "number" && Math.floor(Math.random() * 10000) > t) {
                return true;
              }
            }
          }
        }
      }
    }, {
      key: "report",
      value: function (e) {
        var t = this.generateKey(e);
        if (s.fetch && e.collectKey) {
          var n = "SSR";
          if (s !== undefined && s.location !== undefined && s.location.href !== undefined) {
            n = s.location.href;
          }
          e.documentUrl = n;
          var r = e.documentUrl;
          if (r && typeof r.split == "function") {
            r = r.split("?")[0];
          }
          var i = "";
          if (s == null ? undefined : s.gfdatav1) {
            var o = s.gfdatav1;
            i = `${o.env}_${o.region}_${o.ver}`;
          }
          var a = {
            age: Math.floor(Date.now()),
            type: "xss",
            url: n,
            body: e,
            "user-agent": ""
          };
          var u = A();
          a.url = `${t}___${r}`;
          if (u) {
            a.body.type = `${a.body.type}_remote_close`;
          }
          a.body.type = `${a.body.type}_${i}`;
          if (n === "SSR") {
            a.url = `SSR___${a.url}`;
            a.body.ssr = true;
          }
          try {
            if (this.sampling(a) === true) {
              return;
            }
          } catch (e) {}
          this.push(a);
        }
      }
    }];
    (function (e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
          r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
      }
    })(t.prototype, e);
    return t;
  }())();
  function L(e) {
    var t = 0;
    var n = true;
    var r = false;
    var i = undefined;
    try {
      var o;
      var a = _.keys(e)[Symbol.iterator]();
      for (; !(n = (o = a.next()).done); n = true) {
        (function () {
          var n = o.value;
          if (Array.isArray(e[n])) {
            if (e[n].length === 0) {
              delete e[n];
            } else {
              e[n] = _.from(_.uniq(e[n]));
              t += e[n].length;
            }
          } else if (_.keys(e[n]).length === 0) {
            delete e[n];
          } else {
            _.keys(e[n]).forEach(function (r) {
              e[n][r] = _.from(_.uniq(e[n][r]));
              t += e[n][r].length;
            });
          }
        })();
      }
    } catch (e) {
      r = true;
      i = e;
    } finally {
      try {
        if (!n && a.return != null) {
          a.return();
        }
      } finally {
        if (r) {
          throw i;
        }
      }
    }
    return {
      count: t,
      ret: e
    };
  }
  function B(e, t) {
    var n = {};
    var r = _.keys(e);
    var i = true;
    var o = false;
    var a = undefined;
    try {
      var s;
      var u = r[Symbol.iterator]();
      for (; !(i = (s = u.next()).done); i = true) {
        var c = s.value;
        if (Array.isArray(e[c])) {
          n[c] = _.from(e[c]);
        } else {
          n[c] = B({}, e[c]);
        }
      }
    } catch (e) {
      o = true;
      a = e;
    } finally {
      try {
        if (!i && u.return != null) {
          u.return();
        }
      } finally {
        if (o) {
          throw a;
        }
      }
    }
    var l = _.keys(t);
    var f = true;
    var h = false;
    var d = undefined;
    try {
      var p;
      var g = l[Symbol.iterator]();
      for (; !(f = (p = g.next()).done); f = true) {
        var v = p.value;
        if (v in e) {
          if (Array.isArray(e[v])) {
            n[v] = e[v].concat(t[v]);
          } else {
            n[v] = B(e[v], t[v]);
          }
        } else if (Array.isArray(t[v])) {
          n[v] = _.from(t[v]);
        } else {
          n[v] = B({}, t[v]);
        }
      }
    } catch (e) {
      h = true;
      d = e;
    } finally {
      try {
        if (!f && g.return != null) {
          g.return();
        }
      } finally {
        if (h) {
          throw d;
        }
      }
    }
    return n;
  }
  var Z = {
    blackList: {
      a: ["folder"],
      meta: ["content"],
      iframe: ["srcdoc"],
      input: ["pattern"],
      vmlframe: ["xmlns"]
    },
    blackTags: ["script", "xml", "embed", "isindex", "object", "base", "set", "handler", "animate", "payload", "import"],
    blackAttrs: ["charset", "ns", "namespace", "formaction", "xlink:href", "xmlns:xlink", "handler", "repeat", "repeat-start", "repeat-end"],
    blackAttrRegExps: [/^on/],
    filterList: {
      param: ["value"],
      video: ["poster"],
      form: ["action"]
    },
    filterAttrs: ["href", "src", "background", "style", "dynsrc", "lowsrc", "content", "name"]
  };
  try {
    var U = "<%= blackConfig =>";
    U.blackAttrRegExps &&= U.blackAttrRegExps.map(function (e) {
      return new RegExp(e.toString().slice(1, e.toString().length - 1));
    });
    var z = "<%= configMode =>";
    if (_.includes(z, "override")) {
      Z = U;
    }
    if (_.includes(z, "merge")) {
      Z = B(Z, U);
    }
  } catch (e) {}
  var F = {
    mode: "black",
    whiteList: {},
    blackConfig: Z,
    collect: null,
    isSetedConfigForModule: false,
    escapeRule: "escape-report",
    initCollect: function () {
      F.collect = {
        blackList: {},
        blackTags: [],
        blackAttrs: [],
        blackAttrRegExps: [],
        filterAttrs: [],
        filterList: {},
        filterProtocol: []
      };
    },
    removeCollect: function () {
      var e = L(F.collect);
      var t = e.count;
      var n = e.ret;
      F.collect = null;
      return {
        collectKey: t === 0 ? null : JSON.stringify(n),
        collectMode: "black"
      };
    },
    setConfigForModule: function (e) {
      if (!F.isSetedConfigForModule) {
        try {
          F.bid = e.bid;
          F.region = e.region;
          F.enabled = true;
          F.isCloseSSRReport = e.isCloseSSRReport;
          F.escapeRule = e.escapeRule;
          F.reportUrl = e.reportUrl;
          var t = JSON.parse(e.blackConfig || "{}");
          t.blackAttrRegExps &&= t.blackAttrRegExps.map(function (e) {
            return new RegExp(e.toString().slice(1, e.toString().length - 1));
          });
          var n = e.configMode;
          var r = n === undefined ? "" : n;
          if (_.includes(r, "override")) {
            Z = t;
          }
          if (_.includes(r, "merge")) {
            Z = B(Z, t);
          }
          F.isSetedConfigForModule = true;
        } catch (e) {}
      }
    },
    onIgnoreTag: function (e, t) {
      if (_.includes(Z.blackTags, e)) {
        var n;
        if ((n = F.collect) !== null && n !== undefined) {
          n.blackTags.push(e);
        }
        return;
      }
      return S(t, function (e, t, n, r, i) {
        if (n.indexOf("/") !== -1) {
          if (F.escapeRule === "no-escape") {
            return r;
          } else {
            return b(r);
          }
        }
        if (i) {
          return `</${n}>`;
        }
        var o = function (e) {
          var t;
          var n;
          t = e;
          var r = (n = /\s|\n|\t/.exec(t)) ? n.index : -1;
          if (r === -1) {
            return {
              html: "",
              closing: e[e.length - 2] === "/"
            };
          }
          var i = (e = e.slice(r + 1, -1).trim())[e.length - 1] === "/";
          if (i) {
            e = e.slice(0, -1).trim();
          }
          return {
            html: e,
            closing: i
          };
        }(r);
        var a = x(o.html, function (e, t) {
          var r = 0;
          if (Z.blackList[n] && _.includes(Z.blackList[n], e)) {
            F.collect.blackList[n] = F.collect.blackList[n] || [];
            F.collect.blackList[n].push(e);
            r++;
          }
          if (Z.blackAttrRegExps.length && Z.blackAttrRegExps.some(function (t) {
            return t.test(e);
          })) {
            _.forEach(Z.blackAttrRegExps, function (t) {
              if (t.test(e)) {
                F.collect.blackAttrRegExps.push(`${t.toString()}->${e}`);
                r++;
              }
            });
          }
          if (Z.blackAttrs.length && _.includes(Z.blackAttrs, e)) {
            Z.blackAttrs.push(e);
            r++;
          }
          if (!r) {
            if (Z.filterList && Z.filterList[n] && _.includes(Z.filterList[n], e)) {
              var i = j(t, function (e) {
                var t;
                if ((t = F.collect) !== null && t !== undefined) {
                  t.filterProtocol.push(e);
                }
              });
              if (i !== t) {
                F.collect.filterList[n] = F.collect.filterList[n] || [];
                F.collect.filterList[n].push(e);
              }
              if (t) {
                return `${e}='${i}'`;
              } else {
                return e;
              }
            }
            if (Z.filterAttrs && _.includes(Z.filterAttrs, e)) {
              var o;
              var a = j(t, function (e) {
                var t;
                if ((t = F.collect) !== null && t !== undefined) {
                  t.filterProtocol.push(e);
                }
              });
              if (a !== t) {
                if ((o = F.collect) !== null && o !== undefined) {
                  o.filterAttrs.push(e);
                }
              }
              if (t) {
                return `${e}='${a}'`;
              } else {
                return e;
              }
            }
            if (t === "") {
              return `${e}=''`;
            } else if (t) {
              return `${e}='${t}'`;
            } else {
              return e;
            }
          }
        });
        r = `<${n}`;
        if (a) {
          r += ` ${a}`;
        }
        if (o.closing) {
          r += " /";
        }
        return r += ">";
      }, F.escapeRule === "no-escape" ? function (e) {
        return e;
      } : b);
    }
  };
  function H(e) {
    var t = e.reportOnly;
    var n = t === undefined || t;
    var r = e.block;
    if (n && n === "all") {
      return "report";
    } else {
      if (typeof n == "string") {
        if (n === "true") {
          n = true;
        }
        if (n === "false") {
          n = false;
        }
      }
      if (r) {
        return "enforce";
      } else if (n) {
        return "report";
      } else {
        return "enforce";
      }
    }
  }
  function G(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] ?? {};
      var r = Object.keys(n);
      if (typeof Object.getOwnPropertySymbols == "function") {
        r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        }));
      }
      r.forEach(function (t) {
        var r;
        r = n[t];
        if (t in e) {
          Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          e[t] = r;
        }
      });
    }
    return e;
  }
  function V(e, t) {
    t = t ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(t));
    } else {
      (function (e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r);
        }
        return n;
      })(Object(t)).forEach(function (n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
      });
    }
    return e;
  }
  function $(e) {
    var t = ["scmVersion", "scmName", "scmBranch", "webpackPluginVersion", "filename"];
    var n = 0;
    for (; n < t.length; ++n) {
      e[t[n]] ||= "-";
    }
  }
  r = function (e, t) {
    return new C(t).process(e);
  };
  function W(e, t, n) {
    try {
      $(n);
      var i = e;
      var o = H(n);
      try {
        R(V(G({}, n), {
          disposition: o
        }));
      } catch (e) {}
      if (!e || typeof e != "string" || M(e, Number(n.htmlLimit))) {
        return e;
      }
      N.setConfig(n);
      try {
        if (typeof DOMParser == "function" && n.isDOMParser) {
          var a = new DOMParser();
          if (typeof a.parseFromString == "function") {
            e = new DOMParser().parseFromString(e, "text/html").body.innerHTML;
          }
        }
      } catch (e) {}
      var s = A();
      F.setConfigForModule(t || n);
      F.initCollect();
      var u = r(e, F);
      var c = n.logType;
      var l = O(u);
      var f = O(e);
      var h = O(i);
      if (l === f) {
        if (n.isDOMParser && h !== f) {
          N.report({
            type: c,
            disposition: o,
            collectKey: "DOMParser",
            collectMode: "black",
            collectData: "body_innerHTML",
            sourceText: E(i.replace(/'/g, "\"")),
            filterText: E(u.replace(/'/g, "\"")),
            filename: n.filename
          });
        }
        if (s) {
          return i;
        }
        if (o === "enforce") {
          return e;
        } else {
          return i;
        }
      }
      if (!n) {
        if (s) {
          return i;
        }
        return u;
      }
      var d = F.removeCollect();
      if ((!d || !d.collectKey) && h !== l && n.escapeRule === "escape-report") {
        d = {
          collectKey: "default",
          collectMode: "black"
        };
      }
      N.report(V(G({
        type: c,
        disposition: o
      }, d), {
        sourceText: E(i.replace(/'/g, "\"")),
        filterText: E(u.replace(/'/g, "\"")),
        filename: n.filename
      }));
      if (s) {
        return i;
      }
      n.isRuntimeLog;
      if (o === "enforce") {
        return u;
      } else {
        return i;
      }
    } catch (t) {
      return e;
    }
  }
  i = function (e) {
    var t = e.sourceText;
    var n = e.saveValidUrl;
    var r = e.limit;
    var i = e.callback;
    if (typeof t != "string" || D(t, Number(r === undefined ? -1 : r)) || P(t, i)) {
      return t;
    }
    try {
      if ((n !== undefined && n) === true) {
        var o = new URL(t);
        return o.origin + o.pathname;
      }
    } catch (e) {}
    return "#";
  };
  function q(e, t, n) {
    try {
      $(n);
      var r = A();
      var o = H(n);
      try {
        R(V(G({}, n), {
          disposition: o
        }));
      } catch (e) {}
      N.setConfig(n);
      var a = [];
      var s = i({
        sourceText: e,
        callback: function (e) {
          a.push(e);
        },
        saveValidUrl: n ? n.isSaveValidUrl : undefined,
        limit: n ? n.urlLimit : undefined
      });
      if (s === e) {
        return e;
      }
      a = _.from(_.uniq(a));
      var u = t || n || {};
      if (!u) {
        if (r) {
          return e;
        }
        return s;
      }
      var c = u.logType;
      N.report({
        type: c,
        disposition: o,
        collectKey: a.join("___"),
        collectData: JSON.stringify(a),
        collectMode: "black",
        sourceText: E(e),
        filterText: E(s),
        filename: n.filename
      });
      n.isRuntimeLog;
      if (r) {
        return e;
      }
      if (o === "enforce") {
        return s;
      } else {
        return e;
      }
    } catch (t) {
      return e;
    }
  }
  require.d(exports, {
    sanitizeHtml: function () {
      return W;
    },
    sanitizeUrl: function () {
      return q;
    }
  });
}