// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'safeFunctionBind'
// - Resolved require(990398) to 'safe-function-bind'
// - Renamed variable 'i' to 'setPrototypeCheck'
// - Resolved require(754725) to 'set-prototype-check'
// - Renamed variable 'a' to 'setFindPolyfillUtil'
// - Resolved require(581853) to 'set-find-polyfill-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 360371
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var safeFunctionBind = require("safe-function-bind") /*id: 990398*/;
  var setPrototypeCheck = require("set-prototype-check") /*id: 754725*/;
  var setFindPolyfillUtil = require("set-find-polyfill-util") /*id: 581853*/;
  polyfillPropertyDefiner({
    target: "Set",
    proto: true,
    real: true,
    forced: true
  }, {
    some: function (t) {
      var r = setPrototypeCheck(this);
      var e = safeFunctionBind(t, arguments.length > 1 ? arguments[1] : undefined);
      return setFindPolyfillUtil(r, function (t) {
        if (e(t, t, r)) {
          return true;
        }
      }, true) === true;
    }
  });
}