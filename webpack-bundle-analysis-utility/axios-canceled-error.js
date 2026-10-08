// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'axiosErrorClass'
// - Resolved require(24058) to 'axios-error-class'
// - Resolved require(998785) to 'utils-type-check-helpers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 195120
         */
module.exports = function (module, exports, require) {
  var axiosErrorClass = require("axios-error-class") /*id: 24058*/;
  function o(e, t, r) {
    axiosErrorClass.call(this, e == null ? "canceled" : e, axiosErrorClass.ERR_CANCELED, t, r);
    this.name = "CanceledError";
  }
  require("utils-type-check-helpers") /*id: 998785*/.inherits(o, axiosErrorClass, {
    __CANCEL__: true
  });
  module.exports = o;
}