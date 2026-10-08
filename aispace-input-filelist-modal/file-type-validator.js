// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'gQ' to 'isSupportedFile'
// - Renamed export 'io' to 'isAudioFile'
// - Renamed export 'z$' to 'isVideoFile'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 34843.105268c8.js
         * chunkId: 34843
         * moduleId: 389540
         */
module.exports = function (module, exports, require) {
  var codeAssistantFileValidator = require("code-assistant-file-validator") /*id: 771278*/;
  var getFileExtension = require("get-file-extension") /*id: 256745*/;
  let r = ["mp4", "flv", "wmv", "asf", "mkv", "avi", "rm", "rmvb", "mpg", "mpeg", "mov", "webm", "m4v"];
  let o = e => e && e instanceof Blob ? r.includes(getFileExtension.getFileExtension(e.name).toLowerCase()) : typeof e == "string" ? r.includes(getFileExtension.getFileExtension(e).toLowerCase()) : undefined;
  let s = ["mp3", "m4a", "wav", "ogg", "aac", "ac3"];
  let l = e => e && e instanceof Blob ? s.includes(getFileExtension.getFileExtension(e.name).toLowerCase()) : typeof e == "string" ? s.includes(getFileExtension.getFileExtension(e).toLowerCase()) : undefined;
  let c = ["pdf", "docx", "doc", "jpg", "jpeg", "png", "csv", "xlsx", "xls", "txt", "pptx", "ppt", "md", "mobi", "epub"].concat(r).concat(s);
  let d = function (e = "", i = "", t = "") {
    let r = t || getFileExtension.getFileExtension(e) || getFileExtension.getFileExtension(i || "");
    return c.includes(r) || codeAssistantFileValidator.getCodeFileTypes(e) || codeAssistantFileValidator.getCodeFileTypes(i);
  };
  require.d(exports, {
    isSupportedFile: function () {
      return d;
    },
    isAudioFile: function () {
      return l;
    },
    isVideoFile: function () {
      return o;
    }
  });
}