// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'getObjectType'
// - Resolved require(786910) to 'get-object-type'
// - Renamed variable 'o' to 'objectHasOwnPolyfill'
// - Resolved require(156732) to 'object-has-own-polyfill'
// - Renamed variable 'i' to 'isPrototypeOfBind'
// - Resolved require(629230) to 'is-prototype-of-bind'
// - Renamed variable 'u' to 'arrayForeachMethodWrapper'
// - Resolved require(417302) to 'array-foreach-method-wrapper'
// - Resolved require(280130) to 'es-module-interop-helper_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 516894
         */
module.exports = function (module, exports, require) {
  var getObjectType = require("get-object-type") /*id: 786910*/;
  var objectHasOwnPolyfill = require("object-has-own-polyfill") /*id: 156732*/;
  var isPrototypeOfBind = require("is-prototype-of-bind") /*id: 629230*/;
  var arrayForeachMethodWrapper = require("array-foreach-method-wrapper") /*id: 417302*/;
  require("es-module-interop-helper_1") /*id: 280130*/;
  var c = Array.prototype;
  var s = {
    DOMTokenList: true,
    NodeList: true
  };
  module.exports = function (t) {
    var r = t.forEach;
    if (t === c || isPrototypeOfBind(c, t) && r === c.forEach || objectHasOwnPolyfill(s, getObjectType(t))) {
      return arrayForeachMethodWrapper;
    } else {
      return r;
    }
  };
}