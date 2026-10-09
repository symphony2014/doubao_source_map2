// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export '$' to 'KeyboardSyntheticEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 886246
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var keyboardInputUtils = require("keyboard-input-utils") /*id: 633011*/;
  var reactSyntheticEventProps = require("react-synthetic-event-props") /*id: 191267*/;
  var u = function (t) {
    function e(e, r) {
      var n = t.call(this, e, r) || this;
      n.key = "";
      n.location = 0;
      n.ctrlKey = false;
      n.shiftKey = false;
      n.altKey = false;
      n.metaKey = false;
      n.repeat = false;
      n.locale = "";
      n.charCode = 0;
      n.keyCode = 0;
      n.which = function () {
        return 0;
      };
      keyboardInputUtils.mapProperties(n, reactSyntheticEventProps.keyboardEventProps, e, r);
      return n;
    }
    typescriptRuntimeHelpers_1.extends(e, t);
    return e;
  }(require("keyboard-synthetic-event") /*id: 794654*/.KeyboardInputEvent);
  require.d(exports, {
    KeyboardSyntheticEvent: function () {
      return u;
    }
  });
}