// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ML' to 'taskStatus'
// - Renamed export 'MM' to 'fileFormats'
// - Renamed export 'Ng' to 'errorCode'
// - Renamed export 'Qs' to 'taskTypes'
// - Renamed export 'mZ' to 'toolTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 27661.f1334209.js
         * chunkId: 27661
         * moduleId: 324746
         */
module.exports = function (module, exports, require) {
  (n = {})[n.CANCEL = 1] = "CANCEL";
  n[n.FINISH = 2] = "FINISH";
  n[n.FAIL = 3] = "FAIL";
  n[n.PROCESSING = 4] = "PROCESSING";
  n[n.PAUSE = 5] = "PAUSE";
  let r = n;
  var n;
  var l;
  var i;
  var a = {
    Tool: 1,
    Product: 2,
    CloudBrowser: 3,
    Code: 4,
    Shell: 5,
    PPTGenerator: 6,
    PPTOutlineGenerator: 7
  };
  (l = {}).Web = "web";
  l.Zip = "zip";
  l.File = "file";
  l.Html = "html";
  l.Markdown = "markdown";
  l.Code = "code";
  l.Mp3 = "mp3";
  l.Mp4 = "mp4";
  l.M4V = "m4v";
  l.Wav = "wav";
  l.Doc = "doc";
  l.Video = "video";
  l.PDF = "pdf";
  l.XLSX = "xlsx";
  l.CSV = "csv";
  l.DOCX = "docx";
  l.PPT = "ppt";
  l.PPTX = "pptx";
  l.LocalFolder = "local_folder";
  l.SUPPORTED = "__supported";
  l.UNSUPPORTED = "__unsupported";
  let s = l;
  (i = {}).SuperTask = "super_task";
  i.PPTGenerator = "ppt_generator";
  let c = i;
  let _ = 1021;
  require.d(exports, {
    taskStatus: function () {
      return r;
    },
    fileFormats: function () {
      return s;
    },
    errorCode: function () {
      return _;
    },
    taskTypes: function () {
      return c;
    },
    toolTypes: function () {
      return a;
    }
  });
}