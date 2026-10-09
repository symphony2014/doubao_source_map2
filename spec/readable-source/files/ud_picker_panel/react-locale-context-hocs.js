// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Rh' to 'withLocaleConfig'
// - Renamed export 'sy' to 'withLocaleConfigRef'
// - Renamed export 'tA' to 'localeContextConsumer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 442681
         */
module.exports = function (module, exports, require) {
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var i18nLocaleContextProvider = require("i18n-locale-context-provider") /*id: 194449*/;
  function a() {
    return function (e) {
      return reactCoreLibraryReexport.createElement(i18nLocaleContextProvider.localeContext.Consumer, null, t => e.children(t));
    };
  }
  function c(e) {
    return function (t) {
      return reactCoreLibraryReexport.createElement(i18nLocaleContextProvider.localeContext.Consumer, null, n => reactCoreLibraryReexport.createElement(e, objectAssignUtil.objectAssign({
        config: n
      }, t)));
    };
  }
  function u(e) {
    var t = reactCoreLibraryReexport.forwardRef((t, n) => reactCoreLibraryReexport.createElement(i18nLocaleContextProvider.localeContext.Consumer, null, i => reactCoreLibraryReexport.createElement(e, objectAssignUtil.objectAssign({
      ref: n,
      config: i
    }, t))));
    t.displayName = e.displayName || e.name;
    return t;
  }
  a();
  require.d(exports, {
    withLocaleConfig: function () {
      return c;
    },
    withLocaleConfigRef: function () {
      return u;
    },
    localeContextConsumer: function () {
      return a;
    }
  });
}