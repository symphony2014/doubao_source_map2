// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindPolyfill_1'
// - Resolved require(633877) to 'function-bind-polyfill_1'
// - Renamed variable 'o' to 'functionApplyNative'
// - Resolved require(282780) to 'function-apply-native'
// - Renamed variable 'i' to 'functionCallPolyfill'
// - Resolved require(218287) to 'function-call-polyfill'
// - Renamed variable 'u' to 'reflectApplyUtil'
// - Resolved require(561469) to 'reflect-apply-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 296107
         */
module.exports = function (module, exports, require) {
  var functionBindPolyfill_1 = require("function-bind-polyfill_1") /*id: 633877*/;
  var functionApplyNative = require("function-apply-native") /*id: 282780*/;
  var functionCallPolyfill = require("function-call-polyfill") /*id: 218287*/;
  var reflectApplyUtil = require("reflect-apply-util") /*id: 561469*/;
  module.exports = reflectApplyUtil || functionBindPolyfill_1.call(functionCallPolyfill, functionApplyNative);
}