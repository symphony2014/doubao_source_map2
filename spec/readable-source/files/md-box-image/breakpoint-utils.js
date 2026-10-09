// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L7' to 'cleanupBreakpoints'
// - Renamed export 'VO' to 'breakpointValues'
// - Renamed export 'W8' to 'createBreakpointObj'
// - Renamed export 'k9' to 'handleBreakpoints'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 314944
         */
module.exports = function (module, exports, require) {
  let r = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  };
  let i = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: e => `@media (min-width:${r[e]}px)`
  };
  function o(e, t, n) {
    let o = e.theme || {};
    if (Array.isArray(t)) {
      let e = o.breakpoints || i;
      return t.reduce((r, i, o) => {
        r[e.up(e.keys[o])] = n(t[o]);
        return r;
      }, {});
    }
    if (typeof t == "object") {
      let e = o.breakpoints || i;
      return Object.keys(t).reduce((i, o) => {
        if (Object.keys(e.values || r).indexOf(o) !== -1) {
          i[e.up(o)] = n(t[o], o);
        } else {
          i[o] = t[o];
        }
        return i;
      }, {});
    }
    return n(t);
  }
  function a(e = {}) {
    var t;
    return ((t = e.keys) == null ? undefined : t.reduce((t, n) => {
      t[e.up(n)] = {};
      return t;
    }, {})) || {};
  }
  function s(e, t) {
    return e.reduce((e, t) => {
      let n = e[t];
      if (!n || Object.keys(n).length === 0) {
        delete e[t];
      }
      return e;
    }, t);
  }
  require.d(exports, {
    cleanupBreakpoints: function () {
      return s;
    },
    breakpointValues: function () {
      return r;
    },
    createBreakpointObj: function () {
      return a;
    },
    handleBreakpoints: function () {
      return o;
    }
  });
}