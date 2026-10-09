// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'EH' to 'PanelPosition'
// - Renamed export 'G3' to 'panelDialogClass'
// - Renamed export 'Ge' to 'PickerContext'
// - Renamed export 'hj' to 'pickerPanelClass'
// - Renamed export 'xE' to 'basicPanelClass'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 887471
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var eventEmitterWrapper_1 = require("event-emitter-wrapper_1") /*id: 740547*/;
  var udPickerConfig = require("ud-picker-config") /*id: 177642*/;
  let u = `${udPickerConfig.appPlatform}-basic-panel`;
  let s = `${udPickerConfig.appPlatform}-picker-panel`;
  let l = `${udPickerConfig.appPlatform}-panel-dialog`;
  (r = o ||= {})[r.None = 0] = "None";
  r[r.Top = 1] = "Top";
  r[r.Bottom = 2] = "Bottom";
  r[r.Midlle = 3] = "Midlle";
  let f = reactCoreLibraryReexport.createContext({
    eventBus: new eventEmitterWrapper_1.eventEmitter()
  });
  require.d(exports, {
    PanelPosition: function () {
      return o;
    },
    panelDialogClass: function () {
      return l;
    },
    PickerContext: function () {
      return f;
    },
    pickerPanelClass: function () {
      return s;
    },
    basicPanelClass: function () {
      return u;
    }
  });
}