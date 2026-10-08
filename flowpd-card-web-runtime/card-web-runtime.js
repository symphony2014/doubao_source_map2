// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Renamed variable 'M' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'B' to 'objectPropertySetter'
// - Resolved require(84841) to 'object-property-setter'
// - Renamed variable 'V' to 'typeofHelper'
// - Resolved require(56852) to 'typeof-helper'
// - Renamed variable '$' to 'iterableToArrayUtil_1_1'
// - Resolved require(975753) to 'iterable-to-array-util_1_1'
// - Renamed variable 'U' to 'debugBrowserConfig'
// - Resolved require(471456) to 'debug-browser-config'
// - Renamed variable 'G' to 'processBrowserShim'
// - Resolved require(488992) to 'process-browser-shim'
// - Renamed variable 'eb' to 'processBrowserShim_1'
// - Resolved require(488992) to 'process-browser-shim'
// - Renamed variable 'eE' to 'processBrowserShim_2'
// - Resolved require(488992) to 'process-browser-shim'
// - Renamed variable 'eW' to 'processBrowserShim_3'
// - Resolved require(488992) to 'process-browser-shim'
// - Renamed variable 'ts' to 'queryStringUtils_6'
// - Resolved require(313705) to 'query-string-utils_6'
// - Resolved require(961361) to 'deep-equal-util_1_1'
// - Renamed variable 'tp' to 'reactDomEntryWrapper'
// - Resolved require(640848) to 'react-dom-entry-wrapper'
// - Renamed variable 'tP' to 'memoizeFunctionUtil'
// - Resolved require(825529) to 'memoize-function-util'
// - Renamed variable 'iW' to 'axiosHttpClient'
// - Resolved require(740865) to 'axios-http-client'
// - Renamed variable 'oi' to 'deepCloneWrapper_1'
// - Resolved require(391722) to 'deep-clone-wrapper_1'
// - Renamed variable 'oo' to 'boolExpressionEvaluator_1'
// - Resolved require(412962) to 'bool-expression-evaluator_1'
// - Updated imported property 'Z' to 'setObjectProperty' (module 84841)
// - Updated imported property 'Z' to 'iterableToArray' (module 975753)
// - Updated imported property 'Z' to 'getType' (module 56852)
// - Updated imported property 'Z' to 'axios' (module 740865)
// - Updated imported property 'Z' to 'deepClone' (module 391722)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flowpd-card-web-runtime.26dc6be7.js
         * chunkId: 21082
         * moduleId: 605849
         */
