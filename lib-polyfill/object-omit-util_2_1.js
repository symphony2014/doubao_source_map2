// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'omitKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 53732
         */
module.exports = function (module, exports, require) {
  function n(t, r) {
    if (t == null) {
      return {};
    }
    var e;
    var n;
    var o = function (t, r) {
      if (t == null) {
        return {};
      }
      var e;
      var n;
      var o = {};
      var i = Object.keys(t);
      for (n = 0; n < i.length; n++) {
        e = i[n];
        if (!(r.indexOf(e) >= 0)) {
          o[e] = t[e];
        }
      }
      return o;
    }(t, r);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      for (n = 0; n < i.length; n++) {
        e = i[n];
        if (!(r.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e)) {
          o[e] = t[e];
        }
      }
    }
    return o;
  }
  require.d(exports, {
    omitKeys: function () {
      return n;
    }
  });
}