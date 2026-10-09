// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'promiseCapabilityPolyfill'
// - Resolved require(8840) to 'promise-capability-polyfill'
// - Resolved require(91037) to 'promise-polyfill-detection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 140679
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var promiseCapabilityPolyfill = require("promise-capability-polyfill") /*id: 8840*/;
  polyfillPropertyDefiner({
    target: "Promise",
    stat: true,
    forced: require("promise-polyfill-detection") /*id: 91037*/.CONSTRUCTOR
  }, {
    reject: function (U) {
      var n = promiseCapabilityPolyfill.f(this);
      n.reject(U);
      return n.promise;
    }
  });
}