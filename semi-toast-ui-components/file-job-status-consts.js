// process step : FolderAndFileRename
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 212138
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  (i = {})[i.Unknown = 0] = "Unknown";
  i[i.Word = 1] = "Word";
  i[i.PDF = 2] = "PDF";
  i[i.MarkDown = 3] = "MarkDown";
  i[i.WordDoc = 4] = "WordDoc";
  i[i.OtterPage = 101] = "OtterPage";
  let a = i;
  (r = {})[r.Unknown = 0] = "Unknown";
  r[r.ExportSizeLimit = 1000] = "ExportSizeLimit";
  r[r.ImportSizeLimit = 10000] = "ImportSizeLimit";
  let l = r;
  (o = {})[o.Init = 0] = "Init";
  o[o.Processing = 1] = "Processing";
  o[o.Success = 2] = "Success";
  o[o.Failed = 3] = "Failed";
  o[o.Expired = 4] = "Expired";
  let s = o;
  require.r(exports);
  require.d(exports, {
    FileType: function () {
      return a;
    },
    JobFailStatus: function () {
      return l;
    },
    JobStatus: function () {
      return s;
    }
  });
}