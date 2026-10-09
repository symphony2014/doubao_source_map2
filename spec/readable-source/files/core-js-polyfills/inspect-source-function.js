// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionBindPrototypeCheckWrapper'
// - Resolved require(463320) to 'function-bind-prototype-check-wrapper'
// - Renamed variable 'o' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// - Renamed variable 'i' to 'coreJsSharedVersion'
// - Resolved require(678932) to 'core-js-shared-version'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 491638
         */
module.exports = function (module, exports, require) {
  var functionBindPrototypeCheckWrapper = require("function-bind-prototype-check-wrapper") /*id: 463320*/;
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  var coreJsSharedVersion = require("core-js-shared-version") /*id: 678932*/;
  var u = functionBindPrototypeCheckWrapper(Function.toString);
  if (!isFunctionCheck(coreJsSharedVersion.inspectSource)) {
    coreJsSharedVersion.inspectSource = function (t) {
      return u(t);
    };
  }
  module.exports = coreJsSharedVersion.inspectSource;
}