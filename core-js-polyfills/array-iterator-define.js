// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'e' to 'stringToArrayFallback'
// - Resolved require(476143) to 'string-to-array-fallback'
// - Renamed variable 'o' to 'emptyModuleExport_5'
// - Resolved require(891799) to 'empty-module-export_5'
// - Renamed variable 'i' to 'emptyModuleExport'
// - Resolved require(159645) to 'empty-module-export'
// - Renamed variable 'u' to 'internalStateUtil'
// - Resolved require(653534) to 'internal-state-util'
// - Resolved require(976843) to 'object-define-property-safe'
// - Renamed variable 's' to 'iteratorPrototypeDefineHelper'
// - Resolved require(903338) to 'iterator-prototype-define-helper'
// - Renamed variable 'f' to 'iteratorResultFactory'
// - Resolved require(627666) to 'iterator-result-factory'
// - Renamed variable 'a' to 'constantTrueValue'
// - Resolved require(659937) to 'constant-true-value'
// - Renamed variable 'p' to 'checkPropertyDescriptorSupport'
// - Resolved require(618813) to 'check-property-descriptor-support'
// - Updated imported property 'f' to 'safeDefineProperty' (module 976843)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 29050
         */
module.exports = function (module, exports, require) {
  var stringToArrayFallback = require("string-to-array-fallback") /*id: 476143*/;
  var emptyModuleExport_5 = require("empty-module-export_5") /*id: 891799*/;
  var emptyModuleExport = require("empty-module-export") /*id: 159645*/;
  var internalStateUtil = require("internal-state-util") /*id: 653534*/;
  var c = require("object-define-property-safe") /*id: 976843*/.safeDefineProperty;
  var iteratorPrototypeDefineHelper = require("iterator-prototype-define-helper") /*id: 903338*/;
  var iteratorResultFactory = require("iterator-result-factory") /*id: 627666*/;
  var constantTrueValue = require("constant-true-value") /*id: 659937*/;
  var checkPropertyDescriptorSupport = require("check-property-descriptor-support") /*id: 618813*/;
  var l = "Array Iterator";
  var v = internalStateUtil.set;
  var y = internalStateUtil.getterFor(l);
  module.exports = iteratorPrototypeDefineHelper(Array, "Array", function (t, r) {
    v(this, {
      type: l,
      target: stringToArrayFallback(t),
      index: 0,
      kind: r
    });
  }, function () {
    var t = y(this);
    var r = t.target;
    var n = t.index++;
    if (!r || n >= r.length) {
      t.target = null;
      return iteratorResultFactory(undefined, true);
    }
    switch (t.kind) {
      case "keys":
        return iteratorResultFactory(n, false);
      case "values":
        return iteratorResultFactory(r[n], false);
    }
    return iteratorResultFactory([n, r[n]], false);
  }, "values");
  var h = emptyModuleExport.Arguments = emptyModuleExport.Array;
  emptyModuleExport_5("keys");
  emptyModuleExport_5("values");
  emptyModuleExport_5("entries");
  if (!constantTrueValue && checkPropertyDescriptorSupport && h.name !== "values") {
    try {
      c(h, "name", {
        value: "values"
      });
    } catch (t) {}
  }
}