// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Renamed variable 'o' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 968072
         */
module.exports = function (module, exports, require) {
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var i = Function.prototype;
  var a = es5PropertyDescriptorCheck && Object.getOwnPropertyDescriptor;
  var u = objectHasOwnPolyfill_1(i, "name");
  var c = u && (!es5PropertyDescriptorCheck || es5PropertyDescriptorCheck && a(i, "name").configurable);
  module.exports = {
    EXISTS: u,
    PROPER: u && function () {}.name === "something",
    CONFIGURABLE: c
  };
}