module.exports = function (module, exports, require) {
  let n;
  let i;
  let o;
  let a;
  var s;
  var l;
  var u;
  var c;
  var f;
  var d;
  var h;
  var p;
  var v;
  var y;
  var _;
  var m;
  var g;
  var b;
  var O;
  var w;
  var C;
  var A;
  var S;
  var j;
  var E;
  var x;
  var k;
  var P;
  var N;
  var L = {};
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  var D = require.t(reactJsxRuntimeCoreReexport, 2);
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var R = require.t(reactCoreLibraryReexport, 2);
  (n = I || {}).card_webruntime_view = "card_webruntime_view";
  n.card_webruntime_render = "card_webruntime_render";
  n.card_webruntime_error = "card_webruntime_error";
  var I = n;
  let F = (e, t) => {
    var r;
    if ((r = window.Tea) != null) {
      r.event(e, t);
    }
  };
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var debugBrowserConfig = require("debug-browser-config") /*id: 471456*/;
  var K = debugBrowserConfig;
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  var z = Object.prototype.toString;
  function q(e) {
    return e && typeof e == "object";
  }
  function H(e) {
    return z.call(e) === "[object Object]";
  }
  function W(e) {
    return q(e) && typeof e.then == "function";
  }
  if (!window.requestIdleCallback) {
    window.requestAnimationFrame;
  }
  var X = Object.prototype.hasOwnProperty;
  function J(e, t) {
    return X.call(e, t);
  }
  function Z(e) {
    let t = Object.create(null);
    for (let r = 0; r < e.length; r++) {
      t[e[r]] = true;
    }
    return e => !!t[e];
  }
  var Q = "[Garfish warning]";
  var Y = (e, t) => {
    try {
      if (typeof e == "string") {
        e = `${Q}: ${e}

`;
        t(e, true);
      } else if (e instanceof Error) {
        if (!e.message.startsWith(Q)) {
          e.message = `${Q}: ${e.message}`;
        }
        t(e, false);
      }
    } catch (r) {
      t(e, typeof e == "string");
    }
  };
  function ee(e) {
    Y(e, (e, t) => {
      if (t) {
        throw Error(e);
      }
      throw e;
    });
  }
  function et(e, t) {
    if (!e) {
      ee(t || "unknow reason");
    }
  }
  function er(e) {
    let t = [];
    for (let r = 0, n = e.length; r < n; r++) {
      for (let t = r + 1; t < n; t++) {
        if (e[r] === e[t]) {
          t = ++r;
        }
      }
      t.push(e[r]);
    }
    return t;
  }
  function en(e) {
    return e === null || typeof e == "string" || typeof e == "number" || typeof e == "bigint" || typeof e == "symbol" || typeof e == "boolean" || e === undefined || z.call(e) === "[object RegExp]";
  }
  function ei(e, t, r, n) {
    let i = new WeakMap();
    let o = new WeakMap();
    let a = new WeakMap();
    let s = Z(n || []);
    let l = Array.isArray;
    let u = (e, t) => {
      if (i.has(e) || o.has(e)) {
        return i.has(t) || o.has(t);
      }
    };
    let c = e => {
      if (en(e) || typeof e == "function") {
        return e;
      }
      if (a.has(e)) {
        return a.get(e);
      }
      if (i.has(e)) {
        return i.get(e);
      }
      if (o.has(e)) {
        return o.get(e);
      }
      if (l(e)) {
        if (r) {
          e = er(e);
        }
        let t = [];
        a.set(e, t);
        for (let r = 0, n = e.length; r < n; r++) {
          t[r] = c(e[r]);
        }
        return t;
      } else if (typeof e == "object") {
        let t = {};
        a.set(e, t);
        Reflect.ownKeys(e).forEach(r => t[r] = c(e[r]));
        return t;
      }
    };
    let f = (e, t, r) => {
      if (e.has(t)) {
        return e.get(t);
      }
      {
        if (s[r]) {
          return t;
        }
        let n = c(t);
        if (!en(n) && typeof n != "function") {
          e.set(t, n);
        }
        return n;
      }
    };
    let d = (e, t) => {
      let n = {};
      let a = Reflect.ownKeys(e);
      let s = Reflect.ownKeys(t);
      i.set(e, n);
      o.set(t, n);
      a.forEach(a => {
        let s = e[a];
        let h = t[a];
        if (J(t, a)) {
          if (l(s) && l(h)) {
            let e = c([...s, ...h]);
            n[a] = r ? er(e) : e;
          } else if (H(s) && H(h)) {
            n[a] = u(s, h) ? i.get(s) : d(s, h);
          } else {
            n[a] = f(o, h, a);
          }
        } else {
          n[a] = f(i, s, a);
        }
      });
      s.forEach(e => {
        if (!J(n, e)) {
          n[e] = f(o, t[e], e);
        }
      });
      return n;
    };
    return d(e, t);
  }
  function eo(e) {
    return !/^[a-zA-Z]:\\/.test(e) && !!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e);
  }
  function ea(e, t) {
    if (t.startsWith("http") || t.startsWith("//") || t.startsWith("blob:")) {
      return t;
    }
    let r = new URL(e, location.href);
    return new URL(t, r.href).href;
  }
  function es(e, t = 0) {
    return new Promise(r => {
      setTimeout(() => r(e), t);
    });
  }
  Z(["link", "style", "script", "img", "video", "audio", "iframe"]);
  var el = Z("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view".split(","));
  function eu(e) {
    if (e && e.length !== 0) {
      return e.reduce((e, {
        key: t,
        value: r
      }) => e + (r ? `${t}="${r}" ` : t), "");
    } else {
      return "";
    }
  }
  var ec = class {
    constructor(e) {
      this.document = e || document;
    }
    isText(e) {
      return e && e.type === "text";
    }
    isNode(e) {
      return e && e.type === "element";
    }
    isCommentNode(e) {
      return e && e.type === "comment";
    }
    isCssLinkNode(e) {
      return !!this.isNode(e) && e.tagName === "link" && !!e.attributes.find(({
        key: e,
        value: t
      }) => e === "rel" && t === "stylesheet");
    }
    isIconLinkNode(e) {
      return !!this.isNode(e) && e.tagName === "link" && !!e.attributes.find(({
        key: e,
        value: t
      }) => e === "rel" && t === "icon");
    }
    isPrefetchJsLinkNode(e) {
      let t;
      let r;
      if (!this.isNode(e) || e.tagName !== "link") {
        return false;
      }
      for (let {
        key: n,
        value: i
      } of e.attributes) {
        if (n === "rel") {
          t = true;
          if (i !== "preload" && i !== "prefetch") {
            return false;
          }
        } else if (n === "as" && (r = true, i !== "script")) {
          return false;
        }
      }
      return !!t && !!r;
    }
    isRemoteModule(e) {
      let t;
      let r;
      if (!this.isNode(e) || e.tagName !== "meta") {
        return false;
      }
      for (let {
        key: n,
        value: i
      } of e.attributes) {
        if (n === "name") {
          t = true;
          if (i !== "garfish-remote-module") {
            return false;
          }
        } else if (n === "src" && (r = true, i === undefined || i === "")) {
          return false;
        }
      }
      return !!t && !!r;
    }
    removeElement(e) {
      let t = e && e.parentNode;
      if (t) {
        t.removeChild(e);
      }
    }
    createElement(e) {
      let {
        tagName: t,
        attributes: r
      } = e;
      let n = el(t) ? this.document.createElementNS("http://www.w3.org/2000/svg", t) : this.document.createElement(t);
      this.applyAttributes(n, r);
      return n;
    }
    createTextNode(e) {
      return this.document.createTextNode(e.content);
    }
    createStyleNode(e) {
      let t = this.document.createElement("style");
      if (e) {
        t.textContent = e;
      }
      this.applyAttributes(t, [{
        key: "type",
        value: "text/css"
      }]);
      return t;
    }
    createLinkCommentNode(e) {
      if (!this.isNode(e)) {
        e = e ? `src="${e}" ` : "";
        return this.document.createComment(`<link ${e}execute by garfish(dynamic)></link>`);
      }
      {
        let t = eu(e.attributes);
        return `<link ${t.slice(0, -1)}></link>`;
      }
    }
    createScriptCommentNode(e) {
      if (this.isNode(e)) {
        let {
          attributes: t,
          children: r
        } = e;
        let n = eu(t);
        let i = (r == null ? undefined : r[0]) ? r[0].content : "";
        return this.document.createComment(`<script ${n} execute by garfish>${i}</script>`);
      }
      {
        let {
          src: t,
          code: r
        } = e;
        let n = t ? `src="${t}" ` : "";
        return this.document.createComment(`<script ${n}execute by garfish(dynamic)>${r}</script>`);
      }
    }
    applyAttributes(e, t) {
      if (t && t.length !== 0) {
        for (let {
          key: r,
          value: n
        } of t) {
          if (r) {
            if (n === null) {
              e.setAttribute(r, "");
            } else if (typeof n == "string") {
              if (r.charCodeAt(0) !== 120) {
                e.setAttribute(r, n);
              } else if (r.charCodeAt(3) === 58) {
                e.setAttributeNS("http://www.w3.org/XML/1998/namespace", r, n);
              } else if (r.charCodeAt(5) === 58 && r.slice(0, 5) === "xlink") {
                e.setAttributeNS("http://www.w3.org/1999/xlink", r, n);
              } else {
                e.setAttribute(r, n);
              }
            }
          }
        }
      }
    }
  };
  var ef = Symbol.for("__LOADER_FLAG__");
  function ed(e) {
    if (!(e = e == null ? undefined : e.trim())) {
      return null;
    }
    let t = 0;
    let r = "";
    let n = "";
    while (t < e.length && e[t] !== "/") {
      r += e[t];
      t++;
    }
    if (r.length === 0 || t >= e.length) {
      return null;
    }
    for (t++; t < e.length && e[t] !== ";";) {
      n += e[t];
      t++;
    }
    if ((n = n.replace(/[ \t\n\r]+$/, "")).length === 0) {
      return null;
    } else {
      return {
        type: r.toLocaleLowerCase(),
        subtype: n.toLocaleLowerCase()
      };
    }
  }
  function eh({
    src: e = "",
    type: t
  }) {
    if (/\.js$/.test(e)) {
      return true;
    }
    if (t) {
      if (t === "module") {
        return true;
      }
      let r = ed(t);
      if (function (e, t) {
        try {
          let r = new URL(t).search;
          let {
            type: n,
            subtype: i
          } = e || {};
          if (n === "application" && i === "json" && /callback/.test(r)) {
            return true;
          }
        } catch (e) {}
        return false;
      }(r, e) || function (e) {
        let {
          type: t,
          subtype: r
        } = e || {};
        switch (t) {
          case "text":
            switch (r) {
              case "ecmascript":
              case "javascript":
              case "javascript1.0":
              case "javascript1.1":
              case "javascript1.2":
              case "javascript1.3":
              case "javascript1.4":
              case "javascript1.5":
              case "jscript":
              case "livescript":
              case "x-ecmascript":
              case "x-javascript":
                return true;
              default:
                return false;
            }
          case "application":
            switch (r) {
              case "ecmascript":
              case "javascript":
              case "x-ecmascript":
              case "x-javascript":
                return true;
              default:
                return false;
            }
          default:
            return false;
        }
      }(r)) {
        return true;
      }
    }
    return false;
  }
  function ep({
    src: e = "",
    type: t
  }) {
    if (/\.css$/.test(e)) {
      return true;
    }
    if (t) {
      var r;
      if ((r = ed(t)) && r.type === "text" && r.subtype === "css") {
        return true;
      }
    }
    return false;
  }
  function ev({
    src: e = "",
    type: t
  }) {
    if (/\.html$/.test(e)) {
      return true;
    }
    if (t) {
      var r;
      if ((r = ed(t)) && r.type === "text" && r.subtype === "html") {
        return true;
      }
    }
    return false;
  }
  function ey({
    name: e,
    value: t
  }) {
    this.key = e;
    this.value = t;
  }
  Symbol.for("__GARFISH_FLAG__");
  var e_ = e => {
    let t = [];
    let r = e.attributes;
    let n = r.length;
    if (n > 0) {
      if (n === 1) {
        t[0] = new ey(r[0]);
      } else if (n === 2) {
        t[0] = new ey(r[0]);
        t[1] = new ey(r[1]);
      } else {
        for (let e = 0; e < n; e++) {
          t[e] = new ey(r[e]);
        }
      }
    }
    return t;
  };
  var em = (e, t) => {
    switch (e.nodeType) {
      case 3:
        return {
          type: "text",
          content: e.textContent
        };
      case 8:
        return {
          type: "comment",
          content: e.textContent
        };
      case 1:
        var r;
        return t({
          type: "element",
          tagName: el(r = e.tagName) ? r : r.toLowerCase(),
          attributes: e_(e),
          children: Array.from(e.childNodes).map(e => em(e, t))
        });
      default:
        ee(`Invalid node type "${e.nodeType}"`);
    }
  };
  var eg = K("garfish");
  eg.extend("core");
  eg.extend("router");
  var processBrowserShim_1 = require("process-browser-shim") /*id: 488992*/;
  var eO = class {
    constructor(e) {
      this.type = "";
      this.listeners = new Set();
      if (e) {
        this.type = e;
      }
    }
    on(e) {
      if (typeof e == "function") {
        this.listeners.add(e);
      } else if (processBrowserShim_1 !== undefined) {
        processBrowserShim_1.env;
      }
    }
    once(e) {
      let t = this;
      this.on(function r(...n) {
        t.remove(r);
        return e.apply(null, n);
      });
    }
    emit(...e) {
      if (this.listeners.size > 0) {
        this.listeners.forEach(t => t.apply(null, e));
      }
    }
    remove(e) {
      return this.listeners.delete(e);
    }
    removeAll() {
      this.listeners.clear();
    }
  };
  var ew = class extends eO {
    emit(...e) {
      let t;
      let r = Array.from(this.listeners);
      if (r.length > 0) {
        let n = 0;
        let i = t => t !== false && (n < r.length ? Promise.resolve(r[n++].apply(null, e)).then(i) : t);
        t = i();
      }
      return Promise.resolve(t);
    }
  };
  function eC(e, t) {
    if (!q(t)) {
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
  var eA = class extends eO {
    constructor(e) {
      super();
      this.onerror = ee;
      this.type = e;
    }
    emit(e) {
      if (!q(e)) {
        ee(`"${this.type}" hook response data must be an object.`);
      }
      for (let t of this.listeners) {
        try {
          let r = t(e);
          if (eC(e, r)) {
            e = r;
          } else {
            this.onerror(`The return value of hook "${this.type}" is incorrect.`);
            break;
          }
        } catch (e) {
          if (processBrowserShim_1 !== undefined) {
            processBrowserShim_1.env;
          }
          this.onerror(e);
        }
      }
      return e;
    }
  };
  var eS = class extends eO {
    constructor(e) {
      super();
      this.onerror = ee;
      this.type = e;
    }
    emit(e) {
      if (!q(e)) {
        ee(`"${this.type}" hook response data must be an object.`);
      }
      let t = Array.from(this.listeners);
      if (t.length > 0) {
        let r = 0;
        let n = t => {
          if (processBrowserShim_1 !== undefined) {
            processBrowserShim_1.env;
          }
          this.onerror(t);
          return e;
        };
        let i = o => {
          if (o === false) {
            return false;
          }
          if (eC(e, o)) {
            e = o;
            if (r < t.length) {
              try {
                return Promise.resolve(t[r++](e)).then(i, n);
              } catch (e) {
                return n(e);
              }
            }
          } else {
            this.onerror(`The return value of hook "${this.type}" is incorrect.`);
          }
          return e;
        };
        return Promise.resolve(i(e));
      }
      return Promise.resolve(e);
    }
  };
  var ej = class {
    constructor(e) {
      this.registerPlugins = {};
      this.lifecycle = e;
      this.lifecycleKeys = Object.keys(e);
    }
    usePlugin(e) {
      et(H(e), "Invalid plugin configuration.");
      let t = e.name;
      et(t, "Plugin must provide a name.");
      if (this.registerPlugins[t]) {
        Y(`Repeat to register plugin hooks "${t}".`, (e, t) => {
          if (!t) {
            e.message;
          }
        });
      } else {
        this.registerPlugins[t] = e;
        for (let r in this.lifecycle) {
          let t = e[r];
          if (t) {
            this.lifecycle[r].on(t);
          }
        }
      }
    }
    removePlugin(e) {
      et(e, "Must provide a name.");
      let t = this.registerPlugins[e];
      et(t, `plugin "${e}" is not registered.`);
      for (let r in this.lifecycle) {
        let e = t[r];
        if (e) {
          this.lifecycle[r].remove(e);
        }
      }
    }
    inherit({
      lifecycle: e,
      registerPlugins: t
    }) {
      for (let t in e) {
        et(!this.lifecycle[t], `"${t}" hook has conflict and cannot be inherited.`);
        this.lifecycle[t] = e[t];
      }
      for (let e in t) {
        et(!this.registerPlugins[e], `"${e}" plugin has conflict and cannot be inherited.`);
        this.usePlugin(t[e]);
      }
      return this;
    }
  };
  var processBrowserShim_2 = require("process-browser-shim") /*id: 488992*/;
  var ex = Object.defineProperty;
  var ek = Object.getOwnPropertySymbols;
  var eP = Object.prototype.hasOwnProperty;
  var eN = Object.prototype.propertyIsEnumerable;
  var eL = (e, t, r) => t in e ? ex(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : e[t] = r;
  var eT = (e, t) => {
    for (var r in t ||= {}) {
      if (eP.call(t, r)) {
        eL(e, r, t[r]);
      }
    }
    if (ek) {
      for (var r of ek(t)) {
        if (eN.call(t, r)) {
          eL(e, r, t[r]);
        }
      }
    }
    return e;
  };
  var eD = /url\(\s*(['"])?(.*?)\1\s*\)/g;
  var eM = /@charset\s+(['"])(.*?)\1\s*;?/g;
  var eR = /@import\s+(['"])(.*?)\1/g;
  var eI = class {
    constructor(e, t) {
      this.depsStack = new Set();
      this.scopeData = null;
      this.url = t || null;
      this.styleCode = e;
    }
    correctPath(e) {
      let {
        url: t,
        styleCode: r
      } = this;
      e ||= t;
      if (e && typeof r == "string") {
        this.styleCode = r.replace(eM, "").replace(eR, function (e, t, r) {
          if (r) {
            return `@import url(${t}${r}${t})`;
          } else {
            return e;
          }
        }).replace(eD, (t, r, n) => eo(n) ? t : `url("${e ? ea(e, n) : n}")`);
      }
    }
    transformCode(e) {
      return e;
    }
    setDep(e) {
      this.depsStack.add(e);
    }
    setScope(e) {
      this.scopeData = e;
    }
    isSameOrigin(e) {
      return this.depsStack.has(e);
    }
    renderAsStyleElement(e = "") {
      let t = document.createElement("style");
      let r = e + (this.styleCode ? this.styleCode : "/**empty style**/");
      t.setAttribute("type", "text/css");
      t.textContent = this.transformCode(r);
      return t;
    }
    clone() {
      let e = new this.constructor();
      e.url = this.url;
      e.styleCode = this.styleCode;
      e.scopeData = this.scopeData;
      e.depsStack = new Set(this.depsStack);
      return e;
    }
  };
  var eF = class {
    constructor(e, t) {
      this.alias = null;
      this.url = t || null;
      this.moduleCode = e;
    }
    setAlias(e) {
      if (e && typeof e == "string") {
        this.alias = e;
      }
    }
    clone() {
      let e = new this.constructor();
      e.url = this.url;
      e.alias = this.alias;
      e.moduleCode = this.moduleCode;
      return e;
    }
  };
  var eB = class {
    constructor(e, t) {
      this.DOMApis = new ec();
      this.astTree = [];
      this.pretreatmentStore = {};
      this.url = t;
      if (e) {
        let [t, r] = function (e, t) {
          let r = [];
          let n = document.createElement("html");
          let i = {};
          let o = e => {
            if (t.includes(e.tagName)) {
              i[e.tagName].push(e);
            }
            return e;
          };
          n.innerHTML = e;
          for (let r of t) {
            i[r] = [];
          }
          return [Array.from(n.childNodes).map(e => em(e, o)), i];
        }(e, ["meta", "link", "style", "script"]);
        this.astTree = t;
        this.pretreatmentStore = r;
      }
    }
    getNodesByTagName(...e) {
      let t = 0;
      let r = {};
      for (let n of e) {
        if (this.pretreatmentStore[n]) {
          t++;
          r[n] = this.pretreatmentStore[n];
        } else {
          r[n] = [];
        }
      }
      if (t !== e.length) {
        let t = n => {
          if (n.type === "element") {
            if (e.indexOf(n.tagName) > -1 && !this.pretreatmentStore[n.tagName]) {
              r[n.tagName].push(n);
            }
            for (let i of n.children) {
              t(i);
            }
          }
        };
        for (let e of this.astTree) {
          t(e);
        }
      }
      return r;
    }
    createElements(e, t, r) {
      let n = [];
      let i = (n, o) => {
        var a;
        let s;
        if (this.DOMApis.isCommentNode(n)) ;else if (this.DOMApis.isText(n)) {
          s = this.DOMApis.createTextNode(n);
          if (o) {
            o.appendChild(s);
          }
        } else if (this.DOMApis.isNode(n)) {
          let {
            tagName: l,
            children: u
          } = n;
          if (typeof r == "function") {
            s = (a = r(n, t)) == null ? undefined : a.customElement;
          }
          s ||= e[l] ? e[l](n) : this.DOMApis.createElement(n);
          if (o && s) {
            o.appendChild(s);
          }
          if (s) {
            let {
              nodeType: e,
              _ignoreChildNodes: t
            } = s;
            if (!t && e !== 8 && e !== 10) {
              for (let e of u) {
                i(e, s);
              }
            }
          }
        }
        return s;
      };
      for (let e of this.astTree) {
        if (this.DOMApis.isNode(e) && e.tagName !== "!doctype") {
          let r = i(e, t);
          if (r) {
            n.push(r);
          }
        }
      }
      return n;
    }
    toResolveUrl(e, t, r) {
      var n;
      let i = (n = e.attributes) == null ? undefined : n.find(({
        key: e
      }) => e === t);
      if (i && i.value && r) {
        i.value = ea(r, i.value);
      }
    }
    ignoreChildNodesCreation(e) {
      if (e) {
        e._ignoreChildNodes = true;
      }
      return e;
    }
    findAllMetaNodes() {
      return this.getNodesByTagName("meta").meta;
    }
    findAllLinkNodes() {
      return this.getNodesByTagName("link").link;
    }
    findAllJsNodes() {
      return this.getNodesByTagName("script").script;
    }
    findAttributeValue(e, t) {
      var r;
      var n;
      return ((n = (r = e.attributes) == null ? undefined : r.find(({
        key: e
      }) => e === t)) == null ? undefined : n.value) ?? undefined;
    }
    cloneNode(e) {
      return ei(e, {});
    }
    clone() {
      let e = new this.constructor();
      e.url = this.url;
      e.astTree = this.astTree;
      e.pretreatmentStore = this.pretreatmentStore;
      e.DOMApis = new ec(this.DOMApis.document);
      return e;
    }
  };
  var eV = class {
    constructor(e, t) {
      this.depsStack = new Set();
      this.mimeType = "";
      this.async = false;
      this.defer = false;
      this.url = t;
      this.scriptCode = e;
    }
    isModule() {
      return this.mimeType === "module";
    }
    isInlineScript() {
      return !this.url;
    }
    setMimeType(e) {
      this.mimeType = e || "";
    }
    setAsyncAttribute(e) {
      this.async = !!e;
    }
    setDefferAttribute(e) {
      this.defer = !!e;
    }
    setDep(e) {
      this.depsStack.add(e);
    }
    isSameOrigin(e) {
      return this.depsStack.has(e);
    }
    clone() {
      let e = new this.constructor();
      e.url = this.url;
      e.async = this.async;
      e.mimeType = this.mimeType;
      e.scriptCode = this.scriptCode;
      e.depsStack = new Set(this.depsStack);
      return e;
    }
  };
  function e$(e) {
    e.resourceManager &&= e.resourceManager.clone();
    return e;
  }
  var eU = new WeakSet();
  var eK = Symbol("__defaultBufferPoll__");
  var eG = ["js", "css", "module", "template", eK];
  var ez = class {
    constructor(e = 52428800) {
      this.totalSize = 0;
      this.recorder = {};
      this.maxSize = e;
      eG.forEach(e => {
        this.recorder[e] = 0;
        this[e] = new Map();
      });
    }
    bufferPool(e) {
      return this[e];
    }
    has(e) {
      return eG.some(t => this[t].has(e));
    }
    get(e) {
      for (let t of eG) {
        if (this[t].has(e)) {
          return this[t].get(e);
        }
      }
    }
    set(e, t, r) {
      let n = eU.has(t) ? 0 : t.size;
      let i = this.totalSize + n;
      if (i < this.maxSize) {
        let o = r;
        let a = this.bufferPool(r);
        if (!a) {
          o = eK;
          a = this.bufferPool(eK);
        }
        a.set(e, t);
        this.totalSize = i;
        this.recorder[o] += n;
        return true;
      }
      return false;
    }
    clear(e) {
      if (typeof e == "string") {
        let t = this.bufferPool(e);
        if (t && t instanceof Map) {
          let r = this.recorder[e];
          this.totalSize -= r;
          this.recorder[e] = 0;
          t.clear();
        }
      } else {
        eG.forEach(e => {
          this[e].clear();
          this.recorder[e] = 0;
        });
        this.totalSize = 0;
      }
    }
  };
  (s = eq || {}).anonymous = "same-origin";
  s["use-credentials"] = "include";
  var eq = s;
  var eH = class {
    constructor(e) {
      this.personalId = ef;
      this.StyleManager = eI;
      this.ModuleManager = eF;
      this.TemplateManager = eB;
      this.JavaScriptManager = eV;
      this.hooks = new ej({
        error: new eO(),
        loaded: new eA("loaded"),
        clear: new eA("clear"),
        beforeLoad: new eA("beforeLoad"),
        fetch: new ew("fetch")
      });
      this.options = e || {};
      this.loadingList = Object.create(null);
      this.cacheStore = Object.create(null);
    }
    setOptions(e) {
      this.options = eT(eT({}, this.options), e);
    }
    clear(e, t) {
      let r = this.cacheStore[e];
      if (r) {
        r.clear(t);
        this.hooks.lifecycle.clear.emit({
          scope: e,
          fileType: t
        });
      }
    }
    clearAll(e) {
      for (let t in this.cacheStore) {
        this.clear(t, e);
      }
    }
    usePlugin(e) {
      this.hooks.usePlugin(e);
    }
    setLifeCycle(e) {
      this.hooks.usePlugin(eT({
        name: "loader-lifecycle"
      }, e));
    }
    loadModule(e) {
      return this.load({
        scope: "modules",
        url: e,
        isRemoteModule: true
      });
    }
    async load({
      scope: e,
      url: t,
      isRemoteModule: r = false,
      crossOrigin: n = "anonymous",
      defaultContentType: i = ""
    }) {
      var o;
      let {
        options: a,
        loadingList: s,
        cacheStore: l
      } = this;
      let u = s[t];
      if (u && Object.keys(u).includes(e)) {
        return es(u[e], 4);
      }
      let c = l[e];
      c ||= l[e] = new ez(a.maxSize);
      if (c.has(t)) {
        return es(e$(c.get(t)), 4);
      }
      for (let e in l) {
        let r = l[e];
        if (r !== c && r.has(t)) {
          let e = r.get(t);
          eU.add(e);
          c.set(t, e, e.fileType);
          return es(e$(e), 4);
        }
      }
      let f = function (e, t) {
        let r = e.requestConfig;
        return eT({
          mode: "cors"
        }, typeof r == "function" ? r(t) : r);
      }(this, t);
      f.credentials = eq[n];
      let d = this.hooks.lifecycle.beforeLoad.emit({
        url: t,
        scope: e,
        requestConfig: f
      });
      let h = (o = this.hooks.lifecycle.fetch, async function (e, t) {
        let r = await o.emit(e, t || {});
        if (!r || !(r instanceof Response)) {
          r = await fetch(e, t || {});
        }
        if (r.status >= 400) {
          ee(`"${e}" load failed with status "${r.status}"`);
        }
        let n = await r.text();
        let i = r.headers.get("content-type") || "";
        let a = Number(r.headers.get("content-size"));
        return {
          code: n,
          result: r,
          mimeType: ed(i || ""),
          type: i,
          size: Number.isNaN(a) ? null : a
        };
      })(d.url, d.requestConfig).then(({
        code: n,
        size: o,
        result: a,
        type: s
      }) => {
        let l;
        let u = "";
        if (r) {
          u = "module";
          l = this.ModuleManager;
        } else if (ev({
          type: s,
          src: a.url
        }) || ev({
          type: i
        })) {
          u = "template";
          l = this.TemplateManager;
        } else if (eh({
          type: i
        }) || eh({
          type: s,
          src: a.url
        })) {
          u = "js";
          l = this.JavaScriptManager;
        } else if (ep({
          src: a.url,
          type: s
        }) || ep({
          type: i
        })) {
          u = "css";
          l = this.StyleManager;
        }
        let f = l ? new l(n, a.url) : null;
        let d = this.hooks.lifecycle.loaded.emit({
          result: a,
          value: {
            url: t,
            scope: e,
            resourceManager: f,
            fileType: u || "",
            size: o || n.length,
            code: f ? "" : n
          }
        });
        if (u) {
          c.set(t, d.value, u);
        }
        return e$(d.value);
      }).catch(t => {
        if (processBrowserShim_2 !== undefined) {
          processBrowserShim_2.env;
        }
        this.hooks.lifecycle.error.emit(t, {
          scope: e
        });
        throw t;
      }).finally(() => {});
      if (s[t]) {
        s[t][e] = h;
      } else {
        s[t] = {
          [e]: h
        };
      }
      return h;
    }
  };
  var processBrowserShim_3 = require("process-browser-shim") /*id: 488992*/;
  var eX = Object.defineProperty;
  var eJ = Object.defineProperties;
  var eZ = Object.getOwnPropertyDescriptors;
  var eQ = Object.getOwnPropertySymbols;
  var eY = Object.prototype.hasOwnProperty;
  var e0 = Object.prototype.propertyIsEnumerable;
  var e1 = (e, t, r) => t in e ? eX(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : e[t] = r;
  var e3 = (e, t) => {
    for (var r in t ||= {}) {
      if (eY.call(t, r)) {
        e1(e, r, t[r]);
      }
    }
    if (eQ) {
      for (var r of eQ(t)) {
        if (e0.call(t, r)) {
          e1(e, r, t[r]);
        }
      }
    }
    return e;
  };
  var e2 = (e, t) => eJ(e, eZ(t));
  var e6 = new ej({
    preloaded: new eO(),
    initModule: new eO("initModule"),
    beforeLoadModule: new eA("beforeLoadModule"),
    asyncBeforeLoadModule: new eS("asyncBeforeLoadModule"),
    afterLoadModule: new eA("afterLoadModule"),
    asyncAfterLoadModule: new eS("asyncAfterLoadModule")
  });
  var e9 = class {
    constructor(e, t) {
      this.manager = e;
      this.env = {
        exports: {},
        module: null,
        require: e => {
          var r;
          var n;
          return (t || {})[e] || tn.externals && tn.externals[e] || ((n = (r = _) == null ? undefined : r.context) == null ? undefined : n.externals[e]);
        }
      };
      this.env.module = this.env;
      e6.lifecycle.initModule.emit(this);
    }
    execScript() {
      let {
        url: e,
        moduleCode: t
      } = this.manager;
      if (_) {
        _.execScript(t, this.env, e, {
          noEntry: true
        });
      } else {
        let r = `
${e ? `//# sourceURL=${e}
` : ""}`;
        (function (e, t, r, n = false) {
          let i = Object.keys(t);
          let o = eval("window;");
          let a = "__garfish__exec_temporary__";
          let s = i.map(e => `window.${a}.${e}`);
          let l = "__garfish_exec_temporary_context__";
          try {
            o[a] = t;
            o[l] = r;
            let u = [`;(function(${i.join(",")}){${n ? "\"use strict\";" : ""}`, `
}).call(window.${l},${s.join(",")});`];
            let c = function (e) {
              let t = {
                [e]: true
              };
              return Object.keys(t)[0];
            }(u[0] + e + u[1]);
            eval(c);
          } catch (e) {
            throw e;
          } finally {
            delete o[a];
            delete o[l];
          }
        })(`;${t}
${r}`, this.env, window);
      }
      return this.env;
    }
  };
  var e8 = e => {
    for (let t in e) {
      let r = e[t];
      et(eo(r), `The loading of the remote module must be an absolute path. "${r}"`);
      tn.alias[t] = r;
    }
  };
  function e5(e) {
    et(H(e), "Module configuration must be an object.");
    for (let t in e) {
      if (J(tn, t)) {
        if (t === "env") {
          Object.assign(tn[t], e[t]);
        } else if (t === "alias") {
          let r = e[t];
          if (r) {
            e8(r);
          }
        } else {
          tn[t] = e[t];
        }
      } else if (processBrowserShim_3 !== undefined) {
        processBrowserShim_3.env;
      }
    }
  }
  function e4(e, t) {
    if (Array.isArray(t)) {
      let r = t.length;
      if (r > 1) {
        for (let n = 1; n < r; n++) {
          let r = t[n];
          et(q(e), `Remote module "${t.slice(0, n).join(".")}" is ${e}, cannot get "${r}" attribute from it.`);
          e = e[r];
        }
      }
    }
    return e;
  }
  async function e7(e, t) {
    let r = await e6.lifecycle.asyncBeforeLoadModule.emit({
      options: t,
      url: e
    });
    if (r === false) {
      return null;
    }
    e = r.url;
    t = r.options;
    et(e, "Missing url for loading remote module.");
    et(typeof e == "string", "The type of URL needs to be a string.");
    let [n, i] = function (e) {
      if (e && e.startsWith("@")) {
        let t = e.slice(1).split(".");
        let r = t[0];
        let n = tn.alias[r];
        et(n, `Alias "${r}" is not defined.`);
        return [n, t];
      }
      return [e, undefined];
    }(e);
    et(eo(n) || n.startsWith("//"), `The loading of the remote module must be an absolute path. "${n}"`);
    let o = to(n, t);
    let {
      cache: a,
      version: s,
      externals: l,
      error: u,
      adapter: c
    } = o;
    let f = `${s || "latest"}@${n}`;
    let d = async () => {
      let e = null;
      let t = tt[f];
      if (a && t) {
        if (W(t)) {
          t = await t;
        }
        e = e4(t, i);
      } else {
        try {
          let t = await ti.loadModule(n);
          if (t.resourceManager) {
            let r = new e9(t.resourceManager, l);
            tt[f] = r.env.exports;
            let o = r.execScript().exports;
            if (typeof c == "function") {
              o = c(o);
            }
            let a = await e6.lifecycle.asyncAfterLoadModule.emit({
              url: n,
              exports: o,
              code: t.resourceManager.moduleCode
            });
            if (a === false) {
              return null;
            }
            o = a.exports;
            tt[f] = o;
            if (W(o)) {
              o = await o;
            }
            e = e4(o, i);
          }
        } catch (r) {
          delete tt[f];
          let t = i ? i[0] : "";
          if (typeof u == "function") {
            e = u(r, o, t);
          } else {
            throw ta(r, t, n);
          }
        }
      }
      return e;
    };
    if (tr[f]) {
      return tr[f].then(() => Promise.resolve(tt[f]).then(e => e4(e, i)));
    } else {
      tr[f] = d().then(e => {
        tr[f] = null;
        return e;
      });
      return tr[f];
    }
  }
  var te = [];
  var tt = Object.create(null);
  var tr = Object.create(null);
  var tn = {
    alias: {},
    cache: true,
    error: null,
    adapter: null,
    externals: {
      loadModule: e7
    }
  };
  (function (e, t) {
    try {
      e();
    } catch (e) {
      if (processBrowserShim !== undefined) {
        processBrowserShim.env;
      }
    }
  })(() => {
    if (q(m = __GARFISH_GLOBAL_ENV__)) {
      let {
        externals: e,
        currentApp: t,
        remoteModulesCode: r
      } = m;
      if (t) {
        _ = t;
      }
      if (q(e)) {
        Object.assign(tn.externals, e);
      }
      if (Array.isArray(r)) {
        te = te.concat(r);
        r.forEach(e => {
          if (e.alias) {
            tn.alias[e.alias] = e.url;
          }
        });
      }
    }
  });
  var ti = (() => {
    if (q(m)) {
      let e = m.loader;
      if (q(e) && e.personalId === ef) {
        return e;
      }
    }
    return new eH();
  })();
  var to = (e, t) => {
    let r;
    let n = tn.externals;
    delete tn.externals;
    if (H(t)) {
      let i = t.externals;
      delete t.externals;
      r = ei(tn, e2(e3({}, t), {
        url: e
      }));
      t.externals = i;
      r.externals = e3(e3({}, n), i);
    } else {
      (r = ei(tn, {
        url: e
      })).externals = n;
    }
    tn.externals = n;
    return r;
  };
  var ta = (e, t, r) => {
    let n = [_ && _.name, t, r];
    let i = n.reduce((e, t, r) => t ? r === n.length - 1 ? `${e}"${t}"` : `${e}"${t}" -> ` : e, "remoteModule: ");
    i = ` (${i})`;
    if (typeof e == "number") {
      e = String(e);
    }
    if (typeof e != "string" || e.endsWith(i)) {
      if (e instanceof Error && !e.message.endsWith(i)) {
        e.message = `${e.message}${i}`;
      }
      return e;
    } else {
      return `${e}${i}`;
    }
  };
  var queryStringUtils_6 = require("query-string-utils_6") /*id: 313705*/;
  var tl = queryStringUtils_6;
  require("deep-equal-util_1_1") /*id: 961361*/;
  var tu = ["react", "react-dom"];
  function tc(e = "") {
    if (e.startsWith("//")) {
      return e;
    } else {
      return "//" + e.split("//")[1];
    }
  }
  function tf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function td(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        tf(Object(r), true).forEach(function (t) {
          objectPropertySetter.setObjectProperty(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        tf(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function th(e) {
    var t = e.name;
    var r = e.version;
    var n = e.query;
    var i = e.componentName;
    var o = e.url;
    var a = e.props;
    var s = e.loading;
    e.isQueryVersion;
    var l = e.onLoaded;
    var u = e.onError;
    var c = e._key;
    e.isTTP;
    var f = reactCoreLibraryReexport.useState(null);
    var d = iterableToArrayUtil_1_1.iterableToArray(f, 2);
    var h = d[0];
    var p = d[1];
    var v = reactCoreLibraryReexport.useState("");
    var y = iterableToArrayUtil_1_1.iterableToArray(v, 2);
    var _ = y[0];
    var m = y[1];
    var g = reactCoreLibraryReexport.useMemo(function () {
      if (s) {
        if (typeof s == "function") {
          return s;
        } else if (typeofHelper.getType(s) === "object") {
          if (s.render) {
            return s;
          } else {
            return function () {
              return s;
            };
          }
        } else {
          return undefined;
        }
      } else {
        return function () {
          return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
        };
      }
    }, [s]);
    reactCoreLibraryReexport.useEffect(function () {
      if (o) {
        m(o);
        return;
      }
      var e;
      var r;
      var n;
      var i;
      var a = !!(tl.parse(location.search.substring(1)) || {}).__force__;
      if (typeof window != "undefined" && !a && (e = window) !== null && e !== undefined && (r = e.gfdatav1) !== null && r !== undefined && (n = r.microComponents) !== null && n !== undefined && (i = n[t]) !== null && i !== undefined && i.cdnUrl) {
        m(window.gfdatav1.microComponents[t].cdnUrl);
        return;
      }
    }, [o, t, r, JSON.stringify(n === undefined ? {
      externals: tu,
      min: true,
      unpkg: false
    } : n)]);
    reactCoreLibraryReexport.useEffect(function () {
      if (!h && _) {
        e7(tc(_), {
          version: r
        }).then(function (e) {
          var r = null;
          r = i ? e[i]?.default || e[i] : (e == null ? undefined : e.default) || e;
          function n(e) {
            reactCoreLibraryReexport.useEffect(function () {
              if (l) {
                l();
              }
            }, []);
            return reactJsxRuntimeCoreReexport.jsx(r, td({}, e));
          }
          p(function () {
            return n;
          });
        }).catch(function (e) {
          if (u) {
            u(e);
          }
        });
      }
    });
    if (h) {
      return reactJsxRuntimeCoreReexport.jsx(h, td({}, a), c);
    } else {
      return reactJsxRuntimeCoreReexport.jsx(g, {});
    }
  }
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  var tv = require.t(reactDomEntryWrapper, 2);
  let ty = (e, t) => {
    let r = t;
    if (typeof t != "function") {
      r = null;
    }
    Object.assign(e, {
      __editor_callback__: r
    });
    return e;
  };
  let t_ = e => typeof e.__editor_callback__ == "function";
  let tm = e => {
    if (e.length) {
      let t = e[0].charCodeAt(0);
      return t >= 65 && t <= 90;
    }
    return false;
  };
  (l = g ||= {}).String = "String";
  l.Number = "Number";
  l.Array = "Array";
  l.Object = "Object";
  l.Function = "Function";
  l.AsyncFunction = "AsyncFunction";
  l.Undefined = "Undefined";
  l.Boolean = "Boolean";
  let tg = Object.prototype.toString;
  let tb = e => t => tg.call(t) === `[object ${e}]`;
  let tO = tb(g.String);
  let tw = tb(g.Boolean);
  let tC = tb(g.Number);
  let tA = tb(g.Array);
  let tS = tb(g.Object);
  let tj = e => typeof e == "function";
  let tE = e => Array.isArray(e) && e[0] && e[0].key && e[0].content;
  let tx = e => Array.isArray(e);
  let tk = e => tb(g.AsyncFunction)(e) || tb(g.Function)(e);
  var memoizeFunctionUtil = require("memoize-function-util") /*id: 825529*/;
  function tN(e) {
    var t = arguments.length;
    var r = Array(t > 1 ? t - 1 : 0);
    var n = 1;
    for (; n < t; n++) {
      r[n - 1] = arguments[n];
    }
    throw Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
  }
  var tL = {};
  function tT() {
    if (typeof globalThis != "undefined") {
      return globalThis;
    } else if (typeof window != "undefined") {
      return window;
    } else if (require.g !== undefined) {
      return require.g;
    } else if (typeof self != "undefined") {
      return self;
    } else {
      return tL;
    }
  }
  var tD = Object.assign;
  var tM = Object.getOwnPropertyDescriptor;
  var tR = Object.defineProperty;
  var tI = Object.prototype;
  var tF = [];
  Object.freeze(tF);
  var tB = {};
  Object.freeze(tB);
  var tV = typeof Proxy != "undefined";
  var t$ = Object.toString();
  function tU() {
    if (!tV) {
      tN("Proxy not available");
    }
  }
  function tK(e) {
    var t = false;
    return function () {
      if (!t) {
        t = true;
        return e.apply(this, arguments);
      }
    };
  }
  function tG() {}
  function tz(e) {
    return typeof e == "function";
  }
  function tq(e) {
    switch (typeof e) {
      case "string":
      case "symbol":
      case "number":
        return true;
    }
    return false;
  }
  function tH(e) {
    return e !== null && typeof e == "object";
  }
  function tW(e) {
    if (!tH(e)) {
      return false;
    }
    var t = Object.getPrototypeOf(e);
    if (t == null) {
      return true;
    }
    var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r.toString() === t$;
  }
  function tX(e) {
    var t = e == null ? undefined : e.constructor;
    return !!t && (t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction");
  }
  function tJ(e, t, r) {
    tR(e, t, {
      enumerable: false,
      writable: true,
      configurable: true,
      value: r
    });
  }
  function tZ(e, t, r) {
    tR(e, t, {
      enumerable: false,
      writable: false,
      configurable: true,
      value: r
    });
  }
  function tQ(e, t) {
    var r = "isMobX" + e;
    t.prototype[r] = true;
    return function (e) {
      return tH(e) && e[r] === true;
    };
  }
  function tY(e) {
    return e instanceof Map;
  }
  function t0(e) {
    return e instanceof Set;
  }
  var t1 = Object.getOwnPropertySymbols !== undefined;
  var t3 = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : t1 ? function (e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : Object.getOwnPropertyNames;
  function t2(e) {
    if (e === null) {
      return null;
    } else if (typeof e == "object") {
      return "" + e;
    } else {
      return e;
    }
  }
  function t6(e, t) {
    return tI.hasOwnProperty.call(e, t);
  }
  var t9 = Object.getOwnPropertyDescriptors || function (e) {
    var t = {};
    t3(e).forEach(function (r) {
      t[r] = tM(e, r);
    });
    return t;
  };
  function t8(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || false;
      n.configurable = true;
      if ("value" in n) {
        n.writable = true;
      }
      Object.defineProperty(e, function (e) {
        var t = function (e, t) {
          if (typeof e != "object" || e === null) {
            return e;
          }
          var r = e[Symbol.toPrimitive];
          if (r !== undefined) {
            var n = r.call(e, t || "default");
            if (typeof n != "object") {
              return n;
            }
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }(e, "string");
        if (typeof t == "symbol") {
          return t;
        } else {
          return String(t);
        }
      }(n.key), n);
    }
  }
  function t5(e, t, r) {
    if (t) {
      t8(e.prototype, t);
    }
    if (r) {
      t8(e, r);
    }
    Object.defineProperty(e, "prototype", {
      writable: false
    });
    return e;
  }
  function t4() {
    return (t4 = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) {
          if (Object.prototype.hasOwnProperty.call(r, n)) {
            e[n] = r[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  function t7(e, t) {
    e.prototype = Object.create(t.prototype);
    e.prototype.constructor = e;
    re(e, t);
  }
  function re(e, t) {
    return (re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
      e.__proto__ = t;
      return e;
    })(e, t);
  }
  function rt(e) {
    if (e === undefined) {
      throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
  }
  function rr(e, t) {
    if (t == null || t > e.length) {
      t = e.length;
    }
    var r = 0;
    var n = Array(t);
    for (; r < t; r++) {
      n[r] = e[r];
    }
    return n;
  }
  function rn(e, t) {
    var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (r) {
      return (r = r.call(e)).next.bind(r);
    }
    if (Array.isArray(e) || (r = function (e, t) {
      if (e) {
        if (typeof e == "string") {
          return rr(e, undefined);
        }
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor) {
          r = e.constructor.name;
        }
        if (r === "Map" || r === "Set") {
          return Array.from(e);
        }
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) {
          return rr(e, undefined);
        }
      }
    }(e)) || t && e && typeof e.length == "number") {
      if (r) {
        e = r;
      }
      var n = 0;
      return function () {
        if (n >= e.length) {
          return {
            done: true
          };
        } else {
          return {
            done: false,
            value: e[n++]
          };
        }
      };
    }
    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var ri = Symbol("mobx-stored-annotations");
  function ro(e) {
    return Object.assign(function (t, r) {
      if (rs(r)) {
        return e.decorate_20223_(t, r);
      }
      ra(t, r, e);
    }, e);
  }
  function ra(e, t, r) {
    if (!t6(e, ri)) {
      tJ(e, ri, t4({}, e[ri]));
    }
    if (r.annotationType_ !== "override") {
      e[ri][t] = r;
    }
  }
  function rs(e) {
    return typeof e == "object" && typeof e.kind == "string";
  }
  var rl = Symbol("mobx administration");
  var ru = function () {
    function e(e = "Atom") {
      this.name_ = undefined;
      this.isPendingUnobservation_ = false;
      this.isBeingObserved_ = false;
      this.observers_ = new Set();
      this.diffValue_ = 0;
      this.lastAccessedBy_ = 0;
      this.lowestObserverState_ = A.NOT_TRACKING_;
      this.onBOL = undefined;
      this.onBUOL = undefined;
      this.name_ = e;
    }
    var t = e.prototype;
    t.onBO = function () {
      if (this.onBOL) {
        this.onBOL.forEach(function (e) {
          return e();
        });
      }
    };
    t.onBUO = function () {
      if (this.onBUOL) {
        this.onBUOL.forEach(function (e) {
          return e();
        });
      }
    };
    t.reportObserved = function () {
      return ny(this);
    };
    t.reportChanged = function () {
      np();
      n_(this);
      nv();
    };
    t.toString = function () {
      return this.name_;
    };
    return e;
  }();
  var rc = tQ("Atom", ru);
  function rf(e, t = tG, r = tG) {
    var n;
    var i = new ru(e);
    if (t !== tG) {
      nT("onBO", i, t, undefined);
    }
    if (r !== tG) {
      nL(i, r);
    }
    return i;
  }
  var rd = {
    structural: function (e, t) {
      return ij(e, t);
    },
    default: function (e, t) {
      if (Object.is) {
        return Object.is(e, t);
      } else if (e === t) {
        return e !== 0 || 1 / e == 1 / t;
      } else {
        return e != e && t != t;
      }
    }
  };
  function rh(e, t, r) {
    if (n$(e)) {
      return e;
    } else if (Array.isArray(e)) {
      return rq.array(e, {
        name: r
      });
    } else if (tW(e)) {
      return rq.object(e, undefined, {
        name: r
      });
    } else if (tY(e)) {
      return rq.map(e, {
        name: r
      });
    } else if (t0(e)) {
      return rq.set(e, {
        name: r
      });
    } else if (typeof e != "function" || nP(e) || nV(e)) {
      return e;
    } else if (tX(e)) {
      return nF(e);
    } else {
      return nk(r, e);
    }
  }
  function rp(e) {
    return e;
  }
  function rv(e, t) {
    return {
      annotationType_: e,
      options_: t,
      make_: ry,
      extend_: r_,
      decorate_20223_: rm
    };
  }
  function ry(e, t, r, n) {
    if ((i = this.options_) != null && i.bound) {
      return +(this.extend_(e, t, r, false) !== null);
    }
    if (n === e.target_) {
      return (this.extend_(e, t, r, false) !== null) * 2;
    }
    if (nP(r.value)) {
      return 1;
    }
    var i;
    var o = rg(e, this, t, r, false);
    tR(n, t, o);
    return 2;
  }
  function r_(e, t, r, n) {
    var i = rg(e, this, t, r);
    return e.defineProperty_(t, i, n);
  }
  function rm(e, t) {
    var r;
    var i;
    var o;
    var a;
    var s;
    var l = t.kind;
    var u = t.name;
    var c = t.addInitializer;
    var f = this;
    if (l == "field") {
      c(function () {
        ra(this, u, f);
      });
      return;
    }
    if (l == "method") {
      if (!nP(e)) {
        r = e;
        e = r1(((i = f.options_) == null ? undefined : i.name) ?? u.toString(), r, (o = (a = f.options_) == null ? undefined : a.autoAction) != null && o);
      }
      if ((s = this.options_) != null && s.bound) {
        c(function () {
          var e = this[u].bind(this);
          e.isMobxAction = true;
          this[u] = e;
        });
      }
      return e;
    }
    tN("Cannot apply '" + f.annotationType_ + "' to '" + String(u) + "' (kind: " + l + "):\n'" + f.annotationType_ + "' can only be used on properties with a function value.");
  }
  function rg(e, t, r, n, i = nf.safeDescriptors) {
    t.annotationType_;
    n.value;
    var o;
    var s;
    var l;
    var u;
    var c;
    var h = n.value;
    if ((o = t.options_) != null && o.bound) {
      h = h.bind(e.proxy_ ?? e.target_);
    }
    return {
      value: r1(((s = t.options_) == null ? undefined : s.name) ?? r.toString(), h, (l = (u = t.options_) == null ? undefined : u.autoAction) != null && l, (c = t.options_) != null && c.bound ? e.proxy_ ?? e.target_ : undefined),
      configurable: !i || e.isPlainObject_,
      enumerable: false,
      writable: !i
    };
  }
  function rb(e, t) {
    return {
      annotationType_: e,
      options_: t,
      make_: rO,
      extend_: rw,
      decorate_20223_: rC
    };
  }
  function rO(e, t, r, n) {
    if (n === e.target_) {
      return (this.extend_(e, t, r, false) !== null) * 2;
    }
    if ((i = this.options_) != null && i.bound && (!t6(e.target_, t) || !nV(e.target_[t])) && this.extend_(e, t, r, false) === null) {
      return 0;
    }
    if (nV(r.value)) {
      return 1;
    }
    var i;
    var o = rA(e, this, t, r, false, false);
    tR(n, t, o);
    return 2;
  }
  function rw(e, t, r, n) {
    var i;
    var o = rA(e, this, t, r, (i = this.options_) == null ? undefined : i.bound);
    return e.defineProperty_(t, o, n);
  }
  function rC(e, t) {
    var r;
    var n = t.name;
    var i = t.addInitializer;
    if (!nV(e)) {
      e = nF(e);
    }
    if ((r = this.options_) != null && r.bound) {
      i(function () {
        var e = this[n].bind(this);
        e.isMobXFlow = true;
        this[n] = e;
      });
    }
    return e;
  }
  function rA(e, t, r, n, i, o = nf.safeDescriptors) {
    t.annotationType_;
    n.value;
    var s = n.value;
    if (!nV(s)) {
      s = nF(s);
    }
    if (i) {
      (s = s.bind(e.proxy_ ?? e.target_)).isMobXFlow = true;
    }
    return {
      value: s,
      configurable: !o || e.isPlainObject_,
      enumerable: false,
      writable: !o
    };
  }
  function rS(e, t) {
    return {
      annotationType_: e,
      options_: t,
      make_: rj,
      extend_: rE,
      decorate_20223_: rx
    };
  }
  function rj(e, t, r) {
    return +(this.extend_(e, t, r, false) !== null);
  }
  function rE(e, t, r, n) {
    var i;
    var o;
    var a;
    var s;
    i = 0;
    o = this;
    a = 0;
    s = r;
    o.annotationType_;
    s.get;
    return e.defineComputedProperty_(t, t4({}, this.options_, {
      get: r.get,
      set: r.set
    }), n);
  }
  function rx(e, t) {
    var r = this;
    var n = t.name;
    t.addInitializer(function () {
      var t = il(this)[rl];
      var i = t4({}, r.options_, {
        get: e,
        context: this
      });
      i.name ||= "ObservableObject." + n.toString();
      t.values_.set(n, new r9(i));
    });
    return function () {
      return this[rl].getObservablePropValue_(n);
    };
  }
  function rk(e, t) {
    return {
      annotationType_: e,
      options_: t,
      make_: rP,
      extend_: rN,
      decorate_20223_: rL
    };
  }
  function rP(e, t, r) {
    return +(this.extend_(e, t, r, false) !== null);
  }
  function rN(e, t, r, n) {
    var o;
    var a;
    var s;
    var l;
    var u;
    a = 0;
    s = this;
    l = 0;
    u = 0;
    s.annotationType_;
    return e.defineObservableProperty_(t, r.value, ((o = this.options_) == null ? undefined : o.enhancer) ?? rh, n);
  }
  function rL(e, t) {
    var r = this;
    var n = t.kind;
    var i = t.name;
    var o = new WeakSet();
    function a(e, t) {
      var a;
      var s = il(e)[rl];
      var l = new r6(t, ((a = r.options_) == null ? undefined : a.enhancer) ?? rh, "ObservableObject." + i.toString(), false);
      s.values_.set(i, l);
      o.add(e);
    }
    if (n == "accessor") {
      return {
        get: function () {
          if (!o.has(this)) {
            a(this, e.get.call(this));
          }
          return this[rl].getObservablePropValue_(i);
        },
        set: function (e) {
          if (!o.has(this)) {
            a(this, e);
          }
          return this[rl].setObservablePropValue_(i, e);
        },
        init: function (e) {
          if (!o.has(this)) {
            a(this, e);
          }
          return e;
        }
      };
    }
  }
  var rT = rD();
  function rD(e) {
    return {
      annotationType_: "true",
      options_: e,
      make_: rM,
      extend_: rR,
      decorate_20223_: rI
    };
  }
  function rM(e, t, r, n) {
    if (r.get) {
      return rJ.make_(e, t, r, n);
    }
    if (r.set) {
      var i;
      var o;
      var a;
      var s;
      var u = r1(t.toString(), r.set);
      if (n === e.target_) {
        return (e.defineProperty_(t, {
          configurable: !nf.safeDescriptors || e.isPlainObject_,
          set: u
        }) !== null) * 2;
      } else {
        tR(n, t, {
          configurable: true,
          set: u
        });
        return 2;
      }
    }
    if (n !== e.target_ && typeof r.value == "function") {
      if (tX(r.value)) {
        return ((s = this.options_) != null && s.autoBind ? nF.bound : nF).make_(e, t, r, n);
      } else {
        return ((a = this.options_) != null && a.autoBind ? nk.bound : nk).make_(e, t, r, n);
      }
    }
    var c = ((i = this.options_) == null ? undefined : i.deep) === false ? rq.ref : rq;
    if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
      r.value = r.value.bind(e.proxy_ ?? e.target_);
    }
    return c.make_(e, t, r, n);
  }
  function rR(e, t, r, n) {
    var i;
    var o;
    if (r.get) {
      return rJ.extend_(e, t, r, n);
    } else if (r.set) {
      return e.defineProperty_(t, {
        configurable: !nf.safeDescriptors || e.isPlainObject_,
        set: r1(t.toString(), r.set)
      }, n);
    } else {
      if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
        r.value = r.value.bind(e.proxy_ ?? e.target_);
      }
      return (((o = this.options_) == null ? undefined : o.deep) === false ? rq.ref : rq).extend_(e, t, r, n);
    }
  }
  function rI(e, t) {
    tN("'" + this.annotationType_ + "' cannot be used as a decorator");
  }
  var rF = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
  };
  Object.freeze(rF);
  var rB = rk("observable");
  var rV = rk("observable.ref", {
    enhancer: rp
  });
  var r$ = rk("observable.shallow", {
    enhancer: function (e, t, r) {
      if (e == null || id(e) || n8(e) || ie(e) || ii(e)) {
        return e;
      } else if (Array.isArray(e)) {
        return rq.array(e, {
          name: r,
          deep: false
        });
      } else if (tW(e)) {
        return rq.object(e, undefined, {
          name: r,
          deep: false
        });
      } else if (tY(e)) {
        return rq.map(e, {
          name: r,
          deep: false
        });
      } else if (t0(e)) {
        return rq.set(e, {
          name: r,
          deep: false
        });
      } else {
        return undefined;
      }
    }
  });
  var rU = rk("observable.struct", {
    enhancer: function (e, t) {
      if (ij(e, t)) {
        return t;
      } else {
        return e;
      }
    }
  });
  var rK = ro(rB);
  function rG(e) {
    var t;
    var r;
    var n;
    if (e.deep === true) {
      return rh;
    } else if (e.deep === false) {
      return rp;
    } else if ((t = e.defaultDecorator) && (r = (n = t.options_) == null ? undefined : n.enhancer) != null) {
      return r;
    } else {
      return rh;
    }
  }
  function rz(e, t, r) {
    if (rs(t)) {
      return rB.decorate_20223_(e, t);
    }
    if (tq(t)) {
      ra(e, t, rB);
      return;
    }
    if (n$(e)) {
      return e;
    } else if (tW(e)) {
      return rq.object(e, t, r);
    } else if (Array.isArray(e)) {
      return rq.array(e, t);
    } else if (tY(e)) {
      return rq.map(e, t);
    } else if (t0(e)) {
      return rq.set(e, t);
    } else if (typeof e == "object" && e !== null) {
      return e;
    } else {
      return rq.box(e, t);
    }
  }
  tD(rz, rK);
  var rq = tD(rz, {
    box: function (e, t) {
      var r = t || rF;
      return new r6(e, rG(r), r.name, true, r.equals);
    },
    array: function (e, t) {
      var r = t || rF;
      return (nf.useProxies === false || r.proxy === false ? function (e, t, r) {
        return new ig(e, t, r);
      } : function (e, t, r = "ObservableArray", n = false) {
        tU();
        return iA(function () {
          var i = new nY(r, t, n, false);
          tZ(i.values_, rl, i);
          var o = new Proxy(i.values_, nQ);
          i.proxy_ = o;
          if (e && e.length) {
            i.spliceWithArray_(0, 0, e);
          }
          return o;
        });
      })(e, rG(r), r.name);
    },
    map: function (e, t) {
      var r = t || rF;
      return new n7(e, rG(r), r.name);
    },
    set: function (e, t) {
      var r = t || rF;
      return new ir(e, rG(r), r.name);
    },
    object: function (e, t, r) {
      return iA(function () {
        var n;
        var i;
        var o;
        var s;
        var l;
        var u;
        var c;
        var f;
        s = nf.useProxies === false || (r == null ? undefined : r.proxy) === false ? il({}, r) : (n = {}, i = r, tU(), (o = (n = il(n, i))[rl]).proxy_ ?? (o.proxy_ = new Proxy(n, nK)));
        l = e;
        u = t;
        f = t9(l);
        iA(function () {
          var e = il(s, undefined)[rl];
          t3(f).forEach(function (t) {
            e.extend_(t, f[t], !u || !(t in u) || u[t]);
          });
        });
        return s;
      });
    },
    ref: ro(rV),
    shallow: ro(r$),
    deep: rK,
    struct: ro(rU)
  });
  var rH = "computed";
  var rW = rS(rH);
  var rX = rS("computed.struct", {
    equals: rd.structural
  });
  function rJ(e, t) {
    if (rs(t)) {
      return rW.decorate_20223_(e, t);
    }
    if (tq(t)) {
      return ra(e, t, rW);
    }
    if (tW(e)) {
      return ro(rS(rH, e));
    }
    var r = tW(t) ? t : {};
    r.get = e;
    r.name ||= e.name || "";
    return new r9(r);
  }
  Object.assign(rJ, rW);
  rJ.struct = ro(rX);
  var rZ = 0;
  var rQ = 1;
  var rY = (b = (O = tM(function () {}, "name")) == null ? undefined : O.configurable) != null && b;
  var r0 = {
    value: "action",
    configurable: true,
    writable: false,
    enumerable: false
  };
  function r1(e, t, r, n) {
    function i() {
      return function (e, t, r, n, i) {
        var o;
        var a;
        var s;
        var l;
        var u;
        var c;
        var f;
        var d;
        var h;
        o = 0;
        a = t;
        s = 0;
        l = 0;
        u = nf.trackingDerivation;
        c = !a || !u;
        np();
        f = nf.allowStateChanges;
        if (c) {
          ni();
          f = r3(true);
        }
        rZ = (d = {
          runAsAction_: c,
          prevDerivation_: u,
          prevAllowStateChanges_: f,
          prevAllowStateReads_: na(true),
          notifySpy_: false,
          startTime_: 0,
          actionId_: rQ++,
          parentActionId_: rZ
        }).actionId_;
        var p = d;
        try {
          return r.apply(n, i);
        } catch (e) {
          p.error_ = e;
          throw e;
        } finally {
          if (rZ !== (h = p).actionId_) {
            tN(30);
          }
          rZ = h.parentActionId_;
          if (h.error_ !== undefined) {
            nf.suppressReactionErrors = true;
          }
          r2(h.prevAllowStateChanges_);
          ns(h.prevAllowStateReads_);
          nv();
          if (h.runAsAction_) {
            no(h.prevDerivation_);
          }
          nf.suppressReactionErrors = false;
        }
      }(e, r, t, n || this, arguments);
    }
    if (r === undefined) {
      r = false;
    }
    i.isMobxAction = true;
    i.toString = function () {
      return t.toString();
    };
    if (rY) {
      r0.value = e;
      tR(i, "name", r0);
    }
    return i;
  }
  function r3(e) {
    var t = nf.allowStateChanges;
    nf.allowStateChanges = e;
    return t;
  }
  function r2(e) {
    nf.allowStateChanges = e;
  }
  w = Symbol.toPrimitive;
  var r6 = function (e) {
    function t(t, r, n, i, o) {
      var a;
      if (n === undefined) {
        n = "ObservableValue";
      }
      if (i === undefined) {
        i = true;
      }
      if (o === undefined) {
        o = rd.default;
      }
      (a = e.call(this, n) || this).enhancer = undefined;
      a.name_ = undefined;
      a.equals = undefined;
      a.hasUnreportedChange_ = false;
      a.interceptors_ = undefined;
      a.changeListeners_ = undefined;
      a.value_ = undefined;
      a.dehancer = undefined;
      a.enhancer = r;
      a.name_ = n;
      a.equals = o;
      a.value_ = r(t, undefined, n);
      return a;
    }
    t7(t, e);
    var r = t.prototype;
    r.dehanceValue = function (e) {
      if (this.dehancer !== undefined) {
        return this.dehancer(e);
      } else {
        return e;
      }
    };
    r.set = function (e) {
      this.value_;
      if ((e = this.prepareNewValue_(e)) !== nf.UNCHANGED) {
        this.setNewValue_(e);
      }
    };
    r.prepareNewValue_ = function (e) {
      if (nG(this)) {
        var t = nq(this, {
          object: this,
          type: nZ,
          newValue: e
        });
        if (!t) {
          return nf.UNCHANGED;
        }
        e = t.newValue;
      }
      e = this.enhancer(e, this.value_, this.name_);
      if (this.equals(this.value_, e)) {
        return nf.UNCHANGED;
      } else {
        return e;
      }
    };
    r.setNewValue_ = function (e) {
      var t = this.value_;
      this.value_ = e;
      this.reportChanged();
      if (nH(this)) {
        nX(this, {
          type: nZ,
          object: this,
          newValue: e,
          oldValue: t
        });
      }
    };
    r.get = function () {
      this.reportObserved();
      return this.dehanceValue(this.value_);
    };
    r.intercept_ = function (e) {
      return nz(this, e);
    };
    r.observe_ = function (e, t) {
      if (t) {
        e({
          observableKind: "value",
          debugObjectName: this.name_,
          object: this,
          type: nZ,
          newValue: this.value_,
          oldValue: undefined
        });
      }
      return nW(this, e);
    };
    r.raw = function () {
      return this.value_;
    };
    r.toJSON = function () {
      return this.get();
    };
    r.toString = function () {
      return this.name_ + "[" + this.value_ + "]";
    };
    r.valueOf = function () {
      return t2(this.get());
    };
    r[w] = function () {
      return this.valueOf();
    };
    return t;
  }(ru);
  C = Symbol.toPrimitive;
  var r9 = function () {
    function e(e) {
      this.dependenciesState_ = A.NOT_TRACKING_;
      this.observing_ = [];
      this.newObserving_ = null;
      this.isBeingObserved_ = false;
      this.isPendingUnobservation_ = false;
      this.observers_ = new Set();
      this.diffValue_ = 0;
      this.runId_ = 0;
      this.lastAccessedBy_ = 0;
      this.lowestObserverState_ = A.UP_TO_DATE_;
      this.unboundDepsCount_ = 0;
      this.value_ = new r5(null);
      this.name_ = undefined;
      this.triggeredBy_ = undefined;
      this.isComputing_ = false;
      this.isRunningSetter_ = false;
      this.derivation = undefined;
      this.setter_ = undefined;
      this.isTracing_ = S.NONE;
      this.scope_ = undefined;
      this.equals_ = undefined;
      this.requiresReaction_ = undefined;
      this.keepAlive_ = undefined;
      this.onBOL = undefined;
      this.onBUOL = undefined;
      if (!e.get) {
        tN(31);
      }
      this.derivation = e.get;
      this.name_ = e.name || "ComputedValue";
      if (e.set) {
        this.setter_ = r1("ComputedValue-setter", e.set);
      }
      this.equals_ = e.equals || (e.compareStructural || e.struct ? rd.structural : rd.default);
      this.scope_ = e.context;
      this.requiresReaction_ = e.requiresReaction;
      this.keepAlive_ = !!e.keepAlive;
    }
    var t = e.prototype;
    t.onBecomeStale_ = function () {
      var e;
      e = this;
      if (e.lowestObserverState_ === A.UP_TO_DATE_) {
        e.lowestObserverState_ = A.POSSIBLY_STALE_;
        e.observers_.forEach(function (e) {
          if (e.dependenciesState_ === A.UP_TO_DATE_) {
            e.dependenciesState_ = A.POSSIBLY_STALE_;
            e.onBecomeStale_();
          }
        });
      }
    };
    t.onBO = function () {
      if (this.onBOL) {
        this.onBOL.forEach(function (e) {
          return e();
        });
      }
    };
    t.onBUO = function () {
      if (this.onBUOL) {
        this.onBUOL.forEach(function (e) {
          return e();
        });
      }
    };
    t.get = function () {
      if (this.isComputing_) {
        tN(32, this.name_, this.derivation);
      }
      if (nf.inBatch !== 0 || this.observers_.size !== 0 || this.keepAlive_) {
        ny(this);
        if (r7(this)) {
          var e;
          var t = nf.trackingContext;
          if (this.keepAlive_ && !t) {
            nf.trackingContext = this;
          }
          if (this.trackAndCompute()) {
            e = this;
            if (e.lowestObserverState_ !== A.STALE_) {
              e.lowestObserverState_ = A.STALE_;
              e.observers_.forEach(function (t) {
                if (t.dependenciesState_ === A.POSSIBLY_STALE_) {
                  t.dependenciesState_ = A.STALE_;
                } else if (t.dependenciesState_ === A.UP_TO_DATE_) {
                  e.lowestObserverState_ = A.UP_TO_DATE_;
                }
              });
            }
          }
          nf.trackingContext = t;
        }
      } else if (r7(this)) {
        this.warnAboutUntrackedRead_();
        np();
        this.value_ = this.computeValue_(false);
        nv();
      }
      var r = this.value_;
      if (r4(r)) {
        throw r.cause;
      }
      return r;
    };
    t.set = function (e) {
      if (this.setter_) {
        if (this.isRunningSetter_) {
          tN(33, this.name_);
        }
        this.isRunningSetter_ = true;
        try {
          this.setter_.call(this.scope_, e);
        } finally {
          this.isRunningSetter_ = false;
        }
      } else {
        tN(34, this.name_);
      }
    };
    t.trackAndCompute = function () {
      var e = this.value_;
      var t = this.dependenciesState_ === A.NOT_TRACKING_;
      var r = this.computeValue_(true);
      var n = t || r4(e) || r4(r) || !this.equals_(e, r);
      if (n) {
        this.value_ = r;
      }
      return n;
    };
    t.computeValue_ = function (e) {
      this.isComputing_ = true;
      var t;
      var r = r3(false);
      if (e) {
        t = nt(this, this.derivation, this.scope_);
      } else if (nf.disableErrorBoundaries === true) {
        t = this.derivation.call(this.scope_);
      } else {
        try {
          t = this.derivation.call(this.scope_);
        } catch (e) {
          t = new r5(e);
        }
      }
      r2(r);
      this.isComputing_ = false;
      return t;
    };
    t.suspend_ = function () {
      if (!this.keepAlive_) {
        nr(this);
        this.value_ = undefined;
      }
    };
    t.observe_ = function (e, t) {
      var r = this;
      var n = true;
      var i = undefined;
      return function (e, t = tB) {
        var n;
        var i;
        var o;
        var a;
        var s;
        var l = ((n = t) == null ? undefined : n.name) ?? "Autorun";
        if (t.scheduler || t.delay) {
          var u;
          var c = (u = t).scheduler ? u.scheduler : u.delay ? function (e) {
            return setTimeout(e, u.delay);
          } : nN;
          var f = false;
          s = new nm(l, function () {
            if (!f) {
              f = true;
              c(function () {
                f = false;
                if (!s.isDisposed_) {
                  s.track(d);
                }
              });
            }
          }, t.onError, t.requiresObservable);
        } else {
          s = new nm(l, function () {
            this.track(d);
          }, t.onError, t.requiresObservable);
        }
        function d() {
          e(s);
        }
        if ((i = t) == null || (o = i.signal) == null || !o.aborted) {
          s.schedule_();
        }
        return s.getDisposer_((a = t) == null ? undefined : a.signal);
      }(function () {
        var o = r.get();
        if (!n || t) {
          var a = ni();
          e({
            observableKind: "computed",
            debugObjectName: r.name_,
            type: nZ,
            object: r,
            newValue: o,
            oldValue: i
          });
          no(a);
        }
        n = false;
        i = o;
      });
    };
    t.warnAboutUntrackedRead_ = function () {};
    t.toString = function () {
      return this.name_ + "[" + this.derivation.toString() + "]";
    };
    t.valueOf = function () {
      return t2(this.get());
    };
    t[C] = function () {
      return this.valueOf();
    };
    return e;
  }();
  var r8 = tQ("ComputedValue", r9);
  (u = A ||= {})[u.NOT_TRACKING_ = -1] = "NOT_TRACKING_";
  u[u.UP_TO_DATE_ = 0] = "UP_TO_DATE_";
  u[u.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_";
  u[u.STALE_ = 2] = "STALE_";
  (c = S ||= {})[c.NONE = 0] = "NONE";
  c[c.LOG = 1] = "LOG";
  c[c.BREAK = 2] = "BREAK";
  function r5(e) {
    this.cause = undefined;
    this.cause = e;
  }
  function r4(e) {
    return e instanceof r5;
  }
  function r7(e) {
    switch (e.dependenciesState_) {
      case A.UP_TO_DATE_:
        return false;
      case A.NOT_TRACKING_:
      case A.STALE_:
        return true;
      case A.POSSIBLY_STALE_:
        var t = na(true);
        var r = ni();
        var n = e.observing_;
        var i = n.length;
        var o = 0;
        for (; o < i; o++) {
          var a = n[o];
          if (r8(a)) {
            if (nf.disableErrorBoundaries) {
              a.get();
            } else {
              try {
                a.get();
              } catch (e) {
                no(r);
                ns(t);
                return true;
              }
            }
            if (e.dependenciesState_ === A.STALE_) {
              no(r);
              ns(t);
              return true;
            }
          }
        }
        nl(e);
        no(r);
        ns(t);
        return false;
    }
  }
  function ne(e) {}
  function nt(e, t, r) {
    var n;
    var i = na(true);
    nl(e);
    e.newObserving_ = Array(e.runId_ === 0 ? 100 : e.observing_.length);
    e.unboundDepsCount_ = 0;
    e.runId_ = ++nf.runId;
    var o = nf.trackingDerivation;
    nf.trackingDerivation = e;
    nf.inBatch++;
    if (nf.disableErrorBoundaries === true) {
      n = t.call(r);
    } else {
      try {
        n = t.call(r);
      } catch (e) {
        n = new r5(e);
      }
    }
    nf.inBatch--;
    nf.trackingDerivation = o;
    (function (e) {
      var t = e.observing_;
      var r = e.observing_ = e.newObserving_;
      var n = A.UP_TO_DATE_;
      var i = 0;
      var o = e.unboundDepsCount_;
      var a = 0;
      for (; a < o; a++) {
        var s = r[a];
        if (s.diffValue_ === 0) {
          s.diffValue_ = 1;
          if (i !== a) {
            r[i] = s;
          }
          i++;
        }
        if (s.dependenciesState_ > n) {
          n = s.dependenciesState_;
        }
      }
      r.length = i;
      e.newObserving_ = null;
      o = t.length;
      while (o--) {
        var l = t[o];
        if (l.diffValue_ === 0) {
          nd(l, e);
        }
        l.diffValue_ = 0;
      }
      while (i--) {
        var u;
        var c;
        var f = r[i];
        if (f.diffValue_ === 1) {
          f.diffValue_ = 0;
          u = f;
          c = e;
          u.observers_.add(c);
          if (u.lowestObserverState_ > c.dependenciesState_) {
            u.lowestObserverState_ = c.dependenciesState_;
          }
        }
      }
      if (n !== A.UP_TO_DATE_) {
        e.dependenciesState_ = n;
        e.onBecomeStale_();
      }
    })(e);
    ns(i);
    return n;
  }
  function nr(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var r = t.length; r--;) {
      nd(t[r], e);
    }
    e.dependenciesState_ = A.NOT_TRACKING_;
  }
  function nn(e) {
    var t = ni();
    try {
      return e();
    } finally {
      no(t);
    }
  }
  function ni() {
    var e = nf.trackingDerivation;
    nf.trackingDerivation = null;
    return e;
  }
  function no(e) {
    nf.trackingDerivation = e;
  }
  function na(e) {
    var t = nf.allowStateReads;
    nf.allowStateReads = e;
    return t;
  }
  function ns(e) {
    nf.allowStateReads = e;
  }
  function nl(e) {
    if (e.dependenciesState_ !== A.UP_TO_DATE_) {
      e.dependenciesState_ = A.UP_TO_DATE_;
      var t = e.observing_;
      var r = t.length;
      while (r--) {
        t[r].lowestObserverState_ = A.UP_TO_DATE_;
      }
    }
  }
  function nu() {
    this.version = 6;
    this.UNCHANGED = {};
    this.trackingDerivation = null;
    this.trackingContext = null;
    this.runId = 0;
    this.mobxGuid = 0;
    this.inBatch = 0;
    this.pendingUnobservations = [];
    this.pendingReactions = [];
    this.isRunningReactions = false;
    this.allowStateChanges = false;
    this.allowStateReads = true;
    this.enforceActions = true;
    this.spyListeners = [];
    this.globalReactionErrorHandlers = [];
    this.computedRequiresReaction = false;
    this.reactionRequiresObservable = false;
    this.observableRequiresReaction = false;
    this.disableErrorBoundaries = false;
    this.suppressReactionErrors = false;
    this.useProxies = true;
    this.verifyProxies = false;
    this.safeDescriptors = true;
  }
  var nc = true;
  var nf = ((f = tT()).__mobxInstanceCount > 0 && !f.__mobxGlobals && (nc = false), f.__mobxGlobals && f.__mobxGlobals.version !== new nu().version && (nc = false), nc) ? f.__mobxGlobals ? (f.__mobxInstanceCount += 1, f.__mobxGlobals.UNCHANGED ||= {}, f.__mobxGlobals) : (f.__mobxInstanceCount = 1, f.__mobxGlobals = new nu()) : (setTimeout(function () {
    tN(35);
  }, 1), new nu());
  function nd(e, t) {
    e.observers_.delete(t);
    if (e.observers_.size === 0) {
      nh(e);
    }
  }
  function nh(e) {
    if (e.isPendingUnobservation_ === false) {
      e.isPendingUnobservation_ = true;
      nf.pendingUnobservations.push(e);
    }
  }
  function np() {
    nf.inBatch++;
  }
  function nv() {
    if (--nf.inBatch == 0) {
      ng();
      var e = nf.pendingUnobservations;
      var t = 0;
      for (; t < e.length; t++) {
        var r = e[t];
        r.isPendingUnobservation_ = false;
        if (r.observers_.size === 0) {
          if (r.isBeingObserved_) {
            r.isBeingObserved_ = false;
            r.onBUO();
          }
          if (r instanceof r9) {
            r.suspend_();
          }
        }
      }
      nf.pendingUnobservations = [];
    }
  }
  function ny(e) {
    var t = nf.trackingDerivation;
    if (t !== null) {
      if (t.runId_ !== e.lastAccessedBy_) {
        e.lastAccessedBy_ = t.runId_;
        t.newObserving_[t.unboundDepsCount_++] = e;
        if (!e.isBeingObserved_ && nf.trackingContext) {
          e.isBeingObserved_ = true;
          e.onBO();
        }
      }
      return e.isBeingObserved_;
    } else {
      if (e.observers_.size === 0 && nf.inBatch > 0) {
        nh(e);
      }
      return false;
    }
  }
  function n_(e) {
    if (e.lowestObserverState_ !== A.STALE_) {
      e.lowestObserverState_ = A.STALE_;
      e.observers_.forEach(function (e) {
        if (e.dependenciesState_ === A.UP_TO_DATE_) {
          e.onBecomeStale_();
        }
        e.dependenciesState_ = A.STALE_;
      });
    }
  }
  var nm = function () {
    function e(e = "Reaction", t, r, n) {
      this.name_ = undefined;
      this.onInvalidate_ = undefined;
      this.errorHandler_ = undefined;
      this.requiresObservable_ = undefined;
      this.observing_ = [];
      this.newObserving_ = [];
      this.dependenciesState_ = A.NOT_TRACKING_;
      this.diffValue_ = 0;
      this.runId_ = 0;
      this.unboundDepsCount_ = 0;
      this.isDisposed_ = false;
      this.isScheduled_ = false;
      this.isTrackPending_ = false;
      this.isRunning_ = false;
      this.isTracing_ = S.NONE;
      this.name_ = e;
      this.onInvalidate_ = t;
      this.errorHandler_ = r;
      this.requiresObservable_ = n;
    }
    var t = e.prototype;
    t.onBecomeStale_ = function () {
      this.schedule_();
    };
    t.schedule_ = function () {
      if (!this.isScheduled_) {
        this.isScheduled_ = true;
        nf.pendingReactions.push(this);
        ng();
      }
    };
    t.isScheduled = function () {
      return this.isScheduled_;
    };
    t.runReaction_ = function () {
      if (!this.isDisposed_) {
        np();
        this.isScheduled_ = false;
        var e = nf.trackingContext;
        nf.trackingContext = this;
        if (r7(this)) {
          this.isTrackPending_ = true;
          try {
            this.onInvalidate_();
          } catch (e) {
            this.reportExceptionInDerivation_(e);
          }
        }
        nf.trackingContext = e;
        nv();
      }
    };
    t.track = function (e) {
      if (!this.isDisposed_) {
        np();
        this.isRunning_ = true;
        var t = nf.trackingContext;
        nf.trackingContext = this;
        var r = nt(this, e, undefined);
        nf.trackingContext = t;
        this.isRunning_ = false;
        this.isTrackPending_ = false;
        if (this.isDisposed_) {
          nr(this);
        }
        if (r4(r)) {
          this.reportExceptionInDerivation_(r.cause);
        }
        nv();
      }
    };
    t.reportExceptionInDerivation_ = function (e) {
      var t = this;
      if (this.errorHandler_) {
        this.errorHandler_(e, this);
        return;
      }
      if (nf.disableErrorBoundaries) {
        throw e;
      }
      nf.suppressReactionErrors;
      nf.globalReactionErrorHandlers.forEach(function (r) {
        return r(e, t);
      });
    };
    t.dispose = function () {
      if (!this.isDisposed_) {
        this.isDisposed_ = true;
        if (!this.isRunning_) {
          np();
          nr(this);
          nv();
        }
      }
    };
    t.getDisposer_ = function (e) {
      var t = this;
      var r = function r() {
        t.dispose();
        if (e != null && e.removeEventListener != null) {
          e.removeEventListener("abort", r);
        }
      };
      if (e != null && e.addEventListener != null) {
        e.addEventListener("abort", r);
      }
      r[rl] = this;
      return r;
    };
    t.toString = function () {
      return "Reaction[" + this.name_ + "]";
    };
    t.trace = function (e = false) {};
    return e;
  }();
  function ng() {
    if (!(nf.inBatch > 0) && !nf.isRunningReactions) {
      (function () {
        nf.isRunningReactions = true;
        var e = nf.pendingReactions;
        var t = 0;
        while (e.length > 0) {
          if (++t == 100) {
            e.splice(0);
          }
          var r = e.splice(0);
          var n = 0;
          var i = r.length;
          for (; n < i; n++) {
            r[n].runReaction_();
          }
        }
        nf.isRunningReactions = false;
      })();
    }
  }
  var nb = tQ("Reaction", nm);
  var nO = "action";
  var nw = "autoAction";
  var nC = rv(nO);
  var nA = rv("action.bound", {
    bound: true
  });
  var nS = rv(nw, {
    autoAction: true
  });
  var nj = rv("autoAction.bound", {
    autoAction: true,
    bound: true
  });
  function nE(e) {
    return function (t, r) {
      if (tz(t)) {
        return r1(t.name || "<unnamed action>", t, e);
      } else if (tz(r)) {
        return r1(t, r, e);
      } else if (rs(r)) {
        return (e ? nS : nC).decorate_20223_(t, r);
      } else if (tq(r)) {
        return ra(t, r, e ? nS : nC);
      } else if (tq(t)) {
        return ro(rv(e ? nw : nO, {
          name: t,
          autoAction: e
        }));
      } else {
        return undefined;
      }
    };
  }
  var nx = nE(false);
  Object.assign(nx, nC);
  var nk = nE(true);
  function nP(e) {
    return tz(e) && e.isMobxAction === true;
  }
  Object.assign(nk, nS);
  nx.bound = ro(nA);
  nk.bound = ro(nj);
  function nN(e) {
    return e();
  }
  function nL(e, t, r) {
    return nT("onBUO", e, t, r);
  }
  function nT(e, t, r, n) {
    var i = typeof n == "function" ? iw(t, r) : iw(t);
    var o = tz(n) ? n : r;
    var a = e + "L";
    if (i[a]) {
      i[a].add(o);
    } else {
      i[a] = new Set([o]);
    }
    return function () {
      var e = i[a];
      if (e) {
        e.delete(o);
        if (e.size === 0) {
          delete i[a];
        }
      }
    };
  }
  var nD = 0;
  function nM() {
    this.message = "FLOW_CANCELLED";
  }
  nM.prototype = Object.create(Error.prototype);
  var nR = rb("flow");
  var nI = rb("flow.bound", {
    bound: true
  });
  var nF = Object.assign(function (e, t) {
    if (rs(t)) {
      return nR.decorate_20223_(e, t);
    }
    if (tq(t)) {
      return ra(e, t, nR);
    }
    var r = e.name || "<unnamed flow>";
    function n() {
      var t;
      var n = arguments;
      var i = ++nD;
      var o = nx(r + " - runid: " + i + " - init", e).apply(this, n);
      var a = undefined;
      var s = new Promise(function (e, n) {
        var s = 0;
        function l(e) {
          var t;
          a = undefined;
          try {
            t = nx(r + " - runid: " + i + " - yield " + s++, o.next).call(o, e);
          } catch (e) {
            return n(e);
          }
          c(t);
        }
        function u(e) {
          var t;
          a = undefined;
          try {
            t = nx(r + " - runid: " + i + " - yield " + s++, o.throw).call(o, e);
          } catch (e) {
            return n(e);
          }
          c(t);
        }
        function c(t) {
          if (tz(t == null ? undefined : t.then)) {
            t.then(c, n);
            return;
          }
          if (t.done) {
            return e(t.value);
          } else {
            return (a = Promise.resolve(t.value)).then(l, u);
          }
        }
        t = n;
        l(undefined);
      });
      s.cancel = nx(r + " - runid: " + i + " - cancel", function () {
        try {
          if (a) {
            nB(a);
          }
          var e = o.return(undefined);
          var r = Promise.resolve(e.value);
          r.then(tG, tG);
          nB(r);
          t(new nM());
        } catch (e) {
          t(e);
        }
      });
      return s;
    }
    n.isMobXFlow = true;
    return n;
  }, nR);
  function nB(e) {
    if (tz(e.cancel)) {
      e.cancel();
    }
  }
  function nV(e) {
    return (e == null ? undefined : e.isMobXFlow) === true;
  }
  function n$(e) {
    var t;
    var r;
    return !!(t = e) && (id(t) || !!t[rl] || rc(t) || nb(t) || r8(t));
  }
  function nU(e, t = undefined) {
    np();
    try {
      return e.apply(t);
    } finally {
      nv();
    }
  }
  nF.bound = ro(nI);
  var nK = {
    has: function (e, t) {
      return e[rl].has_(t);
    },
    get: function (e, t) {
      return e[rl].get_(t);
    },
    set: function (e, t, r) {
      var n;
      return !!tq(t) && ((n = e[rl].set_(t, r, true)) == null || n);
    },
    deleteProperty: function (e, t) {
      var r;
      return !!tq(t) && ((r = e[rl].delete_(t, true)) == null || r);
    },
    defineProperty: function (e, t, r) {
      var n;
      return (n = e[rl].defineProperty_(t, r)) == null || n;
    },
    ownKeys: function (e) {
      return e[rl].ownKeys_();
    },
    preventExtensions: function (e) {
      tN(13);
    }
  };
  function nG(e) {
    return e.interceptors_ !== undefined && e.interceptors_.length > 0;
  }
  function nz(e, t) {
    var r = e.interceptors_ ||= [];
    r.push(t);
    return tK(function () {
      var e = r.indexOf(t);
      if (e !== -1) {
        r.splice(e, 1);
      }
    });
  }
  function nq(e, t) {
    var r = ni();
    try {
      var n = [].concat(e.interceptors_ || []);
      var i = 0;
      var o = n.length;
      for (; i < o && ((t = n[i](t)) && !t.type && tN(14), t); i++);
      return t;
    } finally {
      no(r);
    }
  }
  function nH(e) {
    return e.changeListeners_ !== undefined && e.changeListeners_.length > 0;
  }
  function nW(e, t) {
    var r = e.changeListeners_ ||= [];
    r.push(t);
    return tK(function () {
      var e = r.indexOf(t);
      if (e !== -1) {
        r.splice(e, 1);
      }
    });
  }
  function nX(e, t) {
    var r = ni();
    var n = e.changeListeners_;
    if (n) {
      n = n.slice();
      var i = 0;
      var o = n.length;
      for (; i < o; i++) {
        n[i](t);
      }
      no(r);
    }
  }
  var nJ = "splice";
  var nZ = "update";
  var nQ = {
    get: function (e, t) {
      var r = e[rl];
      if (t === rl) {
        return r;
      } else if (t === "length") {
        return r.getArrayLength_();
      } else if (typeof t != "string" || isNaN(t)) {
        if (t6(n0, t)) {
          return n0[t];
        } else {
          return e[t];
        }
      } else {
        return r.get_(parseInt(t));
      }
    },
    set: function (e, t, r) {
      var n = e[rl];
      if (t === "length") {
        n.setArrayLength_(r);
      }
      if (typeof t == "symbol" || isNaN(t)) {
        e[t] = r;
      } else {
        n.set_(parseInt(t), r);
      }
      return true;
    },
    preventExtensions: function () {
      tN(15);
    }
  };
  var nY = function () {
    function e(e = "ObservableArray", t, r, n) {
      this.owned_ = undefined;
      this.legacyMode_ = undefined;
      this.atom_ = undefined;
      this.values_ = [];
      this.interceptors_ = undefined;
      this.changeListeners_ = undefined;
      this.enhancer_ = undefined;
      this.dehancer = undefined;
      this.proxy_ = undefined;
      this.lastKnownLength_ = 0;
      this.owned_ = r;
      this.legacyMode_ = n;
      this.atom_ = new ru(e);
      this.enhancer_ = function (e, r) {
        return t(e, r, "ObservableArray[..]");
      };
    }
    var t = e.prototype;
    t.dehanceValue_ = function (e) {
      if (this.dehancer !== undefined) {
        return this.dehancer(e);
      } else {
        return e;
      }
    };
    t.dehanceValues_ = function (e) {
      if (this.dehancer !== undefined && e.length > 0) {
        return e.map(this.dehancer);
      } else {
        return e;
      }
    };
    t.intercept_ = function (e) {
      return nz(this, e);
    };
    t.observe_ = function (e, t = false) {
      if (t) {
        e({
          observableKind: "array",
          object: this.proxy_,
          debugObjectName: this.atom_.name_,
          type: "splice",
          index: 0,
          added: this.values_.slice(),
          addedCount: this.values_.length,
          removed: [],
          removedCount: 0
        });
      }
      return nW(this, e);
    };
    t.getArrayLength_ = function () {
      this.atom_.reportObserved();
      return this.values_.length;
    };
    t.setArrayLength_ = function (e) {
      if (typeof e != "number" || isNaN(e) || e < 0) {
        tN("Out of range: " + e);
      }
      var t = this.values_.length;
      if (e !== t) {
        if (e > t) {
          var r = Array(e - t);
          var n = 0;
          for (; n < e - t; n++) {
            r[n] = undefined;
          }
          this.spliceWithArray_(t, 0, r);
        } else {
          this.spliceWithArray_(e, t - e);
        }
      }
    };
    t.updateArrayLength_ = function (e, t) {
      if (e !== this.lastKnownLength_) {
        tN(16);
      }
      this.lastKnownLength_ += t;
      if (this.legacyMode_ && t > 0) {
        iO(e + t + 1);
      }
    };
    t.spliceWithArray_ = function (e, t, r) {
      var n = this;
      this.atom_;
      var i = this.values_.length;
      if (e === undefined) {
        e = 0;
      } else if (e > i) {
        e = i;
      } else if (e < 0) {
        e = Math.max(0, i + e);
      }
      t = arguments.length == 1 ? i - e : t == null ? 0 : Math.max(0, Math.min(t, i - e));
      if (r === undefined) {
        r = tF;
      }
      if (nG(this)) {
        var o = nq(this, {
          object: this.proxy_,
          type: nJ,
          index: e,
          removedCount: t,
          added: r
        });
        if (!o) {
          return tF;
        }
        t = o.removedCount;
        r = o.added;
      }
      r = r.length === 0 ? r : r.map(function (e) {
        return n.enhancer_(e, undefined);
      });
      if (this.legacyMode_) {
        var a = r.length - t;
        this.updateArrayLength_(i, a);
      }
      var s = this.spliceItemsIntoValues_(e, t, r);
      if (t !== 0 || r.length !== 0) {
        this.notifyArraySplice_(e, r, s);
      }
      return this.dehanceValues_(s);
    };
    t.spliceItemsIntoValues_ = function (e, t, r) {
      if (r.length < 10000) {
        var n;
        return (n = this.values_).splice.apply(n, [e, t].concat(r));
      }
      var i = this.values_.slice(e, e + t);
      var o = this.values_.slice(e + t);
      this.values_.length += r.length - t;
      for (var a = 0; a < r.length; a++) {
        this.values_[e + a] = r[a];
      }
      for (var s = 0; s < o.length; s++) {
        this.values_[e + r.length + s] = o[s];
      }
      return i;
    };
    t.notifyArrayChildUpdate_ = function (e, t, r) {
      var n = !this.owned_ && false;
      var i = nH(this);
      var o = i || n ? {
        observableKind: "array",
        object: this.proxy_,
        type: nZ,
        debugObjectName: this.atom_.name_,
        index: e,
        newValue: t,
        oldValue: r
      } : null;
      this.atom_.reportChanged();
      if (i) {
        nX(this, o);
      }
    };
    t.notifyArraySplice_ = function (e, t, r) {
      var n = !this.owned_ && false;
      var i = nH(this);
      var o = i || n ? {
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: nJ,
        index: e,
        removed: r,
        added: t,
        removedCount: r.length,
        addedCount: t.length
      } : null;
      this.atom_.reportChanged();
      if (i) {
        nX(this, o);
      }
    };
    t.get_ = function (e) {
      if (!this.legacyMode_ || !(e >= this.values_.length)) {
        this.atom_.reportObserved();
        return this.dehanceValue_(this.values_[e]);
      }
    };
    t.set_ = function (e, t) {
      var r = this.values_;
      if (this.legacyMode_ && e > r.length) {
        tN(17, e, r.length);
      }
      if (e < r.length) {
        this.atom_;
        var n = r[e];
        if (nG(this)) {
          var i = nq(this, {
            type: nZ,
            object: this.proxy_,
            index: e,
            newValue: t
          });
          if (!i) {
            return;
          }
          t = i.newValue;
        }
        if ((t = this.enhancer_(t, n)) !== n) {
          r[e] = t;
          this.notifyArrayChildUpdate_(e, t, n);
        }
      } else {
        var o = Array(e + 1 - r.length);
        var a = 0;
        for (; a < o.length - 1; a++) {
          o[a] = undefined;
        }
        o[o.length - 1] = t;
        this.spliceWithArray_(r.length, 0, o);
      }
    };
    return e;
  }();
  var n0 = {
    clear: function () {
      return this.splice(0);
    },
    replace: function (e) {
      var t = this[rl];
      return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
      return this.slice();
    },
    splice: function (e, t) {
      var r = arguments.length;
      var n = Array(r > 2 ? r - 2 : 0);
      var i = 2;
      for (; i < r; i++) {
        n[i - 2] = arguments[i];
      }
      var o = this[rl];
      switch (arguments.length) {
        case 0:
          return [];
        case 1:
          return o.spliceWithArray_(e);
        case 2:
          return o.spliceWithArray_(e, t);
      }
      return o.spliceWithArray_(e, t, n);
    },
    spliceWithArray: function (e, t, r) {
      return this[rl].spliceWithArray_(e, t, r);
    },
    push: function () {
      var e = this[rl];
      var t = arguments.length;
      var r = Array(t);
      var n = 0;
      for (; n < t; n++) {
        r[n] = arguments[n];
      }
      e.spliceWithArray_(e.values_.length, 0, r);
      return e.values_.length;
    },
    pop: function () {
      return this.splice(Math.max(this[rl].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
      return this.splice(0, 1)[0];
    },
    unshift: function () {
      var e = this[rl];
      var t = arguments.length;
      var r = Array(t);
      var n = 0;
      for (; n < t; n++) {
        r[n] = arguments[n];
      }
      e.spliceWithArray_(0, 0, r);
      return e.values_.length;
    },
    reverse: function () {
      if (nf.trackingDerivation) {
        tN(37, "reverse");
      }
      this.replace(this.slice().reverse());
      return this;
    },
    sort: function () {
      if (nf.trackingDerivation) {
        tN(37, "sort");
      }
      var e = this.slice();
      e.sort.apply(e, arguments);
      this.replace(e);
      return this;
    },
    remove: function (e) {
      var t = this[rl];
      var r = t.dehanceValues_(t.values_).indexOf(e);
      return r > -1 && (this.splice(r, 1), true);
    }
  };
  function n1(e, t) {
    if (typeof Array.prototype[e] == "function") {
      n0[e] = t(e);
    }
  }
  function n3(e) {
    return function () {
      var t = this[rl];
      t.atom_.reportObserved();
      var r = t.dehanceValues_(t.values_);
      return r[e].apply(r, arguments);
    };
  }
  function n2(e) {
    return function (t, r) {
      var n = this;
      var i = this[rl];
      i.atom_.reportObserved();
      return i.dehanceValues_(i.values_)[e](function (e, i) {
        return t.call(r, e, i, n);
      });
    };
  }
  function n6(e) {
    return function () {
      var t = this;
      var r = this[rl];
      r.atom_.reportObserved();
      var n = r.dehanceValues_(r.values_);
      var i = arguments[0];
      arguments[0] = function (e, r, n) {
        return i(e, r, n, t);
      };
      return n[e].apply(n, arguments);
    };
  }
  n1("at", n3);
  n1("concat", n3);
  n1("flat", n3);
  n1("includes", n3);
  n1("indexOf", n3);
  n1("join", n3);
  n1("lastIndexOf", n3);
  n1("slice", n3);
  n1("toString", n3);
  n1("toLocaleString", n3);
  n1("toSorted", n3);
  n1("toSpliced", n3);
  n1("with", n3);
  n1("every", n2);
  n1("filter", n2);
  n1("find", n2);
  n1("findIndex", n2);
  n1("findLast", n2);
  n1("findLastIndex", n2);
  n1("flatMap", n2);
  n1("forEach", n2);
  n1("map", n2);
  n1("some", n2);
  n1("toReversed", n2);
  n1("reduce", n6);
  n1("reduceRight", n6);
  var n9 = tQ("ObservableArrayAdministration", nY);
  function n8(e) {
    return tH(e) && n9(e[rl]);
  }
  var n5 = {};
  var n4 = "delete";
  j = Symbol.iterator;
  E = Symbol.toStringTag;
  var n7 = function () {
    function e(e, t, r) {
      var n = this;
      if (t === undefined) {
        t = rh;
      }
      if (r === undefined) {
        r = "ObservableMap";
      }
      this.enhancer_ = undefined;
      this.name_ = undefined;
      this[rl] = n5;
      this.data_ = undefined;
      this.hasMap_ = undefined;
      this.keysAtom_ = undefined;
      this.interceptors_ = undefined;
      this.changeListeners_ = undefined;
      this.dehancer = undefined;
      this.enhancer_ = t;
      this.name_ = r;
      if (!tz(Map)) {
        tN(18);
      }
      iA(function () {
        n.keysAtom_ = rf("ObservableMap.keys()");
        n.data_ = new Map();
        n.hasMap_ = new Map();
        if (e) {
          n.merge(e);
        }
      });
    }
    var t = e.prototype;
    t.has_ = function (e) {
      return this.data_.has(e);
    };
    t.has = function (e) {
      var t = this;
      if (!nf.trackingDerivation) {
        return this.has_(e);
      }
      var r = this.hasMap_.get(e);
      if (!r) {
        var n = r = new r6(this.has_(e), rp, "ObservableMap.key?", false);
        this.hasMap_.set(e, n);
        nL(n, function () {
          return t.hasMap_.delete(e);
        });
      }
      return r.get();
    };
    t.set = function (e, t) {
      var r = this.has_(e);
      if (nG(this)) {
        var n = nq(this, {
          type: r ? nZ : "add",
          object: this,
          newValue: t,
          name: e
        });
        if (!n) {
          return this;
        }
        t = n.newValue;
      }
      if (r) {
        this.updateValue_(e, t);
      } else {
        this.addValue_(e, t);
      }
      return this;
    };
    t.delete = function (e) {
      var t = this;
      this.keysAtom_;
      if (nG(this) && !nq(this, {
        type: n4,
        object: this,
        name: e
      })) {
        return false;
      }
      if (this.has_(e)) {
        var r = nH(this);
        var n = r ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: n4,
          object: this,
          oldValue: this.data_.get(e).value_,
          name: e
        } : null;
        nU(function () {
          var r;
          t.keysAtom_.reportChanged();
          if ((r = t.hasMap_.get(e)) != null) {
            r.setNewValue_(false);
          }
          t.data_.get(e).setNewValue_(undefined);
          t.data_.delete(e);
        });
        if (r) {
          nX(this, n);
        }
        return true;
      }
      return false;
    };
    t.updateValue_ = function (e, t) {
      var r = this.data_.get(e);
      if ((t = r.prepareNewValue_(t)) !== nf.UNCHANGED) {
        var n = nH(this);
        var i = n ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: nZ,
          object: this,
          oldValue: r.value_,
          name: e,
          newValue: t
        } : null;
        r.setNewValue_(t);
        if (n) {
          nX(this, i);
        }
      }
    };
    t.addValue_ = function (e, t) {
      var r = this;
      this.keysAtom_;
      nU(function () {
        var n;
        var i = new r6(t, r.enhancer_, "ObservableMap.key", false);
        r.data_.set(e, i);
        t = i.value_;
        if ((n = r.hasMap_.get(e)) != null) {
          n.setNewValue_(true);
        }
        r.keysAtom_.reportChanged();
      });
      var n = nH(this);
      var i = n ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: "add",
        object: this,
        name: e,
        newValue: t
      } : null;
      if (n) {
        nX(this, i);
      }
    };
    t.get = function (e) {
      if (this.has(e)) {
        return this.dehanceValue_(this.data_.get(e).get());
      } else {
        return this.dehanceValue_(undefined);
      }
    };
    t.dehanceValue_ = function (e) {
      if (this.dehancer !== undefined) {
        return this.dehancer(e);
      } else {
        return e;
      }
    };
    t.keys = function () {
      this.keysAtom_.reportObserved();
      return this.data_.keys();
    };
    t.values = function () {
      var e = this;
      var t = this.keys();
      return ix({
        next: function () {
          var r = t.next();
          var n = r.done;
          var i = r.value;
          return {
            done: n,
            value: n ? undefined : e.get(i)
          };
        }
      });
    };
    t.entries = function () {
      var e = this;
      var t = this.keys();
      return ix({
        next: function () {
          var r = t.next();
          var n = r.done;
          var i = r.value;
          return {
            done: n,
            value: n ? undefined : [i, e.get(i)]
          };
        }
      });
    };
    t[j] = function () {
      return this.entries();
    };
    t.forEach = function (e, t) {
      var r;
      var n = rn(this);
      while (!(r = n()).done) {
        var i = r.value;
        var o = i[0];
        var a = i[1];
        e.call(t, a, o, this);
      }
    };
    t.merge = function (e) {
      var t = this;
      if (ie(e)) {
        e = new Map(e);
      }
      nU(function () {
        if (tW(e)) {
          (function (e) {
            var t = Object.keys(e);
            if (!t1) {
              return t;
            }
            var r = Object.getOwnPropertySymbols(e);
            if (r.length) {
              return [].concat(t, r.filter(function (t) {
                return tI.propertyIsEnumerable.call(e, t);
              }));
            } else {
              return t;
            }
          })(e).forEach(function (r) {
            return t.set(r, e[r]);
          });
        } else if (Array.isArray(e)) {
          e.forEach(function (e) {
            var r = e[0];
            var n = e[1];
            return t.set(r, n);
          });
        } else if (tY(e)) {
          if (e.constructor !== Map) {
            tN(19, e);
          }
          e.forEach(function (e, r) {
            return t.set(r, e);
          });
        } else if (e != null) {
          tN(20, e);
        }
      });
      return this;
    };
    t.clear = function () {
      var e = this;
      nU(function () {
        nn(function () {
          var t;
          var r = rn(e.keys());
          while (!(t = r()).done) {
            var n = t.value;
            e.delete(n);
          }
        });
      });
    };
    t.replace = function (e) {
      var t = this;
      nU(function () {
        var r;
        var n = function (e) {
          if (tY(e) || ie(e)) {
            return e;
          }
          if (Array.isArray(e)) {
            return new Map(e);
          }
          if (!tW(e)) {
            return tN(21, e);
          }
          var t = new Map();
          for (var r in e) {
            t.set(r, e[r]);
          }
          return t;
        }(e);
        var i = new Map();
        var o = false;
        var a = rn(t.data_.keys());
        while (!(r = a()).done) {
          var s = r.value;
          if (!n.has(s)) {
            if (t.delete(s)) {
              o = true;
            } else {
              var l = t.data_.get(s);
              i.set(s, l);
            }
          }
        }
        var u;
        var c = rn(n.entries());
        while (!(u = c()).done) {
          var f = u.value;
          var d = f[0];
          var h = f[1];
          var p = t.data_.has(d);
          t.set(d, h);
          if (t.data_.has(d)) {
            var v = t.data_.get(d);
            i.set(d, v);
            if (!p) {
              o = true;
            }
          }
        }
        if (!o) {
          if (t.data_.size !== i.size) {
            t.keysAtom_.reportChanged();
          } else {
            var y = t.data_.keys();
            var _ = i.keys();
            var m = y.next();
            var g = _.next();
            while (!m.done) {
              if (m.value !== g.value) {
                t.keysAtom_.reportChanged();
                break;
              }
              m = y.next();
              g = _.next();
            }
          }
        }
        t.data_ = i;
      });
      return this;
    };
    t.toString = function () {
      return "[object ObservableMap]";
    };
    t.toJSON = function () {
      return Array.from(this);
    };
    t.observe_ = function (e, t) {
      return nW(this, e);
    };
    t.intercept_ = function (e) {
      return nz(this, e);
    };
    t5(e, [{
      key: "size",
      get: function () {
        this.keysAtom_.reportObserved();
        return this.data_.size;
      }
    }, {
      key: E,
      get: function () {
        return "Map";
      }
    }]);
    return e;
  }();
  var ie = tQ("ObservableMap", n7);
  var it = {};
  x = Symbol.iterator;
  k = Symbol.toStringTag;
  var ir = function () {
    function e(e, t, r) {
      var n = this;
      if (t === undefined) {
        t = rh;
      }
      if (r === undefined) {
        r = "ObservableSet";
      }
      this.name_ = undefined;
      this[rl] = it;
      this.data_ = new Set();
      this.atom_ = undefined;
      this.changeListeners_ = undefined;
      this.interceptors_ = undefined;
      this.dehancer = undefined;
      this.enhancer_ = undefined;
      this.name_ = r;
      if (!tz(Set)) {
        tN(22);
      }
      this.enhancer_ = function (e, n) {
        return t(e, n, r);
      };
      iA(function () {
        n.atom_ = rf(n.name_);
        if (e) {
          n.replace(e);
        }
      });
    }
    var t = e.prototype;
    t.dehanceValue_ = function (e) {
      if (this.dehancer !== undefined) {
        return this.dehancer(e);
      } else {
        return e;
      }
    };
    t.clear = function () {
      var e = this;
      nU(function () {
        nn(function () {
          var t;
          var r = rn(e.data_.values());
          while (!(t = r()).done) {
            var n = t.value;
            e.delete(n);
          }
        });
      });
    };
    t.forEach = function (e, t) {
      var r;
      var n = rn(this);
      while (!(r = n()).done) {
        var i = r.value;
        e.call(t, i, i, this);
      }
    };
    t.add = function (e) {
      var t = this;
      this.atom_;
      if (nG(this) && !nq(this, {
        type: "add",
        object: this,
        newValue: e
      })) {
        return this;
      }
      if (!this.has(e)) {
        nU(function () {
          t.data_.add(t.enhancer_(e, undefined));
          t.atom_.reportChanged();
        });
        var r = nH(this);
        var n = r ? {
          observableKind: "set",
          debugObjectName: this.name_,
          type: "add",
          object: this,
          newValue: e
        } : null;
        if (r) {
          nX(this, n);
        }
      }
      return this;
    };
    t.delete = function (e) {
      var t = this;
      if (nG(this) && !nq(this, {
        type: n4,
        object: this,
        oldValue: e
      })) {
        return false;
      }
      if (this.has(e)) {
        var r = nH(this);
        var n = r ? {
          observableKind: "set",
          debugObjectName: this.name_,
          type: n4,
          object: this,
          oldValue: e
        } : null;
        nU(function () {
          t.atom_.reportChanged();
          t.data_.delete(e);
        });
        if (r) {
          nX(this, n);
        }
        return true;
      }
      return false;
    };
    t.has = function (e) {
      this.atom_.reportObserved();
      return this.data_.has(this.dehanceValue_(e));
    };
    t.entries = function () {
      var e = 0;
      var t = Array.from(this.keys());
      var r = Array.from(this.values());
      return ix({
        next: function () {
          var n = e;
          e += 1;
          if (n < r.length) {
            return {
              value: [t[n], r[n]],
              done: false
            };
          } else {
            return {
              done: true
            };
          }
        }
      });
    };
    t.keys = function () {
      return this.values();
    };
    t.values = function () {
      this.atom_.reportObserved();
      var e = this;
      var t = 0;
      var r = Array.from(this.data_.values());
      return ix({
        next: function () {
          if (t < r.length) {
            return {
              value: e.dehanceValue_(r[t++]),
              done: false
            };
          } else {
            return {
              done: true
            };
          }
        }
      });
    };
    t.replace = function (e) {
      var t = this;
      if (ii(e)) {
        e = new Set(e);
      }
      nU(function () {
        if (Array.isArray(e)) {
          t.clear();
          e.forEach(function (e) {
            return t.add(e);
          });
        } else if (t0(e)) {
          t.clear();
          e.forEach(function (e) {
            return t.add(e);
          });
        } else if (e != null) {
          tN("Cannot initialize set from " + e);
        }
      });
      return this;
    };
    t.observe_ = function (e, t) {
      return nW(this, e);
    };
    t.intercept_ = function (e) {
      return nz(this, e);
    };
    t.toJSON = function () {
      return Array.from(this);
    };
    t.toString = function () {
      return "[object ObservableSet]";
    };
    t[x] = function () {
      return this.values();
    };
    t5(e, [{
      key: "size",
      get: function () {
        this.atom_.reportObserved();
        return this.data_.size;
      }
    }, {
      key: k,
      get: function () {
        return "Set";
      }
    }]);
    return e;
  }();
  var ii = tQ("ObservableSet", ir);
  var io = Object.create(null);
  var ia = "remove";
  var is = function () {
    function e(e, t = new Map(), r, n = rT) {
      this.target_ = undefined;
      this.values_ = undefined;
      this.name_ = undefined;
      this.defaultAnnotation_ = undefined;
      this.keysAtom_ = undefined;
      this.changeListeners_ = undefined;
      this.interceptors_ = undefined;
      this.proxy_ = undefined;
      this.isPlainObject_ = undefined;
      this.appliedAnnotations_ = undefined;
      this.pendingKeys_ = undefined;
      this.target_ = e;
      this.values_ = t;
      this.name_ = r;
      this.defaultAnnotation_ = n;
      this.keysAtom_ = new ru("ObservableObject.keys");
      this.isPlainObject_ = tW(this.target_);
    }
    var t = e.prototype;
    t.getObservablePropValue_ = function (e) {
      return this.values_.get(e).get();
    };
    t.setObservablePropValue_ = function (e, t) {
      var r = this.values_.get(e);
      if (r instanceof r9) {
        r.set(t);
        return true;
      }
      if (nG(this)) {
        var n = nq(this, {
          type: nZ,
          object: this.proxy_ || this.target_,
          name: e,
          newValue: t
        });
        if (!n) {
          return null;
        }
        t = n.newValue;
      }
      if ((t = r.prepareNewValue_(t)) !== nf.UNCHANGED) {
        var i = nH(this);
        var o = i ? {
          type: nZ,
          observableKind: "object",
          debugObjectName: this.name_,
          object: this.proxy_ || this.target_,
          oldValue: r.value_,
          name: e,
          newValue: t
        } : null;
        r.setNewValue_(t);
        if (i) {
          nX(this, o);
        }
      }
      return true;
    };
    t.get_ = function (e) {
      if (nf.trackingDerivation && !t6(this.target_, e)) {
        this.has_(e);
      }
      return this.target_[e];
    };
    t.set_ = function (e, t, r = false) {
      if (t6(this.target_, e)) {
        if (this.values_.has(e)) {
          return this.setObservablePropValue_(e, t);
        } else if (r) {
          return Reflect.set(this.target_, e, t);
        } else {
          this.target_[e] = t;
          return true;
        }
      } else {
        return this.extend_(e, {
          value: t,
          enumerable: true,
          writable: true,
          configurable: true
        }, this.defaultAnnotation_, r);
      }
    };
    t.has_ = function (e) {
      if (!nf.trackingDerivation) {
        return e in this.target_;
      }
      this.pendingKeys_ ||= new Map();
      var t = this.pendingKeys_.get(e);
      if (!t) {
        t = new r6(e in this.target_, rp, "ObservableObject.key?", false);
        this.pendingKeys_.set(e, t);
      }
      return t.get();
    };
    t.make_ = function (e, t) {
      if (t === true) {
        t = this.defaultAnnotation_;
      }
      if (t !== false) {
        if (!(e in this.target_)) {
          var r;
          if ((r = this.target_[ri]) != null && r[e]) {
            return;
          }
          tN(1, t.annotationType_, this.name_ + "." + e.toString());
        }
        for (var n = this.target_; n && n !== tI;) {
          var i = tM(n, e);
          if (i) {
            var o = t.make_(this, e, i, n);
            if (o === 0) {
              return;
            }
            if (o === 1) {
              break;
            }
          }
          n = Object.getPrototypeOf(n);
        }
        ih(this, t, e);
      }
    };
    t.extend_ = function (e, t, r, n = false) {
      if (r === true) {
        r = this.defaultAnnotation_;
      }
      if (r === false) {
        return this.defineProperty_(e, t, n);
      }
      var i = r.extend_(this, e, t, n);
      if (i) {
        ih(this, r, e);
      }
      return i;
    };
    t.defineProperty_ = function (e, t, r = false) {
      this.keysAtom_;
      try {
        np();
        var n = this.delete_(e);
        if (!n) {
          return n;
        }
        if (nG(this)) {
          var i = nq(this, {
            object: this.proxy_ || this.target_,
            name: e,
            type: "add",
            newValue: t.value
          });
          if (!i) {
            return null;
          }
          var o = i.newValue;
          if (t.value !== o) {
            t = t4({}, t, {
              value: o
            });
          }
        }
        if (r) {
          if (!Reflect.defineProperty(this.target_, e, t)) {
            return false;
          }
        } else {
          tR(this.target_, e, t);
        }
        this.notifyPropertyAddition_(e, t.value);
      } finally {
        nv();
      }
      return true;
    };
    t.defineObservableProperty_ = function (e, t, r, n = false) {
      this.keysAtom_;
      try {
        np();
        var i = this.delete_(e);
        if (!i) {
          return i;
        }
        if (nG(this)) {
          var o = nq(this, {
            object: this.proxy_ || this.target_,
            name: e,
            type: "add",
            newValue: t
          });
          if (!o) {
            return null;
          }
          t = o.newValue;
        }
        var a = ic(e);
        var s = {
          configurable: !nf.safeDescriptors || this.isPlainObject_,
          enumerable: true,
          get: a.get,
          set: a.set
        };
        if (n) {
          if (!Reflect.defineProperty(this.target_, e, s)) {
            return false;
          }
        } else {
          tR(this.target_, e, s);
        }
        var l = new r6(t, r, "ObservableObject.key", false);
        this.values_.set(e, l);
        this.notifyPropertyAddition_(e, l.value_);
      } finally {
        nv();
      }
      return true;
    };
    t.defineComputedProperty_ = function (e, t, r = false) {
      this.keysAtom_;
      try {
        np();
        var n = this.delete_(e);
        if (!n) {
          return n;
        }
        if (nG(this) && !nq(this, {
          object: this.proxy_ || this.target_,
          name: e,
          type: "add",
          newValue: undefined
        })) {
          return null;
        }
        t.name ||= "ObservableObject.key";
        t.context = this.proxy_ || this.target_;
        var i = ic(e);
        var o = {
          configurable: !nf.safeDescriptors || this.isPlainObject_,
          enumerable: false,
          get: i.get,
          set: i.set
        };
        if (r) {
          if (!Reflect.defineProperty(this.target_, e, o)) {
            return false;
          }
        } else {
          tR(this.target_, e, o);
        }
        this.values_.set(e, new r9(t));
        this.notifyPropertyAddition_(e, undefined);
      } finally {
        nv();
      }
      return true;
    };
    t.delete_ = function (e, t = false) {
      this.keysAtom_;
      if (!t6(this.target_, e)) {
        return true;
      }
      if (nG(this) && !nq(this, {
        object: this.proxy_ || this.target_,
        name: e,
        type: ia
      })) {
        return null;
      }
      try {
        np();
        var r;
        var n;
        var i;
        var o = nH(this);
        var a = this.values_.get(e);
        var s = undefined;
        if (!a && o) {
          s = (i = tM(this.target_, e)) == null ? undefined : i.value;
        }
        if (t) {
          if (!Reflect.deleteProperty(this.target_, e)) {
            return false;
          }
        } else {
          delete this.target_[e];
        }
        if (a) {
          this.values_.delete(e);
          if (a instanceof r6) {
            s = a.value_;
          }
          n_(a);
        }
        this.keysAtom_.reportChanged();
        if ((r = this.pendingKeys_) != null && (n = r.get(e)) != null) {
          n.set(e in this.target_);
        }
        if (o) {
          var l = {
            type: ia,
            observableKind: "object",
            object: this.proxy_ || this.target_,
            debugObjectName: this.name_,
            oldValue: s,
            name: e
          };
          if (o) {
            nX(this, l);
          }
        }
      } finally {
        nv();
      }
      return true;
    };
    t.observe_ = function (e, t) {
      return nW(this, e);
    };
    t.intercept_ = function (e) {
      return nz(this, e);
    };
    t.notifyPropertyAddition_ = function (e, t) {
      var r;
      var n;
      var i = nH(this);
      if (i) {
        var o = i ? {
          type: "add",
          observableKind: "object",
          debugObjectName: this.name_,
          object: this.proxy_ || this.target_,
          name: e,
          newValue: t
        } : null;
        if (i) {
          nX(this, o);
        }
      }
      if ((r = this.pendingKeys_) != null && (n = r.get(e)) != null) {
        n.set(true);
      }
      this.keysAtom_.reportChanged();
    };
    t.ownKeys_ = function () {
      this.keysAtom_.reportObserved();
      return t3(this.target_);
    };
    t.keys_ = function () {
      this.keysAtom_.reportObserved();
      return Object.keys(this.target_);
    };
    return e;
  }();
  function il(e, t) {
    if (t6(e, rl)) {
      return e;
    }
    var i = (t == null ? undefined : t.name) ?? "ObservableObject";
    var o = new is(e, new Map(), String(i), t ? t.defaultDecorator ?? rD(t) : undefined);
    tJ(e, rl, o);
    return e;
  }
  var iu = tQ("ObservableObjectAdministration", is);
  function ic(e) {
    return io[e] ||= {
      get: function () {
        return this[rl].getObservablePropValue_(e);
      },
      set: function (t) {
        return this[rl].setObservablePropValue_(e, t);
      }
    };
  }
  function id(e) {
    return !!tH(e) && iu(e[rl]);
  }
  function ih(e, t, r) {
    var n;
    if ((n = e.target_[ri]) != null) {
      delete n[r];
    }
  }
  function ip(e, t, r) {}
  var iv = ib(0);
  d = false;
  Object.defineProperty(h = {}, "0", {
    set: function () {
      d = true;
    }
  });
  Object.create(h)["0"] = 1;
  var iy = d === false;
  var i_ = 0;
  function im() {}
  p = Array.prototype;
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(im.prototype, p);
  } else if (im.prototype.__proto__ !== undefined) {
    im.prototype.__proto__ = p;
  } else {
    im.prototype = p;
  }
  var ig = function (e, t, r) {
    function n(t, r, n, i) {
      var o;
      if (n === undefined) {
        n = "ObservableArray";
      }
      if (i === undefined) {
        i = false;
      }
      o = e.call(this) || this;
      iA(function () {
        var e = new nY(n, r, i, true);
        e.proxy_ = rt(o);
        tZ(rt(o), rl, e);
        if (t && t.length) {
          o.spliceWithArray(0, 0, t);
        }
        if (iy) {
          Object.defineProperty(rt(o), "0", iv);
        }
      });
      return o;
    }
    t7(n, e);
    var i = n.prototype;
    i.concat = function () {
      this[rl].atom_.reportObserved();
      var e = arguments.length;
      var t = Array(e);
      var r = 0;
      for (; r < e; r++) {
        t[r] = arguments[r];
      }
      return Array.prototype.concat.apply(this.slice(), t.map(function (e) {
        if (n8(e)) {
          return e.slice();
        } else {
          return e;
        }
      }));
    };
    i[r] = function () {
      var e = this;
      var t = 0;
      return ix({
        next: function () {
          if (t < e.length) {
            return {
              value: e[t++],
              done: false
            };
          } else {
            return {
              done: true,
              value: undefined
            };
          }
        }
      });
    };
    t5(n, [{
      key: "length",
      get: function () {
        return this[rl].getArrayLength_();
      },
      set: function (e) {
        this[rl].setArrayLength_(e);
      }
    }, {
      key: t,
      get: function () {
        return "Array";
      }
    }]);
    return n;
  }(im, Symbol.toStringTag, Symbol.iterator);
  function ib(e) {
    return {
      enumerable: false,
      configurable: true,
      get: function () {
        return this[rl].get_(e);
      },
      set: function (t) {
        this[rl].set_(e, t);
      }
    };
  }
  function iO(e) {
    if (e > i_) {
      var t;
      var r = i_;
      for (; r < e + 100; r++) {
        t = r;
        tR(ig.prototype, "" + t, ib(t));
      }
      i_ = e;
    }
  }
  function iw(e, t) {
    if (typeof e == "object" && e !== null) {
      if (n8(e)) {
        if (t !== undefined) {
          tN(23);
        }
        return e[rl].atom_;
      }
      if (ii(e)) {
        return e.atom_;
      }
      if (ie(e)) {
        if (t === undefined) {
          return e.keysAtom_;
        }
        var r = e.data_.get(t) || e.hasMap_.get(t);
        if (!r) {
          tN(25, t, iC(e));
        }
        return r;
      }
      if (id(e)) {
        if (!t) {
          return tN(26);
        }
        var n = e[rl].values_.get(t);
        if (!n) {
          tN(27, t, iC(e));
        }
        return n;
      }
      if (rc(e) || r8(e) || nb(e)) {
        return e;
      }
    } else if (tz(e) && nb(e[rl])) {
      return e[rl];
    }
    tN(28);
  }
  function iC(e, t) {
    var r;
    if (t !== undefined) {
      r = iw(e, t);
    } else {
      if (nP(e)) {
        return e.name;
      }
      r = id(e) || ie(e) || ii(e) ? function e(t, r) {
        if (!t) {
          tN(29);
        }
        if (r !== undefined) {
          return e(iw(t, r));
        } else if (rc(t) || r8(t) || nb(t) || ie(t) || ii(t)) {
          return t;
        } else if (t[rl]) {
          return t[rl];
        } else {
          tN(24, t);
          return;
        }
      }(e) : iw(e);
    }
    return r.name_;
  }
  function iA(e) {
    var t = ni();
    var r = r3(true);
    np();
    try {
      return e();
    } finally {
      nv();
      r2(r);
      no(t);
    }
  }
  Object.entries(n0).forEach(function (e) {
    var t = e[0];
    var r = e[1];
    if (t !== "concat") {
      tJ(ig.prototype, t, r);
    }
  });
  iO(1000);
  var iS = tI.toString;
  function ij(e, t, r = -1) {
    return function e(t, r, n, i, o) {
      if (t === r) {
        return t !== 0 || 1 / t == 1 / r;
      }
      if (t == null || r == null) {
        return false;
      }
      if (t != t) {
        return r != r;
      }
      var a = typeof t;
      if (a !== "function" && a !== "object" && typeof r != "object") {
        return false;
      }
      var s = iS.call(t);
      if (s !== iS.call(r)) {
        return false;
      }
      switch (s) {
        case "[object RegExp]":
        case "[object String]":
          return "" + t == "" + r;
        case "[object Number]":
          if (+t != +t) {
            return +r != +r;
          }
          if (+t == 0) {
            return 1 / +t == 1 / r;
          } else {
            return +t == +r;
          }
        case "[object Date]":
        case "[object Boolean]":
          return +t == +r;
        case "[object Symbol]":
          return typeof Symbol != "undefined" && Symbol.valueOf.call(t) === Symbol.valueOf.call(r);
        case "[object Map]":
        case "[object Set]":
          if (n >= 0) {
            n++;
          }
      }
      t = iE(t);
      r = iE(r);
      var l = s === "[object Array]";
      if (!l) {
        if (typeof t != "object" || typeof r != "object") {
          return false;
        }
        var u = t.constructor;
        var c = r.constructor;
        if (u !== c && (!tz(u) || !(u instanceof u) || !tz(c) || !(c instanceof c)) && "constructor" in t && "constructor" in r) {
          return false;
        }
      }
      if (n === 0) {
        return false;
      }
      if (n < 0) {
        n = -1;
      }
      o = o || [];
      for (var f = (i = i || []).length; f--;) {
        if (i[f] === t) {
          return o[f] === r;
        }
      }
      i.push(t);
      o.push(r);
      if (l) {
        if ((f = t.length) !== r.length) {
          return false;
        }
        while (f--) {
          if (!e(t[f], r[f], n - 1, i, o)) {
            return false;
          }
        }
      } else {
        var d;
        var h = Object.keys(t);
        f = h.length;
        if (Object.keys(r).length !== f) {
          return false;
        }
        while (f--) {
          if (!t6(r, d = h[f]) || !e(t[d], r[d], n - 1, i, o)) {
            return false;
          }
        }
      }
      i.pop();
      o.pop();
      return true;
    }(e, t, r);
  }
  function iE(e) {
    if (n8(e)) {
      return e.slice();
    } else if (tY(e) || ie(e) || t0(e) || ii(e)) {
      return Array.from(e.entries());
    } else {
      return e;
    }
  }
  function ix(e) {
    e[Symbol.iterator] = ik;
    return e;
  }
  function ik() {
    return this;
  }
  function iP(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      var n = Object.keys(r);
      if (typeof Object.getOwnPropertySymbols == "function") {
        n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        }));
      }
      n.forEach(function (t) {
        var n;
        n = r[t];
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
      });
    }
    return e;
  }
  function iN(e, t) {
    t = t ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(t));
    } else {
      (function (e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n);
        }
        return r;
      })(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  ["Symbol", "Map", "Set"].forEach(function (e) {
    if (tT()[e] === undefined) {
      tN("MobX requires global '" + e + "' to be available or polyfilled");
    }
  });
  if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object") {
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
      spy: function (e) {
        return function () {};
      },
      extras: {
        getDebugName: iC
      },
      $mobx: rl
    });
  }
  let iL = e => typeof (e == null ? undefined : e.getOrigin) == "function";
  let iT = (e, t) => {
    let r = [];
    let n = (e, i, o, a) => {
      var s;
      var c;
      if (e) {
        if (e.type === "element") {
          if (e.content.slot) {
            if ((s = e.content.children) !== null && s !== undefined) {
              s.forEach(e => {
                n(e, i, o, a);
              });
            }
          } else {
            r.push(t({
              uidl: e.content,
              parentId: i,
              slotName: o,
              workspaceItem: a
            }));
            let s = iN(iP({}, e.content.props), {
              children: e.content.props?.children || e.content.children
            });
            Object.keys(s).forEach(t => {
              if (Array.isArray(s[t])) {
                s[t].forEach(e => n(e, i, o, a));
              }
              n(s[t], e.content.id, t);
            });
          }
        } else if (e.type === "element-array") {
          e.content.items.forEach(e => {
            n(e, i, o, a);
          });
        } else if (e.type === "element-object") {
          let t = e.content;
          (((c = e.content.content) === null || c === undefined ? undefined : c.content?.children) || []).forEach(e => {
            n(e, i, o, t);
          });
        }
      }
    };
    n("node" in (e || {}) ? e.node : e, "", "", undefined);
    return r;
  };
  let iD = memoizeFunctionUtil.default(e => rJ(() => {
    let t = {};
    iT(e, ({
      parentId: e,
      slotName: r,
      workspaceItem: n
    }) => {
      if (e) {
        t[`${e}--${r}`] = true;
        if (n) {
          t[`${e}--${r}--${n.key}`] = true;
        }
      }
    });
    return t;
  }, {
    keepAlive: true
  }));
  let iM = (e, t) => {
    if (iL(e)) {
      if (e.$api) {
        var n;
        let t = (n = e.$api) === null || n === undefined ? undefined : n.ctx?.app;
        if (t) {
          return !iD(t.get("uidl")).get()[e.__fes_name__];
        }
      }
      let i = e.getOrigin(t);
      return Array.isArray(i) && i.length === 0;
    }
    return !!Array.isArray(e) && e.length === 0;
  };
  let iR = ({
    prop: e,
    Content: t,
    blockId: r,
    $api: n
  }) => {
    let i = tk(t);
    let o = (o, a) => {
      if (!i) {
        return t;
      }
      if (typeof o == "function") {
        a = o;
        o = {};
      }
      let s = t(o);
      if (tE(s)) {
        var l;
        if ((l = a) === null || l === undefined) {
          return undefined;
        } else {
          return l(s.map(t => iN(iP({}, t), {
            content: Object.assign(t.content, {
              getOrigin: e => n ? iM(t.content, e) ? [] : [1] : t.content(e),
              __fes_name__: `${r}--${e}--${t.key}`,
              $api: n
            })
          })));
        }
      }
      return s;
    };
    o.getOrigin = e => typeof t == "function" ? t(e) : t;
    o.__fes_name__ = `${r}--${e}`;
    o.$api = n;
    return o;
  };
  let iI = reactCoreLibraryReexport.createContext({
    blockId: "",
    slotContentLength: {}
  });
  let iF = reactCoreLibraryReexport.createContext({
    meta: {}
  });
  let iB = rq({
    state: {},
    setGlobalState(e, t, r) {
      if (!this.state[e]) {
        this.state[e] = rq({
          [t]: r
        }, {}, {
          deep: false
        });
        return;
      }
      if (this.state[e][t] !== r) {
        this.state[e][t] = r;
      }
    }
  }, {
    state: rq.shallow
  }, {
    autoBind: true
  });
  let iV = ({
    default: e,
    key: t
  }) => {
    let [r, n] = reactCoreLibraryReexport.useState(e);
    let {
      blockId: i
    } = reactCoreLibraryReexport.useContext(iI);
    reactCoreLibraryReexport.useEffect(() => {
      var s;
      if (Object.hasOwn(iB.state?.[i] ?? {}, t)) {
        n((s = iB.state) === null || s === undefined ? undefined : s[i]?.[t]);
      } else {
        iB.setGlobalState(i, t, e);
      }
    }, []);
    return [r, reactCoreLibraryReexport.useCallback(e => {
      iB.setGlobalState(i, t, e);
      n(e);
    }, [])];
  };
  let i$ = () => reactCoreLibraryReexport.useContext(iI);
  function iU(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      var n = Object.keys(r);
      if (typeof Object.getOwnPropertySymbols == "function") {
        n = n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        }));
      }
      n.forEach(function (t) {
        var n;
        n = r[t];
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
      });
    }
    return e;
  }
  function iK(e, t) {
    t = t ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(e, Object.getOwnPropertyDescriptors(t));
    } else {
      (function (e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n);
        }
        return r;
      })(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  let iG = e => t => {
    let r = iU({}, t.defaultProps, e);
    let n = new Set(Object.keys(e || {}).filter(e => (tm(e) || e === "children") && typeof r[e] == "function" || reactCoreLibraryReexport.isValidElement(r[e])));
    let i = reactCoreLibraryReexport.forwardRef((e, r) => {
      var {
        _REACT_CHILDREN_: i,
        _REACT_REF_: o,
        blockId: a
      } = e;
      var s = function (e, t) {
        if (e == null) {
          return {};
        }
        var r;
        var n;
        var i = function (e, t) {
          if (e == null) {
            return {};
          }
          var r;
          var n;
          var i = {};
          var o = Object.keys(e);
          for (n = 0; n < o.length; n++) {
            r = o[n];
            if (!(t.indexOf(r) >= 0)) {
              i[r] = e[r];
            }
          }
          return i;
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++) {
            r = o[n];
            if (!(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r)) {
              i[r] = e[r];
            }
          }
        }
        return i;
      }(e, ["_REACT_CHILDREN_", "_REACT_REF_", "blockId"]);
      let l = iK(iU({}, s), {
        children: i || s.children
      });
      let u = Object.keys(l || {}).reduce((e, t) => {
        let r = l[t];
        if (n.has(t)) {
          e[t] = iR({
            Content: r,
            prop: t,
            blockId: a,
            $api: l.$api
          });
        } else {
          e[t] = r;
        }
        return e;
      }, {});
      let c = reactCoreLibraryReexport.useContext(iF);
      return reactJsxRuntimeCoreReexport.jsx(iI.Provider, {
        value: {
          blockId: a,
          get slotContentLength() {
            return new Proxy(c.meta[a]?.slotContentLength || {}, {
              get: (e, t) => typeof e[t] == "number" ? e[t] : 0
            });
          }
        },
        children: reactJsxRuntimeCoreReexport.jsx(t, iK(iU({}, u), {
          ref: o || r
        }))
      });
    });
    i.displayName = `FesCommonHoc(${t.displayName || t.name || "unknown"})`;
    i.__isBlock__ = true;
    i.__editor_callback__ = null;
    i.__defaultProps__ = r;
    i.defaultProps = r;
    return i;
  };
  (v = P ||= {}).ViewManagerDir = "viewManagerDir";
  v.ViewManagerPage = "viewManagerPage";
  (y = N ||= {}).Boolean = "boolean";
  y.Enum = "enum";
  y.Number = "number";
  y.String = "string";
  y.Text = "text";
  y.Date = "date";
  y.DateRange = "daterange";
  y.Time = "time";
  y.TimeRange = "timerange";
  y.Api = "api";
  y.Code = "code";
  y.Json = "json";
  y.RichText = "richtext";
  y.Color = "color";
  y.GradientColor = "gradient-color";
  y.Image = "image";
  y.ImageGlobal = "image-global";
  y.ImageGecko = "image-gecko";
  y.File = "file";
  y.Range = "range";
  y.Transfer = "transfer";
  y.Object = "object";
  y.Array = "array";
  y.ArrayObject = "array-object";
  y.ArrayString = "array-string";
  y.Tree = "tree";
  y.TextBox = "text-box";
  y.Grid = "grid";
  y.Group = "group";
  y.Tab = "tab";
  y.TabPane = "tabpane";
  y.Slot = "slot";
  y.Action = "action";
  y.Data = "data";
  y.CMS = "cms";
  y.Radio = "radio";
  y.RadioButton = "radio-button";
  y.Textarea = "textarea";
  y.Slider = "slider";
  y.ImageHotSpot = "image-hot-spot";
  y.Style = "style";
  y.CSSLength = "css-length";
  y.ClassName = "className";
  y.Material = "material";
  y.Regular = "regular";
  y.TimeFormatter = "time-formatter";
  y.StyleFont = "style-font";
  y.StyleBorder = "style-border";
  y.StyleSpacing = "style-spacing";
  y.StyleSize = "style-size";
  y.LessCodeEditor = "less-code-editor";
  y.CompClassName = "class-name-select";
  y.ClassNameLess = "class-name-less";
  y.freeCanvasChildConfig = "free-canvas-child-config";
  y.freeCanvasContainerConfig = "free-canvas-container-config";
  y.FontFamily = "font-family";
  y.ApiVar = "api-var";
  y.ApiFieldTreeSelect = "api-field-tree-select";
  let iz = typeof window != "undefined" ? window : null;
  let iq = () => !!iz && iz.__IS_FES_EDITOR__;
  let iH = () => !!iz && iz.__IS_NCLC_RUNTIME__;
  window.process = {
    env: {}
  };
  var axiosHttpClient = require("axios-http-client") /*id: 740865*/;
  let iX = {};
  let iJ = {
    components: {
      "@flowpd/cici-components": {
        pkgName: "@flowpd/cici-components",
        version: "0.12.1-alpha.0"
      },
      "@flowpd/lark-components": {
        pkgName: "@flowpd/lark-components",
        version: "0.2.4"
      },
      "@flowpd/discord-components": {
        pkgName: "@flowpd/discord-components",
        version: "0.2.0-alpha.x8cba6a923"
      },
      "@flowpd/telegram-components": {
        pkgName: "@flowpd/telegram-components",
        version: "0.2.0-alpha.xf22ebab5b"
      }
    },
    views: {}
  };
  let iZ = null;
  let iQ = (e = false) => {
    var t;
    var r;
    t = undefined;
    r = function* () {
      var t;
      if (iZ) {
        return iZ;
      }
      try {
        let r = yield axiosHttpClient.axios.post(`${e ? "" : "https://www.coze.cn"}/api/card_builder/get_card_tcc_info`, {}, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        let n = (t = r == null ? undefined : r.data) == null ? undefined : t.card_builder_package_detail;
        if (n) {
          let e = JSON.parse(n);
          Object.keys(e).forEach(t => {
            var r;
            let n = (r = e[t]) == null ? undefined : r.version;
            iJ.components[t] = {
              pkgName: t,
              version: n
            };
          });
        }
      } catch (e) {}
      iZ = iJ;
      return iJ;
    };
    return new Promise((e, n) => {
      var i = e => {
        try {
          a(r.next(e));
        } catch (e) {
          n(e);
        }
      };
      var o = e => {
        try {
          a(r.throw(e));
        } catch (e) {
          n(e);
        }
      };
      var a = t => t.done ? e(t.value) : Promise.resolve(t.value).then(i, o);
      a((r = r.apply(t, null)).next());
    });
  };
  (i = iY || {}).BOE = "boe";
  i.BOE_I18N = "boe-i18n";
  i.CN_INHOUSE = "cn-inhouse";
  i.CN_RELEASE = "cn-release";
  i.SG_INHOUSE = "sg-inhouse";
  i.SG_RELEASE = "sg-release";
  i.VA_RELEASE = "va-release";
  i.US = "us";
  var iY = i;
  let i0 = {
    boe: "https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/card_builder_static/material",
    "cn-inhouse": "https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/card_builder_static/material",
    "cn-release": "https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/card_builder_static/material"
  };
  let i1 = {};
  var i3 = Object.defineProperty;
  var i2 = Object.defineProperties;
  var i6 = Object.getOwnPropertyDescriptors;
  var i9 = Object.getOwnPropertySymbols;
  var i8 = Object.prototype.hasOwnProperty;
  var i5 = Object.prototype.propertyIsEnumerable;
  var i4 = (e, t, r) => t in e ? i3(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : e[t] = r;
  var i7 = (e, t) => {
    for (var r in t ||= {}) {
      if (i8.call(t, r)) {
        i4(e, r, t[r]);
      }
    }
    if (i9) {
      for (var r of i9(t)) {
        if (i5.call(t, r)) {
          i4(e, r, t[r]);
        }
      }
    }
    return e;
  };
  e5({
    externals: {
      react: R,
      "react/jsx-runtime": D,
      "react-dom": tv,
      "@edenx/runtime/starry/block": L
    }
  });
  let oe = class e {
    constructor(e, t = {}, r) {
      this._blockPrefix = e;
      this._dependencies = t;
      this._componentMap = r || i7({
        Root: e => reactJsxRuntimeCoreReexport.jsx("div", i7({}, e))
      }, window._FLOWPD_CARD_COMPONENT_CACHE_ || {});
      this._remoteModulesLoadMap = {};
      this._runtimeOptions = {};
    }
    get blockPrefix() {
      return this._blockPrefix;
    }
    get remoteForce() {
      return this._remoteForce;
    }
    get runtimeOptions() {
      return this._runtimeOptions;
    }
    get remoteModulesLoadMap() {
      return this._remoteModulesLoadMap;
    }
    static getInstance(t) {
      e._instance ||= new e(t);
      return e._instance;
    }
    setRuntimeOptions(e) {
      this._runtimeOptions = e;
    }
    setBlockPrefix(e) {
      this._blockPrefix = e;
    }
    setRemoteForce(e) {
      this._remoteForce = e;
    }
    get dependencies() {
      return this._dependencies;
    }
    setDependencies(e) {
      this._dependencies = e;
    }
    init(e, t, r) {
      if (Object.keys(this.dependencies).length) {
        return;
      }
      let {
        remoteForce: n
      } = r;
      this.setBlockPrefix(e);
      this.setDependencies(t);
      this.setRuntimeOptions(r);
      if (n) {
        this.setRemoteForce(n);
      }
      this._componentMap = i7(i7({
        Root: e => reactJsxRuntimeCoreReexport.jsx("div", i7({}, e))
      }, window._FLOWPD_CARD_COMPONENT_CACHE_ || {}), r.components || {});
    }
    extractPackageAndComponent(e) {
      let t = e.match(/((?:@[^/]+\/)?[^/]+)\/(\w+)/);
      if (t) {
        return {
          packageName: t[1],
          componentName: t[2]
        };
      }
      throw Error("The input format does not match!");
    }
    getInnerComponent(e) {
      return i1[e];
    }
    getComponent(e) {
      var t;
      var r;
      if (this.runtimeOptions.customGetComponent) {
        return this.runtimeOptions.customGetComponent(e);
      }
      if (this._componentMap[e]) {
        return this._componentMap[e];
      }
      let {
        packageName: n,
        componentName: i
      } = this.extractPackageAndComponent(e);
      if (!this.remoteForce && iX[n]) {
        this._componentMap[e] = this.getInnerComponent(n)[i];
        window._FLOWPD_CARD_COMPONENT_CACHE_ = i7({}, this._componentMap);
        return this._componentMap[e];
      }
      let o = (r = (t = this._dependencies) == null ? undefined : t.components) == null ? undefined : r[n];
      if (!o) {
        return null;
      }
      this._remoteModulesLoadMap[o.pkgName] = false;
      let a = o.url || `${this.blockPrefix}/${o.pkgName}/${o.version}/index.js`;
      this._componentMap[e] = e => reactJsxRuntimeCoreReexport.jsx(th, {
        name: o.pkgName,
        version: o.version,
        componentName: i,
        props: i2(i7({}, e), i6({
          region: this.runtimeOptions.region
        })),
        url: a,
        onLoaded: () => {
          this._remoteModulesLoadMap[o.pkgName] = true;
        },
        onError: e => {
          var t;
          if ((t = this._runtimeOptions) != null) {
            t.onError({
              code: -3,
              msg: `block load error, ${o.pkgName}@${o.version}: ${e.message}`
            });
          }
        }
      });
      window._FLOWPD_CARD_COMPONENT_CACHE_ = i7({}, this._componentMap);
      return this._componentMap[e];
    }
    clearRemoteModulesLoadMap() {
      this._remoteModulesLoadMap = {};
    }
  };
  oe._instance = null;
  var ot = oe.getInstance("");
  let or = function (e, t = 100) {
    let r = 0;
    return function e(n) {
      var i;
      var o;
      let a = false;
      if (ot.remoteForce || !Object.keys(((i = ot.dependencies) == null ? undefined : i.components) || {}).length || Object.entries(((o = ot.dependencies) == null ? undefined : o.components) || {}).some(([e, t]) => iX[e] && (t == null ? undefined : t.version) && (t == null ? undefined : t.version) !== iX[e])) {
        a = true;
      }
      if (!a || Object.values(ot.remoteModulesLoadMap).every(e => e === true) || r > 30000) {
        n();
        return;
      }
      setTimeout(() => e(n), r += t);
    };
  }(0);
  class on extends reactCoreLibraryReexport.Component {
    constructor() {
      super(...arguments);
      this.state = {
        hasError: false
      };
      this.handleClick = () => {
        this.setState({
          hasError: false
        });
      };
    }
    static getDerivedStateFromError(e) {
      return {
        hasError: true
      };
    }
    componentDidUpdate(e) {
      if (this.props.dsl !== e.dsl) {
        this.setState({
          hasError: false
        });
      }
    }
    componentDidCatch(e, t) {
      if (this.props.onError) {
        this.props.onError({
          code: -1,
          msg: `some error happened in card render: ${e.message}`
        });
      }
    }
    render() {
      if (this.state.hasError) {
        return reactJsxRuntimeCoreReexport.jsxs(reactJsxRuntimeCoreReexport.Fragment, {
          children: [this.props.debug ? reactJsxRuntimeCoreReexport.jsx("button", {
            style: {
              backgroundColor: "dodgerblue",
              border: "none",
              color: "white",
              padding: "10px 20px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "14px",
              margin: "4px 2px",
              cursor: "pointer"
            },
            onClick: this.handleClick,
            children: "refresh"
          }) : null, reactJsxRuntimeCoreReexport.jsx("h1", {
            children: "Something went wrong."
          })]
        });
      } else {
        return this.props.children;
      }
    }
  }
  var deepCloneWrapper_1 = require("deep-clone-wrapper_1") /*id: 391722*/;
  var boolExpressionEvaluator_1 = require("bool-expression-evaluator_1") /*id: 412962*/;
  let oa = (e, t, r) => {
    let n = Array.isArray(t) ? t : t.split(".");
    if (!n.length) {
      return r;
    }
    let i = deepCloneWrapper_1.deepClone(e);
    if (Object.hasOwn(e, n[0])) {
      n.forEach(e => {
        i = i && Object.prototype.hasOwnProperty.call(i, e) ? i[e] : undefined;
      });
      if (i !== undefined) {
        return i;
      } else {
        return r;
      }
    } else {
      return r ?? `{{${t}}}`;
    }
  };
  (o = os || {}).SLOT = "slot";
  o.WORKSPACE_SLOT = "workspaceSlot";
  o.EXPRESSION = "expression";
  o.ACTION = "action";
  var os = o;
  (a = ol || {}).EXPRESSION = "expression";
  var ol = a;
  var ou = Object.defineProperty;
  var oc = Object.defineProperties;
  var of = Object.getOwnPropertyDescriptors;
  var od = Object.getOwnPropertySymbols;
  var oh = Object.prototype.hasOwnProperty;
  var op = Object.prototype.propertyIsEnumerable;
  var ov = (e, t, r) => t in e ? ou(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : e[t] = r;
  var oy = (e, t) => {
    for (var r in t ||= {}) {
      if (oh.call(t, r)) {
        ov(e, r, t[r]);
      }
    }
    if (od) {
      for (var r of od(t)) {
        if (op.call(t, r)) {
          ov(e, r, t[r]);
        }
      }
    }
    return e;
  };
  var o_ = (e, t) => oc(e, of(t));
  let om = (e, t = {}) => {
    if (!e) {
      return "";
    }
    if (!e.trim()) {
      return e;
    }
    let [r, n] = e.match(/{{(.*?)}}/) || [];
    if (e.replace(r, "").trim().length === 0) {
      return oa(t, n.replace(/\s/g, ""));
    } else {
      return e.replace(RegExp("{{(.*?)}}", "gs"), function (e, r) {
        let n = oa(t, r.replace(/\s/g, "").split("."));
        if (typeof n == "object" && n !== null) {
          return JSON.stringify(n);
        } else {
          return n;
        }
      });
    }
  };
  let og = (e, t) => e && typeof e == "object" ? e && typeof e == "object" && "type" in e && e.type === os.EXPRESSION ? om(e.value || "", t) : Array.isArray(e) ? e.map(e => og(e, t)) : Object.fromEntries(Object.entries(e).map(([e, r]) => [e, og(r, t)])) : e;
  let ob = (e, t, r) => {
    var n;
    let {
      type: i,
      children: o,
      directives: a
    } = e;
    let {
      isLastChild: s
    } = r;
    let l = ((e, t) => {
      var r = {};
      for (var n in e) {
        if (oh.call(e, n) && t.indexOf(n) < 0) {
          r[n] = e[n];
        }
      }
      if (e != null && od) {
        for (var n of od(e)) {
          if (t.indexOf(n) < 0 && op.call(e, n)) {
            r[n] = e[n];
          }
        }
      }
      return r;
    })(r, ["isLastChild"]);
    if (a == null ? undefined : a.repeat) {
      let i = a.repeat.value;
      if (a.repeat.type === ol.EXPRESSION) {
        i = om(a.repeat.value || "", o_(oy({}, r.initState), {
          index: r.index,
          item: r.item
        }));
      }
      if (!i) {
        let i = deepCloneWrapper_1.deepClone(e);
        if ((n = i.directives) != null) {
          delete n.repeat;
        }
        return ob(i, t, r);
      }
      let o = i.length - 1;
      return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {
        children: i.map((n, i) => {
          var a;
          if (n == null) {
            return null;
          }
          let s = deepCloneWrapper_1.deepClone(e);
          if ((a = s.directives) != null) {
            delete a.repeat;
          }
          return ob(s, t, o_(oy({}, r), {
            item: n,
            isLast: i === o,
            index: i
          }));
        })
      });
    }
    if (a == null ? undefined : a.condition) {
      let {
        enableType: e,
        expression: t
      } = a.condition;
      if ((e === "hidden" || e === "visible") && t && Object.keys(t).length > 0) {
        let n = boolExpressionEvaluator_1.evalBoolExpression(t, e => om(`{{${e}}}`, o_(oy({}, r.initState), {
          index: r.index,
          item: r.item
        })), r == null ? undefined : r.isLast);
        if (e === "visible" && !n || e === "hidden" && n) {
          return null;
        }
      }
    }
    if (!l.componentLib.getComponent(i)) {
      throw Error("Invalid type in DSL");
    }
    if (l.isLast && s && i.endsWith("Divider")) {
      return null;
    }
    let u = null;
    if (Array.isArray(o) && (o == null ? undefined : o.length) > 0) {
      u = o.map(e => ob(t.elements[e], t, oy({}, l)));
    }
    return ow(l.componentLib.getComponent(i), e, t, o_(oy({}, l), {
      children: u
    }));
  };
  let oO = (e, t = {}, r, n) => {
    var i;
    var o;
    var a;
    var s;
    if (Array.isArray(e)) {
      if (((i = e[0]) == null ? undefined : i.type) === os.SLOT || ((o = e[0]) == null ? undefined : o.type) === os.WORKSPACE_SLOT) {
        return e.map((e, i) => {
          e.type = os.WORKSPACE_SLOT;
          if (e.config) {
            e.config.__index__ = i;
          }
          return oO(e, t, r, n);
        });
      } else {
        return og(e, t);
      }
    } else if ((e == null ? undefined : e.type) === os.SLOT) {
      if ((a = e == null ? undefined : e.children) == null) {
        return undefined;
      } else {
        return a.map((i, o) => ob(r.elements[i], r, oy({
          initState: t,
          item: t == null ? undefined : t.item,
          index: t == null ? undefined : t.index,
          isLastChild: o === (e == null ? undefined : e.children).length - 1
        }, n)));
      }
    } else if ((e == null ? undefined : e.type) === os.WORKSPACE_SLOT) {
      return {
        content: (i, o) => {
          var a;
          if ((a = e == null ? undefined : e.children) == null) {
            return undefined;
          } else {
            return a.map((a, s) => ob(r.elements[a], r, oy({
              initState: t,
              item: typeof o == "number" ? i : t == null ? undefined : t.item,
              index: typeof o == "number" ? o : t == null ? undefined : t.index,
              isLastChild: s === (e == null ? undefined : e.children).length - 1
            }, n)));
          }
        },
        config: Object.entries((e == null ? undefined : e.config) || {}).reduce((e, [i, o]) => {
          if (i !== "__index__") {
            e[i] = oO(o, t, r, n);
          }
          return e;
        }, {}),
        key: (s = e.config) == null ? undefined : s.__index__
      };
    } else {
      return og(e, t);
    }
  };
  let ow = (e, t, r, n) => {
    let {
      props: i = {}
    } = t;
    let o = n == null ? undefined : n.initState;
    let a = Object.entries(i).reduce((e, [t, i]) => {
      try {
        e[t] = oO(i, o_(oy({}, o), {
          item: n == null ? undefined : n.item,
          index: n == null ? undefined : n.index
        }), r, {
          isLast: n == null ? undefined : n.isLast,
          componentLib: n.componentLib,
          commonProps: n.commonProps,
          onContentRendered: n.onContentRendered
        });
      } catch (e) {}
      return e;
    }, {});
    if (t.id !== "root") {
      n.onContentRendered();
    }
    return reactJsxRuntimeCoreReexport.jsx(e, o_(oy(oy({}, n.commonProps), a), {
      blockId: t.id,
      children: (a == null ? undefined : a.children) || (n == null ? undefined : n.children) || null
    }));
  };
  let oC = (e, {
    afterRender: t,
    initState: r,
    componentLib: n,
    onError: i,
    commonProps: o
  }) => {
    let {
      rootID: a
    } = e;
    let s = e.elements[a];
    let l;
    let u = false;
    try {
      l = ob(s, e, {
        afterRender: t,
        initState: r,
        componentLib: n,
        commonProps: o,
        onContentRendered: () => {
          u = true;
        }
      });
    } catch (e) {
      if (i != null) {
        i({
          code: -2,
          msg: `some error happened in dsl parser: ${e.message}`
        });
      }
    }
    if (u) {
      return l;
    } else {
      n.clearRemoteModulesLoadMap();
      return null;
    }
  };
  let oA = e => {
    let t = (e == null ? undefined : e.variables) || {};
    let r = {};
    try {
      Object.keys(t).forEach(e => {
        var n;
        var i;
        var o;
        var a;
        var s;
        if (Array.isArray((n = t == null ? undefined : t[e]) == null ? undefined : n.defaultValue)) {
          r[e] = [...(((i = t == null ? undefined : t[e]) == null ? undefined : i.defaultValue) || [])];
        } else if (typeof ((o = t == null ? undefined : t[e]) == null ? undefined : o.defaultValue) == "object") {
          r[e] = oy({}, ((a = t == null ? undefined : t[e]) == null ? undefined : a.defaultValue) || {});
        } else {
          r[e] = (s = t == null ? undefined : t[e]) == null ? undefined : s.defaultValue;
        }
      });
    } catch (e) {}
    return r;
  };
  let oS = ({
    dsl: e,
    afterRender: t,
    componentLib: r,
    onError: n,
    cardRef: i,
    onElementOver: o,
    onElementOut: a,
    commonProps: s
  }) => {
    let l = oA(e);
    let u = e ? oC(e, {
      afterRender: t,
      initState: l,
      componentLib: r,
      onError: n,
      commonProps: s
    }) : undefined;
    reactCoreLibraryReexport.useEffect(() => {
      if (u !== undefined) {
        if (t != null) {
          t();
        }
      } else {
        u = reactJsxRuntimeCoreReexport.jsx("h1", {
          children: "Something went wrong."
        });
      }
    }, []);
    return reactJsxRuntimeCoreReexport.jsx("div", {
      ref: i,
      style: {
        overflow: "hidden"
      },
      onMouseOver: o,
      onMouseOut: a,
      children: u
    });
  };
  var oj = Object.defineProperty;
  var oE = Object.defineProperties;
  var ox = Object.getOwnPropertyDescriptors;
  var ok = Object.getOwnPropertySymbols;
  var oP = Object.prototype.hasOwnProperty;
  var oN = Object.prototype.propertyIsEnumerable;
  var oL = (e, t, r) => t in e ? oj(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: r
  }) : e[t] = r;
  var oT = (e, t) => {
    for (var r in t ||= {}) {
      if (oP.call(t, r)) {
        oL(e, r, t[r]);
      }
    }
    if (ok) {
      for (var r of ok(t)) {
        if (oN.call(t, r)) {
          oL(e, r, t[r]);
        }
      }
    }
    return e;
  };
  let oD = reactJsxRuntimeCoreReexport.jsx("div", {
    style: {
      zIndex: 1,
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "all"
    }
  });
  let oM = (e, t) => r => {
    var n;
    if (!e) {
      return;
    }
    let i = r.target.closest("[data-link]");
    if (i && ((n = t.current) == null ? undefined : n.contains(i))) {
      e({
        element: i,
        link: i.dataset.link
      });
    }
  };
  var oR = e => {
    let {
      blockPrefix: t,
      dsl: r,
      dependencies: n,
      afterRender: i,
      onError: o,
      remoteForce: a = true,
      region: s = iY.BOE,
      cardRef: l,
      isCoze: u,
      eventCallbacks: c = {},
      components: f,
      debug: d,
      customGetComponent: h,
      readonly: p,
      disabled: v = false,
      theme: y = "light",
      lang: _ = "en"
    } = e || {};
    let [m, g] = reactCoreLibraryReexport.useState(n || null);
    let {
      onLinkElementEnter: b,
      onLinkElementLeave: O
    } = c;
    let w = e => {
      if (o) {
        o(e);
      }
      F(I.card_webruntime_error, e);
    };
    let C = reactCoreLibraryReexport.useRef(null);
    let A = performance.now();
    let S = () => {
      let e = performance.now() - A;
      F(I.card_webruntime_render, {
        duration: e
      });
      if (i) {
        i();
      }
    };
    let j = t || i0[s];
    if (m) {
      ot.init(j, m, {
        remoteForce: a,
        onError: w,
        region: s,
        components: f,
        customGetComponent: h
      });
    }
    reactCoreLibraryReexport.useEffect(() => {
      if (n) {
        g(n);
      }
    }, [n]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!n) {
        (function () {
          var e;
          var t;
          e = this;
          t = function* () {
            let e = yield iQ(u);
            ot.init(j, e, {
              remoteForce: a,
              onError: w,
              region: s,
              components: f,
              customGetComponent: h
            });
            g(e);
          };
          new Promise((r, n) => {
            var i = e => {
              try {
                a(t.next(e));
              } catch (e) {
                n(e);
              }
            };
            var o = e => {
              try {
                a(t.throw(e));
              } catch (e) {
                n(e);
              }
            };
            var a = e => e.done ? r(e.value) : Promise.resolve(e.value).then(i, o);
            a((t = t.apply(e, null)).next());
          });
        })();
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      F(I.card_webruntime_view, {
        type: "exp"
      });
    }, []);
    return reactJsxRuntimeCoreReexport.jsx(on, {
      dsl: r,
      debug: d,
      onError: w,
      children: m ? reactJsxRuntimeCoreReexport.jsxs("div", {
        className: `${y}-theme`,
        style: {
          position: "relative"
        },
        ref: C,
        children: [reactJsxRuntimeCoreReexport.jsx(oS, {
          cardRef: l,
          dsl: r,
          componentLib: ot,
          afterRender: () => {
            or(S);
          },
          onError: w,
          onElementOut: oM(O, C),
          onElementOver: oM(b, C),
          commonProps: oE(oT({}, c), ox({
            disabled: v,
            cardState: r.status || {},
            lang: _
          }))
        }), p ? oD : null]
      }) : null
    });
  };
  require.r(exports);
  require.d(exports, {
    setModuleConfig: function () {
      return e5;
    },
    getTccDeps: function () {
      return iQ;
    },
    ENVS: function () {
      return iY;
    },
    ElementDirectiveType: function () {
      return ol;
    },
    default: function () {
      return oR;
    },
    ElementPropsType: function () {
      return os;
    },
    dependencies: function () {
      return iJ;
    }
  });
  require.r(L);
  require.d(L, {
    ControlType: function () {
      return N;
    },
    CustomMetaPosition: function () {
      return P;
    },
    PageMetaContext: function () {
      return iF;
    },
    RuntimeContext: function () {
      return iI;
    },
    Types: function () {
      return g;
    },
    componentStateModel: function () {
      return iB;
    },
    createBlock: function () {
      return iG;
    },
    createEditor: function () {
      return ty;
    },
    getIsInFesEditor: function () {
      return iq;
    },
    getIsInNclcRuntime: function () {
      return iH;
    },
    isArray: function () {
      return tA;
    },
    isBoolean: function () {
      return tw;
    },
    isCustomizable: function () {
      return tx;
    },
    isEditable: function () {
      return t_;
    },
    isEmptySlot: function () {
      return iM;
    },
    isFunction: function () {
      return tj;
    },
    isNumber: function () {
      return tC;
    },
    isObject: function () {
      return tS;
    },
    isRenderPropsType: function () {
      return tk;
    },
    isString: function () {
      return tO;
    },
    isType: function () {
      return tb;
    },
    isWorkspace: function () {
      return tE;
    },
    useGlobalState: function () {
      return iV;
    },
    useRuntimeContext: function () {
      return i$;
    }
  });
}