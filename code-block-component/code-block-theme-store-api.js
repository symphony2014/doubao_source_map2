// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Pc' to 'toggleCodeBlockMode'
// - Renamed export 'cV' to 'useCodeBlockMode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46941.f1be97d5.js
         * chunkId: 46941
         * moduleId: 861944
         */
module.exports = function (module, exports, require) {
  var codeBlockThemeStore = require("code-block-theme-store") /*id: 807141*/;
  let i = () => codeBlockThemeStore.codeBlockThemeStoreHook.getState().codeBlockMode;
  let r = () => codeBlockThemeStore.codeBlockThemeStoreHook(e => e.codeBlockMode);
  let l = () => {
    codeBlockThemeStore.codeBlockThemeStoreHook.setState({
      codeBlockMode: i() === codeBlockThemeStore.codeBlockThemeModes.LIGHT ? codeBlockThemeStore.codeBlockThemeModes.DARK : codeBlockThemeStore.codeBlockThemeModes.LIGHT
    });
  };
  require.d(exports, {
    toggleCodeBlockMode: function () {
      return l;
    },
    useCodeBlockMode: function () {
      return r;
    }
  });
}