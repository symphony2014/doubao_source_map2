// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'stringToArrayPolyfillWrapper'
// - Resolved require(902400) to 'string-to-array-polyfill-wrapper'
// - Renamed variable 'l' to 'arrayUnscopablesDefine'
// - Resolved require(557126) to 'array-unscopables-define'
// - Renamed variable 'i' to 'libPolyfill'
// - Resolved require(173864) to 'lib-polyfill'
// - Renamed variable 'a' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// - Resolved require(760974) to 'es5-define-property-impl'
// - Renamed variable 'r' to 'defineIteratorPrototype'
// - Resolved require(675930) to 'define-iterator-prototype'
// - Renamed variable 'o' to 'iteratorResultFactory_1'
// - Resolved require(246305) to 'iterator-result-factory_1'
// - Renamed variable 'B' to 'libPolyfillCheck'
// - Resolved require(87987) to 'lib-polyfill-check'
// - Renamed variable 'R' to 'es5PropertyDescriptorCheck'
// - Resolved require(922548) to 'es5-property-descriptor-check'
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 710239
         */
module.exports = function (module, exports, require) {
  var stringToArrayPolyfillWrapper = require("string-to-array-polyfill-wrapper") /*id: 902400*/;
  var arrayUnscopablesDefine = require("array-unscopables-define") /*id: 557126*/;
  var libPolyfill = require("lib-polyfill") /*id: 173864*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var d = require("es5-define-property-impl") /*id: 760974*/.defineProperty;
  var defineIteratorPrototype = require("define-iterator-prototype") /*id: 675930*/;
  var iteratorResultFactory_1 = require("iterator-result-factory_1") /*id: 246305*/;
  var libPolyfillCheck = require("lib-polyfill-check") /*id: 87987*/;
  var es5PropertyDescriptorCheck = require("es5-property-descriptor-check") /*id: 922548*/;
  var c = "Array Iterator";
  var s = objectStateManager.set;
  var V = objectStateManager.getterFor(c);
  module.exports = defineIteratorPrototype(Array, "Array", function (U, n) {
    s(this, {
      type: c,
      target: stringToArrayPolyfillWrapper(U),
      index: 0,
      kind: n
    });
  }, function () {
    var U = V(this);
    var n = U.target;
    var F = U.index++;
    if (!n || F >= n.length) {
      U.target = null;
      return iteratorResultFactory_1(undefined, true);
    }
    switch (U.kind) {
      case "keys":
        return iteratorResultFactory_1(F, false);
      case "values":
        return iteratorResultFactory_1(n[F], false);
    }
    return iteratorResultFactory_1([F, n[F]], false);
  }, "values");
  var Z = libPolyfill.Arguments = libPolyfill.Array;
  arrayUnscopablesDefine("keys");
  arrayUnscopablesDefine("values");
  arrayUnscopablesDefine("entries");
  if (!libPolyfillCheck && es5PropertyDescriptorCheck && Z.name !== "values") {
    try {
      d(Z, "name", {
        value: "values"
      });
    } catch (U) {}
  }
}