// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q_' to 'createHashHistory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_preview-component.a967b401.js
         * chunkId: 28815
         * moduleId: 896915
         */
module.exports = function (module, exports, require) {
  var emptyModuleExport_1 = require("empty-module-export_1") /*id: 277406*/;
  var o = emptyModuleExport_1;
  var invariantErrorUtil = require("invariant-error-util") /*id: 827168*/;
  var l = invariantErrorUtil;
  function c(e) {
    return e.charAt(0) === "/";
  }
  function s(e, n) {
    var i = n;
    var r = i + 1;
    var o = e.length;
    for (; r < o; i += 1, r += 1) {
      e[i] = e[r];
    }
    e.pop();
  }
  function u(e, n = "") {
    var i = e && e.split("/") || [];
    var r = n && n.split("/") || [];
    var o = e && c(e);
    var a = n && c(n);
    var l = o || a;
    if (e && c(e)) {
      r = i;
    } else if (i.length) {
      r.pop();
      r = r.concat(i);
    }
    if (!r.length) {
      return "/";
    }
    var u = undefined;
    if (r.length) {
      var d = r[r.length - 1];
      u = d === "." || d === ".." || d === "";
    } else {
      u = false;
    }
    var f = 0;
    var h = r.length;
    for (; h >= 0; h--) {
      var p = r[h];
      if (p === ".") {
        s(r, h);
      } else if (p === "..") {
        s(r, h);
        f++;
      } else if (f) {
        s(r, h);
        f--;
      }
    }
    if (!l) {
      for (; f--; f) {
        r.unshift("..");
      }
    }
    if (!!l && r[0] !== "" && (!r[0] || !c(r[0]))) {
      r.unshift("");
    }
    var m = r.join("/");
    if (u && m.substr(-1) !== "/") {
      m += "/";
    }
    return m;
  }
  var d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof e;
    }
  };
  var f = function e(n, i) {
    if (n === i) {
      return true;
    }
    if (n == null || i == null) {
      return false;
    }
    if (Array.isArray(n)) {
      return Array.isArray(i) && n.length === i.length && n.every(function (n, r) {
        return e(n, i[r]);
      });
    }
    var r = n === undefined ? "undefined" : d(n);
    if (r !== (i === undefined ? "undefined" : d(i))) {
      return false;
    }
    if (r === "object") {
      var o = n.valueOf();
      var a = i.valueOf();
      if (o !== n || a !== i) {
        return e(o, a);
      }
      var l = Object.keys(n);
      var c = Object.keys(i);
      return l.length === c.length && l.every(function (r) {
        return e(n[r], i[r]);
      });
    }
    return false;
  };
  function h(e) {
    if (e.charAt(0) === "/") {
      return e;
    } else {
      return "/" + e;
    }
  }
  function p(e) {
    if (e.charAt(0) === "/") {
      return e.substr(1);
    } else {
      return e;
    }
  }
  function m(e, n) {
    return RegExp("^" + n + "(\\/|\\?|#|$)", "i").test(e);
  }
  function v(e) {
    var n = e || "/";
    var i = "";
    var r = "";
    var o = n.indexOf("#");
    if (o !== -1) {
      r = n.substr(o);
      n = n.substr(0, o);
    }
    var a = n.indexOf("?");
    if (a !== -1) {
      i = n.substr(a);
      n = n.substr(0, a);
    }
    return {
      pathname: n,
      search: i === "?" ? "" : i,
      hash: r === "#" ? "" : r
    };
  }
  function g(e) {
    var n = e.pathname;
    var i = e.search;
    var r = e.hash;
    var o = n || "/";
    if (i && i !== "?") {
      o += i.charAt(0) === "?" ? i : "?" + i;
    }
    if (r && r !== "#") {
      o += r.charAt(0) === "#" ? r : "#" + r;
    }
    return o;
  }
  var b = Object.assign || function (e) {
    for (var n = 1; n < arguments.length; n++) {
      var i = arguments[n];
      for (var r in i) {
        if (Object.prototype.hasOwnProperty.call(i, r)) {
          e[r] = i[r];
        }
      }
    }
    return e;
  };
  function y(e, n, i, r) {
    var o = undefined;
    if (typeof e == "string") {
      (o = v(e)).state = n;
    } else {
      if ((o = b({}, e)).pathname === undefined) {
        o.pathname = "";
      }
      if (o.search) {
        if (o.search.charAt(0) !== "?") {
          o.search = "?" + o.search;
        }
      } else {
        o.search = "";
      }
      if (o.hash) {
        if (o.hash.charAt(0) !== "#") {
          o.hash = "#" + o.hash;
        }
      } else {
        o.hash = "";
      }
      if (n !== undefined && o.state === undefined) {
        o.state = n;
      }
    }
    try {
      o.pathname = decodeURI(o.pathname);
    } catch (e) {
      if (e instanceof URIError) {
        throw URIError("Pathname \"" + o.pathname + "\" could not be decoded. This is likely caused by an invalid percent-encoding.");
      }
      throw e;
    }
    if (i) {
      o.key = i;
    }
    if (r) {
      if (o.pathname) {
        if (o.pathname.charAt(0) !== "/") {
          o.pathname = u(o.pathname, r.pathname);
        }
      } else {
        o.pathname = r.pathname;
      }
    } else {
      o.pathname ||= "/";
    }
    return o;
  }
  function k() {
    var e = null;
    var n = [];
    return {
      setPrompt: function (n) {
        o(e == null, "A history supports only one prompt at a time");
        e = n;
        return function () {
          if (e === n) {
            e = null;
          }
        };
      },
      confirmTransitionTo: function (n, i, r, a) {
        if (e != null) {
          var l = typeof e == "function" ? e(n, i) : e;
          if (typeof l == "string") {
            if (typeof r == "function") {
              r(l, a);
            } else {
              o(false, "A history needs a getUserConfirmation function in order to use a prompt message");
              a(true);
            }
          } else {
            a(l !== false);
          }
        } else {
          a(true);
        }
      },
      appendListener: function (e) {
        var i = true;
        function r() {
          if (i) {
            e.apply(undefined, arguments);
          }
        }
        n.push(r);
        return function () {
          i = false;
          n = n.filter(function (e) {
            return e !== r;
          });
        };
      },
      notifyListeners: function () {
        var e = arguments.length;
        var i = Array(e);
        var r = 0;
        for (; r < e; r++) {
          i[r] = arguments[r];
        }
        n.forEach(function (e) {
          return e.apply(undefined, i);
        });
      }
    };
  }
  var _ = typeof window != "undefined" && !!window.document && !!window.document.createElement;
  function E(e, n) {
    return n(window.confirm(e));
  }
  var w = Object.assign || function (e) {
    for (var n = 1; n < arguments.length; n++) {
      var i = arguments[n];
      for (var r in i) {
        if (Object.prototype.hasOwnProperty.call(i, r)) {
          e[r] = i[r];
        }
      }
    }
    return e;
  };
  var C = "hashchange";
  var Z = {
    hashbang: {
      encodePath: function (e) {
        if (e.charAt(0) === "!") {
          return e;
        } else {
          return "!/" + p(e);
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
      encodePath: p,
      decodePath: h
    },
    slash: {
      encodePath: h,
      decodePath: h
    }
  };
  function x() {
    var e = window.location.href;
    var n = e.indexOf("#");
    if (n === -1) {
      return "";
    } else {
      return e.substring(n + 1);
    }
  }
  function S(e) {
    var n = window.location.href.indexOf("#");
    window.location.replace(window.location.href.slice(0, n >= 0 ? n : 0) + "#" + e);
  }
  function T() {
    var e;
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    l(_, "Hash history needs a DOM");
    var i = window.history;
    var r = window.navigator.userAgent.indexOf("Firefox") === -1;
    var a = n.getUserConfirmation;
    var c = a === undefined ? E : a;
    var s = n.hashType;
    var u = n.basename ? (e = h(n.basename)).charAt(e.length - 1) === "/" ? e.slice(0, -1) : e : "";
    var d = Z[s === undefined ? "slash" : s];
    var p = d.encodePath;
    var v = d.decodePath;
    function b() {
      var e;
      var n = v(x());
      o(!u || m(n, u), "You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path \"" + n + "\" to begin with \"" + u + "\".");
      if (u) {
        n = m(e = n, u) ? e.substr(u.length) : e;
      }
      return y(n);
    }
    var T = k();
    function R(e) {
      w(W, e);
      W.length = i.length;
      T.notifyListeners(W.location, W.action);
    }
    var I = false;
    var A = null;
    function M() {
      var e = x();
      var n = p(e);
      if (e !== n) {
        S(n);
      } else {
        var i = b();
        var r = W.location;
        if (!I && r.pathname === i.pathname && r.search === i.search && r.hash === i.hash && r.key === i.key && f(r.state, i.state) || A === g(i)) {
          return;
        }
        A = null;
        B(i);
      }
    }
    function B(e) {
      if (I) {
        I = false;
        R();
      } else {
        T.confirmTransitionTo(e, "POP", c, function (n) {
          if (n) {
            R({
              action: "POP",
              location: e
            });
          } else {
            O(e);
          }
        });
      }
    }
    function O(e) {
      var n = W.location;
      var i = D.lastIndexOf(g(n));
      if (i === -1) {
        i = 0;
      }
      var r = D.lastIndexOf(g(e));
      if (r === -1) {
        r = 0;
      }
      var o = i - r;
      if (o) {
        I = true;
        H(o);
      }
    }
    var P = x();
    var N = p(P);
    if (P !== N) {
      S(N);
    }
    var L = b();
    var D = [g(L)];
    function H(e) {
      o(r, "Hash history go(n) causes a full page reload in this browser");
      i.go(e);
    }
    var $ = 0;
    function F(e) {
      var n;
      var i;
      if (($ += e) === 1) {
        if ((n = window).addEventListener) {
          n.addEventListener(C, M, false);
        } else {
          n.attachEvent("on" + C, M);
        }
      } else if ($ === 0) {
        if ((i = window).removeEventListener) {
          i.removeEventListener(C, M, false);
        } else {
          i.detachEvent("on" + C, M);
        }
      }
    }
    var z = false;
    var W = {
      length: i.length,
      action: "POP",
      location: L,
      createHref: function (e) {
        return "#" + p(u + g(e));
      },
      push: function (e, n) {
        o(n === undefined, "Hash history cannot push state; it is ignored");
        var i = "PUSH";
        var r = y(e, undefined, undefined, W.location);
        T.confirmTransitionTo(r, i, c, function (e) {
          if (e) {
            var n = g(r);
            var a = p(u + n);
            if (x() !== a) {
              A = n;
              window.location.hash = a;
              var l = D.lastIndexOf(g(W.location));
              var c = D.slice(0, l === -1 ? 0 : l + 1);
              c.push(n);
              D = c;
              R({
                action: i,
                location: r
              });
            } else {
              o(false, "Hash history cannot PUSH the same path; a new entry will not be added to the history stack");
              R();
            }
          }
        });
      },
      replace: function (e, n) {
        o(n === undefined, "Hash history cannot replace state; it is ignored");
        var i = "REPLACE";
        var r = y(e, undefined, undefined, W.location);
        T.confirmTransitionTo(r, i, c, function (e) {
          if (e) {
            var n = g(r);
            var o = p(u + n);
            if (x() !== o) {
              A = n;
              S(o);
            }
            var a = D.indexOf(g(W.location));
            if (a !== -1) {
              D[a] = n;
            }
            R({
              action: i,
              location: r
            });
          }
        });
      },
      go: H,
      goBack: function () {
        return H(-1);
      },
      goForward: function () {
        return H(1);
      },
      block: function (e = false) {
        var n = T.setPrompt(e);
        if (!z) {
          F(1);
          z = true;
        }
        return function () {
          if (z) {
            z = false;
            F(-1);
          }
          return n();
        };
      },
      listen: function (e) {
        var n = T.appendListener(e);
        F(1);
        return function () {
          F(-1);
          n();
        };
      }
    };
    return W;
  }
  require.d(exports, {
    createHashHistory: function () {
      return T;
    }
  });
}