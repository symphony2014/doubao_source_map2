// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fs' to 'createFederationRuntime'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19584.df73fbcb.js
         * chunkId: 19584
         * moduleId: 922290
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var i;
  var federationRuntimeUtils = require("federation-runtime-utils") /*id: 209904*/;
  let s = "RUNTIME-001";
  let l = "RUNTIME-002";
  let u = "RUNTIME-003";
  let c = "RUNTIME-004";
  let f = "RUNTIME-005";
  let h = "RUNTIME-006";
  let d = "RUNTIME-007";
  let m = "RUNTIME-008";
  let p = e => {
    let t = e.split("-")[0].toLowerCase();
    return `View the docs to see how to solve: https://module-federation.io/guide/troubleshooting/${t}/${e}`;
  };
  let y = (e, t, r, n) => {
    let o = [`${[t[e]]} #${e}`];
    if (r) {
      o.push(`args: ${JSON.stringify(r)}`);
    }
    o.push(p(e));
    if (n) {
      o.push(`Original Error Message:
 ${n}`);
    }
    return o.join("\n");
  };
  let _ = {
    [s]: "Failed to get remoteEntry exports.",
    [l]: "The remote entry interface does not contain \"init\"",
    [u]: "Failed to get manifest.",
    [c]: "Failed to locate remote.",
    [f]: "Invalid loadShareSync function call from bundler runtime",
    [h]: "Invalid loadShareSync function call from runtime",
    [d]: "Failed to get remote snapshot.",
    [m]: "Failed to load script resources.",
    "RUNTIME-009": "Please call createInstance first."
  };
  let g = {
    "TYPE-001": "Failed to generate type declaration. Execute the below cmd to reproduce and fix the error."
  };
  let E = {
    "BUILD-001": "Failed to find expose module.",
    "BUILD-002": "PublicPath is required in prod mode."
  };
  ({
    ..._,
    ...g,
    ...E
  });
  let v = "[ Federation Runtime ]";
  let b = federationRuntimeUtils.createLogger(v);
  function $(e, t) {
    if (!e) {
      S(t);
    }
  }
  function S(e) {
    if (e instanceof Error) {
      if (!e.message.startsWith(v)) {
        e.message = `${v}: ${e.message}`;
      }
      throw e;
    }
    throw Error(`${v}: ${e}`);
  }
  function N(e) {
    if (e instanceof Error && !e.message.startsWith(v)) {
      e.message = `${v}: ${e.message}`;
    }
    b.warn(e);
  }
  function I(e, t) {
    if (e.findIndex(e => e === t) === -1) {
      e.push(t);
    }
    return e;
  }
  function A(e) {
    if ("version" in e && e.version) {
      return `${e.name}:${e.version}`;
    } else if ("entry" in e && e.entry) {
      return `${e.name}:${e.entry}`;
    } else {
      return `${e.name}`;
    }
  }
  function R(e) {
    return e.entry !== undefined;
  }
  function O(e) {
    return !e.entry.includes(".json");
  }
  function w(e) {
    return e && typeof e == "object";
  }
  let T = Object.prototype.toString;
  function P(e) {
    return T.call(e) === "[object Object]";
  }
  function k(e) {
    if (Array.isArray(e)) {
      return e;
    } else {
      return [e];
    }
  }
  function D(e) {
    let t = {
      url: "",
      type: "global",
      globalName: ""
    };
    if (federationRuntimeUtils.isBrowserEnv() || federationRuntimeUtils.isReactNativeEnv()) {
      if ("remoteEntry" in e) {
        return {
          url: e.remoteEntry,
          type: e.remoteEntryType,
          globalName: e.globalName
        };
      } else {
        return t;
      }
    } else if ("ssrRemoteEntry" in e) {
      return {
        url: e.ssrRemoteEntry || t.url,
        type: e.ssrRemoteEntryType || t.type,
        globalName: e.globalName
      };
    } else {
      return t;
    }
  }
  let L = (e, t) => {
    let r;
    r = e.endsWith("/") ? e.slice(0, -1) : e;
    if (t.startsWith(".")) {
      t = t.slice(1);
    }
    return r += t;
  };
  let j = typeof globalThis == "object" ? globalThis : window;
  let M = (() => {
    try {
      return document.defaultView;
    } catch {
      return j;
    }
  })();
  let H = M;
  function x(e, t, r) {
    Object.defineProperty(e, t, {
      value: r,
      configurable: false,
      writable: true
    });
  }
  function F(e, t) {
    return Object.hasOwnProperty.call(e, t);
  }
  if (!F(j, "__GLOBAL_LOADING_REMOTE_ENTRY__")) {
    x(j, "__GLOBAL_LOADING_REMOTE_ENTRY__", {});
  }
  let C = j.__GLOBAL_LOADING_REMOTE_ENTRY__;
  function U(e) {
    var t;
    var r;
    var n;
    var o;
    var i;
    var a;
    var s;
    var l;
    var u;
    var c;
    var f;
    var h;
    if (F(e, "__VMOK__") && !F(e, "__FEDERATION__")) {
      x(e, "__FEDERATION__", e.__VMOK__);
    }
    if (!F(e, "__FEDERATION__")) {
      x(e, "__FEDERATION__", {
        __GLOBAL_PLUGIN__: [],
        __INSTANCES__: [],
        moduleInfo: {},
        __SHARE__: {},
        __MANIFEST_LOADING__: {},
        __PRELOADED_MAP__: new Map()
      });
      x(e, "__VMOK__", e.__FEDERATION__);
    }
    if ((s = (t = e.__FEDERATION__).__GLOBAL_PLUGIN__) === null || s === undefined) {
      t.__GLOBAL_PLUGIN__ = [];
    }
    if ((l = (r = e.__FEDERATION__).__INSTANCES__) === null || l === undefined) {
      r.__INSTANCES__ = [];
    }
    if ((u = (n = e.__FEDERATION__).moduleInfo) === null || u === undefined) {
      n.moduleInfo = {};
    }
    if ((c = (o = e.__FEDERATION__).__SHARE__) === null || c === undefined) {
      o.__SHARE__ = {};
    }
    if ((f = (i = e.__FEDERATION__).__MANIFEST_LOADING__) === null || f === undefined) {
      i.__MANIFEST_LOADING__ = {};
    }
    if ((h = (a = e.__FEDERATION__).__PRELOADED_MAP__) === null || h === undefined) {
      a.__PRELOADED_MAP__ = new Map();
    }
  }
  function G(e) {
    j.__FEDERATION__.__INSTANCES__.push(e);
  }
  function W() {
    return j.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
  }
  function V(e, t = federationRuntimeUtils.isDebugMode()) {
    if (t) {
      j.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = e;
      j.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.20.0";
    }
  }
  function B(e, t) {
    if (typeof t == "string") {
      if (e[t]) {
        return {
          value: e[t],
          key: t
        };
      }
      for (let r of Object.keys(e)) {
        let [n, o] = r.split(":");
        let i = `${n}:${t}`;
        let a = e[i];
        if (a) {
          return {
            value: a,
            key: i
          };
        }
      }
      return {
        value: undefined,
        key: t
      };
    }
    throw Error("key must be string");
  }
  U(j);
  U(M);
  let q = () => M.__FEDERATION__.moduleInfo;
  let X = (e, t) => {
    let r = B(t, A(e)).value;
    if (r && !r.version && "version" in e && e.version) {
      r.version = e.version;
    }
    if (r) {
      return r;
    }
    if ("version" in e && e.version) {
      let {
        version: t,
        ...r
      } = e;
      let n = A(r);
      let o = B(M.__FEDERATION__.moduleInfo, n).value;
      if ((o == null ? undefined : o.version) === t) {
        return o;
      }
    }
  };
  let Y = e => X(e, M.__FEDERATION__.moduleInfo);
  let K = (e, t) => {
    let r = A(e);
    M.__FEDERATION__.moduleInfo[r] = t;
    return M.__FEDERATION__.moduleInfo;
  };
  let z = e => {
    M.__FEDERATION__.moduleInfo = {
      ...M.__FEDERATION__.moduleInfo,
      ...e
    };
    return () => {
      for (let t of Object.keys(e)) {
        delete M.__FEDERATION__.moduleInfo[t];
      }
    };
  };
  let Z = (e, t) => {
    let r = t || `__FEDERATION_${e}:custom__`;
    let n = j[r];
    return {
      remoteEntryKey: r,
      entryExports: n
    };
  };
  let J = e => {
    let {
      __GLOBAL_PLUGIN__: t
    } = M.__FEDERATION__;
    e.forEach(e => {
      if (t.findIndex(t => t.name === e.name) === -1) {
        t.push(e);
      } else {
        N(`The plugin ${e.name} has been registered.`);
      }
    });
  };
  let Q = () => M.__FEDERATION__.__GLOBAL_PLUGIN__;
  let ee = e => j.__FEDERATION__.__PRELOADED_MAP__.get(e);
  let et = e => j.__FEDERATION__.__PRELOADED_MAP__.set(e, true);
  let er = "default";
  let en = "global";
  let eo = "[0-9A-Za-z-]+";
  let ei = `(?:\\+(${eo}(?:\\.${eo})*))`;
  let ea = "0|[1-9]\\d*";
  let es = "[0-9]+";
  let el = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
  let eu = `(?:${es}|${el})`;
  let ec = `(?:-?(${eu}(?:\\.${eu})*))`;
  let ef = `(?:${ea}|${el})`;
  let eh = `(?:-(${ef}(?:\\.${ef})*))`;
  let ed = `${ea}|x|X|\\*`;
  let em = `[v=\\s]*(${ed})(?:\\.(${ed})(?:\\.(${ed})(?:${eh})?${ei}?)?)?`;
  let ep = `^\\s*(${em})\\s+-\\s+(${em})\\s*$`;
  let ey = `(${es})\\.(${es})\\.(${es})`;
  let e_ = `[v=\\s]*${ey}${ec}?${ei}?`;
  let eg = "((?:<|>)?=?)";
  let eE = `(\\s*)${eg}\\s*(${e_}|${em})`;
  let ev = "(?:~>?)";
  let eb = `(\\s*)${ev}\\s+`;
  let e$ = "(?:\\^)";
  let eS = `(\\s*)${e$}\\s+`;
  let eN = "(<|>)?=?\\s*\\*";
  let eI = `^${e$}${em}$`;
  let eA = `(${ea})\\.(${ea})\\.(${ea})`;
  let eR = `v?${eA}${eh}?${ei}?`;
  let eO = `^${ev}${em}$`;
  let ew = `^${eg}\\s*${em}$`;
  let eT = `^${eg}\\s*(${eR})$|^$`;
  let eP = "^\\s*>=\\s*0.0.0\\s*$";
  function ek(e) {
    return new RegExp(e);
  }
  function eD(e) {
    return !e || e.toLowerCase() === "x" || e === "*";
  }
  function eL() {
    var e = arguments.length;
    var t = Array(e);
    var r = 0;
    for (; r < e; r++) {
      t[r] = arguments[r];
    }
    return e => t.reduce((e, t) => t(e), e);
  }
  function ej(e) {
    return e.match(ek(eT));
  }
  function eM(e, t, r, n) {
    let o = `${e}.${t}.${r}`;
    if (n) {
      return `${o}-${n}`;
    } else {
      return o;
    }
  }
  function eH(e) {
    return e.replace(ek(ep), (e, t, r, n, o, i, a, s, l, u, c, f) => {
      t = eD(r) ? "" : eD(n) ? `>=${r}.0.0` : eD(o) ? `>=${r}.${n}.0` : `>=${t}`;
      s = eD(l) ? "" : eD(u) ? `<${Number(l) + 1}.0.0-0` : eD(c) ? `<${l}.${Number(u) + 1}.0-0` : f ? `<=${l}.${u}.${c}-${f}` : `<=${s}`;
      return `${t} ${s}`.trim();
    });
  }
  function ex(e) {
    return e.replace(ek(eE), "$1$2$3");
  }
  function eF(e) {
    return e.replace(ek(eb), "$1~");
  }
  function eC(e) {
    return e.replace(ek(eS), "$1^");
  }
  function eU(e) {
    return e.trim().split(/\s+/).map(e => e.replace(ek(eI), (e, t, r, n, o) => eD(t) ? "" : eD(r) ? `>=${t}.0.0 <${Number(t) + 1}.0.0-0` : eD(n) ? t === "0" ? `>=${t}.${r}.0 <${t}.${Number(r) + 1}.0-0` : `>=${t}.${r}.0 <${Number(t) + 1}.0.0-0` : o ? t !== "0" ? `>=${t}.${r}.${n}-${o} <${Number(t) + 1}.0.0-0` : r === "0" ? `>=${t}.${r}.${n}-${o} <${t}.${r}.${Number(n) + 1}-0` : `>=${t}.${r}.${n}-${o} <${t}.${Number(r) + 1}.0-0` : t === "0" ? r === "0" ? `>=${t}.${r}.${n} <${t}.${r}.${Number(n) + 1}-0` : `>=${t}.${r}.${n} <${t}.${Number(r) + 1}.0-0` : `>=${t}.${r}.${n} <${Number(t) + 1}.0.0-0`)).join(" ");
  }
  function eG(e) {
    return e.trim().split(/\s+/).map(e => e.replace(ek(eO), (e, t, r, n, o) => eD(t) ? "" : eD(r) ? `>=${t}.0.0 <${Number(t) + 1}.0.0-0` : eD(n) ? `>=${t}.${r}.0 <${t}.${Number(r) + 1}.0-0` : o ? `>=${t}.${r}.${n}-${o} <${t}.${Number(r) + 1}.0-0` : `>=${t}.${r}.${n} <${t}.${Number(r) + 1}.0-0`)).join(" ");
  }
  function eW(e) {
    return e.split(/\s+/).map(e => e.trim().replace(ek(ew), (e, t, r, n, o, i) => {
      let a = eD(r);
      let s = a || eD(n);
      let l = s || eD(o);
      if (t === "=" && l) {
        t = "";
      }
      i = "";
      if (a) {
        if (t === ">" || t === "<") {
          return "<0.0.0-0";
        } else {
          return "*";
        }
      } else if (t && l) {
        if (s) {
          n = 0;
        }
        o = 0;
        if (t === ">") {
          t = ">=";
          if (s) {
            r = Number(r) + 1;
            n = 0;
          } else {
            n = Number(n) + 1;
          }
          o = 0;
        } else if (t === "<=") {
          t = "<";
          if (s) {
            r = Number(r) + 1;
          } else {
            n = Number(n) + 1;
          }
        }
        if (t === "<") {
          i = "-0";
        }
        return `${t + r}.${n}.${o}${i}`;
      } else if (s) {
        return `>=${r}.0.0${i} <${Number(r) + 1}.0.0-0`;
      } else if (l) {
        return `>=${r}.${n}.0${i} <${r}.${Number(n) + 1}.0-0`;
      } else {
        return e;
      }
    })).join(" ");
  }
  function eV(e) {
    return e.trim().replace(ek(eN), "");
  }
  function eB(e) {
    return e.trim().replace(ek(eP), "");
  }
  function eq(e, t) {
    if ((e = Number(e) || e) > (t = Number(t) || t)) {
      return 1;
    } else if (e === t) {
      return 0;
    } else {
      return -1;
    }
  }
  function eX(e, t) {
    let {
      preRelease: r
    } = e;
    let {
      preRelease: n
    } = t;
    if (r === undefined && n) {
      return 1;
    }
    if (r && n === undefined) {
      return -1;
    }
    if (r === undefined && n === undefined) {
      return 0;
    }
    for (let e = 0, t = r.length; e <= t; e++) {
      let t = r[e];
      let o = n[e];
      if (t !== o) {
        if (t === undefined && o === undefined) {
          break;
        }
        if (!t) {
          return 1;
        }
        if (!o) {
          return -1;
        }
        return eq(t, o);
      }
    }
    return 0;
  }
  function eY(e, t) {
    return eq(e.major, t.major) || eq(e.minor, t.minor) || eq(e.patch, t.patch) || eX(e, t);
  }
  function eK(e, t) {
    return e.version === t.version;
  }
  function ez(e, t) {
    switch (e.operator) {
      case "":
      case "=":
        return eK(e, t);
      case ">":
        return eY(e, t) < 0;
      case ">=":
        return eK(e, t) || eY(e, t) < 0;
      case "<":
        return eY(e, t) > 0;
      case "<=":
        return eK(e, t) || eY(e, t) > 0;
      case undefined:
        return true;
      default:
        return false;
    }
  }
  function eZ(e) {
    return eL(eU, eG, eW, eV)(e);
  }
  function eJ(e) {
    return eL(eH, ex, eF, eC)(e.trim()).split(/\s+/).join(" ");
  }
  function eQ(e, t) {
    if (!e) {
      return false;
    }
    let r = ej(e);
    if (!r) {
      return false;
    }
    let [, n,, o, i, a, s] = r;
    let l = {
      operator: n,
      version: eM(o, i, a, s),
      major: o,
      minor: i,
      patch: a,
      preRelease: s == null ? undefined : s.split(".")
    };
    for (let e of t.split("||")) {
      let t = e.trim();
      if (!t || t === "*" || t === "x") {
        return true;
      }
      try {
        let e = eJ(t);
        if (!e.trim()) {
          return true;
        }
        let r = e.split(" ").map(e => eZ(e)).join(" ");
        if (!r.trim()) {
          return true;
        }
        let n = r.split(/\s+/).map(e => eB(e)).filter(Boolean);
        if (n.length === 0) {
          continue;
        }
        let o = true;
        for (let e of n) {
          let t = ej(e);
          if (!t) {
            o = false;
            break;
          }
          let [, r,, n, i, a, s] = t;
          let u = {
            operator: r,
            version: eM(n, i, a, s),
            major: n,
            minor: i,
            patch: a,
            preRelease: s == null ? undefined : s.split(".")
          };
          if (!ez(u, l)) {
            o = false;
            break;
          }
        }
        if (o) {
          return true;
        }
      } catch (e) {
        continue;
      }
    }
    return false;
  }
  function e0(e, t, r, n) {
    let s;
    s = "get" in e ? e.get : "lib" in e ? () => Promise.resolve(e.lib) : () => Promise.resolve(() => {
      throw Error(`Can not get shared '${r}'!`);
    });
    return {
      deps: [],
      useIn: [],
      from: t,
      loading: null,
      ...e,
      shareConfig: {
        requiredVersion: `^${e.version}`,
        singleton: false,
        eager: false,
        strictVersion: false,
        ...e.shareConfig
      },
      get: s,
      loaded: e != null && !!e.loaded || "lib" in e || undefined,
      version: e.version ?? "0",
      scope: Array.isArray(e.scope) ? e.scope : [e.scope ?? "default"],
      strategy: (e.strategy ?? n) || "version-first"
    };
  }
  function e1(e, t) {
    let r = t.shared || {};
    let n = t.name;
    let o = Object.keys(r).reduce((e, o) => {
      let i = k(r[o]);
      e[o] = e[o] || [];
      i.forEach(r => {
        e[o].push(e0(r, n, o, t.shareStrategy));
      });
      return e;
    }, {});
    let i = {
      ...e.shared
    };
    Object.keys(o).forEach(e => {
      if (i[e]) {
        o[e].forEach(t => {
          if (!i[e].find(e => e.version === t.version)) {
            i[e].push(t);
          }
        });
      } else {
        i[e] = o[e];
      }
    });
    return {
      shared: i,
      shareInfos: o
    };
  }
  function e2(e, t) {
    let r = e => {
      if (!Number.isNaN(Number(e))) {
        let t = e.split(".");
        let r = e;
        for (let e = 0; e < 3 - t.length; e++) {
          r += ".0";
        }
        return r;
      }
      return e;
    };
    return !!eQ(r(e), `<=${r(t)}`);
  }
  let e5 = (e, t) => {
    let r = t || function (e, t) {
      return e2(e, t);
    };
    return Object.keys(e).reduce((e, t) => !e || r(e, t) || e === "0" ? t : e, 0);
  };
  let e8 = e => !!e.loaded || typeof e.lib == "function";
  let e9 = e => !!e.loading;
  function e6(e, t, r) {
    let n = e[t][r];
    let o = function (e, t) {
      return !e8(n[e]) && e2(e, t);
    };
    return e5(e[t][r], o);
  }
  function e4(e, t, r) {
    let n = e[t][r];
    let o = function (e, t) {
      let r = e => e8(e) || e9(e);
      if (r(n[t])) {
        return !r(n[e]) || !!e2(e, t);
      } else {
        return !r(n[e]) && e2(e, t);
      }
    };
    return e5(e[t][r], o);
  }
  function e3(e) {
    if (e === "loaded-first") {
      return e4;
    } else {
      return e6;
    }
  }
  function e7(e, t, r, n) {
    if (!e) {
      return;
    }
    let {
      shareConfig: o,
      scope: i = er,
      strategy: a
    } = r;
    for (let s of Array.isArray(i) ? i : [i]) {
      if (o && e[s] && e[s][t]) {
        let {
          requiredVersion: i
        } = o;
        let l = e3(a)(e, s, t);
        let u = () => {
          if (o.singleton) {
            if (typeof i == "string" && !eQ(l, i)) {
              let n = `Version ${l} from ${l && e[s][t][l].from} of shared singleton module ${t} does not satisfy the requirement of ${r.from} which needs ${i})`;
              if (o.strictVersion) {
                S(n);
              } else {
                N(n);
              }
            }
            return e[s][t][l];
          }
          if (i === false || i === "*" || eQ(l, i)) {
            return e[s][t][l];
          }
          for (let [r, n] of Object.entries(e[s][t])) {
            if (eQ(r, i)) {
              return n;
            }
          }
        };
        let c = {
          shareScopeMap: e,
          scope: s,
          pkgName: t,
          version: l,
          GlobalFederation: H.__FEDERATION__,
          resolver: u
        };
        return (n.emit(c) || c).resolver();
      }
    }
  }
  function te() {
    return H.__FEDERATION__.__SHARE__;
  }
  function tt(e) {
    let {
      pkgName: r,
      extraOptions: n,
      shareInfos: o
    } = e;
    let i = e => {
      if (!e) {
        return;
      }
      let t = {};
      e.forEach(e => {
        t[e.version] = e;
      });
      let r = function (e, r) {
        return !e8(t[e]) && e2(e, r);
      };
      let n = e5(t, r);
      return t[n];
    };
    return Object.assign({}, ((n == null ? undefined : n.resolver) ?? i)(o[r]), n == null ? undefined : n.customShareInfo);
  }
  function tr() {
    if (typeof FEDERATION_BUILD_IDENTIFIER != "undefined") {
      return FEDERATION_BUILD_IDENTIFIER;
    } else {
      return "";
    }
  }
  function tn(e, t) {
    for (let r of e) {
      let e = t.startsWith(r.name);
      let n = t.replace(r.name, "");
      if (e) {
        if (n.startsWith("/")) {
          return {
            pkgNameOrAlias: r.name,
            expose: n = `.${n}`,
            remote: r
          };
        }
        if (n === "") {
          return {
            pkgNameOrAlias: r.name,
            expose: ".",
            remote: r
          };
        }
      }
      let o = r.alias && t.startsWith(r.alias);
      let i = r.alias && t.replace(r.alias, "");
      if (r.alias && o) {
        if (i && i.startsWith("/")) {
          return {
            pkgNameOrAlias: r.alias,
            expose: i = `.${i}`,
            remote: r
          };
        }
        if (i === "") {
          return {
            pkgNameOrAlias: r.alias,
            expose: ".",
            remote: r
          };
        }
      }
    }
  }
  function to(e, t) {
    for (let r of e) {
      if (t === r.name || r.alias && t === r.alias) {
        return r;
      }
    }
  }
  function ti(e, t) {
    let r = Q();
    let n = [t.hooks, t.remoteHandler.hooks, t.sharedHandler.hooks, t.snapshotHandler.hooks, t.loaderHook, t.bridgeHook];
    if (r.length > 0) {
      r.forEach(t => {
        if (e == null ? undefined : e.find(e => e.name !== t.name)) {
          e.push(t);
        }
      });
    }
    if (e && e.length > 0) {
      e.forEach(e => {
        n.forEach(r => {
          r.applyPlugin(e, t);
        });
      });
    }
    return e;
  }
  let ta = ".then(callbacks[0]).catch(callbacks[1])";
  async function ts(e) {
    let {
      entry: t,
      remoteEntryExports: r
    } = e;
    return new Promise((e, n) => {
      try {
        if (r) {
          e(r);
        } else {
          Function("callbacks", `import("${t}")${ta}`)([e, n]);
        }
      } catch (e) {
        n(e);
      }
    });
  }
  async function tl(e) {
    let {
      entry: t,
      remoteEntryExports: r
    } = e;
    return new Promise((e, n) => {
      try {
        if (r) {
          e(r);
        } else {
          Function("callbacks", `System.import("${t}")${ta}`)([e, n]);
        }
      } catch (e) {
        n(e);
      }
    });
  }
  function tu(e, t, r) {
    let {
      remoteEntryKey: n,
      entryExports: o
    } = Z(e, t);
    $(o, y(s, _, {
      remoteName: e,
      remoteEntryUrl: r,
      remoteEntryKey: n
    }));
    return o;
  }
  async function tc(e) {
    let {
      name: t,
      globalName: r,
      entry: n,
      loaderHook: o,
      getEntryUrl: i
    } = e;
    let {
      entryExports: s
    } = Z(t, r);
    if (s) {
      return s;
    }
    let l = i ? i(n) : n;
    return federationRuntimeUtils.loadScript(l, {
      attrs: {},
      createScriptHook: (e, t) => {
        let r = o.lifecycle.createScript.emit({
          url: e,
          attrs: t
        });
        if (r && (r instanceof HTMLScriptElement || "script" in r || "timeout" in r)) {
          return r;
        }
      }
    }).then(() => tu(t, r, n)).catch(e => {
      $(undefined, y(m, _, {
        remoteName: t,
        resourceUrl: n
      }));
      throw e;
    });
  }
  async function tf(e) {
    let {
      remoteInfo: t,
      remoteEntryExports: r,
      loaderHook: n,
      getEntryUrl: o
    } = e;
    let {
      entry: i,
      entryGlobalName: a,
      name: s,
      type: l
    } = t;
    switch (l) {
      case "esm":
      case "module":
        return ts({
          entry: i,
          remoteEntryExports: r
        });
      case "system":
        return tl({
          entry: i,
          remoteEntryExports: r
        });
      default:
        return tc({
          entry: i,
          globalName: a,
          name: s,
          loaderHook: n,
          getEntryUrl: o
        });
    }
  }
  async function th(e) {
    let {
      remoteInfo: t,
      loaderHook: r
    } = e;
    let {
      entry: n,
      entryGlobalName: o,
      name: i,
      type: s
    } = t;
    let {
      entryExports: l
    } = Z(i, o);
    return l || federationRuntimeUtils.loadScriptNode(n, {
      attrs: {
        name: i,
        globalName: o,
        type: s
      },
      loaderHook: {
        createScriptHook: function (e, t = {}) {
          let n = r.lifecycle.createScript.emit({
            url: e,
            attrs: t
          });
          if (n && "url" in n) {
            return n;
          }
        }
      }
    }).then(() => tu(i, o, n)).catch(e => {
      throw e;
    });
  }
  function td(e) {
    let {
      entry: t,
      name: r
    } = e;
    return federationRuntimeUtils.composeKeyWithSeparator(r, t);
  }
  async function tm(e) {
    let {
      origin: t,
      remoteEntryExports: r,
      remoteInfo: n,
      getEntryUrl: o,
      _inErrorHandling: i = false
    } = e;
    let s = td(n);
    if (r) {
      return r;
    }
    if (!C[s]) {
      let e = t.remoteHandler.hooks.lifecycle.loadEntry;
      let l = t.loaderHook;
      C[s] = e.emit({
        loaderHook: l,
        remoteInfo: n,
        remoteEntryExports: r
      }).then(e => e || ((typeof ENV_TARGET != "undefined" ? ENV_TARGET === "web" : federationRuntimeUtils.isBrowserEnv()) ? tf({
        remoteInfo: n,
        remoteEntryExports: r,
        loaderHook: l,
        getEntryUrl: o
      }) : th({
        remoteInfo: n,
        loaderHook: l
      }))).catch(async e => {
        let o = td(n);
        if (e instanceof Error && e.message.includes(m) && !i) {
          let e = e => tm({
            ...e,
            _inErrorHandling: true
          });
          let i = await t.loaderHook.lifecycle.loadEntryError.emit({
            getRemoteEntry: e,
            origin: t,
            remoteInfo: n,
            remoteEntryExports: r,
            globalLoading: C,
            uniqueKey: o
          });
          if (i) {
            return i;
          }
        }
        throw e;
      });
    }
    return C[s];
  }
  function tp(e) {
    return {
      ...e,
      entry: "entry" in e ? e.entry : "",
      type: e.type || en,
      entryGlobalName: e.entryGlobalName || e.name,
      shareScope: e.shareScope || er
    };
  }
  function ty(e) {
    return {
      resourceCategory: "sync",
      share: true,
      depsRemote: true,
      prefetchInterface: false,
      ...e
    };
  }
  function t_(e, t) {
    return t.map(t => {
      let r = to(e, t.nameOrAlias);
      $(r, `Unable to preload ${t.nameOrAlias} as it is not included in ${!r && federationRuntimeUtils.safeToString({
        remoteInfo: r,
        remotes: e
      })}`);
      return {
        remote: r,
        preloadConfig: ty(t)
      };
    });
  }
  function tg(e) {
    if (e) {
      return e.map(e => e === "." ? e : e.startsWith("./") ? e.replace("./", "") : e);
    } else {
      return [];
    }
  }
  function tE(e, t, r) {
    let n = !(arguments.length > 3) || arguments[3] === undefined || arguments[3];
    let {
      cssAssets: o,
      jsAssetsWithoutEntry: i,
      entryAssets: s
    } = r;
    if (t.options.inBrowser) {
      s.forEach(r => {
        let {
          moduleInfo: n
        } = r;
        let o = t.moduleCache.get(e.name);
        if (o) {
          tm({
            origin: t,
            remoteInfo: n,
            remoteEntryExports: o.remoteEntryExports
          });
        } else {
          tm({
            origin: t,
            remoteInfo: n,
            remoteEntryExports: undefined
          });
        }
      });
      if (n) {
        let e = {
          rel: "preload",
          as: "style"
        };
        o.forEach(r => {
          let {
            link: n,
            needAttach: o
          } = federationRuntimeUtils.createLink({
            url: r,
            cb: () => {},
            attrs: e,
            createLinkHook: (e, r) => {
              let n = t.loaderHook.lifecycle.createLink.emit({
                url: e,
                attrs: r
              });
              if (n instanceof HTMLLinkElement) {
                return n;
              }
            }
          });
          if (o) {
            document.head.appendChild(n);
          }
        });
      } else {
        let e = {
          rel: "stylesheet",
          type: "text/css"
        };
        o.forEach(r => {
          let {
            link: n,
            needAttach: o
          } = federationRuntimeUtils.createLink({
            url: r,
            cb: () => {},
            attrs: e,
            createLinkHook: (e, r) => {
              let n = t.loaderHook.lifecycle.createLink.emit({
                url: e,
                attrs: r
              });
              if (n instanceof HTMLLinkElement) {
                return n;
              }
            },
            needDeleteLink: false
          });
          if (o) {
            document.head.appendChild(n);
          }
        });
      }
      if (n) {
        let e = {
          rel: "preload",
          as: "script"
        };
        i.forEach(r => {
          let {
            link: n,
            needAttach: o
          } = federationRuntimeUtils.createLink({
            url: r,
            cb: () => {},
            attrs: e,
            createLinkHook: (e, r) => {
              let n = t.loaderHook.lifecycle.createLink.emit({
                url: e,
                attrs: r
              });
              if (n instanceof HTMLLinkElement) {
                return n;
              }
            }
          });
          if (o) {
            document.head.appendChild(n);
          }
        });
      } else {
        let r = {
          fetchpriority: "high",
          type: (e == null ? undefined : e.type) === "module" ? "module" : "text/javascript"
        };
        i.forEach(e => {
          let {
            script: n,
            needAttach: o
          } = federationRuntimeUtils.createScript({
            url: e,
            cb: () => {},
            attrs: r,
            createScriptHook: (e, r) => {
              let n = t.loaderHook.lifecycle.createScript.emit({
                url: e,
                attrs: r
              });
              if (n instanceof HTMLScriptElement) {
                return n;
              }
            },
            needDeleteScript: true
          });
          if (o) {
            document.head.appendChild(n);
          }
        });
      }
    }
  }
  var tv = {
    global: {
      Global: H,
      nativeGlobal: M,
      resetFederationGlobalInfo: function () {
        j.__FEDERATION__.__GLOBAL_PLUGIN__ = [];
        j.__FEDERATION__.__INSTANCES__ = [];
        j.__FEDERATION__.moduleInfo = {};
        j.__FEDERATION__.__SHARE__ = {};
        j.__FEDERATION__.__MANIFEST_LOADING__ = {};
        Object.keys(C).forEach(e => {
          delete C[e];
        });
      },
      setGlobalFederationInstance: G,
      getGlobalFederationConstructor: W,
      setGlobalFederationConstructor: V,
      getInfoWithoutType: B,
      getGlobalSnapshot: q,
      getTargetSnapshotInfoByModuleInfo: X,
      getGlobalSnapshotInfoByModuleInfo: Y,
      setGlobalSnapshotInfoByModuleInfo: K,
      addGlobalSnapshot: z,
      getRemoteEntryExports: Z,
      registerGlobalPlugins: J,
      getGlobalHostPlugins: Q,
      getPreloaded: ee,
      setPreloaded: et
    },
    share: {
      getRegisteredShare: e7,
      getGlobalShareScope: te
    },
    utils: {
      matchRemoteWithNameAndExpose: tn,
      preloadAssets: tE,
      getRemoteInfo: tp
    }
  };
  class tb {
    async getEntry() {
      let e;
      if (!this.remoteEntryExports) {
        $(e = await tm({
          origin: this.host,
          remoteInfo: this.remoteInfo,
          remoteEntryExports: this.remoteEntryExports
        }), `remoteEntryExports is undefined 
 ${federationRuntimeUtils.safeToString(this.remoteInfo)}`);
        this.remoteEntryExports = e;
      }
      return this.remoteEntryExports;
    }
    async get(e, t, r, n) {
      let o;
      let {
        loadFactory: i = true
      } = r || {
        loadFactory: true
      };
      let a = await this.getEntry();
      if (!this.inited) {
        let t = this.host.shareScopeMap;
        let r = Array.isArray(this.remoteInfo.shareScope) ? this.remoteInfo.shareScope : [this.remoteInfo.shareScope];
        if (!r.length) {
          r.push("default");
        }
        r.forEach(e => {
          t[e] ||= {};
        });
        let o = t[r[0]];
        let i = [];
        let s = {
          version: this.remoteInfo.version || "",
          shareScopeKeys: Array.isArray(this.remoteInfo.shareScope) ? r : this.remoteInfo.shareScope || "default"
        };
        Object.defineProperty(s, "shareScopeMap", {
          value: t,
          enumerable: false
        });
        let u = await this.host.hooks.lifecycle.beforeInitContainer.emit({
          shareScope: o,
          remoteEntryInitOptions: s,
          initScope: i,
          remoteInfo: this.remoteInfo,
          origin: this.host
        });
        if ((a == null ? undefined : a.init) === undefined) {
          S(y(l, _, {
            hostName: this.host.name,
            remoteName: this.remoteInfo.name,
            remoteEntryUrl: this.remoteInfo.entry,
            remoteEntryKey: this.remoteInfo.entryGlobalName
          }));
        }
        await a.init(u.shareScope, u.initScope, u.remoteEntryInitOptions);
        await this.host.hooks.lifecycle.initContainer.emit({
          ...u,
          id: e,
          remoteSnapshot: n,
          remoteEntryExports: a
        });
      }
      this.lib = a;
      this.inited = true;
      if (!(o = await this.host.loaderHook.lifecycle.getModuleFactory.emit({
        remoteEntryExports: a,
        expose: t,
        moduleInfo: this.remoteInfo
      }))) {
        o = await a.get(t);
      }
      $(o, `${A(this.remoteInfo)} remote don't export ${t}.`);
      let s = L(this.remoteInfo.name, t);
      let u = this.wraperFactory(o, s);
      if (i) {
        return await u();
      } else {
        return u;
      }
    }
    wraperFactory(e, t) {
      function r(e, t) {
        if (e && typeof e == "object" && Object.isExtensible(e) && !Object.getOwnPropertyDescriptor(e, Symbol.for("mf_module_id"))) {
          Object.defineProperty(e, Symbol.for("mf_module_id"), {
            value: t,
            enumerable: false
          });
        }
      }
      if (e instanceof Promise) {
        return async () => {
          let n = await e();
          r(n, t);
          return n;
        };
      } else {
        return () => {
          let n = e();
          r(n, t);
          return n;
        };
      }
    }
    constructor({
      remoteInfo: e,
      host: t
    }) {
      this.inited = false;
      this.lib = undefined;
      this.remoteInfo = e;
      this.host = t;
    }
  }
  class t$ {
    on(e) {
      if (typeof e == "function") {
        this.listeners.add(e);
      }
    }
    once(e) {
      let t = this;
      this.on(function r() {
        var n = arguments.length;
        var o = Array(n);
        var i = 0;
        for (; i < n; i++) {
          o[i] = arguments[i];
        }
        t.remove(r);
        return e.apply(null, o);
      });
    }
    emit() {
      let e;
      var t = arguments.length;
      var r = Array(t);
      var n = 0;
      for (; n < t; n++) {
        r[n] = arguments[n];
      }
      if (this.listeners.size > 0) {
        this.listeners.forEach(t => {
          e = t(...r);
        });
      }
      return e;
    }
    remove(e) {
      this.listeners.delete(e);
    }
    removeAll() {
      this.listeners.clear();
    }
    constructor(e) {
      this.type = "";
      this.listeners = new Set();
      if (e) {
        this.type = e;
      }
    }
  }
  class tS extends t$ {
    emit() {
      let e;
      var t = arguments.length;
      var r = Array(t);
      var n = 0;
      for (; n < t; n++) {
        r[n] = arguments[n];
      }
      let o = Array.from(this.listeners);
      if (o.length > 0) {
        let t = 0;
        let n = e => e !== false && (t < o.length ? Promise.resolve(o[t++].apply(null, r)).then(n) : e);
        e = n();
      }
      return Promise.resolve(e);
    }
  }
  function tN(e, t) {
    if (!w(t)) {
      return false;
    }
    if (e !== t) {
      for (let r in e) {
        if (!(r in t)) {
          return false;
        }
      }
    }
    return true;
  }
  class tI extends t$ {
    emit(e) {
      if (!w(e)) {
        S(`The data for the "${this.type}" hook should be an object.`);
      }
      for (let t of this.listeners) {
        try {
          let r = t(e);
          if (tN(e, r)) {
            e = r;
          } else {
            this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
            break;
          }
        } catch (e) {
          N(e);
          this.onerror(e);
        }
      }
      return e;
    }
    constructor(e) {
      super();
      this.onerror = S;
      this.type = e;
    }
  }
  class tA extends t$ {
    emit(e) {
      if (!w(e)) {
        S(`The response data for the "${this.type}" hook must be an object.`);
      }
      let t = Array.from(this.listeners);
      if (t.length > 0) {
        let r = 0;
        let n = t => {
          N(t);
          this.onerror(t);
          return e;
        };
        let o = i => {
          if (tN(e, i)) {
            e = i;
            if (r < t.length) {
              try {
                return Promise.resolve(t[r++](e)).then(o, n);
              } catch (e) {
                return n(e);
              }
            }
          } else {
            this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
          }
          return e;
        };
        return Promise.resolve(o(e));
      }
      return Promise.resolve(e);
    }
    constructor(e) {
      super();
      this.onerror = S;
      this.type = e;
    }
  }
  class tR {
    applyPlugin(e, t) {
      $(P(e), "Plugin configuration is invalid.");
      let r = e.name;
      $(r, "A name must be provided by the plugin.");
      if (!this.registerPlugins[r]) {
        var n;
        this.registerPlugins[r] = e;
        if ((n = e.apply) !== null && n !== undefined) {
          n.call(e, t);
        }
        Object.keys(this.lifecycle).forEach(t => {
          let r = e[t];
          if (r) {
            this.lifecycle[t].on(r);
          }
        });
      }
    }
    removePlugin(e) {
      $(e, "A name is required.");
      let t = this.registerPlugins[e];
      $(t, `The plugin "${e}" is not registered.`);
      Object.keys(t).forEach(e => {
        if (e !== "name") {
          this.lifecycle[e].remove(t[e]);
        }
      });
    }
    constructor(e) {
      this.registerPlugins = {};
      this.lifecycle = e;
      this.lifecycleKeys = Object.keys(e);
    }
  }
  function tO(e, t) {
    let r = D(t);
    if (!r.url) {
      S(`The attribute remoteEntry of ${e.name} must not be undefined.`);
    }
    let n = federationRuntimeUtils.getResourceUrl(t, r.url);
    if (!federationRuntimeUtils.isBrowserEnv() && !n.startsWith("http")) {
      n = `https:${n}`;
    }
    e.type = r.type;
    e.entryGlobalName = r.globalName;
    e.entry = n;
    e.version = t.version;
    e.buildVersion = t.buildVersion;
  }
  function tw() {
    return {
      name: "snapshot-plugin",
      async afterResolve(e) {
        let {
          remote: t,
          pkgNameOrAlias: r,
          expose: n,
          origin: o,
          remoteInfo: i,
          id: a
        } = e;
        if (!R(t) || !O(t)) {
          let {
            remoteSnapshot: s,
            globalSnapshot: l
          } = await o.snapshotHandler.loadRemoteSnapshotInfo({
            moduleInfo: t,
            id: a
          });
          tO(i, s);
          let u = {
            remote: t,
            preloadConfig: {
              nameOrAlias: r,
              exposes: [n],
              resourceCategory: "sync",
              share: false,
              depsRemote: false
            }
          };
          let c = await o.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
            origin: o,
            preloadOptions: u,
            remoteInfo: i,
            remote: t,
            remoteSnapshot: s,
            globalSnapshot: l
          });
          if (c) {
            tE(i, o, c, false);
          }
          return {
            ...e,
            remoteSnapshot: s
          };
        }
        return e;
      }
    };
  }
  function tT(e) {
    let t = e.split(":");
    if (t.length === 1) {
      return {
        name: t[0],
        version: undefined
      };
    } else if (t.length === 2) {
      return {
        name: t[0],
        version: t[1]
      };
    } else {
      return {
        name: t[1],
        version: t[2]
      };
    }
  }
  function tP(e, t, r, n, o = {}, i) {
    let {
      value: s
    } = B(e, A(t));
    let l = i || s;
    if (l && !federationRuntimeUtils.isManifestProvider(l) && (r(l, t, n), l.remotesInfo)) {
      for (let t of Object.keys(l.remotesInfo)) {
        if (o[t]) {
          continue;
        }
        o[t] = true;
        let n = tT(t);
        let i = l.remotesInfo[t];
        tP(e, {
          name: n.name,
          version: i.matchedVersion
        }, r, false, o, undefined);
      }
    }
  }
  let tk = (e, t) => document.querySelector(`${e}[${e === "link" ? "href" : "src"}="${t}"]`);
  function tD(e, t, r, n, o) {
    let i = [];
    let s = [];
    let l = [];
    let u = new Set();
    let c = new Set();
    let {
      options: f
    } = e;
    let {
      preloadConfig: h
    } = t;
    let {
      depsRemote: d
    } = h;
    tP(n, r, (t, r, n) => {
      let o;
      if (n) {
        o = h;
      } else if (Array.isArray(d)) {
        let e = d.find(e => e.nameOrAlias === r.name || e.nameOrAlias === r.alias);
        if (!e) {
          return;
        }
        o = ty(e);
      } else {
        if (d !== true) {
          return;
        }
        o = h;
      }
      let u = federationRuntimeUtils.getResourceUrl(t, D(t).url);
      if (u) {
        l.push({
          name: r.name,
          moduleInfo: {
            name: r.name,
            entry: u,
            type: "remoteEntryType" in t ? t.remoteEntryType : "global",
            entryGlobalName: "globalName" in t ? t.globalName : r.name,
            shareScope: "",
            version: "version" in t ? t.version : undefined
          },
          url: u
        });
      }
      let c = "modules" in t ? t.modules : [];
      let f = tg(o.exposes);
      if (f.length && "modules" in t) {
        var m;
        c = t == null ? undefined : (m = t.modules) === null || m === undefined ? undefined : m.reduce((e, t) => {
          if ((f == null ? undefined : f.indexOf(t.moduleName)) !== -1) {
            e.push(t);
          }
          return e;
        }, []);
      }
      function p(e) {
        let r = e.map(e => federationRuntimeUtils.getResourceUrl(t, e));
        if (o.filter) {
          return r.filter(o.filter);
        } else {
          return r;
        }
      }
      if (c) {
        let n = c.length;
        for (let a = 0; a < n; a++) {
          let n = c[a];
          let l = `${r.name}/${n.moduleName}`;
          e.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
            id: n.moduleName === "." ? r.name : l,
            name: r.name,
            remoteSnapshot: t,
            preloadConfig: o,
            remote: r,
            origin: e
          });
          if (!ee(l)) {
            if (o.resourceCategory === "all") {
              i.push(...p(n.assets.css.async));
              i.push(...p(n.assets.css.sync));
              s.push(...p(n.assets.js.async));
            } else {
              o.resourceCategory = "sync";
              i.push(...p(n.assets.css.sync));
            }
            s.push(...p(n.assets.js.sync));
            et(l);
          }
        }
      }
    }, true, {}, o);
    if (o.shared && o.shared.length > 0) {
      let t = (t, r) => {
        let n = e7(e.shareScopeMap, r.sharedName, t, e.sharedHandler.hooks.lifecycle.resolveShare);
        if (n && typeof n.lib == "function") {
          r.assets.js.sync.forEach(e => {
            u.add(e);
          });
          r.assets.css.sync.forEach(e => {
            c.add(e);
          });
        }
      };
      o.shared.forEach(e => {
        let n = f.shared?.[e.sharedName];
        if (!n) {
          return;
        }
        let o = e.version ? n.find(t => t.version === e.version) : n;
        if (o) {
          k(o).forEach(r => {
            t(r, e);
          });
        }
      });
    }
    let m = s.filter(e => !u.has(e) && !tk("script", e));
    return {
      cssAssets: i.filter(e => !c.has(e) && !tk("link", e)),
      jsAssetsWithoutEntry: m,
      entryAssets: l.filter(e => !tk("script", e.url))
    };
  }
  let tL = function () {
    return {
      name: "generate-preload-assets-plugin",
      async generatePreloadAssets(e) {
        let {
          origin: t,
          preloadOptions: r,
          remoteInfo: n,
          remote: o,
          globalSnapshot: i,
          remoteSnapshot: s
        } = e;
        if (federationRuntimeUtils.isBrowserEnv()) {
          if (R(o) && O(o)) {
            return {
              cssAssets: [],
              jsAssetsWithoutEntry: [],
              entryAssets: [{
                name: o.name,
                url: o.entry,
                moduleInfo: {
                  name: n.name,
                  entry: o.entry,
                  type: n.type || "global",
                  entryGlobalName: "",
                  shareScope: ""
                }
              }]
            };
          } else {
            tO(n, s);
            return tD(t, r, n, i, s);
          }
        } else {
          return {
            cssAssets: [],
            jsAssetsWithoutEntry: [],
            entryAssets: []
          };
        }
      }
    };
  };
  function tj(e, t) {
    let r = Y({
      name: t.name,
      version: t.options.version
    });
    let n = r && "remotesInfo" in r && r.remotesInfo && B(r.remotesInfo, e.name).value;
    if (n && n.matchedVersion) {
      return {
        hostGlobalSnapshot: r,
        globalSnapshot: q(),
        remoteSnapshot: Y({
          name: e.name,
          version: n.matchedVersion
        })
      };
    } else {
      return {
        hostGlobalSnapshot: undefined,
        globalSnapshot: q(),
        remoteSnapshot: Y({
          name: e.name,
          version: "version" in e ? e.version : undefined
        })
      };
    }
  }
  class tM {
    async loadRemoteSnapshotInfo(e) {
      let t;
      let r;
      let {
        moduleInfo: n,
        id: o,
        expose: i
      } = e;
      let {
        options: s
      } = this.HostInstance;
      await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
        options: s,
        moduleInfo: n
      });
      let l = Y({
        name: this.HostInstance.options.name,
        version: this.HostInstance.options.version
      });
      if (!l) {
        l = {
          version: this.HostInstance.options.version || "",
          remoteEntry: "",
          remotesInfo: {}
        };
        z({
          [this.HostInstance.options.name]: l
        });
      }
      if (l && "remotesInfo" in l && !B(l.remotesInfo, n.name).value && ("version" in n || "entry" in n)) {
        l.remotesInfo = {
          ...(l == null ? undefined : l.remotesInfo),
          [n.name]: {
            matchedVersion: "version" in n ? n.version : n.entry
          }
        };
      }
      let {
        hostGlobalSnapshot: u,
        remoteSnapshot: c,
        globalSnapshot: f
      } = this.getGlobalRemoteInfo(n);
      let {
        remoteSnapshot: h,
        globalSnapshot: m
      } = await this.hooks.lifecycle.loadSnapshot.emit({
        options: s,
        moduleInfo: n,
        hostGlobalSnapshot: u,
        remoteSnapshot: c,
        globalSnapshot: f
      });
      if (h) {
        if (federationRuntimeUtils.isManifestProvider(h)) {
          let e = federationRuntimeUtils.isBrowserEnv() ? h.remoteEntry : h.ssrRemoteEntry || h.remoteEntry || "";
          let o = await this.getManifestJson(e, n, {});
          let i = K({
            ...n,
            entry: e
          }, o);
          t = o;
          r = i;
        } else {
          let {
            remoteSnapshot: e
          } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
            options: this.HostInstance.options,
            moduleInfo: n,
            remoteSnapshot: h,
            from: "global"
          });
          t = e;
          r = m;
        }
      } else if (R(n)) {
        let e = await this.getManifestJson(n.entry, n, {});
        let o = K(n, e);
        let {
          remoteSnapshot: i
        } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo: n,
          remoteSnapshot: e,
          from: "global"
        });
        t = i;
        r = o;
      } else {
        S(y(d, _, {
          hostName: n.name,
          hostVersion: n.version,
          globalSnapshot: JSON.stringify(m)
        }));
      }
      await this.hooks.lifecycle.afterLoadSnapshot.emit({
        id: o,
        host: this.HostInstance,
        options: s,
        moduleInfo: n,
        remoteSnapshot: t
      });
      return {
        remoteSnapshot: t,
        globalSnapshot: r
      };
    }
    getGlobalRemoteInfo(e) {
      return tj(e, this.HostInstance);
    }
    async getManifestJson(e, t, r) {
      let n = async () => {
        let r = this.manifestCache.get(e);
        if (r) {
          return r;
        }
        try {
          let t = await this.loaderHook.lifecycle.fetch.emit(e, {});
          if (!t || !(t instanceof Response)) {
            t = await fetch(e, {});
          }
          r = await t.json();
        } catch (n) {
          if (!(r = await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
            id: e,
            error: n,
            from: "runtime",
            lifecycle: "afterResolve",
            origin: this.HostInstance
          }))) {
            delete this.manifestLoading[e];
            S(y(u, _, {
              manifestUrl: e,
              moduleName: t.name,
              hostName: this.HostInstance.options.name
            }, `${n}`));
          }
        }
        $(r.metaData && r.exposes && r.shared, `${e} is not a federation manifest`);
        this.manifestCache.set(e, r);
        return r;
      };
      let o = async () => {
        let r = await n();
        let o = federationRuntimeUtils.generateSnapshotFromManifest(r, {
          version: e
        });
        let {
          remoteSnapshot: i
        } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo: t,
          manifestJson: r,
          remoteSnapshot: o,
          manifestUrl: e,
          from: "manifest"
        });
        return i;
      };
      this.manifestLoading[e] ||= o().then(e => e);
      return this.manifestLoading[e];
    }
    constructor(e) {
      this.loadingHostSnapshot = null;
      this.manifestCache = new Map();
      this.hooks = new tR({
        beforeLoadRemoteSnapshot: new tS("beforeLoadRemoteSnapshot"),
        loadSnapshot: new tA("loadGlobalSnapshot"),
        loadRemoteSnapshot: new tA("loadRemoteSnapshot"),
        afterLoadSnapshot: new tA("afterLoadSnapshot")
      });
      this.manifestLoading = H.__FEDERATION__.__MANIFEST_LOADING__;
      this.HostInstance = e;
      this.loaderHook = e.loaderHook;
    }
  }
  class tH {
    registerShared(e, t) {
      let {
        shareInfos: r,
        shared: n
      } = e1(e, t);
      Object.keys(r).forEach(e => {
        r[e].forEach(r => {
          if (!e7(this.shareScopeMap, e, r, this.hooks.lifecycle.resolveShare) && r && r.lib) {
            this.setShared({
              pkgName: e,
              lib: r.lib,
              get: r.get,
              loaded: true,
              shared: r,
              from: t.name
            });
          }
        });
      });
      return {
        shareInfos: r,
        shared: n
      };
    }
    async loadShare(e, t) {
      let {
        host: r
      } = this;
      let n = tt({
        pkgName: e,
        extraOptions: t,
        shareInfos: r.options.shared
      });
      if (n == null ? undefined : n.scope) {
        await Promise.all(n.scope.map(async e => {
          await Promise.all(this.initializeSharing(e, {
            strategy: n.strategy
          }));
        }));
      }
      let {
        shareInfo: o
      } = await this.hooks.lifecycle.beforeLoadShare.emit({
        pkgName: e,
        shareInfo: n,
        shared: r.options.shared,
        origin: r
      });
      $(o, `Cannot find ${e} Share in the ${r.options.name}. Please ensure that the ${e} Share parameters have been injected`);
      let i = e7(this.shareScopeMap, e, o, this.hooks.lifecycle.resolveShare);
      let a = e => {
        e.useIn ||= [];
        I(e.useIn, r.options.name);
      };
      if (i && i.lib) {
        a(i);
        return i.lib;
      }
      if (i && i.loading && !i.loaded) {
        let e = await i.loading;
        i.loaded = true;
        i.lib ||= e;
        a(i);
        return e;
      }
      if (i) {
        let t = (async () => {
          let e = await i.get();
          a(i);
          i.loaded = true;
          i.lib = e;
          return e;
        })();
        this.setShared({
          pkgName: e,
          loaded: false,
          shared: i,
          from: r.options.name,
          lib: null,
          loading: t
        });
        return t;
      }
      {
        if (t == null ? undefined : t.customShareInfo) {
          return false;
        }
        let n = (async () => {
          let t = await o.get();
          o.lib = t;
          o.loaded = true;
          a(o);
          let r = e7(this.shareScopeMap, e, o, this.hooks.lifecycle.resolveShare);
          if (r) {
            r.lib = t;
            r.loaded = true;
            r.from = o.from;
          }
          return t;
        })();
        this.setShared({
          pkgName: e,
          loaded: false,
          shared: o,
          from: r.options.name,
          lib: null,
          loading: n
        });
        return n;
      }
    }
    initializeSharing(e = er, t) {
      let {
        host: r
      } = this;
      let n = t == null ? undefined : t.from;
      let o = t == null ? undefined : t.strategy;
      let i = t == null ? undefined : t.initScope;
      let a = [];
      if (n !== "build") {
        let {
          initTokens: t
        } = this;
        i ||= [];
        let r = t[e];
        r ||= t[e] = {
          from: this.host.name
        };
        if (i.indexOf(r) >= 0) {
          return a;
        }
        i.push(r);
      }
      let s = this.shareScopeMap;
      let l = r.options.name;
      s[e] ||= {};
      let u = s[e];
      let c = (e, t) => {
        let {
          version: n,
          eager: o
        } = t;
        u[e] = u[e] || {};
        let i = u[e];
        let a = i[n];
        let s = !!a && (!!a.eager || !!a.shareConfig?.eager);
        if (!a || a.strategy !== "loaded-first" && !a.loaded && (!o != !s ? o : l > a.from)) {
          i[n] = t;
        }
      };
      let f = t => t && t.init && t.init(s[e], i);
      let h = async e => {
        let {
          module: t
        } = await r.remoteHandler.getRemoteModuleAndOptions({
          id: e
        });
        if (t.getEntry) {
          let n;
          try {
            n = await t.getEntry();
          } catch (t) {
            n = await r.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
              id: e,
              error: t,
              from: "runtime",
              lifecycle: "beforeLoadShare",
              origin: r
            });
          }
          if (!t.inited) {
            await f(n);
            t.inited = true;
          }
        }
      };
      Object.keys(r.options.shared).forEach(t => {
        r.options.shared[t].forEach(r => {
          if (r.scope.includes(e)) {
            c(t, r);
          }
        });
      });
      if (r.options.shareStrategy === "version-first" || o === "version-first") {
        r.options.remotes.forEach(t => {
          if (t.shareScope === e) {
            a.push(h(t.name));
          }
        });
      }
      return a;
    }
    loadShareSync(e, t) {
      let {
        host: r
      } = this;
      let n = tt({
        pkgName: e,
        extraOptions: t,
        shareInfos: r.options.shared
      });
      if (n == null ? undefined : n.scope) {
        n.scope.forEach(e => {
          this.initializeSharing(e, {
            strategy: n.strategy
          });
        });
      }
      let o = e7(this.shareScopeMap, e, n, this.hooks.lifecycle.resolveShare);
      let i = e => {
        e.useIn ||= [];
        I(e.useIn, r.options.name);
      };
      if (o) {
        if (typeof o.lib == "function") {
          i(o);
          if (!o.loaded) {
            o.loaded = true;
            if (o.from === r.options.name) {
              n.loaded = true;
            }
          }
          return o.lib;
        }
        if (typeof o.get == "function") {
          let t = o.get();
          if (!(t instanceof Promise)) {
            i(o);
            this.setShared({
              pkgName: e,
              loaded: true,
              from: r.options.name,
              lib: t,
              shared: o
            });
            return t;
          }
        }
      }
      if (n.lib) {
        n.loaded ||= true;
        return n.lib;
      }
      if (n.get) {
        let o = n.get();
        if (o instanceof Promise) {
          throw Error(y((t == null ? undefined : t.from) === "build" ? f : h, _, {
            hostName: r.options.name,
            sharedPkgName: e
          }));
        }
        n.lib = o;
        this.setShared({
          pkgName: e,
          loaded: true,
          from: r.options.name,
          lib: n.lib,
          shared: n
        });
        return n.lib;
      }
      throw Error(y(h, _, {
        hostName: r.options.name,
        sharedPkgName: e
      }));
    }
    initShareScopeMap(e, t, r = {}) {
      let {
        host: n
      } = this;
      this.shareScopeMap[e] = t;
      this.hooks.lifecycle.initContainerShareScopeMap.emit({
        shareScope: t,
        options: n.options,
        origin: n,
        scopeName: e,
        hostShareScopeMap: r.hostShareScopeMap
      });
    }
    setShared(e) {
      let {
        pkgName: t,
        shared: r,
        from: n,
        lib: o,
        loading: i,
        loaded: a,
        get: s
      } = e;
      let {
        version: l,
        scope: u = "default",
        ...c
      } = r;
      (Array.isArray(u) ? u : [u]).forEach(e => {
        this.shareScopeMap[e] ||= {};
        this.shareScopeMap[e][t] ||= {};
        if (!this.shareScopeMap[e][t][l]) {
          this.shareScopeMap[e][t][l] = {
            version: l,
            scope: ["default"],
            ...c,
            lib: o,
            loaded: a,
            loading: i
          };
          if (s) {
            this.shareScopeMap[e][t][l].get = s;
          }
          return;
        }
        let r = this.shareScopeMap[e][t][l];
        if (i && !r.loading) {
          r.loading = i;
        }
        if (a && !r.loaded) {
          r.loaded = a;
        }
        if (n && r.from !== n) {
          r.from = n;
        }
      });
    }
    _setGlobalShareScopeMap(e) {
      let t = te();
      let r = e.id || e.name;
      if (r && !t[r]) {
        t[r] = this.shareScopeMap;
      }
    }
    constructor(e) {
      this.hooks = new tR({
        afterResolve: new tA("afterResolve"),
        beforeLoadShare: new tA("beforeLoadShare"),
        loadShare: new tS(),
        resolveShare: new tI("resolveShare"),
        initContainerShareScopeMap: new tI("initContainerShareScopeMap")
      });
      this.host = e;
      this.shareScopeMap = {};
      this.initTokens = {};
      this._setGlobalShareScopeMap(e.options);
    }
  }
  class tx {
    formatAndRegisterRemote(e, t) {
      return (t.remotes || []).reduce((e, t) => {
        this.registerRemote(t, e, {
          force: false
        });
        return e;
      }, e.remotes);
    }
    setIdToRemoteMap(e, t) {
      let {
        remote: r,
        expose: n
      } = t;
      let {
        name: o,
        alias: i
      } = r;
      this.idToRemoteMap[e] = {
        name: r.name,
        expose: n
      };
      if (i && e.startsWith(o)) {
        let t = e.replace(o, i);
        this.idToRemoteMap[t] = {
          name: r.name,
          expose: n
        };
        return;
      }
      if (i && e.startsWith(i)) {
        let t = e.replace(i, o);
        this.idToRemoteMap[t] = {
          name: r.name,
          expose: n
        };
      }
    }
    async loadRemote(e, t) {
      let {
        host: r
      } = this;
      try {
        let {
          loadFactory: n = true
        } = t || {
          loadFactory: true
        };
        let {
          module: o,
          moduleOptions: i,
          remoteMatchInfo: a
        } = await this.getRemoteModuleAndOptions({
          id: e
        });
        let {
          pkgNameOrAlias: s,
          remote: l,
          expose: u,
          id: c,
          remoteSnapshot: f
        } = a;
        let h = await o.get(c, u, t, f);
        let d = await this.hooks.lifecycle.onLoad.emit({
          id: c,
          pkgNameOrAlias: s,
          expose: u,
          exposeModule: n ? h : undefined,
          exposeModuleFactory: n ? undefined : h,
          remote: l,
          options: i,
          moduleInstance: o,
          origin: r
        });
        this.setIdToRemoteMap(e, a);
        if (typeof d == "function") {
          return d;
        }
        return h;
      } catch (i) {
        let {
          from: n = "runtime"
        } = t || {
          from: "runtime"
        };
        let o = await this.hooks.lifecycle.errorLoadRemote.emit({
          id: e,
          error: i,
          from: n,
          lifecycle: "onLoad",
          origin: r
        });
        if (!o) {
          throw i;
        }
        return o;
      }
    }
    async preloadRemote(e) {
      let {
        host: t
      } = this;
      await this.hooks.lifecycle.beforePreloadRemote.emit({
        preloadOps: e,
        options: t.options,
        origin: t
      });
      let r = t_(t.options.remotes, e);
      await Promise.all(r.map(async e => {
        let {
          remote: r
        } = e;
        let n = tp(r);
        let {
          globalSnapshot: o,
          remoteSnapshot: i
        } = await t.snapshotHandler.loadRemoteSnapshotInfo({
          moduleInfo: r
        });
        let a = await this.hooks.lifecycle.generatePreloadAssets.emit({
          origin: t,
          preloadOptions: e,
          remote: r,
          remoteInfo: n,
          globalSnapshot: o,
          remoteSnapshot: i
        });
        if (a) {
          tE(n, t, a);
        }
      }));
    }
    registerRemotes(e, t) {
      let {
        host: r
      } = this;
      e.forEach(e => {
        this.registerRemote(e, r.options.remotes, {
          force: t == null ? undefined : t.force
        });
      });
    }
    async getRemoteModuleAndOptions(e) {
      let t;
      let {
        host: r
      } = this;
      let {
        id: n
      } = e;
      try {
        t = await this.hooks.lifecycle.beforeRequest.emit({
          id: n,
          options: r.options,
          origin: r
        });
      } catch (e) {
        if (!(t = await this.hooks.lifecycle.errorLoadRemote.emit({
          id: n,
          options: r.options,
          origin: r,
          from: "runtime",
          error: e,
          lifecycle: "beforeRequest"
        }))) {
          throw e;
        }
      }
      let {
        id: o
      } = t;
      let i = tn(r.options.remotes, o);
      $(i, y(c, _, {
        hostName: r.options.name,
        requestId: o
      }));
      let {
        remote: a
      } = i;
      let s = tp(a);
      let l = await r.sharedHandler.hooks.lifecycle.afterResolve.emit({
        id: o,
        ...i,
        options: r.options,
        origin: r,
        remoteInfo: s
      });
      let {
        remote: u,
        expose: f
      } = l;
      $(u && f, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${o}.`);
      let h = r.moduleCache.get(u.name);
      let d = {
        host: r,
        remoteInfo: s
      };
      if (!h) {
        h = new tb(d);
        r.moduleCache.set(u.name, h);
      }
      return {
        module: h,
        moduleOptions: d,
        remoteMatchInfo: l
      };
    }
    registerRemote(e, t, r) {
      let {
        host: n
      } = this;
      let o = () => {
        if (e.alias) {
          let r = t.find(t => {
            var r;
            return e.alias && (t.name.startsWith(e.alias) || ((r = t.alias) === null || r === undefined ? undefined : r.startsWith(e.alias)));
          });
          $(!r, `The alias ${e.alias} of remote ${e.name} is not allowed to be the prefix of ${r && r.name} name or alias`);
        }
        if ("entry" in e && federationRuntimeUtils.isBrowserEnv() && !e.entry.startsWith("http")) {
          e.entry = new URL(e.entry, window.location.origin).href;
        }
        e.shareScope ||= er;
        e.type ||= en;
      };
      this.hooks.lifecycle.beforeRegisterRemote.emit({
        remote: e,
        origin: n
      });
      let i = t.find(t => t.name === e.name);
      if (i) {
        let s = [`The remote "${e.name}" is already registered.`, "Please note that overriding it may cause unexpected errors."];
        if (r == null ? undefined : r.force) {
          this.removeRemote(i);
          o();
          t.push(e);
          this.hooks.lifecycle.registerRemote.emit({
            remote: e,
            origin: n
          });
          federationRuntimeUtils.warn(s.join(" "));
        }
      } else {
        o();
        t.push(e);
        this.hooks.lifecycle.registerRemote.emit({
          remote: e,
          origin: n
        });
      }
    }
    removeRemote(e) {
      try {
        let {
          host: r
        } = this;
        let {
          name: n
        } = e;
        let o = r.options.remotes.findIndex(e => e.name === n);
        if (o !== -1) {
          r.options.remotes.splice(o, 1);
        }
        let i = r.moduleCache.get(e.name);
        if (i) {
          let n = i.remoteInfo;
          let o = n.entryGlobalName;
          if (j[o]) {
            if (Object.getOwnPropertyDescriptor(j, o)?.configurable) {
              delete j[o];
            } else {
              j[o] = undefined;
            }
          }
          let s = td(i.remoteInfo);
          if (C[s]) {
            delete C[s];
          }
          r.snapshotHandler.manifestCache.delete(n.entry);
          let l = n.buildVersion ? federationRuntimeUtils.composeKeyWithSeparator(n.name, n.buildVersion) : n.name;
          let u = j.__FEDERATION__.__INSTANCES__.findIndex(e => n.buildVersion ? e.options.id === l : e.name === l);
          if (u !== -1) {
            let e = j.__FEDERATION__.__INSTANCES__[u];
            l = e.options.id || l;
            let t = te();
            let r = true;
            let o = [];
            Object.keys(t).forEach(e => {
              let i = t[e];
              if (i) {
                Object.keys(i).forEach(t => {
                  let a = i[t];
                  if (a) {
                    Object.keys(a).forEach(i => {
                      let s = a[i];
                      if (s) {
                        Object.keys(s).forEach(a => {
                          let l = s[a];
                          if (l && typeof l == "object" && l.from === n.name) {
                            if (l.loaded || l.loading) {
                              l.useIn = l.useIn.filter(e => e !== n.name);
                              if (l.useIn.length) {
                                r = false;
                              } else {
                                o.push([e, t, i, a]);
                              }
                            } else {
                              o.push([e, t, i, a]);
                            }
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
            if (r) {
              e.shareScopeMap = {};
              delete t[l];
            }
            o.forEach(e => {
              var r;
              var n;
              var o;
              let [i, a, s, l] = e;
              if ((o = t[i]) !== null && o !== undefined && (n = o[a]) !== null && n !== undefined && (r = n[s]) !== null && r !== undefined) {
                delete r[l];
              }
            });
            j.__FEDERATION__.__INSTANCES__.splice(u, 1);
          }
          let {
            hostGlobalSnapshot: c
          } = tj(e, r);
          if (c) {
            let t = c && "remotesInfo" in c && c.remotesInfo && B(c.remotesInfo, e.name).key;
            if (t) {
              delete c.remotesInfo[t];
              if (H.__FEDERATION__.__MANIFEST_LOADING__[t]) {
                delete H.__FEDERATION__.__MANIFEST_LOADING__[t];
              }
            }
          }
          r.moduleCache.delete(e.name);
        }
      } catch (e) {
        b.log("removeRemote fail: ", e);
      }
    }
    constructor(e) {
      this.hooks = new tR({
        beforeRegisterRemote: new tI("beforeRegisterRemote"),
        registerRemote: new tI("registerRemote"),
        beforeRequest: new tA("beforeRequest"),
        onLoad: new tS("onLoad"),
        handlePreloadModule: new t$("handlePreloadModule"),
        errorLoadRemote: new tS("errorLoadRemote"),
        beforePreloadRemote: new tS("beforePreloadRemote"),
        generatePreloadAssets: new tS("generatePreloadAssets"),
        afterPreloadRemote: new tS(),
        loadEntry: new tS()
      });
      this.host = e;
      this.idToRemoteMap = {};
    }
  }
  let tF = typeof FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN != "boolean" || !FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN;
  class tC {
    initOptions(e) {
      this.registerPlugins(e.plugins);
      let t = this.formatOptions(this.options, e);
      this.options = t;
      return t;
    }
    async loadShare(e, t) {
      return this.sharedHandler.loadShare(e, t);
    }
    loadShareSync(e, t) {
      return this.sharedHandler.loadShareSync(e, t);
    }
    initializeSharing(e = er, t) {
      return this.sharedHandler.initializeSharing(e, t);
    }
    initRawContainer(e, t, r) {
      let n = new tb({
        host: this,
        remoteInfo: tp({
          name: e,
          entry: t
        })
      });
      n.remoteEntryExports = r;
      this.moduleCache.set(e, n);
      return n;
    }
    async loadRemote(e, t) {
      return this.remoteHandler.loadRemote(e, t);
    }
    async preloadRemote(e) {
      return this.remoteHandler.preloadRemote(e);
    }
    initShareScopeMap(e, t, r = {}) {
      this.sharedHandler.initShareScopeMap(e, t, r);
    }
    formatOptions(e, t) {
      let {
        shared: r
      } = e1(e, t);
      let {
        userOptions: n,
        options: o
      } = this.hooks.lifecycle.beforeInit.emit({
        origin: this,
        userOptions: t,
        options: e,
        shareInfo: r
      });
      let i = this.remoteHandler.formatAndRegisterRemote(o, n);
      let {
        shared: a
      } = this.sharedHandler.registerShared(o, n);
      let s = [...o.plugins];
      if (n.plugins) {
        n.plugins.forEach(e => {
          if (!s.includes(e)) {
            s.push(e);
          }
        });
      }
      let l = {
        ...e,
        ...t,
        plugins: s,
        remotes: i,
        shared: a
      };
      this.hooks.lifecycle.init.emit({
        origin: this,
        options: l
      });
      return l;
    }
    registerPlugins(e) {
      let t = ti(e, this);
      this.options.plugins = this.options.plugins.reduce((e, t) => {
        if (t && e && !e.find(e => e.name === t.name)) {
          e.push(t);
        }
        return e;
      }, t || []);
    }
    registerRemotes(e, t) {
      return this.remoteHandler.registerRemotes(e, t);
    }
    registerShared(e) {
      this.sharedHandler.registerShared(this.options, {
        ...this.options,
        shared: e
      });
    }
    constructor(e) {
      this.hooks = new tR({
        beforeInit: new tI("beforeInit"),
        init: new t$(),
        beforeInitContainer: new tA("beforeInitContainer"),
        initContainer: new tA("initContainer")
      });
      this.version = "0.20.0";
      this.moduleCache = new Map();
      this.loaderHook = new tR({
        getModuleInfo: new t$(),
        createScript: new t$(),
        createLink: new t$(),
        fetch: new tS(),
        loadEntryError: new tS(),
        getModuleFactory: new tS()
      });
      this.bridgeHook = new tR({
        beforeBridgeRender: new t$(),
        afterBridgeRender: new t$(),
        beforeBridgeDestroy: new t$(),
        afterBridgeDestroy: new t$()
      });
      let t = tF ? [tw(), tL()] : [];
      let r = {
        id: tr(),
        name: e.name,
        plugins: t,
        remotes: [],
        shared: {},
        inBrowser: federationRuntimeUtils.isBrowserEnv()
      };
      this.name = e.name;
      this.options = r;
      this.snapshotHandler = new tM(this);
      this.sharedHandler = new tH(this);
      this.remoteHandler = new tx(this);
      this.shareScopeMap = this.sharedHandler.shareScopeMap;
      this.registerPlugins([...r.plugins, ...(e.plugins || [])]);
      this.options = this.formatOptions(r, e);
    }
  }
  function tU() {
    if (typeof FEDERATION_BUILD_IDENTIFIER != "undefined") {
      return FEDERATION_BUILD_IDENTIFIER;
    } else {
      return "";
    }
  }
  function tG(e, t) {
    let r = tU();
    return j.__FEDERATION__.__INSTANCES__.find(n => !!r && n.options.id === r || n.options.name === e && !n.options.version && !t || n.options.name === e && !!t && n.options.version === t);
  }
  var tW = {
    ...tv,
    global: {
      ...tv.global,
      getGlobalFederationInstance: tG
    }
  };
  require("process-browser-shim") /*id: 488992*/;
  federationRuntimeUtils.createLogger("[ Vmok Plugin ]");
  let tV = e => e.startsWith("bnpm") || e.startsWith("app") ? e.replace("bnpm:", "").replace("app:", "") : e;
  let tB = e => {
    let t = Object.keys(e);
    let r = {};
    for (let n of t) {
      r[tV(n)] = e[n];
    }
    return r;
  };
  let tq = e => {
    let t = Object.keys(e);
    let r = {};
    for (let n of t) {
      let t = e[n];
      if (t && "remotesInfo" in t && t.remotesInfo) {
        t.remotesInfo = tB(t.remotesInfo);
      }
      r[tV(n)] = t;
    }
    return r;
  };
  function tX(e, t, r) {
    let n = r || tW.global.getGlobalSnapshot();
    let o = n[t ? `${e}:${t}` : e] || n[e];
    if (!o) {
      return [];
    }
    let i = [];
    if (o && "remotesInfo" in o && o.remotesInfo && Object.keys(o.remotesInfo).length > 0) {
      Object.keys(o.remotesInfo).forEach(e => {
        let t = o.remotesInfo[e];
        let r = e.replace(/^(app|bnpm):/, "");
        if (t.moduleSource === "dynamic-module") {
          let e = Object.assign(Object.assign(Object.assign(Object.assign({}, t), {
            name: r,
            version: t.matchedVersion
          }), t.alias && {
            alias: t.alias
          }), {
            extra: Object.assign(Object.assign({
              name: t.name || ""
            }, t.route && {
              path: t.route
            }), {
              version: o.buildVersion || ""
            })
          });
          if (t.consumeMode === "entry") {
            i.push(Object.assign(Object.assign({}, e), {
              entry: t.matchedVersion
            }));
          } else {
            i.push(e);
          }
        }
      });
    }
    return i;
  }
  function tY(e, t) {
    let r = new Set(t.map(e => e.name));
    return e.filter(e => !r.has(e.name));
  }
  function tK(e) {
    let t = [];
    e.forEach(e => {
      if (e == null ? undefined : e.entry) {
        t.push(Object.assign(Object.assign({
          name: e.name,
          entry: e.entry
        }, e.alias && {
          alias: e.alias
        }), {
          moduleSource: e.moduleSource
        }));
      } else {
        t.push(Object.assign(Object.assign({
          name: e.name,
          version: e.version
        }, e.alias && {
          alias: e.alias
        }), {
          moduleSource: e.moduleSource
        }));
      }
    });
    return t;
  }
  function tz() {
    return {
      name: "inject-dynamic-modules",
      version: "1.18.0",
      beforeInit(e) {
        let {
          options: t
        } = e;
        let r = tW.global.getGlobalSnapshot();
        if (r && Object.keys(r).length > 0) {
          let e = tK(tY(tX(t.name, t.version), t.remotes));
          t.remotes = t.remotes.concat(e);
        }
        return e;
      }
    };
  }
  var tZ = Object.defineProperty;
  var tJ = Object.defineProperties;
  var tQ = Object.getOwnPropertyDescriptors;
  var t0 = Object.getOwnPropertySymbols;
  var t1 = Object.prototype.hasOwnProperty;
  var t2 = Object.prototype.propertyIsEnumerable;
  var t5 = (e, t, r) => t in e ? tZ(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : e[t] = r;
  var t8 = (e, t) => {
    for (var r in t ||= {}) {
      if (t1.call(t, r)) {
        t5(e, r, t[r]);
      }
    }
    if (t0) {
      for (var r of t0(t)) {
        if (t2.call(t, r)) {
          t5(e, r, t[r]);
        }
      }
    }
    return e;
  };
  var t9 = (e, t) => tJ(e, tQ(t));
  var t6 = (e, t, r) => new Promise((n, o) => {
    var i = e => {
      try {
        s(r.next(e));
      } catch (e) {
        o(e);
      }
    };
    var a = e => {
      try {
        s(r.throw(e));
      } catch (e) {
        o(e);
      }
    };
    var s = e => e.done ? n(e.value) : Promise.resolve(e.value).then(i, a);
    s((r = r.apply(e, t)).next());
  });
  (function (e) {
    e.CN = "cn";
    e.SG = "sg";
    e.VA = "va";
    e.GCP = "gcp";
    e.OCI = "oci";
    e.EU = "eu";
  })(n ||= {});
  (function (e) {
    e.BNPM = "bnpm";
    e.APP = "app";
  })(o ||= {});
  o.APP;
  o.BNPM;
  (function (e) {
    e.EXTRANET = "EXTRANET";
    e.INTRANET = "INTRANET";
  })(i ||= {});
  let t4 = "__CDN_PREFIX__";
  let t3 = (e, t, r, n) => {
    let o = [`${[t[e]]} #${e}`];
    if (r) {
      o.push(`args: ${JSON.stringify(r)}`);
    }
    if (n) {
      o.push(`Original Error Message:
 ${n}`);
    }
    o.push(`Search error code(#${e}) in vmok docs for more details.`);
    return o.join("\n");
  };
  let t7 = "VMOK-RUNTIME-001";
  let re = {
    [t7]: "Failed to replace publicPath prefix with region."
  };
  function rt(e, t = {}) {
    let o;
    let {
      region: i = n.CN
    } = t;
    let s = typeof i == "object" ? i.region : i;
    let l = (t, r) => {
      if (!r || !t) {
        return r;
      }
      let n = t[s] ? r.replace(t4, t[s]) : r;
      if (n.includes(t4) && e.exposes.length) {
        throw Error(t3(t7, re, {
          publicPath: r,
          region: s,
          expectRegions: Object.keys(t).join(",")
        }));
      }
      return n;
    };
    let u = () => "publicPath" in e.metaData ? l(e.metaData.region, e.metaData.publicPath) : e.metaData.getPublicPath;
    if (e.remotes) {
      e.remotes.forEach(e => {
        e.federationContainerName = e.garfishModuleName;
      });
    }
    let c = federationRuntimeUtils.generateSnapshotFromManifest(e, t);
    return Object.assign(Object.assign({}, o = "publicPath" in e.metaData ? Object.assign(Object.assign({}, c), {
      publicPath: u(),
      ssrPublicPath: l(e.metaData.region, e.metaData.ssrPublicPath)
    }) : Object.assign(Object.assign({}, c), {
      getPublicPath: u()
    })), {
      netType: e.metaData?.netType
    });
  }
  Object.assign(Object.assign({}, {
    "VMOK-BUILD-001": "Invalid publicPath.",
    "VMOK-BUILD-002": "Unexpected build environment.",
    "VMOK-BUILD-003": "Please set output.publicPath by manual if you are the region is \"tiktok\"."
  }), re);
  var rr = typeof FEDERATION_IPV4 != "undefined" ? FEDERATION_IPV4 : "127.0.0.1";
  var rn = typeof REMOTE_IP_STRATEGY != "undefined" ? REMOTE_IP_STRATEGY : "inherit";
  var ro = "localhost";
  function ri(e, t) {
    if (!(e in t)) {
      return;
    }
    let r = t[e];
    if (r && typeof r == "string" && r.includes(ro)) {
      t[e] = ra(r);
    }
  }
  function ra(e) {
    if (rn !== "ipv4") {
      return e;
    } else {
      return e.replace(ro, rr);
    }
  }
  var rs = () => ({
    name: "generate-manifest-from-manifest-plugin",
    version: "1.18.0",
    loadRemoteSnapshot(e) {
      let {
        manifestJson: t,
        manifestUrl: r,
        options: n
      } = e;
      if (!t || !r) {
        return e;
      }
      let o = rt(t, {
        region: n.region,
        version: r
      });
      if ("publicPath" in o) {
        ri("publicPath", o);
      }
      if ("getPublicPath" in o) {
        ri("getPublicPath", o);
      }
      if (o.remotesInfo) {
        Object.keys(o.remotesInfo).forEach(e => {
          ri("matchedVersion", o.remotesInfo[e]);
        });
      }
      return t9(t8({}, e), {
        remoteSnapshot: o
      });
    }
  });
  function rl(e) {
    if ("version" in e && e.version) {
      return `${e.name}:${e.version}`;
    } else if ("entry" in e && e.entry) {
      return `${e.name}:${e.entry}`;
    } else {
      return `${e.name}`;
    }
  }
  function ru(e, t = federationRuntimeUtils.isDebugMode()) {
    if (t) {
      globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = e;
      globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "1.18.0";
    }
  }
  function rc(e, t) {
    let {
      nativeGlobal: r
    } = tW.global;
    if (!r.__INIT_VMOK_DEPLOY_GLOBAL_DATA__ || t) {
      let t = tq(e);
      try {
        tW.global.addGlobalSnapshot(t);
        r.__INIT_VMOK_DEPLOY_GLOBAL_DATA__ = true;
      } catch (e) {}
    }
  }
  Object.prototype.toString;
  var rf = tW.global.getInfoWithoutType;
  function rh(e) {
    if (e) {
      return e.map(e => e === "." ? e : e.startsWith("./") ? e.replace("./", "") : e);
    } else {
      return [];
    }
  }
  function rd(e) {
    return t8({
      resourceCategory: "sync",
      share: true,
      depsRemote: true
    }, e);
  }
  function rm(e, t) {
    if ("getPublicPath" in e) {
      let r = Function(e.getPublicPath)();
      return `${r}${t}`;
    }
    if ("publicPath" in e) {
      return `${e.publicPath}${t}`;
    } else {
      return "";
    }
  }
  function rp(e) {
    let t = e.split(":");
    if (t.length === 1) {
      return {
        name: t[0],
        version: undefined
      };
    } else if (t.length !== 2) {
      return {
        name: t[1],
        version: t[2]
      };
    } else if (t[0] === "bnpm" || t[0] === "app") {
      return {
        name: t[1],
        version: undefined
      };
    } else {
      return {
        name: t[0],
        version: t[1]
      };
    }
  }
  function ry(e, t, r, n, o = {}, i) {
    let {
      value: s
    } = rf(e, rl(t));
    let l = i || s;
    if (l && !federationRuntimeUtils.isManifestProvider(l) && (r(l, t, n), l.remotesInfo)) {
      for (let t of Object.keys(l.remotesInfo)) {
        if (o[t]) {
          continue;
        }
        o[t] = true;
        let n = rp(t);
        let i = l.remotesInfo[t];
        ry(e, {
          name: n.name,
          version: i.matchedVersion
        }, r, false, o, undefined);
      }
    }
  }
  function r_(e, t, r, n, o) {
    let i = [];
    let a = [];
    let s = [];
    let l = new Set();
    let u = new Set();
    let {
      options: c
    } = e;
    let {
      preloadConfig: f
    } = t;
    let {
      depsRemote: h
    } = f;
    ry(n, r, (e, t, r) => {
      var n;
      let o;
      if (r) {
        o = f;
      } else if (Array.isArray(h)) {
        let e = h.find(e => {
          if (e.nameOrAlias === t.name || e.nameOrAlias === t.alias) {
            return true;
          }
        });
        if (!e) {
          return;
        }
        o = rd(e);
      } else {
        if (h !== true) {
          return;
        }
        o = f;
      }
      let l = rm(e, "remoteEntry" in e ? e.remoteEntry : "");
      if (l) {
        s.push({
          name: t.name,
          moduleInfo: {
            name: t.name,
            entry: l,
            type: "remoteEntryType" in e ? e.remoteEntryType : "global",
            entryGlobalName: "globalName" in e ? e.globalName : t.name,
            shareScope: "",
            version: "version" in e ? e.version : undefined
          },
          url: l
        });
      }
      let u = "modules" in e ? e.modules : [];
      let c = rh(o.exposes);
      function d(t) {
        let r = t.map(t => rm(e, t));
        if (o.filter) {
          return r.filter(o.filter);
        } else {
          return r;
        }
      }
      if (c.length && "modules" in e) {
        u = (n = e == null ? undefined : e.modules) == null ? undefined : n.reduce((e, t) => {
          if ((c == null ? undefined : c.indexOf(t.moduleName)) !== -1) {
            e.push(t);
          }
          return e;
        }, []);
      }
      if (u) {
        let e = u.length;
        for (let r = 0; r < e; r++) {
          let e = u[r];
          let n = `${t.name}/${e.moduleName}`;
          if (!tW.global.getPreloaded(n)) {
            if (o.resourceCategory === "all") {
              i.push(...d(e.assets.css.async));
              i.push(...d(e.assets.css.sync));
              a.push(...d(e.assets.js.async));
            } else {
              o.resourceCategory = "sync";
              i.push(...d(e.assets.css.sync));
            }
            a.push(...d(e.assets.js.sync));
            tW.global.setPreloaded(n);
          }
        }
      }
    }, true, {}, o);
    if (o.shared) {
      let t = (t, r) => {
        let n = tW.share.getRegisteredShare(e.shareScopeMap, r.sharedName, t, e.sharedHandler.hooks.lifecycle.resolveShare);
        if (n && typeof n.lib == "function") {
          r.assets.js.sync.forEach(e => {
            l.add(e);
          });
          r.assets.css.sync.forEach(e => {
            u.add(e);
          });
        }
      };
      o.shared.forEach(e => {
        var r;
        let n = (r = c.shared) == null ? undefined : r[e.sharedName];
        if (!n) {
          return;
        }
        let o = e.version ? n.find(t => t.version === e.version) : n;
        if (o) {
          (Array.isArray(o) ? o : [o]).forEach(r => {
            t(r, e);
          });
        }
      });
    }
    let d = a.filter(e => !l.has(e));
    return {
      cssAssets: i.filter(e => !u.has(e)),
      jsAssetsWithoutEntry: d,
      entryAssets: s
    };
  }
  function rg() {
    if (federationRuntimeUtils.isBrowserEnv()) {
      let e = [...document.querySelectorAll("script")].filter(e => e.id === "garfishModuleInfo");
      let t = {};
      if (e != null) {
        e.forEach(e => {
          let r = JSON.parse(e.innerHTML);
          if (!e.hasAttribute("data-merged")) {
            t = t8(t8({}, t), r);
            e.setAttribute("data-merged", "true");
          }
        });
      }
      rc(t, true);
    }
  }
  var rE = "default";
  function rv(e) {
    let t = "version" in e && typeof e.version != "object";
    let r = "region" in e;
    return !!t && !r && Object.keys(e).length === 1 || !!t && !!r && Object.keys(e).length === 2 || !t && !r && !!Object.keys(e).length;
  }
  var rb = "__GARFISH_INSULATION_VARIABLE__";
  var r$ = ["__FEDERATION__", "__VMOK__", "__GLOBAL_LOADING_REMOTE_ENTRY__"];
  function rS(e) {
    return [...new Set(e)];
  }
  var rN = {
    "compat-legacy-host": () => ({
      name: "compat-legacy-host-plugin",
      version: "1.18.0",
      initContainerShareScopeMap(e) {
        let {
          origin: t,
          shareScope: r
        } = e;
        if (rv(r)) {
          let e = tW.global.nativeGlobal.__FEDERATION__.__SHARE__[rE];
          if (e) {
            t.shareScopeMap[rE] = e;
          }
        }
        return e;
      }
    }),
    "compat-legacy-provider-container": () => ({
      name: "compat-legacy-provider-container-plugin",
      version: "1.18.0",
      beforeInitContainer(e) {
        let {
          shareScope: t,
          remoteEntryInitOptions: r,
          origin: n
        } = e;
        let {
          region: o
        } = n.options;
        t.region = o;
        t.version = r.version;
        r.region = o;
        return e;
      },
      initContainer(e) {
        let {
          origin: t
        } = e;
        let {
          nativeGlobal: r
        } = tW.global;
        if (t.shareScopeMap && t.shareScopeMap.default) {
          r.__VMOK__.__SHARE__.default = t8(t8({}, t.shareScopeMap.default), r.__VMOK__.__SHARE__.default);
        }
        return e;
      }
    }),
    "correct-remotes-init-options": () => ({
      name: "correct-remotes-init-options",
      version: "1.18.0",
      beforeInit(e) {
        if (!e.userOptions.remotes) {
          return e;
        }
        let t = (e, t) => {
          delete e.entry;
          e.version = t;
        };
        e.userOptions.remotes.forEach(e => {
          if ("entry" in e) {
            if (e.entry === "undefined") {
              t(e, "*");
            } else if (!e.entry.includes(federationRuntimeUtils.MANIFEST_EXT) && !e.entry.includes(".js")) {
              t(e, e.entry);
            }
          }
        });
        return e;
      }
    }),
    "generate-manifest-from-manifest": rs,
    "generate-preload-assets": () => ({
      name: "generate-preload-assets-plugin",
      version: "1.18.0",
      generatePreloadAssets(e) {
        return t6(this, null, function* () {
          let {
            origin: t,
            preloadOptions: r,
            remote: n,
            remoteSnapshot: o,
            globalSnapshot: i
          } = e;
          return r_(t, r, n, i, o);
        });
      }
    }),
    "server-snapshot-prod": function () {
      return {
        name: "server-snapshot-prod",
        version: "1.18.0",
        beforeInit: e => {
          rg();
          return e;
        }
      };
    },
    "garfish-plugin": () => ({
      name: "garfish-plugin",
      version: "1.18.0",
      beforeInit(e) {
        if (typeof window != "undefined") {
          let e = rS([...(globalThis[rb] || []), ...r$]);
          globalThis.__GARFISH_INSULATION_VARIABLE__ = e;
        }
        return e;
      },
      loadRemoteSnapshot(e) {
        return t6(this, null, function* () {
          if (typeof window != "undefined") {
            let t = rS([...(globalThis[rb] || []), federationRuntimeUtils.composeKeyWithSeparator(e.moduleInfo.name, e.remoteSnapshot.buildVersion)]);
            globalThis.__GARFISH_INSULATION_VARIABLE__ = t;
          }
          return e;
        });
      }
    }),
    "share-strategy": () => ({
      name: "share-strategy-plugin",
      version: "1.18.0",
      beforeInit: e => {
        e.userOptions.shareStrategy ||= "loaded-first";
        return e;
      }
    }),
    "inject-dynamic-modules": tz
  };
  function rI(e) {
    let t = new (W() || tC)(e);
    G(t);
    return t;
  }
  V(tC);
  var rA = e => {
    e.plugins ||= [];
    Object.values(rN).forEach(t => {
      var r;
      if ((r = e.plugins) != null) {
        r.push(t());
      }
    });
    return rI(e);
  };
  ru(class extends tC {
    constructor(e) {
      var t;
      let r = Object.values(rN).map(e => t9(t8({}, e()), {
        version: "debug"
      }));
      let n = r.map(e => e.name);
      let o = ((t = e.plugins) == null ? undefined : t.filter(e => n.indexOf(e.name) === -1)) || [];
      e.plugins = [...o, ...r];
      super(e);
    }
  });
  require.d(exports, {
    createFederationRuntime: function () {
      return rA;
    }
  });
}