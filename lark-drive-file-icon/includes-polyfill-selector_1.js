// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'isPrototypeOfBind'
// - Resolved require(629230) to 'is-prototype-of-bind'
// - Renamed variable 'a' to 'arrayIncludesPolyfill'
// - Resolved require(50789) to 'array-includes-polyfill'
// - Renamed variable 'c' to 'stringIncludesPolyfill'
// - Resolved require(991657) to 'string-includes-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lark-drive-file-circle-icon.402dd018.js
         * chunkId: 15335
         * moduleId: 419704
         */
module.exports = function (module, exports, require) {
  var isPrototypeOfBind = require("is-prototype-of-bind") /*id: 629230*/;
  var arrayIncludesPolyfill = require("array-includes-polyfill") /*id: 50789*/;
  var stringIncludesPolyfill = require("string-includes-polyfill") /*id: 991657*/;
  var i = Array.prototype;
  var o = String.prototype;
  module.exports = function (e) {
    var t = e.includes;
    if (e === i || isPrototypeOfBind(i, e) && t === i.includes) {
      return arrayIncludesPolyfill;
    } else if (typeof e == "string" || e === o || isPrototypeOfBind(o, e) && t === o.includes) {
      return stringIncludesPolyfill;
    } else {
      return t;
    }
  };
}