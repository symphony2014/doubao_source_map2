// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$O' to 'CdnProvider'
// - Renamed export 'Ds' to 'createDebounce'
// - Renamed export 'FU' to 'createScript'
// - Renamed export 'ZT' to 'noop'
// - Renamed export 'cn' to 'joinClasses'
// - Renamed export 'ew' to 'Hook'
// - Renamed export 'fs' to 'loadScripts'
// - Renamed export 'in' to 'traverseTree'
// - Renamed export 'j' to 'loadStylesheets'
// - Renamed export 'kl' to 'createWrapper'
// - Renamed export 'my' to 'createStylesheet'
// - Renamed export 'pK' to 'filterChildNodes'
// - Renamed export 'zv' to 'generateId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58010.e07ec0ec.js
         * chunkId: 58010
         * moduleId: 504656
         */
module.exports = function (module, exports, require) {
  let n = {
    jsdelivr: e => `https://cdn.jsdelivr.net/npm/${e}`,
    unpkg: e => `https://unpkg.com/${e}`
  };
  async function i(e, t) {
    let r = await fetch(e, {
      signal: t
    });
    if (!r.ok) {
      throw r;
    }
    await r.text();
  }
  class a {
    async getFastestProvider(e = 5000, t = "npm2url/dist/index.cjs") {
      let r = new AbortController();
      let n = 0;
      try {
        return await new Promise((a, o) => {
          Promise.all(Object.entries(this.providers).map(async e => {
            let [n, o] = e;
            try {
              await i(o(t), r.signal);
              a(n);
            } catch {}
          })).then(() => o(Error("All providers failed")));
          n = setTimeout(o, e, Error("Timed out"));
        });
      } finally {
        r.abort();
        clearTimeout(n);
      }
    }
    async findFastestProvider(e, t) {
      this.provider = await this.getFastestProvider(e, t);
      return this.provider;
    }
    setProvider(e, t) {
      if (t) {
        this.providers[e] = t;
      } else {
        delete this.providers[e];
      }
    }
    getFullUrl(e, t = this.provider) {
      if (e.includes("://")) {
        return e;
      }
      let r = this.providers[t];
      if (!r) {
        throw Error(`Provider ${t} not found`);
      }
      return r(e);
    }
    constructor() {
      this.providers = {
        ...n
      };
      this.provider = "jsdelivr";
    }
  }
  new a();
  class o {
    tap(e) {
      this.listeners.push(e);
      return () => this.revoke(e);
    }
    revoke(e) {
      let t = this.listeners.indexOf(e);
      if (t >= 0) {
        this.listeners.splice(t, 1);
      }
    }
    revokeAll() {
      this.listeners.splice(0);
    }
    call() {
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      for (let e of this.listeners) {
        e(...t);
      }
    }
    constructor() {
      this.listeners = [];
    }
  }
  let s = Math.random().toString(36).slice(2, 8);
  let l = 0;
  function c() {
    l += 1;
    return `mm-${s}-${l}`;
  }
  function u() {}
  function h(e, t) {
    let r = (e, n) => t(e, () => {
      var t;
      if ((t = e.children) == null) {
        return undefined;
      } else {
        return t.map(t => r(t, e));
      }
    }, n);
    return r(e);
  }
  function p(e) {
    var t = arguments.length;
    var r = Array(t > 1 ? t - 1 : 0);
    var n = 1;
    for (; n < t; n++) {
      r[n - 1] = arguments[n];
    }
    let i = (e || "").split(" ").filter(Boolean);
    r.forEach(e => {
      if (e && i.indexOf(e) < 0) {
        i.push(e);
      }
    });
    return i.join(" ");
  }
  function d(e) {
    if (typeof e == "string") {
      let t = e;
      e = e => e.tagName === t;
    }
    let t = e;
    return function () {
      let e = Array.from(this.childNodes);
      if (t) {
        e = e.filter(e => t(e));
      }
      return e;
    };
  }
  function m(e, t) {
    return function () {
      var r = arguments.length;
      var n = Array(r);
      var i = 0;
      for (; i < r; i++) {
        n[i] = arguments[i];
      }
      return t(e, ...n);
    };
  }
  function f() {
    let e = {};
    e.promise = new Promise((t, r) => {
      e.resolve = t;
      e.reject = r;
    });
    return e;
  }
  function g(e, t) {
    let r = {
      timer: 0
    };
    function n() {
      if (r.timer) {
        window.clearTimeout(r.timer);
        r.timer = 0;
      }
    }
    function i() {
      n();
      if (r.args) {
        r.result = e(...r.args);
      }
    }
    return function () {
      var e = arguments.length;
      var a = Array(e);
      var o = 0;
      for (; o < e; o++) {
        a[o] = arguments[o];
      }
      n();
      r.args = a;
      r.timer = window.setTimeout(i, t);
      return r.result;
    };
  }
  let v = "http://www.w3.org/1999/xlink";
  let b = {
    show: v,
    actuate: v,
    href: v
  };
  let y = e => typeof e == "string" || typeof e == "number";
  let x = e => (e == null ? undefined : e.vtype) === 1;
  let w = e => (e == null ? undefined : e.vtype) === 2;
  function k(e) {
    return e.children;
  }
  let S = {
    isSvg: false
  };
  function A(e, t) {
    if (!Array.isArray(t)) {
      t = [t];
    }
    if ((t = t.filter(Boolean)).length) {
      e.append(...t);
    }
  }
  let T = {
    className: "class",
    labelFor: "for"
  };
  function C(e, t) {
    if (Array.isArray(e)) {
      return e.map(e => C(e, t)).reduce((e, t) => e.concat(t), []);
    } else {
      return M(e, t);
    }
  }
  function M(e, t = S) {
    if (e == null || typeof e == "boolean") {
      return null;
    }
    if (e instanceof Node) {
      return e;
    }
    if (w(e)) {
      let {
        type: r,
        props: n
      } = e;
      if (r === k) {
        let e = document.createDocumentFragment();
        if (n.children) {
          A(e, C(n.children, t));
        }
        return e;
      }
      return M(r(n), t);
    }
    if (y(e)) {
      return document.createTextNode(`${e}`);
    }
    if (x(e)) {
      let r;
      let {
        type: n,
        props: i
      } = e;
      if (!t.isSvg && n === "svg") {
        t = Object.assign({}, t, {
          isSvg: true
        });
      }
      (function (e, t, r) {
        for (let n in t) {
          if (n !== "key" && n !== "children" && n !== "ref") {
            if (n === "dangerouslySetInnerHTML") {
              e.innerHTML = t[n].__html;
            } else if (n === "innerHTML" || n === "textContent" || n === "innerText" || n === "value" && ["textarea", "select"].includes(e.tagName)) {
              let r = t[n];
              if (r != null) {
                e[n] = r;
              }
            } else if (n.startsWith("on")) {
              e[n.toLowerCase()] = t[n];
            } else {
              (function (e, t, r, n) {
                t = T[t] || t;
                if (r === true) {
                  e.setAttribute(t, "");
                } else if (r === false) {
                  e.removeAttribute(t);
                } else {
                  let i = n ? b[t] : undefined;
                  if (i !== undefined) {
                    e.setAttributeNS(i, t, r);
                  } else {
                    e.setAttribute(t, r);
                  }
                }
              })(e, n, t[n], r.isSvg);
            }
          }
        }
      })(r = t.isSvg ? document.createElementNS("http://www.w3.org/2000/svg", n) : document.createElement(n), i, t);
      if (i.children) {
        let e = t;
        if (t.isSvg && n === "foreignObject") {
          e = Object.assign({}, e, {
            isSvg: false
          });
        }
        let a = C(i.children, e);
        if (a != null) {
          A(r, a);
        }
      }
      let {
        ref: a
      } = i;
      if (typeof a == "function") {
        a(r);
      }
      return r;
    }
    throw Error("mount: Invalid Vnode!");
  }
  function N() {
    var e = arguments.length;
    var t = Array(e);
    var r = 0;
    for (; r < e; r++) {
      t[r] = arguments[r];
    }
    return M(function (e, t) {
      var r = arguments.length;
      var n = Array(r > 2 ? r - 2 : 0);
      var i = 2;
      for (; i < r; i++) {
        n[i - 2] = arguments[i];
      }
      return function (e, t) {
        let r;
        if (typeof e == "string") {
          r = 1;
        } else if (typeof e == "function") {
          r = 2;
        } else {
          throw Error("Invalid VNode type");
        }
        return {
          vtype: r,
          type: e,
          props: t
        };
      }(e, t = Object.assign({}, t, {
        children: n.length === 1 ? n[0] : n
      }));
    }(...t));
  }
  let z = function (e) {
    let t = {};
    return function () {
      var r = arguments.length;
      var n = Array(r);
      var i = 0;
      for (; i < r; i++) {
        n[i] = arguments[i];
      }
      let a = `${n[0]}`;
      let o = t[a];
      if (!o) {
        o = {
          value: e(...n)
        };
        t[a] = o;
      }
      return o.value;
    };
  }(e => {
    document.head.append(N("link", {
      rel: "preload",
      as: "script",
      href: e
    }));
  });
  let E = {};
  let I = {};
  async function _(e, t) {
    var r;
    let n = e.type === "script" && ((r = e.data) == null ? undefined : r.src) || "";
    e.loaded ||= E[n];
    if (!e.loaded) {
      let r = f();
      e.loaded = r.promise;
      if (e.type === "script") {
        document.head.append(N("script", {
          ...e.data,
          onLoad: () => r.resolve(),
          onError: r.reject
        }));
        if (n) {
          E[n] = e.loaded;
        } else {
          r.resolve();
        }
      }
      if (e.type === "iife") {
        let {
          fn: n,
          getParams: i
        } = e.data;
        n(...((i == null ? undefined : i(t)) || []));
        r.resolve();
      }
    }
    await e.loaded;
  }
  async function R(e) {
    let t = e.type === "stylesheet" && e.data.href || "";
    e.loaded ||= I[t];
    if (!e.loaded) {
      let r = f();
      e.loaded = r.promise;
      if (t) {
        I[t] = e.loaded;
      }
      if (e.type === "style") {
        document.head.append(N("style", {
          textContent: e.data
        }));
        r.resolve();
      } else if (t) {
        document.head.append(N("link", {
          rel: "stylesheet",
          ...e.data
        }));
        fetch(t).then(e => {
          if (e.ok) {
            return e.text();
          }
          throw e;
        }).then(() => r.resolve(), r.reject);
      }
    }
    await e.loaded;
  }
  async function B(e, t) {
    e.forEach(e => {
      var t;
      if (e.type === "script" && ((t = e.data) == null ? undefined : t.src)) {
        z(e.data.src);
      }
    });
    t = {
      getMarkmap: () => window.markmap,
      ...t
    };
    for (let r of e) {
      await _(r, t);
    }
  }
  async function q(e) {
    await Promise.all(e.map(e => R(e)));
  }
  function O(e) {
    return {
      type: "script",
      data: {
        src: e
      }
    };
  }
  function F(e) {
    return {
      type: "stylesheet",
      data: {
        href: e
      }
    };
  }
  require.d(exports, {
    CdnProvider: function () {
      return a;
    },
    createDebounce: function () {
      return g;
    },
    createScript: function () {
      return O;
    },
    noop: function () {
      return u;
    },
    joinClasses: function () {
      return p;
    },
    Hook: function () {
      return o;
    },
    loadScripts: function () {
      return B;
    },
    traverseTree: function () {
      return h;
    },
    loadStylesheets: function () {
      return q;
    },
    createWrapper: function () {
      return m;
    },
    createStylesheet: function () {
      return F;
    },
    filterChildNodes: function () {
      return d;
    },
    generateId: function () {
      return c;
    }
  });
}