// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '_' to 'assignProperties'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 559150
         */
module.exports = function (module, exports, require) {
  function n(t, r) {
    r = r ?? {};
    if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(t, Object.getOwnPropertyDescriptors(r));
    } else {
      (function (t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e.push.apply(e, n);
        }
        return e;
      })(Object(r)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
      });
    }
    return t;
  }
  require.d(exports, {
    assignProperties: function () {
      return n;
    }
  });
}