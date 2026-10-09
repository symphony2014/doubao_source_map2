// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'assignObject'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 35713.652e82fe.js
         * chunkId: 35713
         * moduleId: 526210
         */
module.exports = function (module, exports, require) {
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      if (t) {
        r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      n.push.apply(n, r);
    }
    return n;
  }
  function i(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] ?? {};
      if (t % 2) {
        o(Object(n), true).forEach(function (t) {
          objectPropertySetter.setObjectProperty(e, t, n[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        o(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
    return e;
  }
  require.d(exports, {
    assignObject: function () {
      return i;
    }
  });
}