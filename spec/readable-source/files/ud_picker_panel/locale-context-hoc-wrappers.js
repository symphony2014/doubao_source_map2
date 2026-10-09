// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Rh' to 'withLocaleConfig'
// - Renamed export 'sy' to 'withLocaleConfigRef'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 945449
         */
module.exports = function (module, exports, require) {
  require("react-core-library-reexport") /*id: 634663*/;
  var reactLocaleContextHocs = require("react-locale-context-hocs") /*id: 442681*/;
  function o(e) {
    return reactLocaleContextHocs.withLocaleConfig(e);
  }
  function i(e) {
    return reactLocaleContextHocs.withLocaleConfigRef(e);
  }
  reactLocaleContextHocs.localeContextConsumer();
  require.d(exports, {
    withLocaleConfig: function () {
      return o;
    },
    withLocaleConfigRef: function () {
      return i;
    }
  });
}