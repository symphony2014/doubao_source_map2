// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'l' to 'domInterfaceSupport'
// - Resolved require(404940) to 'dom-interface-support'
// - Renamed variable 'i' to 'domClassListPrototype'
// - Resolved require(543231) to 'dom-class-list-prototype'
// - Renamed variable 'a' to 'arrayForeachPolyfill'
// - Resolved require(933789) to 'array-foreach-polyfill'
// - Renamed variable 'd' to 'definePropertyHelper_1'
// - Resolved require(679912) to 'define-property-helper_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 627316
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var domInterfaceSupport = require("dom-interface-support") /*id: 404940*/;
  var domClassListPrototype = require("dom-class-list-prototype") /*id: 543231*/;
  var arrayForeachPolyfill = require("array-foreach-polyfill") /*id: 933789*/;
  var definePropertyHelper_1 = require("define-property-helper_1") /*id: 679912*/;
  function r(U) {
    if (U && U.forEach !== arrayForeachPolyfill) {
      try {
        definePropertyHelper_1(U, "forEach", arrayForeachPolyfill);
      } catch (n) {
        U.forEach = arrayForeachPolyfill;
      }
    }
  }
  for (var o in domInterfaceSupport) {
    if (domInterfaceSupport[o]) {
      r(globalObjectPolyfill[o] && globalObjectPolyfill[o].prototype);
    }
  }
  r(domClassListPrototype);
}