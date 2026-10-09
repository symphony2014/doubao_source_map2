// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'reflectGetPrototypeUtil'
// - Resolved require(375043) to 'reflect-get-prototype-util'
// - Renamed variable 'o' to 'objectGetPrototypeOf'
// - Resolved require(755536) to 'object-get-prototype-of'
// - Renamed variable 'i' to 'getPrototypeOfPolyfill'
// - Resolved require(367862) to 'get-prototype-of-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 112917
         */
module.exports = function (module, exports, require) {
  var reflectGetPrototypeUtil = require("reflect-get-prototype-util") /*id: 375043*/;
  var objectGetPrototypeOf = require("object-get-prototype-of") /*id: 755536*/;
  var getPrototypeOfPolyfill = require("get-prototype-of-polyfill") /*id: 367862*/;
  module.exports = reflectGetPrototypeUtil ? function (t) {
    return reflectGetPrototypeUtil(t);
  } : objectGetPrototypeOf ? function (t) {
    if (!t || typeof t != "object" && typeof t != "function") {
      throw TypeError("getProto: not an object");
    }
    return objectGetPrototypeOf(t);
  } : getPrototypeOfPolyfill ? function (t) {
    return getPrototypeOfPolyfill(t);
  } : null;
}