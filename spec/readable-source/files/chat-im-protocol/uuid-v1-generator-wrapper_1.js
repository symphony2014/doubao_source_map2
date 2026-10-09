// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 's' to 'generateUuid'
// - Renamed export 'z' to 'generateUuidAlt'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29910.2353a85a.js
         * chunkId: 29910
         * moduleId: 481547
         */
module.exports = function (module, exports, require) {
  var uuidV1Generator = require("uuid-v1-generator") /*id: 278878*/;
  let n = () => uuidV1Generator.generateUuid();
  let r = () => uuidV1Generator.generateUuid();
  require.d(exports, {
    generateUuid: function () {
      return r;
    },
    generateUuidAlt: function () {
      return n;
    }
  });
}