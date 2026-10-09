// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'deepEqual'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 2674.194debdc.js
         * chunkId: 2674
         * moduleId: 956585
         */
module.exports = function (module, exports, require) {
  var objectToStringUtil = require("object-to-string-util") /*id: 194580*/;
  var isObjectUtil = require("is-object-util") /*id: 8345*/;
  var i = Symbol.prototype.valueOf;
  function u(t, e) {
    return t === e || t != t && e != e;
  }
  function a(t, e) {
    return function t(e, r, a, s) {
      if (e === r) {
        return true;
      }
      if (e == null || r == null || !isObjectUtil.isObject(e) && !isObjectUtil.isObject(r) && typeof e != "function") {
        return u(e, r);
      }
      var c = objectToStringUtil.objectToString(e);
      var f = objectToStringUtil.objectToString(r);
      if (c !== f) {
        return false;
      }
      var l = a.indexOf(e);
      if (l === s.indexOf(r) && l >= 0) {
        return true;
      }
      a.push(e);
      s.push(r);
      if ((c === "[object Array]" ? e.length : Object.keys(e).length) !== (f === "[object Array]" ? r.length : Object.keys(r).length)) {
        return false;
      }
      if (c === "[object Array]") {
        for (var p = 0; p < e.length; p++) {
          if (!t(e[p], r[p], a.slice(), s.slice())) {
            return false;
          }
        }
        return true;
      }
      if (c === "[object Object]") {
        for (var d in e) {
          if (e.hasOwnProperty(d) && t(e[d], r[d], a.slice(), s.slice()) === false) {
            return false;
          }
        }
        return true;
      }
      if (c === "[object Function]") {
        return e.toString() === r.toString();
      }
      if (["[object Number]", "[object Boolean]", "[object Date]"].includes(c)) {
        return u(+e, +r);
      }
      if (c === "[object String]") {
        return "" + e == "" + r;
      }
      if (c === "[object Symbol]" && i) {
        return i.call(e) === i.call(r);
      }
      return false;
    }(t, e, [], []);
  }
  require.d(exports, {
    deepEqual: function () {
      return a;
    }
  });
}