// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'HC' to 'isE2eMode'
// - Renamed export 'aK' to 'getTestIdProp'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: skill-pin-modal.533b7e90.js
         * chunkId: 13221
         * moduleId: 874338
         */
module.exports = function (module, exports, require) {
  var userAgentDeviceDetector = require("user-agent-device-detector") /*id: 161498*/;
  function r(e) {
    if (e) {
      return {
        "data-testid": e
      };
    } else {
      return {};
    }
  }
  let o = () => userAgentDeviceDetector.getUserAgent().includes("E2E");
  require.d(exports, {
    isE2eMode: function () {
      return o;
    },
    getTestIdProp: function () {
      return r;
    }
  });
}