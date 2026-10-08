// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'wU' to 'isEqual'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: md-box-lazy.b5ecf0c8.js
         * chunkId: 21658
         * moduleId: 999658
         */
module.exports = function (module, exports, require) {
  function e(n, t) {
    let r = Array.isArray(n);
    let e = Array.isArray(t);
    return r === e && (r && e ? function (n, t) {
      if (n === t) {
        return true;
      }
      if (!n || !t) {
        return false;
      }
      let r = n.length;
      if (t.length !== r) {
        return false;
      }
      for (let e = 0; e < r; e++) {
        if (n[e] !== t[e]) {
          return false;
        }
      }
      return true;
    }(n, t) : function (n, t) {
      if (n === t) {
        return true;
      }
      if (!n || !t) {
        return false;
      }
      let r = Object.keys(n);
      let e = Object.keys(t);
      let u = r.length;
      if (e.length !== u) {
        return false;
      }
      for (let e = 0; e < u; e++) {
        let u = r[e];
        if (n[u] !== t[u] || !Object.prototype.hasOwnProperty.call(t, u)) {
          return false;
        }
      }
      return true;
    }(n, t));
  }
  require.d(exports, {
    isEqual: function () {
      return e;
    }
  });
}