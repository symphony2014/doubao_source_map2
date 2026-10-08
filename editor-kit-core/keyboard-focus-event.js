// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Y' to 'KeyboardFocusEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 151463
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var keyboardInputUtils = require("keyboard-input-utils") /*id: 633011*/;
  var reactSyntheticEventProps = require("react-synthetic-event-props") /*id: 191267*/;
  var u = function (t) {
    function e(e, r) {
      var n = t.call(this, e, r) || this;
      keyboardInputUtils.mapProperties(n, reactSyntheticEventProps.focusEventProps, e, r);
      return n;
    }
    typescriptRuntimeHelpers_1.extends(e, t);
    return e;
  }(require("keyboard-synthetic-event-class") /*id: 749394*/.KeyboardSyntheticEvent);
  require.d(exports, {
    KeyboardFocusEvent: function () {
      return u;
    }
  });
}