// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'objectStateManager'
// - Resolved require(488732) to 'object-state-manager'
// - Renamed variable 'o' to 'iteratorPrototypeFactory'
// - Resolved require(1775) to 'iterator-prototype-factory'
// - Renamed variable 'i' to 'iteratorResultFactory_1'
// - Resolved require(246305) to 'iterator-result-factory_1'
// - Renamed variable 'a' to 'objectHasOwnPolyfill_1'
// - Resolved require(759692) to 'object-has-own-polyfill_1'
// - Renamed variable 'u' to 'objectKeysPolyfill_3'
// - Resolved require(18493) to 'object-keys-polyfill_3'
// - Renamed variable 'c' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 387932
         */
module.exports = function (module, exports, require) {
  var objectStateManager = require("object-state-manager") /*id: 488732*/;
  var iteratorPrototypeFactory = require("iterator-prototype-factory") /*id: 1775*/;
  var iteratorResultFactory_1 = require("iterator-result-factory_1") /*id: 246305*/;
  var objectHasOwnPolyfill_1 = require("object-has-own-polyfill_1") /*id: 759692*/;
  var objectKeysPolyfill_3 = require("object-keys-polyfill_3") /*id: 18493*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var f = "Object Iterator";
  var s = objectStateManager.set;
  var l = objectStateManager.getterFor(f);
  module.exports = iteratorPrototypeFactory(function (t, r) {
    var e = requireObjectNotNullish(t);
    s(this, {
      type: f,
      mode: r,
      object: e,
      keys: objectKeysPolyfill_3(e),
      index: 0
    });
  }, "Object", function () {
    var t = l(this);
    var r = t.keys;
    while (true) {
      if (r === null || t.index >= r.length) {
        t.object = t.keys = null;
        return iteratorResultFactory_1(undefined, true);
      }
      var e = r[t.index++];
      var n = t.object;
      if (objectHasOwnPolyfill_1(n, e)) {
        switch (t.mode) {
          case "keys":
            return iteratorResultFactory_1(e, false);
          case "values":
            return iteratorResultFactory_1(n[e], false);
        }
        return iteratorResultFactory_1([e, n[e]], false);
      }
    }
  });
}