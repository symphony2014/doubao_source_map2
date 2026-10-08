// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'i' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// - Renamed variable 'a' to 'promisePolyfill'
// - Resolved require(733703) to 'promise-polyfill'
// - Resolved require(91037) to 'promise-polyfill-detection'
// - Renamed variable 'r' to 'promiseResolveHelper'
// - Resolved require(501080) to 'promise-resolve-helper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 576679
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var promisePolyfill = require("promise-polyfill") /*id: 733703*/;
  var d = require("promise-polyfill-detection") /*id: 91037*/.CONSTRUCTOR;
  var promiseResolveHelper = require("promise-resolve-helper") /*id: 501080*/;
  var o = globalPolyfillAccess("Promise");
  var B = libPolyfillCheck && !d;
  polyfillPropertyDefiner({
    target: "Promise",
    stat: true,
    forced: libPolyfillCheck || d
  }, {
    resolve: function (U) {
      return promiseResolveHelper(B && this === o ? promisePolyfill : this, U);
    }
  });
}