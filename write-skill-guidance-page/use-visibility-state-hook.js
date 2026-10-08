// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'useVisibilityState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-after-interactive-docx-guidance.7d88153e.js
         * chunkId: 48718
         * moduleId: 386195
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var useEventListenerHook = require("use-event-listener-hook") /*id: 629504*/;
  var browserDomCheck = require("browser-dom-check") /*id: 38090*/;
  function l() {
    if (browserDomCheck.isBrowserDom) {
      return document.visibilityState;
    } else {
      return "visible";
    }
  }
  exports.useVisibilityState = function () {
    var e = typescriptRuntimeHelpers.spreadArray(reactCoreLibraryReexport.useState(function () {
      return l();
    }), 2);
    var t = e[0];
    var n = e[1];
    useEventListenerHook.useEventListener("visibilitychange", function () {
      n(l());
    }, {
      target: function () {
        return document;
      }
    });
    return t;
  };
}