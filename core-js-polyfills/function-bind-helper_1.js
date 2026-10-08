// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'functionWrapperChecker'
// - Resolved require(416484) to 'function-wrapper-checker'
// - Renamed variable 'o' to 'functionTypeGuardAssertion'
// - Resolved require(750329) to 'function-type-guard-assertion'
// - Renamed variable 'i' to 'functionBindPrototypeCheck'
// - Resolved require(267474) to 'function-bind-prototype-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 644734
         */
module.exports = function (module, exports, require) {
  var functionWrapperChecker = require("function-wrapper-checker") /*id: 416484*/;
  var functionTypeGuardAssertion = require("function-type-guard-assertion") /*id: 750329*/;
  var functionBindPrototypeCheck = require("function-bind-prototype-check") /*id: 267474*/;
  var u = functionWrapperChecker(functionWrapperChecker.bind);
  module.exports = function (t, r) {
    functionTypeGuardAssertion(t);
    if (r === undefined) {
      return t;
    } else if (functionBindPrototypeCheck) {
      return u(t, r);
    } else {
      return function () {
        return t.apply(r, arguments);
      };
    }
  };
}