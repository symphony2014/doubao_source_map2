// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v$' to 'MarkmapView'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 58010.e07ec0ec.js
         * chunkId: 58010
         * moduleId: 775996
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var markmapResourceLoader = require("markmap-resource-loader") /*id: 504656*/;
  var axisAndZoomUtilities = require("axis-and-zoom-utilities") /*id: 381804*/;
  let o = typeof navigator !== "undefined" && navigator.userAgent.includes("Macintosh");
  let s = axisAndZoomUtilities.PKp(axisAndZoomUtilities.Cn1);
  let l = {
    autoFit: false,
    color: e => {
      var t;
      return s(`${((t = e.state) == null ? undefined : t.path) || ""}`);
    },
    duration: 500,
    embedGlobalCSS: true,
    fitRatio: 0.95,
    maxWidth: 0,
    nodeMinHeight: 16,
    paddingX: 8,
    scrollForPan: o,
    spacingHorizontal: 80,
    spacingVertical: 5,
    initialExpandLevel: -1,
    zoom: true,
    pan: true,
    toggleRecursively: false
  };
  let c = "http://www.w3.org/1999/xlink";
  let u = {
    show: c,
    actuate: c,
    href: xssContentSanitizer.sanitizeUrl(c, null, {
      logType: "js.href/src",
      reportOnly: "false",
      blackConfig: "{}",
      configMode: "merge",
      isCloseSSRReport: false,
      bid: "flow_web",
      region: "cn",
      urlLimit: "-1",
      htmlLimit: "-1",
      isSaveValidUrl: false,
      isRuntimeLog: false,
      isDOMParser: true,
      escapeRule: "escape-report",
      reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
      scmBranch: "release_train_samantha_2026-03-09_1120843696898",
      scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
      scmVersion: "1.0.4.168",
      webpackPluginVersion: "3.4.5",
      filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$2hq-lhSMFdWaEJkR1J0-kd4a01FRjN%R3B*TWt4c$FtWmlWMFo1W$RJe*FHTkRN$3BpTWp*MFlqSTFR$TFETkhoT2F%%jN%REkxZ*xwSFZtWmlWemxyWkZkN*JHTj$PWFJa$0$we$lsZEdkMHhZ$25C-$dHTjJXa2RzZW1SRE9-Qmli$kpzWl$NMWNXTXlSbmxhTTFaNg"
    })
  };
  let h = e => typeof e == "string" || typeof e == "number";
  let p = e => (e == null ? undefined : e.vtype) === 1;
  let d = e => (e == null ? undefined : e.vtype) === 2;
  function m(e, t) {
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
  }
  function f(e) {
    return e.children;
  }
  let g = {
    isSvg: false
  };
  function v(e, t) {
    if (!Array.isArray(t)) {
      t = [t];
    }
    if ((t = t.filter(Boolean)).length) {
      e.append(...t);
    }
  }
  let b = {
    className: "class",
    labelFor: "for"
  };
  function y(e, t) {
    if (Array.isArray(e)) {
      return e.map(e => y(e, t)).reduce((e, t) => e.concat(t), []);
    } else {
      return x(e, t);
    }
  }
  function x(e, t = g) {
    if (e == null || typeof e == "boolean") {
      return null;
    }
    if (e instanceof Node) {
      return e;
    }
    if (d(e)) {
      let {
        type: r,
        props: n
      } = e;
      if (r === f) {
        let e = document.createDocumentFragment();
        if (n.children) {
          v(e, y(n.children, t));
        }
        return e;
      }
      return x(r(n), t);
    }
    if (h(e)) {
      return document.createTextNode(`${e}`);
    }
    if (p(e)) {
      let r;
      let {
        type: i,
        props: a
      } = e;
      if (!t.isSvg && i === "svg") {
        t = Object.assign({}, t, {
          isSvg: true
        });
      }
      (function (e, t, r) {
        for (let i in t) {
          if (i !== "key" && i !== "children" && i !== "ref") {
            if (i === "dangerouslySetInnerHTML") {
              e.innerHTML = xssContentSanitizer.sanitizeHtml(t[i].__html, null, {
                logType: "js.innerHTML",
                reportOnly: "false",
                blackConfig: "{}",
                configMode: "merge",
                isCloseSSRReport: false,
                bid: "flow_web",
                region: "cn",
                urlLimit: "-1",
                htmlLimit: "-1",
                isSaveValidUrl: false,
                isRuntimeLog: false,
                isDOMParser: true,
                escapeRule: "escape-report",
                reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                scmVersion: "1.0.4.168",
                webpackPluginVersion: "3.4.5",
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$2hq-lhSMFdWaEJkR1J0-kd4a01FRjN%R3B*TWt4c$FtWmlWMFo1W$RJe*FHTkRN$3BpTWp*MFlqSTFR$TFETkhoT2F%%jN%REkxZ*xwSFZtWmlWemxyWkZkN*JHTj$PWFJa$0$we$lsZEdkMHhZ$25C-$dHTjJXa2RzZW1SRE9-Qmli$kpzWl$NMWNXTXlSbmxhTTFaNg"
              });
            } else if (i === "innerHTML" || i === "textContent" || i === "innerText" || i === "value" && ["textarea", "select"].includes(e.tagName)) {
              let r = t[i];
              if (r != null) {
                e[i] = r;
              }
            } else if (i.startsWith("on")) {
              e[i.toLowerCase()] = t[i];
            } else {
              (function (e, t, r, n) {
                t = b[t] || t;
                if (r === true) {
                  e.setAttribute(t, "");
                } else if (r === false) {
                  e.removeAttribute(t);
                } else {
                  let i = n ? u[t] : undefined;
                  if (i !== undefined) {
                    e.setAttributeNS(i, t, r);
                  } else {
                    e.setAttribute(t, r);
                  }
                }
              })(e, i, t[i], r.isSvg);
            }
          }
        }
      })(r = t.isSvg ? document.createElementNS("http://www.w3.org/2000/svg", i) : document.createElement(i), a, t);
      if (a.children) {
        let e = t;
        if (t.isSvg && i === "foreignObject") {
          e = Object.assign({}, e, {
            isSvg: false
          });
        }
        let n = y(a.children, e);
        if (n != null) {
          v(r, n);
        }
      }
      let {
        ref: o
      } = a;
      if (typeof o == "function") {
        o(r);
      }
      return r;
    }
    throw Error("mount: Invalid Vnode!");
  }
  function w(e) {
    var t = 0;
    var r = e.children;
    var n = r && r.length;
    if (n) {
      while (--n >= 0) {
        t += r[n].value;
      }
    } else {
      t = 1;
    }
    e.value = t;
  }
  function k(e, t) {
    var r;
    var n;
    var i;
    var a;
    var o;
    var s = new C(e);
    var l = +e.value && (s.value = e.value);
    var c = [s];
    for (t == null && (t = S); r = c.pop();) {
      if (l) {
        r.value = +r.data.value;
      }
      if ((i = t(r.data)) && (o = i.length)) {
        r.children = Array(o);
        a = o - 1;
        for (; a >= 0; --a) {
          c.push(n = r.children[a] = new C(i[a]));
          n.parent = r;
          n.depth = r.depth + 1;
        }
      }
    }
    return s.eachBefore(T);
  }
  function S(e) {
    return e.children;
  }
  function A(e) {
    e.data = e.data.data;
  }
  function T(e) {
    var t = 0;
    do {
      e.height = t;
    } while ((e = e.parent) && e.height < ++t);
  }
  function C(e) {
    this.data = e;
    this.depth = this.height = 0;
    this.parent = null;
  }
  C.prototype = k.prototype = {
    constructor: C,
    count: function () {
      return this.eachAfter(w);
    },
    each: function (e) {
      var t;
      var r;
      var n;
      var i;
      var a = this;
      var o = [a];
      do {
        t = o.reverse();
        o = [];
        while (a = t.pop()) {
          e(a);
          if (r = a.children) {
            n = 0;
            i = r.length;
            for (; n < i; ++n) {
              o.push(r[n]);
            }
          }
        }
      } while (o.length);
      return this;
    },
    eachAfter: function (e) {
      var t;
      var r;
      var n;
      var i = this;
      var a = [i];
      var o = [];
      while (i = a.pop()) {
        o.push(i);
        if (t = i.children) {
          r = 0;
          n = t.length;
          for (; r < n; ++r) {
            a.push(t[r]);
          }
        }
      }
      while (i = o.pop()) {
        e(i);
      }
      return this;
    },
    eachBefore: function (e) {
      var t;
      var r;
      var n = this;
      var i = [n];
      while (n = i.pop()) {
        e(n);
        if (t = n.children) {
          for (r = t.length - 1; r >= 0; --r) {
            i.push(t[r]);
          }
        }
      }
      return this;
    },
    sum: function (e) {
      return this.eachAfter(function (t) {
        var r = +e(t.data) || 0;
        var n = t.children;
        var i = n && n.length;
        while (--i >= 0) {
          r += n[i].value;
        }
        t.value = r;
      });
    },
    sort: function (e) {
      return this.eachBefore(function (t) {
        if (t.children) {
          t.children.sort(e);
        }
      });
    },
    path: function (e) {
      var t = this;
      var r = function (e, t) {
        if (e === t) {
          return e;
        }
        var r = e.ancestors();
        var n = t.ancestors();
        var i = null;
        e = r.pop();
        t = n.pop();
        while (e === t) {
          i = e;
          e = r.pop();
          t = n.pop();
        }
        return i;
      }(t, e);
      var n = [t];
      while (t !== r) {
        n.push(t = t.parent);
      }
      var i = n.length;
      for (; e !== r;) {
        n.splice(i, 0, e);
        e = e.parent;
      }
      return n;
    },
    ancestors: function () {
      var e = this;
      var t = [e];
      while (e = e.parent) {
        t.push(e);
      }
      return t;
    },
    descendants: function () {
      var e = [];
      this.each(function (t) {
        e.push(t);
      });
      return e;
    },
    leaves: function () {
      var e = [];
      this.eachBefore(function (t) {
        if (!t.children) {
          e.push(t);
        }
      });
      return e;
    },
    links: function () {
      var e = this;
      var t = [];
      e.each(function (r) {
        if (r !== e) {
          t.push({
            source: r.parent,
            target: r
          });
        }
      });
      return t;
    },
    copy: function () {
      return k(this).eachBefore(A);
    }
  };
  let {
    version: M
  } = {
    name: "d3-flextree",
    version: "2.1.2",
    main: "build/d3-flextree.js",
    module: "index",
    "jsnext:main": "index",
    author: {
      name: "Chris Maloney",
      url: "http://chrismaloney.org"
    },
    description: "Flexible tree layout algorithm that allows for variable node sizes.",
    keywords: ["d3", "d3-module", "layout", "tree", "hierarchy", "d3-hierarchy", "plugin", "d3-plugin", "infovis", "visualization", "2d"],
    homepage: "https://github.com/klortho/d3-flextree",
    license: "WTFPL",
    repository: {
      type: "git",
      url: "https://github.com/klortho/d3-flextree.git"
    },
    scripts: {
      clean: "rm -rf build demo test",
      "build:demo": "rollup -c --environment BUILD:demo",
      "build:dev": "rollup -c --environment BUILD:dev",
      "build:prod": "rollup -c --environment BUILD:prod",
      "build:test": "rollup -c --environment BUILD:test",
      build: "rollup -c",
      lint: "eslint index.js src",
      "test:main": "node test/bundle.js",
      "test:browser": "node test/browser-tests.js",
      test: "npm-run-all test:*",
      prepare: "npm-run-all clean build lint test"
    },
    dependencies: {
      "d3-hierarchy": "^1.1.5"
    },
    devDependencies: {
      "babel-plugin-external-helpers": "^6.22.0",
      "babel-preset-es2015-rollup": "^3.0.0",
      d3: "^4.13.0",
      "d3-selection-multi": "^1.0.1",
      eslint: "^4.19.1",
      jsdom: "^11.6.2",
      "npm-run-all": "^4.1.2",
      rollup: "^0.55.3",
      "rollup-plugin-babel": "^2.7.1",
      "rollup-plugin-commonjs": "^8.0.2",
      "rollup-plugin-copy": "^0.2.3",
      "rollup-plugin-json": "^2.3.0",
      "rollup-plugin-node-resolve": "^3.0.2",
      "rollup-plugin-uglify": "^3.0.0",
      "uglify-es": "^3.3.9"
    }
  };
  let N = Object.freeze({
    children: e => e.children,
    nodeSize: e => e.data.size,
    spacing: 0
  });
  function z(e) {
    let t = Object.assign({}, N, e);
    function r(e) {
      let r = t[e];
      if (typeof r == "function") {
        return r;
      } else {
        return () => r;
      }
    }
    function n(e) {
      let t = a(function () {
        let e = i();
        let t = r("nodeSize");
        let n = r("spacing");
        return class extends e {
          get size() {
            return t(this.data);
          }
          spacing(e) {
            return n(this.data, e.data);
          }
          get x() {
            return this.data.x;
          }
          set x(e) {
            this.data.x = e;
          }
          get y() {
            return this.data.y;
          }
          set y(e) {
            this.data.y = e;
          }
          update() {
            E(this);
            I(this);
            return this;
          }
          constructor(e) {
            super(e);
            Object.assign(this, {
              x: 0,
              y: 0,
              relX: 0,
              prelim: 0,
              shift: 0,
              change: 0,
              lExt: this,
              lExtRelX: 0,
              lThr: null,
              rExt: this,
              rExtRelX: 0,
              rThr: null
            });
          }
        };
      }(), e, e => e.children);
      t.update();
      return t.data;
    }
    function i() {
      let e = r("nodeSize");
      let t = r("spacing");
      return class r extends k.prototype.constructor {
        copy() {
          let e = a(this.constructor, this, e => e.children);
          e.each(e => e.data = e.data.data);
          return e;
        }
        get size() {
          return e(this);
        }
        spacing(e) {
          return t(this, e);
        }
        get nodes() {
          return this.descendants();
        }
        get xSize() {
          return this.size[0];
        }
        get ySize() {
          return this.size[1];
        }
        get top() {
          return this.y;
        }
        get bottom() {
          return this.y + this.ySize;
        }
        get left() {
          return this.x - this.xSize / 2;
        }
        get right() {
          return this.x + this.xSize / 2;
        }
        get root() {
          let e = this.ancestors();
          return e[e.length - 1];
        }
        get numChildren() {
          if (this.hasChildren) {
            return this.children.length;
          } else {
            return 0;
          }
        }
        get hasChildren() {
          return !this.noChildren;
        }
        get noChildren() {
          return this.children === null;
        }
        get firstChild() {
          if (this.hasChildren) {
            return this.children[0];
          } else {
            return null;
          }
        }
        get lastChild() {
          if (this.hasChildren) {
            return this.children[this.numChildren - 1];
          } else {
            return null;
          }
        }
        get extents() {
          return (this.children || []).reduce((e, t) => r.maxExtents(e, t.extents), this.nodeExtents);
        }
        get nodeExtents() {
          return {
            top: this.top,
            bottom: this.bottom,
            left: this.left,
            right: this.right
          };
        }
        static maxExtents(e, t) {
          return {
            top: Math.min(e.top, t.top),
            bottom: Math.max(e.bottom, t.bottom),
            left: Math.min(e.left, t.left),
            right: Math.max(e.right, t.right)
          };
        }
        constructor(e) {
          super(e);
        }
      };
    }
    function a(e, t, r) {
      let n = (t, i) => {
        let a = new e(t);
        Object.assign(a, {
          parent: i,
          depth: i === null ? 0 : i.depth + 1,
          height: 0,
          length: 1
        });
        let o = r(t) || [];
        a.children = o.length === 0 ? null : o.map(e => n(e, a));
        if (a.children) {
          Object.assign(a, a.children.reduce((e, t) => ({
            height: Math.max(e.height, t.height + 1),
            length: e.length + t.length
          }), a));
        }
        return a;
      };
      return n(t, null);
    }
    Object.assign(n, {
      nodeSize(e) {
        if (arguments.length) {
          t.nodeSize = e;
          return n;
        } else {
          return t.nodeSize;
        }
      },
      spacing(e) {
        if (arguments.length) {
          t.spacing = e;
          return n;
        } else {
          return t.spacing;
        }
      },
      children(e) {
        if (arguments.length) {
          t.children = e;
          return n;
        } else {
          return t.children;
        }
      },
      hierarchy(e, r) {
        let n = typeof r === "undefined" ? t.children : r;
        return a(i(), e, n);
      },
      dump(e) {
        let t = r("nodeSize");
        let n = e => r => {
          let i = e + "  ";
          let a = e + "    ";
          let {
            x: o,
            y: s
          } = r;
          let l = t(r);
          let c = r.children || [];
          let u = c.length === 0 ? " " : `,${i}children: [${a}${c.map(n(a)).join(a)}${i}],${e}`;
          return `{ size: [${l.join(", ")}],${i}x: ${o}, y: ${s}${u}},`;
        };
        return n(`
`)(e);
      }
    });
    return n;
  }
  z.version = M;
  let E = function (e, t = 0) {
    e.y = t;
    (e.children || []).reduce((t, r) => {
      let [n, i] = t;
      E(r, e.y + e.ySize);
      let a = (n === 0 ? r.lExt : r.rExt).bottom;
      if (n !== 0) {
        R(e, n, i);
      }
      let o = P(a, n, i);
      return [n + 1, o];
    }, [0, null]);
    _(e);
    D(e);
    return e;
  };
  let I = (e, t, r) => {
    if (typeof t === "undefined") {
      t = -e.relX - e.prelim;
      r = 0;
    }
    let n = t + e.relX;
    e.relX = n + e.prelim - r;
    e.prelim = 0;
    e.x = r + e.relX;
    (e.children || []).forEach(t => I(t, n, e.x));
    return e;
  };
  let _ = e => {
    (e.children || []).reduce((e, t) => {
      let [r, n] = e;
      let i = r + t.shift;
      let a = n + i + t.change;
      t.relX += a;
      return [i, a];
    }, [0, 0]);
  };
  let R = (e, t, r) => {
    let n = e.children[t - 1];
    let i = e.children[t];
    let a = n;
    let o = n.relX;
    let s = i;
    let l = i.relX;
    let c = true;
    while (a && s) {
      if (a.bottom > r.lowY) {
        r = r.next;
      }
      let n = o + a.prelim - (l + s.prelim) + a.xSize / 2 + s.xSize / 2 + a.spacing(s);
      if (n > 0 || n < 0 && c) {
        l += n;
        B(i, n);
        q(e, t, r.index, n);
      }
      c = false;
      let u = a.bottom;
      let h = s.bottom;
      if (u <= h && (a = F(a))) {
        o += a.relX;
      }
      if (u >= h && (s = O(s))) {
        l += s.relX;
      }
    }
    if (!a && s) {
      L(e, t, s, l);
    } else if (a && !s) {
      $(e, t, a, o);
    }
  };
  let B = (e, t) => {
    e.relX += t;
    e.lExtRelX += t;
    e.rExtRelX += t;
  };
  let q = (e, t, r, n) => {
    let i = e.children[t];
    let a = t - r;
    if (a > 1) {
      let t = n / a;
      e.children[r + 1].shift += t;
      i.shift -= t;
      i.change -= n - t;
    }
  };
  let O = e => e.hasChildren ? e.firstChild : e.lThr;
  let F = e => e.hasChildren ? e.lastChild : e.rThr;
  let L = (e, t, r, n) => {
    let i = e.firstChild;
    let a = i.lExt;
    let o = e.children[t];
    a.lThr = r;
    let s = n - r.relX - i.lExtRelX;
    a.relX += s;
    a.prelim -= s;
    i.lExt = o.lExt;
    i.lExtRelX = o.lExtRelX;
  };
  let $ = (e, t, r, n) => {
    let i = e.children[t];
    let a = i.rExt;
    let o = e.children[t - 1];
    a.rThr = r;
    let s = n - r.relX - i.rExtRelX;
    a.relX += s;
    a.prelim -= s;
    i.rExt = o.rExt;
    i.rExtRelX = o.rExtRelX;
  };
  let D = e => {
    if (e.hasChildren) {
      let t = e.firstChild;
      let r = e.lastChild;
      Object.assign(e, {
        prelim: (t.prelim + t.relX - t.xSize / 2 + r.relX + r.prelim + r.xSize / 2) / 2,
        lExt: t.lExt,
        lExtRelX: t.lExtRelX,
        rExt: r.rExt,
        rExtRelX: r.rExtRelX
      });
    }
  };
  let P = (e, t, r) => {
    while (r !== null && e >= r.lowY) {
      r = r.next;
    }
    return {
      lowY: e,
      index: t,
      next: r
    };
  };
  function H(e) {
    return Math.max(4 - e.data.state.depth * 2, 1.5);
  }
  function j(e, t) {
    let r = axisAndZoomUtilities._Di(e, t);
    return e[r];
  }
  function V(e) {
    e.stopPropagation();
  }
  let W = new markmapResourceLoader.Hook();
  class U {
    getStyleContent() {
      let {
        style: e
      } = this.options;
      let {
        id: t
      } = this.state;
      let r = typeof e == "function" ? e(t) : "";
      return [this.options.embedGlobalCSS && ".markmap{--markmap-max-width: none;--markmap-a-color: #0097e6;--markmap-a-hover-color: #00a8ff;--markmap-code-bg: #f0f0f0;--markmap-code-color: #555;--markmap-highlight-bg: #ffeaa7;--markmap-table-border: 1px solid currentColor;--markmap-font: 300 16px/20px sans-serif;font:var(--markmap-font)}.markmap-link{fill:none}.markmap-node>circle{cursor:pointer}.markmap-foreign{display:inline-block}.markmap-foreign a{color:var(--markmap-a-color)}.markmap-foreign a:hover{color:var(--markmap-a-hover-color)}.markmap-foreign code{padding:.25em;font-size:calc(1em - 2px);color:var(--markmap-code-color);background-color:var(--markmap-code-bg);border-radius:2px}.markmap-foreign pre{margin:0}.markmap-foreign pre>code{display:block}.markmap-foreign del{text-decoration:line-through}.markmap-foreign em{font-style:italic}.markmap-foreign strong{font-weight:700}.markmap-foreign mark{background:var(--markmap-highlight-bg)}.markmap-foreign table,.markmap-foreign th,.markmap-foreign td{border-collapse:collapse;border:var(--markmap-table-border)}.markmap-foreign img{display:inline-block}.markmap-foreign-testing-max{max-width:var(--markmap-max-width)}.markmap-foreign-testing-max img{max-width:var(--markmap-max-width);max-height:none}", r].filter(Boolean).join(`
`);
    }
    updateStyle() {
      this.svg.attr("class", markmapResourceLoader.joinClasses(this.svg.attr("class"), "markmap", this.state.id));
      let e = this.getStyleContent();
      this.styleNode.text(e);
    }
    toggleNode(e) {
      var t;
      var r;
      let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      let a = (t = e.payload) != null && t.fold ? 0 : 1;
      if (n) {
        markmapResourceLoader.traverseTree(e, (e, t) => {
          e.payload = {
            ...e.payload,
            fold: a
          };
          t();
        });
      } else {
        e.payload = {
          ...e.payload,
          fold: (r = e.payload) != null && r.fold ? 0 : 1
        };
      }
      this.renderData(e);
    }
    initializeData(e) {
      let t = 0;
      let {
        color: r,
        nodeMinHeight: a,
        maxWidth: o,
        initialExpandLevel: s
      } = this.options;
      let {
        id: l
      } = this.state;
      let c = x(m("div", {
        className: `markmap-container markmap ${l}-g`
      }));
      let u = x(m("style", {
        children: [this.getStyleContent(), ".markmap-container{position:absolute;width:0;height:0;top:-100px;left:-100px;overflow:hidden}.markmap-container>.markmap-foreign{display:inline-block}.markmap-container>.markmap-foreign>div:last-child,.markmap-container>.markmap-foreign>div:last-child :not(pre){white-space:nowrap}.markmap-container>.markmap-foreign>div:last-child code{white-space:inherit}"].join(`
`)
      }));
      document.body.append(c, u);
      let h = o ? `--markmap-max-width: ${o}px` : "";
      let p = 0;
      let d = 0;
      markmapResourceLoader.traverseTree(e, (e, i, a) => {
        var o;
        var l;
        var u;
        d += 1;
        e.children = (o = e.children) == null ? undefined : o.map(e => ({
          ...e
        }));
        t += 1;
        let f = x(m("div", {
          className: "markmap-foreign markmap-foreign-testing-max",
          style: h,
          children: m("div", {
            dangerouslySetInnerHTML: {
              __html: xssContentSanitizer.sanitizeHtml(e.content, null, {
                logType: "react.dangerouslySetInnerHTML",
                reportOnly: "false",
                blackConfig: "{}",
                configMode: "merge",
                isCloseSSRReport: false,
                bid: "flow_web",
                region: "cn",
                urlLimit: "-1",
                htmlLimit: "-1",
                isSaveValidUrl: false,
                isRuntimeLog: false,
                isDOMParser: true,
                escapeRule: "escape-report",
                reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
                scmBranch: "release_train_samantha_2026-03-09_1120843696898",
                scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
                scmVersion: "1.0.4.168",
                webpackPluginVersion: "3.4.5",
                filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$2hq-lhSMFdWaEJkR1J0-kd4a01FRjN%R3B*TWt4c$FtWmlWMFo1W$RJe*FHTkRN$3BpTWp*MFlqSTFR$TFETkhoT2F%%jN%REkxZ*xwSFZtWmlWemxyWkZkN*JHTj$PWFJa$0$we$lsZEdkMHhZ$25C-$dHTjJXa2RzZW1SRE9-Qmli$kpzWl$NMWNXTXlSbmxhTTFaNg"
              })
            }
          })
        }));
        c.append(f);
        e.state = {
          ...e.state,
          depth: d,
          id: t,
          el: f.firstChild
        };
        e.state.path = [(l = a == null ? undefined : a.state) == null ? undefined : l.path, e.state.id].filter(Boolean).join(".");
        r(e);
        let g = ((u = e.payload) == null ? undefined : u.fold) === 2;
        if (g) {
          p += 1;
        } else if (p || s >= 0 && e.state.depth >= s) {
          e.payload = {
            ...e.payload,
            fold: 1
          };
        }
        i();
        if (g) {
          p -= 1;
        }
        d -= 1;
      });
      let f = Array.from(c.childNodes).map(e => e.firstChild);
      this._checkImages(c);
      f.forEach(e => {
        var t;
        if ((t = e.parentNode) != null) {
          t.append(e.cloneNode(true));
        }
      });
      markmapResourceLoader.traverseTree(e, (e, t, r) => {
        var n;
        let i = e.state;
        let o = i.el.getBoundingClientRect();
        e.content = i.el.innerHTML;
        i.size = [Math.ceil(o.width) + 1, Math.max(Math.ceil(o.height), a)];
        i.key = [(n = r == null ? undefined : r.state) == null ? undefined : n.id, i.id].filter(Boolean).join(".") + e.content;
        t();
      });
      c.remove();
      u.remove();
    }
    _checkImages(e) {
      e.querySelectorAll("img").forEach(e => {
        if (e.width) {
          return;
        }
        let t = this.imgCache[e.src];
        if (t != null && t[0]) {
          [e.width, e.height] = t;
        } else if (!t) {
          this._loadImage(e.src);
        }
      });
    }
    _loadImage(e) {
      this.imgCache[e] = [0, 0];
      let t = new Image();
      t.src = xssContentSanitizer.sanitizeUrl(e, null, {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: false,
        bid: "flow_web",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: true,
        escapeRule: "escape-report",
        reportUrl: "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=flow_web",
        scmBranch: "release_train_samantha_2026-03-09_1120843696898",
        scmName: "$20xN*Rt%j$P$E5h$jBsMldtMTRkb$F4T1dwaFIwWXdX$mhL-m1SW$R%MD0",
        scmVersion: "1.0.4.168",
        webpackPluginVersion: "3.4.5",
        filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%p0T1d0-$ZqbDBZakpTT$dKSFZucE1l$F-zWW01Q2RFd3lN$2hq-lhSMFdWaEJkR1J0-kd4a01FRjN%R3B*TWt4c$FtWmlWMFo1W$RJe*FHTkRN$3BpTWp*MFlqSTFR$TFETkhoT2F%%jN%REkxZ*xwSFZtWmlWemxyWkZkN*JHTj$PWFJa$0$we$lsZEdkMHhZ$25C-$dHTjJXa2RzZW1SRE9-Qmli$kpzWl$NMWNXTXlSbmxhTTFaNg"
      });
      t.onload = () => {
        this.imgCache[e] = [t.naturalWidth, t.naturalHeight];
        this.debouncedRefresh();
      };
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e
      };
      if (this.options.zoom) {
        this.svg.call(this.zoom);
      } else {
        this.svg.on(".zoom", null);
      }
      if (this.options.pan) {
        this.svg.on("wheel", this.handlePan);
      } else {
        this.svg.on("wheel", null);
      }
    }
    setData(e, t) {
      if (t) {
        this.setOptions(t);
      }
      if (e) {
        this.state.data = e;
      }
      if (this.state.data) {
        this.initializeData(this.state.data);
        this.updateStyle();
        this.renderData();
      }
    }
    renderData(e) {
      if (!this.state.data) {
        return;
      }
      let {
        spacingHorizontal: n,
        paddingX: o,
        spacingVertical: s,
        autoFit: l,
        color: c
      } = this.options;
      let u = z({}).children(e => {
        var t;
        if ((t = e.payload) == null || !t.fold) {
          return e.children;
        }
      }).nodeSize(e => {
        let [t, r] = e.data.state.size;
        return [r, t + (t ? o * 2 : 0) + n];
      }).spacing((e, t) => e.parent === t.parent ? s : s * 2);
      let h = u.hierarchy(this.state.data);
      u(h);
      let p = h.descendants().reverse();
      let d = h.links();
      let m = axisAndZoomUtilities.h5h();
      let f = axisAndZoomUtilities.VV$(p, e => e.x - e.xSize / 2);
      let g = axisAndZoomUtilities.Fp7(p, e => e.x + e.xSize / 2);
      let v = axisAndZoomUtilities.VV$(p, e => e.y);
      let b = axisAndZoomUtilities.Fp7(p, e => e.y + e.ySize - n);
      Object.assign(this.state, {
        minX: f,
        maxX: g,
        minY: v,
        maxY: b
      });
      if (l) {
        this.fit();
      }
      let y = e && p.find(t => t.data === e) || h;
      let x = y.data.state.x0 ?? y.x;
      let w = y.data.state.y0 ?? y.y;
      let k = this.g.selectAll(markmapResourceLoader.filterChildNodes("g")).data(p, e => e.data.state.key);
      let S = k.enter().append("g").attr("data-depth", e => e.data.state.depth).attr("data-path", e => e.data.state.path).attr("transform", e => `translate(${w + y.ySize - e.ySize},${x + y.xSize / 2 - e.xSize})`);
      let A = this.transition(k.exit());
      A.select("line").attr("x1", e => e.ySize - n).attr("x2", e => e.ySize - n);
      A.select("foreignObject").style("opacity", 0);
      A.attr("transform", e => `translate(${y.y + y.ySize - e.ySize},${y.x + y.xSize / 2 - e.xSize})`).remove();
      let T = k.merge(S).attr("class", e => {
        var t;
        return ["markmap-node", ((t = e.data.payload) == null ? undefined : t.fold) && "markmap-fold"].filter(Boolean).join(" ");
      });
      this.transition(T).attr("transform", e => `translate(${e.y},${e.x - e.xSize / 2})`);
      let C = T.selectAll(markmapResourceLoader.filterChildNodes("line")).data(e => [e], e => e.data.state.key).join(e => e.append("line").attr("x1", e => e.ySize - n).attr("x2", e => e.ySize - n), e => e, e => e.remove());
      this.transition(C).attr("x1", -1).attr("x2", e => e.ySize - n + 2).attr("y1", e => e.xSize).attr("y2", e => e.xSize).attr("stroke", e => c(e.data)).attr("stroke-width", H);
      let M = T.selectAll(markmapResourceLoader.filterChildNodes("circle")).data(e => {
        var t;
        if ((t = e.data.children) != null && t.length) {
          return [e];
        } else {
          return [];
        }
      }, e => e.data.state.key).join(e => e.append("circle").attr("stroke-width", "1.5").attr("cx", e => e.ySize - n).attr("cy", e => e.xSize).attr("r", 0).on("click", (e, t) => this.handleClick(e, t)).on("mousedown", V), e => e, e => e.remove());
      this.transition(M).attr("r", 6).attr("cx", e => e.ySize - n).attr("cy", e => e.xSize).attr("stroke", e => c(e.data)).attr("fill", e => {
        var t;
        if ((t = e.data.payload) != null && t.fold && e.data.children) {
          return c(e.data);
        } else {
          return "#fff";
        }
      });
      let N = T.selectAll(markmapResourceLoader.filterChildNodes("foreignObject")).data(e => [e], e => e.data.state.key).join(e => {
        let t = e.append("foreignObject").attr("class", "markmap-foreign").attr("x", o).attr("y", 0).style("opacity", 0).on("mousedown", V).on("dblclick", V);
        t.append("xhtml:div").select(function (e) {
          let t = e.data.state.el.cloneNode(true);
          this.replaceWith(t);
          return t;
        }).attr("xmlns", "http://www.w3.org/1999/xhtml");
        return t;
      }, e => e, e => e.remove()).attr("width", e => Math.max(0, e.ySize - n - o * 2)).attr("height", e => e.xSize);
      this.transition(N).style("opacity", 1);
      let E = this.g.selectAll(markmapResourceLoader.filterChildNodes("path")).data(d, e => e.target.data.state.key).join(e => {
        let t = [w + y.ySize - n, x + y.xSize / 2];
        return e.insert("path", "g").attr("class", "markmap-link").attr("data-depth", e => e.target.data.state.depth).attr("data-path", e => e.target.data.state.path).attr("d", m({
          source: t,
          target: t
        }));
      }, e => e, e => {
        let t = [y.y + y.ySize - n, y.x + y.xSize / 2];
        return this.transition(e).attr("d", m({
          source: t,
          target: t
        })).remove();
      });
      this.transition(E).attr("stroke", e => c(e.target.data)).attr("stroke-width", e => H(e.target)).attr("d", e => {
        let t = e.source;
        let r = e.target;
        return m({
          source: [t.y + t.ySize - n, t.x + t.xSize / 2],
          target: [r.y, r.x + r.xSize / 2]
        });
      });
      p.forEach(e => {
        e.data.state.x0 = e.x;
        e.data.state.y0 = e.y;
      });
    }
    transition(e) {
      let {
        duration: t
      } = this.options;
      return e.transition().duration(t);
    }
    async fit() {
      let {
        width: e,
        height: t
      } = this.svg.node().getBoundingClientRect();
      let {
        fitRatio: r
      } = this.options;
      let {
        minX: n,
        maxX: o,
        minY: s,
        maxY: l
      } = this.state;
      let c = l - s;
      let u = o - n;
      let h = Math.min(e / c * r, t / u * r, 2);
      let p = axisAndZoomUtilities.CRH.translate((e - c * h) / 2 - s * h, (t - u * h) / 2 - n * h).scale(h);
      return this.transition(this.svg).call(this.zoom.transform, p).end().catch(markmapResourceLoader.noop);
    }
    findElement(e) {
      let t;
      this.g.selectAll(markmapResourceLoader.filterChildNodes("g")).each(function (r) {
        if (r.data === e) {
          t = {
            data: r,
            g: this
          };
        }
      });
      return t;
    }
    async ensureView(e, t) {
      var r;
      let n = (r = this.findElement(e)) == null ? undefined : r.data;
      if (!n) {
        return;
      }
      let o = this.svg.node();
      let {
        spacingHorizontal: s
      } = this.options;
      let l = o.getBoundingClientRect();
      let c = axisAndZoomUtilities.P2S(o);
      let [u, h] = [n.y, n.y + n.ySize - s + 2].map(e => e * c.k + c.x);
      let [p, d] = [n.x - n.xSize / 2, n.x + n.xSize / 2].map(e => e * c.k + c.y);
      let m = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        ...t
      };
      let f = [m.left - u, l.width - m.right - h];
      let g = [m.top - p, l.height - m.bottom - d];
      let v = f[0] * f[1] > 0 ? j(f, Math.abs) / c.k : 0;
      let b = g[0] * g[1] > 0 ? j(g, Math.abs) / c.k : 0;
      if (v || b) {
        let e = c.translate(v, b);
        return this.transition(this.svg).call(this.zoom.transform, e).end().catch(markmapResourceLoader.noop);
      }
    }
    async rescale(e) {
      let t = this.svg.node();
      let {
        width: r,
        height: n
      } = t.getBoundingClientRect();
      let o = axisAndZoomUtilities.P2S(t);
      let s = o.translate((r / 2 - o.x) * (1 - e) / o.k, (n / 2 - o.y) * (1 - e) / o.k).scale(e);
      return this.transition(this.svg).call(this.zoom.transform, s).end().catch(markmapResourceLoader.noop);
    }
    destroy() {
      this.svg.on(".zoom", null);
      this.svg.html(null);
      this.revokers.forEach(e => {
        e();
      });
    }
    static create(e, t, r = null) {
      let n = new U(e, t);
      if (r) {
        n.setData(r);
        n.fit();
      }
      return n;
    }
    constructor(e, t) {
      this.options = l;
      this.revokers = [];
      this.imgCache = {};
      this.handleZoom = e => {
        let {
          transform: t
        } = e;
        this.g.attr("transform", t);
      };
      this.handlePan = e => {
        e.preventDefault();
        let t = axisAndZoomUtilities.P2S(this.svg.node());
        let r = t.translate(-e.deltaX / t.k, -e.deltaY / t.k);
        this.svg.call(this.zoom.transform, r);
      };
      this.handleClick = (e, t) => {
        let r = this.options.toggleRecursively;
        if (o ? e.metaKey : e.ctrlKey) {
          r = !r;
        }
        this.toggleNode(t.data, r);
      };
      this.svg = e.datum ? e : axisAndZoomUtilities.select(e);
      this.styleNode = this.svg.append("style");
      this.zoom = axisAndZoomUtilities.sPX().filter(e => this.options.scrollForPan && e.type === "wheel" ? e.ctrlKey && !e.button : (!e.ctrlKey || e.type === "wheel") && !e.button).on("zoom", this.handleZoom);
      this.setOptions(t);
      this.state = {
        id: this.options.id || this.svg.attr("id") || markmapResourceLoader.generateId(),
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0
      };
      this.g = this.svg.append("g");
      this.debouncedRefresh = markmapResourceLoader.createDebounce(() => this.setData(), 200);
      this.revokers.push(W.tap(() => {
        this.setData();
      }));
    }
  }
  require.d(exports, {
    MarkmapView: function () {
      return U;
    }
  });
}