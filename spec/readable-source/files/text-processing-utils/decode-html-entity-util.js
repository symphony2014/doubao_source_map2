// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'decodeHtmlEntity'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 35432
         */
module.exports = function (module, exports, require) {
  let n = document.createElement("i");
  function i(e) {
    let t = "&" + e + ";";
    n.innerHTML = t;
    let r = n.textContent;
    return (r.charCodeAt(r.length - 1) !== 59 || e === "semi") && r !== t && r;
  }
  require.d(exports, {
    decodeHtmlEntity: function () {
      return i;
    }
  });
}