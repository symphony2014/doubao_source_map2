// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(68396) to 'object-assign-polyfill-util'
// - Renamed variable 'o' to 'regexpFlagsGetterUtil'
// - Resolved require(619362) to 'regexp-flags-getter-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 58351
         */
module.exports = function (module, exports, require) {
  var n = require("object-assign-polyfill-util") /*id: 68396*/.supportsDescriptors;
  var regexpFlagsGetterUtil = require("regexp-flags-getter-util") /*id: 619362*/;
  var i = Object.getOwnPropertyDescriptor;
  var u = Object.defineProperty;
  var a = TypeError;
  var s = Object.getPrototypeOf;
  var c = /a/;
  module.exports = function () {
    if (!n || !s) {
      throw new a("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
    }
    var t = regexpFlagsGetterUtil();
    var e = s(c);
    var r = i(e, "flags");
    if (!r || r.get !== t) {
      u(e, "flags", {
        configurable: true,
        enumerable: false,
        get: t
      });
    }
    return t;
  };
}