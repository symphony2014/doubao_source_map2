// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'definePropertySafeUtil'
// - Resolved require(848618) to 'define-property-safe-util'
// - Resolved require(642274) to 'define-property-check_1'
// - Resolved require(893478) to 'function-name-support'
// - Renamed variable 'u' to 'typeErrorConstructor'
// - Resolved require(243370) to 'type-error-constructor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 664371
         */
module.exports = function (module, exports, require) {
  var definePropertySafeUtil = require("define-property-safe-util") /*id: 848618*/;
  var o = require("define-property-check_1") /*id: 642274*/();
  var i = require("function-name-support") /*id: 893478*/.functionsHaveConfigurableNames();
  var typeErrorConstructor = require("type-error-constructor") /*id: 243370*/;
  module.exports = function (t, e) {
    if (typeof t != "function") {
      throw new typeErrorConstructor("`fn` is not a function");
    }
    var r = arguments.length > 2 && !!arguments[2];
    if (!r || i) {
      if (o) {
        definePropertySafeUtil(t, "name", e, true, true);
      } else {
        definePropertySafeUtil(t, "name", e);
      }
    }
    return t;
  };
}