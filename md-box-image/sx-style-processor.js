// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'n' to 'createSxProcessor'
// - Renamed export 'Z' to 'processSxStyles'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 232869
         */
module.exports = function (module, exports, require) {
  var capitalizeStringUtil = require("capitalize-string-util") /*id: 834435*/;
  var propsMergeUtil = require("props-merge-util") /*id: 649340*/;
  var themeStylePropResolver = require("theme-style-prop-resolver") /*id: 284434*/;
  var breakpointUtils = require("breakpoint-utils") /*id: 314944*/;
  var stylePropsConfig = require("style-props-config") /*id: 584416*/;
  function l() {
    function e(e, t, n, i) {
      let s = {
        [e]: t,
        theme: n
      };
      let l = i[e];
      if (!l) {
        return {
          [e]: t
        };
      }
      let {
        cssProperty: u = e,
        themeKey: c,
        transform: d,
        style: p
      } = l;
      if (t == null) {
        return null;
      }
      if (c === "typography" && t === "inherit") {
        return {
          [e]: t
        };
      }
      let h = themeStylePropResolver.resolveThemePath(n, c) || {};
      if (p) {
        return p(s);
      } else {
        return breakpointUtils.handleBreakpoints(s, t, t => {
          let n = themeStylePropResolver.resolveStyleValue(h, d, t);
          if (t === n && typeof t == "string") {
            n = themeStylePropResolver.resolveStyleValue(h, d, `${e}${t === "default" ? "" : capitalizeStringUtil.capitalizeString(t)}`, t);
          }
          if (u === false) {
            return n;
          } else {
            return {
              [u]: n
            };
          }
        });
      }
    }
    return function t(n) {
      let {
        sx: o,
        theme: l = {}
      } = n || {};
      if (!o) {
        return null;
      }
      let u = l.unstable_sxConfig ?? stylePropsConfig.stylePropsConfig;
      function c(n) {
        let r = n;
        if (typeof n == "function") {
          r = n(l);
        } else if (typeof n != "object") {
          return n;
        }
        if (!r) {
          return null;
        }
        let o = breakpointUtils.createBreakpointObj(l.breakpoints);
        let s = Object.keys(o);
        let c = o;
        Object.keys(r).forEach(n => {
          var o;
          let s = typeof (o = r[n]) == "function" ? o(l) : o;
          if (s != null) {
            if (typeof s == "object") {
              if (u[n]) {
                c = propsMergeUtil.mergeProps(c, e(n, s, l, u));
              } else {
                let e = breakpointUtils.handleBreakpoints({
                  theme: l
                }, s, e => ({
                  [n]: e
                }));
                if (function (...e) {
                  let t = new Set(e.reduce((e, t) => e.concat(Object.keys(t)), []));
                  return e.every(e => t.size === Object.keys(e).length);
                }(e, s)) {
                  c[n] = t({
                    sx: s,
                    theme: l
                  });
                } else {
                  c = propsMergeUtil.mergeProps(c, e);
                }
              }
            } else {
              c = propsMergeUtil.mergeProps(c, e(n, s, l, u));
            }
          }
        });
        return breakpointUtils.cleanupBreakpoints(s, c);
      }
      if (Array.isArray(o)) {
        return o.map(c);
      } else {
        return c(o);
      }
    };
  }
  let u = l();
  u.filterProps = ["sx"];
  exports.processSxStyles = u;
  require.d(exports, {
    createSxProcessor: function () {
      return l;
    }
  });
}