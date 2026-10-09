// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'deepMerge'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 523422
         */
module.exports = function (module, exports, require) {
  var propertyDefineHelper = require("property-define-helper") /*id: 411363*/;
  var polyfillArraySpread = require("polyfill-array-spread") /*id: 415168*/;
  var valueTypePolyfill = require("value-type-polyfill") /*id: 416304*/;
  function a(e) {
    return e && (e === undefined ? "undefined" : valueTypePolyfill.getType(e)) === "object" && !Array.isArray(e);
  }
  require.d(exports, {
    deepMerge: function () {
      return function e(t) {
        var n = arguments.length;
        var o = Array(n > 1 ? n - 1 : 0);
        var s = 1;
        for (; s < n; s++) {
          o[s - 1] = arguments[s];
        }
        if (!o.length) {
          return t;
        }
        var u = o.shift();
        if (a(t) && a(u)) {
          for (var c in u) {
            if (a(u[c])) {
              if (!t[c]) {
                Object.assign(t, propertyDefineHelper.assignOrDefine({}, c, {}));
              }
              e(t[c], u[c]);
            } else {
              Object.assign(t, propertyDefineHelper.assignOrDefine({}, c, u[c]));
            }
          }
        }
        return e.apply(undefined, [t].concat(polyfillArraySpread.toArray(o)));
      };
    }
  });
}