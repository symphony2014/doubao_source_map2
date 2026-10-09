// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 160176
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var i = Math.pow;
  var a = i(2, -24);
  function u(t) {
    var r = t >>> 15;
    var e = t >>> 10 & 31;
    var n = t & 1023;
    if (e === 31) {
      if (n === 0) {
        if (r === 0) {
          return Infinity;
        } else {
          return -Infinity;
        }
      } else {
        return NaN;
      }
    } else if (e === 0) {
      return n * (r === 0 ? a : -a);
    } else {
      return i(2, e - 15) * (r === 0 ? 1 + n * 0.0009765625 : -1 - n * 0.0009765625);
    }
  }
  var c = functionBindFallback(DataView.prototype.getUint16);
  polyfillPropertyDefiner({
    target: "DataView",
    proto: true
  }, {
    getFloat16: function (t) {
      var r = c(this, t, arguments.length > 1 && arguments[1]);
      return u(r);
    }
  });
}