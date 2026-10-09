// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectKeysPolyfillShim'
// - Resolved require(603065) to 'object-keys-polyfill-shim'
// - Renamed variable 'a' to 'definePropertySafeUtil'
// - Resolved require(848618) to 'define-property-safe-util'
// - Resolved require(642274) to 'define-property-check_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 68396
         */
module.exports = function (module, exports, require) {
  var objectKeysPolyfillShim = require("object-keys-polyfill-shim") /*id: 603065*/;
  var o = typeof Symbol == "function" && typeof Symbol("foo") == "symbol";
  var i = Object.prototype.toString;
  var u = Array.prototype.concat;
  var definePropertySafeUtil = require("define-property-safe-util") /*id: 848618*/;
  var s = require("define-property-check_1") /*id: 642274*/();
  function c(t, e, r, n) {
    if (e in t) {
      if (n === true) {
        if (t[e] === r) {
          return;
        }
      } else if (typeof n != "function" || i.call(n) !== "[object Function]" || !n()) {
        return;
      }
    }
    if (s) {
      definePropertySafeUtil(t, e, r, true);
    } else {
      definePropertySafeUtil(t, e, r);
    }
  }
  function f(t, e) {
    var r = arguments.length > 2 ? arguments[2] : {};
    var i = objectKeysPolyfillShim(e);
    if (o) {
      i = u.call(i, Object.getOwnPropertySymbols(e));
    }
    for (var a = 0; a < i.length; a += 1) {
      c(t, i[a], e[i[a]], r[i[a]]);
    }
  }
  f.supportsDescriptors = !!s;
  module.exports = f;
}