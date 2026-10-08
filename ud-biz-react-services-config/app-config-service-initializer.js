// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'appConfigExtendedInitializer'
// - Resolved require(806887) to 'app-config-extended-initializer'
// - Updated imported property 'Xb' to 'appEnvironments' (module 806887)
// - Updated imported property 'ZP' to 'extendedAppConfig' (module 806887)
// - Updated imported property 'lY' to 'appConfig' (module 806887)
// - Updated imported property 'ac' to 'initPromise' (module 806887)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud-biz-react-services-config.08cb5f26.js
         * chunkId: 72667
         * moduleId: 378769
         */
module.exports = function (module, exports, require) {
  var appConfigExtendedInitializer = require("app-config-extended-initializer") /*id: 806887*/;
  require.r(exports);
  require.d(exports, {
    Env: function () {
      return appConfigExtendedInitializer.appEnvironments;
    },
    default: function () {
      return appConfigExtendedInitializer.extendedAppConfig;
    },
    defaultConfigService: function () {
      return appConfigExtendedInitializer.appConfig;
    },
    initPromise: function () {
      return appConfigExtendedInitializer.initPromise;
    }
  });
}