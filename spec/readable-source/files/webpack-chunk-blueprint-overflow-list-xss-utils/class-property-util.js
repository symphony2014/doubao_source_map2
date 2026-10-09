// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'defineClassProps'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 801584
         */
module.exports = function (module, exports, require) {
  var valueToPrimitiveConverter = require("value-to-primitive-converter") /*id: 481732*/;
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || false;
      i.configurable = true;
      if ("value" in i) {
        i.writable = true;
      }
      Object.defineProperty(e, valueToPrimitiveConverter.toPrimitiveValue(i.key), i);
    }
  }
  function o(e, t, n) {
    if (t) {
      i(e.prototype, t);
    }
    if (n) {
      i(e, n);
    }
    Object.defineProperty(e, "prototype", {
      writable: false
    });
    return e;
  }
  require.d(exports, {
    defineClassProps: function () {
      return o;
    }
  });
}