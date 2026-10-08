// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 563232
         */
module.exports = function (module, exports, require) {
  var t;
  t = function () {
    "use strict";

    var e = "0.2.6";
    function t() {
      return (t = Object.assign || function (e) {
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
    function n(e, t, n, r) {
      return new (n = n || Promise)(function (i, o) {
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
          var t;
          if (e.done) {
            i(e.value);
          } else {
            ((t = e.value) instanceof n ? t : new n(function (e) {
              e(t);
            })).then(a, s);
          }
        }
        u((r = r.apply(e, t || [])).next());
      });
    }
    function r(e, t) {
      var n;
      var r;
      var i;
      var o = {
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
      var a = {
        next: s(0),
        throw: s(1),
        return: s(2)
      };
      if (typeof Symbol == "function") {
        a[Symbol.iterator] = function () {
          return this;
        };
      }
      return a;
      function s(a) {
        return function (s) {
          var u = [a, s];
          if (n) {
            throw TypeError("Generator is already executing.");
          }
          while (o) {
            try {
              n = 1;
              if (r && (i = u[0] & 2 ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) {
                return i;
              }
              r = 0;
              switch ((u = i ? [u[0] & 2, i.value] : u)[0]) {
                case 0:
                case 1:
                  i = u;
                  break;
                case 4:
                  o.label++;
                  return {
                    value: u[1],
                    done: false
                  };
                case 5:
                  o.label++;
                  r = u[1];
                  u = [0];
                  continue;
                case 7:
                  u = o.ops.pop();
                  o.trys.pop();
                  continue;
                default:
                  if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                    o = 0;
                    continue;
                  }
                  if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                    o.label = u[1];
                    break;
                  }
                  if (u[0] === 6 && o.label < i[1]) {
                    o.label = i[1];
                    i = u;
                    break;
                  }
                  if (i && o.label < i[2]) {
                    o.label = i[2];
                    o.ops.push(u);
                    break;
                  }
                  if (i[2]) {
                    o.ops.pop();
                  }
                  o.trys.pop();
                  continue;
              }
              u = t.call(e, o);
            } catch (e) {
              u = [6, e];
              r = 0;
            } finally {
              n = i = 0;
            }
          }
          if (u[0] & 5) {
            throw u[1];
          }
          return {
            value: u[0] ? u[1] : undefined,
            done: true
          };
        };
      }
    }
    function i(e) {
      var t = typeof Symbol == "function" && Symbol.iterator;
      var n = t && e[t];
      var r = 0;
      if (n) {
        return n.call(e);
      }
      if (e && typeof e.length == "number") {
        return {
          next: function () {
            return {
              value: (e = e && r >= e.length ? undefined : e) && e[r++],
              done: !e
            };
          }
        };
      }
      throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function o(e, t) {
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
    function a(e, t, n) {
      if (n || arguments.length == 2) {
        var r;
        var i = 0;
        var o = t.length;
        for (; i < o; i++) {
          if (!!r || !(i in t)) {
            (r = r || Array.prototype.slice.call(t, 0, i))[i] = t[i];
          }
        }
      }
      return e.concat(r || Array.prototype.slice.call(t));
    }
    function s() {
      return {};
    }
    function u(e) {
      return typeof e == "object" && e !== null;
    }
    var c = Object.prototype;
    function l(e) {
      return typeof e == "function";
    }
    function f(e, t, n) {
      return function () {
        var r = [];
        var i = 0;
        for (; i < arguments.length; i++) {
          r[i] = arguments[i];
        }
        if (!e) {
          return s;
        }
        var u = e[t];
        var c = n.apply(undefined, a([u], o(r), false));
        var f = c;
        if (l(f)) {
          f = function () {
            var e = [];
            var t = 0;
            for (; t < arguments.length; t++) {
              e[t] = arguments[t];
            }
            return c.apply(this, e);
          };
        }
        e[t] = f;
        return function () {
          if (f === e[t]) {
            e[t] = u;
          } else {
            c = u;
          }
        };
      };
    }
    function h() {
      if (typeof window == "object" && u(window)) {
        return window;
      }
    }
    function d() {
      if (typeof document == "object" && u(document)) {
        return document;
      }
    }
    function p() {
      var e = [];
      var t = 0;
      for (; t < arguments.length; t++) {
        e[t] = arguments[t];
      }
      var n = function (e) {
        if (e) {
          e.__SLARDAR_REGISTRY__ ||= {
            Slardar: {
              plugins: [],
              errors: [],
              subject: {}
            }
          };
          return e.__SLARDAR_REGISTRY__.Slardar;
        }
      }(h());
      if (n) {
        n.errors ||= [];
        n.errors.push(e);
      }
    }
    function g(e, t) {
      var n = e && new e(t);
      return [function (e, t) {
        if (n && e) {
          n.observe(e, t);
        }
      }, function () {
        return n && n.disconnect();
      }];
    }
    function v(e) {
      var t = e && e.timing || undefined;
      return [t, function () {
        if (e && e.now) {
          return e.now();
        } else {
          return (Date.now ? Date.now() : +new Date()) - (t && t.navigationStart || 0);
        }
      }, function (t) {
        var n = (e || {}).getEntriesByType;
        return l(n) && n.call(e, t) || [];
      }, function () {
        var t = (e || {}).clearResourceTimings;
        if (l(t)) {
          t.call(e);
        }
      }, function (t) {
        var n = (e || {}).getEntriesByName;
        return l(n) && n.call(e, t) || [];
      }];
    }
    function m(e, t, n, r) {
      var i = e && new e(function (e, i) {
        if (e.getEntries) {
          e.getEntries().forEach(function (e, n, r) {
            return t(e, n, r, i);
          });
        } else if (r) {
          r();
        }
        if (n) {
          i.disconnect();
        }
      });
      return [function () {
        var t = [];
        var n = 0;
        for (; n < arguments.length; n++) {
          t[n] = arguments[n];
        }
        if (!e || !i) {
          return r && r();
        }
        try {
          t.forEach(function (t) {
            if (e.supportedEntryTypes.indexOf(t) > -1) {
              i.observe({
                type: t,
                buffered: false
              });
            }
          });
        } catch (e) {
          try {
            i.observe({
              entryTypes: t
            });
          } catch (e) {
            return r && r();
          }
        }
      }, function () {
        return i && i.disconnect();
      }];
    }
    b.prototype.subscribe = function (e) {
      this.observers.push(e);
    };
    b.prototype.unsubscribe = function (e) {
      this.observers.filter(function (t) {
        return t !== e;
      });
    };
    b.prototype.notify = function (e) {
      this.observers.forEach(function (t) {
        t(e);
      });
    };
    var y = b;
    function b() {
      this.observers = [];
    }
    function _(e) {
      this.cache = new Map();
      this.capacity = 10;
      this.capacity = e;
    }
    function w(e) {
      var t = [];
      Array.from(e).forEach(function (e) {
        if (e instanceof Element) {
          if (e.nodeName.toLocaleLowerCase() === "img") {
            t.push(e);
          } else if (e != null && e.querySelectorAll) {
            e = e.querySelectorAll("img");
            t = t.concat(Array.from(e));
          }
        }
      });
      return t;
    }
    _.prototype.get = function (e) {
      var t;
      if (this.cache.has(e)) {
        t = this.cache.get(e);
        this.cache.delete(e);
        this.cache.set(e, t);
        return t;
      } else {
        return null;
      }
    };
    _.prototype.put = function (e, t) {
      if (this.cache.has(e)) {
        this.cache.delete(e);
      } else if (this.cache.size >= this.capacity) {
        this.cache.delete(this.cache.keys().next().value);
      }
      this.cache.set(e, t);
    };
    function E(e) {
      var t = [];
      var n = [];
      (e = e === undefined ? [] : e).forEach(function (e) {
        t.push.apply(t, a([], o(w(e.addedNodes)), false));
        n.push.apply(n, a([], o(w(e.removedNodes)), false));
      });
      return [t, n];
    }
    var S = typeof IntersectionObserver != "undefined";
    k.prototype.set = function (e) {
      var t;
      if (S && (t = this.intersectionObserver) != null) {
        t.observe(e);
      }
      this.record.set(e, {
        visible: false,
        observer: this.intersectionObserver
      });
    };
    k.prototype.del = function (e) {
      var t;
      if (((t = this.record.get(e)) == null || !t.visible) && !!S) {
        if ((t = this.intersectionObserver) != null) {
          t.unobserve(e);
        }
      }
      this.record.delete(e);
    };
    k.prototype.find = function (e) {
      var n;
      var r;
      var a = null;
      try {
        var s = i(this.record);
        var u = s.next();
        for (; !u.done; u = s.next()) {
          var c = o(u.value, 2);
          var l = c[0];
          var f = c[1];
          if (l.currentSrc === e) {
            a = t({
              target: l
            }, f);
            break;
          }
        }
      } catch (e) {
        n = {
          error: e
        };
      } finally {
        try {
          if (u && !u.done && (r = s.return)) {
            r.call(s);
          }
        } finally {
          if (n) {
            throw n.error;
          }
        }
      }
      return a;
    };
    var x = k;
    function k() {
      var e = this;
      this.record = new Map();
      this.intersectionObserver = null;
      if (S) {
        this.intersectionObserver = new IntersectionObserver(function (n) {
          n.forEach(function (n) {
            var r;
            if (n.isIntersecting || n.intersectionRatio > 0) {
              if (r = e.record.get(n.target)) {
                e.record.set(n.target, t(t({}, r), {
                  visible: true
                }));
              }
              if ((r = e.intersectionObserver) != null) {
                r.unobserve(n.target);
              }
            }
          });
        }, {
          rootMargin: "200px"
        });
      }
    }
    function O(e, t, n) {
      var r = 1;
      return function () {
        var i = [];
        var s = 0;
        for (; s < arguments.length; s++) {
          i[s] = arguments[s];
        }
        var u = e.apply(undefined, a([], o(i), false));
        var c = r += 2;
        t(c, typeof i[0] == "string" ? i[0] : i[0].url);
        u.then(function () {
          n(c);
        }, function () {
          n(c);
        });
        return u;
      };
    }
    function A(e, t, n) {
      var r = 0;
      return function () {
        var i = [];
        var o = 0;
        for (; o < arguments.length; o++) {
          i[o] = arguments[o];
        }
        var a = r += 2;
        t(a, this._url);
        f(this, "onreadystatechange", function (e) {
          return function () {
            var t = [];
            var r = 0;
            for (; r < arguments.length; r++) {
              t[r] = arguments[r];
            }
            if (this.readyState === 4) {
              n(a);
            }
            return e && e.apply(this, t);
          };
        })();
        return e.apply(this, i);
      };
    }
    function T(a = h(), s = d(), f = h() && window.location, p = function () {
      if (typeof XMLHttpRequest == "function" && l(XMLHttpRequest)) {
        return XMLHttpRequest;
      }
    }(), y = function () {
      if (h() && u(window.performance)) {
        return window.performance;
      }
    }(), b = function () {
      if (h() && l(window.MutationObserver)) {
        return window.MutationObserver;
      }
    }(), w = function () {
      if (h() && l(window.PerformanceObserver)) {
        return window.PerformanceObserver;
      }
    }()) {
      if (s && a && f) {
        return function (u, l) {
          var f = u.debug;
          var S = u.sampleRate;
          var k = u.sample_rate;
          var k = k === undefined ? L : k;
          var u = u.ignoreUrls;
          var O = u === undefined ? [] : u;
          var A = (H = (H = f) !== undefined && H) ? function () {
            var e = [];
            var t = 0;
            for (; t < arguments.length; t++) {
              e[t] = arguments[t];
            }
          } : function () {};
          var T = S || k;
          function F(e) {
            A("图片资源上报", e);
            if (l) {
              l({
                ev_type: N,
                payload: e
              });
            }
          }
          A("图片插件已注册，version:", e);
          var H;
          var G;
          var V = o(v(y), 2)[1];
          var $ = new x();
          var W = new _(10);
          var u = o(R(), 3);
          var q = u[0];
          var K = u[1];
          var J = u[2];
          var X = o(C(a, p, function (e) {
            A("before http 请求, url:", e);
            return true;
          }, function (e) {
            A("after http 请求, url:", e = X.get(e));
            if (e && X.size - 1 < Z) {
              U.notify({
                ev_type: j,
                payload: {
                  url: e,
                  remainConnections: Z - (X.size - 1)
                }
              });
            }
          }), 1)[0];
          var f = o(g(b, function (e) {
            var e = o(E(e), 2);
            var t = e[0];
            var e = e[1];
            if (t.length || e.length) {
              A("监听到DOM变更", t, e);
            }
            t.forEach(function (e) {
              return $.set(e);
            });
            e.forEach(function (e) {
              return $.del(e);
            });
          }), 2);
          var S = f[0];
          var Y = f[1];
          S(s, {
            childList: true,
            subtree: true,
            characterData: false,
            attributes: false
          });
          var k = o(m(w, function (n) {
            var r;
            var i;
            var o;
            var a;
            var s;
            var u;
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
            if ((n.initiatorType === "img" || n.initiatorType === "css") && ((m = function (e) {
              if (c.toString.call(e) !== "[object Array]") {
                return null;
              }
              if (e.length) {
                var t = [];
                var n = e.length;
                var r = 0;
                for (; r < n; r++) {
                  var i = e[r];
                  if (typeof i == "string") {
                    t.push(i.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"));
                  } else if (i && i.source) {
                    t.push(i.source);
                  }
                }
                return RegExp(t.join("|"), "i");
              }
              return null;
            }(O)) == null || !m.test(n.name))) {
              A("监听到resource", n);
              b = (m = n.toJSON()).name;
              w = m.initiatorType;
              r = m.transferSize;
              i = m.duration;
              o = m.encodedBodySize;
              _ = m.decodedBodySize;
              a = m.redirectStart;
              s = m.redirectEnd;
              u = m.serverTiming;
              l = m.domainLookupStart;
              f = m.domainLookupEnd;
              h = m.connectStart;
              d = m.connectEnd;
              p = m.secureConnectionStart;
              g = m.requestStart;
              v = m.responseStart;
              m = m.responseEnd;
              y = {
                monitorVersion: e,
                imageSampleRate: T
              };
              if ((w = t({
                name: b,
                source: w,
                dpr: Math.round((b = window == null ? undefined : window.devicePixelRatio) != null ? b : 1),
                needCompress: false,
                needSizeOptim: false,
                needFormatOptim: false,
                hitLocalCache: r === 0 || r === undefined && i === 0,
                hitCdnCache: (u || []).findIndex(function (e) {
                  return e.name === "cdn-cache" && e.description.toLocaleLowerCase().indexOf("hit") >= 0;
                }) >= 0,
                size: _ !== 0 ? o : 0,
                duration: i,
                redirect: s - a,
                dns: f - l,
                tcp: d - h,
                ssl: p === undefined || p <= 0 ? 0 : d - p,
                request: g === undefined || g <= 0 ? 0 : v - g,
                download: v === undefined || v <= 0 ? 0 : m - v,
                timingDetail: n.toJSON()
              }, y)).source === "img") {
                A("匹配到img", b = $.find(n.name), $.record);
                if (b) {
                  _ = {
                    imagexType: (r = b.target) == null ? undefined : r.getAttribute("imagex-type"),
                    imagexVersion: (u = b.target) == null ? undefined : u.getAttribute("imagex-version")
                  };
                  w = t(t(t({}, w), _), {
                    isLazyLoad: !!b.visible,
                    width: ((o = b.target) == null ? undefined : o.naturalWidth) || 0,
                    height: ((i = b.target) == null ? undefined : i.naturalHeight) || 0,
                    viewerWidth: (s = b.target) == null ? undefined : s.width,
                    viewerHeight: (a = b.target) == null ? undefined : a.height
                  });
                }
              }
              U.notify({
                ev_type: D,
                payload: w
              });
            }
          }), 2);
          var u = k[0];
          var Q = k[1];
          function ee(e, i) {
            return n(undefined, undefined, undefined, function () {
              var n;
              var o;
              var a;
              var s;
              return r(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (n = W.get(e)) {
                      A("命中缓存header", e, n);
                      return [3, 3];
                    } else {
                      return [3, 1];
                    }
                  case 1:
                    return [4, M(e)];
                  case 2:
                    n = r.sent();
                    W.put(e, n);
                    r.label = 3;
                  case 3:
                    s = (o = n || {}).format;
                    a = o.status;
                    o = o.contentLength;
                    A("response header：", s, a);
                    if (i.source === "css") {
                      if (s == null || !s.startsWith("image/")) {
                        J(e);
                        return [2];
                      }
                    } else if ((s == null || !s.startsWith("image/")) && Number(a) < 400) {
                      J(e);
                      return [2];
                    }
                    if (!Number((s = t(t({}, i || {}), {
                      format: s && String(s).startsWith("image/") && (s = s.split(/[,;]/)[0]) != null ? s.slice(6) : undefined,
                      status: a
                    })).size) && Number(a) < 400 && Number(o) > 0) {
                      s.size = Number(o);
                    }
                    a = P(s);
                    F(t(t({}, s), a));
                    J(e);
                    return [2];
                }
              });
            });
          }
          U.subscribe(function (e) {
            var a;
            var s;
            var u;
            var c;
            var l;
            if (e.ev_type === D) {
              var f;
              var h = V() - ((h = (h = e.payload) == null ? undefined : h.timingDetail) == null ? undefined : h.responseEnd);
              A("资源加载事件: ", e.payload.name);
              A("资源完成加载时间: ", (l = (l = e.payload) == null ? undefined : l.timingDetail) == null ? undefined : l.responseEnd);
              A("时间间隔: ", h);
              A("是否命中本地缓存: ", (l = e.payload) == null ? undefined : l.hitLocalCache);
              if (!(Math.random() < Number(T))) {
                return;
              }
              if (!z) {
                K(e.payload.name, t({}, e.payload));
                return;
              }
              f = e.payload;
              n(undefined, undefined, undefined, function () {
                var e;
                var n;
                var i;
                var o;
                return r(this, function (r) {
                  switch (r.label) {
                    case 0:
                      A(`进行中的请求数：${X.size}`);
                      if (Z - X.size > 0) {
                        if (e = W.get(f.name)) {
                          A("命中缓存header", f.name, e);
                          return [3, 3];
                        } else {
                          return [3, 1];
                        }
                      } else {
                        return [3, 4];
                      }
                    case 1:
                      return [4, M(f.name)];
                    case 2:
                      e = r.sent();
                      W.put(f.name, e);
                      r.label = 3;
                    case 3:
                      o = (n = e || {}).format;
                      i = n.status;
                      n = n.contentLength;
                      A("response header：", o, i);
                      if (f.source === "css") {
                        if (o == null || !o.startsWith("image/")) {
                          return [2];
                        }
                      } else if ((o == null || !o.startsWith("image/")) && Number(i) < 400) {
                        return [2];
                      }
                      if (!Number((o = t(t({}, f), {
                        format: o && String(o).startsWith("image/") && (o = o.split(/[,;]/)[0]) != null ? o.slice(6) : undefined,
                        status: i
                      })).size) && Number(i) < 400 && Number(n) > 0) {
                        o.size = Number(n);
                      }
                      i = P(o);
                      F(t(t({}, o), i));
                      return [3, 5];
                    case 4:
                      K(f.name, t({}, f));
                      r.label = 5;
                    case 5:
                      return [2];
                  }
                });
              });
            }
            if (e.ev_type === j && z) {
              A("http请求完成事件");
              if (e.payload.remainConnections <= 0) {
                return;
              }
              try {
                var d = i(q);
                var p = d.next();
                for (; !p.done; p = d.next()) {
                  var g = o(p.value, 2);
                  var v = g[0];
                  if ((w = g[1]) == null || !w.__lock) {
                    K(v, t(t({}, w), {
                      __lock: true
                    }));
                    ee(v, w);
                    break;
                  }
                }
              } catch (e) {
                a = {
                  error: e
                };
              } finally {
                try {
                  if (p && !p.done && (s = d.return)) {
                    s.call(d);
                  }
                } finally {
                  if (a) {
                    throw a.error;
                  }
                }
              }
            }
            if (e.ev_type === I && e.payload.pageLoad) {
              A("pageload 事件");
              try {
                var m = i(q);
                var y = m.next();
                for (; !y.done; y = m.next()) {
                  var b = o(y.value, 2);
                  var _ = b[0];
                  var w = b[1];
                  if (!(Z - X.size > 0)) {
                    break;
                  }
                  if (w == null || !w.__lock) {
                    K(_, t(t({}, w), {
                      __lock: true
                    }));
                    ee(_, w);
                  }
                }
              } catch (e) {
                u = {
                  error: e
                };
              } finally {
                try {
                  if (y && !y.done && (c = m.return)) {
                    c.call(m);
                  }
                } finally {
                  if (u) {
                    throw u.error;
                  }
                }
              }
              z = true;
            }
          });
          u(B);
          G = function () {
            U.notify({
              ev_type: I,
              payload: {
                pageLoad: true
              }
            });
          };
          f = h();
          S = d();
          if (f && S) {
            if (S.readyState === "complete") {
              G();
            } else {
              f.addEventListener("load", function () {
                setTimeout(function () {
                  G();
                }, 0);
              }, false);
            }
          }
          return [function () {
            A("插件销毁");
            Y();
            Q();
          }];
        };
      }
    }
    function R() {
      var e = new Map();
      return [e, function (t, n) {
        return e.set(t, n);
      }, function (t) {
        return e.delete(t);
      }];
    }
    function C(e, t, n, r) {
      function i(e, t) {
        if (n && n(t)) {
          c(e, t);
        }
      }
      function a(e) {
        if (r) {
          r(e);
        }
        l(e);
      }
      var s = o(R(), 3);
      var u = s[0];
      var c = s[1];
      var l = s[2];
      if (t) {
        f(t.prototype, "send", A)(i, a);
      }
      if (e) {
        f(e, "fetch", O)(i, a);
      }
      return [u];
    }
    function M(e) {
      return n(undefined, undefined, undefined, function () {
        var t;
        var n;
        return r(this, function (r) {
          switch (r.label) {
            case 0:
              r.trys.push([0, 2,, 3]);
              return [4, fetch(e, {
                cache: "force-cache"
              })];
            case 1:
              n = (t = r.sent()).headers;
              return [2, {
                status: t.status,
                format: n.get("content-type") || "",
                contentLength: Number(n.get("content-length")) || 0
              }];
            case 2:
              (function () {
                var e = [];
                var t = 0;
                for (; t < arguments.length; t++) {
                  e[t] = arguments[t];
                }
              })("获取header失败", r.sent());
              return [2, null];
            case 3:
              return [2];
          }
        });
      });
    }
    function P(e) {
      var n = {
        needCompress: false,
        needSizeOptim: false,
        needFormatOptim: false
      };
      if (!e.size) {
        return n;
      }
      o = (f = e).width;
      c = f.height;
      a = (a = f.format) === undefined ? "" : a;
      f = f.size;
      i = navigator && navigator.userAgent.toLocaleLowerCase().includes("chrome");
      l = {};
      if (/(jpeg|png|bmp)/.test(a)) {
        if (o && c) {
          r = Math.round(Math.max(f - o * c * 0.2, 0));
          if (i) {
            o = Math.round(Math.max(f - o * c / 6, 0));
            l.needFormatOptim = o > 0;
            if (l.needFormatOptim) {
              l.webpSavings = r;
              l.avifSavings = o;
            }
          } else {
            l.needFormatOptim = r > 0;
            if (l.needFormatOptim) {
              l.webpSavings = r;
            }
          }
        } else {
          l.needFormatOptim = true;
          l.webpSavings = Math.round(/png/.test(a) ? f * 0.26 : f * 0.3);
          if (i) {
            l.avifSavings = Math.round(/png/.test(a) ? f * 0.408 : f * 0.44);
          }
        }
      }
      if (/gif/.test(a)) {
        l.needFormatOptim = true;
        l.webpSavings = f * 0.65;
        if (i) {
          l.avifSavings = f * 0.65;
        }
      }
      var r;
      var i;
      var o;
      var a;
      var s;
      var u;
      var c = l;
      r = (o = e).width;
      a = o.height;
      i = (i = o.format) === undefined ? "" : i;
      o = o.size;
      f = {};
      if (r && a) {
        if (/(jpeg|bmp)/.test(i)) {
          s = o - r * a * 0.25;
          f.needCompress = s > 0;
          if (f.needCompress) {
            f.compressSavings = Math.round(s);
          }
        }
        if (/png/.test(i)) {
          s = o - r * a * 0.24;
          f.needCompress = s > 0;
          if (f.needCompress) {
            f.compressSavings = Math.round(s);
          }
        }
      }
      var l = f;
      o = (i = e).width;
      a = e.height;
      s = e.viewerWidth;
      f = e.viewerHeight;
      u = e.dpr;
      i = e.size;
      e = {};
      if (o && a && s && f) {
        e.needSizeOptim = (s = 1 - s * f * u * u / (o * a)) > 0;
        if (e.needSizeOptim) {
          e.resizeSavings = Math.round((1 - s) * i);
        }
      }
      var f = e;
      return t(t(t(t({}, n), c), l), f);
    }
    var D = "image_resource";
    var j = "http_custom";
    var I = "pageload";
    var N = "image";
    var L = 0.1;
    var B = "resource";
    var Z = 8;
    var U = new y();
    var z = false;
    var F = {
      sample_rate: L
    };
    return {
      version: e,
      imageReport: function (e = F) {
        return {
          name: "imageReport",
          setup: function (t) {
            t.on("init", function () {
              var n = o(function (e, t = {}, n, r = []) {
                try {
                  var i = e.apply(undefined, a([], o(r), false));
                  return i && i(t, n) || [];
                } catch (e) {
                  p(e);
                  return [];
                }
              }(T, e, t.report.bind(t)), 1)[0];
              t.on("beforeDestroy", function () {
                n();
              });
            });
          }
        };
      }
    };
  };
  module.exports = t();
}