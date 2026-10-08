// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'w' to 'getSupportedFileExtensions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: coding-skill-chat-input.5642b6e3.js
         * chunkId: 18383
         * moduleId: 79808
         */
module.exports = function (module, exports, require) {
  var codeAssistantFileValidator = require("code-assistant-file-validator") /*id: 771278*/;
  var fileTypeDetectionUtils = require("file-type-detection-utils") /*id: 393072*/;
  var imageUploadSettingCheck = require("image-upload-setting-check") /*id: 795291*/;
  function r(e) {
    let t = imageUploadSettingCheck.canUploadImage();
    let {
      supportedCodeFileTypesInFree: n
    } = codeAssistantFileValidator.validateFileName();
    if (!e) {
      n = [];
    }
    if (t) {
      return [...fileTypeDetectionUtils.imageExtensions, ...n, "png", "jpeg", "jpg", "webp"];
    } else {
      return [...fileTypeDetectionUtils.imageExtensions, ...n];
    }
  }
  require.d(exports, {
    getSupportedFileExtensions: function () {
      return r;
    }
  });
}