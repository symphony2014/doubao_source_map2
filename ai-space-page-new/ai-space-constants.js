// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Gb' to 'StorageErrors'
// - Renamed export 'KV' to 'OperationStatus'
// - Renamed export 'lQ' to 'EntryTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 784952
         */
module.exports = function (module, exports, require) {
  var n = {
    File: "File",
    Directory: "Directory"
  };
  var a = {
    Pending: "Pending",
    Inflight: "Inflight",
    Success: "Success",
    Error: "Error",
    Paused: "Paused"
  };
  var r = {
    UploadError: "UploadError",
    MountError: "MountError",
    UnsupportedFileType: "UnsupportedFileType"
  };
  require.d(exports, {
    StorageErrors: function () {
      return r;
    },
    OperationStatus: function () {
      return a;
    },
    EntryTypes: function () {
      return n;
    }
  });
}