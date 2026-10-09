// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'iteratorPrototypeFactory'
// - Resolved require(1775) to 'iterator-prototype-factory'
// - Renamed variable 'i' to 'iteratorResultFactory_1'
// - Resolved require(246305) to 'iterator-result-factory_1'
// - Renamed variable 'a' to 'requireNotNullish'
// - Resolved require(330600) to 'require-not-nullish'
// - Renamed variable 'u' to 'symbolToStringConverter_1'
// - Resolved require(557816) to 'symbol-to-string-converter_1'
// - Renamed variable 'c' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// - Renamed variable 'f' to 'unicodeStringUtils'
// - Resolved require(905844) to 'unicode-string-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 546157
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var iteratorPrototypeFactory = require("iterator-prototype-factory") /*id: 1775*/;
  var iteratorResultFactory_1 = require("iterator-result-factory_1") /*id: 246305*/;
  var requireNotNullish = require("require-not-nullish") /*id: 330600*/;
  var symbolToStringConverter_1 = require("symbol-to-string-converter_1") /*id: 557816*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var unicodeStringUtils = require("unicode-string-utils") /*id: 905844*/;
  var s = unicodeStringUtils.codeAt;
  var l = unicodeStringUtils.charAt;
  var v = "String Iterator";
  var p = objectStateManager.set;
  var h = objectStateManager.getterFor(v);
  var d = iteratorPrototypeFactory(function (t) {
    p(this, {
      type: v,
      string: t,
      index: 0
    });
  }, "String", function () {
    var t;
    var r = h(this);
    var e = r.string;
    var n = r.index;
    if (n >= e.length) {
      return iteratorResultFactory_1(undefined, true);
    } else {
      t = l(e, n);
      r.index += t.length;
      return iteratorResultFactory_1({
        codePoint: s(t, 0),
        position: n
      }, false);
    }
  });
  polyfillPropertyDefiner({
    target: "String",
    proto: true,
    forced: true
  }, {
    codePoints: function () {
      return new d(symbolToStringConverter_1(requireNotNullish(this)));
    }
  });
}