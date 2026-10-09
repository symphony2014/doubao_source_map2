// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'mergeRefs'
// - Renamed export 'e' to 'useMergeRefs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 496270
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function i(e, t) {
    if (typeof e == "function") {
      return e(t);
    }
    if (e != null) {
      e.current = t;
    }
  }
  function o() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return e => {
      let n = false;
      let r = t.map(t => {
        let r = i(t, e);
        if (!n && typeof r == "function") {
          n = true;
        }
        return r;
      });
      if (n) {
        return () => {
          for (let e = 0; e < r.length; e++) {
            let n = r[e];
            if (typeof n == "function") {
              n();
            } else {
              i(t[e], null);
            }
          }
        };
      }
    };
  }
  function a() {
    var e = arguments.length;
    var t = Array(e);
    var n = 0;
    for (; n < e; n++) {
      t[n] = arguments[n];
    }
    return reactCoreLibraryReexport.useCallback(o(...t), t);
  }
  require.d(exports, {
    mergeRefs: function () {
      return o;
    },
    useMergeRefs: function () {
      return a;
    }
  });
}