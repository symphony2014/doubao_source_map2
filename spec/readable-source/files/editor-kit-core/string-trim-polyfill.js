// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'stringPrototypeTrim'
// - Resolved require(299107) to 'string-prototype-trim'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 443205
         */
module.exports = function (module, exports, require) {
  var stringPrototypeTrim = require("string-prototype-trim") /*id: 299107*/;
  module.exports = function () {
    if (String.prototype.trim && "​".trim() === "​" && "᠎".trim() === "᠎" && "_᠎".trim() === "_᠎" && "᠎_".trim() === "᠎_") {
      return String.prototype.trim;
    } else {
      return stringPrototypeTrim;
    }
  };
}