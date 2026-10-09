// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'iV' to 'LocaleThemeProvider'
// - Renamed export 'ZP' to 'localeThemeContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24087.f79c4f85.js
         * chunkId: 24087
         * moduleId: 292816
         */
module.exports = function (module, exports, require) {
  var a;
  var f;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  (a = f ||= {}).DARK = "dark";
  a.LIGHT = "light";
  let o = {
    locale: "zh-CN",
    theme: f.LIGHT
  };
  let t = reactCoreLibraryReexport.createContext(o);
  let r = e => {
    let {
      locale: i,
      children: n,
      theme: a = f.LIGHT
    } = e;
    return reactCoreLibraryReexport.createElement(t.Provider, {
      value: {
        locale: i,
        theme: a
      }
    }, n);
  };
  exports.localeThemeContext = t;
  require.d(exports, {
    LocaleThemeProvider: function () {
      return r;
    }
  });
}