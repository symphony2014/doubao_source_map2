// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'v' to 'fileEntityTypes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 567257
         */
module.exports = function (module, exports, require) {
  var n = {
    Directory: "Directory",
    File: "File",
    Link: "Link",
    Image: "Image",
    WritingDoc: "WritingDoc",
    Video: "Video",
    Audio: "Audio",
    MeetingMinutes: "meeting_minutes",
    CodeArtifact: "code_artifact",
    CodeProject: "codeProject",
    Creation: "Creation",
    Slides: "Slides",
    FeishuPages: "FeishuPages"
  };
  require.d(exports, {
    fileEntityTypes: function () {
      return n;
    }
  });
}