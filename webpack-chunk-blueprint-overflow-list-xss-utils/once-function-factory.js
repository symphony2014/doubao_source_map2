// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createOnce'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 80532
         */
module.exports = function (module, exports, require) {
  var toIntegerUtil_1 = require("to-integer-util_1") /*id: 366478*/;
  function i(e, t) {
    var n;
    if (typeof t != "function") {
      throw TypeError("Expected a function");
    }
    e = toIntegerUtil_1.toInteger(e);
    return function () {
      if (--e > 0) {
        n = t.apply(this, arguments);
      }
      if (e <= 1) {
        t = undefined;
      }
      return n;
    };
  }
  function o(e) {
    return i(2, e);
  }
  require.d(exports, {
    createOnce: function () {
      return o;
    }
  });
}