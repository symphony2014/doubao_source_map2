// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'constructorReturn'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 233617
         */
module.exports = function (module, exports, require) {
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var assertThisInitialized = require("assert-this-initialized") /*id: 876127*/;
  function o(e, t) {
    if (t && (typeofHelper.getType(t) === "object" || typeof t == "function")) {
      return t;
    }
    if (t !== undefined) {
      throw TypeError("Derived constructors may only return object or undefined");
    }
    return assertThisInitialized.assertThisInit(e);
  }
  require.d(exports, {
    constructorReturn: function () {
      return o;
    }
  });
}