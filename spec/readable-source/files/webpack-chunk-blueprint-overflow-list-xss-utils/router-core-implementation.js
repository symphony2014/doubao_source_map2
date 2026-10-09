// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ep' to 'formatPath'
// - Renamed export 'J0' to 'invariant'
// - Renamed export 'LX' to 'matchPath'
// - Renamed export 'OF' to 'ErrorResponse'
// - Renamed export 'RQ' to 'joinPaths'
// - Renamed export 'WK' to 'isErrorResponse'
// - Renamed export 'WS' to 'createMatch'
// - Renamed export 'X3' to 'RouterError'
// - Renamed export 'Zn' to 'stripBasename'
// - Renamed export 'aU' to 'Action'
// - Renamed export 'cP' to 'parsePath'
// - Renamed export 'cm' to 'getMatchPaths'
// - Renamed export 'fp' to 'matchRoutes'
// - Renamed export 'lX' to 'createBrowserHist'
// - Renamed export 'p7' to 'createRouter'
// - Renamed export 'pC' to 'resolveTo'
// - Renamed export 'q_' to 'createHashHistory'
// - Renamed export 'qp' to 'defaultBlocker'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 188358
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var a;
  function s() {
    return (s = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  (o = r ||= {}).Pop = "POP";
  o.Push = "PUSH";
  o.Replace = "REPLACE";
  let u = "popstate";
  function c(e = {}) {
    return m(function (e, t) {
      let {
        pathname: n,
        search: r,
        hash: i
      } = e.location;
      return p("", {
        pathname: n,
        search: r,
        hash: i
      }, t.state && t.state.usr || null, t.state && t.state.key || "default");
    }, function (e, t) {
      if (typeof t == "string") {
        return t;
      } else {
        return g(t);
      }
    }, null, e);
  }
  function l(e = {}) {
    return m(function (e, t) {
      let {
        pathname: n = "/",
        search: r = "",
        hash: i = ""
      } = v(e.location.hash.substr(1));
      if (!n.startsWith("/") && !n.startsWith(".")) {
        n = "/" + n;
      }
      return p("", {
        pathname: n,
        search: r,
        hash: i
      }, t.state && t.state.usr || null, t.state && t.state.key || "default");
    }, function (e, t) {
      let n = e.document.querySelector("base");
      let r = "";
      if (n && n.getAttribute("href")) {
        let t = e.location.href;
        let n = t.indexOf("#");
        r = n === -1 ? t : t.slice(0, n);
      }
      return r + "#" + (typeof t == "string" ? t : g(t));
    }, function (e, t) {
      h(e.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(t) + ")");
    }, e);
  }
  function f(e, t) {
    if (e === false || e == null) {
      throw Error(t);
    }
  }
  function h(e, t) {
    if (!e) {
      try {
        throw Error(t);
      } catch (e) {}
    }
  }
  function d(e, t) {
    return {
      usr: e.state,
      key: e.key,
      idx: t
    };
  }
  function p(e, t, n = null, r) {
    return s({
      pathname: typeof e == "string" ? e : e.pathname,
      search: "",
      hash: ""
    }, typeof t == "string" ? v(t) : t, {
      state: n,
      key: t && t.key || r || Math.random().toString(36).substr(2, 8)
    });
  }
  function g(e) {
    let {
      pathname: t = "/",
      search: n = "",
      hash: r = ""
    } = e;
    if (n && n !== "?") {
      t += n.charAt(0) === "?" ? n : "?" + n;
    }
    if (r && r !== "#") {
      t += r.charAt(0) === "#" ? r : "#" + r;
    }
    return t;
  }
  function v(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      if (n >= 0) {
        t.hash = e.substr(n);
        e = e.substr(0, n);
      }
      let r = e.indexOf("?");
      if (r >= 0) {
        t.search = e.substr(r);
        e = e.substr(0, r);
      }
      if (e) {
        t.pathname = e;
      }
    }
    return t;
  }
  function m(e, t, n, i = {}) {
    let {
      window: o = document.defaultView,
      v5Compat: a = false
    } = i;
    let c = o.history;
    let l = r.Pop;
    let h = null;
    let v = m();
    function m() {
      return (c.state || {
        idx: null
      }).idx;
    }
    function y() {
      l = r.Pop;
      let e = m();
      let t = e == null ? null : e - v;
      v = e;
      if (h) {
        h({
          action: l,
          location: _.location,
          delta: t
        });
      }
    }
    function b(e) {
      let t = o.location.origin !== "null" ? o.location.origin : o.location.href;
      let n = typeof e == "string" ? e : g(e);
      f(t, "No window.location.(origin|href) available to create URL for href: " + (n = n.replace(/ $/, "%20")));
      return new URL(n, t);
    }
    if (v == null) {
      v = 0;
      c.replaceState(s({}, c.state, {
        idx: v
      }), "");
    }
    let _ = {
      get action() {
        return l;
      },
      get location() {
        return e(o, c);
      },
      listen(e) {
        if (h) {
          throw Error("A history only accepts one active listener");
        }
        o.addEventListener(u, y);
        h = e;
        return () => {
          o.removeEventListener(u, y);
          h = null;
        };
      },
      createHref: e => t(o, e),
      createURL: b,
      encodeLocation(e) {
        let t = b(e);
        return {
          pathname: t.pathname,
          search: t.search,
          hash: t.hash
        };
      },
      push: function (e, t) {
        l = r.Push;
        let i = p(_.location, e, t);
        if (n) {
          n(i, e);
        }
        let s = d(i, v = m() + 1);
        let u = _.createHref(i);
        try {
          c.pushState(s, "", u);
        } catch (e) {
          if (e instanceof DOMException && e.name === "DataCloneError") {
            throw e;
          }
          o.location.assign(u);
        }
        if (a && h) {
          h({
            action: l,
            location: _.location,
            delta: 1
          });
        }
      },
      replace: function (e, t) {
        l = r.Replace;
        let i = p(_.location, e, t);
        if (n) {
          n(i, e);
        }
        let o = d(i, v = m());
        let s = _.createHref(i);
        c.replaceState(o, "", s);
        if (a && h) {
          h({
            action: l,
            location: _.location,
            delta: 0
          });
        }
      },
      go: e => c.go(e)
    };
    return _;
  }
  (a = i ||= {}).data = "data";
  a.deferred = "deferred";
  a.redirect = "redirect";
  a.error = "error";
  let y = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
  function b(e, t, n = [], r = {}) {
    return e.map((e, i) => {
      let o = [...n, String(i)];
      let a = typeof e.id == "string" ? e.id : o.join("-");
      f(e.index !== true || !e.children, "Cannot specify children on an index route");
      f(!r[a], "Found a route id collision on id \"" + a + "\".  Route id's must be globally unique within Data Router usages");
      if (e.index === true) {
        let n = s({}, e, t(e), {
          id: a
        });
        r[a] = n;
        return n;
      }
      {
        let n = s({}, e, t(e), {
          id: a,
          children: undefined
        });
        r[a] = n;
        if (e.children) {
          n.children = b(e.children, t, o, r);
        }
        return n;
      }
    });
  }
  function _(e, t, n = "/") {
    return w(e, t, n, false);
  }
  function w(e, t, n, r) {
    let i = O((typeof t == "string" ? v(t) : t).pathname || "/", n);
    if (i == null) {
      return null;
    }
    let o = function e(t, n = [], r = [], i = "") {
      let o = (t, o, a) => {
        let s = {
          relativePath: a === undefined ? t.path || "" : a,
          caseSensitive: t.caseSensitive === true,
          childrenIndex: o,
          route: t
        };
        if (s.relativePath.startsWith("/")) {
          f(s.relativePath.startsWith(i), "Absolute route path \"" + s.relativePath + "\" nested under path \"" + i + "\" is not valid. An absolute child route path must start with the combined path of all its parent routes.");
          s.relativePath = s.relativePath.slice(i.length);
        }
        let u = M([i, s.relativePath]);
        let c = r.concat(s);
        if (t.children && t.children.length > 0) {
          f(t.index !== true, "Index routes must not have child routes. Please remove all child routes from route path \"" + u + "\".");
          e(t.children, n, c, u);
        }
        if (t.path != null || t.index) {
          var l;
          var h;
          let e;
          let r;
          n.push({
            path: u,
            score: (l = u, h = t.index, r = (e = l.split("/")).length, e.some(x) && (r += -2), h && (r += 2), e.filter(e => !x(e)).reduce((e, t) => e + (S.test(t) ? 3 : t === "" ? 1 : 10), r)),
            routesMeta: c
          });
        }
      };
      t.forEach((e, t) => {
        var n;
        if (e.path !== "" && (n = e.path) != null && n.includes("?")) {
          for (let n of function e(t) {
            let n = t.split("/");
            if (n.length === 0) {
              return [];
            }
            let [r, ...i] = n;
            let o = r.endsWith("?");
            let a = r.replace(/\?$/, "");
            if (i.length === 0) {
              if (o) {
                return [a, ""];
              } else {
                return [a];
              }
            }
            let s = e(i.join("/"));
            let u = [];
            u.push(...s.map(e => e === "" ? a : [a, e].join("/")));
            if (o) {
              u.push(...s);
            }
            return u.map(e => t.startsWith("/") && e === "" ? "/" : e);
          }(e.path)) {
            o(e, t, n);
          }
        } else {
          o(e, t);
        }
      });
      return n;
    }(e);
    (function (e) {
      e.sort((e, t) => {
        var n;
        var r;
        if (e.score !== t.score) {
          return t.score - e.score;
        } else {
          n = e.routesMeta.map(e => e.childrenIndex);
          r = t.routesMeta.map(e => e.childrenIndex);
          if (n.length === r.length && n.slice(0, -1).every((e, t) => e === r[t])) {
            return n[n.length - 1] - r[r.length - 1];
          } else {
            return 0;
          }
        }
      });
    })(o);
    let a = null;
    for (let e = 0; a == null && e < o.length; ++e) {
      let t = function (e) {
        try {
          return e.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
        } catch (t) {
          h(false, "The URL path \"" + e + "\" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (" + t + ").");
          return e;
        }
      }(i);
      a = function (e, t, n = false) {
        let {
          routesMeta: r
        } = e;
        let i = {};
        let o = "/";
        let a = [];
        for (let e = 0; e < r.length; ++e) {
          let s = r[e];
          let u = e === r.length - 1;
          let c = o === "/" ? t : t.slice(o.length) || "/";
          let l = k({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: u
          }, c);
          let f = s.route;
          if (!l && u && n && !r[r.length - 1].route.index) {
            l = k({
              path: s.relativePath,
              caseSensitive: s.caseSensitive,
              end: false
            }, c);
          }
          if (!l) {
            return null;
          }
          Object.assign(i, l.params);
          a.push({
            params: i,
            pathname: M([o, l.pathname]),
            pathnameBase: P(M([o, l.pathnameBase])),
            route: f
          });
          if (l.pathnameBase !== "/") {
            o = M([o, l.pathnameBase]);
          }
        }
        return a;
      }(o[e], t, r);
    }
    return a;
  }
  function E(e, t) {
    let {
      route: n,
      pathname: r,
      params: i
    } = e;
    return {
      id: n.id,
      pathname: r,
      params: i,
      data: t[n.id],
      handle: n.handle
    };
  }
  let S = /^:[\w-]+$/;
  let x = e => e === "*";
  function k(e, t) {
    var n;
    var r;
    var i;
    let o;
    let a;
    if (typeof e == "string") {
      e = {
        path: e,
        caseSensitive: false,
        end: true
      };
    }
    n = e.path;
    r = e.caseSensitive;
    i = e.end;
    if (r === undefined) {
      r = false;
    }
    if (i === undefined) {
      i = true;
    }
    h(n === "*" || !n.endsWith("*") || n.endsWith("/*"), "Route path \"" + n + "\" will be treated as if it were \"" + n.replace(/\*$/, "/*") + "\" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to \"" + n.replace(/\*$/, "/*") + "\".");
    o = [];
    a = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n) => {
      o.push({
        paramName: t,
        isOptional: n != null
      });
      if (n) {
        return "/?([^\\/]+)?";
      } else {
        return "/([^\\/]+)";
      }
    });
    if (n.endsWith("*")) {
      o.push({
        paramName: "*"
      });
      a += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (i) {
      a += "\\/*$";
    } else if (n !== "" && n !== "/") {
      a += "(?:(?=\\/|$))";
    }
    let [s, u] = [new RegExp(a, r ? undefined : "i"), o];
    let c = t.match(s);
    if (!c) {
      return null;
    }
    let l = c[0];
    let f = l.replace(/(.)\/+$/, "$1");
    let d = c.slice(1);
    return {
      params: u.reduce((e, t, n) => {
        let {
          paramName: r,
          isOptional: i
        } = t;
        if (r === "*") {
          let e = d[n] || "";
          f = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1");
        }
        let o = d[n];
        if (i && !o) {
          e[r] = undefined;
        } else {
          e[r] = (o || "").replace(/%2F/g, "/");
        }
        return e;
      }, {}),
      pathname: l,
      pathnameBase: f,
      pattern: e
    };
  }
  function O(e, t) {
    if (t === "/") {
      return e;
    }
    if (!e.toLowerCase().startsWith(t.toLowerCase())) {
      return null;
    }
    let n = t.endsWith("/") ? t.length - 1 : t.length;
    let r = e.charAt(n);
    if (r && r !== "/") {
      return null;
    } else {
      return e.slice(n) || "/";
    }
  }
  function A(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [") + JSON.stringify(r) + "].  Please separate it out to the `to." + n + "` field. Alternatively you may provide the full path as a string in <Link to=\"...\"> and the router will parse it for you.";
  }
  function T(e) {
    return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
  }
  function R(e, t) {
    let n = T(e);
    if (t) {
      return n.map((e, t) => t === n.length - 1 ? e.pathname : e.pathnameBase);
    } else {
      return n.map(e => e.pathnameBase);
    }
  }
  function C(e, t, n, r) {
    let i;
    let o;
    if (r === undefined) {
      r = false;
    }
    if (typeof e == "string") {
      i = v(e);
    } else {
      f(!(i = s({}, e)).pathname || !i.pathname.includes("?"), A("?", "pathname", "search", i));
      f(!i.pathname || !i.pathname.includes("#"), A("#", "pathname", "hash", i));
      f(!i.search || !i.search.includes("#"), A("#", "search", "hash", i));
    }
    let a = e === "" || i.pathname === "";
    let u = a ? "/" : i.pathname;
    if (u == null) {
      o = n;
    } else {
      let e = t.length - 1;
      if (!r && u.startsWith("..")) {
        let t = u.split("/");
        while (t[0] === "..") {
          t.shift();
          e -= 1;
        }
        i.pathname = t.join("/");
      }
      o = e >= 0 ? t[e] : "/";
    }
    let c = function (e, t) {
      var n;
      let r;
      if (t === undefined) {
        t = "/";
      }
      let {
        pathname: i,
        search: o = "",
        hash: a = ""
      } = typeof e == "string" ? v(e) : e;
      return {
        pathname: i ? i.startsWith("/") ? i : (n = i, r = t.replace(/\/+$/, "").split("/"), n.split("/").forEach(e => {
          if (e === "..") {
            if (r.length > 1) {
              r.pop();
            }
          } else if (e !== ".") {
            r.push(e);
          }
        }), r.length > 1 ? r.join("/") : "/") : t,
        search: D(o),
        hash: j(a)
      };
    }(i, o);
    let l = u && u !== "/" && u.endsWith("/");
    let h = (a || u === ".") && n.endsWith("/");
    if (!c.pathname.endsWith("/") && (l || h)) {
      c.pathname += "/";
    }
    return c;
  }
  let M = e => e.join("/").replace(/\/\/+/g, "/");
  let P = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");
  let D = e => e && e !== "?" ? e.startsWith("?") ? e : "?" + e : "";
  let j = e => e && e !== "#" ? e.startsWith("#") ? e : "#" + e : "";
  class I extends Error {}
  class N {
    constructor(e, t, n, r = false) {
      this.status = e;
      this.statusText = t || "";
      this.internal = r;
      if (n instanceof Error) {
        this.data = n.toString();
        this.error = n;
      } else {
        this.data = n;
      }
    }
  }
  function L(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
  }
  let B = ["post", "put", "patch", "delete"];
  let Z = new Set(B);
  let U = new Set(["get", ...B]);
  let z = new Set([301, 302, 303, 307, 308]);
  let F = new Set([307, 308]);
  let H = {
    state: "idle",
    location: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
  };
  let G = {
    state: "idle",
    data: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
  };
  let V = {
    state: "unblocked",
    proceed: undefined,
    reset: undefined,
    location: undefined
  };
  let $ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  let W = e => ({
    hasErrorBoundary: !!e.hasErrorBoundary
  });
  let q = "remix-router-transitions";
  function K(e) {
    let t;
    let n;
    let o;
    let a;
    let u;
    let c;
    let l = e.window ? e.window : typeof window != "undefined" ? window : undefined;
    let d = l !== undefined && l.document !== undefined && l.document.createElement !== undefined;
    let g = !d;
    f(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    if (e.mapRouteProperties) {
      t = e.mapRouteProperties;
    } else if (e.detectErrorBoundary) {
      let n = e.detectErrorBoundary;
      t = e => ({
        hasErrorBoundary: n(e)
      });
    } else {
      t = W;
    }
    let v = {};
    let m = b(e.routes, t, undefined, v);
    let y = e.basename || "/";
    let S = e.dataStrategy || eo;
    let x = e.patchRoutesOnNavigation;
    let k = s({
      v7_fetcherPersist: false,
      v7_normalizeFormMethod: false,
      v7_partialHydration: false,
      v7_prependBasename: false,
      v7_relativeSplatPath: false,
      v7_skipActionErrorRevalidation: false
    }, e.future);
    let A = null;
    let T = new Set();
    let R = null;
    let C = null;
    let M = null;
    let P = e.hydrationData != null;
    let D = _(m, e.history.location, y);
    let j = null;
    if (D == null && !x) {
      let t = ey(404, {
        pathname: e.history.location.pathname
      });
      let {
        matches: n,
        route: r
      } = em(m);
      D = n;
      j = {
        [r.id]: t
      };
    }
    if (D && !e.hydrationData && ti(D, m, e.history.location.pathname).active) {
      D = null;
    }
    if (D) {
      if (D.some(e => e.route.lazy)) {
        o = false;
      } else if (D.some(e => e.route.loader)) {
        if (k.v7_partialHydration) {
          let t = e.hydrationData ? e.hydrationData.loaderData : null;
          let n = e.hydrationData ? e.hydrationData.errors : null;
          if (n) {
            let e = D.findIndex(e => n[e.route.id] !== undefined);
            o = D.slice(0, e + 1).every(e => !ee(e.route, t, n));
          } else {
            o = D.every(e => !ee(e.route, t, n));
          }
        } else {
          o = e.hydrationData != null;
        }
      } else {
        o = true;
      }
    } else {
      o = false;
      D = [];
      if (k.v7_partialHydration) {
        let t = ti(null, m, e.history.location.pathname);
        if (t.active && t.matches) {
          D = t.matches;
        }
      }
    }
    let I = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: D,
      initialized: o,
      navigation: H,
      restoreScrollPosition: e.hydrationData == null && null,
      preventScrollReset: false,
      revalidation: "idle",
      loaderData: e.hydrationData && e.hydrationData.loaderData || {},
      actionData: e.hydrationData && e.hydrationData.actionData || null,
      errors: e.hydrationData && e.hydrationData.errors || j,
      fetchers: new Map(),
      blockers: new Map()
    };
    let N = r.Pop;
    let B = false;
    let Z = false;
    let U = new Map();
    let K = null;
    let Y = false;
    let et = false;
    let en = [];
    let ei = new Set();
    let es = new Map();
    let ef = 0;
    let eh = -1;
    let e_ = new Map();
    let ex = new Set();
    let eC = new Map();
    let eN = new Map();
    let eL = new Set();
    let eB = new Map();
    let eZ = new Map();
    function eU(e, t = {}) {
      I = s({}, I, e);
      let n = [];
      let r = [];
      if (k.v7_fetcherPersist) {
        I.fetchers.forEach((e, t) => {
          if (e.state === "idle") {
            if (eL.has(t)) {
              r.push(t);
            } else {
              n.push(t);
            }
          }
        });
      }
      [...T].forEach(e => e(I, {
        deletedFetchers: r,
        viewTransitionOpts: t.viewTransitionOpts,
        flushSync: t.flushSync === true
      }));
      if (k.v7_fetcherPersist) {
        n.forEach(e => I.fetchers.delete(e));
        r.forEach(e => e2(e));
      }
    }
    function ez(t, i, o) {
      var a;
      var u;
      let c;
      let l;
      let {
        flushSync: f
      } = o === undefined ? {} : o;
      let h = I.actionData != null && I.navigation.formMethod != null && eO(I.navigation.formMethod) && I.navigation.state === "loading" && ((a = t.state) == null ? undefined : a._isRedirect) !== true;
      c = i.actionData ? Object.keys(i.actionData).length > 0 ? i.actionData : null : h ? I.actionData : null;
      let d = i.loaderData ? ep(I.loaderData, i.loaderData, i.matches || [], i.errors) : I.loaderData;
      let p = I.blockers;
      if (p.size > 0) {
        (p = new Map(p)).forEach((e, t) => p.set(t, V));
      }
      let g = B === true || I.navigation.formMethod != null && eO(I.navigation.formMethod) && ((u = t.state) == null ? undefined : u._isRedirect) !== true;
      if (n) {
        m = n;
        n = undefined;
      }
      if (!Y && N !== r.Pop) {
        if (N === r.Push) {
          e.history.push(t, t.state);
        } else if (N === r.Replace) {
          e.history.replace(t, t.state);
        }
      }
      if (N === r.Pop) {
        let e = U.get(I.location.pathname);
        if (e && e.has(t.pathname)) {
          l = {
            currentLocation: I.location,
            nextLocation: t
          };
        } else if (U.has(t.pathname)) {
          l = {
            currentLocation: t,
            nextLocation: I.location
          };
        }
      } else if (Z) {
        let e = U.get(I.location.pathname);
        if (e) {
          e.add(t.pathname);
        } else {
          e = new Set([t.pathname]);
          U.set(I.location.pathname, e);
        }
        l = {
          currentLocation: I.location,
          nextLocation: t
        };
      }
      eU(s({}, i, {
        actionData: c,
        loaderData: d,
        historyAction: N,
        location: t,
        initialized: true,
        navigation: H,
        revalidation: "idle",
        restoreScrollPosition: tr(t, i.matches || I.matches),
        preventScrollReset: g,
        blockers: p
      }), {
        viewTransitionOpts: l,
        flushSync: f === true
      });
      N = r.Pop;
      B = false;
      Z = false;
      Y = false;
      et = false;
      en = [];
    }
    async function eF(t, n) {
      if (typeof t == "number") {
        e.history.go(t);
        return;
      }
      let i = J(I.location, I.matches, y, k.v7_prependBasename, t, k.v7_relativeSplatPath, n == null ? undefined : n.fromRouteId, n == null ? undefined : n.relative);
      let {
        path: o,
        submission: a,
        error: u
      } = X(k.v7_normalizeFormMethod, false, i, n);
      let c = I.location;
      let l = p(I.location, o, n && n.state);
      l = s({}, l, e.history.encodeLocation(l));
      let f = n && n.replace != null ? n.replace : undefined;
      let h = r.Push;
      if (f === true) {
        h = r.Replace;
      } else if (f !== false) {
        if (a != null && eO(a.formMethod) && a.formAction === I.location.pathname + I.location.search) {
          h = r.Replace;
        }
      }
      let d = n && "preventScrollReset" in n ? n.preventScrollReset === true : undefined;
      let g = (n && n.flushSync) === true;
      let v = e7({
        currentLocation: c,
        nextLocation: l,
        historyAction: h
      });
      if (v) {
        e9(v, {
          state: "blocked",
          location: l,
          proceed() {
            e9(v, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location: l
            });
            eF(t, n);
          },
          reset() {
            let e = new Map(I.blockers);
            e.set(v, V);
            eU({
              blockers: e
            });
          }
        });
        return;
      }
      return await eH(h, l, {
        submission: a,
        pendingError: u,
        preventScrollReset: d,
        replace: n && n.replace,
        enableViewTransition: n && n.viewTransition,
        flushSync: g
      });
    }
    async function eH(t, r, o) {
      var a;
      var c;
      var l;
      var f;
      let h;
      if (u) {
        u.abort();
      }
      u = null;
      N = t;
      Y = (o && o.startUninterruptedRevalidation) === true;
      a = I.location;
      c = I.matches;
      if (R && M) {
        R[tn(a, c)] = M();
      }
      B = (o && o.preventScrollReset) === true;
      Z = (o && o.enableViewTransition) === true;
      let d = n || m;
      let p = o && o.overrideNavigation;
      let g = _(d, r, y);
      let v = (o && o.flushSync) === true;
      let b = ti(g, d, r.pathname);
      if (b.active && b.matches) {
        g = b.matches;
      }
      if (!g) {
        let {
          error: e,
          notFoundMatches: t,
          route: n
        } = te(r.pathname);
        ez(r, {
          matches: t,
          loaderData: {},
          errors: {
            [n.id]: e
          }
        }, {
          flushSync: v
        });
        return;
      }
      if (I.initialized && !et && (l = I.location, f = r, l.pathname === f.pathname && l.search === f.search && (l.hash === "" ? f.hash !== "" : l.hash === f.hash || f.hash !== "")) && (!o || !o.submission || !eO(o.submission.formMethod))) {
        ez(r, {
          matches: g
        }, {
          flushSync: v
        });
        return;
      }
      u = new AbortController();
      let w = el(e.history, r, u.signal, o && o.submission);
      if (o && o.pendingError) {
        h = [ev(g).route.id, {
          type: i.error,
          error: o.pendingError
        }];
      } else if (o && o.submission && eO(o.submission.formMethod)) {
        let t = await eG(w, r, o.submission, g, b.active, {
          replace: o.replace,
          flushSync: v
        });
        if (t.shortCircuited) {
          return;
        }
        if (t.pendingActionResult) {
          let [e, n] = t.pendingActionResult;
          if (eE(n) && L(n.error) && n.error.status === 404) {
            u = null;
            ez(r, {
              matches: t.matches,
              loaderData: {},
              errors: {
                [e]: n.error
              }
            });
            return;
          }
        }
        g = t.matches || g;
        h = t.pendingActionResult;
        p = eD(r, o.submission);
        v = false;
        b.active = false;
        w = el(e.history, w.url, w.signal);
      }
      let {
        shortCircuited: E,
        matches: S,
        loaderData: x,
        errors: k
      } = await eV(w, r, g, b.active, p, o && o.submission, o && o.fetcherSubmission, o && o.replace, o && o.initialHydration === true, v, h);
      if (!E) {
        u = null;
        ez(r, s({
          matches: S || g
        }, eg(h), {
          loaderData: x,
          errors: k
        }));
      }
    }
    async function eG(e, t, n, o, a, s) {
      var u;
      let c;
      if (s === undefined) {
        s = {};
      }
      eY();
      eU({
        navigation: {
          state: "submitting",
          location: t,
          formMethod: (u = n).formMethod,
          formAction: u.formAction,
          formEncType: u.formEncType,
          formData: u.formData,
          json: u.json,
          text: u.text
        }
      }, {
        flushSync: s.flushSync === true
      });
      if (a) {
        let n = await to(o, t.pathname, e.signal);
        if (n.type === "aborted") {
          return {
            shortCircuited: true
          };
        }
        if (n.type === "error") {
          let e = ev(n.partialMatches).route.id;
          return {
            matches: n.partialMatches,
            pendingActionResult: [e, {
              type: i.error,
              error: n.error
            }]
          };
        }
        if (n.matches) {
          o = n.matches;
        } else {
          let {
            notFoundMatches: e,
            error: n,
            route: r
          } = te(t.pathname);
          return {
            matches: e,
            pendingActionResult: [r.id, {
              type: i.error,
              error: n
            }]
          };
        }
      }
      let l = eM(o, t);
      if (l.route.action || l.route.lazy) {
        c = (await eJ("action", I, e, [l], o, null))[l.route.id];
        if (e.signal.aborted) {
          return {
            shortCircuited: true
          };
        }
      } else {
        c = {
          type: i.error,
          error: ey(405, {
            method: e.method,
            pathname: t.pathname,
            routeId: l.route.id
          })
        };
      }
      if (eS(c)) {
        let t;
        t = s && s.replace != null ? s.replace : ec(c.response.headers.get("Location"), new URL(e.url), y) === I.location.pathname + I.location.search;
        await eK(e, c, true, {
          submission: n,
          replace: t
        });
        return {
          shortCircuited: true
        };
      }
      if (ew(c)) {
        throw ey(400, {
          type: "defer-action"
        });
      }
      if (eE(c)) {
        let e = ev(o, l.route.id);
        if ((s && s.replace) !== true) {
          N = r.Push;
        }
        return {
          matches: o,
          pendingActionResult: [e.route.id, c]
        };
      }
      return {
        matches: o,
        pendingActionResult: [l.route.id, c]
      };
    }
    async function eV(t, r, i, o, a, c, l, f, h, d, p) {
      let g = a || eD(r, c);
      let v = c || l || eP(g);
      let b = !Y && (!k.v7_partialHydration || !h);
      if (o) {
        if (b) {
          let e = e$(p);
          eU(s({
            navigation: g
          }, e !== undefined ? {
            actionData: e
          } : {}), {
            flushSync: d
          });
        }
        let e = await to(i, r.pathname, t.signal);
        if (e.type === "aborted") {
          return {
            shortCircuited: true
          };
        }
        if (e.type === "error") {
          let t = ev(e.partialMatches).route.id;
          return {
            matches: e.partialMatches,
            loaderData: {},
            errors: {
              [t]: e.error
            }
          };
        }
        if (e.matches) {
          i = e.matches;
        } else {
          let {
            error: e,
            notFoundMatches: t,
            route: n
          } = te(r.pathname);
          return {
            matches: t,
            loaderData: {},
            errors: {
              [n.id]: e
            }
          };
        }
      }
      let _ = n || m;
      let [w, E] = Q(e.history, I, i, v, r, k.v7_partialHydration && h === true, k.v7_skipActionErrorRevalidation, et, en, ei, eL, eC, ex, _, y, p);
      tt(e => !i || !i.some(t => t.route.id === e) || w && w.some(t => t.route.id === e));
      eh = ++ef;
      if (w.length === 0 && E.length === 0) {
        let e = e4();
        ez(r, s({
          matches: i,
          loaderData: {},
          errors: p && eE(p[1]) ? {
            [p[0]]: p[1].error
          } : null
        }, eg(p), e ? {
          fetchers: new Map(I.fetchers)
        } : {}), {
          flushSync: d
        });
        return {
          shortCircuited: true
        };
      }
      if (b) {
        let e = {};
        if (!o) {
          e.navigation = g;
          let t = e$(p);
          if (t !== undefined) {
            e.actionData = t;
          }
        }
        if (E.length > 0) {
          E.forEach(e => {
            let t = I.fetchers.get(e.key);
            let n = ej(undefined, t ? t.data : undefined);
            I.fetchers.set(e.key, n);
          });
          e.fetchers = new Map(I.fetchers);
        }
        eU(e, {
          flushSync: d
        });
      }
      E.forEach(e => {
        e3(e.key);
        if (e.controller) {
          es.set(e.key, e.controller);
        }
      });
      let S = () => E.forEach(e => e3(e.key));
      if (u) {
        u.signal.addEventListener("abort", S);
      }
      let {
        loaderResults: x,
        fetcherResults: O
      } = await eX(I, i, w, E, t);
      if (t.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
      if (u) {
        u.signal.removeEventListener("abort", S);
      }
      E.forEach(e => es.delete(e.key));
      let A = eb(x);
      if (A) {
        await eK(t, A.result, true, {
          replace: f
        });
        return {
          shortCircuited: true
        };
      }
      if (A = eb(O)) {
        ex.add(A.key);
        await eK(t, A.result, true, {
          replace: f
        });
        return {
          shortCircuited: true
        };
      }
      let {
        loaderData: T,
        errors: R
      } = ed(I, i, x, p, E, O, eB);
      eB.forEach((e, t) => {
        e.subscribe(n => {
          if (n || e.done) {
            eB.delete(t);
          }
        });
      });
      if (k.v7_partialHydration && h && I.errors) {
        R = s({}, I.errors, R);
      }
      let C = e4();
      let M = e5(eh);
      let P = C || M || E.length > 0;
      return s({
        matches: i,
        loaderData: T,
        errors: R
      }, P ? {
        fetchers: new Map(I.fetchers)
      } : {});
    }
    function e$(e) {
      if (e && !eE(e[1])) {
        return {
          [e[0]]: e[1].data
        };
      } else if (I.actionData) {
        if (Object.keys(I.actionData).length === 0) {
          return null;
        } else {
          return I.actionData;
        }
      } else {
        return undefined;
      }
    }
    async function eW(t, r, i, o, a, s, c, l, h) {
      var d;
      var p;
      function g(e) {
        if (!e.route.action && !e.route.lazy) {
          let e = ey(405, {
            method: h.formMethod,
            pathname: i,
            routeId: r
          });
          e0(t, r, e, {
            flushSync: c
          });
          return true;
        }
        return false;
      }
      eY();
      eC.delete(t);
      if (!s && g(o)) {
        return;
      }
      let v = I.fetchers.get(t);
      eQ(t, (d = h, p = v, {
        state: "submitting",
        formMethod: d.formMethod,
        formAction: d.formAction,
        formEncType: d.formEncType,
        formData: d.formData,
        json: d.json,
        text: d.text,
        data: p ? p.data : undefined
      }), {
        flushSync: c
      });
      let b = new AbortController();
      let w = el(e.history, i, b.signal, h);
      if (s) {
        let e = await to(a, i, w.signal);
        if (e.type === "aborted") {
          return;
        }
        if (e.type === "error") {
          e0(t, r, e.error, {
            flushSync: c
          });
          return;
        }
        if (e.matches) {
          if (g(o = eM(a = e.matches, i))) {
            return;
          }
        } else {
          e0(t, r, ey(404, {
            pathname: i
          }), {
            flushSync: c
          });
          return;
        }
      }
      es.set(t, b);
      let E = ef;
      let S = (await eJ("action", I, w, [o], a, t))[o.route.id];
      if (w.signal.aborted) {
        if (es.get(t) === b) {
          es.delete(t);
        }
        return;
      }
      if (k.v7_fetcherPersist && eL.has(t)) {
        if (eS(S) || eE(S)) {
          eQ(t, eI(undefined));
          return;
        }
      } else {
        if (eS(S)) {
          es.delete(t);
          if (eh > E) {
            eQ(t, eI(undefined));
            return undefined;
          } else {
            ex.add(t);
            eQ(t, ej(h));
            return eK(w, S, false, {
              fetcherSubmission: h,
              preventScrollReset: l
            });
          }
        }
        if (eE(S)) {
          e0(t, r, S.error);
          return;
        }
      }
      if (ew(S)) {
        throw ey(400, {
          type: "defer-action"
        });
      }
      let x = I.navigation.location || I.location;
      let O = el(e.history, x, b.signal);
      let A = n || m;
      let T = I.navigation.state !== "idle" ? _(A, I.navigation.location, y) : I.matches;
      f(T, "Didn't find any matches after fetcher action");
      let R = ++ef;
      e_.set(t, R);
      let C = ej(h, S.data);
      I.fetchers.set(t, C);
      let [M, P] = Q(e.history, I, T, h, x, false, k.v7_skipActionErrorRevalidation, et, en, ei, eL, eC, ex, A, y, [o.route.id, S]);
      P.filter(e => e.key !== t).forEach(e => {
        let t = e.key;
        let n = I.fetchers.get(t);
        let r = ej(undefined, n ? n.data : undefined);
        I.fetchers.set(t, r);
        e3(t);
        if (e.controller) {
          es.set(t, e.controller);
        }
      });
      eU({
        fetchers: new Map(I.fetchers)
      });
      let D = () => P.forEach(e => e3(e.key));
      b.signal.addEventListener("abort", D);
      let {
        loaderResults: j,
        fetcherResults: L
      } = await eX(I, T, M, P, O);
      if (b.signal.aborted) {
        return;
      }
      b.signal.removeEventListener("abort", D);
      e_.delete(t);
      es.delete(t);
      P.forEach(e => es.delete(e.key));
      let B = eb(j);
      if (B) {
        return eK(O, B.result, false, {
          preventScrollReset: l
        });
      }
      if (B = eb(L)) {
        ex.add(B.key);
        return eK(O, B.result, false, {
          preventScrollReset: l
        });
      }
      let {
        loaderData: Z,
        errors: U
      } = ed(I, T, j, undefined, P, L, eB);
      if (I.fetchers.has(t)) {
        let e = eI(S.data);
        I.fetchers.set(t, e);
      }
      e5(R);
      if (I.navigation.state === "loading" && R > eh) {
        f(N, "Expected pending action");
        if (u) {
          u.abort();
        }
        ez(I.navigation.location, {
          matches: T,
          loaderData: Z,
          errors: U,
          fetchers: new Map(I.fetchers)
        });
      } else {
        eU({
          errors: U,
          loaderData: ep(I.loaderData, Z, T, U),
          fetchers: new Map(I.fetchers)
        });
        et = false;
      }
    }
    async function eq(t, n, r, i, o, a, s, u, c) {
      let l = I.fetchers.get(t);
      eQ(t, ej(c, l ? l.data : undefined), {
        flushSync: s
      });
      let h = new AbortController();
      let d = el(e.history, r, h.signal);
      if (a) {
        let e = await to(o, r, d.signal);
        if (e.type === "aborted") {
          return;
        }
        if (e.type === "error") {
          e0(t, n, e.error, {
            flushSync: s
          });
          return;
        }
        if (e.matches) {
          i = eM(o = e.matches, r);
        } else {
          e0(t, n, ey(404, {
            pathname: r
          }), {
            flushSync: s
          });
          return;
        }
      }
      es.set(t, h);
      let p = ef;
      let g = (await eJ("loader", I, d, [i], o, t))[i.route.id];
      if (ew(g)) {
        g = (await eR(g, d.signal, true)) || g;
      }
      if (es.get(t) === h) {
        es.delete(t);
      }
      if (!d.signal.aborted) {
        if (eL.has(t)) {
          eQ(t, eI(undefined));
          return;
        }
        if (eS(g)) {
          if (eh > p) {
            eQ(t, eI(undefined));
            return;
          }
          ex.add(t);
          await eK(d, g, false, {
            preventScrollReset: u
          });
          return;
        }
        if (eE(g)) {
          e0(t, n, g.error);
          return;
        }
        f(!ew(g), "Unhandled fetcher deferred data");
        eQ(t, eI(g.data));
      }
    }
    async function eK(t, n, i, o) {
      let {
        submission: a,
        fetcherSubmission: c,
        preventScrollReset: h,
        replace: g
      } = o === undefined ? {} : o;
      if (n.response.headers.has("X-Remix-Revalidate")) {
        et = true;
      }
      let v = n.response.headers.get("Location");
      f(v, "Expected a Location header on the redirect Response");
      v = ec(v, new URL(t.url), y);
      let m = p(I.location, v, {
        _isRedirect: true
      });
      if (d) {
        let t = false;
        if (n.response.headers.has("X-Remix-Reload-Document")) {
          t = true;
        } else if ($.test(v)) {
          let n = e.history.createURL(v);
          t = n.origin !== l.location.origin || O(n.pathname, y) == null;
        }
        if (t) {
          if (g) {
            l.location.replace(v);
          } else {
            l.location.assign(v);
          }
          return;
        }
      }
      u = null;
      let b = g === true || n.response.headers.has("X-Remix-Replace") ? r.Replace : r.Push;
      let {
        formMethod: _,
        formAction: w,
        formEncType: E
      } = I.navigation;
      if (!a && !c && _ && w && E) {
        a = eP(I.navigation);
      }
      let S = a || c;
      if (F.has(n.response.status) && S && eO(S.formMethod)) {
        await eH(b, m, {
          submission: s({}, S, {
            formAction: v
          }),
          preventScrollReset: h || B,
          enableViewTransition: i ? Z : undefined
        });
      } else {
        let e = eD(m, a);
        await eH(b, m, {
          overrideNavigation: e,
          fetcherSubmission: c,
          preventScrollReset: h || B,
          enableViewTransition: i ? Z : undefined
        });
      }
    }
    async function eJ(e, n, r, o, a, s) {
      let u;
      let c = {};
      try {
        u = await ea(S, e, n, r, o, a, s, v, t);
      } catch (e) {
        o.forEach(t => {
          c[t.route.id] = {
            type: i.error,
            error: e
          };
        });
        return c;
      }
      for (let [e, t] of Object.entries(u)) {
        var l;
        if (ek((l = t).result) && z.has(l.result.status)) {
          let n = t.result;
          c[e] = {
            type: i.redirect,
            response: function (e, t, n, r, i, o) {
              let a = e.headers.get("Location");
              f(a, "Redirects returned/thrown from loaders/actions must have a Location header");
              if (!$.test(a)) {
                let s = r.slice(0, r.findIndex(e => e.route.id === n) + 1);
                a = J(new URL(t.url), s, i, true, a, o);
                e.headers.set("Location", a);
              }
              return e;
            }(n, r, e, a, y, k.v7_relativeSplatPath)
          };
        } else {
          c[e] = await eu(t);
        }
      }
      return c;
    }
    async function eX(t, n, r, o, a) {
      let s = t.matches;
      let u = eJ("loader", t, a, r, n, null);
      let c = Promise.all(o.map(async n => {
        if (!n.matches || !n.match || !n.controller) {
          return Promise.resolve({
            [n.key]: {
              type: i.error,
              error: ey(404, {
                pathname: n.path
              })
            }
          });
        }
        {
          let r = (await eJ("loader", t, el(e.history, n.path, n.controller.signal), [n.match], n.matches, n.key))[n.match.route.id];
          return {
            [n.key]: r
          };
        }
      }));
      let l = await u;
      let f = (await c).reduce((e, t) => Object.assign(e, t), {});
      await Promise.all([eA(n, l, a.signal, s, t.loaderData), eT(n, f, o)]);
      return {
        loaderResults: l,
        fetcherResults: f
      };
    }
    function eY() {
      et = true;
      en.push(...tt());
      eC.forEach((e, t) => {
        if (es.has(t)) {
          ei.add(t);
        }
        e3(t);
      });
    }
    function eQ(e, t, n = {}) {
      I.fetchers.set(e, t);
      eU({
        fetchers: new Map(I.fetchers)
      }, {
        flushSync: (n && n.flushSync) === true
      });
    }
    function e0(e, t, n, r = {}) {
      let i = ev(I.matches, t);
      e2(e);
      eU({
        errors: {
          [i.route.id]: n
        },
        fetchers: new Map(I.fetchers)
      }, {
        flushSync: (r && r.flushSync) === true
      });
    }
    function e1(e) {
      if (k.v7_fetcherPersist) {
        eN.set(e, (eN.get(e) || 0) + 1);
        if (eL.has(e)) {
          eL.delete(e);
        }
      }
      return I.fetchers.get(e) || G;
    }
    function e2(e) {
      let t = I.fetchers.get(e);
      if (es.has(e) && (!t || t.state !== "loading" || !e_.has(e))) {
        e3(e);
      }
      eC.delete(e);
      e_.delete(e);
      ex.delete(e);
      eL.delete(e);
      ei.delete(e);
      I.fetchers.delete(e);
    }
    function e3(e) {
      let t = es.get(e);
      if (t) {
        t.abort();
        es.delete(e);
      }
    }
    function e6(e) {
      for (let t of e) {
        let e = eI(e1(t).data);
        I.fetchers.set(t, e);
      }
    }
    function e4() {
      let e = [];
      let t = false;
      for (let n of ex) {
        let r = I.fetchers.get(n);
        f(r, "Expected fetcher: " + n);
        if (r.state === "loading") {
          ex.delete(n);
          e.push(n);
          t = true;
        }
      }
      e6(e);
      return t;
    }
    function e5(e) {
      let t = [];
      for (let [n, r] of e_) {
        if (r < e) {
          let e = I.fetchers.get(n);
          f(e, "Expected fetcher: " + n);
          if (e.state === "loading") {
            e3(n);
            e_.delete(n);
            t.push(n);
          }
        }
      }
      e6(t);
      return t.length > 0;
    }
    function e8(e) {
      I.blockers.delete(e);
      eZ.delete(e);
    }
    function e9(e, t) {
      let n = I.blockers.get(e) || V;
      f(n.state === "unblocked" && t.state === "blocked" || n.state === "blocked" && t.state === "blocked" || n.state === "blocked" && t.state === "proceeding" || n.state === "blocked" && t.state === "unblocked" || n.state === "proceeding" && t.state === "unblocked", "Invalid blocker state transition: " + n.state + " -> " + t.state);
      let r = new Map(I.blockers);
      r.set(e, t);
      eU({
        blockers: r
      });
    }
    function e7(e) {
      let {
        currentLocation: t,
        nextLocation: n,
        historyAction: r
      } = e;
      if (eZ.size === 0) {
        return;
      }
      if (eZ.size > 1) {
        h(false, "A router only supports one blocker at a time");
      }
      let i = Array.from(eZ.entries());
      let [o, a] = i[i.length - 1];
      let s = I.blockers.get(o);
      if ((!s || s.state !== "proceeding") && a({
        currentLocation: t,
        nextLocation: n,
        historyAction: r
      })) {
        return o;
      }
    }
    function te(e) {
      let t = ey(404, {
        pathname: e
      });
      let {
        matches: r,
        route: i
      } = em(n || m);
      tt();
      return {
        notFoundMatches: r,
        route: i,
        error: t
      };
    }
    function tt(e) {
      let t = [];
      eB.forEach((n, r) => {
        if (!e || e(r)) {
          n.cancel();
          t.push(r);
          eB.delete(r);
        }
      });
      return t;
    }
    function tn(e, t) {
      return C && C(e, t.map(e => E(e, I.loaderData))) || e.key;
    }
    function tr(e, t) {
      if (R) {
        let n = R[tn(e, t)];
        if (typeof n == "number") {
          return n;
        }
      }
      return null;
    }
    function ti(e, t, n) {
      if (x) {
        if (!e) {
          return {
            active: true,
            matches: w(t, n, y, true) || []
          };
        }
        if (Object.keys(e[0].params).length > 0) {
          return {
            active: true,
            matches: w(t, n, y, true)
          };
        }
      }
      return {
        active: false,
        matches: null
      };
    }
    async function to(e, r, i) {
      if (!x) {
        return {
          type: "success",
          matches: e
        };
      }
      let o = e;
      while (true) {
        let e = n == null;
        let a = n || m;
        let s = v;
        try {
          await x({
            path: r,
            matches: o,
            patch: (e, n) => {
              if (!i.aborted) {
                er(e, n, a, s, t);
              }
            }
          });
        } catch (e) {
          return {
            type: "error",
            error: e,
            partialMatches: o
          };
        } finally {
          if (e && !i.aborted) {
            m = [...m];
          }
        }
        if (i.aborted) {
          return {
            type: "aborted"
          };
        }
        let u = _(a, r, y);
        if (u) {
          return {
            type: "success",
            matches: u
          };
        }
        let c = w(a, r, y, true);
        if (!c || o.length === c.length && o.every((e, t) => e.route.id === c[t].route.id)) {
          return {
            type: "success",
            matches: null
          };
        }
        o = c;
      }
    }
    return a = {
      get basename() {
        return y;
      },
      get future() {
        return k;
      },
      get state() {
        return I;
      },
      get routes() {
        return m;
      },
      get window() {
        return l;
      },
      initialize: function () {
        A = e.history.listen(t => {
          let {
            action: n,
            location: r,
            delta: i
          } = t;
          if (c) {
            c();
            c = undefined;
            return;
          }
          h(eZ.size === 0 || i != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
          let o = e7({
            currentLocation: I.location,
            nextLocation: r,
            historyAction: n
          });
          if (o && i != null) {
            let t = new Promise(e => {
              c = e;
            });
            e.history.go(i * -1);
            e9(o, {
              state: "blocked",
              location: r,
              proceed() {
                e9(o, {
                  state: "proceeding",
                  proceed: undefined,
                  reset: undefined,
                  location: r
                });
                t.then(() => e.history.go(i));
              },
              reset() {
                let e = new Map(I.blockers);
                e.set(o, V);
                eU({
                  blockers: e
                });
              }
            });
            return;
          }
          return eH(n, r);
        });
        if (d) {
          (function (e, t) {
            try {
              let n = e.sessionStorage.getItem(q);
              if (n) {
                let e = JSON.parse(n);
                for (let [n, r] of Object.entries(e || {})) {
                  if (r && Array.isArray(r)) {
                    t.set(n, new Set(r || []));
                  }
                }
              }
            } catch (e) {}
          })(l, U);
          let e = () => function (e, t) {
            if (t.size > 0) {
              let n = {};
              for (let [e, r] of t) {
                n[e] = [...r];
              }
              try {
                e.sessionStorage.setItem(q, JSON.stringify(n));
              } catch (e) {
                h(false, "Failed to save applied view transitions in sessionStorage (" + e + ").");
              }
            }
          }(l, U);
          l.addEventListener("pagehide", e);
          K = () => l.removeEventListener("pagehide", e);
        }
        if (!I.initialized) {
          eH(r.Pop, I.location, {
            initialHydration: true
          });
        }
        return a;
      },
      subscribe: function (e) {
        T.add(e);
        return () => T.delete(e);
      },
      enableScrollRestoration: function (e, t, n) {
        R = e;
        M = t;
        C = n || null;
        if (!P && I.navigation === H) {
          P = true;
          let e = tr(I.location, I.matches);
          if (e != null) {
            eU({
              restoreScrollPosition: e
            });
          }
        }
        return () => {
          R = null;
          M = null;
          C = null;
        };
      },
      navigate: eF,
      fetch: function (e, t, r, i) {
        if (g) {
          throw Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        }
        e3(e);
        let o = (i && i.flushSync) === true;
        let a = n || m;
        let s = J(I.location, I.matches, y, k.v7_prependBasename, r, k.v7_relativeSplatPath, t, i == null ? undefined : i.relative);
        let u = _(a, s, y);
        let c = ti(u, a, s);
        if (c.active && c.matches) {
          u = c.matches;
        }
        if (!u) {
          e0(e, t, ey(404, {
            pathname: s
          }), {
            flushSync: o
          });
          return;
        }
        let {
          path: l,
          submission: f,
          error: h
        } = X(k.v7_normalizeFormMethod, true, s, i);
        if (h) {
          e0(e, t, h, {
            flushSync: o
          });
          return;
        }
        let d = eM(u, l);
        let p = (i && i.preventScrollReset) === true;
        if (f && eO(f.formMethod)) {
          eW(e, t, l, d, u, c.active, o, p, f);
          return;
        }
        eC.set(e, {
          routeId: t,
          path: l
        });
        eq(e, t, l, d, u, c.active, o, p, f);
      },
      revalidate: function () {
        eY();
        eU({
          revalidation: "loading"
        });
        if (I.navigation.state !== "submitting") {
          if (I.navigation.state === "idle") {
            eH(I.historyAction, I.location, {
              startUninterruptedRevalidation: true
            });
            return;
          }
          eH(N || I.historyAction, I.navigation.location, {
            overrideNavigation: I.navigation,
            enableViewTransition: Z === true
          });
        }
      },
      createHref: t => e.history.createHref(t),
      encodeLocation: t => e.history.encodeLocation(t),
      getFetcher: e1,
      deleteFetcher: function (e) {
        if (k.v7_fetcherPersist) {
          let t = (eN.get(e) || 0) - 1;
          if (t <= 0) {
            eN.delete(e);
            eL.add(e);
          } else {
            eN.set(e, t);
          }
        } else {
          e2(e);
        }
        eU({
          fetchers: new Map(I.fetchers)
        });
      },
      dispose: function () {
        if (A) {
          A();
        }
        if (K) {
          K();
        }
        T.clear();
        if (u) {
          u.abort();
        }
        I.fetchers.forEach((e, t) => e2(t));
        I.blockers.forEach((e, t) => e8(t));
      },
      getBlocker: function (e, t) {
        let n = I.blockers.get(e) || V;
        if (eZ.get(e) !== t) {
          eZ.set(e, t);
        }
        return n;
      },
      deleteBlocker: e8,
      patchRoutes: function (e, r) {
        let i = n == null;
        er(e, r, n || m, v, t);
        if (i) {
          m = [...m];
          eU({});
        }
      },
      _internalFetchControllers: es,
      _internalActiveDeferreds: eB,
      _internalSetRoutes: function (e) {
        n = b(e, t, undefined, v = {});
      }
    };
  }
  function J(e, t, n, r, i, o, a, s) {
    let u;
    let c;
    if (a) {
      u = [];
      for (let e of t) {
        u.push(e);
        if (e.route.id === a) {
          c = e;
          break;
        }
      }
    } else {
      u = t;
      c = t[t.length - 1];
    }
    let l = C(i || ".", R(u, o), O(e.pathname, n) || e.pathname, s === "path");
    if (i == null) {
      l.search = e.search;
      l.hash = e.hash;
    }
    if ((i == null || i === "" || i === ".") && c) {
      let e = eC(l.search);
      if (c.route.index && !e) {
        l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index";
      } else if (!c.route.index && e) {
        let e = new URLSearchParams(l.search);
        let t = e.getAll("index");
        e.delete("index");
        t.filter(e => e).forEach(t => e.append("index", t));
        let n = e.toString();
        l.search = n ? "?" + n : "";
      }
    }
    if (r && n !== "/") {
      l.pathname = l.pathname === "/" ? n : M([n, l.pathname]);
    }
    return g(l);
  }
  function X(e, t, n, r) {
    var i;
    let o;
    let a;
    if (!r || r == null || (!("formData" in r) || r.formData == null) && (!("body" in r) || r.body === undefined)) {
      return {
        path: n
      };
    }
    if (r.formMethod && (i = r.formMethod, !U.has(i.toLowerCase()))) {
      return {
        path: n,
        error: ey(405, {
          method: r.formMethod
        })
      };
    }
    let s = () => ({
      path: n,
      error: ey(400, {
        type: "invalid-body"
      })
    });
    let u = r.formMethod || "get";
    let c = e ? u.toUpperCase() : u.toLowerCase();
    let l = e_(n);
    if (r.body !== undefined) {
      if (r.formEncType === "text/plain") {
        if (!eO(c)) {
          return s();
        }
        let e = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((e, t) => {
          let [n, r] = t;
          return "" + e + n + "=" + r + "\n";
        }, "") : String(r.body);
        return {
          path: n,
          submission: {
            formMethod: c,
            formAction: l,
            formEncType: r.formEncType,
            formData: undefined,
            json: undefined,
            text: e
          }
        };
      }
      if (r.formEncType === "application/json") {
        if (!eO(c)) {
          return s();
        }
        try {
          let e = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
          return {
            path: n,
            submission: {
              formMethod: c,
              formAction: l,
              formEncType: r.formEncType,
              formData: undefined,
              json: e,
              text: undefined
            }
          };
        } catch (e) {
          return s();
        }
      }
    }
    f(typeof FormData == "function", "FormData is not available in this environment");
    if (r.formData) {
      o = ef(r.formData);
      a = r.formData;
    } else if (r.body instanceof FormData) {
      o = ef(r.body);
      a = r.body;
    } else if (r.body instanceof URLSearchParams) {
      a = eh(o = r.body);
    } else if (r.body == null) {
      o = new URLSearchParams();
      a = new FormData();
    } else {
      try {
        o = new URLSearchParams(r.body);
        a = eh(o);
      } catch (e) {
        return s();
      }
    }
    let h = {
      formMethod: c,
      formAction: l,
      formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
      formData: a,
      json: undefined,
      text: undefined
    };
    if (eO(h.formMethod)) {
      return {
        path: n,
        submission: h
      };
    }
    let d = v(n);
    if (t && d.search && eC(d.search)) {
      o.append("index", "");
    }
    d.search = "?" + o;
    return {
      path: g(d),
      submission: h
    };
  }
  function Y(e, t, n = false) {
    let r = e.findIndex(e => e.route.id === t);
    if (r >= 0) {
      return e.slice(0, n ? r + 1 : r);
    } else {
      return e;
    }
  }
  function Q(e, t, n, r, i, o, a, u, c, l, f, h, d, p, g, v) {
    let m = v ? eE(v[1]) ? v[1].error : v[1].data : undefined;
    let y = e.createURL(t.location);
    let b = e.createURL(i);
    let w = n;
    if (o && t.errors) {
      w = Y(n, Object.keys(t.errors)[0], true);
    } else if (v && eE(v[1])) {
      w = Y(n, v[0]);
    }
    let E = v ? v[1].statusCode : undefined;
    let S = a && E && E >= 400;
    let x = w.filter((e, n) => {
      var i;
      var a;
      var l;
      let f;
      let h;
      let {
        route: d
      } = e;
      if (d.lazy) {
        return true;
      }
      if (d.loader == null) {
        return false;
      }
      if (o) {
        return ee(d, t.loaderData, t.errors);
      }
      i = t.loaderData;
      a = t.matches[n];
      l = e;
      f = !a || l.route.id !== a.route.id;
      h = i[l.route.id] === undefined;
      if (f || h || c.some(t => t === e.route.id)) {
        return true;
      }
      let p = t.matches[n];
      return en(e, s({
        currentUrl: y,
        currentParams: p.params,
        nextUrl: b,
        nextParams: e.params
      }, r, {
        actionResult: m,
        actionStatus: E,
        defaultShouldRevalidate: !S && (u || y.pathname + y.search === b.pathname + b.search || y.search !== b.search || et(p, e))
      }));
    });
    let k = [];
    h.forEach((e, i) => {
      if (o || !n.some(t => t.route.id === e.routeId) || f.has(i)) {
        return;
      }
      let a = _(p, e.path, g);
      if (!a) {
        k.push({
          key: i,
          routeId: e.routeId,
          path: e.path,
          matches: null,
          match: null,
          controller: null
        });
        return;
      }
      let c = t.fetchers.get(i);
      let h = eM(a, e.path);
      let v = false;
      if (d.has(i)) {
        v = false;
      } else if (l.has(i)) {
        l.delete(i);
        v = true;
      } else {
        v = c && c.state !== "idle" && c.data === undefined ? u : en(h, s({
          currentUrl: y,
          currentParams: t.matches[t.matches.length - 1].params,
          nextUrl: b,
          nextParams: n[n.length - 1].params
        }, r, {
          actionResult: m,
          actionStatus: E,
          defaultShouldRevalidate: !S && u
        }));
      }
      if (v) {
        k.push({
          key: i,
          routeId: e.routeId,
          path: e.path,
          matches: a,
          match: h,
          controller: new AbortController()
        });
      }
    });
    return [x, k];
  }
  function ee(e, t, n) {
    if (e.lazy) {
      return true;
    }
    if (!e.loader) {
      return false;
    }
    let r = t != null && t[e.id] !== undefined;
    let i = n != null && n[e.id] !== undefined;
    return (!!r || !i) && (typeof e.loader == "function" && e.loader.hydrate === true || !r && !i);
  }
  function et(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"];
  }
  function en(e, t) {
    if (e.route.shouldRevalidate) {
      let n = e.route.shouldRevalidate(t);
      if (typeof n == "boolean") {
        return n;
      }
    }
    return t.defaultShouldRevalidate;
  }
  function er(e, t, n, r, i) {
    var o;
    let a;
    if (e) {
      let t = r[e];
      f(t, "No route found to patch children into: routeId = " + e);
      t.children ||= [];
      a = t.children;
    } else {
      a = n;
    }
    let s = b(t.filter(e => !a.some(t => function e(t, n) {
      return "id" in t && "id" in n && t.id === n.id || t.index === n.index && t.path === n.path && t.caseSensitive === n.caseSensitive && ((!t.children || t.children.length === 0) && (!n.children || n.children.length === 0) || t.children.every((t, r) => {
        var i;
        if ((i = n.children) == null) {
          return undefined;
        } else {
          return i.some(n => e(t, n));
        }
      }));
    }(e, t))), i, [e || "_", "patch", String(((o = a) == null ? undefined : o.length) || "0")], r);
    a.push(...s);
  }
  async function ei(e, t, n) {
    if (!e.lazy) {
      return;
    }
    let r = await e.lazy();
    if (!e.lazy) {
      return;
    }
    let i = n[e.id];
    f(i, "No route found in manifest");
    let o = {};
    for (let e in r) {
      let t = i[e] !== undefined && e !== "hasErrorBoundary";
      h(!t, "Route \"" + i.id + "\" has a static property \"" + e + "\" defined but its lazy function is also returning a value for this property. The lazy route property \"" + e + "\" will be ignored.");
      if (!t && !y.has(e)) {
        o[e] = r[e];
      }
    }
    Object.assign(i, o);
    Object.assign(i, s({}, t(i), {
      lazy: undefined
    }));
  }
  async function eo(e) {
    let {
      matches: t
    } = e;
    let n = t.filter(e => e.shouldLoad);
    return (await Promise.all(n.map(e => e.resolve()))).reduce((e, t, r) => Object.assign(e, {
      [n[r].route.id]: t
    }), {});
  }
  async function ea(e, t, n, r, o, a, u, c, l, f) {
    let h = a.map(e => e.route.lazy ? ei(e.route, l, c) : undefined);
    let d = a.map((e, n) => {
      let a = h[n];
      let u = o.some(t => t.route.id === e.route.id);
      let c = async n => {
        if (n && r.method === "GET" && (e.route.lazy || e.route.loader)) {
          u = true;
        }
        if (u) {
          return es(t, r, e, a, n, f);
        } else {
          return Promise.resolve({
            type: i.data,
            result: undefined
          });
        }
      };
      return s({}, e, {
        shouldLoad: u,
        resolve: c
      });
    });
    let p = await e({
      matches: d,
      request: r,
      params: a[0].params,
      fetcherKey: u,
      context: f
    });
    try {
      await Promise.all(h);
    } catch (e) {}
    return p;
  }
  async function es(e, t, n, r, o, a) {
    let s;
    let u;
    let c = r => {
      let i;
      let s = new Promise((e, t) => i = t);
      u = () => i();
      t.signal.addEventListener("abort", u);
      let c = i => typeof r != "function" ? Promise.reject(Error("You cannot call the handler for a route which defines a boolean " + ("\"" + e + "\" [routeId: ") + n.route.id + "]")) : r({
        request: t,
        params: n.params,
        context: a
      }, ...(i !== undefined ? [i] : []));
      return Promise.race([(async () => {
        try {
          let e = await (o ? o(e => c(e)) : c());
          return {
            type: "data",
            result: e
          };
        } catch (e) {
          return {
            type: "error",
            result: e
          };
        }
      })(), s]);
    };
    try {
      let o = n.route[e];
      if (r) {
        if (o) {
          let e;
          let [t] = await Promise.all([c(o).catch(t => {
            e = t;
          }), r]);
          if (e !== undefined) {
            throw e;
          }
          s = t;
        } else {
          await r;
          if (o = n.route[e]) {
            s = await c(o);
          } else {
            if (e !== "action") {
              return {
                type: i.data,
                result: undefined
              };
            }
            let r = new URL(t.url);
            let o = r.pathname + r.search;
            throw ey(405, {
              method: t.method,
              pathname: o,
              routeId: n.route.id
            });
          }
        }
      } else if (o) {
        s = await c(o);
      } else {
        let e = new URL(t.url);
        let n = e.pathname + e.search;
        throw ey(404, {
          pathname: n
        });
      }
      f(s.result !== undefined, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ("\"" + n.route.id + "\" but didn't return anything from your `") + e + "` function. Please return a value or `null`.");
    } catch (e) {
      return {
        type: i.error,
        result: e
      };
    } finally {
      if (u) {
        t.signal.removeEventListener("abort", u);
      }
    }
    return s;
  }
  async function eu(e) {
    var t;
    var n;
    var r;
    var o;
    var a;
    var s;
    var u;
    let {
      result: c,
      type: l
    } = e;
    if (ek(c)) {
      let e;
      try {
        let t = c.headers.get("Content-Type");
        e = t && /\bapplication\/json\b/.test(t) ? c.body == null ? null : await c.json() : await c.text();
      } catch (e) {
        return {
          type: i.error,
          error: e
        };
      }
      if (l === i.error) {
        return {
          type: i.error,
          error: new N(c.status, c.statusText, e),
          statusCode: c.status,
          headers: c.headers
        };
      } else {
        return {
          type: i.data,
          data: e,
          statusCode: c.status,
          headers: c.headers
        };
      }
    }
    if (l === i.error) {
      if (ex(c)) {
        if (c.data instanceof Error) {
          return {
            type: i.error,
            error: c.data,
            statusCode: (n = c.init) == null ? undefined : n.status
          };
        }
        c = new N(((t = c.init) == null ? undefined : t.status) || 500, undefined, c.data);
      }
      return {
        type: i.error,
        error: c,
        statusCode: L(c) ? c.status : undefined
      };
    }
    if ((u = c) && typeof u == "object" && typeof u.data == "object" && typeof u.subscribe == "function" && typeof u.cancel == "function" && typeof u.resolveData == "function") {
      return {
        type: i.deferred,
        deferredData: c,
        statusCode: (r = c.init) == null ? undefined : r.status,
        headers: ((o = c.init) == null ? undefined : o.headers) && new Headers(c.init.headers)
      };
    } else if (ex(c)) {
      return {
        type: i.data,
        data: c.data,
        statusCode: (a = c.init) == null ? undefined : a.status,
        headers: (s = c.init) != null && s.headers ? new Headers(c.init.headers) : undefined
      };
    } else {
      return {
        type: i.data,
        data: c
      };
    }
  }
  function ec(e, t, n) {
    if ($.test(e)) {
      let r = new URL(e.startsWith("//") ? t.protocol + e : e);
      let i = O(r.pathname, n) != null;
      if (r.origin === t.origin && i) {
        return r.pathname + r.search + r.hash;
      }
    }
    return e;
  }
  function el(e, t, n, r) {
    let i = e.createURL(e_(t)).toString();
    let o = {
      signal: n
    };
    if (r && eO(r.formMethod)) {
      let {
        formMethod: e,
        formEncType: t
      } = r;
      o.method = e.toUpperCase();
      if (t === "application/json") {
        o.headers = new Headers({
          "Content-Type": t
        });
        o.body = JSON.stringify(r.json);
      } else if (t === "text/plain") {
        o.body = r.text;
      } else if (t === "application/x-www-form-urlencoded" && r.formData) {
        o.body = ef(r.formData);
      } else {
        o.body = r.formData;
      }
    }
    return new Request(i, o);
  }
  function ef(e) {
    let t = new URLSearchParams();
    for (let [n, r] of e.entries()) {
      t.append(n, typeof r == "string" ? r : r.name);
    }
    return t;
  }
  function eh(e) {
    let t = new FormData();
    for (let [n, r] of e.entries()) {
      t.append(n, r);
    }
    return t;
  }
  function ed(e, t, n, r, i, o, a) {
    let u;
    let c;
    let l;
    let h;
    let d;
    let p;
    c = {};
    l = null;
    h = false;
    d = {};
    p = r && eE(r[1]) ? r[1].error : undefined;
    t.forEach(e => {
      if (!(e.route.id in n)) {
        return;
      }
      let r = e.route.id;
      let i = n[r];
      f(!eS(i), "Cannot handle redirect results in processLoaderData");
      if (eE(i)) {
        let e = i.error;
        if (p !== undefined) {
          e = p;
          p = undefined;
        }
        l = l || {};
        {
          let n = ev(t, r);
          if (l[n.route.id] == null) {
            l[n.route.id] = e;
          }
        }
        c[r] = undefined;
        if (!h) {
          h = true;
          u = L(i.error) ? i.error.status : 500;
        }
        if (i.headers) {
          d[r] = i.headers;
        }
      } else {
        if (ew(i)) {
          a.set(r, i.deferredData);
          c[r] = i.deferredData.data;
          if (i.statusCode != null && i.statusCode !== 200 && !h) {
            u = i.statusCode;
          }
        } else {
          c[r] = i.data;
          if (i.statusCode && i.statusCode !== 200 && !h) {
            u = i.statusCode;
          }
        }
        if (i.headers) {
          d[r] = i.headers;
        }
      }
    });
    if (p !== undefined && r) {
      l = {
        [r[0]]: p
      };
      c[r[0]] = undefined;
    }
    let {
      loaderData: g,
      errors: v
    } = {
      loaderData: c,
      errors: l,
      statusCode: u || 200,
      loaderHeaders: d
    };
    i.forEach(t => {
      let {
        key: n,
        match: r,
        controller: i
      } = t;
      let a = o[n];
      f(a, "Did not find corresponding fetcher result");
      if (!i || !i.signal.aborted) {
        if (eE(a)) {
          let t = ev(e.matches, r == null ? undefined : r.route.id);
          if (!v || !v[t.route.id]) {
            v = s({}, v, {
              [t.route.id]: a.error
            });
          }
          e.fetchers.delete(n);
        } else if (eS(a)) {
          f(false, "Unhandled fetcher revalidation redirect");
        } else if (ew(a)) {
          f(false, "Unhandled fetcher deferred data");
        } else {
          let t = eI(a.data);
          e.fetchers.set(n, t);
        }
      }
    });
    return {
      loaderData: g,
      errors: v
    };
  }
  function ep(e, t, n, r) {
    let i = s({}, t);
    for (let o of n) {
      let n = o.route.id;
      if (t.hasOwnProperty(n)) {
        if (t[n] !== undefined) {
          i[n] = t[n];
        }
      } else if (e[n] !== undefined && o.route.loader) {
        i[n] = e[n];
      }
      if (r && r.hasOwnProperty(n)) {
        break;
      }
    }
    return i;
  }
  function eg(e) {
    if (e) {
      if (eE(e[1])) {
        return {
          actionData: {}
        };
      } else {
        return {
          actionData: {
            [e[0]]: e[1].data
          }
        };
      }
    } else {
      return {};
    }
  }
  function ev(e, t) {
    return (t ? e.slice(0, e.findIndex(e => e.route.id === t) + 1) : [...e]).reverse().find(e => e.route.hasErrorBoundary === true) || e[0];
  }
  function em(e) {
    let t = e.length === 1 ? e[0] : e.find(e => e.index || !e.path || e.path === "/") || {
      id: "__shim-error-route__"
    };
    return {
      matches: [{
        params: {},
        pathname: "",
        pathnameBase: "",
        route: t
      }],
      route: t
    };
  }
  function ey(e, t) {
    let {
      pathname: n,
      routeId: r,
      method: i,
      type: o,
      message: a
    } = t === undefined ? {} : t;
    let s = "Unknown Server Error";
    let u = "Unknown @remix-run/router error";
    if (e === 400) {
      s = "Bad Request";
      if (i && n && r) {
        u = "You made a " + i + " request to \"" + n + "\" but did not provide a `loader` for route \"" + r + "\", so there is no way to handle the request.";
      } else if (o === "defer-action") {
        u = "defer() is not supported in actions";
      } else if (o === "invalid-body") {
        u = "Unable to encode submission body";
      }
    } else if (e === 403) {
      s = "Forbidden";
      u = "Route \"" + r + "\" does not match URL \"" + n + "\"";
    } else if (e === 404) {
      s = "Not Found";
      u = "No route matches URL \"" + n + "\"";
    } else if (e === 405) {
      s = "Method Not Allowed";
      if (i && n && r) {
        u = "You made a " + i.toUpperCase() + " request to \"" + n + "\" but did not provide an `action` for route \"" + r + "\", so there is no way to handle the request.";
      } else if (i) {
        u = "Invalid request method \"" + i.toUpperCase() + "\"";
      }
    }
    return new N(e || 500, s, Error(u), true);
  }
  function eb(e) {
    let t = Object.entries(e);
    for (let e = t.length - 1; e >= 0; e--) {
      let [n, r] = t[e];
      if (eS(r)) {
        return {
          key: n,
          result: r
        };
      }
    }
  }
  function e_(e) {
    let t = typeof e == "string" ? v(e) : e;
    return g(s({}, t, {
      hash: ""
    }));
  }
  function ew(e) {
    return e.type === i.deferred;
  }
  function eE(e) {
    return e.type === i.error;
  }
  function eS(e) {
    return (e && e.type) === i.redirect;
  }
  function ex(e) {
    return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
  }
  function ek(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && e.body !== undefined;
  }
  function eO(e) {
    return Z.has(e.toLowerCase());
  }
  async function eA(e, t, n, r, i) {
    let o = Object.entries(t);
    for (let a = 0; a < o.length; a++) {
      let [s, u] = o[a];
      let c = e.find(e => (e == null ? undefined : e.route.id) === s);
      if (!c) {
        continue;
      }
      let l = r.find(e => e.route.id === c.route.id);
      let f = l != null && !et(l, c) && (i && i[c.route.id]) !== undefined;
      if (ew(u) && f) {
        await eR(u, n, false).then(e => {
          if (e) {
            t[s] = e;
          }
        });
      }
    }
  }
  async function eT(e, t, n) {
    for (let r = 0; r < n.length; r++) {
      let {
        key: i,
        routeId: o,
        controller: a
      } = n[r];
      let s = t[i];
      if (e.find(e => (e == null ? undefined : e.route.id) === o) && ew(s)) {
        f(a, "Expected an AbortController for revalidating fetcher deferred result");
        await eR(s, a.signal, true).then(e => {
          if (e) {
            t[i] = e;
          }
        });
      }
    }
  }
  async function eR(e, t, n = false) {
    if (!(await e.deferredData.resolveData(t))) {
      if (n) {
        try {
          return {
            type: i.data,
            data: e.deferredData.unwrappedData
          };
        } catch (e) {
          return {
            type: i.error,
            error: e
          };
        }
      }
      return {
        type: i.data,
        data: e.deferredData.data
      };
    }
  }
  function eC(e) {
    return new URLSearchParams(e).getAll("index").some(e => e === "");
  }
  function eM(e, t) {
    let n = typeof t == "string" ? v(t).search : t.search;
    if (e[e.length - 1].route.index && eC(n || "")) {
      return e[e.length - 1];
    }
    let r = T(e);
    return r[r.length - 1];
  }
  function eP(e) {
    let {
      formMethod: t,
      formAction: n,
      formEncType: r,
      text: i,
      formData: o,
      json: a
    } = e;
    if (t && n && r) {
      if (i != null) {
        return {
          formMethod: t,
          formAction: n,
          formEncType: r,
          formData: undefined,
          json: undefined,
          text: i
        };
      }
      if (o != null) {
        return {
          formMethod: t,
          formAction: n,
          formEncType: r,
          formData: o,
          json: undefined,
          text: undefined
        };
      }
      if (a !== undefined) {
        return {
          formMethod: t,
          formAction: n,
          formEncType: r,
          formData: undefined,
          json: a,
          text: undefined
        };
      }
    }
  }
  function eD(e, t) {
    if (t) {
      return {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
      };
    } else {
      return {
        state: "loading",
        location: e,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        json: undefined,
        text: undefined
      };
    }
  }
  function ej(e, t) {
    if (e) {
      return {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
      };
    } else {
      return {
        state: "loading",
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        json: undefined,
        text: undefined,
        data: t
      };
    }
  }
  function eI(e) {
    return {
      state: "idle",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined,
      data: e
    };
  }
  Symbol("deferred");
  require.d(exports, {
    formatPath: function () {
      return g;
    },
    invariant: function () {
      return f;
    },
    matchPath: function () {
      return k;
    },
    ErrorResponse: function () {
      return N;
    },
    joinPaths: function () {
      return M;
    },
    isErrorResponse: function () {
      return L;
    },
    createMatch: function () {
      return E;
    },
    RouterError: function () {
      return I;
    },
    stripBasename: function () {
      return O;
    },
    Action: function () {
      return r;
    },
    parsePath: function () {
      return v;
    },
    getMatchPaths: function () {
      return R;
    },
    matchRoutes: function () {
      return _;
    },
    createBrowserHist: function () {
      return c;
    },
    createRouter: function () {
      return K;
    },
    resolveTo: function () {
      return C;
    },
    createHashHistory: function () {
      return l;
    },
    defaultBlocker: function () {
      return V;
    }
  });
}