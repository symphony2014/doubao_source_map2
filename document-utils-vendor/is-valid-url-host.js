// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 7359.24db40f3.js
         * chunkId: 7359
         * moduleId: 871364
         */
module.exports = function (module, exports, require) {
  module.exports = function (e) {
    if (typeof e != "string") {
      return false;
    }
    var i = e.match(t);
    if (!i) {
      return false;
    }
    var o = i[1];
    return !!o && (!!r.test(o) || !!n.test(o));
  };
  var t = /^(?:\w+:)?\/\/(\S+)$/;
  var r = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
  var n = /^[^\s\.]+\.\S{2,}$/;
}