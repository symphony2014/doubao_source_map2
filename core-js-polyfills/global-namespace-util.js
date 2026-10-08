// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'emptyModuleStub_1'
// - Resolved require(245992) to 'empty-module-stub_1'
// - Renamed variable 'o' to 'getGlobalObject'
// - Resolved require(780500) to 'get-global-object'
// - Renamed variable 'i' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 858005
         */
module.exports = function (module, exports, require) {
  var emptyModuleStub_1 = require("empty-module-stub_1") /*id: 245992*/;
  var getGlobalObject = require("get-global-object") /*id: 780500*/;
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  function u(t) {
    if (isFunctionCheck(t)) {
      return t;
    } else {
      return undefined;
    }
  }
  module.exports = function (t, r) {
    if (arguments.length < 2) {
      return u(emptyModuleStub_1[t]) || u(getGlobalObject[t]);
    } else {
      return emptyModuleStub_1[t] && emptyModuleStub_1[t][r] || getGlobalObject[t] && getGlobalObject[t][r];
    }
  };
}