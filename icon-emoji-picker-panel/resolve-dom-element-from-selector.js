// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'h' to 'resolveDomElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 331611
         */
module.exports = function (module, exports, require) {
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  function o(e) {
    if (e) {
      if (domTypeUtils_1.isFunction(e)) {
        return e();
      } else if (typeof e == "string") {
        return document.querySelector(e);
      } else if ("current" in e) {
        return e.current;
      } else {
        return e;
      }
    } else {
      return null;
    }
  }
  require.d(exports, {
    resolveDomElement: function () {
      return o;
    }
  });
}