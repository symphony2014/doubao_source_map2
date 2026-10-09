// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'skillMessageProcessor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 97107
         */
module.exports = function (module, exports, require) {
  var arrayFlattenUtil_2 = require("array-flatten-util_2") /*id: 547804*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var throttledArgStringUtil = require("throttled-arg-string-util") /*id: 293873*/;
  var arrayUniqByUtil = require("array-uniq-by-util") /*id: 235198*/;
  var arrayLikeObjectCheck = require("array-like-object-check") /*id: 443422*/;
  var lastElementHelper = require("last-element-helper") /*id: 715951*/;
  var c = throttledArgStringUtil.throttledStringify(function (e) {
    var t = lastElementHelper.getLastElement(e);
    if (arrayLikeObjectCheck.isArrayLikeObject(t)) {
      t = undefined;
    }
    return arrayUniqByUtil.uniqBy(arrayFlattenUtil_2.flattenArray(e, 1, arrayLikeObjectCheck.isArrayLikeObject, true), objectMatcherFactory.createMatcher(t, 2));
  });
  exports.skillMessageProcessor = c;
}