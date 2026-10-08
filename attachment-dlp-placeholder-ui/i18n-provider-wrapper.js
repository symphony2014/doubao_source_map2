// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ec' to 'createI18nWrapper'
// - Renamed export 'ZP' to 'I18nContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 46126.e68e9438.js
         * chunkId: 46126
         * moduleId: 277347
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let o = reactCoreLibraryReexport.createContext({});
  function i(e, n, t) {
    let i = reactCoreLibraryReexport.forwardRef((i, a) => {
      let c = Object.assign(t ?? {}, i);
      return reactCoreLibraryReexport.createElement(o.Provider, {
        value: Object.assign({}, n)
      }, reactCoreLibraryReexport.createElement(e, Object.assign({
        ref: a
      }, c)));
    });
    i.displayName = `compProviderI18nWrapper(${e.displayName || e.name})`;
    return i;
  }
  exports.I18nContext = o;
  require.d(exports, {
    createI18nWrapper: function () {
      return i;
    }
  });
}