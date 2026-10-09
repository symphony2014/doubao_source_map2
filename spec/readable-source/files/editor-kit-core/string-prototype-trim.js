// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'requireDefinedUtil_1'
// - Resolved require(536844) to 'require-defined-util_1'
// - Renamed variable 'o' to 'stringIntrinsicUtil'
// - Resolved require(162384) to 'string-intrinsic-util'
// - Resolved require(187792) to 'get-intrinsic-safe'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 299107
         */
module.exports = function (module, exports, require) {
  var requireDefinedUtil_1 = require("require-defined-util_1") /*id: 536844*/;
  var stringIntrinsicUtil = require("string-intrinsic-util") /*id: 162384*/;
  var i = require("get-intrinsic-safe") /*id: 187792*/("String.prototype.replace");
  var u = /^\s$/.test("᠎");
  var a = u ? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/ : /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
  var s = u ? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/ : /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
  module.exports = function () {
    return i(i(stringIntrinsicUtil(requireDefinedUtil_1(this)), a, ""), s, "");
  };
}