// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'settingsDomainService'
// - Resolved require(944824) to 'settings-domain-service'
// - Renamed variable 'i' to 'passportSettingsService'
// - Resolved require(537105) to 'passport-settings-service'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 72263.e97f8103.js
         * chunkId: 72263
         * moduleId: 356597
         */
module.exports = function (module, exports, require) {
  exports.SettingsService = exports.SettingsDomainService = undefined;
  var settingsDomainService = require("settings-domain-service") /*id: 944824*/;
  Object.defineProperty(exports, "SettingsDomainService", {
    enumerable: true,
    get: function () {
      return settingsDomainService.SettingsDomainService;
    }
  });
  var passportSettingsService = require("passport-settings-service") /*id: 537105*/;
  Object.defineProperty(exports, "SettingsService", {
    enumerable: true,
    get: function () {
      return passportSettingsService.SettingsService;
    }
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}