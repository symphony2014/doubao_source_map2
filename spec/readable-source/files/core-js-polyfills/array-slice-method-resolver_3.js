// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'isPrototypeOfBind'
// - Resolved require(629230) to 'is-prototype-of-bind'
// - Renamed variable 'o' to 'arraySlicePolyfillExport'
// - Resolved require(14933) to 'array-slice-polyfill-export'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 428312
         */
module.exports = function (module, exports, require) {
  var isPrototypeOfBind = require("is-prototype-of-bind") /*id: 629230*/;
  var arraySlicePolyfillExport = require("array-slice-polyfill-export") /*id: 14933*/;
  var i = Array.prototype;
  module.exports = function (t) {
    var r = t.slice;
    if (t === i || isPrototypeOfBind(i, t) && r === i.slice) {
      return arraySlicePolyfillExport;
    } else {
      return r;
    }
  };
}