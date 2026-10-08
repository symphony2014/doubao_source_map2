// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reduxDevtoolsPersistIntegration'
// - Resolved require(383133) to 'redux-devtools-persist-integration'
// - Renamed variable 'r' to 'reactStoreHookFactory'
// - Resolved require(65636) to 'react-store-hook-factory'
// - Updated imported property 'Ue' to 'createStoreHook' (module 65636)
// - Updated imported property 'XR' to 'enhanceSubscribe' (module 383133)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 744923
         */
module.exports = function (module, exports, require) {
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  let o = () => ({
    services: {},
    ctx: {}
  });
  let a = reactStoreHookFactory.createStoreHook()(reduxDevtoolsPersistIntegration.enhanceSubscribe(o));
  require.r(exports);
  require.d(exports, {
    getDefaultState: function () {
      return o;
    },
    useDeprecatedIMSDK: function () {
      return a;
    }
  });
}