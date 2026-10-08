// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'utilsTypeCheckHelpers'
// - Resolved require(998785) to 'utils-type-check-helpers'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 23931.af272c7e.js
         * chunkId: 23931
         * moduleId: 481603
         */
module.exports = function (module, exports, require) {
  var utilsTypeCheckHelpers = require("utils-type-check-helpers") /*id: 998785*/;
  var o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
  module.exports = function (e) {
    var t;
    var r;
    var i;
    var a = {};
    if (e) {
      utilsTypeCheckHelpers.forEach(e.split("\n"), function (e) {
        i = e.indexOf(":");
        t = utilsTypeCheckHelpers.trim(e.slice(0, i)).toLowerCase();
        r = utilsTypeCheckHelpers.trim(e.slice(i + 1));
        if (t && (!a[t] || !(o.indexOf(t) >= 0))) {
          if (t === "set-cookie") {
            a[t] = (a[t] ? a[t] : []).concat([r]);
          } else {
            a[t] = a[t] ? a[t] + ", " + r : r;
          }
        }
      });
    }
    return a;
  };
}