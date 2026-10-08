// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'rT' to 'convertToCanvas'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 14702.d6c1bb8c.js
         * chunkId: 14702
         * moduleId: 594034
         */
module.exports = function (module, exports, require) {
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  let a = (() => {
    let e = 0;
    let t = () => `0000${(Math.random() * 1679616 << 0).toString(36)}`.slice(-4);
    return () => {
      e += 1;
      return `u${t()}${e}`;
    };
  })();
  function o(e) {
    let t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      t.push(e[n]);
    }
    return t;
  }
  function l(e, t) {
    let n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
    if (n) {
      return parseFloat(n.replace("px", ""));
    } else {
      return 0;
    }
  }
  function i(e, t = {}) {
    return {
      width: t.width || function (e) {
        let t = l(e, "border-left-width");
        let n = l(e, "border-right-width");
        return e.clientWidth + t + n;
      }(e),
      height: t.height || function (e) {
        let t = l(e, "border-top-width");
        let n = l(e, "border-bottom-width");
        return e.clientHeight + t + n;
      }(e)
    };
  }
  function c(e) {
    return new Promise((t, n) => {
      let r = new Image();
      r.decode = () => t(r);
      r.onload = () => t(r);
      r.onerror = n;
      r.crossOrigin = "anonymous";
      r.decoding = "async";
      r.src = e;
    });
  }
  async function s(e) {
    return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(e => `data:image/svg+xml;charset=utf-8,${e}`);
  }
  async function u(e, t, n) {
    let r = "http://www.w3.org/2000/svg";
    let a = document.createElementNS(r, "svg");
    let o = document.createElementNS(r, "foreignObject");
    a.setAttribute("width", `${t}`);
    a.setAttribute("height", `${n}`);
    a.setAttribute("viewBox", `0 0 ${t} ${n}`);
    o.setAttribute("width", "100%");
    o.setAttribute("height", "100%");
    o.setAttribute("x", "0");
    o.setAttribute("y", "0");
    o.setAttribute("externalResourcesRequired", "true");
    a.appendChild(o);
    o.appendChild(e);
    return s(a);
  }
  let d = (e, t) => {
    if (e instanceof t) {
      return true;
    }
    let n = Object.getPrototypeOf(e);
    return n !== null && (n.constructor.name === t.name || d(n, t));
  };
  function m(e, t, n) {
    let r = window.getComputedStyle(e, n);
    let l = r.getPropertyValue("content");
    if (l === "" || l === "none") {
      return;
    }
    let i = a();
    try {
      t.className = `${t.className} ${i}`;
    } catch (e) {
      return;
    }
    let c = document.createElement("style");
    c.appendChild(function (e, t, n) {
      let r = `.${e}:${t}`;
      let a = n.cssText ? function (e) {
        let t = e.getPropertyValue("content");
        return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
      }(n) : o(n).map(e => {
        let t = n.getPropertyValue(e);
        let r = n.getPropertyPriority(e);
        return `${e}: ${t}${r ? " !important" : ""};`;
      }).join(" ");
      return document.createTextNode(`${r}{${a}}`);
    }(i, n, r));
    t.appendChild(c);
  }
  let p = "application/font-woff";
  let f = "image/jpeg";
  let h = {
    woff: p,
    woff2: p,
    ttf: "application/font-truetype",
    eot: "application/vnd.ms-fontobject",
    png: "image/png",
    jpg: f,
    jpeg: f,
    gif: "image/gif",
    tiff: "image/tiff",
    svg: "image/svg+xml",
    webp: "image/webp"
  };
  function g(e) {
    return h[function (e) {
      let t = /\.([^./]*?)$/g.exec(e);
      if (t) {
        return t[1];
      } else {
        return "";
      }
    }(e).toLowerCase()] || "";
  }
  function w(e) {
    return e.search(/^(data:)/) !== -1;
  }
  function y(e, t) {
    return `data:${t};base64,${e}`;
  }
  async function _(e, t, n) {
    let r = await fetch(e, t);
    if (r.status === 404) {
      throw Error(`Resource "${r.url}" not found`);
    }
    let a = await r.blob();
    return new Promise((e, t) => {
      let o = new FileReader();
      o.onerror = t;
      o.onloadend = () => {
        try {
          e(n({
            res: r,
            result: o.result
          }));
        } catch (e) {
          t(e);
        }
      };
      o.readAsDataURL(a);
    });
  }
  let v = {};
  async function b(e, t, n) {
    var r;
    var a;
    var o;
    let l;
    let i;
    r = e;
    a = t;
    o = n.includeQueryParams;
    i = r.replace(/\?.*/, "");
    if (o) {
      i = r;
    }
    if (/ttf|otf|eot|woff2?/i.test(i)) {
      i = i.replace(/.*\//, "");
    }
    let c = a ? `[${a}]${i}` : i;
    if (v[c] != null) {
      return v[c];
    }
    if (n.cacheBust) {
      e += (/\?/.test(e) ? "&" : "?") + new Date().getTime();
    }
    try {
      let r = await _(e, n.fetchRequestInit, ({
        res: e,
        result: n
      }) => {
        t ||= e.headers.get("Content-Type") || "";
        return n.split(/,/)[1];
      });
      l = y(r, t);
    } catch (r) {
      l = n.imagePlaceholder || "";
      let t = `Failed to fetch resource: ${e}`;
      if (r) {
        if (typeof r != "string") {
          r.message;
        }
      }
    }
    v[c] = l;
    return l;
  }
  async function x(e) {
    let t = e.toDataURL();
    if (t === "data:,") {
      return e.cloneNode(false);
    } else {
      return c(t);
    }
  }
  async function $(e, t) {
    if (e.currentSrc) {
      let t = document.createElement("canvas");
      let n = t.getContext("2d");
      t.width = e.clientWidth;
      t.height = e.clientHeight;
      if (n != null) {
        n.drawImage(e, 0, 0, t.width, t.height);
      }
      return c(t.toDataURL());
    }
    let n = e.poster;
    let r = g(n);
    return c(await b(n, r, t));
  }
  async function R(e) {
    try {
      if ((e == null ? undefined : e.contentDocument)?.body) {
        return await k(e.contentDocument.body, {}, true);
      }
    } catch (e) {}
    return e.cloneNode(false);
  }
  async function C(e, t) {
    if (d(e, HTMLCanvasElement)) {
      return x(e);
    } else if (d(e, HTMLVideoElement)) {
      return $(e, t);
    } else if (d(e, HTMLIFrameElement)) {
      return R(e);
    } else {
      return e.cloneNode(false);
    }
  }
  let S = e => e.tagName != null && e.tagName.toUpperCase() === "SLOT";
  async function E(e, t, n) {
    let l = [];
    if ((l = S(e) && e.assignedNodes ? o(e.assignedNodes()) : d(e, HTMLIFrameElement) && e.contentDocument?.body ? o(e.contentDocument.body.childNodes) : o((e.shadowRoot ?? e).childNodes)).length !== 0 && !d(e, HTMLVideoElement)) {
      await l.reduce((e, r) => e.then(() => k(r, n)).then(e => {
        if (e) {
          t.appendChild(e);
        }
      }), Promise.resolve());
    }
    return t;
  }
  async function T(e, t) {
    let n = e.querySelectorAll ? e.querySelectorAll("use") : [];
    if (n.length === 0) {
      return e;
    }
    let r = {};
    for (let a = 0; a < n.length; a++) {
      let o = n[a].getAttribute("xlink:href");
      if (o) {
        let n = e.querySelector(o);
        let a = document.querySelector(o);
        if (!n && !!a && !r[o]) {
          r[o] = await k(a, t, true);
        }
      }
    }
    let a = Object.values(r);
    if (a.length) {
      let t = "http://www.w3.org/1999/xhtml";
      let n = document.createElementNS(t, "svg");
      n.setAttribute("xmlns", t);
      n.style.position = "absolute";
      n.style.width = "0";
      n.style.height = "0";
      n.style.overflow = "hidden";
      n.style.display = "none";
      let r = document.createElementNS(t, "defs");
      n.appendChild(r);
      for (let e = 0; e < a.length; e++) {
        r.appendChild(a[e]);
      }
      e.appendChild(n);
    }
    return e;
  }
  async function k(e, t, n) {
    if (n || !t.filter || t.filter(e)) {
      return Promise.resolve(e).then(e => C(e, t)).then(n => E(e, n, t)).then(t => function (e, t) {
        if (d(t, Element)) {
          (function (e, t) {
            let n = t.style;
            if (!n) {
              return;
            }
            let r = window.getComputedStyle(e);
            if (r.cssText) {
              n.cssText = r.cssText;
              n.transformOrigin = r.transformOrigin;
            } else {
              o(r).forEach(a => {
                let o = r.getPropertyValue(a);
                if (a === "font-size" && o.endsWith("px")) {
                  let e = Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1;
                  o = `${e}px`;
                }
                if (d(e, HTMLIFrameElement) && a === "display" && o === "inline") {
                  o = "block";
                }
                if (a === "d" && t.getAttribute("d")) {
                  o = `path(${t.getAttribute("d")})`;
                }
                n.setProperty(a, o, r.getPropertyPriority(a));
              });
            }
          })(e, t);
          m(e, t, ":before");
          m(e, t, ":after");
          if (d(e, HTMLTextAreaElement)) {
            t.innerHTML = e.value;
          }
          if (d(e, HTMLInputElement)) {
            t.setAttribute("value", e.value);
          }
          (function (e, t) {
            if (d(e, HTMLSelectElement)) {
              let n = Array.from(t.children).find(t => e.value === t.getAttribute("value"));
              if (n) {
                n.setAttribute("selected", "");
              }
            }
          })(e, t);
        }
        return t;
      }(e, t)).then(e => T(e, t));
    } else {
      return null;
    }
  }
  let N = /url\((['"]?)([^'"]+?)\1\)/g;
  let j = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
  let F = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
  async function M(e, t, n, r, a) {
    try {
      let o;
      let l = n ? function (e, t) {
        if (e.match(/^[a-z]+:\/\//i)) {
          return e;
        }
        if (e.match(/^\/\//)) {
          return window.location.protocol + e;
        }
        if (e.match(/^[a-z]+:/i)) {
          return e;
        }
        let n = document.implementation.createHTMLDocument();
        let r = n.createElement("base");
        let a = n.createElement("a");
        n.head.appendChild(r);
        n.body.appendChild(a);
        if (t) {
          r.href = t;
        }
        a.href = e;
        return a.href;
      }(t, n) : t;
      let i = g(t);
      if (a) {
        let e = await a(l);
        o = y(e, i);
      } else {
        o = await b(l, i, r);
      }
      return e.replace(function (e) {
        let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
        return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
      }(t), `$1${o}$3`);
    } catch (e) {}
    return e;
  }
  function Z(e) {
    return e.search(N) !== -1;
  }
  async function D(e, t, n) {
    if (!Z(e)) {
      return e;
    }
    let r = function (e, {
      preferredFontFormat: t
    }) {
      if (t) {
        return e.replace(F, e => {
          while (true) {
            let [n,, r] = j.exec(e) || [];
            if (!r) {
              return "";
            }
            if (r === t) {
              return `src: ${n};`;
            }
          }
        });
      } else {
        return e;
      }
    }(e, n);
    return function (e) {
      let t = [];
      e.replace(N, (e, n, r) => {
        t.push(r);
        return e;
      });
      return t.filter(e => !w(e));
    }(r).reduce((e, r) => e.then(e => M(e, r, t, n)), Promise.resolve(r));
  }
  async function W(e, t, n) {
    var r;
    let a = (r = t.style) === null || r === undefined ? undefined : r.getPropertyValue(e);
    if (a) {
      let r = await D(a, null, n);
      t.style.setProperty(e, r, t.style.getPropertyPriority(e));
      return true;
    }
    return false;
  }
  async function O(e, t) {
    if (!(await W("background", e, t))) {
      await W("background-image", e, t);
    }
    if (!(await W("mask", e, t))) {
      await W("mask-image", e, t);
    }
  }
  async function P(e, t) {
    let n = d(e, HTMLImageElement);
    if ((!n || !!w(e.src)) && (!d(e, SVGImageElement) || !!w(e.href.baseVal))) {
      return;
    }
    let r = n ? e.src : e.href.baseVal;
    let a = await b(r, g(r), t);
    await new Promise((t, r) => {
      e.onload = t;
      e.onerror = r;
      e.decode &&= t;
      if (e.loading === "lazy") {
        e.loading = "eager";
      }
      if (n) {
        e.srcset = "";
        e.src = a;
      } else {
        e.href.baseVal = a;
      }
    });
  }
  async function I(e, t) {
    let n = o(e.childNodes).map(e => A(e, t));
    await Promise.all(n).then(() => e);
  }
  async function A(e, t) {
    if (d(e, Element)) {
      await O(e, t);
      await P(e, t);
      await I(e, t);
    }
  }
  let H = {};
  async function L(e) {
    let t = H[e];
    if (t != null) {
      return t;
    }
    let n = await fetch(e);
    t = {
      url: e,
      cssText: await n.text()
    };
    H[e] = t;
    return t;
  }
  async function B(e, t) {
    let n = e.cssText;
    let r = /url\(["']?([^"')]+)["']?\)/g;
    return Promise.all((n.match(/url\([^)]+\)/g) || []).map(async a => {
      let o = a.replace(r, "$1");
      if (!o.startsWith("https://")) {
        o = new URL(o, e.url).href;
      }
      return _(o, t.fetchRequestInit, ({
        result: e
      }) => {
        n = n.replace(a, `url(${e})`);
        return [a, e];
      });
    })).then(() => n);
  }
  function z(e) {
    if (e == null) {
      return [];
    }
    let t = [];
    let n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
    let r = RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
    while (true) {
      let e = r.exec(n);
      if (e === null) {
        break;
      }
      t.push(e[0]);
    }
    n = n.replace(r, "");
    let a = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
    let o = RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
    while (true) {
      let e = a.exec(n);
      if (e === null) {
        if ((e = o.exec(n)) === null) {
          break;
        }
        a.lastIndex = o.lastIndex;
      } else {
        o.lastIndex = a.lastIndex;
      }
      t.push(e[0]);
    }
    return t;
  }
  async function X(e, t) {
    let n = [];
    let r = [];
    e.forEach(n => {
      if ("cssRules" in n) {
        try {
          o(n.cssRules || []).forEach((e, a) => {
            if (e.type === CSSRule.IMPORT_RULE) {
              let o = a + 1;
              let l = e.href;
              let i = L(l).then(e => B(e, t)).then(e => z(e).forEach(e => {
                try {
                  n.insertRule(e, e.startsWith("@import") ? o += 1 : n.cssRules.length);
                } catch (e) {}
              })).catch(e => {});
              r.push(i);
            }
          });
        } catch (o) {
          let a = e.find(e => e.href == null) || document.styleSheets[0];
          if (n.href != null) {
            r.push(L(n.href).then(e => B(e, t)).then(e => z(e).forEach(e => {
              a.insertRule(e, n.cssRules.length);
            })).catch(e => {}));
          }
        }
      }
    });
    return Promise.all(r).then(() => {
      e.forEach(e => {
        if ("cssRules" in e) {
          try {
            o(e.cssRules || []).forEach(e => {
              n.push(e);
            });
          } catch (e) {}
        }
      });
      return n;
    });
  }
  async function U(e, t) {
    if (e.ownerDocument == null) {
      throw Error("Provided element is not within a Document");
    }
    let n = o(e.ownerDocument.styleSheets);
    return (await X(n, t)).filter(e => e.type === CSSRule.FONT_FACE_RULE).filter(e => Z(e.style.getPropertyValue("src")));
  }
  async function J(e, t) {
    let n = await U(e, t);
    return (await Promise.all(n.map(e => {
      let n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
      return D(e.cssText, n, t);
    }))).join("\n");
  }
  async function q(e, t) {
    let n = t.fontEmbedCSS ?? (t.skipFonts ? null : await J(e, t));
    if (n) {
      let t = document.createElement("style");
      let r = document.createTextNode(n);
      t.appendChild(r);
      if (e.firstChild) {
        e.insertBefore(t, e.firstChild);
      } else {
        e.appendChild(t);
      }
    }
  }
  async function V(e, t = {}) {
    let {
      width: n,
      height: r
    } = i(e, t);
    let a = await k(e, t, true);
    await q(a, t);
    await A(a, t);
    (function (e, t) {
      let {
        style: n
      } = e;
      if (t.backgroundColor) {
        n.backgroundColor = t.backgroundColor;
      }
      if (t.width) {
        n.width = `${t.width}px`;
      }
      if (t.height) {
        n.height = `${t.height}px`;
      }
      let r = t.style;
      if (r != null) {
        Object.keys(r).forEach(e => {
          n[e] = r[e];
        });
      }
    })(a, t);
    return await u(a, n, r);
  }
  async function Q(e, t = {}) {
    let {
      width: n,
      height: a
    } = i(e, t);
    let o = await V(e, t);
    let l = await c(o);
    let s = document.createElement("canvas");
    let u = s.getContext("2d");
    let d = t.pixelRatio || function () {
      let e;
      let t;
      try {
        t = processBrowserShim;
      } catch (e) {}
      let n = t && t.env ? t.env.devicePixelRatio : null;
      if (n && Number.isNaN(e = parseInt(n, 10))) {
        e = 1;
      }
      return e || window.devicePixelRatio || 1;
    }();
    let m = t.canvasWidth || n;
    let p = t.canvasHeight || a;
    s.width = m * d;
    s.height = p * d;
    if (!t.skipAutoScale) {
      if (s.width > 16384 || s.height > 16384) {
        if (s.width > 16384 && s.height > 16384) {
          if (s.width > s.height) {
            s.height *= 16384 / s.width;
            s.width = 16384;
          } else {
            s.width *= 16384 / s.height;
            s.height = 16384;
          }
        } else if (s.width > 16384) {
          s.height *= 16384 / s.width;
          s.width = 16384;
        } else {
          s.width *= 16384 / s.height;
          s.height = 16384;
        }
      }
    }
    s.style.width = `${m}`;
    s.style.height = `${p}`;
    if (t.backgroundColor) {
      u.fillStyle = t.backgroundColor;
      u.fillRect(0, 0, s.width, s.height);
    }
    u.drawImage(l, 0, 0, s.width, s.height);
    return s;
  }
  require.d(exports, {
    convertToCanvas: function () {
      return Q;
    }
  });
}