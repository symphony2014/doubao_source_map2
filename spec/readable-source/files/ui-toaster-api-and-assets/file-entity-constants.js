// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AX' to 'fileEntityIconMap'
// - Renamed export 'MB' to 'maxFileSize'
// - Renamed export 'U3' to 'maxFileCount'
// - Renamed export 'Z4' to 'timeoutLimit'
// - Renamed export 'aE' to 'checkMediaAction'
// - Renamed export 'm4' to 'layoutItemIconMap'
// - Renamed export 'uW' to 'fileTypeLabels'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 745880
         */
module.exports = function (module, exports, require) {
  var fileEntityTypeConstants = require("file-entity-type-constants") /*id: 567257*/;
  var businessLayoutConstants = require("business-layout-constants") /*id: 252973*/;
  let r = {
    [fileEntityTypeConstants.fileEntityTypes.Directory]: "folder",
    [fileEntityTypeConstants.fileEntityTypes.File]: "file",
    [fileEntityTypeConstants.fileEntityTypes.Link]: "link",
    [fileEntityTypeConstants.fileEntityTypes.Image]: "picture",
    [fileEntityTypeConstants.fileEntityTypes.WritingDoc]: "writing_doc",
    [fileEntityTypeConstants.fileEntityTypes.Audio]: "audio",
    [fileEntityTypeConstants.fileEntityTypes.Video]: "video",
    [fileEntityTypeConstants.fileEntityTypes.MeetingMinutes]: "metting_minutes",
    [fileEntityTypeConstants.fileEntityTypes.CodeArtifact]: "code_artifact",
    [fileEntityTypeConstants.fileEntityTypes.CodeProject]: "code_project",
    [fileEntityTypeConstants.fileEntityTypes.Creation]: "creation",
    [fileEntityTypeConstants.fileEntityTypes.FeishuPages]: "feishu_doc",
    [fileEntityTypeConstants.fileEntityTypes.Slides]: "slides"
  };
  let o = {
    [businessLayoutConstants.ItemType.Directory]: "folder",
    [businessLayoutConstants.ItemType.File]: "file",
    [businessLayoutConstants.ItemType.Link]: "link",
    [businessLayoutConstants.ItemType.Image]: "picture",
    [businessLayoutConstants.ItemType.Pages]: "writing_doc",
    [businessLayoutConstants.ItemType.Audio]: "audio",
    [businessLayoutConstants.ItemType.Video]: "video",
    [businessLayoutConstants.ItemType.MeetingMinutes]: "metting_minutes",
    [businessLayoutConstants.ItemType.CodeArtifact]: "code_artifact",
    [businessLayoutConstants.ItemType.CodeProject]: "code_project",
    [businessLayoutConstants.ItemType.FeishuPages]: "feishu_doc",
    [businessLayoutConstants.ItemType.Slides]: "slides",
    [businessLayoutConstants.ItemType.UnKnown]: ""
  };
  var s = {
    Image: "Image",
    PdfLink: "PdfLink",
    Link: "Link",
    PdfFile: "PdfFile",
    ExcelFile: "ExcelFile",
    WordFile: "WordFile",
    File: "File",
    WritingDoc: "WritingDoc",
    MeetingMinutes: "MeetingMinutes",
    Video: "Video",
    Audio: "Audio",
    CodeFile: "CodeFile",
    CodeDir: "CodeDir",
    CodeArtifact: "CodeArtifact",
    Unknown: "Unknown"
  };
  let l = 15;
  let c = 2000;
  let d = 1048576;
  let u = "checkMediaFileStatus";
  require.d(exports, {
    fileEntityIconMap: function () {
      return r;
    },
    maxFileSize: function () {
      return d;
    },
    maxFileCount: function () {
      return l;
    },
    timeoutLimit: function () {
      return c;
    },
    checkMediaAction: function () {
      return u;
    },
    layoutItemIconMap: function () {
      return o;
    },
    fileTypeLabels: function () {
      return s;
    }
  });
}