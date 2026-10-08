// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 19054.be6844dd.js
         * chunkId: 19054
         * moduleId: 391023
         */
module.exports = function (module, exports, require) {
  module.exports = function (t, e, r, i) {
    var n = new Blob(i !== undefined ? [i, t] : [t], {
      type: r || "application/octet-stream"
    });
    if (window.navigator.msSaveBlob !== undefined) {
      window.navigator.msSaveBlob(n, e);
    } else {
      var o = window.URL && window.URL.createObjectURL ? window.URL.createObjectURL(n) : window.webkitURL.createObjectURL(n);
      var s = document.createElement("a");
      s.style.display = "none";
      s.href = o;
      s.setAttribute("download", e);
      if (s.download === undefined) {
        s.setAttribute("target", "_blank");
      }
      document.body.appendChild(s);
      s.click();
      setTimeout(function () {
        document.body.removeChild(s);
        window.URL.revokeObjectURL(o);
      }, 200);
    }
  };
}