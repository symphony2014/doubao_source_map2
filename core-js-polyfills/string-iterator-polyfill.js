// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(160983) to 'string-code-point-at'
// - Renamed variable 'o' to 'symbolSafeStringConverter'
// - Resolved require(227969) to 'symbol-safe-string-converter'
// - Renamed variable 'i' to 'internalStateUtil'
// - Resolved require(653534) to 'internal-state-util'
// - Renamed variable 'u' to 'iteratorPrototypeDefineHelper'
// - Resolved require(903338) to 'iterator-prototype-define-helper'
// - Renamed variable 'c' to 'iteratorResultFactory'
// - Resolved require(627666) to 'iterator-result-factory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 537990
         */
module.exports = function (module, exports, require) {
  var e = require("string-code-point-at") /*id: 160983*/.charAt;
  var symbolSafeStringConverter = require("symbol-safe-string-converter") /*id: 227969*/;
  var internalStateUtil = require("internal-state-util") /*id: 653534*/;
  var iteratorPrototypeDefineHelper = require("iterator-prototype-define-helper") /*id: 903338*/;
  var iteratorResultFactory = require("iterator-result-factory") /*id: 627666*/;
  var s = "String Iterator";
  var f = internalStateUtil.set;
  var a = internalStateUtil.getterFor(s);
  iteratorPrototypeDefineHelper(String, "String", function (t) {
    f(this, {
      type: s,
      string: symbolSafeStringConverter(t),
      index: 0
    });
  }, function () {
    var t;
    var r = a(this);
    var n = r.string;
    var o = r.index;
    if (o >= n.length) {
      return iteratorResultFactory(undefined, true);
    } else {
      t = e(n, o);
      r.index += t.length;
      return iteratorResultFactory(t, false);
    }
  });
}