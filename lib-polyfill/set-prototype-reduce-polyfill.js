// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'functionValidator'
// - Resolved require(599706) to 'function-validator'
// - Renamed variable 'i' to 'setPrototypeCheck'
// - Resolved require(754725) to 'set-prototype-check'
// - Renamed variable 'a' to 'setFindPolyfillUtil'
// - Resolved require(581853) to 'set-find-polyfill-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 368921
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var functionValidator = require("function-validator") /*id: 599706*/;
  var setPrototypeCheck = require("set-prototype-check") /*id: 754725*/;
  var setFindPolyfillUtil = require("set-find-polyfill-util") /*id: 581853*/;
  var u = TypeError;
  polyfillPropertyDefiner({
    target: "Set",
    proto: true,
    real: true,
    forced: true
  }, {
    reduce: function (t) {
      var r = setPrototypeCheck(this);
      var e = arguments.length < 2;
      var n = e ? undefined : arguments[1];
      functionValidator(t);
      setFindPolyfillUtil(r, function (o) {
        if (e) {
          e = false;
          n = o;
        } else {
          n = t(n, o, o, r);
        }
      });
      if (e) {
        throw new u("Reduce of empty set with no initial value");
      }
      return n;
    }
  });
}