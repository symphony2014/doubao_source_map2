// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Rh' to 'withLocaleConfig'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: docx_ud_url_preview_open.ff701428.js
         * chunkId: 31314
         * moduleId: 466930
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var reactLocaleContextHocs = require("react-locale-context-hocs") /*id: 442681*/;
  function r(e) {
    return reactLocaleContextHocs.withLocaleConfig(e);
  }
  reactLocaleContextHocs.localeContextConsumer();
  require.d(exports, {
    withLocaleConfig: function () {
      return r;
    }
  });
}