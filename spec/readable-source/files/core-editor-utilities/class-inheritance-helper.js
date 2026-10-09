// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'inherits'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 47773.5f26e624.js
         * chunkId: 47773
         * moduleId: 897927
         */
module.exports = function (module, exports, require) {
  function n(e, t) {
    return (n = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var r in t) {
        if (t.hasOwnProperty(r)) {
          e[r] = t[r];
        }
      }
    })(e, t);
  }
  function o(e, t) {
    function r() {
      this.constructor = e;
    }
    n(e, t);
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
  }
  require.d(exports, {
    inherits: function () {
      return o;
    }
  });
}