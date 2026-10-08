// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'arrayIsarrayPolyfill'
// - Resolved require(332607) to 'array-isarray-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 365851
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var arrayIsarrayPolyfill = require("array-isarray-polyfill") /*id: 332607*/;
  var i = Object.isFrozen;
  function a(t, r) {
    if (!i || !arrayIsarrayPolyfill(t) || !i(t)) {
      return false;
    }
    var e;
    var n = 0;
    var a = t.length;
    while (n < a) {
      if (typeof (e = t[n++]) != "string" && (!r || e !== undefined)) {
        return false;
      }
    }
    return a !== 0;
  }
  polyfillPropertyDefiner({
    target: "Array",
    stat: true,
    sham: true,
    forced: true
  }, {
    isTemplateObject: function (t) {
      if (!a(t, true)) {
        return false;
      }
      var r = t.raw;
      return r.length === t.length && a(r, false);
    }
  });
}