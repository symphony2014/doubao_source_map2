// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createBinarySearch'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 89990.b9105feb.js
         * chunkId: 89990
         * moduleId: 839305
         */
module.exports = function (module, exports, require) {
  var compareValuesUtil = require("compare-values-util") /*id: 378281*/;
  function r(t, n) {
    if (t == null || n == null) {
      return NaN;
    } else if (n < t) {
      return -1;
    } else if (n > t) {
      return 1;
    } else if (n >= t) {
      return 0;
    } else {
      return NaN;
    }
  }
  function o(t) {
    let n;
    let e;
    let o;
    function a(t, i, r = 0, o = t.length) {
      if (r < o) {
        if (n(i, i) !== 0) {
          return o;
        }
        do {
          let n = r + o >>> 1;
          if (e(t[n], i) < 0) {
            r = n + 1;
          } else {
            o = n;
          }
        } while (r < o);
      }
      return r;
    }
    if (t.length !== 2) {
      n = compareValuesUtil.compareValues;
      e = (n, e) => compareValuesUtil.compareValues(t(n), e);
      o = (n, e) => t(n) - e;
    } else {
      n = t === compareValuesUtil.compareValues || t === r ? t : u;
      e = t;
      o = t;
    }
    return {
      left: a,
      center: function (t, n, e = 0, i = t.length) {
        let r = a(t, n, e, i - 1);
        if (r > e && o(t[r - 1], n) > -o(t[r], n)) {
          return r - 1;
        } else {
          return r;
        }
      },
      right: function (t, i, r = 0, o = t.length) {
        if (r < o) {
          if (n(i, i) !== 0) {
            return o;
          }
          do {
            let n = r + o >>> 1;
            if (e(t[n], i) <= 0) {
              r = n + 1;
            } else {
              o = n;
            }
          } while (r < o);
        }
        return r;
      }
    };
  }
  function u() {
    return 0;
  }
  require.d(exports, {
    createBinarySearch: function () {
      return o;
    }
  });
}