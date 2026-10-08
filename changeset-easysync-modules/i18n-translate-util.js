// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'I' to 'translate'
// - Renamed export 'O' to 'setI18nResource'
// - Renamed export 't' to 't'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 38843
         */
module.exports = function (module, exports, require) {
  let r = null;
  let i = (t, e) => e.length === 0 ? t : t.replace(/\${([0-9])}/g, (t, n) => String(e[Number(n) - 1]));
  function o(t, e, ...n) {
    if (!e) {
      return "";
    }
    let r = typeof window == "undefined" ? undefined : window.TTI18N;
    if (!r && !t) {
      return e;
    }
    let s = (t == null ? undefined : t[e]) || (r == null ? undefined : r[e]);
    if (s) {
      return i(s, n);
    } else {
      return e;
    }
  }
  function s(t) {
    r = t;
  }
  function a(t, ...e) {
    return o(r, t, ...e);
  }
  require.d(exports, {
    translate: function () {
      return o;
    },
    setI18nResource: function () {
      return s;
    },
    t: function () {
      return a;
    }
  });
}