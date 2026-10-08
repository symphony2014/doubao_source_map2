// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'omitKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 875179
         */
module.exports = function (module, exports, require) {
  var objectGetOwnPropertySymbolsReexport_3 = require("object-get-own-property-symbols-reexport_3") /*id: 595325*/;
  var includesPolyfillSelector_3 = require("includes-polyfill-selector_3") /*id: 420707*/;
  function c(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var c;
    var i = function (e, t) {
      if (e == null) {
        return {};
      }
      var r = {};
      for (var n in e) {
        if ({}.hasOwnProperty.call(e, n)) {
          if (includesPolyfillSelector_3(t).call(t, n)) {
            continue;
          }
          r[n] = e[n];
        }
      }
      return r;
    }(e, t);
    if (objectGetOwnPropertySymbolsReexport_3) {
      var o = objectGetOwnPropertySymbolsReexport_3(e);
      for (c = 0; c < o.length; c++) {
        r = o[c];
        if (!includesPolyfillSelector_3(t).call(t, r)) {
          if ({}.propertyIsEnumerable.call(e, r)) {
            i[r] = e[r];
          }
        }
      }
    }
    return i;
  }
  require.d(exports, {
    omitKeys: function () {
      return c;
    }
  });
}