// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'setPrototypeCheck'
// - Resolved require(754725) to 'set-prototype-check'
// - Renamed variable 'o' to 'sizeGetterPolyfill'
// - Resolved require(564074) to 'size-getter-polyfill'
// - Renamed variable 'i' to 'setFindPolyfillUtil'
// - Resolved require(581853) to 'set-find-polyfill-util'
// - Renamed variable 'a' to 'validatedSetWrapper'
// - Resolved require(768847) to 'validated-set-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 582315
         */
module.exports = function (module, exports, require) {
  var setPrototypeCheck = require("set-prototype-check") /*id: 754725*/;
  var sizeGetterPolyfill = require("size-getter-polyfill") /*id: 564074*/;
  var setFindPolyfillUtil = require("set-find-polyfill-util") /*id: 581853*/;
  var validatedSetWrapper = require("validated-set-wrapper") /*id: 768847*/;
  module.exports = function (t) {
    var r = setPrototypeCheck(this);
    var e = validatedSetWrapper(t);
    return !(sizeGetterPolyfill(r) > e.size) && setFindPolyfillUtil(r, function (t) {
      if (!e.includes(t)) {
        return false;
      }
    }, true) !== false;
  };
}