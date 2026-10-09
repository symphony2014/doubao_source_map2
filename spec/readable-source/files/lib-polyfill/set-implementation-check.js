// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 922533
         */
module.exports = function (module, exports, require) {
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  function o(t) {
    return {
      size: t,
      has: function () {
        return false;
      },
      keys: function () {
        return {
          next: function () {
            return {
              done: true
            };
          }
        };
      }
    };
  }
  function i(t) {
    return {
      size: t,
      has: function () {
        return true;
      },
      keys: function () {
        throw Error("e");
      }
    };
  }
  module.exports = function (t, r) {
    var e = globalPolyfillAccess("Set");
    try {
      new e()[t](o(0));
      try {
        new e()[t](o(-1));
        return false;
      } catch (n) {
        if (!r) {
          return true;
        }
        try {
          new e()[t](i(-Infinity));
          return false;
        } catch (n) {
          var a = new e();
          a.add(1);
          a.add(2);
          return r(a[t](i(Infinity)));
        }
      }
    } catch (t) {
      return false;
    }
  };
}