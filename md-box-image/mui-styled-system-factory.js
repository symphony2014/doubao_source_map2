// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'esModuleInteropHelper_2'
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(829858) to 'object-assign-polyfill_2_1'
// - Resolved require(53844) to 'object-omit-util_1'
// - Resolved require(45870) to 'emotion-styled-core'
// - Renamed variable 's' to 'reactPropsMergeUtil_1'
// - Resolved require(999106) to 'react-props-merge-util_1'
// - Resolved require(950475) to 'capitalize-string-wrapper'
// - Resolved require(392434) to 'react-component-name-util'
// - Resolved require(130518) to 'box-theme-utils'
// - Resolved require(27746) to 'sx-style-props-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 451559
         */
module.exports = function (module, exports, require) {
  var esModuleInteropHelper_2 = require("es-module-interop-helper_2") /*id: 299302*/;
  exports.default = function (e = {}) {
    let {
      themeId: t,
      defaultTheme: n = m,
      rootShouldForwardProp: r = f,
      slotShouldForwardProp: l = f
    } = e;
    let c = e => u.default(i.default({}, e, {
      theme: y(i.default({}, e, {
        defaultTheme: n,
        themeId: t
      }))
    }));
    c.__mui_systemSx = true;
    return (e, u = {}) => {
      var d;
      let h;
      a.internal_processStyles(e, e => e.filter(e => e == null || !e.__mui_systemSx));
      let {
        name: m,
        slot: v,
        skipVariantsResolver: x,
        skipSx: _,
        overridesResolver: w = (d = g(v)) ? (e, t) => t[d] : null
      } = u;
      let C = o.default(u, p);
      let O = x !== undefined ? x : v && v !== "Root" && v !== "root" || false;
      let S = _ || false;
      let k = f;
      if (v === "Root" || v === "root") {
        k = r;
      } else if (v) {
        k = l;
      } else if (typeof e == "string" && e.charCodeAt(0) > 96) {
        k = undefined;
      }
      let E = a.default(e, i.default({
        shouldForwardProp: k,
        label: h
      }, C));
      let j = e => typeof e == "function" && e.__emotion_real !== e || reactPropsMergeUtil_1.isPlainObject(e) ? r => b(e, i.default({}, r, {
        theme: y({
          theme: r.theme,
          defaultTheme: n,
          themeId: t
        })
      })) : e;
      let P = (r, ...o) => {
        let a = j(r);
        let s = o ? o.map(j) : [];
        if (m && w) {
          s.push(e => {
            let r = y(i.default({}, e, {
              defaultTheme: n,
              themeId: t
            }));
            if (!r.components || !r.components[m] || !r.components[m].styleOverrides) {
              return null;
            }
            let o = r.components[m].styleOverrides;
            let a = {};
            Object.entries(o).forEach(([t, n]) => {
              a[t] = b(n, i.default({}, e, {
                theme: r
              }));
            });
            return w(e, a);
          });
        }
        if (m && !O) {
          s.push(e => {
            var r;
            let o = y(i.default({}, e, {
              defaultTheme: n,
              themeId: t
            }));
            return b({
              variants: o == null || (r = o.components) == null || (r = r[m]) == null ? undefined : r.variants
            }, i.default({}, e, {
              theme: o
            }));
          });
        }
        if (!S) {
          s.push(c);
        }
        let l = s.length - o.length;
        if (Array.isArray(r) && l > 0) {
          let e = Array(l).fill("");
          (a = [...r, ...e]).raw = [...r.raw, ...e];
        }
        let u = E(a, ...s);
        if (e.muiName) {
          u.muiName = e.muiName;
        }
        return u;
      };
      if (E.withConfig) {
        P.withConfig = E.withConfig;
      }
      return P;
    };
  };
  var i = esModuleInteropHelper_2(require("object-assign-polyfill_2_1") /*id: 829858*/);
  var o = esModuleInteropHelper_2(require("object-omit-util_1") /*id: 53844*/);
  var a = function (e, t) {
    if (e && e.__esModule) {
      return e;
    }
    if (e === null || typeof e != "object" && typeof e != "function") {
      return {
        default: e
      };
    }
    var n = h(t);
    if (n && n.has(e)) {
      return n.get(e);
    }
    var r = {
      __proto__: null
    };
    var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in e) {
      if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
        var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
        if (a && (a.get || a.set)) {
          Object.defineProperty(r, o, a);
        } else {
          r[o] = e[o];
        }
      }
    }
    r.default = e;
    if (n) {
      n.set(e, r);
    }
    return r;
  }(require("emotion-styled-core") /*id: 45870*/);
  var reactPropsMergeUtil_1 = require("react-props-merge-util_1") /*id: 999106*/;
  esModuleInteropHelper_2(require("capitalize-string-wrapper") /*id: 950475*/);
  esModuleInteropHelper_2(require("react-component-name-util") /*id: 392434*/);
  var l = esModuleInteropHelper_2(require("box-theme-utils") /*id: 130518*/);
  var u = esModuleInteropHelper_2(require("sx-style-props-util") /*id: 27746*/);
  let c = ["ownerState"];
  let d = ["variants"];
  let p = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  function h(e) {
    if (typeof WeakMap != "function") {
      return null;
    }
    var t = new WeakMap();
    var n = new WeakMap();
    return (h = function (e) {
      if (e) {
        return n;
      } else {
        return t;
      }
    })(e);
  }
  function f(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  }
  let m = l.default();
  let g = e => e ? e.charAt(0).toLowerCase() + e.slice(1) : e;
  function y({
    defaultTheme: e,
    theme: t,
    themeId: n
  }) {
    if (Object.keys(t).length === 0) {
      return e;
    } else {
      return t[n] || t;
    }
  }
  function b(e, t) {
    let {
      ownerState: n
    } = t;
    let r = o.default(t, c);
    let a = typeof e == "function" ? e(i.default({
      ownerState: n
    }, r)) : e;
    if (Array.isArray(a)) {
      return a.flatMap(e => b(e, i.default({
        ownerState: n
      }, r)));
    }
    if (a && typeof a == "object" && Array.isArray(a.variants)) {
      let {
        variants: e = []
      } = a;
      let t = o.default(a, d);
      e.forEach(e => {
        let o = true;
        if (typeof e.props == "function") {
          o = e.props(i.default({
            ownerState: n
          }, r, n));
        } else {
          Object.keys(e.props).forEach(t => {
            if ((n == null ? undefined : n[t]) !== e.props[t] && r[t] !== e.props[t]) {
              o = false;
            }
          });
        }
        if (o) {
          if (!Array.isArray(t)) {
            t = [t];
          }
          t.push(typeof e.style == "function" ? e.style(i.default({
            ownerState: n
          }, r, n)) : e.style);
        }
      });
      return t;
    }
    return a;
  }
}