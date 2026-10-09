// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'U' to 'KeyboardMouseEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 619284
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var keyboardInputUtils = require("keyboard-input-utils") /*id: 633011*/;
  var reactSyntheticEventProps = require("react-synthetic-event-props") /*id: 191267*/;
  var u = function (t) {
    function e(e, r) {
      var n = t.call(this, e, r) || this;
      n.screenX = 0;
      n.screenY = 0;
      n.clientX = 0;
      n.clientY = 0;
      n.pageX = 0;
      n.pageY = 0;
      n.ctrlKey = false;
      n.shiftKey = false;
      n.altKey = false;
      n.metaKey = false;
      n.getModifierState = function () {
        return false;
      };
      n.button = 0;
      n.buttons = 0;
      n.relatedTarget = null;
      n.movementX = 0;
      n.movementY = 0;
      keyboardInputUtils.mapProperties(n, reactSyntheticEventProps.mouseEventProps, e, r);
      return n;
    }
    typescriptRuntimeHelpers_1.extends(e, t);
    return e;
  }(require("keyboard-synthetic-event-class") /*id: 749394*/.KeyboardSyntheticEvent);
  require.d(exports, {
    KeyboardMouseEvent: function () {
      return u;
    }
  });
}