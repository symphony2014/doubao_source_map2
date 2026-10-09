// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'reflectApplyPolyfill_1'
// - Resolved require(676373) to 'reflect-apply-polyfill_1'
// - Renamed variable 'a' to 'arraySlicePolyfill_2'
// - Resolved require(763415) to 'array-slice-polyfill_2'
// - Renamed variable 'u' to 'promiseCapabilityPolyfill'
// - Resolved require(8840) to 'promise-capability-polyfill'
// - Renamed variable 'c' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'f' to 'libPolyfillSafeCall'
// - Resolved require(281924) to 'lib-polyfill-safe-call'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 790837
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var reflectApplyPolyfill_1 = require("reflect-apply-polyfill_1") /*id: 676373*/;
  var arraySlicePolyfill_2 = require("array-slice-polyfill_2") /*id: 763415*/;
  var promiseCapabilityPolyfill = require("promise-capability-polyfill") /*id: 8840*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var libPolyfillSafeCall = require("lib-polyfill-safe-call") /*id: 281924*/;
  var s = globalObjectPolyfill.Promise;
  var l = false;
  polyfillPropertyDefiner({
    target: "Promise",
    stat: true,
    forced: !s || !s.try || libPolyfillSafeCall(function () {
      s.try(function (t) {
        l = t === 8;
      }, 8);
    }).error || !l
  }, {
    try: function (t) {
      var r = arguments.length > 1 ? arraySlicePolyfill_2(arguments, 1) : [];
      var e = promiseCapabilityPolyfill.f(this);
      var n = libPolyfillSafeCall(function () {
        return reflectApplyPolyfill_1(functionValidator(t), undefined, r);
      });
      (n.error ? e.reject : e.resolve)(n.value);
      return e.promise;
    }
  });
}