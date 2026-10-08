// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'o' to 'objectDefinePropertyPolyfill'
// - Resolved require(221009) to 'object-define-property-polyfill'
// - Renamed variable 'i' to 'arraybufferDataviewPolyfill_1'
// - Resolved require(270008) to 'arraybuffer-dataview-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 997889
         */
module.exports = function (module, exports, require) {
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var objectDefinePropertyPolyfill = require("object-define-property-polyfill") /*id: 221009*/;
  var arraybufferDataviewPolyfill_1 = require("arraybuffer-dataview-polyfill_1") /*id: 270008*/;
  var a = ArrayBuffer.prototype;
  if (!!es5PropertyDescriptorCheck && !("detached" in a)) {
    objectDefinePropertyPolyfill(a, "detached", {
      configurable: true,
      get: function () {
        return arraybufferDataviewPolyfill_1(this);
      }
    });
  }
}