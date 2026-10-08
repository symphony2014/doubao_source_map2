// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'a' to 'promiseCapabilityPolyfill'
// - Resolved require(8840) to 'promise-capability-polyfill'
// - Renamed variable 'u' to 'libPolyfillSafeCall'
// - Resolved require(281924) to 'lib-polyfill-safe-call'
// - Renamed variable 'c' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Resolved require(324392) to 'promise-polyfill-detect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 797281
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
    allSettled: function (t) {
      var r = this;
      var e = promiseCapabilityPolyfill.f(r);
      var n = e.resolve;
      var f = e.reject;
      var s = libPolyfillSafeCall(function () {
        var e = functionValidator(r.resolve);
        var a = [];
        var u = 0;
        var f = 1;
        iteratorForEachHelper(t, function (t) {
          var i = u++;
          var c = false;
          f++;
          callBindPolyfill(e, r, t).then(function (t) {
            if (!c) {
              c = true;
              a[i] = {
                status: "fulfilled",
                value: t
              };
              if (! --f) {
                n(a);
              }
            }
          }, function (t) {
            if (!c) {
              c = true;
              a[i] = {
                status: "rejected",
                reason: t
              };
              if (! --f) {
                n(a);
              }
            }
          });
        });
        if (! --f) {
          n(a);
        }
      });
      if (s.error) {
        f(s.value);
      }
      return e.promise;
    }
  });
}