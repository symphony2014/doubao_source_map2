// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W' to 'mergeOrderedConfigs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 80316
         */
module.exports = function (module, exports, require) {
  var arraySpliceUtils = require("array-splice-utils") /*id: 511403*/;
  let i = {}.hasOwnProperty;
  function o(e) {
    let t = {};
    let r = -1;
    while (++r < e.length) {
      (function (e, t) {
        let r;
        for (r in t) {
          let o;
          let u = (i.call(e, r) ? e[r] : undefined) || (e[r] = {});
          let a = t[r];
          if (a) {
            for (o in a) {
              if (!i.call(u, o)) {
                u[o] = [];
              }
              let e = a[o];
              (function (e, t) {
                let r = -1;
                let i = [];
                while (++r < t.length) {
                  (t[r].add === "after" ? e : i).push(t[r]);
                }
                arraySpliceUtils.spliceArray(e, 0, 0, i);
              })(u[o], Array.isArray(e) ? e : e ? [e] : []);
            }
          }
        }
      })(t, e[r]);
    }
    return t;
  }
  require.d(exports, {
    mergeOrderedConfigs: function () {
      return o;
    }
  });
}