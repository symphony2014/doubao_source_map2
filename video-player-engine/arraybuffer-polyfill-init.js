// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'i' to 'arraybufferDataviewPolyfill'
// - Resolved require(622500) to 'arraybuffer-dataview-polyfill'
// - Renamed variable 'a' to 'speciesAccessorPolyfill'
// - Resolved require(56192) to 'species-accessor-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 20654
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var arraybufferDataviewPolyfill = require("arraybuffer-dataview-polyfill") /*id: 622500*/;
  var speciesAccessorPolyfill = require("species-accessor-polyfill") /*id: 56192*/;
  var d = "ArrayBuffer";
  var r = arraybufferDataviewPolyfill[d];
  polyfillPropertyDefiner({
    global: true,
    constructor: true,
    forced: globalObjectPolyfill[d] !== r
  }, {
    ArrayBuffer: r
  });
  speciesAccessorPolyfill(d);
}