// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'usePortalTarget'
// - Renamed export 'q' to 'setPortalTarget'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 960802
         */
module.exports = function (module, exports, require) {
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  let r = reactStoreHookFactory.createStoreHook(() => ({
    portalTarget: undefined
  }));
  let o = e => r.setState({
    portalTarget: e
  });
  let a = () => reactStoreHookFactory.useStoreSelector(r).portalTarget;
  require.d(exports, {
    usePortalTarget: function () {
      return a;
    },
    setPortalTarget: function () {
      return o;
    }
  });
}