// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'W0' to 'getDriveApiConfig'
// - Renamed export 'k8' to 'getCommonConfig'
// - Renamed export 'zF' to 'getSpaceApiConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 47815
         */
module.exports = function (module, exports, require) {
  var objectPathGetDefault = require("object-path-get-default") /*id: 690546*/;
  function i() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.space_api");
  }
  function l() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.drive_api");
  }
  function c() {
    return objectPathGetDefault.getObjectPathDefault(window, "globalConfig.common", {});
  }
  require.d(exports, {
    getDriveApiConfig: function () {
      return l;
    },
    getCommonConfig: function () {
      return c;
    },
    getSpaceApiConfig: function () {
      return i;
    }
  });
}