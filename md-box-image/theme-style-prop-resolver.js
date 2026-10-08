// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DW' to 'resolveThemePath'
// - Renamed export 'Jq' to 'resolveStyleValue'
// - Renamed export 'ZP' to 'createStyleFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 284434
         */
module.exports = function (module, exports, require) {
  var capitalizeStringUtil = require("capitalize-string-util") /*id: 834435*/;
  var breakpointUtils = require("breakpoint-utils") /*id: 314944*/;
  function o(e, t, n = true) {
    if (!t || typeof t != "string") {
      return null;
    }
    if (e && e.vars && n) {
      let n = `vars.${t}`.split(".").reduce((e, t) => e && e[t] ? e[t] : null, e);
      if (n != null) {
        return n;
      }
    }
    return t.split(".").reduce((e, t) => e && e[t] != null ? e[t] : null, e);
  }
  function a(e, t, n, r = n) {
    let i;
    i = typeof e == "function" ? e(n) : Array.isArray(e) ? e[n] || r : o(e, n) || r;
    if (t) {
      i = t(i, r, e);
    }
    return i;
  }
  exports.createStyleFunction = function (e) {
    let {
      prop: t,
      cssProperty: n = e.prop,
      themeKey: s,
      transform: l
    } = e;
    let u = e => {
      if (e[t] == null) {
        return null;
      }
      let u = e[t];
      let c = o(e.theme, s) || {};
      return breakpointUtils.handleBreakpoints(e, u, e => {
        let i = a(c, l, e);
        if (e === i && typeof e == "string") {
          i = a(c, l, `${t}${e === "default" ? "" : capitalizeStringUtil.capitalizeString(e)}`, e);
        }
        if (n === false) {
          return i;
        } else {
          return {
            [n]: i
          };
        }
      });
    };
    u.propTypes = {};
    u.filterProps = [t];
    return u;
  };
  require.d(exports, {
    resolveThemePath: function () {
      return o;
    },
    resolveStyleValue: function () {
      return a;
    }
  });
}