// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'a' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'u' to 'promiseCapabilityPolyfill'
// - Resolved require(8840) to 'promise-capability-polyfill'
// - Renamed variable 'c' to 'libPolyfillSafeCall'
// - Resolved require(281924) to 'lib-polyfill-safe-call'
// - Renamed variable 'f' to 'iteratorForEachHelper'
// - Resolved require(686807) to 'iterator-for-each-helper'
// - Renamed variable 's' to 'promisePolyfillDetect'
// - Resolved require(324392) to 'promise-polyfill-detect'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 947639
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var promiseCapabilityPolyfill = require("promise-capability-polyfill") /*id: 8840*/;
  var libPolyfillSafeCall = require("lib-polyfill-safe-call") /*id: 281924*/;
  var iteratorForEachHelper = require("iterator-for-each-helper") /*id: 686807*/;
  var promisePolyfillDetect = require("promise-polyfill-detect") /*id: 324392*/;
  var l = "No one promise resolved";
  polyfillPropertyDefiner({
    target: "Promise",
    stat: true,
    forced: promisePolyfillDetect
  }, {
    any: function (t) {
      var r = this;
      var e = globalPolyfillAccess("AggregateError");
      var n = promiseCapabilityPolyfill.f(r);
      var s = n.resolve;
      var v = n.reject;
      var p = libPolyfillSafeCall(function () {
        var n = functionValidator(r.resolve);
        var a = [];
        var u = 0;
        var c = 1;
        var p = false;
        iteratorForEachHelper(t, function (t) {
          var i = u++;
          var f = false;
          c++;
          callBindPolyfill(n, r, t).then(function (t) {
            if (!f && !p) {
              p = true;
              s(t);
            }
          }, function (t) {
            if (!f && !p) {
              f = true;
              a[i] = t;
              if (! --c) {
                v(new e(a, l));
              }
            }
          });
        });
        if (! --c) {
          v(new e(a, l));
        }
      });
      if (p.error) {
        v(p.value);
      }
      return n.promise;
    }
  });
}