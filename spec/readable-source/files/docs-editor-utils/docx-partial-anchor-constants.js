// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'BX' to 'anchorCreateLimit'
// - Renamed export 'J0' to 'createAnchorPath'
// - Renamed export 'f0' to 'anchorDataLimit'
// - Renamed export 'j6' to 'anchorErrorCodes'
// - Renamed export 'yB' to 'dataAnchorPath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 311228
         */
module.exports = function (module, exports, require) {
  var o;
  let i = "/space/api/docx/partial_content_anchor/create";
  let l = "/space/api/docx/partial_content_anchor/data";
  let c = 10000;
  let u = 15000;
  (o = {})[o.CREATE_MAX_LIMIT = 4000800] = "CREATE_MAX_LIMIT";
  o[o.BLOCK_VERSION_ERROR = 4000002] = "BLOCK_VERSION_ERROR";
  let a = o;
  require.d(exports, {
    anchorCreateLimit: function () {
      return c;
    },
    createAnchorPath: function () {
      return i;
    },
    anchorDataLimit: function () {
      return u;
    },
    anchorErrorCodes: function () {
      return a;
    },
    dataAnchorPath: function () {
      return l;
    }
  });
}