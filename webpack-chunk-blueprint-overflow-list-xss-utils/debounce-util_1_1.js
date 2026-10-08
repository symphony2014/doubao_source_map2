// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'debounce'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 887312
         */
module.exports = function (module, exports, require) {
  var isObjectOrFunction_1_1 = require("is-object-or-function_1_1") /*id: 433743*/;
  var dateNowUtil = require("date-now-util") /*id: 258788*/;
  var toNumberUtil_1 = require("to-number-util_1") /*id: 216346*/;
  var a = Math.max;
  var s = Math.min;
  exports.debounce = function (e, t, n) {
    var u;
    var c;
    var l;
    var f;
    var h;
    var d;
    var p = 0;
    var g = false;
    var v = false;
    var m = true;
    if (typeof e != "function") {
      throw TypeError("Expected a function");
    }
    function y(t) {
      var n = u;
      var r = c;
      u = c = undefined;
      p = t;
      return f = e.apply(r, n);
    }
    function b(e) {
      var n = e - d;
      var r = e - p;
      return d === undefined || n >= t || n < 0 || v && r >= l;
    }
    function _() {
      var e;
      var n;
      var r;
      var o = dateNowUtil.getDateNow();
      if (b(o)) {
        return w(o);
      }
      h = setTimeout(_, (e = o - d, n = o - p, r = t - e, v ? s(r, l - n) : r));
    }
    function w(e) {
      h = undefined;
      if (m && u) {
        return y(e);
      } else {
        u = c = undefined;
        return f;
      }
    }
    function E() {
      var e;
      var n = dateNowUtil.getDateNow();
      var r = b(n);
      u = arguments;
      c = this;
      d = n;
      if (r) {
        if (h === undefined) {
          p = e = d;
          h = setTimeout(_, t);
          if (g) {
            return y(e);
          } else {
            return f;
          }
        }
        if (v) {
          clearTimeout(h);
          h = setTimeout(_, t);
          return y(d);
        }
      }
      if (h === undefined) {
        h = setTimeout(_, t);
      }
      return f;
    }
    t = toNumberUtil_1.toNumber(t) || 0;
    if (isObjectOrFunction_1_1.isObjectOrFunction(n)) {
      g = !!n.leading;
      l = (v = "maxWait" in n) ? a(toNumberUtil_1.toNumber(n.maxWait) || 0, t) : l;
      m = "trailing" in n ? !!n.trailing : m;
    }
    E.cancel = function () {
      if (h !== undefined) {
        clearTimeout(h);
      }
      p = 0;
      u = d = c = h = undefined;
    };
    E.flush = function () {
      if (h === undefined) {
        return f;
      } else {
        return w(dateNowUtil.getDateNow());
      }
    };
    return E;
  };
}