// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'O' to 'KeyboardSyntheticEvent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 514743
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var keyboardInputUtils = require("keyboard-input-utils") /*id: 633011*/;
  var booleanTypeUtils = require("boolean-type-utils") /*id: 488634*/;
  var reactSyntheticEventProps = require("react-synthetic-event-props") /*id: 191267*/;
  var a = function (t) {
    function e(e, r) {
      var n = t.call(this, e, r) || this;
      keyboardInputUtils.mapProperties(n, {}, e, r);
      return n;
    }
    typescriptRuntimeHelpers_1.extends(e, t);
    return e;
  }(function () {
    function t(t, e) {
      this.nativeEvent = t;
      this.type = "";
      keyboardInputUtils.mapProperties(this, reactSyntheticEventProps.baseEventProps, t, e);
      t = t.defaultPrevented ?? t.returnValue === false;
      this.isDefaultPrevented = t ? booleanTypeUtils.getTrueFn : booleanTypeUtils.getFalseFn;
      this.isPropagationStopped = booleanTypeUtils.getFalseFn;
    }
    var e = t.prototype;
    e.preventDefault = function () {
      this.defaultPrevented = true;
      this.nativeEvent.preventDefault();
      this.isDefaultPrevented = booleanTypeUtils.getTrueFn;
    };
    e.stopPropagation = function () {
      this.nativeEvent.stopPropagation();
      this.isPropagationStopped = booleanTypeUtils.getTrueFn;
    };
    return t;
  }());
  require.d(exports, {
    KeyboardSyntheticEvent: function () {
      return a;
    }
  });
}