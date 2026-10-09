// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'K$' to 'DeviceType'
// - Renamed export 'LZ' to 'TaskStatus'
// - Renamed export 'QA' to 'OutputType'
// - Renamed export 'zu' to 'CodeImageStatus'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-layout-canvas.ea59bc0c.js
         * chunkId: 78042
         * moduleId: 414846
         */
module.exports = function (module, exports, require) {
  var i;
  var r;
  var o;
  var s;
  (i = {}).Stdout = "stdout";
  i.Stderr = "stderr";
  i.Image = "image";
  i.Timeout = "timeout";
  let n = i;
  (r = {}).Loading = "loading";
  r.Success = "success";
  r.PartialSuccess = "partial_success";
  r.Failed = "failed";
  let l = r;
  (o = {})[o.CodeImageStatusUnknown = 0] = "CodeImageStatusUnknown";
  o[o.CodeImageStatusGenerating = 1] = "CodeImageStatusGenerating";
  o[o.CodeImageStatusSucceed = 2] = "CodeImageStatusSucceed";
  o[o.CodeImageStatusBanned = 3] = "CodeImageStatusBanned";
  o[o.CodeImageStatusFailed = 4] = "CodeImageStatusFailed";
  let c = o;
  (s = {}).Tablet = "tablet";
  s.Mobile = "mobile";
  s.Default = "default";
  let d = s;
  require.d(exports, {
    DeviceType: function () {
      return d;
    },
    TaskStatus: function () {
      return l;
    },
    OutputType: function () {
      return n;
    },
    CodeImageStatus: function () {
      return c;
    }
  });
}