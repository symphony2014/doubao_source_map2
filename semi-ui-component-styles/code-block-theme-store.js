// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'S' to 'codeBlockThemeModes'
// - Renamed export 'U' to 'codeBlockThemeStoreHook'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46941.f1be97d5.js
         * chunkId: 46941
         * moduleId: 807141
         */
module.exports = function (module, exports, require) {
  var a;
  var r;
  var l;
  var reduxDevtoolsPersistIntegration = require("redux-devtools-persist-integration") /*id: 383133*/;
  var reactStoreHookFactory = require("react-store-hook-factory") /*id: 65636*/;
  var storageWrapperWithFallback = require("storage-wrapper-with-fallback") /*id: 319763*/;
  (a = {}).DARK = "dark";
  a.LIGHT = "light";
  let u = a;
  let d = {
    codeBlockMode: typeof window != "undefined" && ((l = window) === null || l === undefined ? undefined : (r = l.matchMedia) === null || r === undefined ? undefined : r.call(l, "(prefers-color-scheme: dark)")?.matches) ? u.DARK : u.LIGHT
  };
  let g = () => ({
    ...d
  });
  let h = (() => {
    let e = reduxDevtoolsPersistIntegration.persistMiddleware(reduxDevtoolsPersistIntegration.enhanceSubscribe(g), {
      name: "flow-web-code-block-theme-store",
      getStorage: () => storageWrapperWithFallback.LocalStorageWrapper
    });
    return reactStoreHookFactory.createStoreHook()(e);
  })();
  require.d(exports, {
    codeBlockThemeModes: function () {
      return u;
    },
    codeBlockThemeStoreHook: function () {
      return h;
    }
  });
}