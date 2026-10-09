// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'setObjectProperty'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 84841
         */
module.exports = function (module, exports, require) {
  var valueToPrimitiveConverter = require("value-to-primitive-converter") /*id: 481732*/;
  function i(e, t, n) {
    if ((t = valueToPrimitiveConverter.toPrimitiveValue(t)) in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  require.d(exports, {
    setObjectProperty: function () {
      return i;
    }
  });
}