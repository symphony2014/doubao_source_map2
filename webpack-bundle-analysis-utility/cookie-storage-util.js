// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 472660
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  module.exports = utilsTypeCheckHelpers.isStandardBrowserEnv() ? {
    write: function (e, t, r, o, i, a) {
      var s = [];
      s.push(e + "=" + encodeURIComponent(t));
      if (utilsTypeCheckHelpers.isNumber(r)) {
        s.push("expires=" + new Date(r).toGMTString());
      }
      if (utilsTypeCheckHelpers.isString(o)) {
        s.push("path=" + o);
      }
      if (utilsTypeCheckHelpers.isString(i)) {
        s.push("domain=" + i);
      }
      if (a === true) {
        s.push("secure");
      }
      document.cookie = s.join("; ");
    },
    read: function (e) {
      var t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      if (t) {
        return decodeURIComponent(t[3]);
      } else {
        return null;
      }
    },
    remove: function (e) {
      this.write(e, "", Date.now() - 86400000);
    }
  } : {
    write: function () {},
    read: function () {
      return null;
    },
    remove: function () {}
  };
}