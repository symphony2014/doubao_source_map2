// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'axiosErrorClass'
// - Resolved require(24058) to 'axios-error-class'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 589565
         */
module.exports = function (module, exports, require) {
  var axiosErrorClass = require("axios-error-class") /*id: 24058*/;
  module.exports = function (e, t, r) {
    var o = r.config.validateStatus;
    if (!r.status || !o || o(r.status)) {
      e(r);
    } else {
      t(new axiosErrorClass("Request failed with status code " + r.status, [axiosErrorClass.ERR_BAD_REQUEST, axiosErrorClass.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r));
    }
  };
}