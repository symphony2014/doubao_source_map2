// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'filterCollection'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 78628
         */
module.exports = function (module, exports, require) {
  var arrayEachUtil = require("array-each-util") /*id: 42571*/;
  var objectCreateUtil = require("object-create-util") /*id: 352344*/;
  var objectForeachHelper = require("object-foreach-helper") /*id: 629345*/;
  var objectMatcherFactory = require("object-matcher-factory") /*id: 452100*/;
  var prototypeCompositionUtil = require("prototype-composition-util") /*id: 507931*/;
  var arrayIsArrayUtil = require("array-is-array-util") /*id: 447761*/;
  var bufferIsBufferUtil = require("buffer-is-buffer-util") /*id: 375215*/;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var isTypedArrayUtil = require("is-typed-array-util") /*id: 557455*/;
  exports.filterCollection = function (e, t, n) {
    var d = arrayIsArrayUtil.isArray(e);
    var p = d || bufferIsBufferUtil.isBufferCheck(e) || isTypedArrayUtil.isTypedArray(e);
    t = objectMatcherFactory.createMatcher(t, 4);
    if (n == null) {
      var g = e && e.constructor;
      n = p ? d ? new g() : [] : isObjectOrFunction_1_1.isObjectOrFunction(e) && isFunctionUtil_1.isFunction(g) ? objectCreateUtil.createObject(prototypeCompositionUtil.getPrototype(e)) : {};
    }
    (p ? arrayEachUtil.arrayEach : objectForeachHelper.createObjectForEach)(e, function (e, r, i) {
      return t(n, e, r, i);
    });
    return n;
  };
}