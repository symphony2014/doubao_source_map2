// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'actionTypes'
// - Renamed export 'h' to 'actionKeys'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 29302.5675d381.js
         * chunkId: 29302
         * moduleId: 837679
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  (r = {})[r.REFRESH = 0] = "REFRESH";
  r[r.COPY = 1] = "COPY";
  r[r.CONTACT = 2] = "CONTACT";
  r[r.CANCEL = 3] = "CANCEL";
  r[r.CREATE = 4] = "CREATE";
  r[r.DOWNLOAD_DOUBAO_PC_CLIENT = 5] = "DOWNLOAD_DOUBAO_PC_CLIENT";
  r[r.PLAIN_REFRESH = 6] = "PLAIN_REFRESH";
  let c = r;
  (i = {}).REFRESH = "refresh";
  i.COPY = "copy_full_text";
  i.CONTACT = "contact_us";
  i.CANCEL = "cancel";
  i.CREATE = "create";
  i.DELETE = "delete";
  let l = i;
  require.d(exports, {
    actionTypes: function () {
      return c;
    },
    actionKeys: function () {
      return l;
    }
  });
}