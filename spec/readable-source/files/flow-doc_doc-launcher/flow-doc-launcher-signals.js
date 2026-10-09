// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MY' to 'textToolbarSignal'
// - Renamed export 'tm' to 'childDocSignal'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 777849
         */
module.exports = function (module, exports, require) {
  var childDocTitlePopoverSignalModule = require("child-doc-title-popover-signal-module") /*id: 882121*/;
  var textToolbarPluginSignalModule = require("text-toolbar-plugin-signal-module") /*id: 89483*/;
  require("hide-toolbar-signal-module") /*id: 404524*/;
  require("toolbar-signal-state") /*id: 539453*/;
  require("menu-position-signal") /*id: 337387*/;
  require.d(exports, {
    textToolbarSignal: function () {
      return textToolbarPluginSignalModule.textSignal;
    },
    childDocSignal: function () {
      return childDocTitlePopoverSignalModule.childDocSignal;
    }
  });
}