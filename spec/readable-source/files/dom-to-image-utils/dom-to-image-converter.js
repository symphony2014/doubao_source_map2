// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27139.0cd87021.js
         * chunkId: 27139
         * moduleId: 977249
         */
module.exports = function (module, exports, require) {
  let o;
  function a(e, t) {
    e[13] = 1;
    e[14] = t >> 8;
    e[15] = t & 255;
    e[16] = t >> 8;
    e[17] = t & 255;
    return e;
  }
  function i(e, t, r = false) {
    let n = new Uint8Array(13);
    t *= 39.3701;
    n[0] = 112;
    n[1] = 72;
    n[2] = 89;
    n[3] = 115;
    n[4] = t >>> 24;
    n[5] = t >>> 16;
    n[6] = t >>> 8;
    n[7] = t & 255;
    n[8] = n[4];
    n[9] = n[5];
    n[10] = n[6];
    n[11] = n[7];
    n[12] = 1;
    let a = function (e) {
      let t = -1;
      o ||= function () {
        let e = new Int32Array(256);
        for (let t = 0; t < 256; t++) {
          let r = t;
          for (let e = 0; e < 8; e++) {
            r = r & 1 ? r >>> 1 ^ -306674912 : r >>> 1;
          }
          e[t] = r;
        }
        return e;
      }();
      for (let r = 0; r < e.length; r++) {
        t = o[(t ^ e[r]) & 255] ^ t >>> 8;
      }
      return t ^ -1;
    }(n);
    let i = new Uint8Array(4);
    i[0] = a >>> 24;
    i[1] = a >>> 16;
    i[2] = a >>> 8;
    i[3] = a & 255;
    if (r) {
      let t = function (e) {
        let t = e.length - 1;
        for (let r = t; r >= 4; r--) {
          if (e[r - 4] === 9 && e[r - 3] === 112 && e[r - 2] === 72 && e[r - 1] === 89 && e[r] === 115) {
            return r - 3;
          }
        }
        return 0;
      }(e);
      e.set(n, t);
      e.set(i, t + 13);
      return e;
    }
    {
      let t = new Uint8Array(4);
      t[0] = 0;
      t[1] = 0;
      t[2] = 0;
      t[3] = 9;
      let r = new Uint8Array(54);
      r.set(e, 0);
      r.set(t, 33);
      r.set(n, 37);
      r.set(i, 50);
      return r;
    }
  }
  let l = typeof window != "undefined";
  let c = l && "Worker" in window;
  let u = l && "atob" in window;
  let s = l && "btoa" in window;
  let d = l ? window.navigator?.userAgent : "";
  let f = d.includes("Chrome");
  let h = d.includes("AppleWebKit") && !f;
  let m = d.includes("Firefox");
  let g = e => e && "__CONTEXT__" in e;
  let p = e => e.constructor.name === "CSSFontFaceRule";
  let w = e => e.constructor.name === "CSSImportRule";
  let y = e => e.nodeType === 1;
  let v = e => typeof e.className == "object";
  let b = e => e.tagName === "image";
  let _ = e => e.tagName === "use";
  let x = e => y(e) && e.style !== undefined && !v(e);
  let S = e => e.nodeType === 8;
  let E = e => e.nodeType === 3;
  let C = e => e.tagName === "IMG";
  let $ = e => e.tagName === "VIDEO";
  let T = e => e.tagName === "CANVAS";
  let A = e => e.tagName === "TEXTAREA";
  let k = e => e.tagName === "INPUT";
  let N = e => e.tagName === "STYLE";
  let R = e => e.tagName === "SCRIPT";
  let F = e => e.tagName === "SELECT";
  let j = e => e.tagName === "SLOT";
  let P = e => e.tagName === "IFRAME";
  let D = function () {
    var e = arguments.length;
    var t = Array(e);
    var r = 0;
    for (; r < e; r++) {
      t[r] = arguments[r];
    }
  };
  let I = e => e.startsWith("data:");
  function M(e, t) {
    if (e.match(/^[a-z]+:\/\//i)) {
      return e;
    }
    if (l && e.match(/^\/\//)) {
      return window.location.protocol + e;
    }
    if (e.match(/^[a-z]+:/i) || !l) {
      return e;
    }
    let r = O().implementation.createHTMLDocument();
    let n = r.createElement("base");
    let o = r.createElement("a");
    r.head.appendChild(n);
    r.body.appendChild(o);
    if (t) {
      n.href = t;
    }
    o.href = e;
    return o.href;
  }
  function O(e) {
    return (e && y(e) ? e == null ? undefined : e.ownerDocument : e) ?? window.document;
  }
  let B = "http://www.w3.org/2000/svg";
  function L(e, t, r) {
    let n = O(r).createElementNS(B, "svg");
    n.setAttributeNS(null, "width", e.toString());
    n.setAttributeNS(null, "height", t.toString());
    n.setAttributeNS(null, "viewBox", `0 0 ${e} ${t}`);
    return n;
  }
  function W(e, t) {
    let r = new XMLSerializer().serializeToString(e);
    if (t) {
      r = r.replace(/[\u0000-\u0008\v\f\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/gu, "");
    }
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(r)}`;
  }
  async function z(e, t = "image/png", r = 1) {
    try {
      return await new Promise((n, o) => {
        e.toBlob(e => {
          if (e) {
            n(e);
          } else {
            o(Error("Blob is null"));
          }
        }, t, r);
      });
    } catch (n) {
      if (u) {
        return function (e) {
          let [n, o] = e.split(",");
          let a = n.match(/data:(.+);/)?.[1] ?? undefined;
          let i = window.atob(o);
          let l = i.length;
          let c = new Uint8Array(l);
          for (let e = 0; e < l; e += 1) {
            c[e] = i.charCodeAt(e);
          }
          return new Blob([c], {
            type: a
          });
        }(e.toDataURL(t, r));
      }
      throw n;
    }
  }
  function U(e, t) {
    return new Promise((r, n) => {
      let o = new FileReader();
      o.onload = () => r(o.result);
      o.onerror = () => n(o.error);
      o.onabort = () => n(Error(`Failed read blob to ${t}`));
      if (t === "dataUrl") {
        o.readAsDataURL(e);
      } else if (t === "arrayBuffer") {
        o.readAsArrayBuffer(e);
      }
    });
  }
  let H = e => U(e, "dataUrl");
  let Z = e => U(e, "arrayBuffer");
  function q(e, t) {
    let r = O(t).createElement("img");
    r.decoding = "sync";
    r.loading = "eager";
    r.src = e;
    return r;
  }
  function V(e, t) {
    return new Promise(r => {
      let {
        timeout: n,
        ownerDocument: o,
        onError: a,
        onWarn: i
      } = t ?? {};
      let l = typeof e == "string" ? q(e, O(o)) : e;
      let c = null;
      let u = null;
      function s() {
        r(l);
        if (c) {
          clearTimeout(c);
        }
        if (u != null) {
          u();
        }
      }
      if (n) {
        c = setTimeout(s, n);
      }
      if ($(l)) {
        let e = l.currentSrc || l.src;
        if (!e) {
          if (l.poster) {
            return V(l.poster, t).then(r);
          } else {
            return s();
          }
        }
        if (l.readyState >= 2) {
          return s();
        }
        let n = t => {
          if (i != null) {
            i("Failed video load", e, t);
          }
          if (a != null) {
            a(t);
          }
          s();
        };
        u = () => {
          l.removeEventListener("loadeddata", s);
          l.removeEventListener("error", n);
        };
        l.addEventListener("loadeddata", s, {
          once: true
        });
        l.addEventListener("error", n, {
          once: true
        });
      } else {
        let e = b(l) ? l.href.baseVal : l.currentSrc || l.src;
        if (!e) {
          return s();
        }
        let t = async () => {
          if (C(l) && "decode" in l) {
            try {
              await l.decode();
            } catch (t) {
              if (i != null) {
                i("Failed to decode image, trying to render anyway", l.dataset.originalSrc || e, t);
              }
            }
          }
          s();
        };
        let r = t => {
          if (i != null) {
            i("Failed image load", l.dataset.originalSrc || e, t);
          }
          s();
        };
        if (C(l) && l.complete) {
          return t();
        }
        u = () => {
          l.removeEventListener("load", t);
          l.removeEventListener("error", r);
        };
        l.addEventListener("load", t, {
          once: true
        });
        l.addEventListener("error", r, {
          once: true
        });
      }
    });
  }
  async function X(e, t) {
    if (x(e)) {
      if (C(e) || $(e)) {
        await V(e, t);
      } else {
        await Promise.all(["img", "video"].flatMap(r => Array.from(e.querySelectorAll(r)).map(e => V(e, t))));
      }
    }
  }
  let J = function () {
    let e = 0;
    let t = () => `0000${(Math.random() * 1679616 << 0).toString(36)}`.slice(-4);
    return () => {
      e += 1;
      return `u${t()}${e}`;
    };
  }();
  function K(e) {
    if (e == null) {
      return undefined;
    } else {
      return e.split(",").map(e => e.trim().replace(/"|'/g, "").toLowerCase()).filter(Boolean);
    }
  }
  let Q = 0;
  async function G(e, t) {
    if (g(e)) {
      return e;
    } else {
      return Y(e, {
        ...t,
        autoDestruct: true
      });
    }
  }
  async function Y(e, t) {
    var o;
    let {
      scale: u = 1,
      workerUrl: s,
      workerNumber: d = 1
    } = t || {};
    let f = !!(t == null ? undefined : t.debug);
    let h = (o = t == null ? undefined : t.features) === null || o === undefined || o;
    let m = e.ownerDocument ?? (l ? window.document : undefined);
    let g = e.ownerDocument?.defaultView ?? (l ? window : undefined);
    let p = new Map();
    let w = {
      width: 0,
      height: 0,
      quality: 1,
      type: "image/png",
      scale: u,
      backgroundColor: null,
      style: null,
      filter: null,
      maximumCanvasSize: 0,
      timeout: 30000,
      progress: null,
      debug: f,
      fetch: {
        requestInit: {
          cache: (t == null ? undefined : t.fetch?.bypassingCache) ? "no-cache" : "force-cache"
        },
        placeholderImage: "data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        bypassingCache: false,
        ...(t == null ? undefined : t.fetch)
      },
      fetchFn: null,
      font: {},
      drawImageInterval: 100,
      workerUrl: null,
      workerNumber: d,
      onCloneEachNode: null,
      onCloneNode: null,
      onEmbedNode: null,
      onCreateForeignObjectSvg: null,
      includeStyleProperties: null,
      autoDestruct: false,
      ...t,
      __CONTEXT__: true,
      log: (Q++, {
        time: e => f && undefined,
        timeEnd: e => f && undefined,
        warn: function () {
          var e = arguments.length;
          var t = Array(e);
          var r = 0;
          for (; r < e; r++) {
            t[r] = arguments[r];
          }
          return f && D(...t);
        }
      }),
      node: e,
      ownerDocument: m,
      ownerWindow: g,
      dpi: u === 1 ? null : u * 96,
      svgStyleElement: ee(m),
      svgDefsElement: m == null ? undefined : m.createElementNS(B, "defs"),
      svgStyles: new Map(),
      defaultComputedStyles: new Map(),
      workers: [...Array.from({
        length: c && s && d ? d : 0
      })].map(() => {
        try {
          let e = new Worker(s);
          e.onmessage = async e => {
            var t;
            var r;
            var n;
            var o;
            let {
              url: a,
              result: i
            } = e.data;
            if (i) {
              if ((r = p.get(a)) !== null && r !== undefined && (t = r.resolve) !== null && t !== undefined) {
                t.call(r, i);
              }
            } else if ((o = p.get(a)) !== null && o !== undefined && (n = o.reject) !== null && n !== undefined) {
              n.call(o, Error(`Error receiving message from worker: ${a}`));
            }
          };
          e.onmessageerror = e => {
            var t;
            var r;
            let {
              url: n
            } = e.data;
            if ((r = p.get(n)) !== null && r !== undefined && (t = r.reject) !== null && t !== undefined) {
              t.call(r, Error(`Error receiving message from worker: ${n}`));
            }
          };
          return e;
        } catch (e) {
          w.log.warn("Failed to new Worker", e);
          return null;
        }
      }).filter(Boolean),
      fontFamilies: new Map(),
      fontCssTexts: new Map(),
      acceptOfImage: `${[function (e) {
        var t;
        let r = e == null ? undefined : (t = e.createElement) === null || t === undefined ? undefined : t.call(e, "canvas");
        if (r) {
          r.height = r.width = 1;
        }
        return !!r && "toDataURL" in r && !!r.toDataURL("image/webp").includes("image/webp");
      }(m) && "image/webp", "image/svg+xml", "image/*", "*/*"].filter(Boolean).join(",")};q=0.8`,
      requests: p,
      drawImageCount: 0,
      tasks: [],
      features: h,
      isEnable: e => {
        var t;
        var r;
        if (e === "restoreScrollPosition") {
          return typeof h != "boolean" && (t = h[e]) !== null && t !== undefined && t;
        } else if (typeof h == "boolean") {
          return h;
        } else {
          return (r = h[e]) === null || r === undefined || r;
        }
      },
      shadowRoots: []
    };
    w.log.time("wait until load");
    await X(e, {
      timeout: w.timeout,
      onWarn: w.log.warn
    });
    w.log.timeEnd("wait until load");
    let {
      width: v,
      height: b
    } = function (e, t) {
      let {
        width: r,
        height: n
      } = t;
      if (y(e) && (!r || !n)) {
        let t = e.getBoundingClientRect();
        r = r || t.width || Number(e.getAttribute("width")) || 0;
        n = n || t.height || Number(e.getAttribute("height")) || 0;
      }
      return {
        width: r,
        height: n
      };
    }(e, w);
    w.width = v;
    w.height = b;
    return w;
  }
  function ee(e) {
    if (!e) {
      return;
    }
    let t = e.createElement("style");
    let r = t.ownerDocument.createTextNode(`
.______background-clip--text {
  background-clip: text;
  -webkit-background-clip: text;
}
`);
    t.appendChild(r);
    return t;
  }
  async function et(e, t) {
    let {
      log: r,
      timeout: n,
      drawImageCount: o,
      drawImageInterval: a
    } = t;
    r.time("image to canvas");
    let i = await V(e, {
      timeout: n,
      onWarn: t.log.warn
    });
    let {
      canvas: l,
      context2d: c
    } = function (e, t) {
      let {
        width: r,
        height: n,
        scale: o,
        backgroundColor: a,
        maximumCanvasSize: i
      } = t;
      let l = e.createElement("canvas");
      l.width = Math.floor(r * o);
      l.height = Math.floor(n * o);
      l.style.width = `${r}px`;
      l.style.height = `${n}px`;
      if (i && (l.width > i || l.height > i)) {
        if (l.width > i && l.height > i) {
          if (l.width > l.height) {
            l.height *= i / l.width;
            l.width = i;
          } else {
            l.width *= i / l.height;
            l.height = i;
          }
        } else if (l.width > i) {
          l.height *= i / l.width;
          l.width = i;
        } else {
          l.width *= i / l.height;
          l.height = i;
        }
      }
      let c = l.getContext("2d");
      if (c && a) {
        c.fillStyle = a;
        c.fillRect(0, 0, l.width, l.height);
      }
      return {
        canvas: l,
        context2d: c
      };
    }(e.ownerDocument, t);
    let u = () => {
      try {
        if (c != null) {
          c.drawImage(i, 0, 0, l.width, l.height);
        }
      } catch (e) {
        t.log.warn("Failed to drawImage", e);
      }
    };
    u();
    if (t.isEnable("fixSvgXmlDecode")) {
      for (let e = 0; e < o; e++) {
        await new Promise(t => {
          setTimeout(() => {
            if (c != null) {
              c.clearRect(0, 0, l.width, l.height);
            }
            u();
            t();
          }, e + a);
        });
      }
    }
    t.drawImageCount = 0;
    r.timeEnd("image to canvas");
    return l;
  }
  function er(e, t) {
    if (e.ownerDocument) {
      try {
        let t = e.toDataURL();
        if (t !== "data:,") {
          return q(t, e.ownerDocument);
        }
      } catch (e) {
        t.log.warn("Failed to clone canvas", e);
      }
    }
    let r = e.cloneNode(false);
    let n = e.getContext("2d");
    let o = r.getContext("2d");
    try {
      if (n && o) {
        o.putImageData(n.getImageData(0, 0, e.width, e.height), 0, 0);
      }
    } catch (e) {
      t.log.warn("Failed to clone canvas", e);
    }
    return r;
  }
  async function en(e, t) {
    if (e.ownerDocument && !e.currentSrc && e.poster) {
      return q(e.poster, e.ownerDocument);
    }
    let r = e.cloneNode(false);
    r.crossOrigin = "anonymous";
    if (e.currentSrc && e.currentSrc !== e.src) {
      r.src = e.currentSrc;
    }
    let n = r.ownerDocument;
    if (n) {
      let o = true;
      await V(r, {
        onError: () => o = false,
        onWarn: t.log.warn
      });
      if (!o) {
        if (e.poster) {
          return q(e.poster, e.ownerDocument);
        } else {
          return r;
        }
      }
      r.currentTime = e.currentTime;
      await new Promise(e => {
        r.addEventListener("seeked", e, {
          once: true
        });
      });
      let a = n.createElement("canvas");
      a.width = e.offsetWidth;
      a.height = e.offsetHeight;
      try {
        let e = a.getContext("2d");
        if (e) {
          e.drawImage(r, 0, 0, a.width, a.height);
        }
      } catch (n) {
        t.log.warn("Failed to clone video", n);
        if (e.poster) {
          return q(e.poster, e.ownerDocument);
        }
        return r;
      }
      return er(a, t);
    }
    return r;
  }
  let eo = ["width", "height", "-webkit-text-fill-color"];
  let ea = ["stroke", "fill"];
  function ei(e, t, r) {
    let n;
    let o;
    let {
      defaultComputedStyles: a
    } = r;
    let i = e.nodeName.toLowerCase();
    let l = v(e) && i !== "svg";
    let c = l ? ea.map(t => [t, e.getAttribute(t)]).filter(e => {
      let [, t] = e;
      return t !== null;
    }) : [];
    let u = [l && "svg", i, c.map((e, t) => `${e}=${t}`).join(","), t].filter(Boolean).join(":");
    if (a.has(u)) {
      return a.get(u);
    }
    let s = function (e) {
      let t = e.sandbox;
      if (!t) {
        let {
          ownerDocument: r
        } = e;
        try {
          if (r) {
            (t = r.createElement("iframe")).id = `__SANDBOX__${J()}`;
            t.width = "0";
            t.height = "0";
            t.style.visibility = "hidden";
            t.style.position = "fixed";
            r.body.appendChild(t);
            t.srcdoc = "<!DOCTYPE html><meta charset=\"UTF-8\"><title></title><body>";
            e.sandbox = t;
          }
        } catch (t) {
          e.log.warn("Failed to getSandBox", t);
        }
      }
      return t;
    }(r);
    let d = s == null ? undefined : s.contentWindow;
    if (!d) {
      return new Map();
    }
    let f = d == null ? undefined : d.document;
    if (l) {
      o = (n = f.createElementNS(B, "svg")).ownerDocument.createElementNS(n.namespaceURI, i);
      c.forEach(e => {
        let [t, r] = e;
        o.setAttributeNS(null, t, r);
      });
      n.appendChild(o);
    } else {
      n = o = f.createElement(i);
    }
    o.textContent = " ";
    f.body.appendChild(n);
    let h = d.getComputedStyle(o, t);
    let m = new Map();
    for (let e = h.length, t = 0; t < e; t++) {
      let e = h.item(t);
      if (!eo.includes(e)) {
        m.set(e, h.getPropertyValue(e));
      }
    }
    f.body.removeChild(n);
    a.set(u, m);
    return m;
  }
  function el(e, t, r) {
    let n = new Map();
    let o = [];
    let a = new Map();
    if (r) {
      for (let e of r) {
        l(e);
      }
    } else {
      for (let t = e.length, r = 0; r < t; r++) {
        l(e.item(r));
      }
    }
    for (let e = o.length, t = 0; t < e; t++) {
      var i;
      if ((i = a.get(o[t])) !== null && i !== undefined) {
        i.forEach((e, t) => n.set(t, e));
      }
    }
    function l(r) {
      let i = e.getPropertyValue(r);
      let l = e.getPropertyPriority(r);
      let c = r.lastIndexOf("-");
      let u = c > -1 ? r.substring(0, c) : undefined;
      if (u) {
        let e = a.get(u);
        if (!e) {
          e = new Map();
          a.set(u, e);
        }
        e.set(r, [i, l]);
      }
      if (t.get(r) !== i || l) {
        if (u) {
          o.push(u);
        } else {
          n.set(r, [i, l]);
        }
      }
    }
    return n;
  }
  let ec = ["::before", "::after"];
  let eu = ["::-webkit-scrollbar", "::-webkit-scrollbar-button", "::-webkit-scrollbar-thumb", "::-webkit-scrollbar-track", "::-webkit-scrollbar-track-piece", "::-webkit-scrollbar-corner", "::-webkit-resizer"];
  let es = new Set(["symbol"]);
  async function ed(e, t, r, n, o) {
    if (y(r) && (N(r) || R(r)) || n.filter && !n.filter(r)) {
      return;
    }
    if (es.has(t.nodeName) || es.has(r.nodeName)) {
      n.currentParentNodeStyle = undefined;
    } else {
      n.currentParentNodeStyle = n.currentNodeStyle;
    }
    let a = await em(r, n, false, o);
    if (n.isEnable("restoreScrollPosition")) {
      (function (e, t) {
        if (!x(e) || !x(t)) {
          return;
        }
        let {
          scrollTop: r,
          scrollLeft: n
        } = e;
        if (!r && !n) {
          return;
        }
        let {
          transform: o
        } = t.style;
        let a = new DOMMatrix(o);
        let {
          a: i,
          b: l,
          c,
          d: u
        } = a;
        a.a = 1;
        a.b = 0;
        a.c = 0;
        a.d = 1;
        a.translateSelf(-n, -r);
        a.a = i;
        a.b = l;
        a.c = c;
        a.d = u;
        t.style.transform = a.toString();
      })(e, a);
    }
    t.appendChild(a);
  }
  async function ef(e, t, r, n) {
    let o = e.firstChild;
    if (y(e) && e.shadowRoot) {
      o = e.shadowRoot?.firstChild;
      r.shadowRoots.push(e.shadowRoot);
    }
    for (let a = o; a; a = a.nextSibling) {
      if (!S(a)) {
        if (y(a) && j(a) && typeof a.assignedNodes == "function") {
          let o = a.assignedNodes();
          for (let a = 0; a < o.length; a++) {
            await ed(e, t, o[a], r, n);
          }
        } else {
          await ed(e, t, a, r, n);
        }
      }
    }
  }
  let eh = /^[\w-:]+$/;
  async function em(e, t, r = false, n) {
    let {
      ownerDocument: o,
      ownerWindow: a,
      fontFamilies: i,
      onCloneEachNode: l
    } = t;
    if (o && E(e)) {
      if (n && /\S/.test(e.data)) {
        n(e.data);
      }
      return o.createTextNode(e.data);
    }
    if (o && a && y(e) && (x(e) || v(e))) {
      let n = await (T(e) ? er(e, t) : P(e) ? function (e, t) {
        try {
          if (e == null ? undefined : e.contentDocument?.body) {
            return em(e.contentDocument.body, t);
          }
        } catch (e) {
          t.log.warn("Failed to clone iframe", e);
        }
        return e.cloneNode(false);
      }(e, t) : C(e) ? function (e) {
        let t = e.cloneNode(false);
        if (e.currentSrc && e.currentSrc !== e.src) {
          t.src = e.currentSrc;
          t.srcset = "";
        }
        if (t.loading === "lazy") {
          t.loading = "eager";
        }
        return t;
      }(e) : $(e) ? en(e, t) : e.cloneNode(false));
      if (t.isEnable("removeAbnormalAttributes")) {
        let e = n.getAttributeNames();
        for (let t = e.length, r = 0; r < t; r++) {
          let t = e[r];
          if (!eh.test(t)) {
            n.removeAttribute(t);
          }
        }
      }
      let o = t.currentNodeStyle = function (e, t, r, n) {
        let {
          ownerWindow: c,
          includeStyleProperties: u,
          currentParentNodeStyle: s
        } = n;
        let d = t.style;
        let h = c.getComputedStyle(e);
        let m = ei(e, null, n);
        if (s != null) {
          s.forEach((e, t) => {
            m.delete(t);
          });
        }
        let g = el(h, m, u);
        g.delete("transition-property");
        g.delete("all");
        g.delete("d");
        g.delete("content");
        if (r) {
          g.delete("margin-top");
          g.delete("margin-right");
          g.delete("margin-bottom");
          g.delete("margin-left");
          g.delete("margin-block-start");
          g.delete("margin-block-end");
          g.delete("margin-inline-start");
          g.delete("margin-inline-end");
          g.set("box-sizing", ["border-box", ""]);
        }
        if (g.get("background-clip")?.[0] === "text") {
          t.classList.add("______background-clip--text");
        }
        if (f) {
          if (!g.has("font-kerning")) {
            g.set("font-kerning", ["normal", ""]);
          }
          if ((g.get("overflow-x")?.[0] === "hidden" || g.get("overflow-y")?.[0] === "hidden") && g.get("text-overflow")?.[0] === "ellipsis" && e.scrollWidth === e.clientWidth) {
            g.set("text-overflow", ["clip", ""]);
          }
        }
        for (let e = d.length, t = 0; t < e; t++) {
          d.removeProperty(d.item(t));
        }
        g.forEach((e, t) => {
          let [r, n] = e;
          d.setProperty(t, r, n);
        });
        return g;
      }(e, n, r, t);
      if (r) {
        (function (e, t) {
          let {
            backgroundColor: r,
            width: n,
            height: o,
            style: a
          } = t;
          let i = e.style;
          if (r) {
            i.setProperty("background-color", r, "important");
          }
          if (n) {
            i.setProperty("width", `${n}px`, "important");
          }
          if (o) {
            i.setProperty("height", `${o}px`, "important");
          }
          if (a) {
            for (let e in a) {
              i[e] = a[e];
            }
          }
        })(n, t);
      }
      let a = false;
      if (t.isEnable("copyScrollbar")) {
        let t = [o.get("overflow-x")?.[0], o.get("overflow-y")?.[0]];
        a = t.includes("scroll") || (t.includes("auto") || t.includes("overlay")) && (e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
      }
      let h = o.get("text-transform")?.[0];
      let m = K(o.get("font-family")?.[0]);
      let g = m ? e => {
        if (h === "uppercase") {
          e = e.toUpperCase();
        } else if (h === "lowercase") {
          e = e.toLowerCase();
        } else if (h === "capitalize") {
          e = e[0].toUpperCase() + e.substring(1);
        }
        m.forEach(t => {
          let r = i.get(t);
          if (!r) {
            i.set(t, r = new Set());
          }
          e.split("").forEach(e => r.add(e));
        });
      } : undefined;
      (function (e, t, r, n, o) {
        let {
          ownerWindow: a,
          svgStyleElement: i,
          svgStyles: l,
          currentNodeStyle: c
        } = n;
        function u(r) {
          let u = a.getComputedStyle(e, r);
          let s = u.getPropertyValue("content");
          if (!s || s === "none") {
            return;
          }
          if (o != null) {
            o(s);
          }
          s = s.replace(/(')|(")|(counter\(.+\))/g, "");
          let d = [J()];
          let f = ei(e, r, n);
          if (c != null) {
            c.forEach((e, t) => {
              f.delete(t);
            });
          }
          let h = el(u, f, n.includeStyleProperties);
          h.delete("content");
          h.delete("-webkit-locale");
          if (h.get("background-clip")?.[0] === "text") {
            t.classList.add("______background-clip--text");
          }
          let m = [`content: '${s}';`];
          h.forEach((e, t) => {
            let [r, n] = e;
            m.push(`${t}: ${r}${n ? " !important" : ""};`);
          });
          if (m.length === 1) {
            return;
          }
          try {
            t.className = [t.className, ...d].join(" ");
          } catch (e) {
            n.log.warn("Failed to copyPseudoClass", e);
            return;
          }
          let g = m.join("\n  ");
          let p = l.get(g);
          if (!p) {
            p = [];
            l.set(g, p);
          }
          p.push(`.${d[0]}${r}`);
        }
        if (i && a) {
          ec.forEach(u);
          if (r) {
            eu.forEach(u);
          }
        }
      })(e, n, a, t, g);
      if (A(e) || k(e) || F(e)) {
        n.setAttribute("value", e.value);
      }
      if (!$(e)) {
        await ef(e, n, t, g);
      }
      await (l == null ? undefined : l(n));
      return n;
    }
    let h = e.cloneNode(false);
    await ef(e, h, t);
    await (l == null ? undefined : l(h));
    return h;
  }
  function eg(e) {
    e.ownerDocument = undefined;
    e.ownerWindow = undefined;
    e.svgStyleElement = undefined;
    e.svgDefsElement = undefined;
    e.svgStyles.clear();
    e.defaultComputedStyles.clear();
    if (e.sandbox) {
      try {
        e.sandbox.remove();
      } catch (t) {
        e.log.warn("Failed to destroyContext", t);
      }
      e.sandbox = undefined;
    }
    e.workers = [];
    e.fontFamilies.clear();
    e.fontCssTexts.clear();
    e.requests.clear();
    e.tasks = [];
    e.shadowRoots = [];
  }
  function ep(e, t) {
    let {
      url: r,
      requestType: n = "text",
      responseType: o = "text",
      imageDom: a
    } = t;
    let i = r;
    let {
      timeout: l,
      acceptOfImage: c,
      requests: u,
      fetchFn: s,
      fetch: {
        requestInit: d,
        bypassingCache: f,
        placeholderImage: g
      },
      font: p,
      workers: w,
      fontFamilies: y
    } = e;
    if (n === "image" && (h || m)) {
      e.drawImageCount++;
    }
    let v = u.get(r);
    if (!v) {
      if (f && f instanceof RegExp && f.test(i)) {
        i += (/\?/.test(i) ? "&" : "?") + new Date().getTime();
      }
      let t = n.startsWith("font") && p && p.minify;
      let m = new Set();
      if (t) {
        n.split(";")[1].split(",").forEach(e => {
          if (y.has(e)) {
            y.get(e).forEach(e => m.add(e));
          }
        });
      }
      let b = t && m.size;
      let _ = {
        url: i,
        timeout: l,
        responseType: b ? "arrayBuffer" : o,
        headers: n === "image" ? {
          accept: c
        } : undefined,
        ...d
      };
      (v = {
        type: n,
        resolve: undefined,
        reject: undefined,
        response: null
      }).response = (async () => {
        if (s && n === "image") {
          let e = await s(r);
          if (e) {
            return e;
          }
        }
        if (!h && r.startsWith("http") && w.length) {
          return new Promise((e, t) => {
            w[u.size & w.length - 1].postMessage({
              rawUrl: r,
              ..._
            });
            v.resolve = e;
            v.reject = t;
          });
        } else {
          return function (e) {
            let {
              url: t,
              timeout: r,
              responseType: n,
              ...o
            } = e;
            let a = new AbortController();
            let i = r ? setTimeout(() => a.abort(), r) : undefined;
            return fetch(t, {
              signal: a.signal,
              ...o
            }).then(e => {
              if (!e.ok) {
                throw Error("Failed fetch, not 2xx response", {
                  cause: e
                });
              }
              switch (n) {
                case "arrayBuffer":
                  return e.arrayBuffer();
                case "dataUrl":
                  return e.blob().then(H);
                default:
                  return e.text();
              }
            }).finally(() => clearTimeout(i));
          }(_);
        }
      })().catch(t => {
        u.delete(r);
        if (n === "image" && g) {
          e.log.warn("Failed to fetch image base64, trying to use placeholder image", i);
          if (typeof g == "string") {
            return g;
          } else {
            return g(a);
          }
        }
        throw t;
      });
      u.set(r, v);
    }
    return v.response;
  }
  async function ew(e, t, r, n) {
    if (!ey(e)) {
      return e;
    }
    for (let [o, a] of function (e, t) {
      let r = [];
      e.replace(ev, (e, n, o) => {
        r.push([o, M(o, t)]);
        return e;
      });
      return r.filter(e => {
        let [t] = e;
        return !I(t);
      });
    }(e, t)) {
      try {
        let t = await ep(r, {
          url: a,
          requestType: n ? "image" : "text",
          responseType: "dataUrl"
        });
        e = e.replace(function (e) {
          let t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
          return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
        }(o), `$1${t}$3`);
      } catch (e) {
        r.log.warn("Failed to fetch css data url", o, e);
      }
    }
    return e;
  }
  function ey(e) {
    return /url\((['"]?)([^'"]+?)\1\)/.test(e);
  }
  let ev = /url\((['"]?)([^'"]+?)\1\)/g;
  let eb = ["background-image", "border-image-source", "-webkit-border-image", "-webkit-mask-image", "list-style-image"];
  async function e_(e, t) {
    let {
      ownerDocument: r,
      svgStyleElement: n,
      fontFamilies: o,
      fontCssTexts: a,
      tasks: i,
      font: l
    } = t;
    if (r && n && o.size) {
      if (l && l.cssText) {
        let e = e$(l.cssText, t);
        n.appendChild(r.createTextNode(`${e}
`));
      } else {
        let e = Array.from(r.styleSheets).filter(e => {
          try {
            return "cssRules" in e && !!e.cssRules.length;
          } catch (r) {
            t.log.warn(`Error while reading CSS rules from ${e.href}`, r);
            return false;
          }
        });
        await Promise.all(e.flatMap(e => Array.from(e.cssRules).map(async (r, n) => {
          if (w(r)) {
            let o = n + 1;
            let a = r.href;
            let i = "";
            try {
              i = await ep(t, {
                url: a,
                requestType: "text",
                responseType: "text"
              });
            } catch (e) {
              t.log.warn(`Error fetch remote css import from ${a}`, e);
            }
            for (let r of function (e) {
              if (e == null) {
                return [];
              }
              let t = [];
              let r = e.replace(ex, "");
              while (true) {
                let e = eS.exec(r);
                if (!e) {
                  break;
                }
                t.push(e[0]);
              }
              r = r.replace(eS, "");
              let n = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
              let o = RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
              while (true) {
                let e = n.exec(r);
                if (e) {
                  o.lastIndex = n.lastIndex;
                } else if (e = o.exec(r)) {
                  n.lastIndex = o.lastIndex;
                } else {
                  break;
                }
                t.push(e[0]);
              }
              return t;
            }(i.replace(ev, (e, t, r) => e.replace(r, M(r, a))))) {
              try {
                e.insertRule(r, r.startsWith("@import") ? o += 1 : e.cssRules.length);
              } catch (e) {
                t.log.warn("Error inserting rule from remote css import", {
                  rule: r,
                  error: e
                });
              }
            }
          }
        })));
        e.flatMap(e => Array.from(e.cssRules)).filter(e => {
          var t;
          return p(e) && ey(e.style.getPropertyValue("src")) && ((t = K(e.style.getPropertyValue("font-family"))) === null || t === undefined ? undefined : t.some(e => o.has(e)));
        }).forEach(e => {
          let o = a.get(e.cssText);
          if (o) {
            n.appendChild(r.createTextNode(`${o}
`));
          } else {
            i.push(ew(e.cssText, e.parentStyleSheet ? e.parentStyleSheet.href : null, t).then(o => {
              o = e$(o, t);
              a.set(e.cssText, o);
              n.appendChild(r.createTextNode(`${o}
`));
            }));
          }
        });
      }
    }
  }
  let ex = /(\/\*[\s\S]*?\*\/)/g;
  let eS = /((@.*?keyframes [\s\S]*?){([\s\S]*?}\s*?)})/gi;
  let eE = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
  let eC = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
  function e$(e, t) {
    let {
      font: r
    } = t;
    let n = r ? r == null ? undefined : r.preferredFormat : undefined;
    if (n) {
      return e.replace(eC, e => {
        while (true) {
          let [t,, r] = eE.exec(e) || [];
          if (!r) {
            return "";
          }
          if (r === n) {
            return `src: ${t};`;
          }
        }
      });
    } else {
      return e;
    }
  }
  async function eT(e, t) {
    let r = await G(e, t);
    if (y(r.node) && v(r.node)) {
      return r.node;
    }
    let {
      ownerDocument: n,
      log: o,
      tasks: a,
      svgStyleElement: i,
      svgDefsElement: l,
      svgStyles: c,
      font: u,
      progress: s,
      autoDestruct: d,
      onCloneNode: f,
      onEmbedNode: g,
      onCreateForeignObjectSvg: p
    } = r;
    o.time("clone node");
    let w = await em(r.node, r, true);
    if (i && n) {
      let e = "";
      c.forEach((t, r) => {
        e += `${t.join(",\n")} {
  ${r}
}
`;
      });
      i.appendChild(n.createTextNode(e));
    }
    o.timeEnd("clone node");
    await (f == null ? undefined : f(w));
    if (u !== false && y(w)) {
      o.time("embed web font");
      await e_(w, r);
      o.timeEnd("embed web font");
    }
    o.time("embed node");
    (function e(t, r) {
      let {
        tasks: n
      } = r;
      if (y(t)) {
        if (C(t) || b(t)) {
          n.push(...function (e, t) {
            if (C(e)) {
              let r = e.currentSrc || e.src;
              if (!I(r)) {
                return [ep(t, {
                  url: r,
                  imageDom: e,
                  requestType: "image",
                  responseType: "dataUrl"
                }).then(t => {
                  if (t) {
                    e.srcset = "";
                    e.dataset.originalSrc = r;
                    e.src = t || "";
                  }
                })];
              }
              if (h || m) {
                t.drawImageCount++;
              }
            } else if (v(e) && !I(e.href.baseVal)) {
              let r = e.href.baseVal;
              return [ep(t, {
                url: r,
                imageDom: e,
                requestType: "image",
                responseType: "dataUrl"
              }).then(t => {
                if (t) {
                  e.dataset.originalSrc = r;
                  e.href.baseVal = t || "";
                }
              })];
            }
            return [];
          }(t, r));
        }
        if (_(t)) {
          n.push(...function (e, t) {
            let {
              ownerDocument: n,
              svgDefsElement: o
            } = t;
            let a = e.getAttribute("href") ?? e.getAttribute("xlink:href");
            if (!a) {
              return [];
            }
            let [i, l] = a.split("#");
            if (l) {
              let r = `#${l}`;
              let a = t.shadowRoots.reduce((e, t) => e ?? t.querySelector(`svg ${r}`), n == null ? undefined : n.querySelector(`svg ${r}`));
              if (i) {
                e.setAttribute("href", r);
              }
              if (o == null ? undefined : o.querySelector(r)) {
                return [];
              }
              if (a) {
                if (o != null) {
                  o.appendChild(a.cloneNode(true));
                }
              } else if (i) {
                return [ep(t, {
                  url: i,
                  responseType: "text"
                }).then(e => {
                  if (o != null) {
                    o.insertAdjacentHTML("beforeend", e);
                  }
                })];
              }
            }
            return [];
          }(t, r));
        }
      }
      if (x(t)) {
        var o;
        n.push(...(o = t.style, eb.map(e => {
          let t = o.getPropertyValue(e);
          if (t && t !== "none") {
            if (h || m) {
              r.drawImageCount++;
            }
            return ew(t, null, r, true).then(r => {
              if (r && t !== r) {
                o.setProperty(e, r, o.getPropertyPriority(e));
              }
            });
          } else {
            return null;
          }
        }).filter(Boolean)));
      }
      t.childNodes.forEach(t => {
        e(t, r);
      });
    })(w, r);
    let S = a.length;
    let E = 0;
    let $ = async () => {
      while (true) {
        let e = a.pop();
        if (!e) {
          break;
        }
        try {
          await e;
        } catch (e) {
          r.log.warn("Failed to run task", e);
        }
        if (s != null) {
          s(++E, S);
        }
      }
    };
    if (s != null) {
      s(E, S);
    }
    await Promise.all([...Array.from({
      length: 4
    })].map($));
    o.timeEnd("embed node");
    await (g == null ? undefined : g(w));
    let T = function (e, t) {
      let {
        width: r,
        height: n
      } = t;
      let o = L(r, n, e.ownerDocument);
      let a = o.ownerDocument.createElementNS(o.namespaceURI, "foreignObject");
      a.setAttributeNS(null, "x", "0%");
      a.setAttributeNS(null, "y", "0%");
      a.setAttributeNS(null, "width", "100%");
      a.setAttributeNS(null, "height", "100%");
      a.append(e);
      o.appendChild(a);
      return o;
    }(w, r);
    if (l) {
      T.insertBefore(l, T.children[0]);
    }
    if (i) {
      T.insertBefore(i, T.children[0]);
    }
    if (d) {
      eg(r);
    }
    await (p == null ? undefined : p(T));
    return T;
  }
  async function eA(e, t) {
    let r = await G(e, t);
    let n = await eT(r);
    let o = W(n, r.isEnable("removeControlCharacter"));
    if (!r.autoDestruct) {
      var a;
      r.svgStyleElement = ee(r.ownerDocument);
      r.svgDefsElement = (a = r.ownerDocument) === null || a === undefined ? undefined : a.createElementNS(B, "defs");
      r.svgStyles.clear();
    }
    let i = q(o, n.ownerDocument);
    return await et(i, r);
  }
  async function ek(e, t) {
    let r = await G(e, t);
    let {
      log: n,
      type: o,
      quality: l,
      dpi: c
    } = r;
    let u = await eA(r);
    n.time("canvas to blob");
    let s = await z(u, o, l);
    if (["image/png", "image/jpeg"].includes(o) && c) {
      let e = new Uint8Array(await Z(s.slice(0, 33)));
      if (o === "image/png") {
        e = i(e, c);
      } else if (o === "image/jpeg") {
        e = a(e, c);
      }
      n.timeEnd("canvas to blob");
      return new Blob([e, s.slice(33)], {
        type: o
      });
    }
    n.timeEnd("canvas to blob");
    return s;
  }
  async function eN(e, t) {
    let r = await G(e, t);
    let {
      log: n,
      quality: o,
      type: l,
      dpi: c
    } = r;
    let d = await eA(r);
    n.time("canvas to data url");
    let f = d.toDataURL(l, o);
    if (["image/png", "image/jpeg"].includes(l) && c && u && s) {
      let [e, t] = f.split(",");
      let r = 0;
      let n = false;
      if (l === "image/png") {
        let e;
        if ((e = t.indexOf("AAlwSFlz")) === -1) {
          e = t.indexOf("AAAJcEhZ");
        }
        if (e === -1) {
          e = t.indexOf("AAAACXBI");
        }
        let o = e;
        if (o >= 0) {
          r = Math.ceil((o + 28) / 3) * 4;
          n = true;
        } else {
          r = 44;
        }
      } else if (l === "image/jpeg") {
        r = 24;
      }
      let o = t.substring(0, r);
      let u = t.substring(r);
      let s = window.atob(o);
      let d = new Uint8Array(s.length);
      for (let e = 0; e < d.length; e++) {
        d[e] = s.charCodeAt(e);
      }
      let h = l === "image/png" ? i(d, c, n) : a(d, c);
      f = [e, ",", window.btoa(String.fromCharCode(...h)), u].join("");
    }
    n.timeEnd("canvas to data url");
    return f;
  }
  async function eR(e, t) {
    let r = await G(e, t);
    let {
      width: n,
      height: o,
      ownerDocument: a
    } = r;
    let i = await eN(r);
    let l = L(n, o, a);
    let c = l.ownerDocument.createElementNS(l.namespaceURI, "image");
    c.setAttributeNS(null, "href", i);
    c.setAttributeNS(null, "height", "100%");
    c.setAttributeNS(null, "width", "100%");
    l.appendChild(c);
    return W(l, r.isEnable("removeControlCharacter"));
  }
  async function eF(e, t) {
    let r = await G(e, t);
    let {
      ownerDocument: n,
      width: o,
      height: a,
      scale: i,
      type: l
    } = r;
    let c = q(l === "image/svg+xml" ? await eR(r) : await eN(r), n);
    c.width = Math.floor(o * i);
    c.height = Math.floor(a * i);
    c.style.width = `${o}px`;
    c.style.height = `${a}px`;
    return c;
  }
  async function ej(e, t) {
    return eN(await G(e, {
      ...t,
      type: "image/jpeg"
    }));
  }
  async function eP(e, t) {
    let r = await G(e, t);
    let n = await eA(r);
    return n.getContext("2d").getImageData(0, 0, n.width, n.height).data;
  }
  async function eD(e, t) {
    return eN(await G(e, {
      ...t,
      type: "image/png"
    }));
  }
  async function eI(e, t) {
    return eN(await G(e, {
      ...t,
      type: "image/webp"
    }));
  }
  require.r(exports);
  require.d(exports, {
    createContext: function () {
      return Y;
    },
    destroyContext: function () {
      return eg;
    },
    domToBlob: function () {
      return ek;
    },
    domToCanvas: function () {
      return eA;
    },
    domToDataUrl: function () {
      return eN;
    },
    domToForeignObjectSvg: function () {
      return eT;
    },
    domToImage: function () {
      return eF;
    },
    domToJpeg: function () {
      return ej;
    },
    domToPixel: function () {
      return eP;
    },
    domToPng: function () {
      return eD;
    },
    domToSvg: function () {
      return eR;
    },
    domToWebp: function () {
      return eI;
    },
    loadMedia: function () {
      return V;
    },
    waitUntilLoad: function () {
      return X;
    }
  });
}