// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'iV' to 'ThemeProvider'
// - Renamed export 'ZP' to 'ThemeContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: cac-placeholder.51604e75.js
         * chunkId: 10423
         * moduleId: 174017
         */
module.exports = function (module, exports, require) {
  var r;
  var l;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  (r = l ||= {}).DARK = "dark";
  r.LIGHT = "light";
  let d = {
    locale: "zh-CN",
    theme: l.LIGHT
  };
  let a = reactCoreLibraryReexport.createContext(d);
  let c = e => {
    let {
      locale: n,
      children: t,
      theme: r = l.LIGHT
    } = e;
    return reactCoreLibraryReexport.createElement(a.Provider, {
      value: {
        locale: n,
        theme: r
      }
    }, t);
  };
  exports.ThemeContext = a;
  require.d(exports, {
    ThemeProvider: function () {
      return c;
    }
  });
}