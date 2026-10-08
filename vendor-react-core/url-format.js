// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 75828.3c5eebd1.js
         * chunkId: 75828
         * moduleId: 542906
         */
module.exports = function (module, exports, require) {
  module.exports = function (t) {
    var e = "";
    e += t.protocol || "";
    e += t.slashes ? "//" : "";
    e += t.auth ? t.auth + "@" : "";
    if (t.hostname && t.hostname.indexOf(":") !== -1) {
      e += "[" + t.hostname + "]";
    } else {
      e += t.hostname || "";
    }
    e += t.port ? ":" + t.port : "";
    e += t.pathname || "";
    e += t.search || "";
    return e += t.hash || "";
  };
}