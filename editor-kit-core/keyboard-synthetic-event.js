// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'D' to 'KeyboardInputEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 794654
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var keyboardInputUtils = require("keyboard-input-utils") /*id: 633011*/;
  var i = function (t) {
    function e(e, r) {
      var n = t.call(this, e, r) || this;
      n.stopEvent = function () {};
      n.preventEvent = function () {};
      keyboardInputUtils.mapProperties(n, {}, e, r);
      return n;
    }
    typescriptRuntimeHelpers_1.extends(e, t);
    return e;
  }(require("keyboard-synthetic-event-wrapper") /*id: 514743*/.KeyboardSyntheticEvent);
  require.d(exports, {
    KeyboardInputEvent: function () {
      return i;
    }
  });
}