// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useHoverState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-ai-creation-guidance.67ffc317.js
         * chunkId: 15933
         * moduleId: 105691
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var useBooleanHook = require("use-boolean-hook") /*id: 240989*/;
  var useEventListenerHook = require("use-event-listener-hook") /*id: 629504*/;
  exports.useHoverState = function (e, t) {
    var n = t || {};
    var a = n.onEnter;
    var s = n.onLeave;
    var l = n.onChange;
    var c = typescriptRuntimeHelpers.spreadArray(useBooleanHook.useBoolean(false), 2);
    var d = c[0];
    var u = c[1];
    var p = u.setTrue;
    var h = u.setFalse;
    useEventListenerHook.useEventListener("mouseenter", function () {
      if (a != null) {
        a();
      }
      p();
      if (l != null) {
        l(true);
      }
    }, {
      target: e
    });
    useEventListenerHook.useEventListener("mouseleave", function () {
      if (s != null) {
        s();
      }
      h();
      if (l != null) {
        l(false);
      }
    }, {
      target: e
    });
    return d;
  };
}