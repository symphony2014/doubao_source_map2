// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'o' to 'tryCatchFunctionWrapper'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// - Renamed variable 'i' to 'createElementPolyfill'
// - Resolved require(962506) to 'create-element-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 249084
         */
module.exports = function (module, exports, require) {
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var tryCatchFunctionWrapper = require("try-catch-function-wrapper") /*id: 676963*/;
  var createElementPolyfill = require("create-element-polyfill") /*id: 962506*/;
  module.exports = !es5PropertyDescriptorCheck && !tryCatchFunctionWrapper(function () {
    return Object.defineProperty(createElementPolyfill("div"), "a", {
      get: function () {
        return 7;
      }
    }).a !== 7;
  });
}