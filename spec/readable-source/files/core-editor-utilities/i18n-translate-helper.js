// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 't' to 'translate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 366664
         */
module.exports = function (module, exports, require) {
  let n = (e, t) => t.length === 0 ? e : e.replace(/\${([0-9])}/g, (e, r) => String(t[Number(r) - 1]));
  function o(e, ...t) {
    return function (e, t, ...r) {
      if (!t) {
        return "";
      }
      let o = typeof window == "undefined" ? undefined : window.TTI18N;
      if (!o && !e) {
        return t;
      }
      let a = (e == null ? undefined : e[t]) || (o == null ? undefined : o[t]);
      if (a) {
        return n(a, r);
      } else {
        return t;
      }
    }(null, e, ...t);
  }
  require.d(exports, {
    translate: function () {
      return o;
    }
  });
}