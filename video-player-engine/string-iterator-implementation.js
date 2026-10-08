// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(905844) to 'unicode-string-utils'
// - Renamed variable 'l' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'i' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// - Renamed variable 'a' to 'defineIteratorPrototype'
// - Resolved require(675930) to 'define-iterator-prototype'
// - Renamed variable 'd' to 'iteratorResultFactory_1'
// - Resolved require(246305) to 'iterator-result-factory_1'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 337529
         */
module.exports = function (module, exports, require) {
  var Q = require("unicode-string-utils") /*id: 905844*/.charAt;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var defineIteratorPrototype = require("define-iterator-prototype") /*id: 675930*/;
  var iteratorResultFactory_1 = require("iterator-result-factory_1") /*id: 246305*/;
  var r = "String Iterator";
  var o = objectStateManager.set;
  var B = objectStateManager.getterFor(r);
  defineIteratorPrototype(String, "String", function (U) {
    o(this, {
      type: r,
      string: symbolToStringConverter_1(U),
      index: 0
    });
  }, function () {
    var U;
    var n = B(this);
    var F = n.string;
    var l = n.index;
    if (l >= F.length) {
      return iteratorResultFactory_1(undefined, true);
    } else {
      U = Q(F, l);
      n.index += U.length;
      return iteratorResultFactory_1(U, false);
    }
  });
}