// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'arraybufferClonePolyfill'
// - Resolved require(999464) to 'arraybuffer-clone-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 307093
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var arraybufferClonePolyfill = require("arraybuffer-clone-polyfill") /*id: 999464*/;
  if (arraybufferClonePolyfill) {
    polyfillPropertyDefiner({
      target: "ArrayBuffer",
      proto: true
    }, {
      transferToFixedLength: function () {
        return arraybufferClonePolyfill(this, arguments.length ? arguments[0] : undefined, false);
      }
    });
  }
}