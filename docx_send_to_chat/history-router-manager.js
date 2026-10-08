// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'PP' to 'createMemoryHistory'
// - Renamed export 'lX' to 'createBrowserHistory'
// - Renamed export 'ob' to 'createLocation'
// - Renamed export 'Hp' to 'locationsAreEqual'
// - Renamed export 'Ep' to 'createPath'
// - Renamed export 'q_' to 'updateHistory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_send_to_chat.7c9030fe.js
         * chunkId: 82045
         * moduleId: 193688
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  function n(e) {
    return e.charAt(0) === "/";
  }
  function a(e, t) {
    var r = t;
    var i = r + 1;
    var n = e.length;
    for (; i < n; r += 1, i += 1) {
      e[r] = e[i];
    }
    e.pop();
  }
  function o(e, t = "") {
    var r;
    var i = e && e.split("/") || [];
    var o = t && t.split("/") || [];
    var s = e && n(e);
    var l = t && n(t);
    var c = s || l;
    if (e && n(e)) {
      o = i;
    } else if (i.length) {
      o.pop();
      o = o.concat(i);
    }
    if (!o.length) {
      return "/";
    }
    if (o.length) {
      var u = o[o.length - 1];
      r = u === "." || u === ".." || u === "";
    } else {
      r = false;
    }
    var d = 0;
    var p = o.length;
    for (; p >= 0; p--) {
      var _ = o[p];
      if (_ === ".") {
        a(o, p);
      } else if (_ === "..") {
        a(o, p);
        d++;
      } else if (d) {
        a(o, p);
        d--;
      }
    }
    if (!c) {
      for (; d--; d) {
        o.unshift("..");
      }
    }
    if (!!c && o[0] !== "" && (!o[0] || !n(o[0]))) {
      o.unshift("");
    }
    var h = o.join("/");
    if (r && h.substr(-1) !== "/") {
      h += "/";
    }
    return h;
  }
  function s(e) {
    if (e.valueOf) {
      return e.valueOf();
    } else {
      return Object.prototype.valueOf.call(e);
    }
  }
  var l = function e(t, r) {
    if (t === r) {
      return true;
    }
    if (t == null || r == null) {
      return false;
    }
    if (Array.isArray(t)) {
      return Array.isArray(r) && t.length === r.length && t.every(function (t, i) {
        return e(t, r[i]);
      });
    }
    if (typeof t == "object" || typeof r == "object") {
      var i = s(t);
      var n = s(r);
      if (i !== t || n !== r) {
        return e(i, n);
      } else {
        return Object.keys(Object.assign({}, t, r)).every(function (i) {
          return e(t[i], r[i]);
        });
      }
    }
    return false;
  };
  var invariantCheck = require("invariant-check") /*id: 415427*/;
  function u(e) {
    if (e.charAt(0) === "/") {
      return e;
    } else {
      return "/" + e;
    }
  }
  function d(e) {
    if (e.charAt(0) === "/") {
      return e.substr(1);
    } else {
      return e;
    }
  }
  function p(e, t) {
    if (e.toLowerCase().indexOf(t.toLowerCase()) === 0 && "/?#".indexOf(e.charAt(t.length)) !== -1) {
      return e.substr(t.length);
    } else {
      return e;
    }
  }
  function _(e) {
    if (e.charAt(e.length - 1) === "/") {
      return e.slice(0, -1);
    } else {
      return e;
    }
  }
  function h(e) {
    var t = e.pathname;
    var r = e.search;
    var i = e.hash;
    var n = t || "/";
    if (r && r !== "?") {
      n += r.charAt(0) === "?" ? r : "?" + r;
    }
    if (i && i !== "#") {
      n += i.charAt(0) === "#" ? i : "#" + i;
    }
    return n;
  }
  function m(e, t, r, n) {
    var a;
    var s;
    var l;
    var c;
    var u;
    var d;
    if (typeof e == "string") {
      l = "";
      c = "";
      if ((u = (s = e || "/").indexOf("#")) !== -1) {
        c = s.substr(u);
        s = s.substr(0, u);
      }
      if ((d = s.indexOf("?")) !== -1) {
        l = s.substr(d);
        s = s.substr(0, d);
      }
      (a = {
        pathname: s,
        search: l === "?" ? "" : l,
        hash: c === "#" ? "" : c
      }).state = t;
    } else {
      if ((a = objectAssignUtil.objectAssign({}, e)).pathname === undefined) {
        a.pathname = "";
      }
      if (a.search) {
        if (a.search.charAt(0) !== "?") {
          a.search = "?" + a.search;
        }
      } else {
        a.search = "";
      }
      if (a.hash) {
        if (a.hash.charAt(0) !== "#") {
          a.hash = "#" + a.hash;
        }
      } else {
        a.hash = "";
      }
      if (t !== undefined && a.state === undefined) {
        a.state = t;
      }
    }
    try {
      a.pathname = decodeURI(a.pathname);
    } catch (e) {
      if (e instanceof URIError) {
        throw URIError("Pathname \"" + a.pathname + "\" could not be decoded. This is likely caused by an invalid percent-encoding.");
      }
      throw e;
    }
    if (r) {
      a.key = r;
    }
    if (n) {
      if (a.pathname) {
        if (a.pathname.charAt(0) !== "/") {
          a.pathname = o(a.pathname, n.pathname);
        }
      } else {
        a.pathname = n.pathname;
      }
    } else {
      a.pathname ||= "/";
    }
    return a;
  }
  function g(e, t) {
    return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && l(e.state, t.state);
  }
  function f() {
    var e = null;
    var t = [];
    return {
      setPrompt: function (t) {
        e = t;
        return function () {
          if (e === t) {
            e = null;
          }
        };
      },
      confirmTransitionTo: function (t, r, i, n) {
        if (e != null) {
          var a = typeof e == "function" ? e(t, r) : e;
          if (typeof a == "string") {
            if (typeof i == "function") {
              i(a, n);
            } else {
              n(true);
            }
          } else {
            n(a !== false);
          }
        } else {
          n(true);
        }
      },
      appendListener: function (e) {
        var r = true;
        function i() {
          if (r) {
            e.apply(undefined, arguments);
          }
        }
        t.push(i);
        return function () {
          r = false;
          t = t.filter(function (e) {
            return e !== i;
          });
        };
      },
      notifyListeners: function () {
        var e = arguments.length;
        var r = Array(e);
        var i = 0;
        for (; i < e; i++) {
          r[i] = arguments[i];
        }
        t.forEach(function (e) {
          return e.apply(undefined, r);
        });
      }
    };
  }
  var y = typeof window != "undefined" && !!window.document && !!window.document.createElement;
  function E(e, t) {
    t(window.confirm(e));
  }
  var T = "popstate";
  var v = "hashchange";
  function S() {
    try {
      return window.history.state || {};
    } catch (e) {
      return {};
    }
  }
  function L(e = {}) {
    if (!y) {
      invariantCheck.invariant(false);
    }
    var t;
    var r = window.history;
    var n = ((t = window.navigator.userAgent).indexOf("Android 2.") === -1 && t.indexOf("Android 4.0") === -1 || t.indexOf("Mobile Safari") === -1 || t.indexOf("Chrome") !== -1 || t.indexOf("Windows Phone") !== -1) && window.history && "pushState" in window.history;
    var a = window.navigator.userAgent.indexOf("Trident") !== -1;
    var o = e;
    var s = o.forceRefresh;
    var l = s !== undefined && s;
    var d = o.getUserConfirmation;
    var g = d === undefined ? E : d;
    var L = o.keyLength;
    var k = L === undefined ? 6 : L;
    var C = e.basename ? _(u(e.basename)) : "";
    function A(e) {
      var t = e || {};
      var r = t.key;
      var i = t.state;
      var n = window.location;
      var a = n.pathname + n.search + n.hash;
      if (C) {
        a = p(a, C);
      }
      return m(a, i, r);
    }
    function I() {
      return Math.random().toString(36).substr(2, k);
    }
    var N = f();
    function b(e) {
      objectAssignUtil.objectAssign(H, e);
      H.length = r.length;
      N.notifyListeners(H.location, H.action);
    }
    function R(e) {
      if (e.state !== undefined || navigator.userAgent.indexOf("CriOS") !== -1) {
        P(A(e.state));
      }
    }
    function M() {
      P(A(S()));
    }
    var O = false;
    function P(e) {
      if (O) {
        O = false;
        b();
      } else {
        N.confirmTransitionTo(e, "POP", g, function (t) {
          var r;
          var i;
          var n;
          var a;
          var o;
          if (t) {
            b({
              action: "POP",
              location: e
            });
          } else {
            r = e;
            i = H.location;
            if ((n = D.indexOf(i.key)) === -1) {
              n = 0;
            }
            if ((a = D.indexOf(r.key)) === -1) {
              a = 0;
            }
            if (o = n - a) {
              O = true;
              U(o);
            }
          }
        });
      }
    }
    var w = A(S());
    var D = [w.key];
    function x(e) {
      return C + h(e);
    }
    function U(e) {
      r.go(e);
    }
    var j = 0;
    function F(e) {
      if ((j += e) === 1 && e === 1) {
        window.addEventListener(T, R);
        if (a) {
          window.addEventListener(v, M);
        }
      } else if (j === 0) {
        window.removeEventListener(T, R);
        if (a) {
          window.removeEventListener(v, M);
        }
      }
    }
    var B = false;
    var H = {
      length: r.length,
      action: "POP",
      location: w,
      createHref: x,
      push: function (e, t) {
        var i = "PUSH";
        var a = m(e, t, I(), H.location);
        N.confirmTransitionTo(a, i, g, function (e) {
          if (e) {
            var t = x(a);
            var o = a.key;
            var s = a.state;
            if (n) {
              r.pushState({
                key: o,
                state: s
              }, null, t);
              if (l) {
                window.location.href = t;
              } else {
                var c = D.indexOf(H.location.key);
                var u = D.slice(0, c + 1);
                u.push(a.key);
                D = u;
                b({
                  action: i,
                  location: a
                });
              }
            } else {
              window.location.href = t;
            }
          }
        });
      },
      replace: function (e, t) {
        var i = "REPLACE";
        var a = m(e, t, I(), H.location);
        N.confirmTransitionTo(a, i, g, function (e) {
          if (e) {
            var t = x(a);
            var o = a.key;
            var s = a.state;
            if (n) {
              r.replaceState({
                key: o,
                state: s
              }, null, t);
              if (l) {
                window.location.replace(t);
              } else {
                var c = D.indexOf(H.location.key);
                if (c !== -1) {
                  D[c] = a.key;
                }
                b({
                  action: i,
                  location: a
                });
              }
            } else {
              window.location.replace(t);
            }
          }
        });
      },
      go: U,
      goBack: function () {
        U(-1);
      },
      goForward: function () {
        U(1);
      },
      block: function (e = false) {
        var t = N.setPrompt(e);
        if (!B) {
          F(1);
          B = true;
        }
        return function () {
          if (B) {
            B = false;
            F(-1);
          }
          return t();
        };
      },
      listen: function (e) {
        var t = N.appendListener(e);
        F(1);
        return function () {
          F(-1);
          t();
        };
      }
    };
    return H;
  }
  var k = "hashchange";
  var C = {
    hashbang: {
      encodePath: function (e) {
        if (e.charAt(0) === "!") {
          return e;
        } else {
          return "!/" + d(e);
        }
      },
      decodePath: function (e) {
        if (e.charAt(0) === "!") {
          return e.substr(1);
        } else {
          return e;
        }
      }
    },
    noslash: {
      encodePath: d,
      decodePath: u
    },
    slash: {
      encodePath: u,
      decodePath: u
    }
  };
  function A(e) {
    var t = e.indexOf("#");
    if (t === -1) {
      return e;
    } else {
      return e.slice(0, t);
    }
  }
  function I() {
    var e = window.location.href;
    var t = e.indexOf("#");
    if (t === -1) {
      return "";
    } else {
      return e.substring(t + 1);
    }
  }
  function N(e) {
    window.location.replace(A(window.location.href) + "#" + e);
  }
  function b(e = {}) {
    if (!y) {
      invariantCheck.invariant(false);
    }
    var t = window.history;
    window.navigator.userAgent.indexOf("Firefox");
    var r = e;
    var n = r.getUserConfirmation;
    var a = n === undefined ? E : n;
    var o = r.hashType;
    var s = e.basename ? _(u(e.basename)) : "";
    var l = C[o === undefined ? "slash" : o];
    var d = l.encodePath;
    var g = l.decodePath;
    function T() {
      var e = g(I());
      if (s) {
        e = p(e, s);
      }
      return m(e);
    }
    var v = f();
    function S(e) {
      objectAssignUtil.objectAssign(F, e);
      F.length = t.length;
      v.notifyListeners(F.location, F.action);
    }
    var L = false;
    var b = null;
    function R() {
      var e = I();
      var t = d(e);
      if (e !== t) {
        N(t);
      } else {
        var r;
        var i = T();
        var n = F.location;
        if (!L && n.pathname === i.pathname && n.search === i.search && n.hash === i.hash || b === h(i)) {
          return;
        }
        b = null;
        r = i;
        if (L) {
          L = false;
          S();
        } else {
          v.confirmTransitionTo(r, "POP", a, function (e) {
            var t;
            var i;
            var n;
            var a;
            var o;
            if (e) {
              S({
                action: "POP",
                location: r
              });
            } else {
              t = r;
              i = F.location;
              if ((n = w.lastIndexOf(h(i))) === -1) {
                n = 0;
              }
              if ((a = w.lastIndexOf(h(t))) === -1) {
                a = 0;
              }
              if (o = n - a) {
                L = true;
                D(o);
              }
            }
          });
        }
      }
    }
    var M = I();
    var O = d(M);
    if (M !== O) {
      N(O);
    }
    var P = T();
    var w = [h(P)];
    function D(e) {
      t.go(e);
    }
    var x = 0;
    function U(e) {
      if ((x += e) === 1 && e === 1) {
        window.addEventListener(k, R);
      } else if (x === 0) {
        window.removeEventListener(k, R);
      }
    }
    var j = false;
    var F = {
      length: t.length,
      action: "POP",
      location: P,
      createHref: function (e) {
        var t = document.querySelector("base");
        var r = "";
        if (t && t.getAttribute("href")) {
          r = A(window.location.href);
        }
        return r + "#" + d(s + h(e));
      },
      push: function (e, t) {
        var r = "PUSH";
        var i = m(e, undefined, undefined, F.location);
        v.confirmTransitionTo(i, r, a, function (e) {
          if (e) {
            var t = h(i);
            var n = d(s + t);
            if (I() !== n) {
              b = t;
              window.location.hash = n;
              var a = w.lastIndexOf(h(F.location));
              var o = w.slice(0, a + 1);
              o.push(t);
              w = o;
              S({
                action: r,
                location: i
              });
            } else {
              S();
            }
          }
        });
      },
      replace: function (e, t) {
        var r = "REPLACE";
        var i = m(e, undefined, undefined, F.location);
        v.confirmTransitionTo(i, r, a, function (e) {
          if (e) {
            var t = h(i);
            var n = d(s + t);
            if (I() !== n) {
              b = t;
              N(n);
            }
            var a = w.indexOf(h(F.location));
            if (a !== -1) {
              w[a] = t;
            }
            S({
              action: r,
              location: i
            });
          }
        });
      },
      go: D,
      goBack: function () {
        D(-1);
      },
      goForward: function () {
        D(1);
      },
      block: function (e = false) {
        var t = v.setPrompt(e);
        if (!j) {
          U(1);
          j = true;
        }
        return function () {
          if (j) {
            j = false;
            U(-1);
          }
          return t();
        };
      },
      listen: function (e) {
        var t = v.appendListener(e);
        U(1);
        return function () {
          U(-1);
          t();
        };
      }
    };
    return F;
  }
  function R(e, t, r) {
    return Math.min(Math.max(e, t), r);
  }
  function M(e = {}) {
    var t = e;
    var r = t.getUserConfirmation;
    var n = t.initialEntries;
    var a = n === undefined ? ["/"] : n;
    var o = t.initialIndex;
    var s = t.keyLength;
    var l = s === undefined ? 6 : s;
    var c = f();
    function u(e) {
      objectAssignUtil.objectAssign(y, e);
      y.length = y.entries.length;
      c.notifyListeners(y.location, y.action);
    }
    function d() {
      return Math.random().toString(36).substr(2, l);
    }
    var p = R(o === undefined ? 0 : o, 0, a.length - 1);
    var _ = a.map(function (e) {
      if (typeof e == "string") {
        return m(e, undefined, d());
      } else {
        return m(e, undefined, e.key || d());
      }
    });
    function g(e) {
      var t = R(y.index + e, 0, y.entries.length - 1);
      var i = y.entries[t];
      c.confirmTransitionTo(i, "POP", r, function (e) {
        if (e) {
          u({
            action: "POP",
            location: i,
            index: t
          });
        } else {
          u();
        }
      });
    }
    var y = {
      length: _.length,
      action: "POP",
      location: _[p],
      index: p,
      entries: _,
      createHref: h,
      push: function (e, t) {
        var i = "PUSH";
        var n = m(e, t, d(), y.location);
        c.confirmTransitionTo(n, i, r, function (e) {
          if (e) {
            var t = y.index + 1;
            var r = y.entries.slice(0);
            if (r.length > t) {
              r.splice(t, r.length - t, n);
            } else {
              r.push(n);
            }
            u({
              action: i,
              location: n,
              index: t,
              entries: r
            });
          }
        });
      },
      replace: function (e, t) {
        var i = "REPLACE";
        var n = m(e, t, d(), y.location);
        c.confirmTransitionTo(n, i, r, function (e) {
          if (e) {
            y.entries[y.index] = n;
            u({
              action: i,
              location: n
            });
          }
        });
      },
      go: g,
      goBack: function () {
        g(-1);
      },
      goForward: function () {
        g(1);
      },
      canGo: function (e) {
        var t = y.index + e;
        return t >= 0 && t < y.entries.length;
      },
      block: function (e = false) {
        return c.setPrompt(e);
      },
      listen: function (e) {
        return c.appendListener(e);
      }
    };
    return y;
  }
  require.d(exports, {
    createMemoryHistory: function () {
      return M;
    },
    createBrowserHistory: function () {
      return L;
    },
    createLocation: function () {
      return m;
    },
    locationsAreEqual: function () {
      return g;
    },
    createPath: function () {
      return h;
    },
    updateHistory: function () {
      return b;
    }
  });
}