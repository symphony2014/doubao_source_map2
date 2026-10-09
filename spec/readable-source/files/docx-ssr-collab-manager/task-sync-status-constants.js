// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Cj' to 'fileSyncStatus'
// - Renamed export 'ZX' to 'taskOpStatus'
// - Renamed export 'an' to 'taskConstantId'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 9960.98cb0478.js
         * chunkId: 9960
         * moduleId: 964181
         */
module.exports = function (module, exports, require) {
  var s;
  var n;
  let o = "10000000000000";
  (s = {})[s.START = 0] = "START";
  s[s.REAL_TOKEN_OBTAINED = 1] = "REAL_TOKEN_OBTAINED";
  s[s.OP_UPDATED = 2] = "OP_UPDATED";
  s[s.CREATED = 3] = "CREATED";
  s[s.DONE = 4] = "DONE";
  let a = s;
  (n = {})[n.SYNCED = 0] = "SYNCED";
  n[n.UNUSABLE = 10] = "UNUSABLE";
  n[n.DOWNLOAD_PENDING = 11] = "DOWNLOAD_PENDING";
  n[n.DOWNLOADING = 12] = "DOWNLOADING";
  n[n.DOWNLOADED = 13] = "DOWNLOADED";
  n[n.DOWNLOAD_FAILED = 14] = "DOWNLOAD_FAILED";
  n[n.UPLOAD_PENDING = 21] = "UPLOAD_PENDING";
  n[n.UPLOADING = 22] = "UPLOADING";
  n[n.UPLOADED = 23] = "UPLOADED";
  n[n.UPLOAD_FAILED = 24] = "UPLOAD_FAILED";
  let l = n;
  require.d(exports, {
    fileSyncStatus: function () {
      return l;
    },
    taskOpStatus: function () {
      return a;
    },
    taskConstantId: function () {
      return o;
    }
  });
}