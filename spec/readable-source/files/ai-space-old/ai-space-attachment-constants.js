// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZZ' to 'attachmentMimeTypes'
// - Renamed export 'cj' to 'spaceSceneIds'
// - Renamed export 'kZ' to 'attachmentTypes'
// - Renamed export 'wV' to 'attachmentTypeNames'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-old.e5490b46.js
         * chunkId: 2262
         * moduleId: 241695
         */
module.exports = function (module, exports, require) {
  var n;
  var aiSpaceAttachmentTypes = require("ai-space-attachment-types") /*id: 376069*/;
  (n = {}).COMMON_IMAGE = "image/png, image/jpeg, image/jpg";
  n.ALL_IMAGE = "image/*";
  n.VIDEO = "video/*";
  n.ALL = "*";
  let r = n;
  let o = {
    Image: aiSpaceAttachmentTypes.AttachmentTypes.Image,
    File: aiSpaceAttachmentTypes.AttachmentTypes.File,
    Video: aiSpaceAttachmentTypes.AttachmentTypes.Video
  };
  let l = {
    [aiSpaceAttachmentTypes.AttachmentTypes.Image]: "image",
    [aiSpaceAttachmentTypes.AttachmentTypes.File]: "object",
    [aiSpaceAttachmentTypes.AttachmentTypes.Video]: "video"
  };
  let s = {
    FEEDBACK: "20",
    BOT_CHAT: "5",
    AI_SPACE: "19"
  };
  require.d(exports, {
    attachmentMimeTypes: function () {
      return r;
    },
    spaceSceneIds: function () {
      return s;
    },
    attachmentTypes: function () {
      return o;
    },
    attachmentTypeNames: function () {
      return l;
    }
  });
}