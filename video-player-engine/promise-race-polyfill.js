// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'a' to 'promiseCapabilityPolyfill'
// - Resolved require(8840) to 'promise-capability-polyfill'
// - Renamed variable 'd' to 'libPolyfillSafeCall'
// - Resolved require(281924) to 'lib-polyfill-safe-call'
// - Renamed variable 'r' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Resolved require(324392) to 'promise-polyfill-detect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 385674
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var promiseCapabilityPolyfill = require("promise-capability-polyfill") /*id: 8840*/;
  var libPolyfillSafeCall = require("lib-polyfill-safe-call") /*id: 281924*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  polyfillPropertyDefiner({
    target: "Promise",
    stat: true,
    forced: require("promise-polyfill-detect") /*id: 324392*/
  }, {
    race: function (U) {
      var n = this;
      var F = promiseCapabilityPolyfill.f(n);
      var Q = F.reject;
      var o = libPolyfillSafeCall(function () {
        var a = functionValidator(n.resolve);
        iteratorForEachHelper(U, function (U) {
          callBindPolyfill(a, n, U).then(F.resolve, Q);
        });
      });
      if (o.error) {
        Q(o.value);
      }
      return F.promise;
    }
  });
}