// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'extendObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 597882
         */
module.exports = function (module, exports, require) {
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  function i(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? Object(arguments[t]) : {};
      var i = Object.keys(n);
      if (typeof Object.getOwnPropertySymbols == "function") {
        i.push.apply(i, Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        }));
      }
      i.forEach(function (t) {
        objectPropertySetter.setObjectProperty(e, t, n[t]);
      });
    }
    return e;
  }
  require.d(exports, {
    extendObject: function () {
      return i;
    }
  });
}