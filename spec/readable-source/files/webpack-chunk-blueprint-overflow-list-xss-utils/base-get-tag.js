// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'baseGetTag'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 670218
         */
module.exports = function (module, exports, require) {
  var globalSymbolExport = require("global-symbol-export") /*id: 378602*/;
  var i = Object.prototype;
  var o = i.hasOwnProperty;
  var a = i.toString;
  var s = globalSymbolExport.globalSymbol ? globalSymbolExport.globalSymbol.toStringTag : undefined;
  function u(e) {
    var t = o.call(e, s);
    var n = e[s];
    try {
      e[s] = undefined;
      var r = true;
    } catch (e) {}
    var i = a.call(e);
    if (r) {
      if (t) {
        e[s] = n;
      } else {
        delete e[s];
      }
    }
    return i;
  }
  var c = Object.prototype.toString;
  var l = globalSymbolExport.globalSymbol ? globalSymbolExport.globalSymbol.toStringTag : undefined;
  function f(e) {
    if (e == null) {
      if (e === undefined) {
        return "[object Undefined]";
      } else {
        return "[object Null]";
      }
    } else if (l && l in Object(e)) {
      return u(e);
    } else {
      return c.call(e);
    }
  }
  require.d(exports, {
    baseGetTag: function () {
      return f;
    }
  });
}