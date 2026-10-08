// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'setInheritance'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 805158
         */
module.exports = function (module, exports, require) {
  var setPrototypeOf = require("set-prototype-of") /*id: 720499*/;
  function i(e, t) {
    if (typeof t != "function" && t !== null) {
      throw TypeError("Super expression must either be null or a function");
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(e, "prototype", {
      writable: false
    });
    if (t) {
      setPrototypeOf.setPrototypeOf(e, t);
    }
  }
  require.d(exports, {
    setInheritance: function () {
      return i;
    }
  });
}