// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 535640
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  module.exports = function (e) {
    if (utilsTypeCheckHelpers.isFormData(e) && utilsTypeCheckHelpers.isFunction(e.entries)) {
      var t = {};
      utilsTypeCheckHelpers.forEachEntry(e, function (e, r) {
        (function e(t, r, o, i) {
          var a = t[i++];
          var s = Number.isFinite(+a);
          var u = i >= t.length;
          a = !a && utilsTypeCheckHelpers.isArray(o) ? o.length : a;
          if (u) {
            if (utilsTypeCheckHelpers.hasOwnProperty(o, a)) {
              o[a] = [o[a], r];
            } else {
              o[a] = r;
            }
          } else {
            if (!o[a] || !utilsTypeCheckHelpers.isObject(o[a])) {
              o[a] = [];
            }
            if (e(t, r, o[a], i) && utilsTypeCheckHelpers.isArray(o[a])) {
              o[a] = function (e) {
                var t;
                var r;
                var n = {};
                var o = Object.keys(e);
                var i = o.length;
                for (t = 0; t < i; t++) {
                  n[r = o[t]] = e[r];
                }
                return n;
              }(o[a]);
            }
          }
          return !s;
        })(utilsTypeCheckHelpers.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
          if (e[0] === "[]") {
            return "";
          } else {
            return e[1] || e[0];
          }
        }), r, t, 0);
      });
      return t;
    }
    return null;
  };
}