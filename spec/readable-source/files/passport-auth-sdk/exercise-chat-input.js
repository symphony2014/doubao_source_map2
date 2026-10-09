// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 665110
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  module.exports = utilsTypeCheckHelpers.isStandardBrowserEnv() ? function () {
    var e;
    var t = /(msie|trident)/i.test(navigator.userAgent);
    var r = document.createElement("a");
    function o(e) {
      var n = e;
      if (t) {
        r.setAttribute("href", n);
        n = r.href;
      }
      r.setAttribute("href", n);
      return {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    e = o(window.location.href);
    return function (t) {
      var r = utilsTypeCheckHelpers.isString(t) ? o(t) : t;
      return r.protocol === e.protocol && r.host === e.host;
    };
  }() : function () {
    return true;
  };
}