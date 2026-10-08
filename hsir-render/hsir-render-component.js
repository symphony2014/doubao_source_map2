// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'xssContentSanitizer'
// - Resolved require(508971) to 'xss-content-sanitizer'
// - Renamed variable 'o' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'onceFunctionFactory'
// - Resolved require(80532) to 'once-function-factory'
// - Renamed variable 'a' to 'isEmptyUtil'
// - Resolved require(201438) to 'is-empty-util'
// - Renamed variable 'l' to 'classnamesUtils'
// - Resolved require(946565) to 'classnames-utils'
// - Renamed variable 'u' to 'i18nTranslationUtils'
// - Resolved require(852399) to 'i18n-translation-utils'
// - Renamed variable 'c' to 'reactFunctionMemoHook'
// - Resolved require(983998) to 'react-function-memo-hook'
// - Renamed variable 'h' to 'warningIcon_1'
// - Resolved require(215884) to 'warning-icon_1'
// - Renamed variable 'd' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'f' to 'reactPanzoomHook'
// - Resolved require(872098) to 'react-panzoom-hook'
// - Renamed variable 'O' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'K' to 'usePanzoom' (module 872098)
// - Updated imported property 'Z' to 'useMemoizedCallback' (module 983998)
// - Updated imported property 'g1' to 'useTranslationWithFallback' (module 852399)
// - Updated imported property 'Z' to 'createOnce' (module 80532)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'Z' to 'WarningIcon' (module 215884)
// - Updated imported property 'Z' to 'isEmpty' (module 201438)
// - Updated imported property 'C' to 'sanitizeUrl' (module 508971)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: hsir-render.1da2d47c.js
         * chunkId: 27677
         * moduleId: 530447
         */
