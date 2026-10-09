// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 103899
         */
module.exports = function (module, exports, require) {
  var r;
  function i() {
    return (i = Object.assign || function (e) {
      var t;
      var n = 1;
      var r = arguments.length;
      for (; n < r; n++) {
        for (var i in t = arguments[n]) {
          if (Object.prototype.hasOwnProperty.call(t, i)) {
            e[i] = t[i];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function o(e) {
    var t = typeof Symbol == "function" && e[Symbol.iterator];
    var n = 0;
    if (t) {
      return t.call(e);
    } else {
      return {
        next: function () {
          if (e && n >= e.length) {
            e = undefined;
          }
          return {
            value: e && e[n++],
            done: !e
          };
        }
      };
    }
  }
  function a(e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) {
      return e;
    }
    var r;
    var i;
    var o = n.call(e);
    var a = [];
    try {
      while ((t === undefined || t-- > 0) && !(r = o.next()).done) {
        a.push(r.value);
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        if (r && !r.done && (n = o.return)) {
          n.call(o);
        }
      } finally {
        if (i) {
          throw i.error;
        }
      }
    }
    return a;
  }
  function s() {
    var e = [];
    var t = 0;
    for (; t < arguments.length; t++) {
      e = e.concat(a(arguments[t]));
    }
    return e;
  }
  var u;
  var c = function () {
    function e() {
      this._hooks = {};
      this._cache = [];
      this._hooksCache = {};
    }
    e.prototype.on = function (e, t) {
      if (e && t && typeof t == "function") {
        this._hooks[e] ||= [];
        this._hooks[e].push(t);
      }
    };
    e.prototype.once = function (e, t) {
      var n = this;
      if (e && t && typeof t == "function") {
        this.on(e, function r(i) {
          t(i);
          n.off(e, r);
        });
      }
    };
    e.prototype.off = function (e, t) {
      if (e && this._hooks[e] && this._hooks[e].length) {
        if (t) {
          var n = this._hooks[e].indexOf(t);
          if (n !== -1) {
            this._hooks[e].splice(n, 1);
          }
        } else {
          this._hooks[e] = [];
        }
      }
    };
    e.prototype.emit = function (e, t, n) {
      if (n) {
        if (e) {
          if (this._cache.indexOf(n) !== -1) {
            this._emit(e, t);
          } else {
            if (!this._hooksCache.hasOwnProperty(n)) {
              this._hooksCache[n] = {};
            }
            if (!this._hooksCache[n].hasOwnProperty(e)) {
              this._hooksCache[n][e] = [];
            }
            this._hooksCache[n][e].push(t);
          }
        }
      } else {
        this._emit(e, t);
      }
    };
    e.prototype._emit = function (e, t) {
      if (e && this._hooks[e] && this._hooks[e].length) {
        s(this._hooks[e]).forEach(function (e) {
          try {
            e(t);
          } catch (e) {}
        });
      }
    };
    e.prototype.set = function (e) {
      if (e && this._cache.indexOf(e) === -1) {
        this._cache.push(e);
      }
    };
    return e;
  }();
  function l(e) {
    return e != null && Object.prototype.toString.call(e) == "[object Object]";
  }
  function f(e) {
    return Array.isArray(e);
  }
  u = +Date.now() + Number(("" + Math.random()).slice(2, 8));
  function h() {
    return u += 1;
  }
  function d(e) {
    return function (e, t, n) {
      if (typeof e == "string" && typeof n == "number") {
        var r;
        var i = [];
        var o = String.fromCharCode((n = n <= 25 ? n : n % 25) + 97);
        r = e.split(o);
        for (var a = 0; a < r.length; a++) {
          var s = parseInt(r[a], n);
          var u = String.fromCharCode(s = +s ^ 64);
          i.push(u);
        }
        return i.join("");
      }
    }(e, 64, 25);
  }
  function p(e) {
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      window.addEventListener("pagehide", e, false);
    } else {
      window.addEventListener("beforeunload", e, false);
    }
  }
  function g(e, t, n) {
    var r = document.createElement("script");
    r.src = e;
    r.onerror = function () {
      n(e);
    };
    r.onload = function () {
      t();
    };
    document.getElementsByTagName("head")[0].appendChild(r);
  }
  function v() {
    var e = 0;
    ["hidden", "msHidden", "webkitHidden"].forEach(function (t) {
      if (document[t] !== undefined) {
        e = 1;
      }
    });
    return e;
  }
  function m(e = function () {}, t = 1000) {
    var n;
    var r = Date.now() + t;
    n = window.setTimeout(function i() {
      var o = Date.now() - r;
      e();
      r += t;
      n = window.setTimeout(i, Math.max(0, t - o));
    }, t);
    return function () {
      window.clearTimeout(n);
    };
  }
  function y(e) {
    var t = document.createElement("a");
    t.href = e;
    return t;
  }
  function b(e) {
    var t = {};
    try {
      var n = y(e).search;
      if (!n) {
        return t;
      }
      (n = n.slice(1)).split("&").forEach(function (e) {
        var n;
        var r;
        var i = e.split("=");
        if (i.length) {
          n = i[0];
          r = i[1];
        }
        try {
          t[n] = decodeURIComponent(r === undefined ? "" : r);
        } catch (e) {
          t[n] = r;
        }
      });
    } catch (e) {}
    return t;
  }
  function _(e) {
    var t = 0;
    var n = 0;
    var r = (e += "").length;
    var i = 0;
    for (; i < r; i++) {
      if ((t = t * 31 + e.charCodeAt(n++)) > 140737488355327 || t < -140737488355328) {
        t &= 281474976710655;
      }
    }
    if (t < 0) {
      t += 2251799813685247;
    }
    return t;
  }
  function w(e, t) {
    e(t = {
      exports: {}
    }, t.exports);
    return t.exports;
  }
  if (typeof window != "undefined") {
    window;
  } else if (require.g !== undefined) {
    require.g;
  } else if (typeof self != "undefined") {
    self;
  }
  var E;
  var S;
  var x = w(function (e, t) {
    var n;
    n = function () {
      function e() {
        var e = 0;
        var t = {};
        for (; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n) {
            t[r] = n[r];
          }
        }
        return t;
      }
      function t(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return function n(r) {
        function i() {}
        function o(t, n, o) {
          if (typeof document != "undefined") {
            if (typeof (o = e({
              path: "/"
            }, i.defaults, o)).expires == "number") {
              o.expires = new Date(+new Date() + o.expires * 86400000);
            }
            o.expires = o.expires ? o.expires.toUTCString() : "";
            try {
              var a = JSON.stringify(n);
              if (/^[\{\[]/.test(a)) {
                n = a;
              }
            } catch (e) {}
            n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
            t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
            var s = "";
            for (var u in o) {
              if (o[u]) {
                s += "; " + u;
                if (o[u] !== true) {
                  s += "=" + o[u].split(";")[0];
                }
              }
            }
            return document.cookie = t + "=" + n + s;
          }
        }
        function a(e, n) {
          if (typeof document != "undefined") {
            var i = {};
            var o = document.cookie ? document.cookie.split("; ") : [];
            var a = 0;
            for (; a < o.length; a++) {
              var s = o[a].split("=");
              var u = s.slice(1).join("=");
              if (!n && u.charAt(0) === "\"") {
                u = u.slice(1, -1);
              }
              try {
                var c = t(s[0]);
                u = (r.read || r)(u, c) || t(u);
                if (n) {
                  try {
                    u = JSON.parse(u);
                  } catch (e) {}
                }
                i[c] = u;
                if (e === c) {
                  break;
                }
              } catch (e) {}
            }
            if (e) {
              return i[e];
            } else {
              return i;
            }
          }
        }
        i.set = o;
        i.get = function (e) {
          return a(e, false);
        };
        i.getJSON = function (e) {
          return a(e, true);
        };
        i.remove = function (t, n) {
          o(t, "", e(n, {
            expires: -1
          }));
        };
        i.defaults = {};
        i.withConverter = n;
        return i;
      }(function () {});
    };
    e.exports = n();
  });
  function k(e, t) {
    try {
      if (e) {
        return x.get(e, {
          domain: t || document.domain
        });
      } else {
        return x.get();
      }
    } catch (e) {
      return "";
    }
  }
  function O(e, t, n, r) {
    try {
      var i = r || document.domain;
      var o = +new Date() + (n || 604800000);
      x.set(e, t, {
        expires: new Date(o),
        path: "/",
        domain: i
      });
    } catch (e) {}
  }
  var A = function () {
    function e() {
      this.cache = {};
    }
    e.prototype.setItem = function (e, t) {
      this.cache[e] = t;
    };
    e.prototype.getItem = function (e) {
      return this.cache[e];
    };
    e.prototype.removeItem = function (e) {
      this.cache[e] = undefined;
    };
    e.prototype.getCookie = function (e, t) {
      return k(e, t);
    };
    e.prototype.setCookie = function (e, t, n, r) {
      O(e, t, n, r);
    };
    return e;
  }();
  var T = {
    getItem: function (e) {
      try {
        var t = localStorage.getItem(e);
        var n = t;
        try {
          if (t && typeof t == "string") {
            n = JSON.parse(t);
          }
        } catch (e) {}
        return n || {};
      } catch (e) {}
      return {};
    },
    setItem: function (e, t) {
      try {
        var n = typeof t == "string" ? t : JSON.stringify(t);
        localStorage.setItem(e, n);
      } catch (e) {}
    },
    removeItem: function (e) {
      try {
        localStorage.removeItem(e);
      } catch (e) {}
    },
    getCookie: function (e, t) {
      return k(e, t);
    },
    setCookie: function (e, t, n, r) {
      O(e, t, n, r);
    },
    isSupportLS: function () {
      try {
        localStorage.setItem("_ranger-test-key", "hi");
        localStorage.getItem("_ranger-test-key");
        localStorage.removeItem("_ranger-test-key");
        return true;
      } catch (e) {
        return false;
      }
    }()
  };
  var R = {
    getItem: function (e) {
      try {
        var t = sessionStorage.getItem(e);
        var n = t;
        try {
          if (t && typeof t == "string") {
            n = JSON.parse(t);
          }
        } catch (e) {}
        return n || {};
      } catch (e) {}
      return {};
    },
    setItem: function (e, t) {
      try {
        var n = typeof t == "string" ? t : JSON.stringify(t);
        sessionStorage.setItem(e, n);
      } catch (e) {}
    },
    removeItem: function (e) {
      try {
        sessionStorage.removeItem(e);
      } catch (e) {}
    },
    getCookie: function (e, t) {
      return k(e, t);
    },
    setCookie: function (e, t, n, r) {
      O(e, t, n, r);
    },
    isSupportSession: function () {
      try {
        sessionStorage.setItem("_ranger-test-key", "hi");
        sessionStorage.getItem("_ranger-test-key");
        sessionStorage.removeItem("_ranger-test-key");
        return true;
      } catch (e) {
        return false;
      }
    }()
  };
  var C = function () {
    function e(e, t) {
      this._storage = t && t === "session" ? R : !e && T.isSupportLS ? T : new A();
    }
    e.prototype.getItem = function (e) {
      return this._storage.getItem(e);
    };
    e.prototype.setItem = function (e, t) {
      this._storage.setItem(e, t);
    };
    e.prototype.getCookie = function (e, t) {
      return this._storage.getCookie(e, t);
    };
    e.prototype.setCookie = function (e, t, n, r) {
      this._storage.setCookie(e, t, n, r);
    };
    e.prototype.removeItem = function (e) {
      this._storage.removeItem(e);
    };
    return e;
  }();
  var M = function () {
    function e(e, t, n) {
      this.appid = e;
      this.domain = t;
      this.userAgent = window.navigator.userAgent;
      this.appVersion = window.navigator.appVersion;
      this.cookie_expire = n;
    }
    e.prototype.init = function () {
      var e = window.navigator.userAgent;
      var t = window.navigator.language;
      var n = document.referrer;
      var r = n ? y(n).hostname : "";
      var i = b(window.location.href);
      var o = /Mobile|htc|mini|Android|iP(ad|od|hone)/.test(this.appVersion) ? "wap" : "web";
      this.utm = function (e, t, n, r) {
        var i = new C(false);
        var o = new C(false, "session");
        var a = e ? "_tea_utm_cache_" + e : "_tea_utm_cache";
        var s = e ? "_$utm_from_url_" + e : "_$utm_from_url";
        var u = {};
        var c = ["tr_shareuser", "tr_admaster", "tr_param1", "tr_param2", "tr_param3", "tr_param4", "$utm_from_url"];
        var l = {
          ad_id: Number(t.ad_id) || undefined,
          campaign_id: Number(t.campaign_id) || undefined,
          creative_id: Number(t.creative_id) || undefined,
          utm_source: t.utm_source,
          utm_medium: t.utm_medium,
          utm_campaign: t.utm_campaign,
          utm_term: t.utm_term,
          utm_content: t.utm_content,
          tr_shareuser: t.tr_shareuser,
          tr_admaster: t.tr_admaster,
          tr_param1: t.tr_param1,
          tr_param2: t.tr_param2,
          tr_param3: t.tr_param3,
          tr_param4: t.tr_param4
        };
        try {
          var f = false;
          for (var h in l) {
            if (l[h]) {
              if (c.indexOf(h) !== -1) {
                if (!u.hasOwnProperty("tracer_data")) {
                  u.tracer_data = {};
                }
                u.tracer_data[h] = l[h];
              } else {
                u[h] = l[h];
              }
              f = true;
            }
          }
          if (f) {
            o.setItem(s, "1");
            i.setCookie(a, JSON.stringify(u), r, n);
          } else {
            var d = i.getCookie(a, n);
            if (d) {
              u = JSON.parse(d);
            }
          }
          if (o.getItem(s)) {
            if (!u.hasOwnProperty("tracer_data")) {
              u.tracer_data = {};
            }
            u.tracer_data.$utm_from_url = 1;
          }
        } catch (e) {
          return l;
        }
        return u;
      }(this.appid, i, this.domain, this.cookie_expire);
      var a = this.browser();
      var s = this.os();
      return {
        browser: a.browser,
        browser_version: a.browser_version,
        platform: o,
        os_name: s.os_name,
        os_version: s.os_version,
        userAgent: e,
        screen_width: window.screen && window.screen.width,
        screen_height: window.screen && window.screen.height,
        device_model: this.getDeviceModel(s.os_name),
        language: t,
        referrer: n,
        referrer_host: r,
        utm: this.utm,
        latest_data: this.last(n, r)
      };
    };
    e.prototype.last = function (e, t) {
      var n = "";
      var r = "";
      var i = "";
      var o = location.hostname;
      var a = false;
      if (e && t && o !== t) {
        n = e;
        r = t;
        a = true;
        var s = b(e);
        if (s.keyword) {
          i = s.keyword;
        }
      }
      return {
        $latest_referrer: n,
        $latest_referrer_host: r,
        $latest_search_keyword: i,
        isLast: a
      };
    };
    e.prototype.browser = function () {
      var e;
      var t;
      var n = "";
      var r = "" + parseFloat(this.appVersion);
      var i = this.userAgent;
      if (i.indexOf("Edge") !== -1 || i.indexOf("Edg") !== -1) {
        n = "Microsoft Edge";
        if (i.indexOf("Edge") !== -1) {
          e = i.indexOf("Edge");
          r = i.substring(e + 5);
        } else {
          e = i.indexOf("Edg");
          r = i.substring(e + 4);
        }
      } else if ((e = i.indexOf("MSIE")) !== -1) {
        n = "Microsoft Internet Explorer";
        r = i.substring(e + 5);
      }
      if ((e = i.indexOf("MetaSr")) !== -1) {
        n = "sougoubrowser";
        r = i.substring(e + 7, e + 10);
      } else if (i.indexOf("MQQBrowser") !== -1 || i.indexOf("QQBrowser") !== -1) {
        n = "qqbrowser";
        if (i.indexOf("MQQBrowser") !== -1) {
          e = i.indexOf("MQQBrowser");
          r = i.substring(e + 11, e + 15);
        } else if (i.indexOf("QQBrowser") !== -1) {
          e = i.indexOf("QQBrowser");
          r = i.substring(e + 10, e + 17);
        }
      } else if (i.indexOf("Chrome") !== -1) {
        if ((e = i.indexOf("MicroMessenger")) !== -1) {
          n = "weixin";
          r = i.substring(e + 15, e + 20);
        } else if ((e = i.indexOf("360")) !== -1) {
          n = "360browser";
          r = i.substring(i.indexOf("Chrome") + 7);
        } else if (i.indexOf("baidubrowser") !== -1 || i.indexOf("BIDUBrowser") !== -1) {
          if (i.indexOf("baidubrowser") !== -1) {
            e = i.indexOf("baidubrowser");
            r = i.substring(e + 13, e + 16);
          } else if (i.indexOf("BIDUBrowser") !== -1) {
            e = i.indexOf("BIDUBrowser");
            r = i.substring(e + 12, e + 15);
          }
          n = "baidubrowser";
        } else if ((e = i.indexOf("xiaomi")) !== -1) {
          if (i.indexOf("openlanguagexiaomi") !== -1) {
            n = "openlanguage xiaomi";
            r = i.substring(e + 7, e + 13);
          } else {
            n = "xiaomi";
            r = i.substring(e - 7, e - 1);
          }
        } else if ((e = i.indexOf("TTWebView")) !== -1) {
          n = "TTWebView";
          r = i.substring(e + 10, e + 23);
        } else if ((e = i.indexOf("Chrome")) !== -1) {
          n = "Chrome";
          r = i.substring(e + 7);
        } else if ((e = i.indexOf("Chrome")) !== -1) {
          n = "Chrome";
          r = i.substring(e + 7);
        }
      } else if (i.indexOf("Safari") !== -1) {
        if ((e = i.indexOf("QQ")) !== -1) {
          n = "qqbrowser";
          r = i.substring(e + 10, e + 16);
        } else if ((e = i.indexOf("Safari")) !== -1) {
          n = "Safari";
          r = i.substring(e + 7);
          if ((e = i.indexOf("Version")) !== -1) {
            r = i.substring(e + 8);
          }
        }
      } else if ((e = i.indexOf("Firefox")) !== -1) {
        n = "Firefox";
        r = i.substring(e + 8);
      } else if ((e = i.indexOf("MicroMessenger")) !== -1) {
        n = "weixin";
        r = i.substring(e + 15, e + 20);
      } else if ((e = i.indexOf("QQ")) !== -1) {
        n = "qqbrowser";
        r = i.substring(e + 3, e + 8);
      }
      if ((t = r.indexOf(";")) !== -1) {
        r = r.substring(0, t);
      }
      if ((t = r.indexOf(" ")) !== -1) {
        r = r.substring(0, t);
      }
      if ((t = r.indexOf(")")) !== -1) {
        r = r.substring(0, t);
      }
      return {
        browser: n,
        browser_version: r
      };
    };
    e.prototype.os = function () {
      var e;
      var t;
      var n = "";
      var r = "";
      var i = [{
        s: "Windows 10",
        r: /(Windows 10.0|Windows NT 10.0|Windows NT 10.1)/
      }, {
        s: "Windows 8.1",
        r: /(Windows 8.1|Windows NT 6.3)/
      }, {
        s: "Windows 8",
        r: /(Windows 8|Windows NT 6.2)/
      }, {
        s: "Windows 7",
        r: /(Windows 7|Windows NT 6.1)/
      }, {
        s: "Android",
        r: /Android/
      }, {
        s: "Sun OS",
        r: /SunOS/
      }, {
        s: "Linux",
        r: /(Linux|X11)/
      }, {
        s: "iOS",
        r: /(iPhone|iPad|iPod)/
      }, {
        s: "Mac OS X",
        r: /Mac OS X/
      }, {
        s: "Mac OS",
        r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
      }];
      var o = 0;
      for (; o < i.length; o++) {
        var a = i[o];
        if (a.r.test(this.userAgent)) {
          if ((n = a.s) === "Mac OS X" && this.isNewIpad()) {
            n = "iOS";
          }
          break;
        }
      }
      function s(e, t) {
        var n = e.exec(t);
        if (n && n[1]) {
          return n[1];
        } else {
          return "";
        }
      }
      function u(e, t) {
        var n = RegExp("(?:^|[^A-Z0-9-_]|[^A-Z0-9-]_|sprd-)(?:" + e + ")", "i").exec(t);
        if (n) {
          return n.slice(1)[0];
        } else {
          return "";
        }
      }
      if (/Windows/.test(n)) {
        r = s(/Windows (.*)/, n);
        n = "windows";
      }
      switch (n) {
        case "Mac OS X":
          r = u("Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\d+(?:[_\\.]\\d+)+))?", this.userAgent);
          n = "mac";
          break;
        case "Android":
          if (!(t = s(/Android ([\.\_\d]+)/, e = this.userAgent))) {
            t = s(/Android\/([\.\_\d]+)/, e);
          }
          r = t;
          n = "android";
          break;
        case "iOS":
          r = this.isNewIpad() ? u("Mac[ +]OS[ +]X(?:[ /](?:Version )?(\\d+(?:[_\\.]\\d+)+))?", this.userAgent) : (r = /OS (\d+)_(\d+)_?(\d+)?/.exec(this.appVersion)) ? r[1] + "." + r[2] + "." + (r[3] | 0) : "";
          n = "ios";
      }
      return {
        os_name: n,
        os_version: r
      };
    };
    e.prototype.getDeviceModel = function (e) {
      var t = "";
      try {
        if (e === "android") {
          navigator.userAgent.split(";").forEach(function (e) {
            if (e.indexOf("Build/") > -1) {
              t = e.slice(0, e.indexOf("Build/"));
            }
          });
        } else if (e === "ios" || e === "mac" || e === "windows") {
          if (this.isNewIpad()) {
            t = "iPad";
          } else {
            var n = navigator.userAgent.replace("Mozilla/5.0 (", "");
            var r = n.indexOf(";");
            t = n.slice(0, r);
          }
        }
      } catch (e) {}
      return t.trim();
    };
    e.prototype.isNewIpad = function () {
      return this.userAgent !== undefined && navigator.platform === "MacIntel" && typeof navigator.maxTouchPoints == "number" && navigator.maxTouchPoints > 1;
    };
    return e;
  }();
  var P = {
    cn: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az1az22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
    va: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az1gz22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k",
    sg: "1fz22z22z1nz21z4mz4bz4bz22z1mz19z1jz1mz1ez4az22z1mz19z21z1lz21z21z1bz1iz4az1az1mz1k"
  };
  var D = {
    cn: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az28z1gz1hz1gz1cz18z1nz1gz4az1az1mz1k",
    sg: "1fz22z22z1nz21z4mz4bz4bz21z1ez18z1jz1gz49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k",
    va: "1fz22z22z1nz21z4mz4bz4bz1kz18z1jz1gz24z18z49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k"
  };
  var j = "5.1.1_safe";
  var I = function () {
    function e(e, t) {
      this.collector = e;
      this.config = t;
      this.eventNameWhiteList = ["__bav_page", "__bav_beat", "__bav_page_statistics", "__bav_click", "__bav_page_exposure"];
      this.paramsNameWhiteList = ["$inactive", "$inline", "$target_uuid_list", "$source_uuid", "$is_spider", "$source_id", "$is_first_time", "_staging_flag"];
      this.regStr = RegExp("^[a-zA-Z0-9][a-z0-9A-Z_.-]{1,255}$");
    }
    e.prototype.checkVerify = function (e) {
      var t = this;
      if (!e || !e.length) {
        return false;
      }
      var n = e[0];
      if (!n) {
        return false;
      }
      var r = n.events;
      var i = n.header;
      if (!r || !r.length) {
        return false;
      }
      var o = true;
      r.forEach(function (e) {
        if (!e) {
          o = false;
          e.checkEvent = "事件异常";
          return;
        }
        if (!t.checkEventName(e.event)) {
          o = false;
          e.checkEvent = "事件名不能以 $ or __开头";
        }
        if (!t.checkEventParams(e.params)) {
          o = false;
          e.checkParams = "属性名不能以 $ or __开头";
        }
      });
      if (!this.checkEventParams(i)) {
        o = false;
      }
      return o;
    };
    e.prototype.checkEventName = function (e) {
      return !!e && this.calculate(e, "event");
    };
    e.prototype.checkEventParams = function (e) {
      var t = e;
      if (typeof e == "string") {
        t = JSON.parse(t);
      }
      if (!Object.keys(t).length) {
        return true;
      }
      for (var n in t) {
        return !!this.calculate(n, "params") && (typeof t[n] != "string" || !(t[n].length > 1024));
      }
      return true;
    };
    e.prototype.calculate = function (e, t) {
      return (t === "event" ? this.eventNameWhiteList : this.paramsNameWhiteList).indexOf(e) !== -1 || !RegExp("^\\$").test(e) && !RegExp("^__").test(e);
    };
    return e;
  }();
  (eF = E ||= {}).Init = "init";
  eF.Config = "config";
  eF.Start = "start";
  eF.Ready = "ready";
  eF.UnReady = "un-ready";
  eF.TokenComplete = "token-complete";
  eF.TokenStorage = "token-storage";
  eF.TokenFetch = "token-fetch";
  eF.TokenError = "token-error";
  eF.ConfigUuid = "config-uuid";
  eF.ConfigWebId = "config-webid";
  eF.ConfigDomain = "config-domain";
  eF.CustomWebId = "custom-webid";
  eF.TokenChange = "token-change";
  eF.TokenReset = "token-reset";
  eF.ConfigTransform = "config-transform";
  eF.EnvTransform = "env-transform";
  eF.SessionReset = "session-reset";
  eF.SessionResetTime = "session-reset-time";
  eF.SetSessionId = "set-session-id";
  eF.Event = "event";
  eF.Events = "events";
  eF.EventNow = "event-now";
  eF.CleanEvents = "clean-events";
  eF.BeconEvent = "becon-event";
  eF.SubmitBefore = "submit-before";
  eF.SubmitScuess = "submit-scuess";
  eF.SubmitAfter = "submit-after";
  eF.SubmitError = "submit-error";
  eF.SubmitVerify = "submit-verify";
  eF.Stay = "stay";
  eF.ResetStay = "reset-stay";
  eF.StayReady = "stay-ready";
  eF.SetStay = "set-stay";
  eF.RouteChange = "route-change";
  eF.RouteReady = "route-ready";
  eF.Ab = "ab";
  eF.AbVar = "ab-var";
  eF.AbAllVars = "ab-all-vars";
  eF.AbConfig = "ab-config";
  eF.AbExternalVersion = "ab-external-version";
  eF.AbVersionChangeOn = "ab-version-change-on";
  eF.AbVersionChangeOff = "ab-version-change-off";
  eF.AbOpenLayer = "ab-open-layer";
  eF.AbCloseLayer = "ab-close-layer";
  eF.AbReady = "ab-ready";
  eF.AbComplete = "ab-complete";
  eF.AbTimeout = "ab-timeout";
  eF.Profile = "profile";
  eF.ProfileSet = "profile-set";
  eF.ProfileSetOnce = "profile-set-once";
  eF.ProfileUnset = "profile-unset";
  eF.ProfileIncrement = "profile-increment";
  eF.ProfileAppend = "profile-append";
  eF.ProfileClear = "profile-clear";
  eF.Autotrack = "autotrack";
  eF.AutotrackReady = "autotrack-ready";
  eF.CepReady = "cep-ready";
  eF.TracerReady = "tracer-ready";
  eF.sessionRecord = "session-record";
  eF.SessionRecordStart = "session-record-start";
  eF.SessionRecordPause = "session-record-pause";
  eF.SessionRecordEnd = "session-record-end";
  eF.SessionRecordReport = "session-record-report";
  eF.DestoryInstance = "destory-instance";
  eF.VisualCollectReady = "visual-collect-ready";
  eF.VisualApiReady = "visual-api-ready";
  eF.VisualApiUpdate = "visual-api-update";
  (eH = S ||= {}).DEBUGGER_MESSAGE = "debugger-message";
  eH.DEBUGGER_MESSAGE_SDK = "debugger-message-sdk";
  eH.DEBUGGER_MESSAGE_FETCH = "debugger-message-fetch";
  eH.DEBUGGER_MESSAGE_FETCH_RESULT = "debugger-message-fetch-result";
  eH.DEBUGGER_MESSAGE_EVENT = "debugger-message-event";
  eH.DEVTOOL_WEB_READY = "devtool-web-ready";
  var N = E;
  var L = undefined;
  var B = new Date().getTimezoneOffset();
  var Z = parseInt("" + -B / 60, 10);
  var U = B * 60;
  var z = function () {
    function e(e, t) {
      this.is_first_time = true;
      this.configPersist = false;
      this.initConfig = t;
      this.collect = e;
      var n = new M(t.app_id, t.cookie_domain || "", t.cookie_expire || 7776000000).init();
      this.eventCheck = new I(e, t);
      var r = "__tea_cache_first_" + t.app_id;
      this.configKey = "__tea_cache_config_" + t.app_id;
      this.sessionStorage = new C(false, "session");
      this.localStorage = new C(false, "local");
      if (t.configPersist) {
        this.configPersist = true;
        this.storage = t.configPersist === 1 ? this.sessionStorage : this.localStorage;
      }
      var i = this.localStorage.getItem(r);
      if (i && i == 1) {
        this.is_first_time = false;
      } else {
        this.is_first_time = true;
        this.localStorage.setItem(r, "1");
      }
      this.envInfo = {
        user: {
          user_unique_id: L,
          user_type: L,
          user_id: L,
          user_is_auth: L,
          user_is_login: L,
          device_id: L,
          web_id: L,
          ip_addr_id: L,
          user_unique_id_type: L
        },
        header: {
          app_id: L,
          app_name: L,
          app_install_id: L,
          install_id: L,
          app_package: L,
          app_channel: L,
          app_version: L,
          ab_version: L,
          os_name: n.os_name,
          os_version: n.os_version,
          device_model: n.device_model,
          ab_client: L,
          traffic_type: L,
          client_ip: L,
          device_brand: L,
          os_api: L,
          access: L,
          language: n.language,
          region: L,
          app_language: L,
          app_region: L,
          creative_id: n.utm.creative_id,
          ad_id: n.utm.ad_id,
          campaign_id: n.utm.campaign_id,
          log_type: L,
          rnd: L,
          platform: n.platform,
          sdk_version: j,
          sdk_lib: "js",
          province: L,
          city: L,
          timezone: Z,
          tz_offset: U,
          tz_name: L,
          sim_region: L,
          carrier: L,
          resolution: n.screen_width + "x" + n.screen_height,
          browser: n.browser,
          browser_version: n.browser_version,
          referrer: n.referrer,
          referrer_host: n.referrer_host,
          width: n.screen_width,
          height: n.screen_height,
          screen_width: n.screen_width,
          screen_height: n.screen_height,
          utm_term: n.utm.utm_term,
          utm_content: n.utm.utm_content,
          utm_source: n.utm.utm_source,
          utm_medium: n.utm.utm_medium,
          utm_campaign: n.utm.utm_campaign,
          tracer_data: JSON.stringify(n.utm.tracer_data),
          custom: {},
          wechat_unionid: L,
          wechat_openid: L
        }
      };
      this.ab_version = "";
      this.evtParams = {};
      this.reportErrorCallback = function () {};
      this.isLast = false;
      this.setCustom(n);
      this.initDomain();
      this.initABData();
    }
    e.prototype.initDomain = function () {
      var e = this.initConfig.channel_domain;
      if (e) {
        this.domain = e;
      } else {
        var t = this.initConfig.channel;
        this.domain = d(D[t]);
      }
    };
    e.prototype.setDomain = function (e) {
      this.domain = e;
    };
    e.prototype.getDomain = function () {
      return this.domain;
    };
    e.prototype.initABData = function () {
      var e = "__tea_sdk_ab_version_" + this.initConfig.app_id;
      var t = null;
      if (this.initConfig.ab_cross) {
        var n = this.localStorage.getCookie(e, this.initConfig.ab_cookie_domain);
        t = n ? JSON.parse(n) : null;
      } else {
        t = this.localStorage.getItem(e);
      }
      this.setAbCache(t);
    };
    e.prototype.setAbCache = function (e) {
      this.ab_cache = e;
    };
    e.prototype.getAbCache = function () {
      return this.ab_cache;
    };
    e.prototype.setAbVersion = function (e) {
      this.ab_version = e;
    };
    e.prototype.getAbVersion = function () {
      return this.ab_version;
    };
    e.prototype.clearAbCache = function () {
      this.ab_version = "";
      this.ab_cache = {};
    };
    e.prototype.getUrl = function (e) {
      var t = "";
      switch (e) {
        case "event":
          t = "/list";
          break;
        case "webid":
          t = "/webid";
          break;
        case "tobid":
          t = "/tobid";
      }
      var n = "";
      if (this.initConfig.caller) {
        n = "?sdk_version=" + j + "&sdk_name=web&app_id=" + this.initConfig.app_id + "&caller=" + this.initConfig.caller;
      }
      return "" + this.getDomain() + t + n;
    };
    e.prototype.setCustom = function (e) {
      if (e && e.latest_data && e.latest_data.isLast) {
        delete e.latest_data.isLast;
        this.isLast = true;
        for (var t in e.latest_data) {
          this.envInfo.header.custom[t] = e.latest_data[t];
        }
      }
    };
    e.prototype.set = function (e) {
      var t = this;
      Object.keys(e).forEach(function (n) {
        if (e[n] === undefined || e[n] === null) {
          t.delete(n);
        }
        try {
          t.eventCheck.calculate(n, "config");
        } catch (e) {}
        if (n === "traffic_type" && t.isLast) {
          t.envInfo.header.custom.$latest_traffic_source_type = e[n];
        }
        if (n === "evtParams") {
          t.evtParams = i({}, t.evtParams || {}, e.evtParams || {});
        } else if (n === "_staging_flag") {
          t.evtParams = i({}, t.evtParams || {}, {
            _staging_flag: e._staging_flag
          });
        } else if (n === "reportErrorCallback" && typeof e[n] == "function") {
          t.reportErrorCallback = e[n];
        } else {
          var r = "";
          var o = "";
          if (n.indexOf(".") > -1) {
            var a = n.split(".");
            r = a[0];
            o = a[1];
          }
          if (r) {
            if (r === "user" || r === "header") {
              t.envInfo[r][o] = e[n];
            } else {
              t.envInfo.header.custom[o] = e[n];
            }
          } else if (Object.hasOwnProperty.call(t.envInfo.user, n)) {
            if (["user_type", "ip_addr_id"].indexOf(n) > -1) {
              t.envInfo.user[n] = e[n] ? Number(e[n]) : e[n];
            } else if (["user_id", "web_id", "user_unique_id", "user_unique_id_type"].indexOf(n) > -1) {
              t.envInfo.user[n] = e[n] ? String(e[n]) : e[n];
            } else if (["user_is_auth", "user_is_login"].indexOf(n) > -1) {
              t.envInfo.user[n] = !!e[n];
            } else if (n === "device_id") {
              t.envInfo.user[n] = e[n];
            }
          } else if (Object.hasOwnProperty.call(t.envInfo.header, n)) {
            t.envInfo.header[n] = e[n];
          } else {
            t.envInfo.header.custom[n] = e[n];
          }
        }
      });
    };
    e.prototype.get = function (e) {
      try {
        if (e) {
          if (e === "evtParams") {
            return this.evtParams;
          } else if (e === "reportErrorCallback") {
            return this[e];
          } else if (Object.hasOwnProperty.call(this.envInfo.user, e)) {
            return this.envInfo.user[e];
          } else if (Object.hasOwnProperty.call(this.envInfo.header, e)) {
            return this.envInfo.header[e];
          } else {
            return JSON.parse(JSON.stringify(this.envInfo[e]));
          }
        } else {
          return JSON.parse(JSON.stringify(this.envInfo));
        }
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.setStore = function (e) {
      try {
        if (!this.configPersist) {
          return;
        }
        var t = this.storage.getItem(this.configKey) || {};
        if (t && Object.keys(e).length) {
          var n = Object.assign(e, t);
          this.storage.setItem(this.configKey, n);
        }
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.getStore = function () {
      try {
        if (!this.configPersist) {
          return null;
        }
        var e = this.storage.getItem(this.configKey) || {};
        if (e && Object.keys(e).length) {
          return e;
        } else {
          return null;
        }
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return null;
      }
    };
    e.prototype.delete = function (e) {
      try {
        if (!this.configPersist) {
          return;
        }
        var t = this.storage.getItem(this.configKey) || {};
        if (t && Object.hasOwnProperty.call(t, e)) {
          delete t[e];
          this.storage.setItem(this.configKey, t);
        }
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    return e;
  }();
  var F = function () {
    function e(e, t) {
      this.isLog = t || false;
      this.name = e || "";
    }
    e.prototype.info = function (e) {
      this.isLog;
    };
    e.prototype.warn = function (e) {
      this.isLog;
    };
    e.prototype.error = function (e) {
      this.isLog;
    };
    e.prototype.throw = function (e) {
      this.error(this.name);
      throw Error(e);
    };
    return e;
  }();
  var H = function () {
    function e() {
      this.spiderBot = ["Baiduspider", "googlebot", "360Spider", "haosouspider", "YoudaoBot", "Sogou News Spider", "Yisouspider", "Googlebot", "Headless", "Applebot", "Bingbot", "PetalBot"];
    }
    e.prototype.checkSpider = function (e) {
      if (!e.enable_spider) {
        return false;
      }
      var t = window.navigator.userAgent;
      if (!t) {
        return true;
      }
      var n = false;
      this.spiderBot.forEach(function (e) {
        if (t.indexOf(e) !== -1) {
          n = true;
        }
      });
      return n;
    };
    return e;
  }();
  var G = function () {
    function e(e, t) {
      this.collect = e;
      this.native = t;
    }
    var t = e.prototype;
    t.bridgeInject = function () {
      try {
        return !!this.native && !!AppLogBridge;
      } catch (e) {
        return false;
      }
    };
    t.bridgeReady = function () {
      var e = this;
      return new Promise(function (t, n) {
        try {
          if (e.bridgeInject()) {
            AppLogBridge.hasStarted(function (e) {
              if (e) {
                t(true);
              } else {
                n(false);
              }
            });
          } else {
            n(false);
          }
        } catch (e) {
          n(false);
        }
      });
    };
    t.setNativeAppId = function (e) {
      try {
        AppLogBridge.setNativeAppId(JSON.stringify(e));
      } catch (e) {}
    };
    t.setConfig = function (e) {
      var t = this;
      try {
        Object.keys(e).forEach(function (n) {
          if (n === "user_unique_id") {
            t.setUserUniqueId(e[n]);
          } else if (e[n]) {
            t.addHeaderInfo(n, e[n]);
          } else {
            t.removeHeaderInfo(n);
          }
        });
      } catch (e) {}
    };
    t.setUserUniqueId = function (e) {
      try {
        AppLogBridge.setUserUniqueId(e);
      } catch (e) {}
    };
    t.addHeaderInfo = function (e, t) {
      try {
        AppLogBridge.addHeaderInfo(e, t);
      } catch (e) {}
    };
    t.setHeaderInfo = function (e) {
      try {
        AppLogBridge.setHeaderInfo(JSON.stringify(e));
      } catch (e) {}
    };
    t.removeHeaderInfo = function (e) {
      try {
        AppLogBridge.removeHeaderInfo(e);
      } catch (e) {}
    };
    t.reportPv = function (e) {
      this.onEventV3("predefine_pageview", e);
    };
    t.onEventV3 = function (e, t) {
      try {
        AppLogBridge.onEventV3(e, t);
        this.collect.emit(DebuggerMesssge.DEBUGGER_MESSAGE, {
          type: DebuggerMesssge.DEBUGGER_MESSAGE_EVENT,
          info: "bridge埋点上报",
          time: Date.now(),
          data: [{
            events: [{
              event: e,
              params: t
            }]
          }],
          code: 200,
          status: "success"
        });
      } catch (e) {}
    };
    t.profileSet = function (e) {
      try {
        AppLogBridge.profileSet(e);
      } catch (e) {}
    };
    t.profileSetOnce = function (e) {
      try {
        AppLogBridge.profileSetOnce(e);
      } catch (e) {}
    };
    t.profileIncrement = function (e) {
      try {
        AppLogBridge.profileIncrement(e);
      } catch (e) {}
    };
    t.profileUnset = function (e) {
      try {
        AppLogBridge.profileUnset(e);
      } catch (e) {}
    };
    t.profileAppend = function (e) {
      try {
        AppLogBridge.profileAppend(e);
      } catch (e) {}
    };
    return e;
  }();
  function V() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var t = Math.random() * 16 | 0;
      return (e === "x" ? t : t & 3 | 8).toString(16);
    });
  }
  var $ = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      var n = this;
      this.collect = e;
      this.storage = new C(false, "session");
      this.sessionKey = "__tea_session_id_" + t.app_id;
      this.expireTime = t.expireTime || 1800000;
      this.disableSession = t.disable_session;
      this.disableSessionTimeCheck = t.disable_session_check;
      if (!this.disableSession) {
        this.setSessionId();
        this.collect.on(N.SessionReset, function (e) {
          n.resetSessionId(e);
        });
        this.collect.on(N.SessionResetTime, function () {
          n.updateSessionIdTime();
        });
      }
    };
    e.prototype.updateSessionIdTime = function () {
      var e = this.storage.getItem(this.sessionKey);
      if (e && e.sessionId) {
        var t = e.timestamp;
        if (Date.now() - t > this.expireTime) {
          e = {
            sessionId: V(),
            timestamp: Date.now()
          };
        } else {
          e.timestamp = Date.now();
        }
        this.storage.setItem(this.sessionKey, e);
        this.resetExpTime();
      }
    };
    e.prototype.setSessionId = function () {
      var e = this;
      var t = this.storage.getItem(this.sessionKey);
      if (t && t.sessionId) {
        t.timestamp = Date.now();
      } else {
        t = {
          sessionId: V(),
          timestamp: Date.now()
        };
      }
      this.storage.setItem(this.sessionKey, t);
      if (!this.disableSessionTimeCheck) {
        this.sessionExp = setInterval(function () {
          e.checkEXp();
        }, this.expireTime);
      }
    };
    e.prototype.getSessionId = function () {
      var e = this.storage.getItem(this.sessionKey);
      if (this.disableSession) {
        return "";
      } else if (e && e.sessionId) {
        return e.sessionId;
      } else {
        return "";
      }
    };
    e.prototype.resetExpTime = function () {
      var e = this;
      if (this.sessionExp) {
        clearInterval(this.sessionExp);
        this.sessionExp = setInterval(function () {
          e.checkEXp();
        }, this.expireTime);
      }
    };
    e.prototype.resetSessionId = function (e) {
      var t = {
        sessionId: e || V(),
        timestamp: Date.now()
      };
      this.storage.setItem(this.sessionKey, t);
    };
    e.prototype.checkEXp = function () {
      var e = this.storage.getItem(this.sessionKey);
      if (e && e.sessionId && Date.now() - e.timestamp + 30 >= this.expireTime) {
        e = {
          sessionId: V(),
          timestamp: Date.now()
        };
        this.storage.setItem(this.sessionKey, e);
      }
    };
    return e;
  }();
  var W = function () {
    function e() {
      this.eventLimit = 50;
      this.enable_ttwebid = false;
      this.eventCache = [];
      this.beconEventCache = [];
    }
    e.prototype.apply = function (e, t) {
      var n = this;
      this.collect = e;
      this.config = t;
      this.configManager = e.configManager;
      this.eventCheck = new I(e, t);
      this.cacheStorgae = new C(true);
      this.localStorage = new C(false);
      this.maxReport = t.max_report || 10;
      this.reportTime = t.reportTime || t.report_time || 30;
      this.timeout = t.timeout || 100000;
      this.enable_ttwebid = t.enable_ttwebid;
      this.reportUrl = t.report_url || this.configManager.getUrl("event");
      this.eventKey = "__tea_cache_events_" + this.configManager.get("app_id");
      this.beconKey = "__tea_cache_events_becon_" + this.configManager.get("app_id");
      this.abKey = "__tea_sdk_ab_version_" + this.configManager.get("app_id");
      this.refer_key = "__tea_cache_refer_" + this.configManager.get("app_id");
      this.pageId = V();
      this.collect.on(N.Ready, function () {
        n.reportAll(false);
      });
      this.collect.on(N.ConfigDomain, function () {
        n.reportUrl = n.configManager.getUrl("event");
      });
      this.collect.on(N.Event, function (e) {
        n.event(e);
      });
      this.collect.on(N.BeconEvent, function (e) {
        n.beconEvent(e);
      });
      this.collect.on(N.CleanEvents, function () {
        n.reportAll(false);
      });
      this.linster();
    };
    e.prototype.linster = function () {
      var e = this;
      window.addEventListener("unload", function () {
        e.reportAll(true);
      }, false);
      p(function () {
        e.reportAll(true);
      });
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") {
          e.reportAll(true);
        }
      }, false);
    };
    e.prototype.reportAll = function (e) {
      this.report(e);
      this.reportBecon();
    };
    e.prototype.event = function (e) {
      var t = this;
      try {
        var n = s(e, this.cacheStorgae.getItem(this.eventKey) || []);
        this.cacheStorgae.setItem(this.eventKey, n);
        if (this.reportTimeout) {
          clearTimeout(this.reportTimeout);
        }
        if (n.length >= this.maxReport) {
          this.report(false);
        } else {
          var r = this.reportTime;
          this.reportTimeout = setTimeout(function () {
            t.report(false);
            t.reportTimeout = null;
          }, r);
        }
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.beconEvent = function (e) {
      var t = s(e, this.cacheStorgae.getItem(this.beconKey) || []);
      this.cacheStorgae.setItem(this.beconKey, t);
      if (!this.collect.destroy && !this.collect.sdkStop) {
        if (this.collect.tokenManager.getReady() && this.collect.sdkReady) {
          this.cacheStorgae.removeItem(this.beconKey);
          this.send(this.split(this.merge(t)), true);
        }
      }
    };
    e.prototype.reportBecon = function () {
      if (!this.collect.destroy && !this.collect.sdkStop && this.collect.tokenManager.getReady() && this.collect.sdkReady) {
        var e = this.cacheStorgae.getItem(this.beconKey) || [];
        if (e && e.length) {
          this.cacheStorgae.removeItem(this.beconKey);
          this.send(this.split(this.merge(e)), true);
        }
      }
    };
    e.prototype.report = function (e) {
      if (!this.collect.destroy && !this.collect.sdkStop && this.collect.tokenManager.getReady() && this.collect.sdkReady) {
        var t = this.cacheStorgae.getItem(this.eventKey) || [];
        if (t.length) {
          this.cacheStorgae.removeItem(this.eventKey);
          this.sliceEvent(t, e);
        }
      }
    };
    e.prototype.sliceEvent = function (e, t) {
      if (e.length > this.eventLimit) {
        for (var n = 0; n < e.length; n += this.eventLimit) {
          r = e.slice(n, n + this.eventLimit);
          var r;
          var i = this.split(this.merge(r));
          this.send(i, t);
        }
      } else {
        i = this.split(this.merge(e));
        this.send(i, t);
      }
    };
    e.prototype.handleRefer = function () {
      var e = "";
      try {
        if (this.config.spa || this.config.autotrack) {
          var t = this.localStorage.getItem(this.refer_key) || {};
          e = t.routeChange ? t.refer_key : this.configManager.get("referrer");
        } else {
          e = this.configManager.get("referrer");
        }
      } catch (t) {
        e = document.referrer;
      }
      return e;
    };
    e.prototype.merge = function (e, t) {
      var n = this;
      var r = this.configManager.get();
      var o = r.header;
      var a = r.user;
      if (this.config.enable_pageid) {
        o.custom.page_id = this.pageId;
      }
      o.referrer = this.handleRefer();
      o.custom = JSON.stringify(o.custom);
      var s = this.configManager.get("evtParams");
      var u = this.configManager.get("user_unique_id_type");
      var c = JSON.parse(JSON.stringify({
        events: e.map(function (e) {
          try {
            if (Object.keys(s).length && !t) {
              e.params = i({}, s, e.params);
            }
            if (u) {
              e.params.$user_unique_id_type = u;
            }
            var r = n.configManager.getAbCache();
            if (r && r.uuid && r.uuid === a.user_unique_id && n.configManager.getAbVersion()) {
              e.ab_sdk_version = n.configManager.getAbVersion();
            }
            e.session_id = n.collect.sessionManager.getSessionId();
            e.params = JSON.stringify(e.params);
            return e;
          } catch (t) {
            n.collect.emit(S.DEBUGGER_MESSAGE, {
              type: S.DEBUGGER_MESSAGE_SDK,
              info: "发生了异常",
              level: "error",
              time: Date.now(),
              data: t.message
            });
            return e;
          }
        }),
        user: a,
        header: o
      }));
      c.local_time = Math.floor(Date.now() / 1000);
      c.user_unique_type = this.config.enable_ttwebid ? this.config.user_unique_type : undefined;
      c.verbose = 1;
      var l = [];
      l.push(c);
      return l;
    };
    e.prototype.split = function (e) {
      return e = e.map(function (e) {
        var t = [];
        t.push(e);
        return t;
      });
    };
    e.prototype.send = function (e, t) {
      var n = this;
      if (e.length) {
        if (!this.config.disable_track_event) {
          e.forEach(function (e) {
            try {
              var r = JSON.parse(JSON.stringify(e));
              if (n.config.filter) {
                r = n.config.filter(r);
              }
              if (n.collect.eventFilter && r) {
                r = n.collect.eventFilter(r);
              }
              var i = r || e;
              var o = JSON.parse(JSON.stringify(i));
              n.eventCheck.checkVerify(o);
              if (!i.length) {
                return;
              }
              n.collect.emit(N.SubmitBefore, i);
              n.collect.requestManager.useRequest({
                url: n.reportUrl,
                data: i,
                success: function (e, t) {
                  if (e && e.e !== 0) {
                    n.collect.emit(N.SubmitError, {
                      type: "f_data",
                      eventData: t,
                      errorCode: e.e,
                      response: e
                    });
                    n.collect.emit(S.DEBUGGER_MESSAGE, {
                      type: S.DEBUGGER_MESSAGE_EVENT,
                      info: "埋点上报失败",
                      time: Date.now(),
                      data: o,
                      code: e.e,
                      failType: "数据异常失败",
                      status: "fail"
                    });
                  } else {
                    n.collect.emit(N.SubmitScuess, {
                      eventData: t,
                      res: e
                    });
                    n.collect.emit(S.DEBUGGER_MESSAGE, {
                      type: S.DEBUGGER_MESSAGE_EVENT,
                      info: "埋点上报成功",
                      time: Date.now(),
                      data: o,
                      code: 200,
                      status: "success"
                    });
                  }
                },
                fail: function (e, t) {
                  n.configManager.get("reportErrorCallback")(e, t);
                  n.collect.emit(N.SubmitError, {
                    type: "f_net",
                    eventData: e,
                    errorCode: t
                  });
                  n.collect.emit(S.DEBUGGER_MESSAGE, {
                    type: S.DEBUGGER_MESSAGE_EVENT,
                    info: "埋点上报网络异常",
                    time: Date.now(),
                    data: o,
                    code: t,
                    failType: "网络异常失败",
                    status: "fail"
                  });
                },
                timeout: n.timeout,
                useBeacon: t,
                withCredentials: n.enable_ttwebid
              });
              n.collect.emit(N.SubmitAfter, i);
            } catch (e) {
              n.collect.emit(S.DEBUGGER_MESSAGE, {
                type: S.DEBUGGER_MESSAGE_SDK,
                info: "发生了异常",
                level: "error",
                time: Date.now(),
                data: e.message
              });
            }
          });
        }
      }
    };
    return e;
  }();
  function q() {
    return function e(t) {
      if (t) {
        return (t ^ Math.random() * 16 >> t / 4).toString(10);
      } else {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, e);
      }
    }().replace(/-/g, "").slice(0, 19);
  }
  var K = function () {
    function e() {
      this.cacheToken = {};
      this.enableCookie = false;
      this.enable_ttwebid = false;
      this.enableCustomWebid = false;
    }
    e.prototype.apply = function (e, t) {
      var n = this;
      this.collect = e;
      this.config = t;
      this.configManager = this.collect.configManager;
      this.storage = new C(false);
      this.tokenKey = "__tea_cache_tokens_" + t.app_id;
      this.enable_ttwebid = t.enable_ttwebid;
      this.enableCustomWebid = t.enable_custom_webid;
      this.collect.on(N.ConfigUuid, function (e) {
        n.setUuid(e);
      });
      this.collect.on(N.ConfigWebId, function (e) {
        n.setWebId(e);
      });
      this.enableCookie = t.cross_subdomain;
      this.expiresTime = t.cookie_expire || 604800000;
      this.cookieDomain = t.cookie_domain || "";
      this.checkStorage();
    };
    e.prototype.checkStorage = function () {
      var e = this;
      if (this.enableCookie) {
        var t = this.storage.getCookie(this.tokenKey, this.cookieDomain);
        this.cacheToken = t && typeof t == "string" ? JSON.parse(t) : {};
      } else {
        this.cacheToken = this.storage.getItem(this.tokenKey) || {};
      }
      this.tokenType = this.cacheToken && this.cacheToken._type_ ? this.cacheToken._type_ : "default";
      if (this.tokenType !== "custom" || this.enableCustomWebid) {
        if (this.enableCustomWebid) {
          this.collect.on(N.CustomWebId, function () {
            e.tokenReady = true;
            e.collect.emit(N.TokenComplete);
          });
        } else if (!this.checkEnv()) {
          if (this.enable_ttwebid) {
            this.completeTtWid(this.cacheToken);
          } else {
            this.check();
          }
        }
      } else {
        this.remoteWebid();
      }
    };
    e.prototype.check = function () {
      if (this.cacheToken && this.cacheToken.web_id) {
        this.complete(this.cacheToken);
      } else if (this.config.disable_webid) {
        this.complete({
          web_id: q(),
          user_unique_id: this.configManager.get("user_unique_id") || q()
        });
      } else {
        this.remoteWebid();
      }
    };
    e.prototype.checkEnv = function () {
      var e = window.navigator.userAgent;
      if (e.indexOf("miniProgram") !== -1 || e.indexOf("MiniProgram") !== -1) {
        var t = b(window.location.href);
        return !!t && !!t.Web_ID && (this.complete({
          web_id: "" + t.Web_ID,
          user_unique_id: this.configManager.get("user_unique_id") || "" + t.Web_ID
        }), true);
      }
      return false;
    };
    e.prototype.remoteWebid = function () {
      var e = this;
      var t = this.configManager.getUrl("webid");
      var n = {
        app_key: this.config.app_key,
        app_id: this.config.app_id,
        url: location.href,
        user_agent: window.navigator.userAgent,
        referer: document.referrer,
        user_unique_id: ""
      };
      this.collect.emit(S.DEBUGGER_MESSAGE, {
        type: S.DEBUGGER_MESSAGE_SDK,
        info: "SDK 发起WEBID请求",
        logType: "fetch",
        level: "info",
        time: Date.now(),
        data: n
      });
      var r = q();
      this.collect.requestManager.useRequest({
        url: t,
        data: n,
        success: function (t) {
          var n;
          if (t && t.e === 0) {
            n = t.web_id;
            e.collect.emit(S.DEBUGGER_MESSAGE, {
              type: S.DEBUGGER_MESSAGE_SDK,
              info: "WEBID请求成功",
              logType: "fetch",
              level: "info",
              time: Date.now(),
              data: t
            });
          } else {
            n = r;
            e.collect.configManager.set({
              localWebId: r
            });
            e.collect.emit(N.TokenError);
            e.collect.emit(S.DEBUGGER_MESSAGE, {
              type: S.DEBUGGER_MESSAGE_SDK,
              info: "WEBID请求返回值异常",
              logType: "fetch",
              level: "warn",
              time: Date.now(),
              data: t
            });
            e.collect.logger.warn("appid: " + e.config.app_id + " get webid error, use local webid~");
          }
          e.complete({
            web_id: e.configManager.get("web_id") || n,
            user_unique_id: e.configManager.get("user_unique_id") || n
          });
        },
        fail: function () {
          e.complete({
            web_id: e.configManager.get("web_id") || r,
            user_unique_id: e.configManager.get("user_unique_id") || r
          });
          e.collect.configManager.set({
            localWebId: r
          });
          e.collect.emit(N.TokenError);
          e.collect.emit(S.DEBUGGER_MESSAGE, {
            type: S.DEBUGGER_MESSAGE_SDK,
            info: "WEBID请求网络异常",
            logType: "fetch",
            level: "error",
            time: Date.now(),
            data: null
          });
          e.collect.logger.warn("appid: " + e.config.app_id + ", get webid error, use local webid~");
        },
        timeout: 300000
      });
    };
    e.prototype.complete = function (e) {
      var t = e.web_id;
      var n = e.user_unique_id;
      e.timestamp = Date.now();
      this.collect.configManager.set({
        web_id: t,
        user_unique_id: n
      });
      this.setStorage(e);
      this.tokenReady = true;
      this.collect.emit(N.TokenComplete);
    };
    e.prototype.completeTtWid = function (e) {
      var t = e.user_unique_id || "";
      var n = this.configManager.get("user_unique_id");
      if (n || t) {
        this.configManager.set({
          user_unique_id: n || t
        });
      }
      this.setStorage(e);
      this.tokenReady = true;
      this.collect.emit(N.TokenComplete);
    };
    e.prototype.setUuid = function (e) {
      if (e && ["null", "undefined", "Null", "None"].indexOf(e) === -1) {
        var t = String(e);
        var n = this.configManager.get("user_unique_id");
        var r = this.cacheToken && this.cacheToken.user_unique_id;
        if (t !== n || t !== r) {
          this.configManager.set({
            user_unique_id: t
          });
          this.cacheToken ||= {};
          this.cacheToken.user_unique_id = t;
          this.cacheToken.timestamp = Date.now();
          this.setStorage(this.cacheToken);
          this.collect.emit(N.TokenChange, "uuid");
          this.collect.emit(N.SessionReset);
        }
      } else {
        this.clearUuid();
      }
    };
    e.prototype.clearUuid = function () {
      if (!this.config.enable_ttwebid) {
        if (this.configManager.get("web_id") && this.configManager.get("user_unique_id") !== this.configManager.get("web_id")) {
          this.configManager.set({
            user_unique_id: this.configManager.get("web_id")
          });
          if (this.cacheToken && this.cacheToken.web_id) {
            this.cacheToken.user_unique_id = this.cacheToken.web_id;
            this.cacheToken.timestamp = Date.now();
            this.setStorage(this.cacheToken);
          }
          this.collect.emit(N.TokenReset, "uuid");
        }
      }
    };
    e.prototype.setWebId = function (e) {
      if (e && !this.config.enable_ttwebid) {
        if (this.cacheToken && this.cacheToken.web_id) {
          if (this.cacheToken.web_id !== e) {
            this.cacheToken.user_unique_id = this.cacheToken.web_id === this.cacheToken.user_unique_id ? e : this.cacheToken.user_unique_id;
            this.cacheToken.web_id = e;
          }
        } else {
          this.cacheToken = {};
          this.cacheToken.web_id = e;
          this.cacheToken.user_unique_id = e;
        }
        this.cacheToken.timestamp = Date.now();
        var t = this.configManager.get("web_id");
        var n = this.configManager.get("user_unique_id");
        if (!n || n === t) {
          this.configManager.set({
            user_unique_id: e
          });
          this.collect.emit(N.TokenChange, "uuid");
        }
        if (t !== e) {
          this.configManager.set({
            web_id: e
          });
          this.collect.emit(N.TokenChange, "webid");
        }
        this.setStorage(this.cacheToken);
      }
    };
    e.prototype.setStorage = function (e) {
      e._type_ = this.enableCustomWebid ? "custom" : "default";
      delete e["diss".split("").reverse().join("")];
      if (this.enableCookie || this.enable_ttwebid) {
        this.storage.setCookie(this.tokenKey, e, this.expiresTime, this.cookieDomain);
        if (this.enable_ttwebid) {
          delete e.web_id;
          this.storage.setItem(this.tokenKey, e);
        }
      } else {
        this.storage.setItem(this.tokenKey, e);
      }
      this.cacheToken = e;
    };
    e.prototype.getReady = function () {
      return this.tokenReady;
    };
    e.prototype.getTobId = function () {
      var e = this;
      return new Promise(function (t) {
        e.collect.requestManager.useRequest({
          url: e.configManager.getUrl("tobid"),
          data: {
            app_id: e.config.app_id,
            user_unique_id: e.configManager.get("user_unique_id"),
            web_id: e.configManager.get("web_id"),
            user_unique_id_type: e.configManager.get("user_unique_id_type")
          },
          success: function (e) {
            if (e && e.e === 0) {
              t(e.tobid);
            } else {
              t("");
            }
          },
          fail: function () {
            t("");
          },
          time: 30000,
          withCredentials: e.enable_ttwebid
        });
      });
    };
    return e;
  }();
  var J = function () {
    function e(e, t) {
      this.collector = e;
      this.config = t;
      this.requestType = t.request_type || "xhr";
      this.supportBeacon = !!window.navigator && !!window.navigator.sendBeacon;
      this.errorCode = {
        NO_URL: 4001,
        IMG_ON: 4000,
        IMG_CATCH: 4002,
        BEACON_FALSE: 4003,
        XHR_ON: 500,
        RESPONSE: 5001,
        TIMEOUT: 5005
      };
    }
    e.prototype.useFetch = function (e) {
      var t = e.url;
      var n = e.data;
      var r = e.method;
      var i = e.success;
      var o = e.fail;
      if (window.fetch) {
        fetch(t, {
          method: r || "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          body: JSON.stringify(n)
        }).then(function (e) {
          return e.json();
        }).then(function (e) {
          if (i) {
            i(e);
          }
        }).catch(function (e) {
          if (o) {
            o(n, e);
          }
        });
      } else {
        this.requestType = "xhr";
        this.useRequest({
          url: t,
          data: n,
          method: r,
          success: i,
          fail: o
        });
      }
    };
    e.prototype.useBeacon = function (e) {
      var t = e.url;
      var n = e.data;
      var r = e.success;
      var i = e.fail;
      if (window.navigator.sendBeacon(t, JSON.stringify(n))) {
        if (r) {
          r();
        }
      } else if (i) {
        i(n, this.errorCode.BEACON_FALSE);
      }
    };
    e.prototype.useRequest = function (e) {
      var t = this;
      var n = e.url;
      var r = e.data;
      var i = e.method;
      var o = e.success;
      var a = e.fail;
      var s = e.timeout;
      var u = e.useBeacon;
      var c = e.withCredentials;
      var l = e.app_key;
      var f = e.forceXhr;
      if (u && this.supportBeacon) {
        this.useBeacon({
          url: n,
          data: r,
          method: i,
          success: o,
          fail: a
        });
      } else if (this.requestType !== "fetch" || f) {
        try {
          var h = new XMLHttpRequest();
          var d = i || "POST";
          h.open(d, "" + n, true);
          h.setRequestHeader("Content-Type", "application/json; charset=utf-8");
          if (l) {
            h.setRequestHeader("X-MCS-AppKey", "" + l);
          }
          if (c) {
            h.withCredentials = true;
          }
          if (s) {
            h.timeout = s;
            h.ontimeout = function () {
              if (a) {
                a(r, t.errorCode.TIMEOUT);
              }
            };
          }
          h.onload = function () {
            if (o) {
              var e = null;
              if (h.responseText) {
                try {
                  e = JSON.parse(h.responseText);
                } catch (t) {
                  e = {};
                }
                o(e, r);
              }
            }
          };
          h.onerror = function () {
            h.abort();
            if (a) {
              a(r, t.errorCode.XHR_ON);
            }
          };
          h.send(JSON.stringify(r));
        } catch (e) {}
      } else {
        this.useFetch({
          url: n,
          data: r,
          method: i,
          success: o,
          fail: a
        });
      }
    };
    return e;
  }();
  var X = function () {
    function e(e, t) {
      this.devToolReady = false;
      this.devToolOrigin = "*";
      this.sendAlready = false;
      this.eventVerifyReady = false;
      if (t.enable_debug) {
        var n = e.adapters.storage;
        this.collect = e;
        this.config = t;
        this.app_id = t.app_id;
        this.cacheStorgae = new n(false, "session");
        this.eventVerifyInfo = [];
        this.sdk_type = j.includes("tob") ? "tob" : "inner";
        this.filterEvent = ["__bav_page", "__bav_beat", "__bav_page_statistics", "__bav_click", "__bav_page_exposure", "bav2b_page", "bav2b_beat", "bav2b_page_statistics", "bav2b_click", "bav2b_page_exposure", "_be_active", "predefine_pageview", "__profile_set", "__profile_set_once", "__profile_increment", "__profile_unset", "__profile_append", "predefine_page_alive", "predefine_page_close", "abtest_exposure"];
        this.load();
      }
    }
    e.prototype.loadScript = function (e) {
      try {
        var t = document.createElement("script");
        t.src = e;
        t.onerror = function () {};
        t.onload = function () {};
        document.getElementsByTagName("body")[0].appendChild(t);
      } catch (e) {}
    };
    e.prototype.parseUrl = function () {
      var e = {};
      try {
        var t = window.location.href.split("?")[1].split("&");
        if (t.length) {
          t.forEach(function (t) {
            var n = t.split("=");
            e[decodeURIComponent(n[0])] = decodeURIComponent(n[1]);
          });
        }
      } catch (e) {}
      return e;
    };
    e.prototype.load = function () {
      var e;
      var t;
      var n;
      var r;
      e = this;
      t = undefined;
      r = function () {
        var e;
        var t;
        return function (e, t) {
          var n;
          var r;
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
                if (n) {
                  throw TypeError("Generator is already executing.");
                }
                while (a) {
                  try {
                    n = 1;
                    if (r && (i = o[0] & 2 ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
                      return i;
                    }
                    r = 0;
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
                        r = o[1];
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
                    r = 0;
                  } finally {
                    n = i = 0;
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
        }(this, function (n) {
          switch (n.label) {
            case 0:
              n.trys.push([0, 2,, 3]);
              if ((e = this.parseUrl()).open_devtool_web && e.app_id) {
                if (parseInt(e.app_id) !== this.app_id) {
                  return [2];
                }
              } else if (!this.getStorage()) {
                return [2];
              }
              this.loadBaseInfo();
              this.loadHook();
              this.setStorage();
              this.addLintener();
              this.loadDebuggerModule();
              this.loadDevTool();
              return [4, this.fetchEventInfo()];
            case 1:
              t = n.sent();
              this.sendData("devtool:web:verify", t.verifyStatus);
              this.eventVerifyInfo = t.data;
              return [3, 3];
            case 2:
              n.sent();
              return [3, 3];
            case 3:
              return [2];
          }
        });
      };
      return new (n = undefined, n = Promise)(function (i, o) {
        function a(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function s(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          if (e.done) {
            i(e.value);
          } else {
            new n(function (t) {
              t(e.value);
            }).then(a, s);
          }
        }
        u((r = r.apply(e, t || [])).next());
      });
    };
    e.prototype.getStorage = function () {
      var e = this.cacheStorgae.getItem("__applog_devtool_web");
      return e && parseInt(e) === this.app_id;
    };
    e.prototype.setStorage = function () {
      this.cacheStorgae.setItem("__applog_devtool_web", this.app_id);
    };
    e.prototype.loadDevTool = function () {
      this.loadScript("https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/devtool/debug-web.0.0.2.js");
    };
    e.prototype.loadBaseInfo = function () {
      var e = this;
      this.info = [{
        title: "基本信息",
        type: 1,
        infoName: {
          app_id: this.config.app_id,
          channel: this.config.channel,
          上报域名: this.collect.configManager.getDomain(),
          SDK版本: j,
          SDK引入方式: "npm"
        }
      }, {
        title: "用户信息",
        type: 2,
        infoName: {
          uuid: this.collect.configManager.get("user").user_unique_id || "",
          web_id: this.collect.configManager.get("user").web_id || "",
          ssid: "点击获取SSID"
        }
      }, {
        title: "公共参数信息",
        type: 2,
        infoName: {
          浏览器: this.collect.configManager.get("browser"),
          浏览器版本: this.collect.configManager.get("browser_version"),
          平台: this.collect.configManager.get("platform"),
          设备型号: this.collect.configManager.get("device_model"),
          操作系统: this.collect.configManager.get("os_name"),
          操作系统版本: this.collect.configManager.get("os_version"),
          屏幕分辨率: this.collect.configManager.get("resolution"),
          来源: this.collect.configManager.get("referrer"),
          自定义信息: ""
        }
      }, {
        title: "配置信息",
        type: 3,
        infoName: {
          全埋点: !!this.config.autotrack,
          停留时长: !!this.config.enable_stay_duration
        }
      }, {
        title: "A/B配置信息",
        type: 4,
        infoName: {
          "A/B实验": !!this.config.enable_ab_test
        }
      }, {
        title: "客户端信息",
        type: 3,
        infoName: {
          打通开关: !!this.config.Native
        }
      }];
      this.log = [];
      this.event = [];
      this.collect.on(N.Ready, function () {
        e.info[1].infoName.uuid = e.collect.configManager.get("user").user_unique_id;
        e.info[1].infoName.web_id = e.collect.configManager.get("user").web_id;
        e.info[2].infoName.自定义信息 = JSON.stringify(e.collect.configManager.get("custom"));
        if (e.config.enable_ab_test) {
          e.info[4].infoName.已曝光VID = e.collect.configManager.getAbVersion();
          e.info[4].infoName["A/B域名"] = e.config.ab_channel_domain || d(P[e.config.channel]);
          e.info[4].infoName.全部配置 = e.collect.configManager.getAbData();
        }
        if (e.config.Native) {
          e.info[5].infoName.是否打通 = !!e.collect.bridgeReport;
        }
      });
    };
    e.prototype.loadHook = function () {
      var e = this;
      this.collect.stop();
      this.collect.on(S.DEBUGGER_MESSAGE, function (t) {
        switch (t.type) {
          case S.DEBUGGER_MESSAGE_SDK:
            var n = {
              time: t.time,
              type: t.logType || "sdk",
              level: t.level,
              name: t.info,
              show: true,
              levelShow: true,
              needDesc: !!t.data
            };
            if (t.data) {
              n.desc = {
                content: JSON.stringify(t.data)
              };
            }
            e.updateLog(n);
            if (t.secType && t.secType === "AB") {
              e.info[4].infoName.已曝光VID = e.collect.configManager.getAbVersion();
              e.info[4].infoName.全部配置 = e.collect.configManager.getAbData();
            } else if (t.secType === "USER") {
              e.info[1].infoName.uuid = e.collect.configManager.get("user").user_unique_id;
              e.info[1].infoName.web_id = e.collect.configManager.get("user").web_id;
            }
            e.updateInfo();
            return;
          case S.DEBUGGER_MESSAGE_EVENT:
            if (t.data && t.data.length) {
              var r = t.data[0];
              var i = r.events;
              var o = r.header;
              o.custom = JSON.parse(o.custom);
              if (!i.length) {
                return;
              }
              i.forEach(function (n) {
                n.checkShow = true;
                n.searchShow = true;
                n.type = e.filterEvent.indexOf(n.event) !== -1 ? "sdk" : "cus";
                n.type = e.collect.bridgeReport ? "bridge" : n.type;
                n.params = JSON.parse(n.params);
                if (t.status === "fail") {
                  n.info = {
                    message: "code: " + t.code + "， msg: " + t.failType
                  };
                  n.failType = t.failType;
                }
                var r = false;
                var i = false;
                var o = [];
                if (e.eventVerifyInfo && e.eventVerifyInfo.length) {
                  e.eventVerifyInfo.forEach(function (e) {
                    e.eventStatus = false;
                  });
                  e.eventVerifyInfo.forEach(function (t) {
                    if (n.event === t.name) {
                      i = true;
                      r = true;
                      n.verifyStatus = t.status;
                      Object.keys(n.params).forEach(function (r) {
                        if (r !== "event_index") {
                          var a = {
                            paramsKey: r,
                            paramsKeyValue: n.params["" + r],
                            paramsStatus: false,
                            paramsStatusInfo: "属性未录入"
                          };
                          t.params.forEach(function (t) {
                            if (r === t.name) {
                              t.checked = true;
                              if (typeof n.params["" + r] !== e.formatParamsType(t.value_type)) {
                                a.paramsStatusInfo = "属性类型错误，应为" + e.formatParamsType(t.value_type);
                              } else {
                                a.paramsStatus = true;
                                a.paramsStatusInfo = "";
                              }
                            }
                          });
                          o.push(a);
                          if (a.paramsStatusInfo) {
                            i = false;
                          }
                        }
                      });
                      t.params.forEach(function (e) {
                        if (!e.checked) {
                          i = false;
                          o.push({
                            paramsKey: e.name,
                            paramsStatus: false,
                            paramsStatusInfo: "缺少属性" + e.name
                          });
                        }
                      });
                    }
                  });
                }
                n.reportStatus = t.status === "success";
                n.paramsInfo = o;
                n.eventStatus = i && t.status === "success";
                n.eventRecord = r;
              });
              e.updateEvent(r);
            }
            return;
        }
      });
    };
    e.prototype.formatParamsType = function (e) {
      switch (e) {
        case 0:
          return "string";
        case 1:
        case 2:
          return "number";
        case 3:
          return "boolean";
      }
    };
    e.prototype.fetchEventInfo = function () {
      var e = this;
      try {
        return new Promise(function (t) {
          var n = d("1fz22z22z1nz21z4mz4bz4bz18z1nz1nz1jz1mz1ez1fz1mz1kz1cz4az19z27z22z1cz1bz18z1lz1az1cz4az1lz1cz22z4bz18z1nz1nz1jz1mz1ez1bz1cz24z22z1mz1mz1jz21z4bz1mz1nz1cz1lz18z1nz1gz4bz24z4dz4bz18z1nz1nz16z1jz1mz1ez16z1kz1cz22z18") + "?app_id=" + e.app_id + "&t=" + e.sdk_type + "&nc=false";
          e.collect.requestManager.useRequest({
            url: n,
            method: "GET",
            success: function (n) {
              e.eventVerifyReady = true;
              e.collect.reStart();
              t({
                data: n.data,
                verifyStatus: true
              });
            },
            fail: function () {
              e.eventVerifyReady = true;
              e.collect.reStart();
              t({
                data: [],
                verifyStatus: false
              });
            },
            timeout: 3000
          });
        });
      } catch (e) {
        return {
          data: [],
          verifyStatus: false
        };
      }
    };
    e.prototype.addLintener = function () {
      var e = this;
      window.addEventListener("message", function (t) {
        if (t.origin === location.origin) {
          if (t && t.data && t.data.type === "devtool:web:ready") {
            e.devToolOrigin = t.origin;
            e.devToolReady = true;
            if (e.sendAlready) {
              return;
            }
            e.sendData("devtool:web:init", {
              info: e.info,
              log: e.log,
              event: e.event,
              appid: e.app_id
            });
            e.sendAlready = true;
          }
          if (t && t.data && t.data.type === "devtool:web:ssid") {
            e.collect.getToken(function (t) {
              e.info[1].infoName.ssid = t.tobid;
              e.updateInfo();
            });
          }
          if (t && t.data) {
            t.data.type;
          }
        }
      });
    };
    e.prototype.sendData = function (e, t) {
      try {
        (window.opener || window.parent).postMessage({
          type: e,
          payload: t
        }, this.devToolOrigin);
      } catch (e) {}
    };
    e.prototype.updateInfo = function () {
      if (this.devToolReady) {
        this.sendData("devtool:web:info", this.info);
      }
    };
    e.prototype.updateLog = function (e) {
      if (this.devToolReady) {
        this.sendData("devtool:web:log", e);
      } else {
        this.log.push(e);
      }
    };
    e.prototype.updateEvent = function (e) {
      if (this.devToolReady || this.eventVerifyReady) {
        this.sendData("devtool:web:event", e);
      } else {
        this.event.push(e);
      }
    };
    e.prototype.loadDebuggerModule = function () {
      var e = document.head || document.getElementsByTagName("head")[0];
      var t = document.createElement("style");
      t.appendChild(document.createTextNode("#debugger-applog-web {\n      position: fixed;\n      width: 50px;\n      height: 50px;\n      background-image: url('https://lf-cdn-tos.bytescm.com/obj/static/log-sdk/collect/devtool/applog.png');;\n      bottom: 5%;\n      right: 10%;\n      cursor: pointer;\n      z-index:100;\n      background-size: 50px;\n    }"));
      e.appendChild(t);
      var n = document.createElement("div");
      n.innerHTML = "<div id=\"debugger-applog-web\" class=\"debugger-applog-web\"></div>";
      var r = document.createElement("div");
      r.innerHTML = "<div id=\"debugger-container\" class=\"debugger-container\"></div>";
      document.getElementsByTagName("body")[0].appendChild(n);
      document.getElementsByTagName("body")[0].appendChild(r);
      document.getElementById("debugger-applog-web").addEventListener("click", function () {
        (window.opener || window.parent).postMessage({
          type: "devtool:web:open-draw"
        }, location.origin);
      });
    };
    return e;
  }();
  var Y = {
    autotrack: {
      src: {
        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/autotrack.js",
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/autotrack.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/autotrack.js"
      },
      object: "LogAutoTrack"
    },
    ab: {
      src: {
        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/ab.js",
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/ab.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/ab.js"
      },
      object: "LogAb"
    },
    stay: {
      src: {
        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/stay.js",
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/stay.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/stay.js"
      },
      object: "LogStay"
    },
    route: {
      src: {
        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/route.js",
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/route.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/route.js"
      },
      object: "LogRoute"
    },
    cep: {
      src: {
        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/cep.js",
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/cep.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/cep.js"
      },
      object: "LogCep"
    },
    tracer: {
      src: {
        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/tracer.js",
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/tracer.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/tracer.js"
      },
      object: "LogTracer"
    },
    retry: {
      src: {
        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/retry.js",
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/retry.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/retry.js"
      },
      object: "LogRetry"
    },
    visual: {
      src: {
        cn: "https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.0/plugin/visual.js",
        sg: "https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/log-sdk/collect/5.0/plugin/visual.js",
        va: "https://sf16-scmcdn-va.ibytedtos.com/obj/static-us/log-sdk/collect/5.0/plugin/visual.js"
      },
      object: "LogVisual"
    }
  };
  var Q = ["ab", "autotrack", "Stay", "store", "et", "profile", "cep", "heartbeat", "monitor", "route", "tracer"];
  var ee = function () {
    function e(e) {
      this.disableAutoPageView = false;
      this.bridgeReport = false;
      this.staging = false;
      this.pluginInstances = [];
      this.sended = false;
      this.started = false;
      this.destroy = false;
      this.sdkReady = false;
      this.adapters = {};
      this.loadType = "base";
      this.sdkStop = false;
      this.name = e;
      this.hook = new c();
      this.remotePlugin = new Map();
      this.Types = N;
      this.adapters.storage = C;
      this.loadType = "full";
    }
    e.usePlugin = function (t, n, r) {
      if (n) {
        var i = false;
        var o = 0;
        var a = e.plugins.length;
        for (; o < a; o++) {
          if (e.plugins[o].name === n) {
            e.plugins[o].plugin = t;
            e.plugins[o].options = r || {};
            i = true;
            break;
          }
        }
        if (!i) {
          e.plugins.push({
            name: n,
            plugin: t,
            options: r
          });
        }
      } else {
        e.plugins.push({
          plugin: t
        });
      }
    };
    e.prototype.usePlugin = function (e, t, n) {
      if (e) {
        if (this.loadType !== "full" || !Q.includes(e)) {
          if (t) {
            if (typeof t == "string") {
              if (!this.remotePlugin.get(e)) {
                this.remotePlugin.set(e, {
                  src: t,
                  call: n
                });
              }
            } else if (!this.remotePlugin.get(e)) {
              this.remotePlugin.set(e, {
                instance: t
              });
            }
          } else if (!this.remotePlugin.get(e)) {
            this.remotePlugin.set(e, "sdk");
          }
        }
      }
    };
    e.prototype.init = function (t) {
      var n;
      var r = this;
      this.logger = new F(this.name, t.log);
      if (this.inited) {
        this.logger.warn("[instance: " + this.name + "], every instance's api: init,  can be call only one time!");
      } else if (t && l(t)) {
        if (t.app_id && typeof (n = t.app_id) == "number" && !isNaN(n)) {
          if (t.app_key && typeof t.app_key != "string") {
            this.logger.warn("app_key param is error, must be string, please check!");
          } else {
            if (!t.channel_domain && ["cn", "sg", "va"].indexOf(t.channel) === -1) {
              this.logger.warn("channel must be `cn`, `sg`,`va` !");
              t.channel = "cn";
            }
            this.spider = new H();
            if (this.spider.checkSpider(t)) {
              this.logger.warn("your env may be a spider, can not report!");
            } else {
              this.appBridge = new G(this, t.enable_native);
              this.requestManager = new J(this, t);
              this.bridgeReport = this.appBridge.bridgeInject();
              this.configManager = new z(this, t);
              this.debugger = new X(this, t);
              this.initConfig = t;
              this.emit(N.Init);
              this.emit(S.DEBUGGER_MESSAGE, {
                type: S.DEBUGGER_MESSAGE_SDK,
                info: "SDK 执行INIT",
                data: t,
                level: "info",
                time: Date.now()
              });
              this.destroy = false;
              if (t.disable_auto_pv) {
                this.disableAutoPageView = true;
              }
              if (!this.bridgeReport) {
                this.configManager.set({
                  app_id: t.app_id
                });
                this.eventManager = new W();
                this.tokenManager = new K();
                this.sessionManager = new $();
                Promise.all([new Promise(function (e) {
                  r.once(N.TokenComplete, function () {
                    e(true);
                  });
                }), new Promise(function (e) {
                  r.once(N.Start, function () {
                    e(true);
                  });
                })]).then(function () {
                  try {
                    e.plugins.reduce(function (e, t) {
                      var n = t.plugin;
                      var i = t.options;
                      var o = Object.assign(r.initConfig, i);
                      var a = new n();
                      a.apply(r, o);
                      e.push(a);
                      return e;
                    }, r.pluginInstances);
                  } catch (e) {
                    r.emit(S.DEBUGGER_MESSAGE, {
                      type: S.DEBUGGER_MESSAGE_SDK,
                      info: "发生了异常",
                      level: "error",
                      time: Date.now(),
                      data: e.message
                    });
                  }
                  r.sdkReady = true;
                  r.emit(N.Ready);
                  r.emit(S.DEBUGGER_MESSAGE, {
                    type: S.DEBUGGER_MESSAGE_SDK,
                    info: "SDK 初始化完成",
                    time: Date.now(),
                    level: "info",
                    data: r.configManager.get("user")
                  });
                  r.logger.info("appid: " + t.app_id + ", userInfo:" + JSON.stringify(r.configManager.get("user")));
                  r.logger.info("appid: " + t.app_id + ", sdk is ready, version type is " + r.loadType + ", version is " + j + ", you can report now !!!");
                  if (t.disable_auto_pv) {
                    r.disableAutoPageView = true;
                  }
                  try {
                    if (r.loadType === "full" && (t.enable_ab_test || t.autotrack)) {
                      (window.opener || window.parent).postMessage("[tea-sdk]ready", "*");
                    }
                  } catch (e) {
                    r.emit(S.DEBUGGER_MESSAGE, {
                      type: S.DEBUGGER_MESSAGE_SDK,
                      info: "发生了异常",
                      level: "error",
                      time: Date.now(),
                      data: e.message
                    });
                  }
                  r.pageView();
                  r.on(N.TokenChange, function (e) {
                    if (e === "webid") {
                      r.pageView();
                    }
                    r.logger.info("appid: " + t.app_id + " token change, new userInfo:" + JSON.stringify(r.configManager.get("user")));
                    r.emit(S.DEBUGGER_MESSAGE, {
                      type: S.DEBUGGER_MESSAGE_SDK,
                      info: "SDK 设置了用户信息",
                      time: Date.now(),
                      secType: "USER",
                      level: "info",
                      data: r.configManager.get("user")
                    });
                  });
                  r.on(N.TokenReset, function () {
                    r.logger.info("appid: " + t.app_id + " token reset, new userInfo:" + JSON.stringify(r.configManager.get("user")));
                    r.emit(S.DEBUGGER_MESSAGE, {
                      type: S.DEBUGGER_MESSAGE_SDK,
                      info: "SDK 重置了用户信息",
                      time: Date.now(),
                      secType: "USER",
                      level: "info",
                      data: r.configManager.get("user")
                    });
                  });
                  r.on(N.RouteChange, function (e) {
                    if (!e.init && !t.disable_route_report) {
                      r.pageView();
                    }
                  });
                });
                this.tokenManager.apply(this, t);
                this.eventManager.apply(this, t);
                this.sessionManager.apply(this, t);
              }
              this.inited = true;
            }
          }
        } else {
          this.logger.warn("app_id param is error, must be number, please check!");
        }
      } else {
        this.logger.warn("init params error,please check!");
      }
    };
    e.prototype.config = function (e) {
      if (this.inited) {
        if (e && l(e)) {
          if (this.bridgeReport) {
            this.appBridge.setConfig(e);
          } else {
            if (e._staging_flag && e._staging_flag === 1) {
              this.staging = true;
            }
            if (e.disable_auto_pv) {
              this.disableAutoPageView = true;
              delete e.disable_auto_pv;
            }
            var t = i({}, e);
            var n = this.initConfig.configPersist || this.initConfig.config_persist || false;
            if (this.initConfig && n) {
              var r = this.configManager.getStore();
              if (r) {
                t = Object.assign(r, e);
              }
              this.configManager.setStore(e);
            }
            t.web_id;
            t.user_unique_id;
            var o = function (e, t) {
              var n = {};
              for (var r in e) {
                if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
                  n[r] = e[r];
                }
              }
              if (e != null && typeof Object.getOwnPropertySymbols == "function") {
                var i = 0;
                for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
                  if (t.indexOf(r[i]) < 0) {
                    n[r[i]] = e[r[i]];
                  }
                }
              }
              return n;
            }(t, ["web_id", "user_unique_id"]);
            this.configManager.set(o);
            if (t.hasOwnProperty("web_id")) {
              this.emit(N.ConfigWebId, t.web_id);
            }
            if (t.hasOwnProperty("user_unique_id")) {
              this.emit(N.ConfigUuid, t.user_unique_id);
            }
            this.emit(S.DEBUGGER_MESSAGE, {
              type: S.DEBUGGER_MESSAGE_SDK,
              info: "SDK 执行CONFIG",
              level: "info",
              time: Date.now(),
              data: t
            });
          }
        } else {
          this.logger.warn("config params is error, please check");
        }
      } else {
        this.logger.warn("config must be use after function init");
      }
    };
    e.prototype.setUserUniqueID = function (e) {
      this.config({
        user_unique_id: e
      });
    };
    e.prototype.setHeaderInfo = function (e, t) {
      var n = {
        [e]: t
      };
      this.config(n);
    };
    e.prototype.removeHeaderInfo = function (e) {
      var t = {
        [e]: undefined
      };
      this.config(t);
    };
    e.prototype.setDomain = function (e) {
      if (this.configManager) {
        this.configManager.setDomain(e);
      }
      this.emit(N.ConfigDomain);
    };
    e.prototype.getConfig = function (e) {
      return this.configManager.get(e);
    };
    e.prototype.send = function () {
      this.start();
    };
    e.prototype.start = function () {
      if (this.inited && !this.sended) {
        this.sended = true;
        this.started = true;
        this.emit(N.Start);
        this.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "SDK 执行START",
          level: "info",
          time: Date.now()
        });
        if (this.bridgeReport) {
          this.pageView();
          this.emit(N.Ready);
        }
      }
    };
    e.prototype.event = function (e, t) {
      var n = this;
      try {
        var r = [];
        if (Array.isArray(e)) {
          e.forEach(function (e) {
            var t = n.processEvent(e[0], e[1] || {});
            if (t) {
              r.push(t);
            }
          });
        } else {
          var i = this.processEvent(e, t);
          if (!i) {
            return;
          }
          r.push(i);
        }
        if (this.bridgeReport) {
          r.forEach(function (e) {
            var t = e.event;
            var r = e.params;
            n.appBridge.onEventV3(t, JSON.stringify(r));
          });
        } else if (r.length) {
          this.emit(N.Event, r);
          this.emit(N.SessionResetTime);
        }
      } catch (e) {
        this.logger.warn("something error, please check");
        this.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.beconEvent = function (e, t) {
      if (Array.isArray(e)) {
        this.logger.warn("beconEvent not support batch report, please check");
      } else {
        var n = [];
        var r = this.processEvent(e, t || {});
        if (r) {
          n.push(r);
          if (n.length) {
            this.emit(N.BeconEvent, n);
            this.emit(N.SessionResetTime);
          }
        }
      }
    };
    e.prototype.processEvent = function (e, t = {}) {
      try {
        if (!e) {
          this.logger.warn("eventName is null， please check");
          return null;
        }
        var n = e;
        if (/^event\./.test(e)) {
          n = e.slice(6);
        }
        var r = t;
        if (typeof r != "object") {
          r = {};
        }
        if (r.profile) {
          delete r.profile;
        } else {
          r.event_index = h();
        }
        var i = undefined;
        if (r.local_ms) {
          i = r.local_ms;
          delete r.local_ms;
        } else {
          i = +new Date();
        }
        return {
          event: n,
          params: r,
          local_time_ms: i,
          is_bav: this.initConfig && this.initConfig.autotrack ? 1 : 0
        };
      } catch (n) {
        this.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: n.message
        });
        return {
          event: e,
          params: t
        };
      }
    };
    e.prototype.filterEvent = function (e) {
      this.eventFilter = e;
    };
    e.prototype.on = function (e, t) {
      this.hook.on(e, t);
    };
    e.prototype.once = function (e, t) {
      this.hook.once(e, t);
    };
    e.prototype.off = function (e, t) {
      this.hook.off(e, t);
    };
    e.prototype.emit = function (e, t, n) {
      this.hook.emit(e, t, n);
    };
    e.prototype.set = function (e) {
      this.hook.set(e);
    };
    e.prototype.stop = function () {
      this.sdkStop = true;
    };
    e.prototype.reStart = function () {
      this.sdkStop = false;
    };
    e.prototype.pageView = function () {
      if (!this.disableAutoPageView) {
        this.predefinePageView();
      }
    };
    e.prototype.predefinePageView = function (e = {}) {
      if (this.inited) {
        var t = {
          title: document.title || location.pathname,
          url: location.href,
          url_path: location.pathname,
          time: Date.now(),
          referrer: window.document.referrer,
          $is_first_time: "" + (this.configManager && this.configManager.is_first_time || false)
        };
        var n = i({}, t, e);
        this.event("predefine_pageview", n);
      }
    };
    e.prototype.clearEventCache = function () {
      this.emit(N.CleanEvents);
    };
    e.prototype.setWebIDviaUnionID = function (e) {
      if (e) {
        var t = _(e);
        this.config({
          web_id: "" + t,
          wechat_unionid: e
        });
        this.emit(N.CustomWebId);
      }
    };
    e.prototype.setWebId = function (e) {
      this.config({
        web_id: "" + e
      });
    };
    e.prototype.setWebIDviaOpenID = function (e) {
      if (e) {
        var t = _(e);
        this.config({
          web_id: "" + t,
          wechat_openid: e
        });
        this.emit(N.CustomWebId);
      }
    };
    e.prototype.setNativeAppId = function (e) {
      if (this.bridgeReport) {
        this.appBridge.setNativeAppId(e);
      }
    };
    e.prototype.getSessionId = function () {
      return V();
    };
    e.prototype.setSessionId = function (e) {
      this.emit(N.SessionReset, e);
    };
    e.prototype.resetStayDuration = function (e, t, n) {
      this.emit(N.ResetStay, {
        url_path: e,
        title: t,
        url: n
      }, N.Stay);
    };
    e.prototype.resetStayParams = function (e = "", t = "", n = "") {
      this.emit(N.SetStay, {
        url_path: e,
        title: t,
        url: n
      }, N.Stay);
    };
    e.prototype.getToken = function (e, t) {
      var n = this;
      if (this.inited) {
        var r = false;
        function o(t) {
          if (!r) {
            r = true;
            var o = n.configManager.get().user;
            if (t) {
              o.tobid = t;
              o["diss".split("").reverse().join("")] = t;
            }
            return e(i({}, o));
          }
        }
        function a() {
          n.tokenManager.getTobId().then(function (e) {
            o(e);
          });
        }
        if (this.sdkReady) {
          a();
        } else {
          if (t) {
            setTimeout(function () {
              o();
            }, t);
          }
          this.on(N.Ready, function () {
            a();
          });
        }
      }
    };
    e.prototype.profileSet = function (e) {
      if (this.bridgeReport) {
        this.appBridge.profileSet(JSON.stringify(e));
      } else {
        this.emit(N.ProfileSet, e, N.Profile);
      }
      this.emit(S.DEBUGGER_MESSAGE, {
        type: S.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileSet",
        level: "info",
        time: Date.now(),
        data: e
      });
    };
    e.prototype.profileSetOnce = function (e) {
      if (this.bridgeReport) {
        this.appBridge.profileSetOnce(JSON.stringify(e));
      } else {
        this.emit(N.ProfileSetOnce, e, N.Profile);
      }
      this.emit(S.DEBUGGER_MESSAGE, {
        type: S.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileSetOnce",
        level: "info",
        time: Date.now(),
        data: e
      });
    };
    e.prototype.profileIncrement = function (e) {
      if (this.bridgeReport) {
        this.appBridge.profileIncrement(JSON.stringify(e));
      } else {
        this.emit(N.ProfileIncrement, e, N.Profile);
      }
      this.emit(S.DEBUGGER_MESSAGE, {
        type: S.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileIncrement",
        level: "info",
        time: Date.now(),
        data: e
      });
    };
    e.prototype.profileUnset = function (e) {
      if (this.bridgeReport) {
        this.appBridge.profileUnset(e);
      } else {
        this.emit(N.ProfileUnset, e, N.Profile);
      }
      this.emit(S.DEBUGGER_MESSAGE, {
        type: S.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileUnset",
        level: "info",
        time: Date.now(),
        data: e
      });
    };
    e.prototype.profileAppend = function (e) {
      if (this.bridgeReport) {
        this.appBridge.profileAppend(JSON.stringify(e));
      } else {
        this.emit(N.ProfileAppend, e, N.Profile);
      }
      this.emit(S.DEBUGGER_MESSAGE, {
        type: S.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行profileAppend",
        level: "info",
        time: Date.now(),
        data: e
      });
    };
    e.prototype.setExternalAbVersion = function (e) {
      this.emit(N.AbExternalVersion, typeof e == "string" && e ? ("" + e).trim() : null, N.Ab);
    };
    e.prototype.getVar = function (e, t, n) {
      this.emit(N.AbVar, {
        name: e,
        defaultValue: t,
        callback: n
      }, N.Ab);
    };
    e.prototype.getABconfig = function (e, t) {
      this.emit(N.AbConfig, {
        params: e,
        callback: t
      }, N.Ab);
    };
    e.prototype.getAbSdkVersion = function () {
      return this.configManager.getAbVersion();
    };
    e.prototype.onAbSdkVersionChange = function (e) {
      var t = this;
      this.emit(N.AbVersionChangeOn, e, N.Ab);
      return function () {
        t.emit(N.AbVersionChangeOff, e, N.Ab);
      };
    };
    e.prototype.offAbSdkVersionChange = function (e) {
      this.emit(N.AbVersionChangeOff, e, N.Ab);
    };
    e.prototype.openOverlayer = function () {
      this.emit(N.AbOpenLayer, "", N.Ab);
    };
    e.prototype.closeOverlayer = function () {
      this.emit(N.AbCloseLayer, "", N.Ab);
    };
    e.prototype.getAllVars = function (e) {
      this.emit(N.AbAllVars, e, N.Ab);
    };
    e.prototype.destoryInstace = function () {
      if (!this.destroy) {
        this.destroy = true;
        this.off(N.TokenComplete);
        this.emit(N.DestoryInstance);
      }
    };
    e.prototype.destroyInstance = function () {
      if (!this.destroy) {
        this.destroy = true;
        this.off(N.TokenComplete);
        this.emit(N.DestoryInstance);
      }
    };
    e.plugins = [];
    return e;
  }();
  var et = "__rangers_ab_style__";
  var en = {};
  var er = [];
  function ei(e) {
    if (e.length) {
      e.forEach(function (e) {
        er.push(e);
      });
    }
  }
  function eo(e, t, n, r) {
    var i = e && e.source || window.opener || window.parent;
    var o = e && e.origin || r || "*";
    i.postMessage(JSON.stringify({
      type: t,
      payload: n
    }), o);
  }
  function ea(e, t) {
    en[e] = en[e] || [];
    en[e].push(t);
  }
  function es(e) {
    if (er.some(function (e) {
      return e === "*";
    }) || er.some(function (t) {
      return e.origin.indexOf(t) > -1;
    })) {
      var t = e.data;
      if (typeof e.data == "string") {
        try {
          t = JSON.parse(e.data);
        } catch (e) {
          t = undefined;
        }
      }
      if (t) {
        var n = t.type;
        var r = t.payload;
        if (en[n]) {
          en[n].forEach(function (t) {
            if (typeof t == "function") {
              t(e, r);
            }
          });
        }
      }
    }
  }
  function eu(e, t) {
    var n = {};
    if (Object.keys(e).length) {
      for (var r in e) {
        if (r === "filter" || r === "autotrack" || r === "enable_stay_duration") {
          break;
        }
        n[r] = e[r];
      }
    }
    (window.opener || window.parent).postMessage({
      type: "tea:sdk:info",
      config: n,
      version: t
    }, "*");
    window.addEventListener("message", es, false);
  }
  var ec = "";
  var el = false;
  function ef(e) {
    var t = e.event;
    var n = e.editorUrl;
    e.collectInstance;
    e.fromSession;
    if (!el) {
      el = true;
      g(n, function () {
        eo(t, "abEditorScriptloadSuccess");
      }, function () {
        if (t) {
          eo(t, "abEditorScriptloadError");
        }
        el = false;
      });
    }
  }
  (eG = eV ||= {})[eG.Var = 0] = "Var";
  eG[eG.All = 1] = "All";
  var eh = function () {
    function e() {
      this.fetchStatus = "no";
      this.refreshFetchStatus = "complete";
      this.versions = [];
      this.extVersions = [];
      this.mulilinkVersions = [];
      this.enable_multilink = false;
      this.enable_ab_visual = false;
      this.editMode = false;
      this.callbacks = [];
      this.data = null;
      this.changeListener = new Map();
      this.readyStatus = false;
      this.exposureCache = [];
    }
    e.prototype.apply = function (e, t) {
      var n = this;
      if (t.enable_ab_test) {
        this.collect = e;
        this.config = t;
        var r = t.enable_multilink;
        var i = t.ab_channel_domain;
        var o = t.enable_ab_visual;
        var a = t.ab_cross;
        var s = t.ab_cookie_domain;
        var u = t.ab_timeout;
        var c = i || d(P[t.channel || "cn"]);
        var l = e.adapters.storage;
        var f = this.collect.Types;
        this.types = f;
        this.cacheStorgae = new l(false);
        this.timeout = u || 3000;
        this.enable_multilink = r;
        this.enable_ab_visual = o;
        this.abKey = "__tea_sdk_ab_version_" + t.app_id;
        this.ab_cross = a;
        this.ab_cookie_domain = s || "";
        this.fetchUrl = c + "/service/2/abtest_config/";
        this.reportUrl = "" + e.configManager.getUrl("event");
        this.exposureLimit = t.exposure_limit || 20;
        this.ab_batch_time = t.ab_batch_time || 500;
        this.collect.on(f.TokenChange, function (e) {
          if (e === "uuid" && n.readyStatus) {
            n.clearCache();
            n.fetchAB();
          }
        });
        this.collect.on(f.TokenReset, function (e) {
          if (e === "uuid" && n.readyStatus) {
            n.clearCache();
            n.fetchAB();
          }
        });
        this.collect.on(f.AbVar, function (e) {
          var t = e.name;
          var r = e.defaultValue;
          var i = e.callback;
          n.getVar(t, r, i);
        });
        this.collect.on(f.AbAllVars, function (e) {
          n.getAllVars(e);
        });
        this.collect.on(f.AbConfig, function (e) {
          var t = e.params;
          var r = e.callback;
          n.getABconfig(t, r);
        });
        this.collect.on(f.AbExternalVersion, function (e) {
          n.setExternalAbVersion(e);
        });
        this.collect.on(f.AbOpenLayer, function () {
          n.openOverlayer();
        });
        this.collect.on(f.AbCloseLayer, function () {
          n.closeOverlayer();
        });
        this.collect.on(f.AbVersionChangeOn, function (e) {
          n.changeListener.set(e, e);
        });
        this.collect.on(f.AbVersionChangeOff, function (e) {
          if (n.changeListener.get(e)) {
            n.changeListener.delete(e);
          }
        });
        this.loadMode();
        if (this.enable_ab_visual || this.enable_multilink) {
          this.openOverlayer(this.config.multilink_timeout_ms || 500);
        }
        this.checkLocal();
        this.ready("ab");
        if (!this.readyStatus) {
          this.fetchAB();
          this.readyStatus = true;
        }
        this.collect.emit(f.AbReady);
      }
    };
    e.prototype.ready = function (e) {
      var t = this;
      this.collect.set(e);
      if (this.collect.hook._hooksCache.hasOwnProperty(e)) {
        var n = this.collect.hook._hooksCache[e];
        if (!Object.keys(n).length) {
          return;
        }
        function r(e) {
          if (n[e].length) {
            n[e].forEach(function (n) {
              t.collect.hook.emit(e, n);
            });
          }
        }
        for (var i in n) {
          r(i);
        }
      }
    };
    e.prototype.loadMode = function () {
      var e;
      var t;
      var n = function () {
        try {
          return JSON.parse(atob(window.name)) || undefined;
        } catch (e) {
          return;
        }
      }();
      var r = "";
      if (n) {
        var i = n.scenario;
        var o = n.href;
        if (i) {
          this.editMode = true;
          r = i;
        } else if (o && (o.indexOf("datatester") !== -1 || o.indexOf("visual-editor") !== -1)) {
          this.editMode = true;
          r = "visual-editor";
        }
      }
      if (this.enable_ab_visual && (function (e, t) {
        window.TEAVisualEditor = window.TEAVisualEditor || {};
        ei(["*"]);
        var n;
        var r = "";
        eu(t, j);
        var i = "";
        try {
          var o = window.performance.getEntriesByType("resource");
          if (o && o.length && (o.forEach(function (e) {
            if (e.initiatorType === "script" && e.name && e.name.indexOf("collect") !== -1) {
              i = e.name;
            }
          }), i || document.currentScript && (i = document.currentScript.src), i && (n = i.split("/")) && n.length)) {
            r = "https:/";
            for (var a = 2; a < n.length && a !== n.length - 1; a++) {
              r = r + "/" + n[a];
            }
            r += "/visual-ab-core";
          }
        } catch (e) {}
        ea("tea:openVisualABEditor", function (n) {
          var i = n.data;
          if (typeof n.data == "string") {
            try {
              i = JSON.parse(n.data);
            } catch (e) {
              i = undefined;
            }
          }
          if (i) {
            var o = i.lang;
            if (i.appId !== t.app_id) {
              eo(n, "appIdError");
              return;
            }
            var a = i.version;
            ec = a && r ? r + (a ? "." + a : ".1.0.1") + ".js?query=" + Date.now() : "https://lf-cdn-tos.bytescm.com/obj/static/log-sdk/collect/visual-ab-core.js?query=" + Date.now();
            window.TEAVisualEditor.lang = o;
            window.TEAVisualEditor.__ab_domin = t.channel_domain || "";
            ef({
              event: n,
              editorUrl: ec,
              collectInstance: e
            });
          }
        });
      }(this.collect, this.config), r === "visual-editor")) {
        this.collect.destoryInstace();
      } else if (this.enable_multilink) {
        e = this.collect;
        t = this.config;
        window.TEAVisualEditor = window.TEAVisualEditor || {};
        window.TEAVisualEditor.appId = t.app_id;
        ea("tea:openTesterEventInspector", function (t) {
          var n = t.data;
          if (typeof t.data == "string") {
            try {
              n = JSON.parse(t.data);
            } catch (e) {
              n = undefined;
            }
          }
          if (n) {
            var r = n.referrer;
            var i = n.lang;
            var o = n.appId;
            window.TEAVisualEditor.__editor_ajax_domain = r || "";
            window.TEAVisualEditor.__ab_appId = o || "";
            window.TEAVisualEditor.lang = i || "";
            ef({
              event: t,
              editorUrl: "https://lf3-data.volccdn.com/obj/data-static/log-sdk/collect/tester-event-inspector.js?query=" + Date.now(),
              collectInstance: e
            });
          }
        });
      }
    };
    e.prototype.checkLocal = function () {
      var e = this.getABCache();
      var t = e.ab_version;
      var n = e.ab_ext_version;
      var r = e.ab_version_multilink;
      var i = e.data;
      var o = this.checkFromUrl();
      if (o) {
        this.mulilinkVersions.push(o);
      } else {
        this.mulilinkVersions = r || [];
      }
      this.extVersions = n || [];
      this.versions = t || [];
      this.data = i;
      var a = this.versions.concat(this.extVersions);
      if (this.enable_multilink) {
        a = a.concat(this.mulilinkVersions);
      }
      this.configVersions(a.join(","));
    };
    e.prototype.checkFromUrl = function () {
      var e = b(window.location.href);
      if (e && e.vid) {
        return e.vid;
      } else {
        return "";
      }
    };
    e.prototype.updateVersions = function () {
      var e = this.extVersions.length ? this.versions.concat(this.extVersions) : this.versions;
      if (this.enable_multilink) {
        e = e.concat(this.mulilinkVersions);
      }
      this.configVersions(e.join(","));
      this.updateABCache();
      if (this.changeListener.size > 0) {
        this.changeListener.forEach(function (t) {
          if (typeof t == "function") {
            t(e);
          }
        });
      }
    };
    e.prototype.configVersions = function (e) {
      this.collect.configManager.setAbVersion(e);
    };
    e.prototype.getVar = function (e, t, n) {
      if (!e) {
        throw Error("variable must not be empty");
      }
      if (t === undefined) {
        throw Error("variable no default value");
      }
      if (typeof n != "function") {
        throw Error("callback must be a function");
      }
      var r = {
        name: e,
        defaultValue: t,
        callback: n,
        type: eV.Var
      };
      if (this.fetchStatus === "complete" && this.refreshFetchStatus === "complete") {
        this.getRealVar(r, e);
      } else {
        this.callbacks.push(r);
      }
    };
    e.prototype.getRealVar = function (e, t) {
      var n = e.name;
      var r = e.defaultValue;
      var i = e.callback;
      var o = this.data;
      if (o) {
        if (l(o[n])) {
          var a = o[n].vid;
          if (t === "$ab_url") {
            if (!this.mulilinkVersions.includes(a)) {
              this.mulilinkVersions.push(a);
            }
          } else if (!this.versions.includes(a)) {
            this.versions.push(a);
          }
          this.updateVersions();
          this.fechEvent(a, t, r);
          i(o[n].val);
          this.collect.emit(S.DEBUGGER_MESSAGE, {
            type: S.DEBUGGER_MESSAGE_SDK,
            secType: "AB",
            info: "SDK 曝光了实验" + n,
            level: "info",
            time: Date.now(),
            data: o[n]
          });
          return;
        }
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          secType: "AB",
          info: "SDK 调用getVar",
          level: "info",
          time: Date.now(),
          data: r
        });
        i(r);
      } else {
        i(r);
      }
    };
    e.prototype.getAllVars = function (e) {
      if (typeof e != "function") {
        throw Error("callback must be a function");
      }
      var t = {
        callback: e,
        type: eV.All
      };
      if (this.fetchStatus === "complete" && this.refreshFetchStatus === "complete") {
        this.getRealAllVars(t);
      } else {
        this.callbacks.push(t);
      }
    };
    e.prototype.getRealAllVars = function (e) {
      e.callback(this.data ? JSON.parse(JSON.stringify(this.data)) : {});
      this.collect.emit(S.DEBUGGER_MESSAGE, {
        type: S.DEBUGGER_MESSAGE_SDK,
        secType: "AB",
        info: "SDK 调用getAllVars",
        level: "info",
        time: Date.now(),
        data: this.data
      });
    };
    e.prototype.fechEvent = function (e, t, n) {
      try {
        if (this.config.disable_track_event || !e) {
          return;
        }
        var r = this.collect.configManager.get();
        var i = r.header;
        var o = r.user;
        var a = this.getABCache();
        if (a && a.uuid && a.uuid !== o.user_unique_id) {
          return;
        }
        var s = {
          event: "abtest_exposure",
          ab_sdk_version: "" + e,
          params: JSON.stringify({
            app_id: this.config.appId,
            ab_url: t === "$ab_url" ? n : window.location.href
          }),
          local_time_ms: Date.now()
        };
        i.custom = JSON.stringify(i.custom);
        this.reportExposure({
          events: [s],
          user: o,
          header: i
        }, t);
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.reportExposure = function (e, t) {
      var n = this;
      this.exposureCache.push(e);
      if (this.reportTimeout) {
        clearTimeout(this.reportTimeout);
      }
      if (this.exposureCache.length >= this.exposureLimit) {
        this.report(t);
      } else {
        this.reportTimeout = setTimeout(function () {
          n.report(t);
          clearTimeout(n.reportTimeout);
        }, this.ab_batch_time);
      }
    };
    e.prototype.report = function (e) {
      var t = this;
      this.collect.requestManager.useRequest({
        url: this.reportUrl,
        data: this.exposureCache,
        timeout: 20000,
        useBeacon: e === "$ab_url"
      });
      this.exposureCache.forEach(function (e) {
        t.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_EVENT,
          info: "埋点上报成功",
          time: Date.now(),
          data: [e],
          code: 200,
          status: "success"
        });
      });
      this.exposureCache = [];
    };
    e.prototype.setExternalAbVersion = function (e) {
      this.extVersions = [e];
      this.updateVersions();
    };
    e.prototype.getABconfig = function (e, t) {
      var n = Object.keys(e);
      if (n && n.length) {
        this.collect.configManager.set(e);
      }
      this.fetchAB(t);
    };
    e.prototype.get = function (e) {
      if (this.ab_cross) {
        var t = this.cacheStorgae.getCookie(e, this.ab_cookie_domain);
        if (t) {
          return JSON.parse(t);
        } else {
          return {};
        }
      }
      return this.cacheStorgae.getItem(e);
    };
    e.prototype.set = function (e, t) {
      if (this.ab_cross) {
        this.cacheStorgae.setCookie(e, t, 2592000000, this.ab_cookie_domain);
      } else {
        this.cacheStorgae.setItem(e, t);
      }
      this.collect.configManager.setAbCache(t);
    };
    e.prototype.getABCache = function (e) {
      var t = {
        ab_version: [],
        ab_ext_version: [],
        ab_version_multilink: [],
        data: null,
        timestamp: +new Date(),
        uuid: ""
      };
      t = this.get(this.abKey) || t;
      if (e) {
        return t[e];
      } else {
        return t;
      }
    };
    e.prototype.updateABCache = function () {
      var e = this.getABCache();
      e.ab_version_multilink = this.mulilinkVersions;
      e.ab_ext_version = this.extVersions;
      e.ab_version = this.versions;
      e.timestamp = Date.now();
      this.set(this.abKey, e);
    };
    e.prototype.setAbCache = function (e) {
      var t = this.getABCache();
      t.data = this.data;
      t.uuid = e;
      t.timestamp = Date.now();
      this.set(this.abKey, t);
    };
    e.prototype.clearCache = function () {
      this.refreshFetchStatus = "ing";
      this.data = {};
      this.extVersions = [];
      this.mulilinkVersions = [];
      this.versions = [];
      this.collect.configManager.clearAbCache();
    };
    e.prototype.openOverlayer = function (e) {
      var t = this;
      (function () {
        if (!document.getElementById(et)) {
          var e = "body { opacity: 0 !important; }";
          var t = document.head || document.getElementsByTagName("head")[0];
          var n = document.createElement("style");
          n.id = et;
          n.type = "text/css";
          if (n.styleSheet) {
            n.styleSheet.cssText = e;
          } else {
            n.appendChild(document.createTextNode(e));
          }
          t.appendChild(n);
        }
      })();
      if (e) {
        var n = setTimeout(function () {
          t.closeOverlayer();
          clearTimeout(n);
        }, e);
      }
    };
    e.prototype.closeOverlayer = function () {
      var e;
      if (e = document.getElementById(et)) {
        e.parentElement.removeChild(e);
      }
    };
    e.prototype.fetchComplete = function (e, t) {
      var n = this;
      try {
        if (e && Object.prototype.toString.call(e) == "[object Object]") {
          this.data = e;
          this.setAbCache(t);
          var r = [];
          Object.keys(e).forEach(function (t) {
            var n = e[t].vid;
            if (n) {
              r.push(n);
            }
          });
          this.versions = this.versions.filter(function (e) {
            return r.includes(e);
          });
          var i = e.$ab_url;
          var o = e.$ab_modification;
          if (o && o.val && this.enable_ab_visual) {
            if (this.collect.destroy) {
              return;
            }
            this.getVar("$ab_modification", window.location.href, function () {
              var e;
              e = o.val;
              window.TEAVisualEditor = window.TEAVisualEditor || {};
              window.TEAVisualEditor.__ab_config = e;
              g("https://lf-cdn-tos.bytescm.com/obj/static/log-sdk/collect/visual-ab-loader.js?query=" + Date.now(), function () {}, function () {});
              n.closeOverlayer();
            });
          } else if (i && this.enable_multilink) {
            this.mulilinkVersions = this.mulilinkVersions.filter(function (e) {
              return r.includes(e);
            });
            var a = i.val;
            var s = i.vid;
            if (a && s) {
              this.getVar("$ab_url", a, function () {
                if (!n.editMode) {
                  if (a !== window.location.href) {
                    setTimeout(function () {
                      if (!n.collect.destroy) {
                        var e = "" + a;
                        e = e.indexOf("http") === -1 ? "https://" + e : e;
                        if (y(e).host !== location.host) {
                          e = e + "&vid=" + s;
                        } else {
                          window.history.replaceState("", "", e);
                        }
                        window.location.href = e;
                      }
                    }, 100);
                  } else {
                    n.closeOverlayer();
                  }
                }
              });
            }
          }
          this.updateVersions();
        } else {
          this.closeOverlayer();
        }
        this.callbacks.forEach(function (e) {
          return n[e.type === eV.Var ? "getRealVar" : "getRealAllVars"](e, "");
        });
        this.callbacks = [];
      } catch (e) {}
    };
    e.prototype.fetchAB = function (e) {
      var t = this;
      var n = this.collect.configManager.get();
      var r = {
        header: i({
          aid: this.config.app_id
        }, n.user || {}, n.header || {}, {
          ab_sdk_version: this.collect.configManager.getAbVersion(),
          ab_url: window.location.href
        })
      };
      this.collect.emit(S.DEBUGGER_MESSAGE, {
        type: S.DEBUGGER_MESSAGE_SDK,
        info: "SDK 发起AB实验请求",
        level: "info",
        logType: "fetch",
        time: Date.now(),
        data: r
      });
      this.collect.requestManager.useRequest({
        url: this.fetchUrl,
        data: r,
        success: function (r) {
          t.fetchStatus = "complete";
          t.refreshFetchStatus = "complete";
          var i = r.data;
          if (r.message === "success") {
            t.fetchComplete(i, n.user.user_unique_id);
            if (e) {
              e(i);
            }
          } else {
            t.fetchComplete(null, n.user.user_unique_id);
            if (e) {
              e(null);
            }
          }
          t.collect.emit(t.types.AbComplete, i);
          t.collect.emit(S.DEBUGGER_MESSAGE, {
            type: S.DEBUGGER_MESSAGE_SDK,
            secType: "AB",
            info: "AB实验请求成功",
            level: "info",
            logType: "fetch",
            time: Date.now(),
            data: i
          });
        },
        fail: function () {
          t.fetchStatus = "complete";
          t.refreshFetchStatus = "complete";
          t.fetchComplete(null, n.user.user_unique_id);
          t.collect.emit(t.types.AbTimeout);
          if (e) {
            e(null);
          }
          t.collect.emit(S.DEBUGGER_MESSAGE, {
            type: S.DEBUGGER_MESSAGE_SDK,
            secType: "AB",
            info: "AB实验请求网络异常",
            level: "error",
            logType: "fetch",
            time: Date.now()
          });
        },
        timeout: this.timeout
      });
    };
    return e;
  }();
  var ed = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      var n = this;
      if (t.event_verify_url && typeof t.event_verify_url == "string") {
        this.url = t.event_verify_url + "/v1/list_test";
        e.on(e.Types.SubmitBefore, function (t) {
          e.requestManager.useBeacon({
            url: n.url,
            data: t
          });
        });
      }
    };
    return e;
  }();
  var ep = function () {
    function e(e, t) {
      this.maxDuration = 43200000;
      this.aliveDTime = 60000;
      this.options = {
        aliveName: "predefine_page_alive",
        params: {}
      };
      this.focusState = true;
      this.collect = e;
      this.config = t;
      this.pageStartTime = Date.now();
      this.sessionStartTime = this.pageStartTime;
      this.timerHandler = null;
      if (l(t.enable_stay_duration)) {
        this.options = Object.assign(this.options, t.enable_stay_duration);
      }
      this.hard = this.options.mode && this.options.mode === "hard";
    }
    e.prototype.setParams = function (e, t, n) {
      this.set_path = e;
      this.set_url = n;
      this.set_title = t;
    };
    e.prototype.enable = function (e, t, n) {
      this.url_path = e;
      this.url = n;
      this.title = t;
      this.disableCallback = this.enablePageAlive();
      if (this.hard) {
        this.removeMode = this.hardMode();
      }
    };
    e.prototype.disable = function () {
      this.disableCallback();
      this.pageStartTime = Date.now();
    };
    e.prototype.sendEvent = function (e, t = false) {
      var n = t ? this.aliveDTime : Date.now() - this.sessionStartTime;
      if (!(n < 0) && !(n > this.aliveDTime) && !(Date.now() - this.pageStartTime > this.maxDuration) && (!t || document.visibilityState !== "hidden") && (!this.hard || !!this.focusState)) {
        this.collect.beconEvent(this.options.aliveName, i({
          url_path: this.getParams("url_path"),
          title: this.getParams("title"),
          url: this.getParams("url"),
          duration: n,
          is_support_visibility_change: v(),
          startTime: this.sessionStartTime,
          hidden: document.visibilityState,
          leave: e
        }, this.options.params));
        this.sessionStartTime = Date.now();
      }
    };
    e.prototype.getParams = function (e) {
      switch (e) {
        case "url_path":
          return this.set_path || this.url_path || location.pathname;
        case "title":
          return this.set_title || this.title || document.title || location.pathname;
        case "url":
          return this.set_url || this.url || location.href;
      }
    };
    e.prototype.setUpTimer = function () {
      var e = this;
      if (this.timerHandler) {
        clearInterval(this.timerHandler);
      }
      return setInterval(function () {
        if (Date.now() - e.sessionStartTime > e.aliveDTime) {
          e.sendEvent(false, true);
        }
      }, 1000);
    };
    e.prototype.visibilitychange = function () {
      if (document.visibilityState === "hidden") {
        if (this.timerHandler) {
          clearInterval(this.timerHandler);
          this.sendEvent(false);
        }
      } else if (document.visibilityState === "visible") {
        this.sessionStartTime = Date.now();
        this.timerHandler = this.setUpTimer();
      }
    };
    e.prototype.beforeunload = function () {
      if (!document.hidden) {
        this.sendEvent(true);
      }
    };
    e.prototype.enablePageAlive = function () {
      var e = this;
      this.timerHandler = this.setUpTimer();
      var t = this.visibilitychange.bind(this);
      var n = this.beforeunload.bind(this);
      document.addEventListener("visibilitychange", t);
      window.addEventListener("pagehide", n);
      return function () {
        e.beforeunload();
        document.removeEventListener("visibilitychange", t);
        window.removeEventListener("pagehide", n);
      };
    };
    e.prototype.hardMode = function () {
      var e = this;
      this.focusState = document.hasFocus();
      function t() {
        if (e.timerHandler) {
          clearInterval(e.timerHandler);
          e.sendEvent(false);
        }
        e.focusState = false;
      }
      function n() {
        e.focusState = true;
        e.sessionStartTime = Date.now();
        e.timerHandler = e.setUpTimer();
      }
      window.addEventListener("blur", t);
      window.addEventListener("focus", n);
      return function () {
        window.removeEventListener("blur", t);
        window.removeEventListener("focus", n);
      };
    };
    return e;
  }();
  var eg = function () {
    function e(e, t) {
      var n = this;
      this.maxDuration = 43200000;
      this.aliveDTime = 60000;
      this.options = {
        closeName: "predefine_page_close",
        params: {}
      };
      this.focusState = true;
      this.visibilitychange = function () {
        if (document.visibilityState === "hidden") {
          n.activeEndTime = Date.now();
        } else if (document.visibilityState === "visible") {
          if (n.activeEndTime) {
            n.totalTime += n.activeEndTime - n.activeStartTime;
            n.activeTimes += 1;
          }
          n.activeEndTime = undefined;
          n.activeStartTime = Date.now();
        }
      };
      this.beforeunload = function () {
        n.totalTime += (n.activeEndTime || Date.now()) - n.activeStartTime;
        if (n.config.autotrack) {
          try {
            window.sessionStorage.setItem("_tea_cache_duration", JSON.stringify({
              duration: n.totalTime,
              page_title: document.title || location.pathname
            }));
          } catch (e) {}
        }
        n.sendEventPageClose();
      };
      this.collect = e;
      this.config = t;
      this.maxDuration = t.maxDuration || t.max_duration || 86400000;
      this.pageStartTime = Date.now();
      if (l(t.enable_stay_duration)) {
        this.options = Object.assign(this.options, t.enable_stay_duration);
      }
      this.hard = this.options.mode && this.options.mode === "hard";
      this.resetData();
    }
    e.prototype.setParams = function (e, t, n) {
      this.set_path = e;
      this.set_url = n;
      this.set_title = t;
    };
    e.prototype.resetParams = function (e, t, n) {
      this.url_path = e;
      this.url = n;
      this.title = t;
    };
    e.prototype.enable = function (e, t, n) {
      this.url_path = e;
      this.url = n;
      this.title = t;
      this.disableCallback = this.enablePageClose();
      if (this.hard) {
        this.removeMode = this.hardMode();
      }
    };
    e.prototype.disable = function () {
      this.disableCallback();
    };
    e.prototype.resetData = function () {
      this.activeStartTime = this.activeStartTime === undefined ? this.pageStartTime : Date.now();
      this.activeEndTime = undefined;
      this.activeTimes = 1;
      this.totalTime = 0;
      this.resetParams(location.pathname, document.title, location.href);
    };
    e.prototype.sendEventPageClose = function () {
      var e = Date.now() - this.pageStartTime;
      if (!(this.totalTime < 0) && !(e < 0) && !(this.totalTime >= this.maxDuration) && (!this.hard || !!this.focusState)) {
        this.collect.beconEvent(this.options.closeName, i({
          url_path: this.getParams("url_path"),
          title: this.getParams("title"),
          url: this.getParams("url"),
          active_times: this.activeTimes,
          duration: this.totalTime,
          total_duration: e,
          is_support_visibility_change: v()
        }, this.options.params));
        this.pageStartTime = Date.now();
        this.resetData();
      }
    };
    e.prototype.getParams = function (e) {
      switch (e) {
        case "url_path":
          return this.set_path || this.url_path || location.pathname;
        case "title":
          return this.set_title || this.title || document.title || location.pathname;
        case "url":
          return this.set_url || this.url || location.href;
      }
    };
    e.prototype.enablePageClose = function () {
      var e = this;
      var t = this.visibilitychange.bind(this);
      var n = this.beforeunload.bind(this);
      document.addEventListener("visibilitychange", t);
      window.addEventListener("pagehide", n);
      return function () {
        e.beforeunload();
        document.removeEventListener("visibilitychange", t);
        window.removeEventListener("pagehide", n);
      };
    };
    e.prototype.hardMode = function () {
      var e = this;
      this.focusState = document.hasFocus();
      function t() {
        e.focusState = false;
      }
      function n() {
        e.focusState = true;
      }
      window.addEventListener("blur", t);
      window.addEventListener("focus", n);
      return function () {
        window.removeEventListener("blur", t);
        window.removeEventListener("focus", n);
      };
    };
    return e;
  }();
  var ev = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      var n = this;
      this.collect = e;
      this.config = t;
      if (this.config.enable_stay_duration) {
        this.title = document.title || location.pathname;
        this.url = location.href;
        this.url_path = location.pathname;
        this.pageAlive = new ep(e, t);
        this.pageClose = new eg(e, t);
        var r = this.collect.Types;
        this.collect.on(r.ResetStay, function (e) {
          var t = e.url_path;
          var r = e.title;
          var i = e.url;
          n.resetStayDuration(t, r, i);
        });
        this.collect.on(r.RouteChange, function (e) {
          if (!e.init && !t.disable_route_report) {
            n.resetStayDuration();
          }
        });
        this.collect.on(r.SetStay, function (e) {
          var t = e.url_path;
          var r = e.title;
          var i = e.url;
          n.setStayParmas(t, r, i);
        });
        this.enable(this.url_path, this.title, this.url);
        this.ready(r.Stay);
        this.collect.emit(r.StayReady);
      }
    };
    e.prototype.ready = function (e) {
      var t = this;
      this.collect.set(e);
      if (this.collect.hook._hooksCache.hasOwnProperty(e)) {
        var n = this.collect.hook._hooksCache[e];
        if (!Object.keys(n).length) {
          return;
        }
        function r(e) {
          if (n[e].length) {
            n[e].forEach(function (n) {
              t.collect.hook.emit(e, n);
            });
          }
        }
        for (var i in n) {
          r(i);
        }
      }
    };
    e.prototype.enable = function (e, t, n) {
      this.pageAlive.enable(e, t, n);
      this.pageClose.enable(e, t, n);
    };
    e.prototype.disable = function () {
      this.pageAlive.disable();
      this.pageClose.disable();
    };
    e.prototype.setStayParmas = function (e = "", t = "", n = "") {
      this.pageAlive.setParams(e, t, n);
      this.pageClose.setParams(e, t, n);
      this.collect.emit(S.DEBUGGER_MESSAGE, {
        type: S.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行 resetStayParams",
        level: "info",
        time: Date.now(),
        data: {
          url_path: e,
          title: t,
          url: n
        }
      });
    };
    e.prototype.reset = function (e, t, n) {
      this.disable();
      this.enable(e, t, n);
    };
    e.prototype.resetStayDuration = function (e, t, n) {
      this.reset(e, t, n);
      this.collect.emit(S.DEBUGGER_MESSAGE, {
        type: S.DEBUGGER_MESSAGE_SDK,
        info: "SDK 执行 resetStayDuration",
        level: "info",
        time: Date.now(),
        data: {
          url_path: e,
          title: t,
          url: n
        }
      });
    };
    return e;
  }();
  var em = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      var n = this;
      this.collect = e;
      this.config = t;
      this.duration = 60000;
      this.reportUrl = e.configManager.getDomain() + "/profile/list";
      var r = e.Types;
      this.eventCheck = new I(e, t);
      this.cache = {};
      this.collect.on(r.ProfileSet, function (e) {
        n.setProfile(e);
      });
      this.collect.on(r.ProfileSetOnce, function (e) {
        n.setOnceProfile(e);
      });
      this.collect.on(r.ProfileUnset, function (e) {
        n.unsetProfile(e);
      });
      this.collect.on(r.ProfileIncrement, function (e) {
        n.incrementProfile(e);
      });
      this.collect.on(r.ProfileAppend, function (e) {
        n.appendProfile(e);
      });
      this.collect.on(r.ProfileClear, function () {
        n.cache = {};
      });
      this.ready(r.Profile);
    };
    e.prototype.ready = function (e) {
      var t = this;
      this.collect.set(e);
      if (this.collect.hook._hooksCache.hasOwnProperty(e)) {
        var n = this.collect.hook._hooksCache[e];
        if (!Object.keys(n).length) {
          return;
        }
        function r(e) {
          if (n[e].length) {
            n[e].forEach(function (n) {
              t.collect.hook.emit(e, n);
            });
          }
        }
        for (var i in n) {
          r(i);
        }
      }
    };
    e.prototype.report = function (e, t = {}) {
      try {
        if (this.config.disable_track_event) {
          return;
        }
        var n = [];
        n.push(this.collect.processEvent(e, t));
        var r = this.collect.eventManager.merge(n);
        this.collect.requestManager.useRequest({
          url: this.reportUrl,
          data: r
        });
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_EVENT,
          info: "埋点上报成功",
          time: Date.now(),
          data: r,
          code: 200,
          status: "success"
        });
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.setProfile = function (e) {
      var t = this.formatParams(e);
      if (t && Object.keys(t).length) {
        this.pushCache(t);
        this.report("__profile_set", i({}, t, {
          profile: true
        }));
      }
    };
    e.prototype.setOnceProfile = function (e) {
      var t = this.formatParams(e, true);
      if (t && Object.keys(t).length) {
        this.pushCache(t);
        this.report("__profile_set_once", i({}, t, {
          profile: true
        }));
      }
    };
    e.prototype.incrementProfile = function (e) {
      if (e) {
        this.report("__profile_increment", i({}, e, {
          profile: true
        }));
      }
    };
    e.prototype.unsetProfile = function (e) {
      if (e) {
        var t = {
          [e]: "1"
        };
        this.report("__profile_unset", i({}, t, {
          profile: true
        }));
      }
    };
    e.prototype.appendProfile = function (e) {
      if (e) {
        var t = {};
        for (var n in e) {
          if (typeof e[n] == "string" || Object.prototype.toString.call(e[n]).slice(8, -1) === "Array") {
            t[n] = e[n];
          }
        }
        if (Object.keys(t).length) {
          this.report("__profile_append", i({}, t, {
            profile: true
          }));
        }
      }
    };
    e.prototype.pushCache = function (e) {
      var t = this;
      Object.keys(e).forEach(function (n) {
        t.cache[n] = {
          val: t.clone(e[n]),
          timestamp: Date.now()
        };
      });
    };
    e.prototype.formatParams = function (e, t) {
      var n = this;
      if (t === undefined) {
        t = false;
      }
      try {
        if (!e || Object.prototype.toString.call(e) !== "[object Object]") {
          return;
        }
        var r = {};
        for (var i in e) {
          if (typeof e[i] == "string" || typeof e[i] == "number" || Object.prototype.toString.call(e[i]).slice(8, -1) === "Array") {
            r[i] = e[i];
          }
        }
        var o = Object.keys(r);
        if (!o.length || !this.eventCheck.checkEventParams(r)) {
          return;
        }
        var a = Date.now();
        return o.filter(function (r) {
          var i = n.cache[r];
          if (t) {
            return !i;
          } else {
            return !i || !n.compare(i.val, e[r]) || !(a - i.timestamp < n.duration);
          }
        }).reduce(function (e, t) {
          e[t] = r[t];
          return e;
        }, {});
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.compare = function (e, t) {
      try {
        return JSON.stringify(e) === JSON.stringify(t);
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return false;
      }
    };
    e.prototype.clone = function (e) {
      try {
        return JSON.parse(JSON.stringify(e));
      } catch (t) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: t.message
        });
        return e;
      }
    };
    e.prototype.unReady = function () {};
    return e;
  }();
  var ey = function () {
    function e() {
      var e = this;
      this.setInterval = function () {
        e.clearIntervalFunc = m(function () {
          if (e.isSessionhasEvent) {
            e.endCurrentSession();
          }
        }, e.sessionInterval);
      };
      this.clearInterval = function () {
        if (e.clearIntervalFunc) {
          e.clearIntervalFunc();
        }
      };
    }
    e.prototype.apply = function (e, t) {
      var n = this;
      this.collect = e;
      if (!t.disable_heartbeat) {
        this.sessionInterval = 60000;
        this.startTime = 0;
        this.lastTime = 0;
        this.setInterval();
        var r = this.collect.Types;
        this.collect.on(r.SessionResetTime, function () {
          n.process();
        });
      }
    };
    e.prototype.endCurrentSession = function () {
      this.collect.event("_be_active", {
        start_time: this.startTime,
        end_time: this.lastTime,
        url: window.location.href,
        referrer: window.document.referrer,
        title: document.title || location.pathname
      });
      this.isSessionhasEvent = false;
      this.startTime = 0;
    };
    e.prototype.process = function () {
      if (!this.isSessionhasEvent) {
        this.isSessionhasEvent = true;
        this.startTime = +new Date();
      }
      var e = this.lastTime || +new Date();
      this.lastTime = +new Date();
      if (this.lastTime - e > this.sessionInterval) {
        this.clearInterval();
        this.endCurrentSession();
        this.setInterval();
      }
    };
    return e;
  }();
  var eb = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      var n = this;
      if (!t.channel_domain && !t.disable_track_event && !t.disable_sdk_monitor) {
        this.collect = e;
        this.config = t;
        this.url = e.configManager.getUrl("event");
        this.collect.on(e.Types.Ready, function () {
          n.sdkOnload();
        });
        this.collect.on(e.Types.SubmitError, function (e) {
          var t = e.type;
          var r = e.eventData;
          var i = e.errorCode;
          if (t === "f_data") {
            n.sdkError(r, i);
          }
        });
      }
    };
    e.prototype.sdkOnload = function () {
      var e = this;
      try {
        var t = this.collect.configManager.get();
        var n = t.header;
        var r = t.user;
        var i = n.app_id;
        var o = n.app_name;
        var a = n.sdk_version;
        var s = r.web_id;
        var u = {
          events: [{
            event: "onload",
            params: JSON.stringify({
              app_id: i,
              app_name: o || "",
              sdk_version: a,
              sdk_type: "npm",
              sdk_config: this.config,
              sdk_desc: "TOC",
              url: location.href
            }),
            local_time_ms: Date.now()
          }],
          user: {
            user_unique_id: s
          },
          header: {}
        };
        setTimeout(function () {
          e.collect.requestManager.useRequest({
            url: e.url,
            data: [u],
            timeout: 30000,
            app_key: "566f58151b0ed37e",
            forceXhr: true
          });
        }, 16);
      } catch (e) {}
    };
    e.prototype.sdkError = function (e, t) {
      var n = this;
      try {
        var r = e[0];
        var i = r.user;
        var o = r.header;
        var a = [];
        e.forEach(function (e) {
          e.events.forEach(function (e) {
            a.push(e);
          });
        });
        var s = {
          events: a.map(function (e) {
            return {
              event: "on_error",
              params: JSON.stringify({
                error_code: t,
                app_id: o.app_id,
                app_name: o.app_name || "",
                error_event: e.event,
                sdk_version: o.sdk_version,
                local_time_ms: e.local_time_ms,
                tea_event_index: Date.now(),
                params: e.params,
                header: JSON.stringify(o),
                user: JSON.stringify(i)
              }),
              local_time_ms: Date.now()
            };
          }),
          user: {
            user_unique_id: i.user_unique_id
          },
          header: {}
        };
        setTimeout(function () {
          n.collect.requestManager.useRequest({
            url: n.url,
            data: [s],
            timeout: 30000,
            app_key: "566f58151b0ed37e",
            forceXhr: true
          });
        }, 16);
      } catch (e) {}
    };
    return e;
  }();
  function e_(e, t = "list") {
    if (!e) {
      return false;
    }
    if (t && t === "list") {
      if (["LI", "TR", "DL"].includes(e.nodeName) || e.dataset && e.dataset.hasOwnProperty("teaIdx") || e.hasAttribute && e.hasAttribute("data-tea-idx")) {
        return true;
      }
    } else if (["A", "BUTTON"].includes(e.nodeName) || e.dataset && e.dataset.hasOwnProperty("teaContainer") || e.hasAttribute && e.hasAttribute("data-tea-container")) {
      return true;
    }
    return false;
  }
  function ew(e) {
    for (var t = e; t && !e_(t, "container");) {
      if (t.nodeName === "HTML" || t.nodeName === "BODY") {
        return e;
      }
      t = t.parentElement;
    }
    return t || e;
  }
  function eE(e) {
    if (!e) {
      return "";
    }
    var t = "";
    if (e.textContent) {
      t = e.textContent.trim();
    } else if (e.innerText) {
      t = e.innerText.trim();
    }
    if (e.tagName === "input" || e.tagName === "INPUT") {
      t = e.value || "";
    }
    return t;
  }
  function eS(e, t) {
    if (e.hasAttribute) {
      return e.hasAttribute(t);
    } else if (e.attributes) {
      return !!e.attributes[t] && !!e.attributes[t].specified;
    } else {
      return undefined;
    }
  }
  function ex(e, t) {
    if (typeof t == "string") {
      return eS(e, t);
    }
    if (f(t)) {
      var n = false;
      var r = 0;
      for (; r < t.length; r++) {
        if (eS(e, t[r])) {
          n = true;
          break;
        }
      }
      return n;
    }
  }
  function ek(e, t) {
    var n = {};
    if (typeof t == "string") {
      if (eS(e, t)) {
        n.attrs = e.getAttribute(t);
      }
    } else if (f(t)) {
      for (var r = 0; r < t.length; r++) {
        if (eS(e, t[r])) {
          n[t[r]] = e.getAttribute(t[r]);
        }
      }
    }
    return n;
  }
  function eO(e) {
    if (e.children.length) {
      var t = e.children;
      return ![].slice.call(t).some(function (e) {
        return e.children.length > 0;
      });
    }
    return true;
  }
  function eA(e) {
    if (e.tagName.toLowerCase() === "svg") {
      return true;
    }
    var t = e.parentElement;
    var n = false;
    while (t) {
      if (t.tagName.toLowerCase() === "svg") {
        t = null;
        n = true;
      } else {
        t = t.parentElement;
      }
    }
    return n;
  }
  var eT = function () {
    function e(e, t, n) {
      var r = this;
      this.statistics = false;
      this.pageView = false;
      this.clickEvent = function (e) {
        var t;
        var n;
        t = e.target;
        n = r.options;
        window.innerHeight;
        window.innerWidth;
        if (t.nodeType === 1 && (!!n.svg || !eA(t)) && !["HTML", "BODY"].includes(t.tagName.toUpperCase()) && t.style.display !== "none" && (e_(t, "container") || eO(t) || n.svg)) {
          r.eventHandel({
            eventType: "dom",
            eventName: "click"
          }, e);
        }
      };
      this.changeEvent = function (e) {
        r.eventHandel({
          eventType: "dom",
          eventName: "change"
        }, e);
      };
      this.submitEvent = function (e) {
        r.eventHandel({
          eventType: "dom",
          eventName: "submit"
        }, e);
      };
      this.getPageViewEvent = function (e, t) {
        if (t && t === "pushState") {
          r.eventHandel({
            eventType: "dom",
            eventName: "beat"
          }, i({
            beat_type: 0
          }, e));
        }
        r.eventHandel({
          eventType: "dom",
          eventName: "page_view"
        }, e);
      };
      this.getPageLoadEvent = function (e) {
        r.eventHandel({
          eventType: "dom",
          eventName: "page_statistics"
        }, {
          lcp: e
        });
      };
      this.config = n.getConfig().eventConfig;
      this.collect = t;
      this.options = e;
      this.beatTime = e.beat;
      this.domContainer = e.container || document;
    }
    e.prototype.init = function (e) {
      this.eventHandel = e;
      var t = this.config.mode;
      this.addListener(t);
    };
    e.prototype.addListener = function (e) {
      var t = this;
      if (e === "proxy-capturing") {
        if (this.config.click) {
          if (f(this.domContainer)) {
            this.domContainer.forEach(function (e) {
              e.addEventListener("click", t.clickEvent, true);
            });
          } else {
            this.domContainer.addEventListener("click", this.clickEvent, true);
          }
        }
        if (this.config.pv) {
          this.collect.on("route-change", function (e) {
            var n = e.config;
            var r = e.name;
            t.getPageViewEvent(n, r);
            t.pageView = true;
          });
          var n = setTimeout(function () {
            if (!t.pageView) {
              t.getPageViewEvent(t.getDefaultConfig());
              t.pageView = true;
              clearTimeout(n);
            }
          }, 2000);
        }
        if (this.config.beat) {
          try {
            if (document.readyState === "complete") {
              this.beatEvent(this.beatTime);
            } else {
              window.addEventListener("load", function () {
                t.beatEvent(t.beatTime);
              });
            }
            var r = 0;
            var i = null;
            window.addEventListener("scroll", function () {
              clearTimeout(i);
              i = setTimeout(o, 500);
              r = document.documentElement.scrollTop || document.body.scrollTop;
            });
            function o() {
              if ((document.documentElement.scrollTop || document.body.scrollTop) == r) {
                t.eventHandel({
                  eventType: "dom",
                  eventName: "beat"
                }, {
                  beat_type: 1
                });
              }
            }
          } catch (e) {}
          try {
            var a = window.performance && window.performance.getEntriesByType("paint");
            if (a && a.length) {
              new PerformanceObserver(function (e) {
                var n = e.getEntries();
                var r = n[n.length - 1];
                var i = r.renderTime || r.loadTime;
                if (!t.statistics) {
                  t.getPageLoadEvent(i);
                  t.statistics = true;
                }
              }).observe({
                entryTypes: ["largest-contentful-paint"]
              });
              var s = setTimeout(function () {
                if (!t.statistics) {
                  t.getPageLoadEvent(a[0].startTime || 0);
                  t.statistics = true;
                  clearTimeout(s);
                }
              }, 2000);
            } else {
              this.getPageLoadEvent(0);
            }
          } catch (e) {
            this.getPageLoadEvent(0);
          }
        }
      }
    };
    e.prototype.removeListener = function () {
      var e = this;
      if (f(this.domContainer)) {
        this.domContainer.forEach(function (t) {
          t.removeEventListener("click", e.clickEvent, true);
        });
      } else {
        this.domContainer.removeEventListener("click", this.clickEvent, true);
      }
    };
    e.prototype.beatEvent = function (e) {
      var t;
      var n = this;
      try {
        this.eventHandel({
          eventType: "dom",
          eventName: "beat"
        }, {
          beat_type: 3
        });
        if (this.beatTime) {
          t = setInterval(function () {
            n.eventHandel({
              eventType: "dom",
              eventName: "beat"
            }, {
              beat_type: 2
            });
          }, e);
        }
        p(function () {
          n.eventHandel({
            eventType: "dom",
            eventName: "beat",
            eventSend: "becon"
          }, {
            beat_type: 0
          });
          if (n.beatTime) {
            clearInterval(t);
          }
        });
      } catch (e) {}
    };
    e.prototype.getDefaultConfig = function () {
      return {
        is_html: 1,
        url: location.href,
        referrer: document.referrer,
        page_key: location.href,
        refer_page_key: document.referrer,
        page_title: document.title || location.pathname,
        page_manual_key: "",
        refer_page_manual_key: "",
        refer_page_title: "",
        page_path: location.pathname,
        page_host: location.host
      };
    };
    return e;
  }();
  var eR = {
    eventConfig: {
      mode: "proxy-capturing",
      submit: false,
      click: true,
      change: false,
      pv: true,
      beat: true,
      hashTag: false,
      impr: false
    },
    scoutConfig: {
      mode: "xpath"
    }
  };
  var eC = function () {
    function e(e, t) {
      this.config = e;
      this.config.eventConfig = Object.assign(this.config.eventConfig, t);
    }
    e.prototype.getConfig = function () {
      return this.config;
    };
    e.prototype.setConfig = function (e) {
      return this.config = e;
    };
    return e;
  }();
  function eM(e, t, n, r, o) {
    return i({
      event: e
    }, function (e, t, n, r) {
      var i;
      var o;
      var a;
      var s;
      var u;
      var c;
      var l;
      var f;
      var h = {};
      var d = function (e) {
        if (e) {
          var t = e.getBoundingClientRect();
          var n = t.width;
          var r = t.height;
          return {
            left: t.left,
            top: t.top,
            element_width: n,
            element_height: r
          };
        }
      }(t);
      if ((i = e) === undefined) {
        i = {};
      }
      if ((o = d) === undefined) {
        o = {};
      }
      a = i.clientX;
      s = i.clientY;
      var p = {
        touch_x: Math.floor(a - (u = o.left) >= 0 ? a - u : 0),
        touch_y: Math.floor(s - (c = o.top) >= 0 ? s - c : 0)
      };
      var g = d.element_width;
      var v = d.element_height;
      var m = p.touch_x;
      var y = p.touch_y;
      var b = function (e) {
        var t = [];
        if (!e) {
          return {
            element_path: "",
            positions: []
          };
        }
        while (e.parentElement !== null) {
          t.push(e);
          e = e.parentElement;
        }
        var n = [];
        var r = [];
        t.forEach(function (e) {
          var t = function (e) {
            if (e === null) {
              return {
                str: "",
                index: 0
              };
            }
            var t = 0;
            var n = e.parentElement;
            if (n) {
              var r = n.children;
              var i = 0;
              for (; i < r.length && r[i] !== e; i++) {
                if (r[i].nodeName === e.nodeName) {
                  t++;
                }
              }
            }
            return {
              str: [e.nodeName.toLowerCase(), e_(e, "list") ? "[]" : ""].join(""),
              index: t
            };
          }(e);
          var i = t.str;
          var o = t.index;
          n.unshift(i);
          r.unshift(o);
        });
        return {
          element_path: "/" + n.join("/"),
          positions: r
        };
      }(t);
      var _ = b.element_path;
      var w = b.positions;
      l = ew(t);
      f = [];
      (function e(t) {
        var n;
        n = "";
        if (t.nodeType === 3) {
          n = t.textContent.trim();
        } else if (t.dataset && t.dataset.hasOwnProperty("teaTitle")) {
          n = t.getAttribute("data-tea-title");
        } else if (t.hasAttribute("ata-tea-title")) {
          n = t.getAttribute("data-tea-title");
        } else if (t.hasAttribute("title")) {
          n = t.getAttribute("title");
        } else if (t.nodeName === "INPUT" && ["button", "submit"].includes(t.getAttribute("type"))) {
          n = t.getAttribute("value");
        } else if (t.nodeName === "IMG" && t.getAttribute("alt")) {
          n = t.getAttribute("alt");
        }
        var r = n.slice(0, 200);
        if (r && f.indexOf(r) === -1) {
          f.push(r);
        }
        if (t.childNodes.length > 0) {
          var i = t.childNodes;
          var o = 0;
          for (; o < i.length; o++) {
            if (i[o].nodeType !== 8) {
              e(i[o]);
            }
          }
        }
      })(l);
      var E = f;
      var S = window.performance.timing.navigationStart;
      var x = Date.now() - S;
      var k = w.map(function (e) {
        return "" + e;
      });
      var O = null;
      if (window.TEAVisualEditor && window.TEAVisualEditor.getOriginXpath) {
        O = window.TEAVisualEditor.getOriginXpath({
          xpath: _,
          positions: k
        });
      }
      h.element_path = O && O.xpath || _;
      h.positions = O && O.positions || k;
      if (r && !r.text) {
        h.texts = E;
        h.element_title = eE(t);
      }
      h.element_id = t.getAttribute("id") || "";
      h.element_class_name = t.getAttribute("class") || "";
      h.element_type = t.nodeType;
      h.element_width = Math.floor(g);
      h.element_height = Math.floor(v);
      h.touch_x = m;
      h.touch_y = y;
      h.page_manual_key = "";
      h.elememt_manual_key = "";
      h.since_page_start_ms = x;
      h.page_start_ms = S;
      h.page_path = location.pathname;
      h.page_host = location.host;
      if (n.track_attr && ex(t, n.track_attr)) {
        var A = ek(t, n.track_attr);
        for (var T in A) {
          h[T] = A[T];
        }
      }
      var R = ew(t);
      if (R.tagName === "A") {
        h.href = R.getAttribute("href");
      }
      if (t.tagName === "IMG") {
        h.src = t.getAttribute("src");
      }
      return h;
    }(t, n, r, o), {
      is_html: 1,
      page_key: window.location.href,
      page_title: document.title
    });
  }
  var eP = function () {
    function e(e, t) {
      this.ignore = {
        text: false
      };
      this.initConfig = e;
      this.options = t;
      this.eventName = t && t.custom === "tea" ? {
        click: "__bav_click",
        page: "__bav_page",
        beat: "__bav_beat",
        static: "__bav_page_statistics",
        exposure: "__bav_page_exposure"
      } : {
        click: "bav2b_click",
        page: "bav2b_page",
        beat: "bav2b_beat",
        static: "bav2b_page_statistics",
        exposure: "bav2b_exposure"
      };
      if (t && t.text === false) {
        this.ignore.text = true;
      }
      if (t && t.exposure && t.exposure.eventName) {
        this.eventName.exposure = t.exposure.eventName;
      }
    }
    e.prototype.handleEvent = function (e, t) {
      try {
        if (function (e) {
          for (var t = e; t && t.parentNode;) {
            if (t.hasAttribute("data-tea-ignore")) {
              return true;
            }
            if (t.nodeName === "HTML" || t.nodeName === "body") {
              break;
            }
            t = t.parentNode;
          }
          return false;
        }(e.target)) {
          return null;
        }
        var n = "bav2b_click";
        switch (t) {
          case "click":
            n = this.eventName.click;
            return eM(n, e, e.target, this.options, this.ignore);
          case "exposure":
            n = this.eventName.exposure;
            return eM(n, e, e.target, this.options, this.ignore);
          case "change":
            return i({}, eM(n = "bav2b_change", e, e.target, this.options), function (e, t) {
              try {
                if (e === "bav2b_change") {
                  if (t.hasAttribute("data-tea-track")) {
                    return {
                      value: t.value
                    };
                  } else {
                    return {};
                  }
                }
              } catch (e) {
                return {};
              }
            }(n, e.target));
          case "submit":
            return eM(n = "bav2b_submit", e, e.target, this.options);
        }
      } catch (e) {
        return null;
      }
    };
    e.prototype.handleViewEvent = function (e) {
      e.event = this.eventName.page;
      e.page_title = document.title;
      e.page_total_width = window.innerWidth;
      e.page_total_height = window.innerHeight;
      try {
        var t = window.sessionStorage.getItem("_tea_cache_duration");
        if (t) {
          var n = JSON.parse(t);
          e.refer_page_duration_ms = n ? n.duration : "";
        }
        e.scroll_width = document.documentElement.scrollLeft ? document.documentElement.scrollLeft + window.innerWidth : window.innerWidth;
        e.scroll_height = document.documentElement.scrollTop ? document.documentElement.scrollTop + window.innerHeight : window.innerHeight;
        e.page_start_ms = window.performance.timing.navigationStart;
      } catch (e) {}
      return e;
    };
    e.prototype.handleStatisticsEvent = function (e) {
      var t = {
        event: this.eventName.static,
        is_html: 1,
        page_key: location.href,
        refer_page_key: document.referrer || "",
        page_title: document.title,
        page_manual_key: this.initConfig.autotrack.page_manual_key || "",
        refer_page_manual_key: ""
      };
      try {
        var n = e.lcp;
        var r = window.performance.timing;
        var i = r.loadEventEnd - r.navigationStart;
        t.page_init_cost_ms = parseInt(n || (i > 0 ? i : 0));
        t.page_start_ms = r.navigationStart;
      } catch (e) {}
      return t;
    };
    e.prototype.handleBeadtEvent = function (e) {
      e.event = this.eventName.beat;
      e.page_key = window.location.href;
      e.is_html = 1;
      e.page_title = document.title;
      e.page_manual_key = this.initConfig.autotrack.page_manual_key || "";
      try {
        e.page_viewport_width = window.innerWidth;
        e.page_viewport_height = window.innerHeight;
        e.page_total_width = document.documentElement.scrollWidth;
        e.page_total_height = document.documentElement.scrollHeight;
        e.scroll_width = document.documentElement.scrollLeft + window.innerWidth;
        e.scroll_height = document.documentElement.scrollTop + window.innerHeight;
        e.since_page_start_ms = Date.now() - window.performance.timing.navigationStart;
        e.page_start_ms = window.performance.timing.navigationStart;
      } catch (e) {}
      return e;
    };
    return e;
  }();
  var eD = function () {
    function e(e) {
      this.collect = e;
      this.eventNameList = ["report_click_event", "report_change_event", "report_submit_event", "report_exposure_event", "report_page_view_event", "report_page_statistics_event", "report_beat_event"];
    }
    e.prototype.send = function (e, t) {
      var n = e.eventSend;
      var r = t.event;
      delete t.event;
      if (n && n === "becon") {
        this.collect.beconEvent(r, t);
      } else {
        this.collect.event(r, t);
      }
    };
    e.prototype.get = function (e, t) {
      fetch(e, Object.assign({
        headers: {
          "content-type": "application/json"
        },
        method: "GET"
      }, t));
    };
    e.prototype.post = function (e, t) {
      fetch(e, Object.assign({
        headers: {
          "content-type": "application/json"
        },
        method: "POST"
      }, t));
    };
    return e;
  }();
  var ej = "_TEA_VE_OPEN";
  var eI = "_TEA_VE_APIHOST";
  var eN = "lang";
  var eL = "_VISUAL_EDITOR_V";
  var eB = "_VISUAL_EDITOR_U";
  function eZ() {
    try {
      var e = window.TEAVisualEditor.lang = window.TEAVisualEditor.lang || x.get(eN);
      var t = window.TEAVisualEditor.__editor_ajax_domain = window.TEAVisualEditor.__editor_ajax_domain || x.get(eI);
      var n = window.TEAVisualEditor.__editor_verison = window.TEAVisualEditor.__editor_verison || x.get(eL);
      var r = window.TEAVisualEditor.__editor_url = window.TEAVisualEditor.__editor_url || x.get(eB);
      var i = +new Date();
      var o = new Date(i + 1800000);
      x.set(ej, "1", {
        expires: o
      });
      x.set(eI, t, {
        expires: o
      });
      x.set(eB, r, {
        expires: o
      });
      x.set(eN, e, {
        expires: o
      });
      x.set(eL, n || "", {
        expires: o
      });
    } catch (e) {}
  }
  var eU = false;
  function ez(e) {
    var t = e.event;
    var n = e.editorUrl;
    var r = e.autoTrackInstance;
    if (!eU) {
      eU = true;
      g(n, function () {
        eo(t, "editorScriptloadSuccess");
        r.destroy();
      }, function () {
        if (t) {
          eo(t, "editorScriptloadError");
        }
        eU = false;
      });
    }
  }
  var eF;
  var eH;
  var eG;
  var eV;
  var e$;
  var eW = function () {
    function e(e) {
      this._instance = null;
      this._intersection = e;
      this.init();
    }
    e.prototype.init = function () {
      var e = this;
      this._instance = new MutationObserver(function (t) {
        t.forEach(function (t) {
          if (t.type === "attributes") {
            e.attributeChangeObserve(t);
          }
          if (t.type === "childList") {
            e.modifyNodeObserve(t);
          }
        });
      });
      this._instance.observe(document.body, {
        childList: true,
        attributes: true,
        subtree: true,
        attributeOldValue: false
      });
    };
    e.prototype.attributeChangeObserve = function (e) {
      if (e.target.hasAttribute("data-exposure")) {
        this.exposureAdd(e, "mutation");
      } else {
        this.exposureRemove(e);
      }
    };
    e.prototype.modifyNodeObserve = function (e) {
      var t = this;
      Array.prototype.forEach.call(e.addedNodes, function (e) {
        if (e.nodeType === 1 && e.hasAttribute("data-exposure")) {
          t.exposureAdd(e, "intersect");
        }
        t.mapChild(e, t.exposureAdd);
      });
      Array.prototype.forEach.call(e.removedNodes, function (e) {
        if (e.nodeType === 1 && e.hasAttribute("data-exposure")) {
          t.exposureRemove(e);
        }
        t.mapChild(e, t.exposureRemove);
      });
    };
    e.prototype.mapChild = function (e, t) {
      var n = this;
      if (e.nodeType === 1 && e.children.length) {
        Array.prototype.forEach.call(e.children, function (e) {
          if (e.nodeType === 1 && e.hasAttribute("data-exposure")) {
            t(e);
          }
          n.mapChild(e, t);
        });
      }
    };
    e.prototype.exposureAdd = function (e, t) {
      this._intersection.exposureAdd(e, t);
    };
    e.prototype.exposureRemove = function (e) {
      this._intersection.exposureRemove(e);
    };
    e._exposure_observer = null;
    return e;
  }();
  var eq = function () {
    function e(t, n) {
      this.count = 1;
      this.instance = this.buildObserver();
      this.observeMap = e._observer_map;
      if (t.autotrack.exposure.ratio) {
        this.Ratio = t.autotrack.exposure.ratio;
      } else if (t.autotrack.exposure.ratio === 0) {
        this.Ratio = 0;
      } else {
        this.Ratio = 0.5;
      }
      this.EventHandle = n;
    }
    e.prototype.buildObserver = function () {
      var t = this;
      if (!e._observer_instance) {
        if (IntersectionObserver) {
          e._observer_instance = new IntersectionObserver(function (e) {
            e.forEach(function (e) {
              if (t.observeMap.get(e.target._observeId)) {
                t.exposureEvent(e);
              }
            });
          }, {
            threshold: [0.01, 0.25, 0.5, 0.75, 1]
          });
        }
        return e._observer_instance;
      }
    };
    e.prototype.exposureAdd = function (e, t) {
      var n = e;
      if (t === "mutation") {
        n = e.target;
      }
      var r = n._observeId;
      if (r || this.observeMap.has(r)) {
        if (n.visible === false) {
          var i = n.getBoundingClientRect();
          var o = i.top;
          var a = i.left;
          var s = i.right;
          var u = i.bottom;
          if (o >= 0 && u <= window.innerHeight && a >= 0 && s <= window.innerWidth) {
            n.visible = true;
            this.EventHandle({
              eventType: "dom",
              eventName: "exposure"
            }, e);
          }
        }
      } else {
        n._observeId = this.count;
        n.visible = false;
        this.observeMap.set(this.count, n);
        this.observe(n);
        this.count++;
      }
    };
    e.prototype.exposureRemove = function (e) {
      if (this.observeMap.has(e._observeId)) {
        this.observeMap.delete(e._observeId);
        this.unobserve(e);
      }
    };
    e.prototype.exposureEvent = function (e) {
      if (e.intersectionRatio >= this.Ratio && e.isIntersecting) {
        if (e.target.style.opacity !== "0" && e.target.style.visibility !== "hidden" && e.target.visible !== true) {
          e.target.visible = true;
          this.EventHandle({
            eventType: "dom",
            eventName: "exposure"
          }, e);
        }
      } else {
        e.target.visible = false;
      }
    };
    e.prototype.observe = function (e) {
      this.instance.observe(e);
    };
    e.prototype.unobserve = function (e) {
      this.instance.unobserve(e);
    };
    e._observer_instance = null;
    e._observer_map = new Map();
    return e;
  }();
  var eK = function () {
    function e(e, t) {
      if (e.autotrack && e.autotrack.exposure) {
        this._intersection = new eq(e, t);
        this._observer = new eW(this._intersection);
        this.initObserver();
      }
    }
    e.prototype.initObserver = function () {
      var e = this;
      Array.prototype.forEach.call(document.querySelectorAll("[data-exposure]"), function (t) {
        e._intersection.exposureAdd(t, "intersect");
      });
    };
    return e;
  }();
  var eJ = {
    hashTag: false,
    impr: false
  };
  var eX = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      this.autoTrackStart = false;
      this.collect = e;
      this.config = t;
      if (t.autotrack) {
        var n = e.Types;
        if (!t.autotrack || !t.autotrack.collect_url || !!t.autotrack.collect_url()) {
          this.ready(n.Autotrack);
          this.collect.emit(n.AutotrackReady);
        }
      }
    };
    e.prototype.ready = function (e) {
      this.collect.set(e);
      var t = this.config.autotrack;
      t = Object.assign(eJ, t = typeof t == "object" ? t : {});
      this.destroyed = false;
      this.options = t;
      this.Config = new eC(eR, this.options);
      this.Exposure = new eK(this.config, this.handle.bind(this));
      this.Listener = new eT(t, this.collect, this.Config);
      this.EventHandle = new eP(this.config, t);
      this.Request = new eD(this.collect);
      this.autoTrackStart = true;
      this.init();
      (function (e, t) {
        window.TEAVisualEditor = window.TEAVisualEditor || {};
        var n = "";
        var r = "https://lf-cdn-tos.bytescm.com/obj/static/log-sdk/collect/visual-editor-rangers.js?query=" + Date.now();
        window.TEAVisualEditor.appId = t.app_id;
        var i = t.channel_domain;
        var o = "";
        ei(["*"]);
        if (i) {
          var a;
          var s = "";
          try {
            var u = window.performance.getEntriesByType("resource");
            if (u && u.length && (u.forEach(function (e) {
              if (e.initiatorType === "script" && e.name && e.name.indexOf("collect") !== -1) {
                s = e.name;
              }
            }), s && (a = s.split("/")) && a.length)) {
              o = "https:/";
              for (var c = 2; c < a.length && c !== a.length - 1; c++) {
                o = o + "/" + a[c];
              }
              if (o && o.indexOf("/5.0")) {
                o = o.split("/5.0")[0] || o;
              }
            }
          } catch (e) {}
        }
        eu(t, j);
        if (x.get(ej) === "1") {
          var l = function () {
            var e = x.get(eI);
            try {
              e = JSON.parse(e);
            } catch (e) {}
            return e;
          }();
          var f = "";
          if (l) {
            window.TEAVisualEditor.__editor_ajax_domain = l;
            f = x.get(eB);
          }
          ez({
            event: null,
            editorUrl: f || r,
            autoTrackInstance: e
          });
          eZ();
        } else {
          try {
            ea("tea:openVisualEditor", function (t) {
              var a = t.data;
              if (typeof t.data == "string") {
                try {
                  a = JSON.parse(t.data);
                } catch (e) {
                  a = undefined;
                }
              }
              if (a) {
                var s = a.referrer;
                var u = a.lang;
                if (s) {
                  window.TEAVisualEditor.__editor_ajax_domain = s;
                }
                n = r;
                if (i) {
                  var c = a.version;
                  n = o ? "" + o + (c ? "/visual-editor-rangers-v" + c : "/visual-editor-rangers-v1.0.0") + ".js" : r;
                  window.TEAVisualEditor.__editor_verison = c;
                }
                window.TEAVisualEditor.__editor_url = n;
                window.TEAVisualEditor.lang = u;
                ez({
                  event: t,
                  editorUrl: n,
                  autoTrackInstance: e
                });
                eZ();
              }
            });
            window.TEAVisualEditor.openAutotrackEditor = function () {
              ez({
                event: null,
                editorUrl: window.TEAVisualEditor.__editor_url,
                autoTrackInstance: e
              });
            };
          } catch (e) {}
        }
        try {
          ea("tea:openHeatMapCore", function (n) {
            var r = n.data.app_id;
            if (!r || r === t.app_id) {
              ez({
                event: n,
                editorUrl: "https://lf-cdn-tos.bytescm.com/obj/static/log-sdk/collect/heatmap-core.js?query=" + Date.now(),
                autoTrackInstance: e
              });
            }
          });
        } catch (e) {}
      })(this, this.config);
    };
    e.prototype.init = function () {
      this.Listener.init(this.handle.bind(this));
      try {
        if (this.collect.loadType === "base") {
          (window.opener || window.parent).postMessage("[tea-sdk]ready", "*");
        }
      } catch (e) {}
    };
    e.prototype.handle = function (e, t) {
      if (e.eventType === "dom") {
        this.handleDom(e, t);
      }
    };
    e.prototype.handleDom = function (e, t) {
      try {
        var n = e.eventName;
        if (n === "click" || n === "exposure" || n === "change" || n === "submit") {
          var r = this.EventHandle.handleEvent(t, n);
          if (r !== null) {
            this.Request.send({
              eventType: "custom",
              eventName: "report_" + n + "_event",
              extra: {
                methods: "GET"
              }
            }, r);
          }
        } else if (n === "page_view" || n === "page_statistics") {
          var i = undefined;
          i = n === "page_view" ? this.EventHandle.handleViewEvent(t) : this.EventHandle.handleStatisticsEvent(t);
          this.Request.send({
            eventType: "custom",
            eventName: "report_${eventName}_event",
            extra: {
              methods: "GET"
            }
          }, i);
        } else if (n === "beat") {
          var o = this.EventHandle.handleBeadtEvent(t);
          var a = e.eventSend;
          this.Request.send({
            eventType: "custom",
            eventName: "report_${eventName}_event",
            extra: {
              methods: "GET"
            },
            eventSend: a
          }, o);
        }
      } catch (e) {}
    };
    e.prototype.destroy = function () {
      if (this.autoTrackStart) {
        this.autoTrackStart = false;
        this.Listener.removeListener();
      }
    };
    return e;
  }();
  (r = e$ ||= {}).Net = "net";
  r.FailNet = "f_net";
  r.FailData = "f_data";
  var eY = {
    pv: ["predefine_pageview"],
    sdk: ["_be_active", "predefine_page_alive", "predefine_page_close", "__profile_set", "__profile_set_once", "__profile_increment", "__profile_unset", "__profile_append"],
    autotrack: ["bav2b_click", "bav2b_page", "bav2b_beat", "bav2b_page_statistics", "__bav_click", "__bav_page", "__bav_beat", "__bav_page_statistics"]
  };
  var eQ = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      var n = this;
      if (t.app_id && t.enable_tracer && !t.disable_track_event) {
        this.limit = {
          pv: 1,
          sdk: 3,
          autotrack: 3,
          log: 3
        };
        this.errorCode = {
          f_net: 0,
          f_data: 0
        };
        this.tracerCache = new Map();
        this.collect = e;
        this.appid = t.app_id;
        this.reportUrl = e.configManager.getUrl("event");
        var r = this.collect.Types;
        this.collect.on(r.Event, function () {
          n.addCount("log");
        });
        this.collect.on(r.SubmitError, function (e) {
          var t = e.type;
          var r = e.eventDate;
          var i = e.errorCode;
          var o = e.response;
          n.addErrorCount(r, t, i, o);
        });
        this.listener();
        this.collect.emit(r.TracerReady);
      }
    };
    e.prototype.addCount = function (e, t = "net", n = 1) {
      try {
        this.tracerCache ||= new Map();
        var r = undefined;
        if (this.tracerCache.has(e)) {
          if ((i = this.tracerCache.get(e)).has(t)) {
            r = i.get(t).params.count;
            r++;
            i.set(t, this.processTracer(r, e, t));
          } else {
            r = n;
            i.set(t, this.processTracer(n, e, t));
          }
        } else {
          var i = new Map();
          r = n;
          i.set(t, this.processTracer(n, e, t));
          this.tracerCache.set(e, i);
        }
        if (t === "net" && r >= this.limit[e]) {
          this.report(false);
        }
      } catch (e) {}
    };
    e.prototype.addErrorCount = function (e, t, n, r) {
      var i = this;
      try {
        if (e && e.length) {
          var o = e[0].events;
          if (o && o.length) {
            if (t === "f_data") {
              if (r && r.hasOwnProperty("sc")) {
                this.addCount("log", t, o.length - r.sc);
              } else {
                this.addCount("log", t, o.length);
              }
              this.errorCode[t] = n;
            } else {
              o.forEach(function (e) {
                var r = "log";
                for (var o in eY) {
                  if (eY[o].indexOf(e.event) !== -1) {
                    r = o;
                    break;
                  }
                }
                i.addCount(r, t, 1);
                i.errorCode[t] = n;
              });
            }
          }
        }
      } catch (e) {}
    };
    e.prototype.report = function (e) {
      if (this.tracerCache) {
        var t = [];
        this.tracerCache.forEach(function (e) {
          e.forEach(function (e) {
            t.push(e);
          });
        });
        if (t && t.length) {
          this.sendTracer(t, e);
        }
      }
    };
    e.prototype.sendTracer = function (e, t) {
      try {
        var n = this.collect.eventManager.merge(e);
        this.collect.requestManager.useRequest({
          url: this.reportUrl,
          data: n,
          useBeacon: t
        });
        this.tracerCache = null;
      } catch (e) {}
    };
    e.prototype.processTracer = function (e, t, n) {
      var r = {
        count: e,
        state: n,
        key: t,
        params_for_special: "applog_trace",
        aid: this.appid,
        platform: "web",
        _staging_flag: 1,
        sdk_version: j
      };
      if (n === "f_net" || n === "f_data") {
        r.errorCode = this.errorCode[n];
      }
      var i = this.collect.processEvent("applog_trace", r);
      if (i && i.event) {
        delete i.is_bav;
        return i;
      }
    };
    e.prototype.listener = function () {
      var e = this;
      document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") {
          e.leavePage();
        }
      });
      p(function () {
        e.leavePage();
      });
    };
    e.prototype.leavePage = function () {
      this.report(true);
    };
    return e;
  }();
  var e0 = function () {
    function e() {
      this.retryWaitTime = 3000;
      this.retryStatus = false;
      this.retryCacheStatus = false;
    }
    e.prototype.apply = function (e, t) {
      var n = this;
      if (t.enable_storage && !t.disable_storage && (this.collect = e, this.config = t, !this.collect.destroy)) {
        var r = e.Types;
        var i = e.adapters.storage;
        this.storage = new i(false);
        this.eventUrl = this.collect.configManager.getUrl("event");
        this.eventKey = "__tea_cache_events_" + t.app_id;
        this.storageNum = t.storage_num || 50;
        this.retryNum = t.retry_num || 3;
        this.retryInterval = 1000;
        e.on(r.SubmitError, function (e) {
          if (e.type !== "f_data") {
            n.storeData(e);
          }
        });
        e.on(r.Ready, function () {
          n.checkStorage();
        });
      }
    };
    e.prototype.retryRightNow = function (e) {
      var t = this;
      if (this.retryStatus) {
        this.errorCache.push(e);
      } else {
        var n = 0;
        this.retryStatus = true;
        var r = setInterval(function () {
          if (n === 3) {
            t.storeData(t.errorCache);
            t.retryStatus = false;
            clearInterval(r);
            return;
          }
          var i = e.eventData;
          t.fetchData(i, function () {
            t.retryStatus = false;
            clearInterval(r);
            if (t.retryCacheStatus) {
              t.errorCache.splice(0, 1);
            }
            if (t.errorCache.length) {
              t.retryCacheStatus = true;
              t.retryRightNow(t.errorCache[0]);
            }
          }, function () {
            n++;
          });
        }, this.retryInterval);
      }
    };
    e.prototype.storeData = function (e) {
      var t = this.storage.getItem(this.eventKey);
      var n = e.eventData;
      if (Object.keys(t).length !== this.storageNum) {
        t[Date.now()] = n;
        this.storage.setItem(this.eventKey, t);
      }
    };
    e.prototype.checkStorage = function () {
      var e = this;
      try {
        if (!window.navigator.onLine) {
          return;
        }
        var t = this.storage.getItem(this.eventKey);
        if (!t || !Object.keys(t).length) {
          return;
        }
        var n = {
          events: [{
            event: "ontest",
            params: {
              app_id: this.config.app_id
            },
            local_time_ms: Date.now()
          }],
          user: {
            user_unique_id: this.collect.configManager.get("web_id")
          },
          header: {}
        };
        this.fetchData([n], function () {
          var n = JSON.parse(JSON.stringify(t));
          function r(r) {
            e.fetchData(t[r], function () {
              delete n[r];
              e.storage.setItem(e.eventKey, n);
            }, function () {}, false);
          }
          for (var i in t) {
            r(i);
          }
        }, function () {}, true);
      } catch (e) {}
    };
    e.prototype.fetchData = function (e, t, n, r) {
      this.collect.requestManager.useRequest({
        url: this.eventUrl,
        data: e,
        timeout: 30000,
        success: t,
        fail: n,
        app_key: r ? "566f58151b0ed37e" : ""
      });
    };
    return e;
  }();
  var e1 = w(function (e, t) {
    var n;
    var r;
    var i;
    var o;
    var a;
    var s;
    var u;
    var c;
    var l;
    var f;
    var h;
    var d;
    var p;
    var g;
    var v;
    var m;
    var y;
    var b;
    var _;
    var w;
    var E;
    n = "millisecond";
    r = "second";
    i = "minute";
    o = "hour";
    a = "week";
    s = "month";
    u = "quarter";
    c = "year";
    l = "date";
    f = "Invalid Date";
    h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
    d = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
    p = function (e, t, n) {
      var r = String(e);
      if (!r || r.length >= t) {
        return e;
      } else {
        return "" + Array(t + 1 - r.length).join(n) + e;
      }
    };
    (v = {})[g = "en"] = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    };
    m = function (e) {
      return e instanceof w;
    };
    y = function (e, t, n) {
      var r;
      if (!e) {
        return g;
      }
      if (typeof e == "string") {
        if (v[e]) {
          r = e;
        }
        if (t) {
          v[e] = t;
          r = e;
        }
      } else {
        var i = e.name;
        v[i] = e;
        r = i;
      }
      if (!n && r) {
        g = r;
      }
      return r || !n && g;
    };
    b = function (e, t) {
      if (m(e)) {
        return e.clone();
      }
      var n = typeof t == "object" ? t : {};
      n.date = e;
      n.args = arguments;
      return new w(n);
    };
    (_ = {
      s: p,
      z: function (e) {
        var t = -e.utcOffset();
        var n = Math.abs(t);
        return (t <= 0 ? "+" : "-") + p(Math.floor(n / 60), 2, "0") + ":" + p(n % 60, 2, "0");
      },
      m: function e(t, n) {
        if (t.date() < n.date()) {
          return -e(n, t);
        }
        var r = (n.year() - t.year()) * 12 + (n.month() - t.month());
        var i = t.clone().add(r, s);
        var o = n - i < 0;
        var a = t.clone().add(r + (o ? -1 : 1), s);
        return +(-(r + (n - i) / (o ? i - a : a - i)) || 0);
      },
      a: function (e) {
        if (e < 0) {
          return Math.ceil(e) || 0;
        } else {
          return Math.floor(e);
        }
      },
      p: function (e) {
        return {
          M: s,
          y: c,
          w: a,
          d: "day",
          D: l,
          h: o,
          m: i,
          s: r,
          ms: n,
          Q: u
        }[e] || String(e || "").toLowerCase().replace(/s$/, "");
      },
      u: function (e) {
        return e === undefined;
      }
    }).l = y;
    _.i = m;
    _.w = function (e, t) {
      return b(e, {
        locale: t.$L,
        utc: t.$u,
        x: t.$x,
        $offset: t.$offset
      });
    };
    E = (w = function () {
      function e(e) {
        this.$L = y(e.locale, null, true);
        this.parse(e);
      }
      var t = e.prototype;
      t.parse = function (e) {
        this.$d = function (e) {
          var t = e.date;
          var n = e.utc;
          if (t === null) {
            return new Date(NaN);
          }
          if (_.u(t)) {
            return new Date();
          }
          if (t instanceof Date) {
            return new Date(t);
          }
          if (typeof t == "string" && !/Z$/i.test(t)) {
            var r = t.match(h);
            if (r) {
              var i = r[2] - 1 || 0;
              var o = (r[7] || "0").substring(0, 3);
              if (n) {
                return new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, o));
              } else {
                return new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, o);
              }
            }
          }
          return new Date(t);
        }(e);
        this.$x = e.x || {};
        this.init();
      };
      t.init = function () {
        var e = this.$d;
        this.$y = e.getFullYear();
        this.$M = e.getMonth();
        this.$D = e.getDate();
        this.$W = e.getDay();
        this.$H = e.getHours();
        this.$m = e.getMinutes();
        this.$s = e.getSeconds();
        this.$ms = e.getMilliseconds();
      };
      t.$utils = function () {
        return _;
      };
      t.isValid = function () {
        return this.$d.toString() !== f;
      };
      t.isSame = function (e, t) {
        var n = b(e);
        return this.startOf(t) <= n && n <= this.endOf(t);
      };
      t.isAfter = function (e, t) {
        return b(e) < this.startOf(t);
      };
      t.isBefore = function (e, t) {
        return this.endOf(t) < b(e);
      };
      t.$g = function (e, t, n) {
        if (_.u(e)) {
          return this[t];
        } else {
          return this.set(n, e);
        }
      };
      t.unix = function () {
        return Math.floor(this.valueOf() / 1000);
      };
      t.valueOf = function () {
        return this.$d.getTime();
      };
      t.startOf = function (e, t) {
        var n = this;
        var u = !!_.u(t) || t;
        var f = _.p(e);
        function h(e, t) {
          var r = _.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
          if (u) {
            return r;
          } else {
            return r.endOf("day");
          }
        }
        function d(e, t) {
          return _.w(n.toDate()[e].apply(n.toDate("s"), (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n);
        }
        var p = this.$W;
        var g = this.$M;
        var v = this.$D;
        var m = "set" + (this.$u ? "UTC" : "");
        switch (f) {
          case c:
            if (u) {
              return h(1, 0);
            } else {
              return h(31, 11);
            }
          case s:
            if (u) {
              return h(1, g);
            } else {
              return h(0, g + 1);
            }
          case a:
            var y = this.$locale().weekStart || 0;
            var b = (p < y ? p + 7 : p) - y;
            return h(u ? v - b : v + (6 - b), g);
          case "day":
          case l:
            return d(m + "Hours", 0);
          case o:
            return d(m + "Minutes", 1);
          case i:
            return d(m + "Seconds", 2);
          case r:
            return d(m + "Milliseconds", 3);
          default:
            return this.clone();
        }
      };
      t.endOf = function (e) {
        return this.startOf(e, false);
      };
      t.$set = function (e, t) {
        var a;
        var u = _.p(e);
        var f = "set" + (this.$u ? "UTC" : "");
        var h = ((a = {}).day = f + "Date", a[l] = f + "Date", a[s] = f + "Month", a[c] = f + "FullYear", a[o] = f + "Hours", a[i] = f + "Minutes", a[r] = f + "Seconds", a[n] = f + "Milliseconds", a)[u];
        var d = u === "day" ? this.$D + (t - this.$W) : t;
        if (u === s || u === c) {
          var p = this.clone().set(l, 1);
          p.$d[h](d);
          p.init();
          this.$d = p.set(l, Math.min(this.$D, p.daysInMonth())).$d;
        } else if (h) {
          this.$d[h](d);
        }
        this.init();
        return this;
      };
      t.set = function (e, t) {
        return this.clone().$set(e, t);
      };
      t.get = function (e) {
        return this[_.p(e)]();
      };
      t.add = function (e, t) {
        var n;
        var u = this;
        e = Number(e);
        var l = _.p(t);
        function f(t) {
          var n = b(u);
          return _.w(n.date(n.date() + Math.round(t * e)), u);
        }
        if (l === s) {
          return this.set(s, this.$M + e);
        }
        if (l === c) {
          return this.set(c, this.$y + e);
        }
        if (l === "day") {
          return f(1);
        }
        if (l === a) {
          return f(7);
        }
        var h = ((n = {})[i] = 60000, n[o] = 3600000, n[r] = 1000, n)[l] || 1;
        var d = this.$d.getTime() + e * h;
        return _.w(d, this);
      };
      t.subtract = function (e, t) {
        return this.add(e * -1, t);
      };
      t.format = function (e) {
        var t = this;
        var n = this.$locale();
        if (!this.isValid()) {
          return n.invalidDate || f;
        }
        var r = e || "YYYY-MM-DDTHH:mm:ssZ";
        var i = _.z(this);
        var o = this.$H;
        var a = this.$m;
        var s = this.$M;
        var u = n.weekdays;
        var c = n.months;
        function l(e, n, i, o) {
          return e && (e[n] || e(t, r)) || i[n].substr(0, o);
        }
        function h(e) {
          return _.s(o % 12 || 12, e, "0");
        }
        var p = n.meridiem || function (e, t, n) {
          var r = e < 12 ? "AM" : "PM";
          if (n) {
            return r.toLowerCase();
          } else {
            return r;
          }
        };
        var g = {
          YY: String(this.$y).slice(-2),
          YYYY: this.$y,
          M: s + 1,
          MM: _.s(s + 1, 2, "0"),
          MMM: l(n.monthsShort, s, c, 3),
          MMMM: l(c, s),
          D: this.$D,
          DD: _.s(this.$D, 2, "0"),
          d: String(this.$W),
          dd: l(n.weekdaysMin, this.$W, u, 2),
          ddd: l(n.weekdaysShort, this.$W, u, 3),
          dddd: u[this.$W],
          H: String(o),
          HH: _.s(o, 2, "0"),
          h: h(1),
          hh: h(2),
          a: p(o, a, true),
          A: p(o, a, false),
          m: String(a),
          mm: _.s(a, 2, "0"),
          s: String(this.$s),
          ss: _.s(this.$s, 2, "0"),
          SSS: _.s(this.$ms, 3, "0"),
          Z: i
        };
        return r.replace(d, function (e, t) {
          return t || g[e] || i.replace(":", "");
        });
      };
      t.utcOffset = function () {
        return -(Math.round(this.$d.getTimezoneOffset() / 15) * 15);
      };
      t.diff = function (e, t, n) {
        var l;
        var f = _.p(t);
        var h = b(e);
        var d = (h.utcOffset() - this.utcOffset()) * 60000;
        var p = this - h;
        var g = _.m(this, h);
        g = ((l = {})[c] = g / 12, l[s] = g, l[u] = g / 3, l[a] = (p - d) / 604800000, l.day = (p - d) / 86400000, l[o] = p / 3600000, l[i] = p / 60000, l[r] = p / 1000, l)[f] || p;
        if (n) {
          return g;
        } else {
          return _.a(g);
        }
      };
      t.daysInMonth = function () {
        return this.endOf(s).$D;
      };
      t.$locale = function () {
        return v[this.$L];
      };
      t.locale = function (e, t) {
        if (!e) {
          return this.$L;
        }
        var n = this.clone();
        var r = y(e, t, true);
        if (r) {
          n.$L = r;
        }
        return n;
      };
      t.clone = function () {
        return _.w(this.$d, this);
      };
      t.toDate = function () {
        return new Date(this.valueOf());
      };
      t.toJSON = function () {
        if (this.isValid()) {
          return this.toISOString();
        } else {
          return null;
        }
      };
      t.toISOString = function () {
        return this.$d.toISOString();
      };
      t.toString = function () {
        return this.$d.toUTCString();
      };
      return e;
    }()).prototype;
    b.prototype = E;
    [["$ms", n], ["$s", r], ["$m", i], ["$H", o], ["$W", "day"], ["$M", s], ["$y", c], ["$D", l]].forEach(function (e) {
      E[e[1]] = function (t) {
        return this.$g(t, e[0], e[1]);
      };
    });
    b.extend = function (e, t) {
      if (!e.$i) {
        e(t, w, b);
        e.$i = true;
      }
      return b;
    };
    b.locale = y;
    b.isDayjs = m;
    b.unix = function (e) {
      return b(e * 1000);
    };
    b.en = v[g];
    b.Ls = v;
    b.p = {};
    e.exports = b;
  });
  var e2 = w(function (e, t) {
    var n;
    var r;
    var i;
    var o;
    var a;
    var s;
    var u;
    var c;
    var l;
    var f;
    var h;
    var d;
    var p;
    i = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
    o = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    a = {
      years: 31536000000,
      months: 2592000000,
      days: 86400000,
      hours: 3600000,
      minutes: 60000,
      seconds: 1000,
      milliseconds: 1,
      weeks: 604800000
    };
    s = function (e) {
      return e instanceof p;
    };
    u = function (e, t, n) {
      return new p(e, n, t.$l);
    };
    c = function (e) {
      return r.p(e) + "s";
    };
    l = function (e) {
      return e < 0;
    };
    f = function (e) {
      if (l(e)) {
        return Math.ceil(e);
      } else {
        return Math.floor(e);
      }
    };
    h = function (e) {
      return Math.abs(e);
    };
    d = function (e, t) {
      if (e) {
        if (l(e)) {
          return {
            negative: true,
            format: "" + h(e) + t
          };
        } else {
          return {
            negative: false,
            format: "" + e + t
          };
        }
      } else {
        return {
          negative: false,
          format: ""
        };
      }
    };
    p = function () {
      function e(e, t, n) {
        var r = this;
        this.$d = {};
        this.$l = n;
        if (e === undefined) {
          this.$ms = 0;
          this.parseFromMilliseconds();
        }
        if (t) {
          return u(e * a[c(t)], this);
        }
        if (typeof e == "number") {
          this.$ms = e;
          this.parseFromMilliseconds();
          return this;
        }
        if (typeof e == "object") {
          Object.keys(e).forEach(function (t) {
            r.$d[c(t)] = e[t];
          });
          this.calMilliseconds();
          return this;
        }
        if (typeof e == "string") {
          var i = e.match(o);
          if (i) {
            var s = i.slice(2).map(function (e) {
              return Number(e);
            });
            this.$d.years = s[0];
            this.$d.months = s[1];
            this.$d.weeks = s[2];
            this.$d.days = s[3];
            this.$d.hours = s[4];
            this.$d.minutes = s[5];
            this.$d.seconds = s[6];
            this.calMilliseconds();
            return this;
          }
        }
        return this;
      }
      var t = e.prototype;
      t.calMilliseconds = function () {
        var e = this;
        this.$ms = Object.keys(this.$d).reduce(function (t, n) {
          return t + (e.$d[n] || 0) * a[n];
        }, 0);
      };
      t.parseFromMilliseconds = function () {
        var e = this.$ms;
        this.$d.years = f(e / 31536000000);
        e %= 31536000000;
        this.$d.months = f(e / 2592000000);
        e %= 2592000000;
        this.$d.days = f(e / 86400000);
        e %= 86400000;
        this.$d.hours = f(e / 3600000);
        e %= 3600000;
        this.$d.minutes = f(e / 60000);
        e %= 60000;
        this.$d.seconds = f(e / 1000);
        e %= 1000;
        this.$d.milliseconds = e;
      };
      t.toISOString = function () {
        var e = d(this.$d.years, "Y");
        var t = d(this.$d.months, "M");
        var n = +this.$d.days || 0;
        if (this.$d.weeks) {
          n += this.$d.weeks * 7;
        }
        var r = d(n, "D");
        var i = d(this.$d.hours, "H");
        var o = d(this.$d.minutes, "M");
        var a = this.$d.seconds || 0;
        if (this.$d.milliseconds) {
          a += this.$d.milliseconds / 1000;
        }
        var s = d(a, "S");
        var u = e.negative || t.negative || r.negative || i.negative || o.negative || s.negative;
        var c = i.format || o.format || s.format ? "T" : "";
        var l = (u ? "-" : "") + "P" + e.format + t.format + r.format + c + i.format + o.format + s.format;
        if (l === "P" || l === "-P") {
          return "P0D";
        } else {
          return l;
        }
      };
      t.toJSON = function () {
        return this.toISOString();
      };
      t.format = function (e) {
        var t = {
          Y: this.$d.years,
          YY: r.s(this.$d.years, 2, "0"),
          YYYY: r.s(this.$d.years, 4, "0"),
          M: this.$d.months,
          MM: r.s(this.$d.months, 2, "0"),
          D: this.$d.days,
          DD: r.s(this.$d.days, 2, "0"),
          H: this.$d.hours,
          HH: r.s(this.$d.hours, 2, "0"),
          m: this.$d.minutes,
          mm: r.s(this.$d.minutes, 2, "0"),
          s: this.$d.seconds,
          ss: r.s(this.$d.seconds, 2, "0"),
          SSS: r.s(this.$d.milliseconds, 3, "0")
        };
        return (e || "YYYY-MM-DDTHH:mm:ss").replace(i, function (e, n) {
          return n || String(t[e]);
        });
      };
      t.as = function (e) {
        return this.$ms / a[c(e)];
      };
      t.get = function (e) {
        var t = this.$ms;
        var n = c(e);
        if (n === "milliseconds") {
          t %= 1000;
        } else {
          t = n === "weeks" ? f(t / a[n]) : this.$d[n];
        }
        if (t === 0) {
          return 0;
        } else {
          return t;
        }
      };
      t.add = function (e, t, n) {
        var r;
        r = t ? e * a[c(t)] : s(e) ? e.$ms : u(e, this).$ms;
        return u(this.$ms + r * (n ? -1 : 1), this);
      };
      t.subtract = function (e, t) {
        return this.add(e, t, true);
      };
      t.locale = function (e) {
        var t = this.clone();
        t.$l = e;
        return t;
      };
      t.clone = function () {
        return u(this.$ms, this);
      };
      t.humanize = function (e) {
        return n().add(this.$ms, "ms").locale(this.$l).fromNow(!e);
      };
      t.milliseconds = function () {
        return this.get("milliseconds");
      };
      t.asMilliseconds = function () {
        return this.as("milliseconds");
      };
      t.seconds = function () {
        return this.get("seconds");
      };
      t.asSeconds = function () {
        return this.as("seconds");
      };
      t.minutes = function () {
        return this.get("minutes");
      };
      t.asMinutes = function () {
        return this.as("minutes");
      };
      t.hours = function () {
        return this.get("hours");
      };
      t.asHours = function () {
        return this.as("hours");
      };
      t.days = function () {
        return this.get("days");
      };
      t.asDays = function () {
        return this.as("days");
      };
      t.weeks = function () {
        return this.get("weeks");
      };
      t.asWeeks = function () {
        return this.as("weeks");
      };
      t.months = function () {
        return this.get("months");
      };
      t.asMonths = function () {
        return this.as("months");
      };
      t.years = function () {
        return this.get("years");
      };
      t.asYears = function () {
        return this.as("years");
      };
      return e;
    }();
    e.exports = function (e, t, i) {
      n = i;
      r = i().$utils();
      i.duration = function (e, t) {
        return u(e, {
          $l: i.locale()
        }, t);
      };
      i.isDuration = s;
      var o = t.prototype.add;
      var a = t.prototype.subtract;
      t.prototype.add = function (e, t) {
        if (s(e)) {
          e = e.asMilliseconds();
        }
        return o.bind(this)(e, t);
      };
      t.prototype.subtract = function (e, t) {
        if (s(e)) {
          e = e.asMilliseconds();
        }
        return a.bind(this)(e, t);
      };
    };
  });
  e1.extend(e2);
  var e3 = ["__cep_sdk_onboard", "__cep_trigger_sdk", "_be_active"];
  var e6 = ["and", "or", "not"];
  var e4 = function () {
    function e() {
      this.support = true;
      this.currentPlan = 1;
      this.shouldSendEvent = false;
      this.staing = false;
      this.test = false;
      this.cepReady = false;
      this.eventCache = [];
    }
    e.prototype.apply = function (e, t) {
      var n = this;
      if (t.cep) {
        this.collect = e;
        this.config = t;
        var r = e.adapters.storage;
        var i = e.Types;
        this.types = i;
        this.storage = new r(false);
        this.configManager = e.configManager;
        this.url = t.cep_url ? "" + t.cep_url : e.configManager.getDomain() + "/service/2/cep_settings/";
        this.reportUrl = e.configManager.getUrl("event");
        this.key = "__tea_cep_plan_" + t.app_id;
        this.quotasKey = "__tea_cep_plan_quotas_" + t.app_id;
        this.isWait = false;
        this.eventCache = [];
        this.test = e.configManager.staging;
        this.collect.on(i.SubmitAfter, function (e) {
          n.matchEvent(e);
        });
        this.init();
      }
    };
    e.prototype.init = function () {
      var e = this;
      var t = true;
      var n = 0;
      var r = 0;
      var i = 0;
      var o = false;
      var a = this.storage.getItem(this.key) || {};
      if (a && Object.keys(a).length) {
        o = true;
        n = a.last_update_time;
        r = a.fetch_interval;
        i = a.config_version || 0;
        t = Date.now() - n > r * 1000;
      }
      if (t) {
        var s = this.configManager.get();
        var u = s.header;
        var c = s.user;
        this.collect.requestManager.useRequest({
          url: this.url,
          data: {
            header: u,
            user: c,
            local_time: Date.now(),
            config_version: i
          },
          success: function (t) {
            if (t && t.code === 0) {
              a.fetch_interval = t.fetch_interval;
              a.data = t.data;
              a.last_update_time = Date.now();
              a.config_version = t.config_version;
              e.clearQuotas();
              e.initState(t.data);
              e.storage.setItem(e.key, a);
              t.data.forEach(function (t) {
                e.event("__cep_sdk_onboard", t.plan_id);
              });
            } else if ((t.code === 304 || t.code === 400) && o) {
              a.last_update_time = Date.now();
              e.storage.setItem(e.key, a);
              e.initState(a.data);
            }
          },
          fail: function () {
            if (o) {
              e.planData = a.data;
              e.initState(a.data);
            } else {
              e.support = false;
            }
          },
          timeout: 5000
        });
      } else {
        a.last_update_time = Date.now();
        this.storage.setItem(this.key, a);
        this.initState(a.data);
      }
    };
    e.prototype.initState = function (e) {
      var t = this;
      if (e && e.length) {
        this.stateArray = new Map();
        this.waitArray = new Map();
        this.planData = e;
        e.forEach(function (e) {
          var n = new Map();
          if (e.pattern && e.pattern.events) {
            var r = e.pattern.events.length === 1;
            e.pattern.events.forEach(function (e) {
              n.set(e.id, {
                id: e.id,
                isMatch: false,
                event: null,
                after: e.after || null,
                connection: e.connection || null,
                window: e.window || null,
                matchTime: 0,
                initTime: Date.now(),
                singleRule: r
              });
            });
            t.stateArray.set(e.plan_id, {
              patternState: n,
              singleRule: r,
              pattern: {
                aid: e.aid,
                biz_id: e.biz_id,
                end_time: e.end_time,
                start_time: e.start_time,
                web_sdk_version: e.web_sdk_version,
                stage: e.stage
              },
              quotas: e.quotas
            });
          }
        });
        this.cepReady = true;
        this.dealCache();
        this.collect.emit(this.types.CepReady);
      }
    };
    e.prototype.check = function (e) {
      var t = Date.now();
      return !(Date.now() > e.end_time * 1000) && !(t < e.start_time * 1000) && !(t > e.end_time * 1000) && (this.staing = e.staing === "testing", !(j < e.web_sdk_version) || (this.support = false, false));
    };
    e.prototype.dealCache = function () {
      var e = this;
      if (this.eventCache.length) {
        var t = 1;
        this.eventCache.forEach(function (n) {
          e.matchEvent(n);
          t++;
        });
        if (t === this.eventCache.length) {
          this.eventCache = [];
        }
      }
    };
    e.prototype.matchEvent = function (e) {
      if (this.support && (!this.staing || this.test) && e && e.length) {
        try {
          if (!this.cepReady) {
            this.eventCache.push(e);
            return;
          }
          var t = e[0];
          var n = t.header;
          var r = t.user;
          var i = t.events;
          if (i.length) {
            i.reverse();
          }
          for (var o = 0; o < i.length; o++) {
            var a = i[o].event;
            if (e3.indexOf(a) !== -1) {
              return false;
            }
            this.matchRule(n, r, i[o]);
          }
        } catch (e) {
          this.collect.emit(S.DEBUGGER_MESSAGE, {
            type: S.DEBUGGER_MESSAGE_SDK,
            info: "发生了异常",
            level: "error",
            time: Date.now(),
            data: e.message
          });
          return;
        }
      }
    };
    e.prototype.matchRule = function (e, t, n) {
      try {
        for (var r = 0; r < this.planData.length; r++) {
          var i = this.planData[r];
          var o = i.plan_id;
          if (this.check(i) && this.checkQuotas(o) && i.pattern && i.pattern.events) {
            var a = i.pattern.events;
            var s = 0;
            for (; s < a.length; s++) {
              if (this.rule(e, t, n, a[s].condition)) {
                var u = this.stateArray.get(o).patternState;
                var c = u.get(a[s].id);
                if (this.stateArray.get(o).singleRule) {
                  this.changeStatus(o, a[s].id, n);
                  this.publish([n], o, a[s].id);
                  break;
                }
                if (!c.isMatch) {
                  if (c.after && u.get(c.after).isMatch) {
                    this.changeStatus(o, a[s].id, n);
                  } else if (!c.after) {
                    this.changeStatus(o, a[s].id, n);
                  }
                  break;
                }
              }
            }
          }
        }
        this.statusCheck();
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return;
      }
    };
    e.prototype.changeStatus = function (e, t, n) {
      var r = this.stateArray.get(e);
      var i = r.patternState.get(t);
      i.isMatch = true;
      i.event = n;
      i.matchTime = n.local_time_ms || Date.now();
      r.patternState.set(t, i);
      this.stateArray.set(e, r);
    };
    e.prototype.statusCheck = function () {
      var e;
      var t;
      var n;
      var r;
      try {
        var i = o(this.stateArray);
        var s = i.next();
        for (; !s.done; s = i.next()) {
          var u = a(s.value, 2);
          var c = u[0];
          var l = u[1];
          var f = l.patternState;
          if (l.isSingle) {
            break;
          }
          try {
            var h = o(f);
            var d = h.next();
            for (; !d.done; d = h.next()) {
              var p = a(d.value, 2);
              var g = p[0];
              var v = p[1];
              if (v.after && (!v.after || f.get(v.after).isMatch)) {
                if (v.connection === "NOT_FOLLOWED_BY") {
                  if (v.isMatch) {
                    this.reset(c, g);
                  } else if (Date.now() - f.get(v.after).matchTime > v.window) {
                    this.publish([f.get(v.after).event, v.event], c, g);
                  } else {
                    this.startWait(c, g, v);
                  }
                  break;
                }
                if (v.isMatch) {
                  if (v.matchTime - f.get(v.after).matchTime <= v.window) {
                    this.publish([f.get(v.after).event, v.event], c, g);
                  } else {
                    this.reset(c, g);
                  }
                } else if (Date.now() - f.get(v.after).matchTime > v.window) {
                  this.reset(c, g);
                } else {
                  this.startWait(c, g, v);
                }
                break;
              }
            }
          } catch (e) {
            n = {
              error: e
            };
          } finally {
            try {
              if (d && !d.done && (r = h.return)) {
                r.call(h);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          if (s && !s.done && (t = i.return)) {
            t.call(i);
          }
        } finally {
          if (e) {
            throw e.error;
          }
        }
      }
    };
    e.prototype.startWait = function (e, t, n) {
      var r = this;
      try {
        if (!this.waitArray.get(e)) {
          this.waitArray.set(e, new Map());
        }
        var i = this.waitArray.get(e);
        if (!i.get(t)) {
          var o = setTimeout(function () {
            var i;
            var o = r.stateArray.get(e).patternState;
            var a = o.get(t);
            if (a.connection === "NOT_FOLLOWED_BY") {
              if (!a.isMatch && o.get(a.after).isMatch || a.matchTime - o.get(a.after).matchTime > n.window) {
                (i = r.waitArray.get(e).get(t)).triggerWait = true;
                r.waitArray.set(e, r.waitArray.get(e).set(t, i));
                r.publish([o.get(a.after).event], e, t);
              } else {
                r.reset(e, t);
              }
            } else if (a.connection === "FOLLOWED_BY") {
              if (a.isMatch && o.get(a.after).isMatch) {
                (i = r.waitArray.get(e).get(t)).triggerWait = true;
                r.waitArray.set(e, r.waitArray.get(e).set(t, i));
                r.publish([o.get(a.after).event], e, t);
              } else {
                r.reset(e, t);
              }
            }
          }, n.window);
          i.set(t, {
            waitFn: o,
            triggerWait: false
          });
          this.waitArray.set(e, i);
        }
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.rule = function (e, t, n, r) {
      var i = this;
      try {
        var o = n.event;
        var a = n.params;
        a = JSON.parse(a);
        if (e6.indexOf(r.op) !== -1) {
          if (r.conditions && r.conditions.length) {
            var s = r.conditions;
            var u = 0;
            var c = new Map();
            c.set(u, {
              op: r.op,
              result: undefined,
              resultList: [],
              resultKey: [],
              resultLength: s.length
            });
            (function n(r, s) {
              for (var l = 0; l < r.length; l++) {
                u++;
                if (e6.indexOf(r[l].op) !== -1 && r[l].hasOwnProperty("conditions")) {
                  c.set(u, {
                    op: r[l].op,
                    result: undefined,
                    fatherKey: s,
                    resultList: [],
                    resultKey: [],
                    resultLength: r[l].conditions.length
                  });
                  n(r[l].conditions, u);
                } else {
                  var f = i.scope(r[l].key);
                  var h = f.scope;
                  var d = f.key;
                  var p = f.key2;
                  var g = h ? h === "header" ? p ? JSON.parse(e[p])[d] : e[d] : h === "user" ? t[d] : a[d] : o;
                  var v = i.calculate(r[l].op, g, r[l].value);
                  c.set(u, {
                    op: r[l].op,
                    result: v,
                    fatherKey: s
                  });
                }
              }
            })(s, u);
            for (var l = c.get(0); l.result === undefined || l.resultList.length < l.resultLength;) {
              c.forEach(function (e, t) {
                if (e.result !== undefined && e.fatherKey !== undefined) {
                  var n = c.get(e.fatherKey);
                  if (n.resultList.length < n.resultLength && n.resultKey.indexOf(t) === -1) {
                    n.resultKey.push(t);
                    n.resultList.push(e.result);
                    c.set(e.fatherKey, n);
                  }
                }
              });
              c.forEach(function (e) {
                if (e.resultList && e.resultList.length === e.resultLength) {
                  if (e.op === "and") {
                    e.result = e.resultList.indexOf(false) === -1;
                  }
                  if (e.op === "or") {
                    e.result = e.resultList.indexOf(true) !== -1;
                  }
                }
              });
            }
            return c.get(0).result;
          }
          return false;
        }
        var f = this.scope(r.key);
        var h = f.scope;
        var d = f.key;
        var p = f.key2;
        var g = h ? h === "header" ? p ? JSON.parse(e[p])[d] : e[d] : h === "user" ? t[d] : a[d] : o;
        return this.calculate(r.op, g, r.value);
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return false;
      }
    };
    e.prototype.publish = function (e, t, n) {
      try {
        var r = this.configManager.get().user;
        var i = {
          biz_id: this.stateArray.get(t).pattern.biz_id,
          plan_id: t,
          uid: r.user_id || "",
          did: r.device_id || "",
          uuid: r.user_unique_id,
          events: e,
          extra: {
            url: window.location.href
          }
        };
        this.collect.emit("__cep_match", i);
        (window.opener || window.parent).postMessage({
          type: "__cep_match",
          data: i
        }, "*");
        this.event("__cep_trigger_sdk", t);
        this.addQuotas(t);
        this.reset(t, n);
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return;
      }
    };
    e.prototype.addQuotas = function (e) {
      var t = this.stateArray.get(e).quotas;
      if (t && t.length) {
        var n = this.storage.getItem(this.quotasKey) || {};
        n[e] ||= {
          value: 0,
          lastTime: Date.now()
        };
        var r = n[e].value;
        if (r === 0) {
          n[e].lastTime = Date.now();
        }
        n[e].value = r + 1;
        this.storage.setItem(this.quotasKey, n);
      }
    };
    e.prototype.checkQuotas = function (e) {
      var t = this.stateArray.get(e).quotas;
      var n = this.storage.getItem(this.quotasKey) || {};
      n[e] ||= {
        value: 0,
        lastTime: Date.now()
      };
      if (t && t.length) {
        var r = t[0].granularity;
        var i = t[0].value;
        if (t[0].type !== "per_keyid") {
          return true;
        }
        var o = this.release(r);
        if (o === "all") {
          return !(n[e].value >= i);
        } else if (Date.now() - n[e].lastTime >= o) {
          n[e].value = 0;
          n[e].lastTime = Date.now();
          this.storage.setItem(this.quotasKey, n);
          return true;
        } else {
          return !(n[e].value >= i);
        }
      }
      return true;
    };
    e.prototype.clearQuotas = function () {
      this.storage.setItem(this.quotasKey, null);
    };
    e.prototype.release = function (e) {
      if (e === "all") {
        return e;
      }
      var t = e1.duration(e);
      if (t) {
        return t.asMilliseconds();
      } else {
        return "all";
      }
    };
    e.prototype.reset = function (e, t) {
      var n = this.stateArray.get(e);
      if (n.singleRule) {
        var r = n.patternState.get(t);
        r.isMatch = false;
        r.event = null;
        r.matchTime = 0;
        r.initTime = Date.now();
        n.patternState.set(t, r);
      } else {
        n.patternState.forEach(function (e) {
          e.isMatch = false;
          e.event = null;
          e.matchTime = 0;
          e.initTime = Date.now();
        });
      }
      this.stateArray.set(e, n);
      var i = this.waitArray.get(e);
      if (i && i.get(t)) {
        clearTimeout(i.get(t).waitFn);
        i.delete(t);
      }
    };
    e.prototype.event = function (e, t) {
      try {
        var n = {
          event: e,
          params: JSON.stringify({
            plan_id: t || "",
            biz_id: this.stateArray.get(t).pattern.biz_id
          }),
          local_time_ms: Date.now()
        };
        var r = this.configManager.get();
        var i = r.header;
        var o = r.user;
        i.custom = JSON.stringify(i.custom);
        this.collect.requestManager.useRequest({
          url: this.reportUrl,
          data: [{
            events: [n],
            user: o,
            header: i
          }]
        });
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return;
      }
    };
    e.prototype.scope = function (e) {
      var t = "";
      var n = "";
      if (e.indexOf(".") > -1) {
        var r = e.split(".");
        t = r[0];
        e = r[1];
        if (t === "header" && e === "custom") {
          e = r[2];
          n = r[1];
        }
      }
      return {
        scope: t,
        key: e,
        key2: n
      };
    };
    e.prototype.calculate = function (e, t, n) {
      try {
        if (e === "=") {
          return t === n;
        }
        if (["=", "<", ">", ">=", "<=", "!="].indexOf(e) !== -1) {
          switch (e) {
            case "=":
              return t === n;
            case "<":
              return t < n;
            case ">":
              return t > n;
            case ">=":
              return t >= n;
            case "<=":
              return t <= n;
            case "!=":
              return t !== n;
          }
        } else {
          if (["in", "contains"].indexOf(e) !== -1) {
            return n.indexOf(t) !== -1;
          }
          if (["is not null", "is null"].indexOf(e) !== -1) {
            if (e === "is null") {
              return t == null;
            } else {
              return t != null;
            }
          }
          if (["startswith", "endswith"].indexOf(e) !== -1) {
            if (e === "startswith") {
              return t.indexOf(n) === 0;
            }
            var r = t.length - n.length;
            return t.substr(r, n.length) === n;
          }
        }
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return false;
      }
    };
    return e;
  }();
  var e5 = typeof window != "undefined" ? (window.LogPluginObject ||= {}, window.LogPluginObject) : null;
  var e8 = function () {
    function e() {}
    e.prototype.apply = function (e, t) {
      this._plugin = {};
      this.config = t;
      this.collect = e;
      this.channel = t.channel || "cn";
      this.loadExtend();
    };
    e.prototype.loadExtend = function () {
      var e = this;
      try {
        this.collect.remotePlugin.forEach(function (t, n) {
          if (t === "sdk") {
            if (Y.hasOwnProperty(n)) {
              var r = Y[n].object;
              var i = Y[n].src[e.channel] + "?query=" + Date.now();
              e.exist(n, r, i);
            }
          } else if (typeof t == "object") {
            if (t.src) {
              e.exist(n, t.call, t.src);
            } else {
              e.process(n, t.instance, "INSTANCE");
            }
          }
        });
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.exist = function (e, t, n) {
      var r = this;
      if (e5[t]) {
        this.process(e, e5[t]);
      } else {
        this.loadPlugin(e, n, function () {
          r.process(e, e5[t]);
        }, function () {});
      }
    };
    e.prototype.process = function (e, t, n) {
      try {
        if (n) {
          var r = new t();
          if (r.apply) {
            r.apply(this.collect, this.config);
          }
        } else if (t) {
          t(this.collect, this.config);
        }
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    e.prototype.loadPlugin = function (e, t, n, r) {
      var i = this;
      try {
        var o = document.createElement("script");
        o.src = t;
        this._plugin[e] ||= [];
        this._plugin[e].push(n);
        o.onerror = function () {
          r(t);
        };
        o.onload = function () {
          i._plugin[e].forEach(function (e) {
            e();
          });
        };
        document.getElementsByTagName("head")[0].appendChild(o);
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
      }
    };
    return e;
  }();
  var e9 = function () {
    function e() {
      this.autotrack = false;
      this.spa = false;
      this.cache = {};
      this.allowHash = false;
    }
    e.prototype.apply = function (e, t) {
      if (t.spa || t.autotrack) {
        var n = e.Types;
        this.collect = e;
        this.config = t;
        this.appid = t.app_id;
        this.allowHash = t.allow_hash;
        this.fncArray = new Map();
        this.setKey();
        this.setLocation();
        this.hack();
        this.init();
        this.listener();
        e.emit(n.RouteReady);
      }
    };
    e.prototype.setKey = function () {
      var e = this.collect.adapters.storage;
      this.storage = new e(false);
      this.cache_key = "__tea_cache_refer_" + this.appid;
      this.cache = {
        refer_key: "",
        refer_title: document.title || location.pathname,
        refer_manual_key: "",
        routeChange: false
      };
      if (this.config.autotrack && typeof this.config.autotrack == "object" && this.config.autotrack.page_manual_key) {
        this.cache.refer_manual_key = this.config.autotrack.page_manual_key;
      }
      this.storage.setItem(this.cache_key, this.cache);
    };
    e.prototype.hack = function () {
      var e = this;
      var t = window.history.pushState;
      history.pushState = function (n) {
        var r = [];
        var i = 1;
        for (; i < arguments.length; i++) {
          r[i - 1] = arguments[i];
        }
        if (!e.collect.destroy) {
          if (typeof history.onpushstate == "function") {
            history.onpushstate({
              state: n
            });
          }
          var o = t.call.apply(t, s([history, n], r));
          if (e.lastLocation !== location.href) {
            var a = e.getPopStateChangeEventData();
            e.setReferCache(e.lastLocation);
            e.lastLocation = location.href;
            e.sendPv(a, "pushState");
            return o;
          }
        }
      };
      var n = history.replaceState;
      history.replaceState = function (t) {
        var r = [];
        var i = 1;
        for (; i < arguments.length; i++) {
          r[i - 1] = arguments[i];
        }
        if (!e.collect.destroy) {
          if (typeof history.onreplacestate == "function") {
            history.onreplacestate({
              state: t
            });
          }
          var o = n.call.apply(n, s([history, t], r));
          if (e.lastLocation !== location.href) {
            var a = e.getPopStateChangeEventData();
            e.setReferCache(e.lastLocation);
            e.lastLocation = location.href;
            e.sendPv(a);
            return o;
          }
        }
      };
    };
    e.prototype.setLocation = function () {
      if (typeof window != "undefined") {
        this.lastLocation = window.location.href;
      }
    };
    e.prototype.getLocation = function () {
      return this.lastLocation;
    };
    e.prototype.init = function () {
      var e = this.getPopStateChangeEventData();
      this.collect.emit("route-change", {
        config: e,
        init: true
      });
    };
    e.prototype.listener = function () {
      var e = this;
      var t = null;
      window.addEventListener("hashchange", function (n) {
        if (!e.collect.destroy && e.lastLocation !== window.location.href && (clearTimeout(t), e.allowHash)) {
          e.setReferCache(e.lastLocation);
          e.lastLocation = window.location.href;
          var r = e.getPopStateChangeEventData();
          e.sendPv(r);
        }
      });
      window.addEventListener("popstate", function (n) {
        if (!e.collect.destroy) {
          if (e.lastLocation !== window.location.href) {
            t = setTimeout(function () {
              e.setReferCache(e.lastLocation);
              e.lastLocation = window.location.href;
              var t = e.getPopStateChangeEventData();
              e.sendPv(t);
            }, 10);
          }
        }
      });
    };
    e.prototype.getPopStateChangeEventData = function () {
      var e = this.pageConfig();
      e.is_back = 0;
      return e;
    };
    e.prototype.pageConfig = function () {
      try {
        var e = this.storage.getItem(this.cache_key) || {};
        var t = false;
        var n = this.storage.getItem("__tea_cache_first_" + this.appid);
        t = !n || n != 1;
        return {
          is_html: 1,
          url: location.href,
          referrer: this.handleRefer(),
          page_key: location.href,
          refer_page_key: this.handleRefer(),
          page_title: document.title || location.pathname,
          page_manual_key: this.config.autotrack && this.config.autotrack.page_manual_key || "",
          refer_page_manual_key: e && e.refer_manual_key || "",
          refer_page_title: e && e.refer_title || "",
          page_path: location.pathname,
          page_host: location.host,
          is_first_time: "" + t
        };
      } catch (e) {
        this.collect.emit(S.DEBUGGER_MESSAGE, {
          type: S.DEBUGGER_MESSAGE_SDK,
          info: "发生了异常",
          level: "error",
          time: Date.now(),
          data: e.message
        });
        return {};
      }
    };
    e.prototype.sendPv = function (e, t) {
      this.collect.emit("route-change", {
        config: e,
        init: false
      });
    };
    e.prototype.handleRefer = function () {
      var e = "";
      try {
        var t = this.storage.getItem() || {};
        e = t.routeChange ? t.refer_key : this.collect.configManager.get("referrer");
      } catch (t) {
        e = document.referrer;
      }
      return e;
    };
    e.prototype.setReferCache = function (e) {
      var t = this.storage.getItem(this.cache_key) || {};
      t.refer_key = e;
      t.routeChange = true;
      this.storage.setItem(this.cache_key, t);
    };
    return e;
  }();
  ee.usePlugin(e8, "extend");
  ee.usePlugin(eh, "ab");
  ee.usePlugin(ev, "stay");
  ee.usePlugin(eX, "autotrack");
  ee.usePlugin(ed, "et");
  ee.usePlugin(em, "profile");
  ee.usePlugin(e0, "retry");
  ee.usePlugin(e4, "cep");
  ee.usePlugin(ey, "heartbeat");
  ee.usePlugin(eb, "monitor");
  ee.usePlugin(e9, "route");
  ee.usePlugin(eQ, "tracer");
  var e7 = new ee("default");
  var te = ee;
  exports.default = e7;
  require.r(exports);
  require.d(exports, {
    Collector: function () {
      return te;
    }
  });
}