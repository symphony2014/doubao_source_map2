// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'qz' to 'mobileMenuToken'
// - Renamed export 'If' to 'mobileToolbarToken'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 763596
         */
module.exports = function (module, exports, require) {
  var dependencyInjectionContainer = require("dependency-injection-container") /*id: 555385*/;
  let o = dependencyInjectionContainer.providerName("mobile-custom-menu-events");
  let l = dependencyInjectionContainer.providerName("mobile-toolbar-events");
  dependencyInjectionContainer.providerName("mobile-mode-events");
  require.d(exports, {
    mobileMenuToken: function () {
      return o;
    },
    mobileToolbarToken: function () {
      return l;
    }
  });
}