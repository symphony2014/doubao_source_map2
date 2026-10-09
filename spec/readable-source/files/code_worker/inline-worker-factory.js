// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: code_worker.ece506f9.js
         * chunkId: 85453
         * moduleId: 114165
         */
module.exports = function (module, exports, require) {
  module.exports = function (e, n, t, a) {
    var r;
    var i = self || window;
    try {
      try {
        try {
          r = new i.Blob([e]);
        } catch (n) {
          (r = new (i.BlobBuilder || i.WebKitBlobBuilder || i.MozBlobBuilder || i.MSBlobBuilder)()).append(e);
          r = r.getBlob();
        }
        var s = i.URL || i.webkitURL;
        var o = s.createObjectURL(r);
        var l = new i[n](o, t);
        s.revokeObjectURL(o);
        return l;
      } catch (a) {
        return new i[n](`data:application/javascript,${encodeURIComponent(e)}`, t);
      }
    } catch (e) {
      if (!a) {
        throw Error("Inline worker is not supported");
      }
      return new i[n](a, t);
    }
  };
}