module.exports = function (module, exports, require) {
  var xssContentSanitizer = require("xss-content-sanitizer") /*id: 508971*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var onceFunctionFactory = require("once-function-factory") /*id: 80532*/;
  var isEmptyUtil = require("is-empty-util") /*id: 201438*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var i18nTranslationUtils = require("i18n-translation-utils") /*id: 852399*/;
  var reactFunctionMemoHook = require("react-function-memo-hook") /*id: 983998*/;
  var warningIcon_1 = require("warning-icon_1") /*id: 215884*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var reactPanzoomHook = require("react-panzoom-hook") /*id: 872098*/;
  let p = t => {
    let {
      containerEle: e,
      imgEle: n
    } = t;
    let {
      panzoomRef: r,
      isInit: i
    } = reactPanzoomHook.usePanzoom(e, n, {
      padding: 0,
      fullscreenMaxWidth: 1000
    });
    let a = reactFunctionMemoHook.useMemoizedCallback(() => {
      var t;
      if ((t = r.current) === null || t === undefined) {
        return undefined;
      } else {
        return t.zoomIn();
      }
    });
    let l = reactFunctionMemoHook.useMemoizedCallback(() => {
      var t;
      if ((t = r.current) === null || t === undefined) {
        return undefined;
      } else {
        return t.zoomOut();
      }
    });
    let s = reactFunctionMemoHook.useMemoizedCallback(() => {
      var t;
      var e;
      if ((e = r.current) === null || e === undefined) {
        return undefined;
      } else if ((t = e.fit) === null || t === undefined) {
        return undefined;
      } else {
        return t.call(e);
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!e) {
        return;
      }
      let t = new ResizeObserver(s);
      t.observe(e);
      return () => t.disconnect();
    }, [e]);
    return {
      zoomIn: a,
      zoomOut: l,
      fit: s,
      isInit: i
    };
  };
  function m(t, e, n) {
    var r;
    if ((e = typeof (r = function (t, e) {
      if (typeof t != "object" || !t) {
        return t;
      }
      var n = t[Symbol.toPrimitive];
      if (n !== undefined) {
        var r = n.call(t, e || "default");
        if (typeof r != "object") {
          return r;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (e === "string" ? String : Number)(t);
    }(e, "string")) == "symbol" ? r : r + "") in t) {
      Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      t[e] = n;
    }
    return t;
  }
  let g = {
    className: "labeltext",
    fontPx: 16,
    lineHeightEm: 1.2,
    family: "system-ui,\"Noto Sans CJK SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    anchor: "end"
  };
  let v = {
    className: "captiontext",
    fontPx: 13,
    lineHeightEm: 1.2,
    family: "system-ui,\"Noto Sans CJK SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    anchor: "middle"
  };
  let x = {
    className: "vbtext",
    fontPx: 16,
    lineHeightEm: 1.2,
    family: "system-ui,\"Noto Sans CJK SC\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif",
    anchor: "middle",
    writingMode: "vertical-rl",
    orientation: "upright"
  };
  let w = t => String(t || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  function b(t) {
    let e = t.codePointAt(0);
    return e >= 19968 && e <= 40959 || e >= 13312 && e <= 19903 || e >= 131072 && e <= 173791 || e >= 173824 && e <= 177983 || e >= 177984 && e <= 178207 || e >= 178208 && e <= 183983 || e >= 63744 && e <= 64255 || e >= 194560 && e <= 195103;
  }
  function $(t, e, n) {
    let r = function (t, e, n) {
      if (e <= 1 || !t) {
        return [t || ""];
      }
      let r = [];
      let o = [];
      let i = 0;
      for (let a of t) {
        let t = (b(a) ? 1 : 0.55) * n.fontPx;
        if (i + t > e && o.length) {
          r.push(o.join(""));
          o = [a];
          i = t;
        } else {
          o.push(a);
          i += t;
        }
      }
      if (o.length) {
        r.push(o.join(""));
      }
      return r;
    }(t || "", e, n);
    let o = Math.min(e, r.length ? Math.max(...r.map(t => function (t, e) {
      if (!t) {
        return 0;
      }
      let n = 0;
      for (let r of t) {
        n += (b(r) ? 1 : 0.55) * e;
      }
      return n;
    }(t, n.fontPx))) : 0);
    let i = n.lineHeightEm * n.fontPx;
    let a = (Math.max(1, r.length) - 1) * i + n.fontPx;
    return {
      lines: r,
      estW: o,
      estH: a
    };
  }
  class y {
    _interp_col_to_px(t) {
      let e = this.col_map;
      if (!(e == null ? undefined : e.breaks) || e.breaks.length < 2) {
        return this.origin_x + (t - 1) * this.column_spacing;
      }
      let n = e.breaks;
      let r = e.pixels;
      let o = n.length;
      if (t <= n[0]) {
        let e = (r[1] - r[0]) / (n[1] - n[0]);
        return r[0] + (t - n[0]) * e;
      }
      if (t >= n[o - 1]) {
        let e = (r[o - 1] - r[o - 2]) / (n[o - 1] - n[o - 2]);
        return r[o - 1] + (t - n[o - 1]) * e;
      }
      let i = 0;
      let a = o - 1;
      while (a - i > 1) {
        let e = i + a >> 1;
        if (t >= n[e]) {
          i = e;
        } else {
          a = e;
        }
      }
      let l = (t - n[i]) / (n[a] - n[i]);
      return r[i] + l * (r[a] - r[i]);
    }
    x(t, e = 0) {
      return this._interp_col_to_px(t) + e;
    }
    y(t, e = 0) {
      return this.origin_y + t * this.row_spacing + e;
    }
    point(t, e, n = 0, r = 0) {
      return [this.x(t, n), this.y(e, r)];
    }
    constructor(t = 40, e = 0, n = 80, r = 150, o = null) {
      m(this, "origin_x", undefined);
      m(this, "origin_y", undefined);
      m(this, "column_spacing", undefined);
      m(this, "row_spacing", undefined);
      m(this, "col_map", undefined);
      this.origin_x = t;
      this.origin_y = e;
      this.column_spacing = n;
      this.row_spacing = r;
      this.col_map = o;
    }
  }
  let M = function (t, e = 1) {
    return [Math.round(t[0] * e), Math.round(t[1] * e)].join(",");
  };
  function _(t) {
    let e = ["```hsir", "'''hsir"];
    let n = false;
    let r = null;
    let o = [];
    for (let i of t) {
      let t = i.trim().toLowerCase();
      if (!n && e.some(e => t.startsWith(e))) {
        n = true;
        r = t.slice(0, 3);
        continue;
      }
      if (n) {
        if (r && t.startsWith(r)) {
          break;
        }
        o.push(i);
      }
    }
    if (o.length) {
      return o;
    } else {
      return t;
    }
  }
  function E(t) {
    let e = String(t || "").trim();
    if (!e) {
      return 0;
    }
    let n = e.match(/^([+-]?\d+(?:\.\d+)?)[ ]*\/[ ]*(\d+(?:\.\d+)?)$/);
    if (n) {
      let t = parseFloat(n[1]);
      let r = parseFloat(n[2]);
      if (!isNaN(t) && !isNaN(r) && r !== 0) {
        return t / r;
      }
      throw Error(`Bad fraction: ${e}`);
    }
    let r = parseFloat(e);
    if (isNaN(r)) {
      throw Error(`Bad number: ${e}`);
    }
    return r;
  }
  function S(t) {
    let e = _(t.split(/\r?\n/));
    let n = {
      hl: [],
      vl: [],
      hb: [],
      vb: []
    };
    for (let t of e) {
      let e = t.trim();
      if (!e || e.startsWith("#")) {
        continue;
      }
      let r = e.split(/\s+/);
      let o = r[0].toUpperCase();
      if (o === "HL") {
        let t = e.match(/^HL\s+"(.*?)"\s+(\d+)\s+(.+)$/);
        if (!t) {
          throw Error(`Bad HL: ${e}`);
        }
        let r = t[1];
        let o = parseInt(t[2], 10);
        let i = t[3].trim().split(/\s+/).map(E);
        n.hl.push({
          name: r,
          row: o,
          lengths: i
        });
      } else if (o === "VL") {
        if (r.length !== 4) {
          throw Error(`Bad VL: ${e}`);
        }
        n.vl.push({
          x: E(r[1]),
          row0: parseInt(r[2], 10),
          row1: parseInt(r[3], 10)
        });
      } else if (o === "HB") {
        let t = e.match(/^HB\s+"(.*?)"\s+([NSns])\s+(\d+)\s+(\S+)\s+(\S+)$/);
        if (!t) {
          throw Error(`Bad HB: ${e}`);
        }
        n.hb.push({
          label: t[1],
          dir_ns: t[2].toUpperCase(),
          row: parseInt(t[3], 10),
          x0: E(t[4]),
          x1: E(t[5])
        });
      } else if (o === "VB") {
        let t = e.match(/^VB\s+"(.*?)"\s+(\d+)\s+(\d+)\s+(\d+)$/);
        if (!t) {
          throw Error(`Bad VB: ${e}`);
        }
        n.vb.push({
          label: t[1],
          col: parseInt(t[2], 10),
          row0: parseInt(t[3], 10),
          row1: parseInt(t[4], 10)
        });
      } else {
        throw Error(`Unknown tag: ${o}`);
      }
    }
    return n;
  }
  function k(t, e) {
    return t.point(e.column, e.row, e.dx || 0, e.dy || 0);
  }
  function N(t, e) {
    return [t.point(e.column, e.row), t.point(e.column + e.span, e.row)];
  }
  function L(t, e) {
    let n = [];
    let r = t.grid;
    for (let o of t.labels) {
      let t = k(r, o.location);
      n.push(t);
      if (e > 0) {
        n.push([t[0] - e - 8, t[1]]);
      }
    }
    for (let e of t.segments) {
      let [t, o] = N(r, e);
      n.push(t, o);
      if (e.tick_height > 0) {
        n.push([t[0], t[1] + e.tick_height], [o[0], o[1] + e.tick_height]);
      }
    }
    for (let e of t.guides) {
      for (let t of e.points) {
        n.push(k(r, t));
      }
    }
    for (let e of t.braces) {
      let t = k(r, e.points[0]);
      let o = k(r, e.points[1]);
      n.push(t, o);
      let i = Math.max(6, e.amplitude_px || 15);
      let a = Math.max(6, e.offset_px || 40);
      if ((e.direction || "").toLowerCase() === "north" || (e.direction || "").toLowerCase() === "south") {
        let e = i * 2 + a + v.fontPx * 2;
        n.push([t[0], t[1] + e], [o[0], o[1] + e]);
      } else {
        let {
          estW: r,
          estH: l
        } = $(e.label || "", 260, v);
        let s = (e.direction || "").toLowerCase() === "east" ? 1 : -1;
        let u = t[0];
        let c = (t[1] + o[1]) / 2;
        let h = s * (a + i + r + 8);
        let d = s * (a + i + 2);
        let f = l / 2;
        n.push([u + h, c - f], [u + h, c + f], [u + d, c - f], [u + d, c + f]);
      }
    }
    return n;
  }
  let P = (t, e) => Math.max(1, Math.min(Math.abs(e), t / 4));
  let A = function (t, e, n, r, o = "line", i = "") {
    return `<line class="${o}" x1="${t.toFixed(3)}" y1="${e.toFixed(3)}" x2="${n.toFixed(3)}" y2="${r.toFixed(3)}" ${i}/>`;
  };
  let C = function (t, e = "line", n = "") {
    return `<path class="${e}" d="${t}" ${n}/>`;
  };
  function R(t, e, n, r, o, i) {
    if (!(n == null ? undefined : n.length)) {
      n = [""];
    }
    let a = o ? ` text-anchor="${o}"` : "";
    let l = [`<text class="${r}" x="${t.toFixed(3)}" y="${e.toFixed(3)}"${a} xml:space="preserve">`];
    n.forEach((e, n) => {
      let r = n === 0 ? "0" : `${i}em`;
      l.push(`<tspan x="${t.toFixed(3)}" dy="${r}">${w(e)}</tspan>`);
    });
    l.push("</text>");
    return l.join("");
  }
  let F = t => (t || "").toLowerCase().includes("dashed");
  let j = (t, e, n) => [e + t[0], n - t[1]];
  function z(t) {
    let h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let d = S(t);
    let {
      units_per_col: f,
      Xmax_cols: p
    } = function (t, e = 8) {
      let n = 0;
      for (let e of t.hl) {
        n = Math.max(n, e.lengths.reduce((t, e) => t + Math.abs(e), 0));
      }
      for (let e of t.hb) {
        n = Math.max(n, Math.abs(e.x0), Math.abs(e.x1));
      }
      for (let e of t.vl) {
        n = Math.max(n, Math.abs(e.x));
      }
      let r = n > 0 ? n / e : 1;
      let o = r > 0 ? n / r : 0;
      return {
        units_per_col: r,
        Xmax_cols: o
      };
    }(d, 8);
    let m = h.labelWidthPx ?? 150;
    let w = h.fitWidthPx ?? 880;
    let b = h.paddingPx ?? 24;
    let _ = h.contentShiftX ?? -40;
    let E = h.contentShiftY ?? -20;
    let z = h.canvasW ?? 1000;
    let W = h.canvasH ?? 600;
    let O = h.backgroundFill ?? "transparent";
    let H = h.color ?? "#2756ff";
    let B = h.strokePx ?? 1.5;
    let T = function (t, e, n, r = 0.3, o = 1.4) {
      let i = new y();
      let a = [];
      let l = [];
      let s = [];
      let u = [];
      let {
        gridRow: c
      } = function (t) {
        let e = 0;
        for (let n of t.hl) {
          e = Math.max(e, n.row);
        }
        for (let n of t.vl) {
          e = Math.max(e, n.row0, n.row1);
        }
        for (let n of t.hb) {
          e = Math.max(e, n.row);
        }
        for (let n of t.vb) {
          e = Math.max(e, n.row0, n.row1);
        }
        return {
          Rmax: e,
          gridRow: t => e - t
        };
      }(t);
      for (let n of t.hl) {
        let t = c(n.row);
        a.push({
          location: {
            column: 0.5,
            row: t,
            dx: 0.2,
            dy: 0
          },
          text: n.name
        });
        let r = 0;
        for (let o of n.lengths) {
          let n = Math.abs(o);
          if (!n) {
            continue;
          }
          let i = e > 0 ? n / e : n;
          let a = 1 + (e > 0 ? r / e : r);
          let s = o >= 0 ? "line" : "line,dashed";
          l.push({
            column: a,
            row: t,
            span: i,
            tick_height: 12,
            style: s,
            tick_left: true,
            tick_right: true
          });
          r += n;
        }
      }
      for (let n of t.vl) {
        let t = e > 0 ? n.x / e : n.x;
        s.push({
          points: [{
            column: 1 + t,
            row: c(n.row0)
          }, {
            column: 1 + t,
            row: c(n.row1)
          }]
        });
      }
      let h = new Map();
      for (let e of t.hb) {
        var d;
        let t = e.row;
        if (!h.has(t)) {
          h.set(t, []);
        }
        if ((d = h.get(t)) !== null && d !== undefined) {
          d.push(e);
        }
      }
      let f = new Map();
      for (let [t, e] of h.entries()) {
        if (e.length <= 1) {
          for (let t of e) {
            f.set(t, (t.dir_ns || "N").toUpperCase());
          }
        } else {
          for (let [t, n] of function (t) {
            let e = t.map(t => Math.abs(t.x1 - t.x0)).slice().sort((t, e) => t - e);
            let n = e.length ? e[Math.floor((e.length - 1) / 2)] : 0;
            let r = [];
            let o = [];
            let i = new Map();
            let a = t.slice().sort((t, e) => {
              let n = Math.abs(t.x1 - t.x0);
              let r = Math.abs(e.x1 - e.x0);
              if (Math.abs(n - r) > 1e-9) {
                return r - n;
              }
              let o = Math.min(t.x0, t.x1);
              let i = Math.min(e.x0, e.x1);
              if (o !== i) {
                return o - i;
              } else {
                return Math.max(t.x0, t.x1) - Math.max(e.x0, e.x1);
              }
            });
            let l = (t, e, n) => {
              let r = 0;
              for (let o of t) {
                r += function (t, e, n, r) {
                  let o = Math.max(t, n);
                  let i = Math.min(e, r);
                  if (i > o) {
                    return i - o;
                  } else {
                    return 0;
                  }
                }(e, n, o.start, o.end);
              }
              return r;
            };
            for (let t of a) {
              let e;
              let a = Math.min(t.x0, t.x1);
              let s = Math.max(t.x0, t.x1);
              let u = l(r, a, s);
              let c = l(o, a, s);
              let h = (t.dir_ns || "N").toUpperCase();
              let d = s - a;
              e = u < c ? "N" : c < u ? "S" : d > n && n > 0 ? "S" : h === "S" ? "S" : "N";
              i.set(t, e);
              if (e === "N") {
                r.push({
                  start: a,
                  end: s
                });
              } else {
                o.push({
                  start: a,
                  end: s
                });
              }
            }
            return i;
          }(e).entries()) {
            f.set(t, n);
          }
        }
      }
      for (let n of t.hb) {
        let t = c(n.row);
        let r = e > 0 ? n.x0 / e : n.x0;
        let o = e > 0 ? n.x1 / e : n.x1;
        let i = f.has(n) ? f.get(n) : (n.dir_ns || "N").toUpperCase();
        let a = i === "N" ? 23.5 : -10.5;
        u.push({
          points: [{
            column: 1 + r,
            row: t,
            dx: 0,
            dy: a
          }, {
            column: 1 + o,
            row: t,
            dx: 0,
            dy: a
          }],
          direction: i === "N" ? "north" : "south",
          label: n.label,
          offset_px: 40,
          amplitude_px: 15
        });
      }
      for (let e of t.vb) {
        let t = 1 + n + r + e.col * o;
        let i = c(e.row0);
        let a = c(e.row1);
        let l = Math.min(i, a);
        let s = Math.max(i, a);
        u.push({
          points: [{
            column: t,
            row: l
          }, {
            column: t,
            row: s
          }],
          direction: "west",
          label: e.label,
          offset_px: 40,
          amplitude_px: 15
        });
      }
      return {
        grid: i,
        labels: a,
        segments: l,
        guides: s,
        braces: u
      };
    }(d, f, p, 0.3, 1.4);
    return function (t, e, n, r, o, i, a, l, s, u) {
      let c = Math.max(a, function (t, e) {
        let n = L(t, e);
        if (!n.length) {
          return {
            minx: 0,
            maxx: 0,
            miny: 0,
            maxy: 0,
            width: 0,
            height: 0
          };
        }
        let r = n.map(t => t[0]);
        let o = n.map(t => t[1]);
        let i = Math.min(...r);
        let a = Math.max(...r);
        let l = Math.min(...o);
        let s = Math.max(...o);
        return {
          minx: i,
          maxx: a,
          miny: l,
          maxy: s,
          width: a - i,
          height: s - l
        };
      }(t, e).height + n * 2 + Math.abs(o) + 8);
      let h = [];
      h.push(function (t, e, n, r, o) {
        let i = [`:root { --stroke-blue:${r}; }`, `.line{stroke:var(--stroke-blue);stroke-width:${n}px;fill:none;vector-effect:non-scaling-stroke;stroke-linecap:round;stroke-linejoin:round;}`, `.guide{stroke:var(--stroke-blue);stroke-width:${n}px;fill:none;vector-effect:non-scaling-stroke;stroke-dasharray:6 4;stroke-linecap:round;stroke-linejoin:round;}`];
        for (let t of o) {
          i.push(`.${t.className}{font-family:${t.family};font-size:${t.fontPx}px;dominant-baseline:middle;${t.anchor ? `text-anchor:${t.anchor};` : ""}${t.writingMode ? `writing-mode:${t.writingMode};` : ""}${t.orientation ? `text-orientation:${t.orientation};` : ""}}`);
        }
        return `<svg class="svg-host" xmlns="http://www.w3.org/2000/svg" width="${t}" height="${e}" viewBox="0 0 ${t} ${e}"><style>${i.join("\n")}</style>`;
      }(i, c, u, s, [g, v, x]));
      h.push(`<rect x="0" y="0" width="${i}" height="${c}" fill="${l}"/>`);
      let [d, f] = function (t, e, n, r, o, i, a) {
        let l = L(t, o);
        if (!l.length) {
          return [r, r];
        }
        let s = l.map(t => t[0]);
        let u = l.map(t => t[1]);
        let c = Math.min(...s);
        let h = Math.min(...u);
        let d = Math.max(...u);
        let f = Math.max(0, (e - (Math.max(...s) - c + r * 2)) / 2);
        let p = Math.max(0, (n - (d - h + r * 2)) / 2);
        return [f + r - c + i, p + r + d + a];
      }(t, i, c, n, e, r, o);
      let p = t.grid;
      let m = new Set();
      for (let e of t.segments) {
        let [t, n] = N(p, e);
        m.add(M(t));
        m.add(M(n));
      }
      for (let n of t.labels) {
        let [t, r] = j(k(p, n.location), d, f);
        let {
          lines: o
        } = $(n.text, e, g);
        let i = g.lineHeightEm * g.fontPx;
        let a = r - (o.length - 1) * i;
        h.push(R(t, a, o, g.className, "end", g.lineHeightEm));
      }
      for (let e of t.segments) {
        let [t, n] = N(p, e);
        let [r, o] = j(t, d, f);
        let [i, a] = j(n, d, f);
        let l = F(e.style) ? "stroke-dasharray=\"6 4\"" : "";
        h.push(A(r, o, i, a, "line", l));
        if (e.tick_height > 0) {
          let [l, s] = j([t[0], t[1] + e.tick_height], d, f);
          let [u, c] = j([n[0], n[1] + e.tick_height], d, f);
          if (e.tick_left) {
            h.push(A(r, o, l, s, "line"));
          }
          if (e.tick_right) {
            h.push(A(i, a, u, c, "line"));
          }
        }
      }
      for (let e of t.guides) {
        let t = e.points.map(t => k(p, t));
        if (t.length < 2) {
          continue;
        }
        let n = t[0][0];
        let r = t.every(t => Math.abs(t[0] - n) < 1e-9);
        for (let e = 0; e < t.length - 1; e++) {
          let [n, r] = j(t[e], d, f);
          let [o, i] = j(t[e + 1], d, f);
          h.push(A(n, r, o, i, "guide"));
        }
        if (!r) {
          let e = (t, e) => {
            let n = e[0];
            let r = e[1];
            let o = Math.hypot(n, r);
            if (!o) {
              return;
            }
            let i = -r / o;
            let a = n / o;
            let l = [t[0] + i * 18, t[1] + a * 18];
            let [s, u] = j(t, d, f);
            let [c, p] = j(l, d, f);
            h.push(A(s, u, c, p, "line"));
          };
          let n = t[0];
          let r = t[t.length - 1];
          if (!m.has(M(n))) {
            e(n, [t[1][0] - n[0], t[1][1] - n[1]]);
          }
          if (!m.has(M(r))) {
            e(r, [r[0] - t[t.length - 2][0], r[1] - t[t.length - 2][1]]);
          }
        }
      }
      for (let e of t.braces) {
        if (!e.points || e.points.length < 2) {
          continue;
        }
        let t = k(p, e.points[0]);
        let r = k(p, e.points[1]);
        let o = Math.max(4, e.amplitude_px || 15);
        let a = Math.max(2, e.offset_px || 40);
        if ((e.direction || "").toLowerCase() === "north" || (e.direction || "").toLowerCase() === "south") {
          let n = (t[1] + r[1]) / 2;
          let [i, l] = j([t[0], n], d, f);
          let [s, u] = j([r[0], n], d, f);
          let c = (e.direction || "").toLowerCase() === "north";
          let p = function (t, e, n, r, o) {
            if (t > e) {
              [t, e] = [e, t];
            }
            let i = Math.max(2, e - t);
            let a = P(i, r);
            let l = o ? n - a : n + a;
            let s = +!!o;
            let u = +!o;
            let c = [];
            c.push(`M ${t},${n}`);
            c.push(`A ${a} ${a} 0 0 ${s} ${t + a} ${l}`);
            c.push(`L ${e - i / 2 - a} ${l}`);
            c.push(`A ${a} ${a} 0 0 ${u} ${e - i / 2} ${o ? l - a : l + a}`);
            c.push(`A ${a} ${a} 0 0 ${u} ${e - i / 2 + a} ${l}`);
            c.push(`L ${e - a} ${l}`);
            c.push(`A ${a} ${a} 0 0 ${s} ${e} ${n}`);
            return c.join(" ");
          }(i, s, l, o, c);
          h.push(C(p, "line"));
          if (e.label) {
            let t = (i + s) / 2;
            let n = Math.max(30, Math.abs(s - i) - 6);
            let {
              lines: r
            } = $(e.label, n, v);
            let o = v.lineHeightEm * v.fontPx;
            let u = c ? l - a : l + a;
            let d = c ? u - (r.length - 1) * o : u;
            h.push(R(t, d, r, v.className, "middle", v.lineHeightEm));
          }
        } else {
          let l = (t[0] + r[0]) / 2;
          let [s, u] = j([l, t[1]], d, f);
          let [c, p] = j([l, r[1]], d, f);
          let m = (e.direction || "").toLowerCase() !== "west";
          let g = function (t, e, n, r, o) {
            if (e > n) {
              [e, n] = [n, e];
            }
            let i = Math.max(2, n - e);
            let a = P(i, r);
            let l = o ? t - a : t + a;
            let s = +!o;
            let u = +!!o;
            let c = [];
            c.push(`M ${t},${e}`);
            c.push(`A ${a} ${a} 0 0 ${s} ${l} ${e + a}`);
            c.push(`L ${l} ${n - i / 2 - a}`);
            c.push(`A ${a} ${a} 0 0 ${u} ${o ? l - a : l + a} ${n - i / 2}`);
            c.push(`A ${a} ${a} 0 0 ${u} ${l} ${n - i / 2 + a}`);
            c.push(`L ${l} ${n - a}`);
            c.push(`A ${a} ${a} 0 0 ${s} ${t} ${n}`);
            return c.join(" ");
          }(s, u, p, o, m);
          h.push(C(g, "line"));
          if (e.label) {
            let t;
            let r;
            let l;
            let c = (u + p) / 2;
            if (m) {
              r = Math.max(60, Math.min(260, (t = s - o - a - 6) - n - 8));
              l = "end";
            } else {
              r = Math.max(60, Math.min(260, i - (t = s + o + a + 6) - n - 8));
              l = "start";
            }
            let {
              lines: d
            } = $(e.label, r, v);
            let f = v.lineHeightEm * v.fontPx;
            let g = c - (d.length - 1) * f / 2;
            h.push(R(t, g, d, v.className, l, v.lineHeightEm));
          }
        }
      }
      h.push("</svg>");
      return h.join("\n");
    }(T = function (t, e = 880, n = 1.4, r = 150) {
      let o = Infinity;
      let i = -Infinity;
      let a = false;
      let l = t => {
        o = Math.min(o, t);
        i = Math.max(i, t);
      };
      for (let e of t.labels) {
        l(e.location.column);
      }
      for (let e of t.segments) {
        l(e.column);
        l(e.column + e.span);
      }
      for (let e of t.guides) {
        for (let t of e.points) {
          l(t.column);
        }
      }
      for (let e of t.braces) {
        for (let t of e.points) {
          l(t.column);
        }
        if ((e.direction || "").toLowerCase() === "west") {
          a = true;
        }
      }
      if (!isFinite(o) || e <= 0) {
        return t;
      }
      let s = i - o;
      let u = a ? n : 0;
      let c = Math.max(1, e - Math.max(0, r));
      let h = Math.min(t.grid.column_spacing, c / Math.max(0.000001, s + u));
      if (Math.abs(h - t.grid.column_spacing) < 1e-9) {
        return t;
      } else {
        return {
          grid: new y(t.grid.origin_x, t.grid.origin_y, h, t.grid.row_spacing, t.grid.col_map || null),
          labels: t.labels,
          segments: t.segments,
          guides: t.guides,
          braces: t.braces
        };
      }
    }(T, w, 1.4, m), m, b, _, E, z, W, O, H, B);
  }
  var W = {
    container: "container-_novhv",
    img: "img-kk4V3a",
    "error-wrapper": "error-wrapper-zJjGtE",
    "error-container": "error-container-vS5Rw4",
    "error-icon": "error-icon-LM9NoK",
    "error-text": "error-text-Vfupde"
  };
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let H = reactCoreLibraryReexport.forwardRef(function (t, e) {
    let {
      code: n,
      loading: r,
      className: a,
      onClick: l,
      onSuccess: f,
      onError: m,
      renderSvgParams: g
    } = t;
    let v = i18nTranslationUtils.useTranslationWithFallback();
    let [x, w] = reactCoreLibraryReexport.useState("");
    let [b, $] = reactCoreLibraryReexport.useState(null);
    let [y, M] = reactCoreLibraryReexport.useState(null);
    let [E, k] = reactCoreLibraryReexport.useState(false);
    let {
      zoomIn: N,
      zoomOut: L,
      fit: P,
      isInit: A
    } = p({
      containerEle: b,
      imgEle: y
    });
    reactCoreLibraryReexport.useImperativeHandle(e, () => ({
      zoomIn: N,
      zoomOut: L,
      fit: P
    }));
    let C = reactCoreLibraryReexport.useRef(r);
    let R = reactFunctionMemoHook.useMemoizedCallback(() => {
      if (A) {
        P();
      }
      if (!r && f != null) {
        f();
      }
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (A) {
        P();
      }
    }, [A]);
    let F = reactFunctionMemoHook.useMemoizedCallback(onceFunctionFactory.createOnce(t => {
      k(true);
      if (m != null) {
        m(t);
      }
    }));
    reactCoreLibraryReexport.useEffect(() => {
      let t = _(n.split(/\r?\n/));
      let e = "";
      for (let n of t) {
        try {
          S(n);
          e += `${n}
`;
        } catch (t) {
          break;
        }
      }
      w(z(e, g));
    }, [n]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!r && !E) {
        try {
          w(z(n, g));
          loggerServiceCore.defaultLogger.persist.info({
            eventName: "hsir-render-success"
          });
          if (C.current) {
            if (f != null) {
              f();
            }
          }
        } catch (t) {
          F(t);
          loggerServiceCore.defaultLogger.persist.error({
            error: t,
            eventName: "hsir-render-error"
          });
        }
      }
    }, [n, r, E]);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: $,
      onClick: l,
      className: s("w-full h-full relative", W.container, a),
      children: [reactJsxRuntimeCoreReexport.jsx(B, {
        setImgEle: M,
        svg: x,
        onError: F,
        onLoad: R
      }), E ? reactJsxRuntimeCoreReexport.jsx("div", {
        className: W["error-wrapper"],
        children: reactJsxRuntimeCoreReexport.jsxs("div", {
          className: W["error-container"],
          children: [reactJsxRuntimeCoreReexport.jsx(warningIcon_1.WarningIcon, {
            className: W["error-icon"]
          }), reactJsxRuntimeCoreReexport.jsx("div", {
            className: W["error-text"],
            children: v("reading_mindmap_toast_reAsk")
          })]
        })
      }) : null]
    });
  });
  let B = reactCoreLibraryReexport.memo(reactCoreLibraryReexport.forwardRef(function (t) {
    let {
      svg: e,
      setImgEle: n,
      onLoad: i,
      onError: l
    } = t;
    let s = reactCoreLibraryReexport.useRef(false);
    let u = reactCoreLibraryReexport.useMemo(() => {
      if (isEmptyUtil.isEmpty(e)) {
        return "";
      }
      try {
        let t = new DOMParser().parseFromString(e, "image/svg+xml").documentElement;
        let n = parseFloat(t.getAttribute("width") || "0");
        let r = parseFloat(t.getAttribute("height") || "0");
        if (n > 0 && r > 0) {
          if (!t.hasAttribute("viewBox")) {
            t.setAttribute("viewBox", `0 0 ${n} ${r}`);
          }
          let e = window.devicePixelRatio || 2;
          t.setAttribute("width", String(n * e));
          t.setAttribute("height", String(r * e));
        }
        let o = new XMLSerializer().serializeToString(t);
        return `data:image/svg+xml;utf8,${encodeURIComponent(o)}`;
      } catch (t) {
        return `data:image/svg+xml;utf8,${encodeURIComponent(e)}`;
      }
    }, [e]);
    reactCoreLibraryReexport.useEffect(() => {
      if (u) {
        let t = setTimeout(() => {
          if (!s.current && l != null) {
            l(Error("img render timeout 1000ms"));
          }
        }, 1000);
        return () => clearTimeout(t);
      }
    }, [u]);
    let h = reactFunctionMemoHook.useMemoizedCallback(() => {
      s.current = true;
      if (i != null) {
        i();
      }
    });
    if (u) {
      return reactJsxRuntimeCoreReexport.jsx("img", {
        ref: n,
        src: xssContentSanitizer.sanitizeUrl(u, null, {
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
          filename: "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1scHpZak5qZ*xwd*$IWmtl$E$6$2xkSmRHSlhPWFZpTTBwc1kw-zRkb%5I%m1waE1rWn$Xb*hOZ*xSR$N-%lJNamw1$2xNNWFtRkhSakJNTTBKelp*Z*tjR0pwT$cxa%0xWjFXa2RHT%d*WE9-$k1WMD%yWWxoQ2RtSnRWblZr%0%xMll6Tktha3d5T$d4ak0wNW9XakpWZ*xre%9Xd*F$emx2WXpKc2$$eFlTbXhp-lZKc1kyaz$jR0p0$W14bFF6$XdZek5v-%dOdFpERmpkejA5"
        }),
        onLoad: h,
        onError: l,
        className: W.img
      });
    } else {
      return null;
    }
  }));
  require.r(exports);
  require.d(exports, {
    HSIRRender: function () {
      return H;
    }
  });
}