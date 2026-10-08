// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ec' to 'createI18nProvider'
// - Renamed export 'qZ' to 'createLangProvider'
// - Renamed export 'ZP' to 'i18nContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24087.f79c4f85.js
         * chunkId: 24087
         * moduleId: 894325
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let f = reactCoreLibraryReexport.createContext({});
  function s(e, i, n) {
    let s = reactCoreLibraryReexport.forwardRef((s, o) => {
      let t = Object.assign(n ?? {}, s);
      return reactCoreLibraryReexport.createElement(f.Provider, {
        value: Object.assign({}, i)
      }, reactCoreLibraryReexport.createElement(e, Object.assign({
        ref: o
      }, t)));
    });
    s.displayName = `compProviderI18nWrapper(${e.displayName || e.name})`;
    return s;
  }
  function o(e, i) {
    let n = reactCoreLibraryReexport.forwardRef((n, s) => {
      let t = n.langMap ?? window.TTI18N;
      let r = Object.assign(i ?? {}, n);
      return reactCoreLibraryReexport.createElement(f.Provider, {
        value: {
          langMap: t
        }
      }, reactCoreLibraryReexport.createElement(e, Object.assign({
        ref: s
      }, r)));
    });
    n.displayName = `compProviderWrapper(${e.displayName || e.name})`;
    return n;
  }
  exports.i18nContext = f;
  require.d(exports, {
    createI18nProvider: function () {
      return s;
    },
    createLangProvider: function () {
      return o;
    }
  });
}