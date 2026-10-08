// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(726628) to 'package-version-info'
// - Renamed variable 'o' to 'axiosErrorClass'
// - Resolved require(24058) to 'axios-error-class'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 150241
         */
module.exports = function (module, exports, require) {
  var n = require("package-version-info") /*id: 726628*/.version;
  var axiosErrorClass = require("axios-error-class") /*id: 24058*/;
  var i = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(function (e, t) {
    i[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  });
  var a = {};
  i.transitional = function (e, t, r) {
    return function (i, s, u) {
      if (e === false) {
        throw new axiosErrorClass("[Axios v" + n + "] Transitional option '" + s + "' has been removed" + (t ? " in " + t : "") + (r ? ". " + r : ""), axiosErrorClass.ERR_DEPRECATED);
      }
      if (t && !a[s]) {
        a[s] = true;
      }
      return !e || e(i, s, u);
    };
  };
  module.exports = {
    assertOptions: function (e, t, r) {
      if (typeof e != "object") {
        throw new axiosErrorClass("options must be an object", axiosErrorClass.ERR_BAD_OPTION_VALUE);
      }
      var n = Object.keys(e);
      var i = n.length;
      while (i-- > 0) {
        var a = n[i];
        var s = t[a];
        if (s) {
          var u = e[a];
          var c = u === undefined || s(u, a, e);
          if (c !== true) {
            throw new axiosErrorClass("option " + a + " must be " + c, axiosErrorClass.ERR_BAD_OPTION_VALUE);
          }
          continue;
        }
        if (r !== true) {
          throw new axiosErrorClass("Unknown option " + a, axiosErrorClass.ERR_BAD_OPTION);
        }
      }
    },
    validators: i
  };
}