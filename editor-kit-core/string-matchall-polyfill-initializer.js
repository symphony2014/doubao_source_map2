// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectAssignPolyfillUtil'
// - Resolved require(68396) to 'object-assign-polyfill-util'
// - Resolved require(237121) to 'symbol-support-check_1'
// - Renamed variable 'i' to 'safeObjectPropertyDescriptor'
// - Resolved require(467842) to 'safe-object-property-descriptor'
// - Renamed variable 'u' to 'stringMatchAllPolyfill'
// - Resolved require(764054) to 'string-match-all-polyfill'
// - Renamed variable 'a' to 'regexpMatchallShim'
// - Resolved require(60050) to 'regexp-matchall-shim'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 329600
         */
module.exports = function (module, exports, require) {
  var objectAssignPolyfillUtil = require("object-assign-polyfill-util") /*id: 68396*/;
  var o = require("symbol-support-check_1") /*id: 237121*/();
  var safeObjectPropertyDescriptor = require("safe-object-property-descriptor") /*id: 467842*/;
  var stringMatchAllPolyfill = require("string-match-all-polyfill") /*id: 764054*/;
  var regexpMatchallShim = require("regexp-matchall-shim") /*id: 60050*/;
  var s = Object.defineProperty;
  module.exports = function () {
    var t = stringMatchAllPolyfill();
    objectAssignPolyfillUtil(String.prototype, {
      matchAll: t
    }, {
      matchAll: function () {
        return String.prototype.matchAll !== t;
      }
    });
    if (o) {
      var e = Symbol.matchAll || (Symbol.for ? Symbol.for("Symbol.matchAll") : Symbol("Symbol.matchAll"));
      objectAssignPolyfillUtil(Symbol, {
        matchAll: e
      }, {
        matchAll: function () {
          return Symbol.matchAll !== e;
        }
      });
      if (s && safeObjectPropertyDescriptor) {
        var r = safeObjectPropertyDescriptor(Symbol, e);
        if (!r || r.configurable) {
          s(Symbol, e, {
            configurable: false,
            enumerable: false,
            value: e,
            writable: false
          });
        }
      }
      var c = regexpMatchallShim();
      var f = {
        [e]: c
      };
      var l = {
        [e]: function () {
          return RegExp.prototype[e] !== c;
        }
      };
      objectAssignPolyfillUtil(RegExp.prototype, f, l);
    }
    return t;
  };
}