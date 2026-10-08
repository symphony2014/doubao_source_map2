// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'definePropertyCheck_1'
// - Resolved require(642274) to 'define-property-check_1'
// - Renamed variable 'o' to 'definePropertyCheck'
// - Resolved require(594896) to 'define-property-check'
// - Resolved require(983450) to 'is-array-util'
// - Resolved require(187792) to 'get-intrinsic-safe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 414434
         */
module.exports = function (module, exports, require) {
  var definePropertyCheck_1 = require("define-property-check_1") /*id: 642274*/;
  var definePropertyCheck = require("define-property-check") /*id: 594896*/;
  var i = definePropertyCheck_1.hasArrayLengthDefineBug();
  var u = i && require("is-array-util") /*id: 983450*/;
  var a = require("get-intrinsic-safe") /*id: 187792*/("Object.prototype.propertyIsEnumerable");
  module.exports = function (t, e, r, n, s, c) {
    if (!definePropertyCheck) {
      if (!t(c) || !c["[[Configurable]]"] || !c["[[Writable]]"] || s in n && a(n, s) !== !!c["[[Enumerable]]"]) {
        return false;
      }
      var f = c["[[Value]]"];
      n[s] = f;
      return e(n[s], f);
    }
    if (i && s === "length" && "[[Value]]" in c && u(n) && n.length !== c["[[Value]]"]) {
      n.length = c["[[Value]]"];
      return n.length === c["[[Value]]"];
    } else {
      definePropertyCheck(n, s, r(c));
      return true;
    }
  };
}