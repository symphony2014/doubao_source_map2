// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'isPlainObject'
// - Renamed export 'Z' to 'deepMergeProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-image.551aa184.js
         * chunkId: 82090
         * moduleId: 582060
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  function o(e) {
    if (typeof e != "object" || e === null) {
      return false;
    }
    let t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  }
  require.d(exports, {
    isPlainObject: function () {
      return o;
    },
    deepMergeProps: function () {
      return function e(t, n, a = {
        clone: true
      }) {
        let s = a.clone ? objectAssignUtil.objectAssign({}, t) : t;
        if (o(t) && o(n)) {
          Object.keys(n).forEach(r => {
            if (reactCoreLibraryReexport.isValidElement(n[r])) {
              s[r] = n[r];
            } else if (o(n[r]) && Object.prototype.hasOwnProperty.call(t, r) && o(t[r])) {
              s[r] = e(t[r], n[r], a);
            } else if (a.clone) {
              s[r] = o(n[r]) ? function e(t) {
                if (reactCoreLibraryReexport.isValidElement(t) || !o(t)) {
                  return t;
                }
                let n = {};
                Object.keys(t).forEach(r => {
                  n[r] = e(t[r]);
                });
                return n;
              }(n[r]) : n[r];
            } else {
              s[r] = n[r];
            }
          });
        }
        return s;
      };
    }
  });
}