// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'requireObjectOrThrowTypeError_1'
// - Resolved require(989247) to 'require-object-or-throw-type-error_1'
// - Renamed variable 'i' to 'numberIsFinitePolyfill'
// - Resolved require(830294) to 'number-is-finite-polyfill'
// - Renamed variable 'a' to 'iteratorPrototypeFactory'
// - Resolved require(1775) to 'iterator-prototype-factory'
// - Renamed variable 'u' to 'iteratorResultFactory_1'
// - Resolved require(246305) to 'iterator-result-factory_1'
// - Renamed variable 'c' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 443922
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var requireObjectOrThrowTypeError_1 = require("require-object-or-throw-type-error_1") /*id: 989247*/;
  var numberIsFinitePolyfill = require("number-is-finite-polyfill") /*id: 830294*/;
  var iteratorPrototypeFactory = require("iterator-prototype-factory") /*id: 1775*/;
  var iteratorResultFactory_1 = require("iterator-result-factory_1") /*id: 246305*/;
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var f = "Seeded Random";
  var s = f + " Generator";
  var l = objectStateManager.set;
  var v = objectStateManager.getterFor(s);
  var p = TypeError;
  var h = iteratorPrototypeFactory(function (t) {
    l(this, {
      type: s,
      seed: t % 2147483647
    });
  }, f, function () {
    var t = v(this);
    return iteratorResultFactory_1(((t.seed = (t.seed * 1103515245 + 12345) % 2147483647) & 1073741823) / 1073741823, false);
  });
  polyfillPropertyDefiner({
    target: "Math",
    stat: true,
    forced: true
  }, {
    seededPRNG: function (t) {
      var r = requireObjectOrThrowTypeError_1(t).seed;
      if (!numberIsFinitePolyfill(r)) {
        throw new p("Math.seededPRNG() argument should have a \"seed\" field with a finite value.");
      }
      return new h(r);
    }
  });
}