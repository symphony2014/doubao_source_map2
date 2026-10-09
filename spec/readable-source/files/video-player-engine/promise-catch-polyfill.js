// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// - Resolved require(91037) to 'promise-polyfill-detection'
// - Renamed variable 'a' to 'promisePolyfill'
// - Resolved require(733703) to 'promise-polyfill'
// - Renamed variable 'd' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'r' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'o' to 'definePropertyHelper_1_1'
// - Resolved require(429138) to 'define-property-helper_1_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 366748
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var i = require("promise-polyfill-detection") /*id: 91037*/.CONSTRUCTOR;
  var promisePolyfill = require("promise-polyfill") /*id: 733703*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var definePropertyHelper_1_1 = require("define-property-helper_1_1") /*id: 429138*/;
  var B = promisePolyfill && promisePolyfill.prototype;
  polyfillPropertyDefiner({
    target: "Promise",
    proto: true,
    forced: i,
    real: true
  }, {
    catch: function (U) {
      return this.then(undefined, U);
    }
  });
  if (!libPolyfillCheck && isFunctionPolyfill(promisePolyfill)) {
    var R = globalPolyfillAccess("Promise").prototype.catch;
    if (B.catch !== R) {
      definePropertyHelper_1_1(B, "catch", R, {
        unsafe: true
      });
    }
  }
}