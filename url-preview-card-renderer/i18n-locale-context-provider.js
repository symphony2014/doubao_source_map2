// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'qJ' to 'localeConfig'
// - Renamed export 'ZP' to 'localeContext'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29028.eed859d0.js
         * chunkId: 29028
         * moduleId: 194449
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var n = {
    locale: require("i18n-locale-map") /*id: 598458*/.localeMap.enUS,
    lang: {},
    l2r: true,
    is12Hour: false,
    theme: "",
    timezone: "",
    update: () => Promise.resolve(undefined)
  };
  exports.localeContext = reactCoreLibraryReexport.createContext(n);
  require.d(exports, {
    localeConfig: function () {
      return n;
    }
  });
}