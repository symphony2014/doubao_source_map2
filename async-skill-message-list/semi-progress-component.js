// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'Progress'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11671.ea21fc6d.js
         * chunkId: 11671
         * moduleId: 821198
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var classnamesUtils = require("classnames-utils") /*id: 946565*/;
  var s = classnamesUtils;
  var propTypesFactoryWrapper = require("prop-types-factory-wrapper") /*id: 928010*/;
  var o = propTypesFactoryWrapper;
  var semiIdentifier = require("semi-identifier") /*id: 247778*/;
  let u = {
    PREFIX: `${semiIdentifier.semiIdentifier}-progress`
  };
  let c = {
    types: ["line", "circle"],
    DEFAULT_TYPE: "line",
    STROKE_DEFAULT: "var(--semi-color-success)",
    strokeLineCap: ["square", "round"],
    DEFAULT_LINECAP: "round",
    sizes: ["default", "small", "large"],
    DEFAULT_SIZE: "default",
    directions: ["vertical", "horizontal"],
    DEFAULT_DIRECTION: "horizontal"
  };
  var dataAttributeFilter = require("data-attribute-filter") /*id: 584342*/;
  var springAnimationEngine = require("spring-animation-engine") /*id: 968898*/;
  function h(e) {
    e = e.trim().toLowerCase();
    if (m.hex.test(e)) {
      return p.Hex(e, undefined);
    } else if (m.hslA.test(e)) {
      return p.Hex(p.HslA(e), undefined);
    } else if (m.rgbA.test(e)) {
      return p.Hex(p.RgbA(e), undefined);
    } else if (m.semiDesignTokens.test(e)) {
      if (g.ALONG.indexOf(e) !== -1) {
        return p.SemiDesignToken(e);
      } else if (g.SEQUENCE.indexOf(e) !== -1) {
        return p.SemiDesignToken(`${e}-5`);
      } else {
        return p.SemiDesignToken(`${e}`);
      }
    } else {
      return undefined;
    }
  }
  let p = {
    Hex: (e, t) => (e = e.replace("#", "")).length === 8 ? `#${e}` : (e.length === 6 || e.length === 3 && (e = e.split("").map(e => e + e).join("")), `#${e}${t || "ff"}`),
    SemiDesignToken(e) {
      if (typeof window == "undefined") {
        return;
      }
      let t = getComputedStyle(document.body).getPropertyValue(`--semi-${e}`);
      if (t === "") {
        return;
      }
      let n = `rgba(${t}, 1)`;
      return p.RgbA(n);
    },
    HslA(e) {
      let t = m.hslA.exec(e);
      let n = parseInt(t[2]);
      let i = parseInt(t[3]) / 100;
      let r = parseInt(t[4]) / 100;
      let s = t[5];
      let a = (1 - Math.abs(r * 2 - 1)) * i;
      let o = a * (1 - Math.abs(n / 60 % 2 - 1));
      let l = r - a / 2;
      let u = 0;
      let c = 0;
      let d = 0;
      if (n >= 0 && n < 60) {
        u = a;
        c = o;
        d = 0;
      } else if (n >= 60 && n < 120) {
        u = o;
        c = a;
        d = 0;
      } else if (n >= 120 && n < 180) {
        u = 0;
        c = a;
        d = o;
      } else if (n >= 180 && n < 240) {
        u = 0;
        c = o;
        d = a;
      } else if (n >= 240 && n < 300) {
        u = o;
        c = 0;
        d = a;
      } else if (n >= 300 && n < 360) {
        u = a;
        c = 0;
        d = o;
      }
      u = Math.round((u + l) * 255).toString(16);
      c = Math.round((c + l) * 255).toString(16);
      d = Math.round((d + l) * 255).toString(16);
      return p.utils.pAL(u, c, d, s);
    },
    RgbA(e) {
      let t = m.rgbA.exec(e);
      let n = parseInt(t[2], 10).toString(16);
      let i = parseInt(t[3], 10).toString(16);
      let r = parseInt(t[4], 10).toString(16);
      let s = t[5];
      return p.utils.pAL(n, i, r, s);
    },
    utils: {
      pAL: (e, t, n, i) => (e.length == 1 && (e = "0" + e), t.length == 1 && (t = "0" + t), n.length == 1 && (n = "0" + n), i !== undefined) ? ((i = Math.round(parseInt(i) * 255).toString(16)).length == 1 && (i = "0" + i), "#" + e + t + n + i) : "#" + e + t + n
    }
  };
  let m = {
    hex: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    hslA: /(hsl)a?\(\s*?(\d+),?\s*?(\d+)%,?\s*?(\d+)%,?\s*?\/?(\s*?[\d.]+)?\s*?\)/,
    rgbA: /(rgb)a?\(\s*?(\d+),?\s*?(\d+),?\s*?(\d+),?\s*?\/?(\s*?[\d.]+)?\s*?\)/,
    semiDesignTokens: /(\w+)?-?(\w+)-?(\d)?/
  };
  let g = {
    ALONG: ["black", "white"],
    SEQUENCE: ["amber", "blue", "cyan", "green", "grey", "indigo", "light-blue", "light-green", "lime", "orange", "pink", "purple", "red", "teal", "violet", "yellow"]
  };
  function _(e, t) {
    var n = {};
    for (var i in e) {
      if (Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0) {
        n[i] = e[i];
      }
    }
    if (e != null && typeof Object.getOwnPropertySymbols == "function") {
      var r = 0;
      var i = Object.getOwnPropertySymbols(e);
      for (; r < i.length; r++) {
        if (t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r])) {
          n[i[r]] = e[i[r]];
        }
      }
    }
    return n;
  }
  let v = u.PREFIX;
  class y extends reactCoreLibraryReexport.Component {
    constructor(e) {
      super(e);
      this._mounted = true;
      this._mounted = true;
      this.state = {
        percentNumber: this.props.percent
      };
    }
    componentDidUpdate(e) {
      if (isNaN(this.props.percent) || isNaN(e.percent)) {
        throw Error("[Semi Progress]:percent can not be NaN");
      }
      if (e.percent !== this.props.percent) {
        if (!this.props.motion) {
          this.setState({
            percentNumber: this.props.percent
          });
          return;
        }
        if (this.animation && this.animation.destroy) {
          this.animation.destroy();
        }
        this.animation = new springAnimationEngine.SpringAnimator({
          from: {
            value: e.percent
          },
          to: {
            value: this.props.percent
          }
        }, {
          easing: "linear",
          duration: 300
        });
        this.animation.on("frame", e => {
          if (this._mounted === false) {
            return;
          }
          let t = parseInt(e.value);
          this.setState({
            percentNumber: t
          });
        });
        this.animation.on("rest", () => {
          if (this._mounted !== false) {
            this.setState({
              percentNumber: this.props.percent
            });
          }
        });
        this.animation.start();
      }
    }
    componentWillUnmount() {
      if (this.animation) {
        this.animation.destroy();
      }
      this._mounted = false;
    }
    renderCircleProgress() {
      let e;
      let t = this.props;
      let {
        strokeLinecap: n,
        style: r,
        className: a,
        strokeWidth: o,
        format: l,
        size: u,
        stroke: f,
        strokeGradient: h,
        showInfo: p,
        percent: m,
        orbitStroke: g,
        id: y
      } = t;
      let S = _(t, ["strokeLinecap", "style", "className", "strokeWidth", "format", "size", "stroke", "strokeGradient", "showInfo", "percent", "orbitStroke", "id"]);
      let b = this.props["aria-label"];
      let E = this.props["aria-labelledby"];
      let w = this.props["aria-valuetext"];
      let {
        percentNumber: T
      } = this.state;
      let k = {
        wrapper: s(`${v}-circle`, a),
        svg: s(`${v}-circle-ring`),
        circle: s(`${v}-circle-ring-inner`)
      };
      let O = this.calcPercent(m);
      let M = this.calcPercent(T);
      e = this.props.width ? this.props.width : u === c.DEFAULT_SIZE ? 72 : 24;
      let I = this.selectStroke(f, m, h);
      let N = e / 2;
      let C = e / 2;
      let A = (e - o) / 2;
      let x = A * 2 * Math.PI;
      let L = (1 - O / 100) * x;
      let P = `${x} ${x}`;
      let D = l(M);
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        id: y,
        className: k.wrapper,
        style: r,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": M,
        "aria-labelledby": E,
        "aria-label": b,
        "aria-valuetext": w
      }, dataAttributeFilter.filterDataAttrs(S)), reactCoreLibraryReexport.createElement("svg", {
        key: u,
        className: k.svg,
        height: e,
        width: e,
        "aria-hidden": true
      }, reactCoreLibraryReexport.createElement("circle", {
        strokeDashoffset: 0,
        strokeWidth: o,
        strokeDasharray: P,
        strokeLinecap: n,
        fill: "transparent",
        stroke: g,
        r: A,
        cx: C,
        cy: N,
        "aria-hidden": true
      }), reactCoreLibraryReexport.createElement("circle", {
        className: k.circle,
        strokeDashoffset: L,
        strokeWidth: o,
        strokeDasharray: P,
        strokeLinecap: n,
        fill: "transparent",
        stroke: I,
        r: A,
        cx: C,
        cy: N,
        "aria-hidden": true
      })), p && u !== "small" ? reactCoreLibraryReexport.createElement("span", {
        className: `${v}-circle-text`
      }, D) : null);
    }
    calcPercent(e) {
      if (e > 100) {
        return 100;
      } else if (e < 0) {
        return 0;
      } else {
        return e;
      }
    }
    selectStroke(e, t, n) {
      if (typeof e == "string") {
        return e;
      }
      let i = function (e, t, n) {
        try {
          let i = function (e, t, n) {
            e.sort((e, t) => e.percent - t.percent);
            if (e[0].percent > t) {
              return c.STROKE_DEFAULT;
            }
            let i = e[e.length - 1];
            if (i.percent < t) {
              return h(i.color);
            }
            for (let [i, r] of e.entries()) {
              if (r.percent === t) {
                return h(r.color);
              }
              if (t > r.percent) {
                continue;
              }
              let s = e[i - 1];
              if (!n) {
                return h(s.color);
              }
              return function (e, t) {
                let {
                  startColor: n,
                  endColor: i,
                  size: r
                } = e;
                let s = n.split("");
                let a = i.split("");
                let o = [parseInt(`${s[1]}${s[2]}`, 16), parseInt(`${a[1]}${a[2]}`, 16)];
                let l = [parseInt(`${s[3]}${s[4]}`, 16), parseInt(`${a[3]}${a[4]}`, 16)];
                let u = [parseInt(`${s[5]}${s[6]}`, 16), parseInt(`${a[5]}${a[6]}`, 16)];
                let c = [parseInt(`${s[7]}${s[8]}`, 16), parseInt(`${a[7]}${a[8]}`, 16)];
                let d = (o[0] - o[1]) / (r + 1);
                let f = (l[0] - l[1]) / (r + 1);
                let h = (u[0] - u[1]) / (r + 1);
                let m = (c[0] - c[1]) / (r + 1);
                function g(e) {
                  let t = Math.round(o[0] - d * (e + 1)).toString(16);
                  let n = Math.round(l[0] - f * (e + 1)).toString(16);
                  let i = Math.round(u[0] - h * (e + 1)).toString(16);
                  let r = `${_(t)}${_(n)}${_(i)}`;
                  let s = Math.floor(m * (e + 1) + c[1]).toString(16);
                  return p.Hex(`#${r}`, s);
                }
                function _(e) {
                  if (e.length === 1) {
                    return `0${e}`;
                  } else if (e.length === 0) {
                    return "00";
                  } else {
                    return e;
                  }
                }
                if (t === undefined) {
                  let e = [n];
                  for (let t = 0; t < r; t += 1) {
                    e.push(g(t));
                  }
                  return e;
                }
                return g(t);
              }({
                startColor: h(s.color),
                endColor: h(r.color),
                size: r.percent - s.percent - 1
              }, t - s.percent - 1);
            }
          }(e, t, n);
          if (i.length !== 0) {
            return i;
          }
        } catch (e) {}
      }(e, t, n);
      if (i !== undefined) {
        return i;
      } else {
        return c.STROKE_DEFAULT;
      }
    }
    renderLineProgress() {
      let e = this.props;
      let {
        className: t,
        style: n,
        stroke: r,
        strokeGradient: a,
        direction: o,
        format: l,
        showInfo: u,
        size: f,
        percent: h,
        orbitStroke: p,
        id: m
      } = e;
      let g = _(e, ["className", "style", "stroke", "strokeGradient", "direction", "format", "showInfo", "size", "percent", "orbitStroke", "id"]);
      let y = this.props["aria-label"];
      let S = this.props["aria-labelledby"];
      let b = this.props["aria-valuetext"];
      let {
        percentNumber: E
      } = this.state;
      let w = s(v, t, {
        [`${v}-horizontal`]: o === c.DEFAULT_DIRECTION,
        [`${v}-vertical`]: o !== c.DEFAULT_DIRECTION,
        [`${v}-large`]: f === "large"
      });
      let T = s({
        [`${v}-track`]: true
      });
      let k = s(`${v}-track-inner`);
      let O = this.calcPercent(h);
      let M = this.calcPercent(E);
      let I = {
        background: this.selectStroke(r, h, a)
      };
      if (o === c.DEFAULT_DIRECTION) {
        I.width = `${O}%`;
      } else {
        I.height = `${O}%`;
      }
      let N = l(M);
      return reactCoreLibraryReexport.createElement("div", Object.assign({
        id: m,
        className: w,
        style: n,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": O,
        "aria-labelledby": S,
        "aria-label": y,
        "aria-valuetext": b
      }, dataAttributeFilter.filterDataAttrs(g)), reactCoreLibraryReexport.createElement("div", {
        className: T,
        style: p ? {
          backgroundColor: p
        } : {},
        "aria-hidden": true
      }, reactCoreLibraryReexport.createElement("div", {
        className: k,
        style: I,
        "aria-hidden": true
      })), u ? reactCoreLibraryReexport.createElement("div", {
        className: `${v}-line-text`
      }, N) : null);
    }
    render() {
      let {
        type: e
      } = this.props;
      if (e === "line") {
        return this.renderLineProgress();
      } else {
        return this.renderCircleProgress();
      }
    }
  }
  y.propTypes = {
    "aria-label": o.string,
    "aria-labelledby": o.string,
    "aria-valuetext": o.string,
    className: o.string,
    direction: o.oneOf(c.directions),
    format: o.oneOfType([o.func, o.node]),
    id: o.string,
    motion: o.oneOfType([o.bool, o.func, o.object]),
    orbitStroke: o.string,
    percent: o.number,
    scale: o.number,
    showInfo: o.bool,
    size: o.oneOf(c.sizes),
    stroke: o.oneOfType([o.string, o.arrayOf(o.shape({
      percent: o.number,
      color: o.string
    }))]),
    strokeGradient: o.bool,
    strokeLinecap: o.oneOf(c.strokeLineCap),
    strokeWidth: o.number,
    style: o.object,
    type: o.oneOf(c.types),
    width: o.number
  };
  y.defaultProps = {
    className: "",
    direction: c.DEFAULT_DIRECTION,
    format: e => `${e}%`,
    motion: true,
    orbitStroke: "var(--semi-color-fill-0)",
    percent: 0,
    showInfo: false,
    size: c.DEFAULT_SIZE,
    stroke: c.STROKE_DEFAULT,
    strokeGradient: false,
    strokeLinecap: c.DEFAULT_LINECAP,
    strokeWidth: 4,
    style: {},
    type: c.DEFAULT_TYPE
  };
  var S = y;
  require.d(exports, {
    Progress: function () {
      return S;
    }
  });
}