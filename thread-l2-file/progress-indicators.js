// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'CircularProgress'
// - Renamed export 'x' to 'ProgressBar'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 875397
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var reactProgressComponents_1 = require("react-progress-components_1") /*id: 183101*/;
  var classNamesMergeUtil = require("class-names-merge-util") /*id: 67381*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let a = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      className: n,
      value: i,
      style: a = {},
      stroke: s,
      orbitStroke: c,
      indicatorClassName: d,
      ...u
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(reactProgressComponents_1.Progress, {
      ref: t,
      style: {
        ...a,
        background: c
      },
      "data-slot": "progress",
      className: classNamesMergeUtil.mergeClassNames(`
          relative h-[var(--dbx-height-progress-horizontal,3px)] w-full
          overflow-hidden rounded-[var(--dbx-radius-round,100px)]
          bg-dbx-neutral-1000-8
        `, n),
      ...u,
      children: reactJsxRuntimeCoreReexport.jsx(reactProgressComponents_1.ProgressIndicator, {
        "data-slot": "progress-indicator",
        className: classNamesMergeUtil.mergeClassNames(`
            size-full flex-1 rounded-[var(--dbx-radius-round,100px)]
            bg-dbx-neutral-700 transition-all
          `, d),
        style: {
          transform: `translateX(-${100 - (i || 0)}%)`,
          background: s
        }
      })
    });
  });
  function s(e) {
    e = e.trim().toLowerCase();
    if (d.hex.test(e)) {
      return c.Hex(e, undefined);
    } else if (d.hslA.test(e)) {
      return c.Hex(c.HslA(e), undefined);
    } else if (d.rgbA.test(e)) {
      return c.Hex(c.RgbA(e), undefined);
    } else if (d.semiDesignTokens.test(e)) {
      if (u.ALONG.indexOf(e) !== -1) {
        return c.SemiDesignToken(e);
      } else if (u.SEQUENCE.indexOf(e) !== -1) {
        return c.SemiDesignToken(`${e}-5`);
      } else {
        return c.SemiDesignToken(`${e}`);
      }
    } else {
      return undefined;
    }
  }
  let c = {
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
      return c.RgbA(n);
    },
    HslA(e) {
      let t = d.hslA.exec(e);
      let n = parseInt(t[2]);
      let i = parseInt(t[3]) / 100;
      let l = parseInt(t[4]) / 100;
      let r = t[5];
      let o = (1 - Math.abs(l * 2 - 1)) * i;
      let a = o * (1 - Math.abs(n / 60 % 2 - 1));
      let s = l - o / 2;
      let u = 0;
      let p = 0;
      let m = 0;
      if (n >= 0 && n < 60) {
        u = o;
        p = a;
        m = 0;
      } else if (n >= 60 && n < 120) {
        u = a;
        p = o;
        m = 0;
      } else if (n >= 120 && n < 180) {
        u = 0;
        p = o;
        m = a;
      } else if (n >= 180 && n < 240) {
        u = 0;
        p = a;
        m = o;
      } else if (n >= 240 && n < 300) {
        u = a;
        p = 0;
        m = o;
      } else if (n >= 300 && n < 360) {
        u = o;
        p = 0;
        m = a;
      }
      u = Math.round((u + s) * 255).toString(16);
      p = Math.round((p + s) * 255).toString(16);
      m = Math.round((m + s) * 255).toString(16);
      return c.utils.pAL(u, p, m, r);
    },
    RgbA(e) {
      let t = d.rgbA.exec(e);
      let n = parseInt(t[2], 10).toString(16);
      let i = parseInt(t[3], 10).toString(16);
      let l = parseInt(t[4], 10).toString(16);
      let r = t[5];
      return c.utils.pAL(n, i, l, r);
    },
    utils: {
      pAL: (e, t, n, i) => (e.length === 1 && (e = `0${e}`), t.length === 1 && (t = `0${t}`), n.length === 1 && (n = `0${n}`), i !== undefined) ? ((i = Math.round(parseInt(i) * 255).toString(16)).length === 1 && (i = `0${i}`), `#${e}${t}${n}${i}`) : `#${e}${t}${n}`
    }
  };
  let d = {
    hex: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    hslA: /(hsl)a?\(\s*?(\d+),?\s*?(\d+)%,?\s*?(\d+)%,?\s*?\/?(\s*?[\d.]+)?\s*?\)/,
    rgbA: /(rgb)a?\(\s*?(\d+),?\s*?(\d+),?\s*?(\d+),?\s*?\/?(\s*?[\d.]+)?\s*?\)/,
    semiDesignTokens: /(\w+)?-?(\w+)-?(\d)?/
  };
  let u = {
    ALONG: ["black", "white"],
    SEQUENCE: ["amber", "blue", "cyan", "green", "grey", "indigo", "light-blue", "light-green", "lime", "orange", "pink", "purple", "red", "teal", "violet", "yellow"]
  };
  let p = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let n;
    let {
      style: i,
      className: l,
      strokeWidth: a = 3,
      format: d = e => `${e}%`,
      width: u = 40,
      stroke: p,
      showInfo: m,
      value: v = 0,
      orbitStroke: f,
      id: h,
      infoClassName: g,
      strokeGradient: _ = false,
      strokeLinecap: b = "round",
      ...k
    } = e;
    let y = v > 100 ? 100 : v < 0 ? 0 : v;
    let x = ((e, t, n) => {
      if (typeof e == "string") {
        return e;
      }
      let i = function (e, t, n) {
        try {
          let i = function (e, t, n) {
            e.sort((e, t) => e.percent - t.percent);
            if (e[0].percent > t) {
              return "var(--dbx-neutral-static-white,#FFF)";
            }
            let i = e[e.length - 1];
            if (i.percent < t) {
              return s(i.color);
            }
            for (let i = 0; i < e.length; i++) {
              let l = e[i];
              if (l.percent === t) {
                return s(l.color);
              }
              if (t > l.percent) {
                continue;
              }
              let r = e[i - 1];
              if (!n) {
                return s(r.color);
              }
              return function (e, t) {
                let {
                  startColor: n,
                  endColor: i,
                  size: l
                } = e;
                let r = n.split("");
                let o = i.split("");
                let a = [parseInt(`${r[1]}${r[2]}`, 16), parseInt(`${o[1]}${o[2]}`, 16)];
                let s = [parseInt(`${r[3]}${r[4]}`, 16), parseInt(`${o[3]}${o[4]}`, 16)];
                let d = [parseInt(`${r[5]}${r[6]}`, 16), parseInt(`${o[5]}${o[6]}`, 16)];
                let u = [parseInt(`${r[7]}${r[8]}`, 16), parseInt(`${o[7]}${o[8]}`, 16)];
                let p = (a[0] - a[1]) / (l + 1);
                let m = (s[0] - s[1]) / (l + 1);
                let v = (d[0] - d[1]) / (l + 1);
                let f = (u[0] - u[1]) / (l + 1);
                function h(e) {
                  let t = Math.round(a[0] - p * (e + 1)).toString(16);
                  let n = Math.round(s[0] - m * (e + 1)).toString(16);
                  let i = Math.round(d[0] - v * (e + 1)).toString(16);
                  let l = `${g(t)}${g(n)}${g(i)}`;
                  let r = Math.floor(f * (e + 1) + u[1]).toString(16);
                  return c.Hex(`#${l}`, r);
                }
                function g(e) {
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
                  for (let t = 0; t < l; t += 1) {
                    e.push(h(t));
                  }
                  return e;
                }
                return h(t);
              }({
                startColor: s(r.color),
                endColor: s(l.color),
                size: l.percent - r.percent - 1
              }, t - r.percent - 1);
            }
          }(e, t, n);
          if ((i == null ? undefined : i.length) !== 0) {
            return i;
          }
        } catch {}
      }(e, t, n);
      if (i !== undefined) {
        return i;
      } else {
        return null;
      }
    })(p, v, _);
    let w = d(y);
    return reactJsxRuntimeCoreReexport.jsxs("div", {
      ref: t,
      id: h,
      className: classNamesMergeUtil.mergeClassNames("relative inline-block", l),
      style: i,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": y,
      ...k,
      children: [reactJsxRuntimeCoreReexport.jsxs("svg", {
        className: "block",
        height: u,
        width: u,
        "aria-hidden": true,
        shapeRendering: "geometricPrecision",
        style: {
          "--progress-radius": `calc(${u}px / 2 - ${a}px / 2)`,
          "--progress-length": "calc(2 * 3.1415926535 * var(--progress-radius))"
        },
        children: [reactJsxRuntimeCoreReexport.jsx("circle", {
          vectorEffect: "non-scaling-stroke",
          shapeRendering: "geometricPrecision",
          className: "stroke-dbx-neutral-1000-8",
          strokeDashoffset: 0,
          fill: "transparent",
          style: {
            stroke: f,
            cx: "50%",
            cy: "50%",
            r: "var(--progress-radius)",
            strokeWidth: `${a}px`,
            strokeDasharray: "var(--progress-length)"
          },
          "aria-hidden": true
        }), reactJsxRuntimeCoreReexport.jsx("circle", {
          vectorEffect: "non-scaling-stroke",
          shapeRendering: "geometricPrecision",
          className: `
            origin-[50%_50%] -rotate-90 stroke-dbx-neutral-700
            ease-[cubic-bezier(0.62,0.05,0.36,0.95)]
            [transition:stroke-dashoffset_0.3s]
          `,
          strokeLinecap: b,
          fill: "transparent",
          style: {
            stroke: x,
            r: "var(--progress-radius)",
            cx: "50%",
            cy: "50%",
            strokeWidth: `${a}px`,
            strokeDasharray: "var(--progress-length)",
            strokeDashoffset: `calc(var(--progress-length) - ${y} * var(--progress-length) / 100)`
          },
          "aria-hidden": true
        })]
      }, u), m ? reactJsxRuntimeCoreReexport.jsx("span", {
        className: classNamesMergeUtil.mergeClassNames(`
              absolute top-2/4 left-2/4 w-full -translate-x-1/2 -translate-y-1/2
              transform text-center text-[12px] leading-[18px] font-[510]
              text-dbx-text-primary not-italic select-none
            `, g),
        children: w
      }) : null]
    });
  });
  require.d(exports, {
    CircularProgress: function () {
      return p;
    },
    ProgressBar: function () {
      return a;
    }
  });
}