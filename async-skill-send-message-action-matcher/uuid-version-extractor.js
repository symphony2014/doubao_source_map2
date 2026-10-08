// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'extractUuidVersion'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 872638
         */
module.exports = function (module, exports, require) {
  var uuidValidator = require("uuid-validator") /*id: 95560*/;
  exports.extractUuidVersion = function (e) {
    if (!uuidValidator.isValidUuid(e)) {
      throw TypeError("Invalid UUID");
    }
    return parseInt(e.slice(14, 15), 16);
  };
}