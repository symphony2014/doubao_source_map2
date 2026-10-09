// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Ad' to 'parseUrlSafe'
// - Renamed export 'DI' to 'mergeUrlParams'
// - Renamed export 'DP' to 'getQueryParam'
// - Renamed export 'GP' to 'parseQueryMap'
// - Renamed export 'Gc' to 'isSpecialProtocol'
// - Renamed export 'Qt' to 'parseQueryString'
// - Renamed export 'Xy' to 'modifyUrlParams'
// - Renamed export 'cS' to 'removeUrlParam'
// - Renamed export 'ju' to 'appendUrlParams'
// - Renamed export 'jv' to 'validateUrl'
// - Renamed export 'pf' to 'parseUrlData'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 919916
         */
module.exports = function (module, exports, require) {
  var queryStringUtils_2_1 = require("query-string-utils_2_1") /*id: 698435*/;
  var throttledOmitPathStringify = require("throttled-omit-path-stringify") /*id: 159496*/;
  var toEntriesUtil = require("to-entries-util") /*id: 537539*/;
  let a = (e, t) => {
    try {
      let n = new URL(e);
      Object.entries(t).forEach(e => {
        let [t, i] = e;
        n.searchParams.append(t, String(i));
      });
      return n.toString();
    } catch (r) {
      let n = queryStringUtils_2_1.queryStringUtils.stringify(t);
      return `${e}${n ? `?${n}` : ""}`;
    }
  };
  let l = e => {
    let t = e.startsWith("#") || e.startsWith("?") ? e.slice(1) : e;
    let n = {};
    let i = /([^&=]+)=([^&]*)/g;
    let r = null;
    while (r = i.exec(t)) {
      let [, e, t] = r;
      try {
        n[decodeURIComponent(e)] = decodeURIComponent(t);
      } catch {
        continue;
      }
    }
    return n;
  };
  let s = (e, t) => {
    let n = {
      ...l(e.split("#")[0].split("?")[1] || ""),
      ...l(e.split("#")[1] || "")
    };
    return a(e.split("#")[0].split("?")[0], {
      ...n,
      ...t
    }).replace(/\?$/, "");
  };
  let u = e => {
    try {
      return new URL(e);
    } catch (e) {
      return null;
    }
  };
  let c = e => typeof window == "undefined" ? null : new URLSearchParams(new URL(window.location.href).search).get(e);
  let d = function (e, t = {}) {
    try {
      let i = new URL(e);
      return (!t.allowedProtocols || t.allowedProtocols.includes(i.protocol)) && (!t.allowedExtensions || t.allowedExtensions.map(e => e.toLowerCase()).includes(i.pathname.split(".").pop() ?? "")) && (!t.allowedHosts || t.allowedHosts.includes(i.host));
    } catch (e) {
      return false;
    }
  };
  let h = e => {
    let {
      operationType: t = "set",
      originalUrl: n,
      paramsList: i,
      hashParamsList: r
    } = e;
    try {
      let e = new URL(n);
      if (i != null) {
        i.forEach(n => {
          let {
            name: i,
            value: r
          } = n;
          if (i) {
            if (t === "set" && r) {
              e.searchParams.set(i, r);
              return;
            }
            if (t === "delete") {
              e.searchParams.delete(i);
            }
          }
        });
      }
      let o = m(e.hash);
      if (r != null) {
        r.forEach(e => {
          let {
            name: n,
            value: i
          } = e;
          if (n) {
            if (t === "set" && i) {
              o[n] = encodeURIComponent(i);
              return;
            }
            if (t === "delete" && n in o) {
              delete o[n];
            }
          }
        });
      }
      if (Object.keys(o).length > 0) {
        let t = Object.entries(o).map(e => {
          let [t, n] = e;
          return `${t}=${n}`;
        }).join("&");
        e.hash = `#${t}`;
      } else {
        e.hash = "";
      }
      return e.toString();
    } catch {
      return n;
    }
  };
  let m = e => {
    let t = {};
    if (e == null ? undefined : e.startsWith("#")) {
      e.slice(1).split("&").forEach(e => {
        let [n, i] = e.split("=");
        t[n] = i;
      });
    }
    return t;
  };
  let g = e => {
    if (e.startsWith("sslocal://flow")) {
      return true;
    }
    let t = u(e);
    return !!t && t.protocol === "coco:" && t.host === "applet" && !!t.searchParams.get("appletId");
  };
  let f = e => (e.split("?")[1] || "").split("&").reduce((e, t) => {
    let [n, i] = t.split("=");
    Reflect.set(e, n, i);
    return e;
  }, {});
  function p(e, t) {
    let i = new URL(e);
    let r = f(i.search) ?? {};
    return {
      url: i,
      query: r,
      keysValue: t.reduce((e, t) => {
        e[t] = i.searchParams.get(t) ?? "";
        return e;
      }, {})
    };
  }
  function _(e) {
    if (typeof window == "undefined") {
      return;
    }
    let t = f(location.search);
    if (!t[e]) {
      return;
    }
    let n = new URL(window.location.href);
    let i = throttledOmitPathStringify.omitPathStringify(t, [e]);
    let a = toEntriesUtil.toEntries(i).map(e => {
      let [t, n] = e;
      return `${t}=${n}`;
    }).join("&");
    n.search = `?${a}`;
    window.history.replaceState({}, document.title, n.toString());
  }
  require.d(exports, {
    parseUrlSafe: function () {
      return u;
    },
    mergeUrlParams: function () {
      return s;
    },
    getQueryParam: function () {
      return c;
    },
    parseQueryMap: function () {
      return f;
    },
    isSpecialProtocol: function () {
      return g;
    },
    parseQueryString: function () {
      return l;
    },
    modifyUrlParams: function () {
      return h;
    },
    removeUrlParam: function () {
      return _;
    },
    appendUrlParams: function () {
      return a;
    },
    validateUrl: function () {
      return d;
    },
    parseUrlData: function () {
      return p;
    }
  });
}