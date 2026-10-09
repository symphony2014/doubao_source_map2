// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'hookServiceToken'
// - Renamed export 'r' to 'RegistrationStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_toolbox.c7a0d7de.js
         * chunkId: 15539
         * moduleId: 565865
         */
module.exports = function (module, exports, require) {
  var o;
  let i = require("dependency-injection-container") /*id: 555385*/.providerName("hook-service");
  (o = {}).unRegistered = "unRegistered";
  o.registering = "registering";
  o.registered = "registered";
  let l = o;
  require.d(exports, {
    hookServiceToken: function () {
      return i;
    },
    RegistrationStatus: function () {
      return l;
    }
  });
}