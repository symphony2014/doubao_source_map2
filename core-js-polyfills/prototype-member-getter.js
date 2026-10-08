// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'getGlobalObject'
// - Resolved require(780500) to 'get-global-object'
// - Renamed variable 'o' to 'emptyModuleStub_1'
// - Resolved require(245992) to 'empty-module-stub_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 450021
         */
module.exports = function (module, exports, require) {
  var getGlobalObject = require("get-global-object") /*id: 780500*/;
  var emptyModuleStub_1 = require("empty-module-stub_1") /*id: 245992*/;
  module.exports = function (t, r) {
    var n = emptyModuleStub_1[t + "Prototype"];
    var i = n && n[r];
    if (i) {
      return i;
    }
    var u = getGlobalObject[t];
    var c = u && u.prototype;
    return c && c[r];
  };
}