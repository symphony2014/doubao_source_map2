// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'deepEqual'
// - Renamed export 'Z' to 'isEqual'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 249434
         */
module.exports = function (module, exports, require) {
  function r(e, t) {
    if (Object.is(e, t)) {
      return true;
    }
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) {
      return false;
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) {
        return false;
      }
      for (let [n, r] of e) {
        if (!Object.is(r, t.get(n))) {
          return false;
        }
      }
      return true;
    }
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) {
        return false;
      }
      for (let n of e) {
        if (!t.has(n)) {
          return false;
        }
      }
      return true;
    }
    let n = Object.keys(e);
    if (n.length !== Object.keys(t).length) {
      return false;
    }
    for (let r = 0; r < n.length; r++) {
      if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) {
        return false;
      }
    }
    return true;
  }
  var i = (e, t) => r(e, t);
  require.d(exports, {
    deepEqual: function () {
      return r;
    },
    isEqual: function () {
      return i;
    }
  });
}