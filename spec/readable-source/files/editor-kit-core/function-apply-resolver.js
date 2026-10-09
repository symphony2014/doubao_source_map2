// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindPolyfill_1'
// - Resolved require(633877) to 'function-bind-polyfill_1'
// - Renamed variable 'o' to 'functionApplyNative'
// - Resolved require(282780) to 'function-apply-native'
// - Renamed variable 'i' to 'functionApplyPolyfillResolver'
// - Resolved require(296107) to 'function-apply-polyfill-resolver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 385385
         */
module.exports = function (module, exports, require) {
  var functionBindPolyfill_1 = require("function-bind-polyfill_1") /*id: 633877*/;
  var functionApplyNative = require("function-apply-native") /*id: 282780*/;
  var functionApplyPolyfillResolver = require("function-apply-polyfill-resolver") /*id: 296107*/;
  module.exports = function () {
    return functionApplyPolyfillResolver(functionBindPolyfill_1, functionApplyNative, arguments);
  };
}