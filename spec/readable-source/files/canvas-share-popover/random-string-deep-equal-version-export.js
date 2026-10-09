// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D1' to 'createRandomString'
// - Renamed export 'S2' to 'versionValue'
// - Renamed export 'Xy' to 'deepEqual'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: canvas-share-popover.d05211cb.js
         * chunkId: 91643
         * moduleId: 951195
         */
module.exports = function (module, exports, require) {
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var randomStringGenerator = require("random-string-generator") /*id: 62944*/;
  var deepEqualityCheck_1 = require("deep-equality-check_1") /*id: 956585*/;
  require.d(exports, {
    createRandomString: function () {
      return randomStringGenerator.createRandomString;
    },
    versionValue: function () {
      return zeroConstantModule_1.versionValue;
    },
    deepEqual: function () {
      return deepEqualityCheck_1.deepEqual;
    }
  });
}