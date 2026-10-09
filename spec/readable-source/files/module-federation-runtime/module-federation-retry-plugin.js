// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'LH' to 'RetryPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19584.df73fbcb.js
         * chunkId: 19584
         * moduleId: 335887
         */
module.exports = function (module, exports, require) {
  var moduleFederationRuntimeUtils = require("module-federation-runtime-utils") /*id: 142165*/;
  var o = Object.defineProperty;
  var i = (e, t) => o(e, "name", {
    value: t,
    configurable: true
  });
  var a = 3;
  var s = 1000;
  var l = "[ Module Federation RetryPlugin ]";
  var u = "The request failed and has now been abandoned";
  var c = "RUNTIME-008";
  var f = moduleFederationRuntimeUtils.createLogger(l);
  function h(e, t) {
    if (!t || t.length === 0) {
      return null;
    }
    try {
      let r = new URL(e);
      let n = r.hostname;
      let o = r.port;
      let i = `${n}${o ? `:${o}` : ""}`;
      let a = t.map(e => {
        try {
          let t = new URL(e.startsWith("http") ? e : `https://${e}`);
          return {
            hostname: t.hostname,
            port: t.port,
            protocol: t.protocol
          };
        } catch {
          return {
            hostname: e,
            port: "",
            protocol: r.protocol
          };
        }
      }).filter(e => !!e.hostname);
      if (a.length === 0) {
        return null;
      }
      let s = -1;
      for (let e = a.length - 1; e >= 0; e--) {
        if (`${a[e].hostname}${a[e].port ? `:${a[e].port}` : ""}` === i) {
          s = e;
          break;
        }
      }
      let l = a.length;
      for (let e = 1; e <= l; e++) {
        let t = a[((s >= 0 ? s : -1) + e) % l];
        if (`${t.hostname}${t.port ? `:${t.port}` : ""}` !== i) {
          r.hostname = t.hostname;
          if (t.port !== undefined && t.port !== null && t.port !== "") {
            r.port = t.port;
          } else {
            r.port = "";
          }
          r.protocol = t.protocol || r.protocol;
          return r.toString();
        }
      }
      return null;
    } catch {
      return null;
    }
  }
  function d(e, t, r = "retryCount") {
    try {
      let n = new URL(e);
      n.searchParams.delete(r);
      n.searchParams.set(r, String(t));
      return n.toString();
    } catch {
      return e;
    }
  }
  function m(e) {
    let r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let {
      domains: n,
      addQuery: o,
      retryIndex: i = 0,
      queryKey: a = "retryCount"
    } = r;
    let s = e;
    try {
      let t = new URL(e);
      t.searchParams.delete(a);
      s = t.toString();
    } catch {}
    let l = h(s, n) ?? s;
    if (i > 0 && o) {
      try {
        let t = new URL(l);
        let r = new URL(e);
        r.searchParams.delete(a);
        let n = r.search.startsWith("?") ? r.search.slice(1) : r.search;
        if (typeof o == "function") {
          let e = o({
            times: i,
            originalQuery: n
          });
          t.search = e ? `?${e.replace(/^\?/, "")}` : "";
          l = t.toString();
        } else if (o === true) {
          t.searchParams.delete(a);
          t.searchParams.set(a, String(i));
          l = t.toString();
        }
      } catch {
        if (o === true) {
          l = d(l, i, a);
        }
      }
    }
    return l;
  }
  function p(e, t) {
    try {
      let r = new URL(e);
      let n = new URL(t);
      r.pathname = n.pathname;
      r.search = n.search;
      return r.toString();
    } catch {
      return t;
    }
  }
  async function y(e, t, r) {
    let {
      url: o,
      fetchOptions: i = {},
      retryTimes: h = a,
      retryDelay: d = s,
      domains: _,
      addQuery: g,
      onRetry: E,
      onSuccess: v,
      onError: b
    } = e;
    if (!o) {
      throw Error(`${l}: url is required in fetchWithRetry`);
    }
    let $ = r ?? e.retryTimes ?? a;
    let S = !t;
    let N = o;
    if (!S && t) {
      N = p(t, o);
    }
    let I = N;
    if (!S) {
      I = m(N, {
        domains: _,
        addQuery: g,
        retryIndex: $ - h,
        queryKey: "retryCount"
      });
    }
    try {
      if (!S && d > 0) {
        await new Promise(e => setTimeout(e, d));
      }
      let e = await fetch(I, i);
      let t = e.clone();
      if (!e.ok) {
        throw Error(`${l}: Request failed: ${e.status} ${e.statusText || ""} | url: ${I}`);
      }
      await t.json().catch(e => {
        throw Error(`${l}: JSON parse failed: ${(e == null ? undefined : e.message) || String(e)} | url: ${I}`);
      });
      if (!S && v && I) {
        v({
          domains: _,
          url: I,
          tagName: "fetch"
        });
      }
      return e;
    } catch (t) {
      if (h <= 0) {
        let e = $ - h;
        if (!S && e > 0) {
          if (b) {
            b({
              domains: _,
              url: I,
              tagName: "fetch"
            });
          }
          f.log(`${l}: retry failed, no retries left for url: ${I}`);
        }
        throw Error(`${c}: ${l}: ${u} | url: ${I}`);
      }
      {
        let t = $ - h + 1;
        let r = m(p(I, o), {
          domains: _,
          addQuery: g,
          retryIndex: t,
          queryKey: "retryCount"
        });
        if (E) {
          E({
            times: t,
            domains: _,
            url: r,
            tagName: "fetch"
          });
        }
        f.log(`${l}: Trying again. Number of retries left: ${h - 1}`);
        return await y({
          ...e,
          retryTimes: h - 1
        }, I, $);
      }
    }
  }
  function _(e) {
    let {
      retryOptions: t,
      retryFn: r,
      beforeExecuteRetry: n = i(() => {}, "beforeExecuteRetry")
    } = e;
    return async function (e) {
      let o;
      let i;
      let c;
      let {
        retryTimes: f = a,
        retryDelay: h = s,
        domains: d,
        addQuery: y,
        onRetry: _,
        onSuccess: g,
        onError: E
      } = t || {};
      let v = 0;
      let b = f;
      while (v < b) {
        try {
          n();
          if (h > 0 && v > 0) {
            await new Promise(e => setTimeout(e, h));
          }
          let t = v + 1;
          o = await r({
            ...e,
            getEntryUrl: e => {
              c ||= e;
              let r = c;
              if (i) {
                r = p(i, c);
              }
              let n = m(r, {
                domains: d,
                addQuery: y,
                retryIndex: t,
                queryKey: "retryCount"
              });
              if (_) {
                _({
                  times: t,
                  domains: d,
                  url: n,
                  tagName: "script"
                });
              }
              i = n;
              return n;
            }
          });
          if (g && i) {
            g({
              domains: d,
              url: i,
              tagName: "script"
            });
          }
          break;
        } catch (e) {
          if (++v >= b) {
            if (E && i) {
              E({
                domains: d,
                url: i,
                tagName: "script"
              });
            }
            throw Error(`${l}: ${u} | url: ${i || "unknown"}`);
          }
        }
      }
      return o;
    };
  }
  i(h, "rewriteWithNextDomain");
  i(d, "appendRetryCountQuery");
  i(m, "getRetryUrl");
  i(p, "combineUrlDomainWithPathQuery");
  i(y, "fetchRetry");
  i(_, "scriptRetry");
  var g = i(e => {
    if ((e == null ? undefined : e.fetch) || (e == null ? undefined : e.script)) {
      f.warn(`${l}: params is ${e}, fetch or script config is deprecated, please use the new config style. See docs: https://module-federation.io/plugin/plugins/retry-plugin.html`);
    }
    let {
      fetchOptions: t = {},
      retryTimes: r = a,
      successTimes: n = 0,
      retryDelay: o = s,
      domains: u = [],
      manifestDomains: c = [],
      addQuery: h,
      onRetry: d,
      onSuccess: m,
      onError: p
    } = e || {};
    return {
      name: "retry-plugin",
      fetch: async (e, i) => y({
        url: e,
        fetchOptions: {
          ...i,
          ...t
        },
        domains: c || u,
        addQuery: h,
        onRetry: d,
        onSuccess: m,
        onError: p,
        retryTimes: r,
        successTimes: n,
        retryDelay: o
      }),
      async loadEntryError(e) {
        let {
          getRemoteEntry: t,
          origin: n,
          remoteInfo: a,
          remoteEntryExports: s,
          globalLoading: l,
          uniqueKey: c
        } = e;
        let f = _({
          retryOptions: {
            retryTimes: r,
            retryDelay: o,
            domains: u,
            addQuery: h,
            onRetry: d,
            onSuccess: m,
            onError: p
          },
          retryFn: t,
          beforeExecuteRetry: i(() => {
            delete l[c];
          }, "beforeExecuteRetry")
        });
        return await f({
          origin: n,
          remoteInfo: a,
          remoteEntryExports: s
        });
      }
    };
  }, "RetryPlugin");
  require.d(exports, {
    RetryPlugin: function () {
      return g;
    }
  });
}