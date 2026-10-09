// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isFunctionPolyfill'
// - Resolved require(142982) to 'is-function-polyfill'
// - Renamed variable 'o' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// - Renamed variable 'i' to 'setPrototypeOfPolyfill'
// - Resolved require(411942) to 'set-prototype-of-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 579783
         */
module.exports = function (module, exports, require) {
  var isFunctionPolyfill = require("is-function-polyfill") /*id: 142982*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var setPrototypeOfPolyfill = require("set-prototype-of-polyfill") /*id: 411942*/;
  module.exports = function (t, r, e) {
    var a;
    var u;
    if (setPrototypeOfPolyfill && isFunctionPolyfill(a = r.constructor) && a !== e && isObjectOrFunctionCheck(u = a.prototype) && u !== e.prototype) {
      setPrototypeOfPolyfill(t, u);
    }
    return t;
  };
}