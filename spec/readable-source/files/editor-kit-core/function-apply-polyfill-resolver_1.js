// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindPolyfill_1'
// - Resolved require(633877) to 'function-bind-polyfill_1'
// - Renamed variable 'o' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// - Renamed variable 'i' to 'functionCallPolyfill'
// - Resolved require(218287) to 'function-call-polyfill'
// - Renamed variable 'u' to 'functionApplyPolyfillResolver'
// - Resolved require(296107) to 'function-apply-polyfill-resolver'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 687265
         */
module.exports = function (module, exports, require) {
  var functionBindPolyfill_1 = require("function-bind-polyfill_1") /*id: 633877*/;
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  var functionCallPolyfill = require("function-call-polyfill") /*id: 218287*/;
  var functionApplyPolyfillResolver = require("function-apply-polyfill-resolver") /*id: 296107*/;
  module.exports = function (t) {
    if (t.length < 1 || typeof t[0] != "function") {
      throw new typeErrorConstructor("a function is required");
    }
    return functionApplyPolyfillResolver(functionBindPolyfill_1, functionCallPolyfill, t);
  };
}