// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isPrototypeOfBind'
// - Resolved require(629230) to 'is-prototype-of-bind'
// - Renamed variable 'a' to 'arrayFilterPolyfill_1'
// - Resolved require(620795) to 'array-filter-polyfill_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 229707
         */
module.exports = function (module, exports, require) {
  var isPrototypeOfBind = require("is-prototype-of-bind") /*id: 629230*/;
  var arrayFilterPolyfill_1 = require("array-filter-polyfill_1") /*id: 620795*/;
  var c = Array.prototype;
  module.exports = function (e) {
    var t = e.filter;
    if (e === c || isPrototypeOfBind(c, e) && t === c.filter) {
      return arrayFilterPolyfill_1;
    } else {
      return t;
    }
  };
}