// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'u' to 'safeFunctionExecutor'
// - Resolved require(4842) to 'safe-function-executor'
// - Renamed variable 'c' to 'isFunctionCheck'
// - Resolved require(705647) to 'is-function-check'
// - Renamed variable 's' to 'isObjectOrFunction_1'
// - Resolved require(446549) to 'is-object-or-function_1'
// - Renamed variable 'f' to 'objectCreatePolyfill'
// - Resolved require(934258) to 'object-create-polyfill'
// - Renamed variable 'a' to 'getPrototypeOfUtil_1'
// - Resolved require(391711) to 'get-prototype-of-util_1'
// - Renamed variable 'p' to 'definePropertyUtil'
// - Resolved require(469792) to 'define-property-util'
// - Renamed variable 'l' to 'symbolWellKnownRegistry'
// - Resolved require(21227) to 'symbol-well-known-registry'
// - Renamed variable 'v' to 'constantTrueValue'
// - Resolved require(659937) to 'constant-true-value'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 336147
         */
module.exports = function (module, exports, require) {
  var e;
  var o;
  var i;
  var safeFunctionExecutor = require("safe-function-executor") /*id: 4842*/;
  var isFunctionCheck = require("is-function-check") /*id: 705647*/;
  var isObjectOrFunction_1 = require("is-object-or-function_1") /*id: 446549*/;
  var objectCreatePolyfill = require("object-create-polyfill") /*id: 934258*/;
  var getPrototypeOfUtil_1 = require("get-prototype-of-util_1") /*id: 391711*/;
  var definePropertyUtil = require("define-property-util") /*id: 469792*/;
  var symbolWellKnownRegistry = require("symbol-well-known-registry") /*id: 21227*/;
  var constantTrueValue = require("constant-true-value") /*id: 659937*/;
  var y = symbolWellKnownRegistry("iterator");
  var h = false;
  if ([].keys) {
    if ("next" in (i = [].keys())) {
      if ((o = getPrototypeOfUtil_1(getPrototypeOfUtil_1(i))) !== Object.prototype) {
        e = o;
      }
    } else {
      h = true;
    }
  }
  if (!isObjectOrFunction_1(e) || safeFunctionExecutor(function () {
    var t = {};
    return e[y].call(t) !== t;
  })) {
    e = {};
  } else if (constantTrueValue) {
    e = objectCreatePolyfill(e);
  }
  if (!isFunctionCheck(e[y])) {
    definePropertyUtil(e, y, function () {
      return this;
    });
  }
  module.exports = {
    IteratorPrototype: e,
    BUGGY_SAFARI_ITERATORS: h
  };
}