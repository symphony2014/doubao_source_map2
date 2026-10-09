// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'F' to 'insertPosition'
// - Renamed export 'P' to 'contentType'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 32240.d3841114.js
         * chunkId: 32240
         * moduleId: 266577
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  (o = {}).HTML = "html";
  o.PLAINTEXT = "plaintext";
  let l = o;
  (i = {}).START = "start";
  i.END = "end";
  i.OTHER = "other";
  let a = i;
  require.d(exports, {
    insertPosition: function () {
      return a;
    },
    contentType: function () {
      return l;
    }
  });
}