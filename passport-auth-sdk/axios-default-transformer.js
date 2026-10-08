// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// - Renamed variable 'o' to 'axiosDefaultsConfig'
// - Resolved require(962818) to 'axios-defaults-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 385152
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  var axiosDefaultsConfig = require("axios-defaults-config") /*id: 962818*/;
  module.exports = function (e, t, r, i) {
    var a = this || axiosDefaultsConfig;
    utilsTypeCheckHelpers.forEach(i, function (n) {
      e = n.call(a, e, t, r);
    });
    return e;
  };
}