// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createDebounce'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 213804
         */
module.exports = function (module, exports, require) {
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  exports.createDebounce = function (e, t, n) {
    var o = true;
    var a = true;
    if (typeof e != "function") {
      throw TypeError("Expected a function");
    }
    if (isObjectOrFunction_1_1.isObjectOrFunction(n)) {
      o = "leading" in n ? !!n.leading : o;
      a = "trailing" in n ? !!n.trailing : a;
    }
    return debounceUtil_1_1.debounce(e, t, {
      leading: o,
      maxWait: t,
      trailing: a
    });
  };
}