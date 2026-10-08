// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'flattenArray'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 547804
         */
module.exports = function (module, exports, require) {
  var arrayAppendUtil = require("array-append-util") /*id: 332715*/;
  var globalSymbolExport = require("global-symbol-export") /*id: 378602*/;
  var isArgumentsUtil = require("is-arguments-util") /*id: 13977*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var s = globalSymbolExport.globalSymbol ? globalSymbolExport.globalSymbol.isConcatSpreadable : undefined;
  function u(e) {
    return arrayIsArrayUtil.isArray(e) || isArgumentsUtil.isArguments(e) || !!s && !!e && !!e[s];
  }
  var c = function e(t, n, i, o, a) {
    var s = -1;
    var c = t.length;
    i ||= u;
    a ||= [];
    while (++s < c) {
      var l = t[s];
      if (n > 0 && i(l)) {
        if (n > 1) {
          e(l, n - 1, i, o, a);
        } else {
          arrayAppendUtil.appendArrayElements(a, l);
        }
      } else if (!o) {
        a[a.length] = l;
      }
    }
    return a;
  };
  require.d(exports, {
    flattenArray: function () {
      return c;
    }
  });
}