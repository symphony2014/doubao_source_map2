// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'checkPropertyDescriptorSupport'
// - Resolved require(618813) to 'check-property-descriptor-support'
// - Renamed variable 'o' to 'objectHasOwnPolyfill'
// - Resolved require(156732) to 'object-has-own-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 804618
         */
module.exports = function (module, exports, require) {
  var checkPropertyDescriptorSupport = require("check-property-descriptor-support") /*id: 618813*/;
  var objectHasOwnPolyfill = require("object-has-own-polyfill") /*id: 156732*/;
  var i = Function.prototype;
  var u = checkPropertyDescriptorSupport && Object.getOwnPropertyDescriptor;
  var c = objectHasOwnPolyfill(i, "name");
  var s = c && (!checkPropertyDescriptorSupport || checkPropertyDescriptorSupport && u(i, "name").configurable);
  module.exports = {
    EXISTS: c,
    PROPER: c && function () {}.name === "something",
    CONFIGURABLE: s
  };
}