// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getNativeFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 150570
         */
module.exports = function (module, exports, require) {
  var r;
  var isFunctionUtil_1 = require("is-function-util_1") /*id: 699491*/;
  var o = require("global-object-detector_1") /*id: 203498*/.globalObject["__core-js_shared__"];
  var a = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var safeToStringUtil = require("safe-to-string-util") /*id: 679355*/;
  var c = /^\[object .+?Constructor\]$/;
  var l = Object.prototype;
  var f = Function.prototype.toString;
  var h = l.hasOwnProperty;
  var d = RegExp("^" + f.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function p(e) {
    return !!isObjectOrFunction_1_1.isObjectOrFunction(e) && (!a || !(a in e)) && (isFunctionUtil_1.isFunction(e) ? d : c).test(safeToStringUtil.safeToString(e));
  }
  function g(e, t) {
    var n = e == null ? undefined : e[t];
    if (p(n)) {
      return n;
    } else {
      return undefined;
    }
  }
  require.d(exports, {
    getNativeFunction: function () {
      return g;
    }
  });
}